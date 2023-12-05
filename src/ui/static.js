/** AFTER TRAFFIC FILTER AND RECAPTCHA */
export function Header(props) {


    let { dev, u } = props || false;

    return (

        <React.Fragment>

            <style>{"\
                        .gradient { background: #0052D4 !important; background: -webkit-linear-gradient(to left, #6FB1FC, #4364F7, #0052D4) !important; background: linear-gradient(to left, #6FB1FC, #4364F7, #0052D4) !important; }\
                        .logo-dim { width: 110px; !important } \
                    "}</style>

            <nav className="adshnk-fixed-navbar ui big top fixed menu compatct icon" id="center_jumbotron" data-html2canvas-ignore>
                <div className="item">
                    <img data-src="https://adshnk.com/wp-content/uploads/2021/10/adshnk.png" src="https://adshnk.com/wp-content/uploads/2021/10/adshnk.png" className="logo-dim lazy" style={{ width: '120px' }} />
                </div>

                {(dev === 'Desktop' || dev === 'Tablet') &&
                    <React.Fragment>

                        <div className="right menu">
                            <ModalComponentSaved u={u} />
                            <ComponentChangeLanguage />
                        </div>

                    </React.Fragment>

                }
            </nav>

            {dev && dev === 'Smartphone' &&
                <React.Fragment>
                    <div className="ui text menu" style={{ top: "60px", position: "relative" }}>
                        <div className="item">
                            <div className="ui dropdown" id="smartphone_menu_dropdown">
                                <div className="text"><i className="bars icon"></i> Explore</div>
                                <i className="dropdown icon"></i>
                                <div className="menu" style={{ backgroundColor: '#1c1d1e' }}>
                                    <div className="item">
                                        <ModalComponentSaved u={u}><span className="description" style={{ top: "3px", position: "relative", color: "#c9c9c9" }}>Saved Elements</span></ModalComponentSaved>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </React.Fragment>
            }

        </React.Fragment>
    )
}

/** AFTER TRAFFIC FILTER AND RECAPTCHA */
export function Footer(props) {

    return (
        <div className="ui inverted vertical footer segment">
            <div className="ui center aligned container">
                <div className="ui stackable inverted divided grid">
                    <div className="three wide column left aligned">
                        <h4 className="ui inverted header">
                            <i className="info small icon"></i>Our Services
                        </h4>
                        <div className="ui inverted link list">
                            <a className="item" href={window.___reactjsD.host2}>{props.language.new.our_services[0]}</a>
                            <a className="item" href={window.___reactjsD.host2 + "/sign"}>{props.language.new.our_services[1]}</a>
                            <a className="item" href={window.___reactjsD.host2}>{props.language.new.our_services[2]}</a>
                            <a className="item" href={window.___reactjsD.host2}>{props.language.new.our_services[3]}</a>
                        </div>
                    </div>
                    <div className="three wide column left aligned">
                        <h4 className="ui inverted header">
                            <i className="info small icon"></i> Website
                        </h4>
                        <div className="ui inverted link list">
                            <a className="item" href={window.___reactjsD.host2 + "/sign"}>{props.language.new.website[0]}</a>
                            <a className="item" href={window.___reactjsD.host2 + "/sign"}>{props.language.new.website[1]}</a>
                            <a className="item" href={window.___reactjsD.host + "/dmca-adshrink-it/"}>{props.language.new.website[2]}</a>
                            <a className="item" href={window.___reactjsD.host + "/payout-rates/"}>{props.language.new.website[3]}</a>
                        </div>
                    </div>
                    <div className="three wide column"></div>
                    <div className="seven wide column left aligned">
                        <h4 className="ui inverted header">
                            <i className="info icon"></i>
                            <div className="content">
                                {window.___reactjsD.website} <small style={{ textTransform: 'uppercase', color: '#c9c9c9' }}>{props.language.new.footer_payments_premium[0]}</small>
                                <div className="sub header">{props.language.new.footer_payments_premium[1]}</div>
                            </div>
                        </h4>
                        <img alt="payment" style={{ margin: '0px' }} className="ui centered small image lazy" data-src="https://www.chrisbarnespottery.com/image/payment/credit-cards-logos_635.png" />
                        <h4 className="ui inverted header">
                            <i className="info icon"></i>
                            <div className="content">
                                {window.___reactjsD.website} <small style={{ textTransform: 'uppercase', color: '#c9c9c9' }}>{props.language.new.footer_payments_rates[0]}</small>
                                <div className="sub header">{props.language.new.footer_payments_rates[1]}</div>
                            </div>
                        </h4>
                        <img alt="payment" style={{ margin: '0px' }} className="ui centered medium image lazy" data-src="https://create.3drap.it/img/payment.png" />
                    </div>
                </div>

                <div className="ui inverted section divider"></div>

                <p>By using our site, you acknowledge that you have read and understand our Cookie Policy, Privacy Policy, and our Terms of Service. <br /> <i className="btc icon"></i>{props.language.new.footer_donate[0]} <b>{props.language.new.footer_donate[1]}</b>{props.language.new.footer_donate[2]}: <b>1NMMDfb5tn2dqNKcD6CohJzoYWoepdHgUq</b></p>

                <div className="ui horizontal inverted small divided link list">
                    <a className="item" href={window.___reactjsD.host + "/sitemap.xml"}>{props.language.new.footer_sub[0]}</a>
                    <a className="item" href={window.___reactjsD.host + "/contact/"}>{props.language.new.footer_sub[1]}</a>
                    <a className="item" href={window.___reactjsD.host + "/terms-2/"}>{props.language.new.footer_sub[2]}</a>
                    <a className="item" href={window.___reactjsD.host + "/privacy-police/"}>{props.language.new.footer_sub[3]}</a>
                    <a className="item" href={window.___reactjsD.host}>{window.___reactjsD.website + " © 2020"}</a>
                </div>

                <img alt="logo" className="ui centered tiny image lazy" data-src={window.___reactjsD.host2 + "/png/adshrink.png"} /> <br />
                <p><a style={{ color: "inherit" }} href={_adshrink.instagram} target="_blank"><i className="instagram icon"></i></a> <a style={{ color: "inherit" }} href={_adshrink.facebook} target="_blank"><i className="facebook f icon"></i></a></p>
            </div>
        </div>
    );
}