import * as COSTANTS from "../constants";

import { getNestedObj, getCookie, setCookie, getDevice, _postElaborate_getSettings } from "../services";

import { recaptcha_v2_block_page } from "../ui/recaptcha";

// VPN, recaptchav3, adblock filter
export default class TrafficFilter extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            // DEBUG // default
            $override: {
                ENABLED_recaptcha_v2: false,
                ENABLED_adscore: false
            },
            // actions
            RecaptchaV2Required: false,
            AdscoreRequired: false,
            // post actions
            RecaptchaV2Completed: 0,
            AdscoreCompleted: 0,
            // parameters 
            isVpn: false,
            isIABReject: false,
            isMobile: false,
            isHuman: false,
            isIncognito: false,
            GoogleRecaptchaV3Score: false,
            connection: false,
            // elements to print and update one shot
            recaptcha_v2_block_page: 0,
            // requests list
            requests: null
        }

        // endpoints
        /** adscore */
        this.adscore = {
            key: "QrCXAAAAAAAAQS8B6tSAeOiLaCMe3MfUDtE30mY",
            endpoint: {
                url: "https://www.shrink-service.it/v3/api/prototype/adscore",
                data: {
                    signature: false,
                    referrer: getNestedObj(() => window.document.referrer, false),
                    host: getNestedObj(() => window.location.host, false)
                }
            }
        }

        // refs
        this.recaptcha_v2_block_page = React.createRef();
    }

    getNumberView = () => {
        function getNumberFromCookie(cookieName) {
            const cookieValue = getCookie(cookieName);
            return isNaN(cookieValue) ? 0 : parseInt(cookieValue, 10);
        }

        let COOKIE_request_number = getNumberFromCookie(COSTANTS.COOKIE.request_counter) || 0;
        let COOKIE_view_number = getNumberFromCookie(COSTANTS.COOKIE.view_counter) || 0;

        return {
            requests: COOKIE_request_number,
            views: COOKIE_view_number
        }
    }

    getTierInHouse(isoCode) {
        const tierM = _postElaborate_getSettings('searches.countries') || ['US', 'UK', 'CA', 'GB', 'DE', 'FR', 'JP', 'IT', 'ES', 'NL', 'SG', 'AU', 'SE', 'IE', 'NO', 'CH', 'BE', 'DK', 'FI', 'MX', 'AT', 'BR'];

        if (tierM.includes(isoCode))
            return true;

        return false;
    }

    getTier(isoCode) {
        // list of TIER1 country codes
        const tier1Countries = ['AU', 'AT', 'BE', 'CA', 'DK', 'FI', 'FR', 'DE', 'IE', 'IT', 'LU', 'NL', 'NZ', 'NO', 'ES', 'SE', 'CH', 'GB', 'US']
        const tier2Countries = ['AD', 'AR', 'BS', 'BY', 'BO', 'BA', 'BR', 'BN', 'BG', 'CL', 'CN', 'CO', 'CR', 'HR', 'CY', 'CZ', 'DO', 'EC', 'EG', 'EE', 'FJ', 'GR', 'GY', 'HK', 'HU', 'IS', 'ID', 'IL', 'JP', 'KZ', 'LV', 'LT', 'MO', 'MY', 'MT', 'MX', 'ME', 'MA', 'NP', 'OM', 'PA', 'PY', 'PE', 'PH', 'PL', 'PT', 'PR', 'QA', 'KR', 'RO', 'RU', 'SA', 'RS', 'SG', 'SK', 'SI', 'ZA', 'TH', 'TR', 'UA', 'AE', 'UY', 'VU']
        const tier3Countries = ['AL', 'DZ', 'AO', 'AM', 'AZ', 'BH', 'BD', 'BB', 'BZ', 'BJ', 'BW', 'BF', 'BI', 'KH', 'CM', 'CV', 'TD', 'KM', 'CG', 'SV', 'ET', 'GA', 'GE', 'GT', 'GN', 'HT', 'HN', 'IN', 'IQ', 'JM', 'JO', 'KE', 'KW', 'KG', 'LA', 'LB', 'LS', 'MK', 'MG', 'ML', 'MR', 'MU', 'MD', 'MN', 'MZ', 'NA', 'NI', 'NE', 'NG', 'PK', 'SN', 'LK', 'SR', 'SZ', 'TJ', 'TZ', 'TG', 'TT', 'TN', 'TM', 'UG', 'UZ', 'VN', 'ZM']

        if (tier1Countries.includes(isoCode)) {
            return 'TIER1';
        } else if (tier2Countries.includes(isoCode)) {
            return 'TIER2';
        } else if (tier3Countries.includes(isoCode)) {
            return 'TIER3';
        } else {
            return 'TIER4';
        }
    }

    ads() {

        let {
            RecaptchaV2Required, RecaptchaV2Completed, AdscoreRequired, AdscoreCompleted,
            isVpn, isIABReject, isMobile, isHuman, isIncognito, GoogleRecaptchaV3Score, connection
        } = this.state || false;

        let { country } = getNestedObj(() => this.props.visitorData, false) || false;

        function parseBoolean(str) {
            if (str === 'true') return true;
            if (str === 'false') return false;
            return str;
        }

        // Data validation
        if (typeof RecaptchaV2Required !== 'boolean') RecaptchaV2Required = parseBoolean(RecaptchaV2Required);
        if (typeof RecaptchaV2Completed !== 'number') RecaptchaV2Completed = parseInt(RecaptchaV2Completed);
        if (typeof AdscoreRequired !== 'boolean') AdscoreRequired = parseBoolean(AdscoreRequired);
        if (typeof AdscoreCompleted !== 'number') AdscoreCompleted = parseInt(AdscoreCompleted);
        if (typeof isVpn !== 'boolean') isVpn = parseBoolean(isVpn);
        if (typeof isIABReject !== 'boolean') isIABReject = parseBoolean(isIABReject);
        if (typeof isMobile !== 'boolean') isMobile = parseBoolean(isMobile);
        if (typeof isHuman !== 'boolean') isHuman = parseBoolean(isHuman);
        if (typeof isIncognito !== 'boolean') isIncognito = parseBoolean(isIncognito);
        if (typeof connection !== 'string') connection = '3g';

        GoogleRecaptchaV3Score = parseFloat(GoogleRecaptchaV3Score) || 0;

        let isTaskDone = (required, completed) => {
            if (!required)
                return true;
            return required && (completed == 1);
        }

        const GENERAL = true
            && isTaskDone(RecaptchaV2Required, RecaptchaV2Completed)
            && isTaskDone(AdscoreRequired, AdscoreCompleted);

        let SCORE = false;

        if (GoogleRecaptchaV3Score >= 0.7 && GoogleRecaptchaV3Score < 0.9)
            SCORE = isTaskDone(true, AdscoreCompleted);
        else if (GoogleRecaptchaV3Score >= 0.9)
            SCORE = true;

        /** fixed, mean that isnt a step and should be visible always */
        const adsense = () => {
            return GENERAL && SCORE && !isVpn;
        }

        /** possible also fixed, static in page as banner but used as step */
        const taboola = () => {
            return GENERAL && SCORE && !isVpn;
        }

        /** possible also fixed, static in page as banner but used as step */
        const yandex = () => {
            return GENERAL;
        }

        const inhouse = () => {
            return GENERAL && SCORE && this.getTierInHouse(country);
        }

        /**
         * 
         * @returns GRADE
         * 
         * A: RecatpchaV2 Done, score 0.9, no VPN
         * B: RecatpchaV2 Done, score 0.9, VPN
         * B1: RecatpchaV2 Done, score 0.9, VPN, Incognito
         * C: RecatpchaV2 Done and AdScoreDone, score 0.7-0.9, VPN
         * C1: RecatpchaV2 Done and AdScoreDone, score 0.7-0.9, VPN, Incognito
         * 
         */
        const GRADE = () => {
            return (GENERAL && SCORE && !isVpn) ? 'A' : (GENERAL && SCORE) ? 'B' : (GENERAL) ? 'C' : 'D'; // quality GRADE (A:good, B: good with VPN, C: probably BOT and bad VPN, D: BOT)
        }

        const GRADE1 = () => {
            return (GENERAL && SCORE && !isVpn && !isIncognito) ? 'A' : (GENERAL && SCORE && !isIncognito) ? 'B' : (GENERAL && SCORE && isIncognito) ? 'B1' : (GENERAL && !isIncognito) ? 'C' : (GENERAL && isIncognito) ? 'C1' : 'D';
        }

        const TIER = () => {
            return this.getTier(country);
        }

        const VIEW = () => {
            return this.getNumberView();
        }

        const DEVICE = () => {
            return getDevice();
        }

        const MOBILE = () => {
            return Boolean(isMobile);
        }

        return {
            $COUNTRY: country,
            $MOBILE: MOBILE(),
            $DEVICE: DEVICE(),
            $VIEW_QUALITY: VIEW(),
            $TIER_TRAFFIC: TIER(),
            $GRADE_QUALITY_TRAFFIC: GRADE(),
            $GRADE_QUALITY_TRAFFIC_ADVANCED: GRADE1(),
            $LOW_QUALITY_TRAFFIC: GENERAL, // usefull to understand if other ads expect these are good to be shown (VPN and NO SCORE)
            $MID_QUALITY_TRAFFIC: GENERAL && SCORE, // usefull to understand if other ads expect these are good to be shown
            $HIGH_QUALITY_TRAFFIC: GENERAL && SCORE && !isVpn, // usefull to understand if other ads expect these are good to be shown (NO VPN)
            adsense: {
                enabled: adsense(),
                id: "ca-pub-0000000000000000"
            },
            taboola: {
                enabled: taboola(),
                id: "0000000",
                mode: "thumbnails-a",
                placement: "Below Article Thumbnails",
                container: "taboola-below-article-thumbnails",
                target_type: "mix"
            },
            yandex: {
                enabled: yandex(),
                blockId: "R-A-2468309-1",
                renderTo: "yandex_rtb_R-A-2468309-1"
            },
            inhouse: {
                enabled: inhouse(),
            },
        }
    }

    run() {
        const {
            isVpn,
            isIABReject,
            isMobile,
            isHuman,
            isIncognito,
            GoogleRecaptchaV3Score,
            connection
        } = getNestedObj(() => this.props) || false;

        const { ENABLED_recaptcha_v2 = false, ENABLED_adscore = false } = getNestedObj(() => this.state.$override) || false;

        let FLOAT_GoogleRecaptchaV3Score = parseFloat(GoogleRecaptchaV3Score) || 0;

        let _RecaptchaV2Required = false;
        let _AdscoreRequired = false;

        let setRecaptchaV2Required = (value) => {
            if (_RecaptchaV2Required || value) {
                _RecaptchaV2Required = true;
            }
        };

        let setAdscoreRequired = (value) => {
            if (_AdscoreRequired || value) {
                _AdscoreRequired = true;
            }
        };

        if (FLOAT_GoogleRecaptchaV3Score < 0 || (FLOAT_GoogleRecaptchaV3Score >= 0 && FLOAT_GoogleRecaptchaV3Score < 0.7)) {
            setRecaptchaV2Required(true);
        } else if (FLOAT_GoogleRecaptchaV3Score >= 0.7 && FLOAT_GoogleRecaptchaV3Score < 0.9) {
            setRecaptchaV2Required(true);
            setAdscoreRequired(true);
        }

        if (isVpn || isIncognito || isIABReject) {
            setRecaptchaV2Required(true);
        }

        let getRecaptchaV2Required = () => _RecaptchaV2Required && ENABLED_recaptcha_v2;
        let getAdscoreRequired = () => _AdscoreRequired && ENABLED_adscore;

        return {
            RecaptchaV2Required: getRecaptchaV2Required(),
            AdscoreRequired: getAdscoreRequired()
        };
    }

    componentDidMount() {

        const { RecaptchaV2Required: BOOLEAN_REQUIRED_RecaptchaV2Required, AdscoreRequired: BOOLEAN_REQUIRED_Adscore } = this.run() || false;

        this.setState({
            //actions
            RecaptchaV2Required: BOOLEAN_REQUIRED_RecaptchaV2Required,
            AdscoreRequired: BOOLEAN_REQUIRED_Adscore,
            // parameters
            isVpn: getNestedObj(() => this.props.isVpn, false),
            isIABReject: getNestedObj(() => this.props.isIABReject, false),
            isMobile: getNestedObj(() => this.props.isMobile, false),
            isHuman: getNestedObj(() => this.props.isHuman, false),
            isIncognito: getNestedObj(() => this.props.isIncognito, false),
            GoogleRecaptchaV3Score: getNestedObj(() => this.props.GoogleRecaptchaV3Score, false),
            connection: getNestedObj(() => this.props.connection, false)
        });

        // current check if referred element in DOM && execute
        this.recaptcha_v2_block_page.current && this.after_render_recaptcha_v2_block_page(true);
    }

    shouldComponentUpdate(nextProps, nextState) {

        if (this.props !== nextProps)
            return true;

        if (this.state.state !== nextState) {

            let { adscore: REQUEST_adscore = false, adscore_verify: REQUEST_adscore_verify = false } = getNestedObj(() => this.state.requests, {}) || {};

            console.table({
                REQUEST_adscore, REQUEST_adscore_verify, this_state: this.state.AdscoreRequired, next_state: nextState.AdscoreRequired
            })
            /** REQUESTS */
            if (
                this.state.AdscoreRequired !== nextState.AdscoreRequired
                && nextState.AdscoreRequired
                && !REQUEST_adscore && !REQUEST_adscore_verify
            ) {
                /** run adscore request */ this.request_adscore();
            }

            return true;
        }

        return false;

    }

    componentDidUpdate(prevProps, prevState) {

        const { recaptcha_v2_block_page } = this.state || false;

        if (
            this.recaptcha_v2_block_page.current /** DOM elements */
            && recaptcha_v2_block_page == 0 /** DOM elements (recaptcha_v2_block_page) updated 0 times */
        ) {
            /** render */ this.recaptcha_v2_block_page.current && this.after_render_recaptcha_v2_block_page(); // current check if referred element in DOM && execute - after any update
            return true;
        }

        /** REQUESTS */
        if (
            this.state.requests !== prevState.requests // REQUESTS // useful onyl stored in state but no DOM updated needed
            || this.state.recaptcha_v2_block_page !== prevState.recaptcha_v2_block_page  // DOM elements // dont update the render of elements otherwise goes in loop
        )
            return false;


        return true;
    }

    // update requests done in this component
    updateRequests = (key, value) => {
        this.setState(prevState => ({
            requests: {
                ...prevState.requests,
                [key]: value
            }
        }));
    };

    after_render_recaptcha_v2_block_page = (first = false) => {

        const { recaptcha_v2_block_page } = this.state || false;

        // Run JavaScript code after rendering
        // Access the printed element using DOM manipulation if needed
        const printedElement = document.getElementById('recaptcha_v2_block_page');
        // Perform any necessary operations on the printed element
        window.lli.update();

        // print recaptcha
        if (recaptcha_v2_block_page == 0) {
            /** event */
            ga('send', 'event', 'Page', 'middleware', 'recaptcha_v2_requried');

            /** render */
            this.render_recaptcha_v2();
        }

        // set state "recaptcha_v2_block_page" to N+ , each time that the component is refreshed
        this.setState(prevState => ({
            recaptcha_v2_block_page: prevState.recaptcha_v2_block_page + 1
        }));

        return true; // tell to update
    }

    render_recaptcha_v2() {

        if (!grecaptcha)
            return false;

        const that = this;

        const { captcha_class: DIVNAME, pk_recaptcha: KEY_RECAPTCHA_V2 } = getNestedObj(() => window.___reactjsD, false);

        const set_as_completed = () => {
            /** event */
            ga('send', 'event', 'Page', 'middleware', 'recaptcha_v2_completed');

            /** set completed as state */
            this.setState({
                RecaptchaV2Completed: 1
            });

            /** cookies */
        }

        grecaptcha.ready(() => {

            grecaptcha.render(document.getElementById(DIVNAME), {
                sitekey: KEY_RECAPTCHA_V2,
                callback: function (event) {
                    /** function */ set_as_completed();
                    /** requests */ that.updateRequests('recaptcha_v2', event);
                }
            });

        });
    }

    request_adscore() {

        const that = this;

        const { userid } = getNestedObj(() => this.props.linkData, false);

        if (!window.hasOwnProperty('AdscoreInit'))
            return false;

        const set_as_good = () => {
            /** event */
            ga('send', 'event', 'Page', 'middleware', 'adscore_completed');
            ga('send', 'event', 'User', 'middleware', 'v3_score_0_7_adscore_good', 0);

            /** set completed as state */
            that.setState({
                AdscoreCompleted: 1
            });

            /** switch parameters */
            that.switch_page_level_ads(true);

            return true;
        }

        const set_as_bad = () => {
            /** event */
            ga('send', 'event', 'Page', 'middleware', 'adscore_completed');
            ga('send', 'event', 'User', 'middleware', 'v3_score_0_7_adscore_bad', 0);

            /** set completed as state */
            that.setState({
                AdscoreCompleted: -1
            });

            /** switch parameters */
            that.switch_page_level_ads(false);

            return false;
        }

        window.AdscoreInit(this.adscore.key, {
            sub_id: userid,
            callback: function (result) {
                /** requests */ that.updateRequests('adscore', result);

                // response
                let { signature, error } = result || false;

                signature = ("" + signature).toString() || "";
                error = parseInt(error) || 0;

                // if any adscore error should return as bot 
                if (error > 0) {
                    /** event */
                    ga('send', 'event', 'Page', 'middleware', 'adscore_error > 0');

                    // bad
                    return set_as_bad();
                }

                // fullfil the signature
                that.adscore.endpoint.data.signature = signature;

                fetch(that.adscore.endpoint.url, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(that.adscore.endpoint.data)
                }).then(async (res) => {
                    /** res JSON */ res = await res.json() || { success: false, manual_trigger: true };
                    /** requests */ that.updateRequests('adscore_verify', res);

                    /**
                     * good
                     * @facts
                     */
                    if (res && res.success)
                        return set_as_good();
                    else
                        throw new Error('Impossible to get the response from the server');
                }).catch((error) => {
                    return set_as_bad();
                });

            }
        });

        return true;
    }

    /**
     * 
     * @param {*} enable 
     * @returns 
     * 
     * ADSENSE, TABOOLA, ETC-MP...
     */
    switch_page_level_ads(enable = false) {
        if (!enable) {
            // ads
            _adshrink.enabled.adsense = false;
            _adshrink.enabled.taboola = false;
            // requests done
            _adshrink.userStatus.adScore = true

            // DOM changes
            $('#goog_loader_script, #tb_loader_script').remove();

            // events
            ga('send', 'event', 'Annunci', 'banner_removed', 'Because bad traffic', 0);

            return false;
        }

        // ads
        _adshrink.enabled.adsense = true;
        _adshrink.enabled.taboola = true;

        // requests done
        _adshrink.userStatus.adScore = false

        // properties
        const { userid } = getNestedObj(() => this.props.linkData, false);

        if (window.hasOwnProperty('adsbygoogle')) {
            /**
             * AUTOMATIC ADS GOOGLE
             */
            (adsbygoogle = window.adsbygoogle || []).push({
                google_ad_client: getNestedObj(() => window._adshrink.adsbygoogle_settings.capub, false),
                params: {
                    google_ad_channel: userid
                },
                enable_page_level_ads: true,
            });

        }

        return true;
    }

    should_user_verify_itself = () => {

        let { RecaptchaV2Required, RecaptchaV2Completed, AdscoreRequired, AdscoreCompleted } = this.state || false;

        let isTaskNeeded = (required, completed) => {
            return required && (completed == 0);
        }

        /** DEBUG */
        let RecaptchaV2 = isTaskNeeded(RecaptchaV2Required, RecaptchaV2Completed);
        let Adscore = isTaskNeeded(AdscoreRequired, AdscoreCompleted);

        let VERIFY_PAGE_NEEDED = RecaptchaV2 || Adscore;

        // if recaptcha v2 reqested because negative behaivour detected
        if (
            VERIFY_PAGE_NEEDED
        ) {

            return recaptcha_v2_block_page({
                ref: this.recaptcha_v2_block_page
            });

        } else {

            // print sub elements 
            return React.Children.map(this.props.children, child => {
                if (child.type.name === "AdsMiddleware") {
                    // Add additional prop only to SemanticUiResponsive component
                    return React.cloneElement(child, { ads_filter: this.ads() });
                } else {
                    return child;
                }
            })

        }

    }

    render() {
        return (
            <React.Fragment>
                {this.should_user_verify_itself()}
            </React.Fragment>

        )
    }

}