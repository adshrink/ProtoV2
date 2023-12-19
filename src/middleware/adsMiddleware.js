import { getNestedObj, capitalizeFirstLetter, consoleLOG_color_font_size } from "../services";

import { DIV_ContainerSteps, DIV_MessageSuccess, BUTTON_Step, BUTTON_StepCompleted, BUTTON_Step_setLoadingState } from "../ui/steps";

import ErrorBoundary from "../errorComponent";
import FinalMiddleware from "./finalMiddleware";

export default class AdsMiddleware extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            ready: false,
            // component
            current_step: -1, // You would typically get this from props or an API
            user_step_track: {}, // how many clicks for step

            // user props, empty at start
            user_required_steps: [
                { type: "link", icon: "fas fa-link" },
                { type: "articles", icon: "fas fa-newspaper" },
                { type: "user_defined", icon: "fas fa-download", other_prop: "bla" },
                //... other steps
                {type: "direct_link", icon: "fas fa-link", url: "https://www.google.com"},
                {type: "script", icon: "fas fa-link", url: "https://www.google.com"},
                {type: "forced_cpa", icon: "fas fa-link", url: "https://www.google.com"},
                {type: "banner_modal", icon: "fas fa-link", url: "https://www.google.com"},
                {type: "social_action", icon: "fas fa-youtube", url: "https://www.youtube.com/channel/${channelId}?sub_confirmation=1"},
            ],

            // default steps: articles
        }

        /**
         * [key]: {
         *  enabled: BOOLEAN, this will define if the ad is enabled or not, so the system compute a logic to show it or not using props parameters 
         *  dynamic: BOOLEAN,
         *  name: "text",
         *  default_text: "text",
         *  default_icon: "icon",
         *  default_description: "description",
         *  default_timer: 7000
         * }
         */
        this.DEFAULT_ADS = {
            link: { enabled: false, dynamic: true, name: "link", default_timer: 1000, default_text: "Dynamic User Text", default_icon: "fas fa-link", default_description: "Allow Tab Openings" },
            articles: { enabled: false, name: "articles", default_timer: 7000, default_text: "Discover Articles", default_icon: "fas fa-newspaper", default_description: "Click on the article only if interested" },
            searches: { enabled: false, name: "searches", default_timer: 7000, default_text: "Discover Related Searches", default_icon: "fas fa-search", default_description: "Search only if interested" },
            popup: { enabled: false, name: "popup", default_timer: 7000, text: "Explore new opportunites", default_icon: "fas fa-special", default_description: "Allow Popups" },
            user_defined: { enabled: true, dynamic: true, name: "user_defined", default_timer: 2000, default_text: "Dynamic Text", default_icon: "fas fa-download" },
        };

    }

    componentDidMount() {

    }

    shouldComponentUpdate(nextProps, nextState) {
        if (this.props !== nextProps)
            return true;
        /** state managment */
        if (this.state !== nextState) {
            /** this will update the rendered page only if the currect_step is chaging */
            if (this.state.current_step !== nextState.current_step)
                return true;
        }

        return false;
    }

    componentDidUpdate(prevProps, prevState) {
        if (this.props.ads_filter !== prevProps.ads_filter) {
            /** adsMiddleware.js - enable or disable STEPS ads */
            this.DEFAULT_ADS_enable();
        }
    }

    DEFAULT_ADS_enable = () => {
        const { $COUNTRY, $DEVICE, $GRADE_QUALITY_TRAFFIC, $GRADE_QUALITY_TRAFFIC_ADVANCED, $HIGH_QUALITY_TRAFFIC, $LOW_QUALITY_TRAFFIC, $MID_QUALITY_TRAFFIC, $MOBILE, $TIER_TRAFFIC } = getNestedObj(() => this.props.ads_filter, false);

        Object.entries(this.DEFAULT_ADS).forEach(([adName, adJson]) => {
            let AD_FUNCTION_NAME = `isEligibleFor${capitalizeFirstLetter(adName)}`; // e.g. isEligibleFor${Articles}
            let AD_FUNCTION_NAME_exists = typeof this[AD_FUNCTION_NAME] === 'function';

            adJson.scan = true;

            if (!AD_FUNCTION_NAME_exists)
                return;

            if (AD_FUNCTION_NAME_exists)
                adJson.enabled = this[AD_FUNCTION_NAME]();

        });

        consoleLOG_color_font_size(this.DEFAULT_ADS, 'green', '20px');
    }

    /** modal with taboola */
    isEligibleForArticles = () => {
        if (!this.DEFAULT_ADS.articles.enabled)
            return false;
        // Articles can be shown only if TABOOLA enabled
        return getNestedObj(() => this.props.ads_filter.taboola.enabled, false);
    };

    isEligibleForSearches = () => {
        if (!this.DEFAULT_ADS.searches.enabled)
            return false;
        // Searches can be shown only if grade A and B but only TIER1
        return getNestedObj(() => this.props.ads_filter.inhouse.enabled, false);
    };

    isEligibleForPopup = () => {
        let { $LOW_QUALITY_TRAFFIC, $MID_QUALITY_TRAFFIC, $HIGH_QUALITY_TRAFFIC } = this.props.ads_filter || false;

        if ($HIGH_QUALITY_TRAFFIC || $MID_QUALITY_TRAFFIC || $LOW_QUALITY_TRAFFIC)
            return true;

        return false;
    }

    isEligibleForLink = () => {
        if (!this.DEFAULT_ADS.link.enabled)
            return false;

        return this.isEligibleForPopup();
    }

    /** choose the best option for banners */
    BANNER = () => {
        const { $COUNTRY, adsense, yandex } = this.props.ads_filter || false;

        let ENABLED_adsense = getNestedObj(() => adsense.enabled, false);
        let ENABLED_yandex = getNestedObj(() => yandex.enabled, false);

        if (ENABLED_yandex && $COUNTRY === 'RU')
            return 'yandex';
        if (ENABLED_adsense)
            return 'adsense';

        return 'empty';
    }

    /**
     * 
     * @param {*} BOOL_return 
     * @returns Boolean value if the user is doing a step or the step number
     */
    STEP_going_on = (BOOL_return = false) => {
        let CURRENT_STEP = getNestedObj(() => this.state.current_step, false); // adding || false -> when current_step === 0 will return BOOLEAN FALSE

        CURRENT_STEP = parseInt(CURRENT_STEP);

        if (isNaN(CURRENT_STEP))
            return BOOL_return ? false : -1;

        if (typeof CURRENT_STEP === 'boolean')
            return BOOL_return ? false : -1;

        if (typeof CURRENT_STEP === 'number' && CURRENT_STEP < 0)
            return BOOL_return ? false : CURRENT_STEP;

        return BOOL_return ? true : CURRENT_STEP;
    }

    /** if STEP RUNNING and CLICK or OTHER that isnt a "COMPLETED" one RETURN FALSE */
    STEP_completed = (index, key) => {
        let step = this.STEP_going_on();
        let goingon = this.STEP_going_on(true); // if the visitor is doing another step (TRUE) otherwhise (FALSE)

        if (goingon && step !== index)
            return false;

        let canProceed = (goingon && key === 'completed') || (!goingon && key !== 'completed');

        return canProceed;
    }

    STEP_status = (index) => {
        return getNestedObj(() => this.state.user_step_track[index].completed, false);
    };

    STEPS_global_status = () => {
        const { user_required_steps, user_step_track } = this.state || {};

        // Filter only enabled steps from user_required_steps
        const ENABLED_required_steps = Object.keys(user_required_steps).filter(key_user_required_steps_object => {
            let user_required_steps_object = user_required_steps[key_user_required_steps_object];

            return this.DEFAULT_ADS[user_required_steps_object.type] && this.DEFAULT_ADS[user_required_steps_object.type].enabled
        });

        let LENGHT_user_required_steps = Object.keys(ENABLED_required_steps).length || 0;
        let LENGHT_user_step_track = Object.keys(user_step_track).length || 0;

        // Check if ad_steps is empty
        if (LENGHT_user_step_track < LENGHT_user_required_steps)
            return false;

        return Object.values(user_step_track).every(step => step.completed);
    }

    /**
     * 
     * @param {*} index 
     * 
     * when the user will click on the button to start the step,
     */
    on_click_on_ad_step = (index, key = false) => {

        if (index < 0 || !key || !this.STEP_completed(index, key))
            return false;

        this.setState(prevState => {
            const currentStep = getNestedObj(() => prevState.user_step_track[index], {}) || {};
            let updatedValue;

            if (key === 'click') {
                /**
                 * {
                 *  click: N,
                 * }
                 * 
                 * (N || 0) + 1
                 */
                updatedValue = (currentStep[key] || 0) + 1;

                /** visualize */
                BUTTON_Step_setLoadingState(index);
            } else if (key === 'completed') {
                updatedValue = true;
            }

            /** 
             * click: N increment
             * completed: BOOLEAN false -> true NO REVERSE
             */
            return {
                current_step: (key === 'click' ? index : -1), // (key === 'click' ? true : (key === 'completed' ? false : prevState.completing_step)),
                user_step_track: {
                    ...prevState.user_step_track, // json: {0:{click: N, completed: BOOLEAN}, n+1:{click: N, completed: BOOLEAN}....}
                    [index]: {
                        ...currentStep, // json: {click: N, completed: BOOLEAN}
                        ...(key ? { [key]: updatedValue } : {}),
                    }
                }
            };
        });
    }

    /** RENDERING OF THE STEPS
     * plus Click Events
     */
    render_link_defined_steps = () => {
        const { user_required_steps, user_step_track, completing_step } = this.state;

        /** LOGIC */
        let STEP_going_on = this.STEP_going_on();

        /** STEPS MAP */
        const HTML_steps = user_required_steps.map((step, index) => {
            /** userStep = steps assigned to this user; userStep */
            const ad = { ...this.DEFAULT_ADS[step.type], ...step };

            let AD_enabled = getNestedObj(() => ad.enabled, false);
            let AD_icon = getNestedObj(() => step.icon) || getNestedObj(() => ad.default_icon) || 'fas fa-link';
            let AD_description = getNestedObj(() => step.description) || getNestedObj(() => ad.default_description) || 'Complete this step';
            let AD_text = getNestedObj(() => ad.dynamic, false) ? (getNestedObj(() => step.text) || getNestedObj(() => ad.default_text)) : (getNestedObj(() => ad.default_text) || 'Dynamic Step');
            /** PROGRAMMATIC */
            let AD_timer = getNestedObj(() => step.timer) || getNestedObj(() => ad.default_timer) || 7000;

            /** HTML */
            let CSS_button_status = (STEP_going_on === index ? 'loading' : (STEP_going_on !== -1 ? 'disabled' : ''));

            if (window.location.href.includes('localhost'))
                console.info("ADSHNK: render_link_defined_steps:", AD_enabled, AD_icon, AD_description, AD_text, AD_timer, CSS_button_status);

            const STEP_onClick = () => {
                this.on_click_on_ad_step(index, "click");

                /** set as COMPLETED after N seconds */
                setTimeout(() => {
                    this.on_click_on_ad_step(index, "completed");
                }, AD_timer);
            }

            if (!AD_enabled)
                return (<></>);

            return (
                <>
                    {/** if STEP completed or not */}
                    {this.STEP_status(index) ?
                        BUTTON_StepCompleted({ index, user_required_steps, STEP_onClick, AD_text })
                        :
                        BUTTON_Step({ index, user_required_steps, STEP_onClick, AD_icon, AD_text, AD_description, CSS_button_status })
                    }
                </>
            )
        });

        let HTML_global_status = this.STEPS_global_status() ? this.FINAL_() : HTML_steps;

        return (
            DIV_ContainerSteps({ HTML_global_status, user_step_track })
        );
    }

    FINAL_ = () => {
        return (
            <ErrorBoundary>
                <FinalMiddleware
                    ads_filter={this.props.ads_filter}>
                    {DIV_MessageSuccess()}
                </FinalMiddleware>
            </ErrorBoundary>
        )
    }

    STEPS = () => {
        return this.render_link_defined_steps();
    }

    render() {
        const { grade, tier, view } = this.props;

        const { user_steps, user_step_track } = this.state;

        return (
            <div ads-filter={1}>

                {React.Children.map(this.props.children, child => {

                    // Clone the child and pass the new steps as props
                    return React.cloneElement(child, {
                        banner: this.BANNER(),
                        steps: this.STEPS(),
                        user_step_track: user_step_track
                    });
                })}

            </div>
        );


    }
}