import {
    wpo,
    getNestedObj
} from './../services';

const WPO = wpo();
// adsense
const ADSENSE_SETTINGS = getNestedObj(() => window._adshrink.adsbygoogle_settings, {});
const ADSENSE_ENABLED = getNestedObj(() => window._adshrink.enabled.adsense, false);
// adsh 
const ADSH_USER_ID = getNestedObj(() => window[___reactjsD.o]?.uid, 1) || 1;

const ADSBYGOOGLE = {
    google_ad_client: getNestedObj(() => ADSENSE_SETTINGS.capub, ""),
    params: {
        google_ad_channel: ADSH_USER_ID
    }
}

export default class AdsenseBanner extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            div: '',
            display: 'to_check',
            script: {
                adsense: false
            }
        }

        this.onCheckParentDiv = this.onCheckParentDiv.bind(this);


    }

    componentDidMount() {

        if (ADSENSE_ENABLED) {

            if (window.hasOwnProperty('adsbygoogle')) {
                (adsbygoogle = window.adsbygoogle || []).push(ADSBYGOOGLE);
            }

        }

        console.table({
            from: this.props,
            window: window._adshrink.adsbygoogle_settings,
            ADSENSE_SETTINGS: ADSENSE_SETTINGS,
            ADSBYGOOGLE: ADSBYGOOGLE,
            UID: window[___reactjsD.o]?.uid,
            WPO: WPO
        });

    }

    shouldComponentUpdate(nextProps, nextState) {

        if (nextState.script !== this.state.script) {
            return true;
        } if (nextState.div !== this.state.div) {
            return true;
        } return false;

    }

    componentDidUpdate(nextProps, nextState) {

        const { div, display, script } = this.state || 'none';

        if (nextState.script !== this.state.script) {

            if (ADSENSE_ENABLED && window.hasOwnProperty('adsbygoogle')) {
                //alert('loADED');
                (adsbygoogle = window.adsbygoogle || []).push(ADSBYGOOGLE);
            }

        }

        if (nextState.div !== div) {

            this.onCheckParentDiv();

        }

    }

    onCheckParentDiv() {

        const { div } = this.state || 'na';

        if (isEmpty($('#' + div)))
            return false;

        //const parent_dataset = $('#box_adgoog_' + div).parent()[0].dataset;

        const parent_display = $('#box_adgoog_' + div).parent().css('display');

        //this.state({ display: parent_display });

        if (ADSENSE_ENABLED && parent_display === 'block') {

            (adsbygoogle = window.adsbygoogle || []).push(ADSBYGOOGLE);

        }

    }

    render() {

        const { size } = this.props || [];

        const { div } = this.state || 'na';

        //data-ad-format="auto"
        //data-full-width-responsive="true"

        return (

            <React.Fragment>

                <div id={"box_adgoog_"}>

                    <style>{" \
                    .ui[class*='half page'].ad { margin-left: calc(50% - 150px) !important; position: relative !important; } \
                    .ui[class*='medium rectangle'].ad { margin-left: calc(50% - 150px) !important; position: relative !important; } \
                "}</style>

                    {size === 'medium_rectangle' && ADSENSE_ENABLED &&

                        <div className="ui medium rectangle ad">

                            <ins className="adsbygoogle"
                                style={{ display: "inline-block", width: "300px", height: "250px" }}
                                data-ad-client={window._adshrink.adsbygoogle_settings.capub}
                                data-ad-slot={window._adshrink.adsbygoogle_settings.formats.square}
                                data-ad-channel={window[___reactjsD.o]?.uid}></ins>

                        </div>

                    }

                    {size === 'medium_rectangle_responsive' && ADSENSE_ENABLED &&

                        <div >

                            <ins className="adsbygoogle"
                                style={{ display: "block" }}
                                data-ad-client={window._adshrink.adsbygoogle_settings.capub}
                                data-ad-slot={window._adshrink.adsbygoogle_settings.formats.squareresponsive}
                                data-ad-format="auto"
                                data-full-width-responsive="true"
                                data-ad-channel={window[___reactjsD.o]?.uid}></ins>

                        </div>

                    }

                    {size === 'half_page' && ADSENSE_ENABLED &&

                        <div className="ui half page ad" style={{ margin: "0 auto" }}>
                            <ins className="adsbygoogle"
                                style={{ display: "inline-block", width: "300px", height: "600px" }}
                                data-ad-client={window._adshrink.adsbygoogle_settings.capub}
                                data-ad-slot={window._adshrink.adsbygoogle_settings.formats.sky}
                                data-ad-channel={window[___reactjsD.o]?.uid}></ins>
                        </div>

                    }

                    {size === 'half_page_responsive' && ADSENSE_ENABLED &&

                        <div style={{ margin: "0 auto" }}>
                            <ins className="adsbygoogle"
                                style={{ display: "block", minHeight: "600px", margin: "0 auto" }}
                                data-ad-client={window._adshrink.adsbygoogle_settings.capub}
                                data-ad-slot={window._adshrink.adsbygoogle_settings.formats.skyresponsive}
                                data-ad-format="vertical"
                                data-full-width-responsive="true"
                                data-ad-channel={window[___reactjsD.o]?.uid}></ins>
                        </div>

                    }

                    {size === 'leaderboard' && ADSENSE_ENABLED &&

                        <div className="ui leaderboard ad" style={{ margin: "0 auto" }}>
                            <ins className="adsbygoogle"
                                style={{ display: "inline-block", width: "728px", height: "90px" }}
                                //style={{display:"block"}}
                                data-ad-client={window._adshrink.adsbygoogle_settings.capub}
                                data-ad-slot={window._adshrink.adsbygoogle_settings.formats.leaderboard}
                                //data-full-width-responsive="true"
                                //data-ad-format="auto"
                                data-ad-channel={window[___reactjsD.o]?.uid}></ins>
                        </div>

                    }

                    {size === 'plotly' && ADSENSE_ENABLED &&

                        <div className="ui custom ad">
                            <ins className="adsbygoogle"
                                style={{ display: "inline-block", width: "535px", height: "238px" }}
                                data-ad-client={window._adshrink.adsbygoogle_settings.capub}
                                data-ad-slot={window._adshrink.adsbygoogle_settings.formats.plotly}
                                data-ad-channel={window[___reactjsD.o]?.uid}></ins>
                        </div>

                    }

                </div>

                {ADSENSE_ENABLED &&
                    <br />
                }

            </React.Fragment>

        )

    }

}