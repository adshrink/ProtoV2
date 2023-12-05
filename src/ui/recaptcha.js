import { getNestedObj } from '../services'

import { CutDescriptionAndAppendLastPiece } from './simple/description'

export function recaptcha_v2_block_page({ ref }) {

    return (
        <React.Fragment>
            <div className="ui grid stackable">
                <div className="column">
                    <div
                        ref={ref}
                        id="recaptcha_v2_block_page"
                        className="ui grid stackable middle aligned lazy h100vh"
                        data-bg-multi="linear-gradient(to left ,rgb(248 249 250) 40%, rgb(248 249 250 / 0%)), url(https://i.ibb.co/WHNbxPZ/bot-analytics-hero-illustration-3-1.png)"
                        style={{
                            padding: "120px 0px",
                            backgroundColor: "#000000d6 !important",
                            width: "100% !important",
                            backgroundSize: "contain",
                            backgroundRepeat: "no-repeat",
                            margin: "5%",
                            backgroundPosition: "calc(50% + 50px) 50%",
                        }}
                    >
                        {/* Left Column */}
                        <div className="sixteen wide mobile eight wide tablet eight wide computer column">
                            <div class="custom-center-align">
                                <div id={getNestedObj(() => window.___reactjsD.captcha_class, "g-recaptcha")}>
                                    Loading..
                                </div>
                            </div>
                        </div>

                        {/* Right Column */}
                        <div className="sixteen wide mobile eight wide tablet eight wide computer column">
                            <div class="custom-center-align">
                                {image_card()}
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </React.Fragment>
    )
}

function card() {
    return (
        <div className="ui card">
            <div className="content">
                <div className="header">{"user"}</div>
                <div className="meta">Friend</div>
                <div className="description">
                    Elliot Fu is a film-maker from New York.
                </div>
            </div>
            <div className="extra content">
                <span className="right floated">
                    Joined in 2013
                </span>
                <span>
                    <i className="user icon"></i>
                    75 Friends
                </span>
            </div>
        </div>
    )
}

function image_card() {

    const SHRINK_TITLE = getNestedObj(() => window[___reactjsD.o].shrinktitle, "Adshnk Title") || "Adshnk Title";

    const {
        title: META_TITLE = "Adshnk Title",
        description: META_DESCRIPTION = "Unlock premium content and support your favorite creators with Adshnk Monetized Links! Gain access to exclusive articles, videos, and resources by simply clicking on our monetized links. Every click helps creators earn revenue, allowing them to continue producing high-quality content. Join our community and be a part of empowering creators while enjoying a seamless browsing experience. Click now and discover a world of premium content!",
        image: META_IMAGE = "https://www.shrink-service.it/png/search/preview_one.png",
        domain: META_DOMAIN = "https://example.com"
    } = getNestedObj(() => window[___reactjsD.o].metadata, {}) || {};

    return (
        <div className="ui card">
            <div className="image">
                <img alt="A lazy image"
                    className="lazy"
                    data-src={META_IMAGE}
                />
            </div>
            <div className="content">
                <a className="header">
                    {("" + (SHRINK_TITLE || META_TITLE)).toString().substr(0, 50) + "..."}
                </a>
                <div className="meta">
                    <span className="date">{META_DOMAIN}</span>
                </div>
                <div className="description">
                    <CutDescriptionAndAppendLastPiece
                        description={META_DESCRIPTION}
                        maxLength={50} />
                </div>
            </div>
            <div className="extra content">
                <a>
                    <i className="user icon"></i>
                    {"Username"}
                </a>
            </div>
        </div>
    )
}


/*
<React.Fragment>
<div className="ui grid stackable middle aligned lazy 100vh" data-bg-multi="linear-gradient(to left ,rgb(248 249 250) 40%, rgb(248 249 250 / 0%)), url(https://i.ibb.co/WHNbxPZ/bot-analytics-hero-illustration-3-1.png)" style={{ padding: "120px 0px", backgroundColor: "#000000d6 !important", width: "100% !important", backgroundSize: "contain", backgroundRepeat: "no-repeat", margin: "5%", backgroundPosition: "calc(50% + 50px) 50%" }} >
    <div className="eight wide column left aligned">

        <h2 className="ui header">
            🤖 One more step
            <div className="sub header">Please complete the security check</div>
        </h2>

        {this.state.vpninfo &&
            <ErrorBoundary>
                <ComponentVerifyBot pass={this.on_recaptcha_passed} />
            </ErrorBoundary>
        }

        {!this.state.vpninfo &&
            <h2 className="ui header">Loading ReCaptcha..</h2>
        }

        {!desktop_tablet &&
            <ErrorBoundary>
                <div><br /><b>Or</b><br /><br /></div>
                <TelegramBot data={data} dev={form_factor} stats={false} tupdates={getNestedObj(() => this.state.v3publicdata.anchoreth)} />
            </ErrorBoundary>
        }
    </div>

    <div className="eight wide column">
        <ErrorBoundary>
            <SemanticCard user={getNestedObj(() => this.state.user.username, false)} />
        </ErrorBoundary>
    </div>

</div>
<ErrorBoundary>
    <StickyBottomBar dev={form_factor} basic={basic} />
</ErrorBoundary>
</React.Fragment>

*/