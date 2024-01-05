/** AFTER TRAFFIC FILTER AND RECAPTCHA */

import { Input, Menu, Dropdown, Button, Icon, Avatar, Collapse, List } from 'antd';
const { Search } = Input;

const { Panel } = Collapse;

function callback(key) {
    console.log(key);
}

class OverlayVisible extends React.Component {
    state = {
        visible: false,
    };

    handleMenuClick = e => {
        if (e.key === '3') {
            this.setState({ visible: false });
        }
    };

    handleVisibleChange = flag => {
        this.setState({ visible: flag });
    };

    render() {
        const menu = (
            <Menu onClick={this.handleMenuClick}>
                <Menu.Item key="1">
                    <Search
                        placeholder="input search text"
                        onSearch={value => console.log(value)}
                    />
                </Menu.Item>
                <Menu.Item key="2" style={{ padding: 0 }}>
                    <Collapse onChange={callback}>
                        <Panel header="My account">
                            <List>
                                <List.Item>Account Info</List.Item>
                                <List.Item>Wallet</List.Item>
                                <List.Item>Setting</List.Item>
                            </List>
                        </Panel>
                    </Collapse>
                </Menu.Item>
                <Menu.Item key="3">
                    <div className="user-info p-2">
                        <span style={{ paddingRight: "10px" }}>Jack Jone</span>
                        <Avatar className="bg-success" icon="user" />
                    </div>
                </Menu.Item>
            </Menu>
        );
        return (
            <Dropdown
                overlay={menu}
                onVisibleChange={this.handleVisibleChange}
                visible={this.state.visible}
            >
                <Button className="ant-dropdown-link" onClick={e => e.preventDefault()}>
                    <Icon type="menu" />
                </Button>
            </Dropdown>
        );
    }
}

export function Header(props) {

    const menu = (
        <Menu>
            <Menu.Item>
                <a target="_blank" rel="noopener noreferrer" href="#">
                    Account info
                </a>
            </Menu.Item>
            <Menu.Item>
                <a target="_blank" rel="noopener noreferrer" href="#">
                    My wallet
                </a>
            </Menu.Item>
            <Menu.Item>
                <a target="_blank" rel="noopener noreferrer" href="#">
                    Setting
                </a>
            </Menu.Item>
        </Menu>
    );

    let { dev, u } = props || false;

    return (

        <React.Fragment>

            <style>{"\
                        .gradient { background: #0052D4 !important; background: -webkit-linear-gradient(to left, #6FB1FC, #4364F7, #0052D4) !important; background: linear-gradient(to left, #6FB1FC, #4364F7, #0052D4) !important; }\
                        .logo-dim { width: 110px; !important } \
                    "}</style>

            <nav className="adshnk-fixed-navbar ui big top fixed menu compatct icon" id="center_jumbotron" data-html2canvas-ignore>
                <div className="item" style={{ backgroundColor: "azure" }}>
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

                <div className="nav-content">
                    <Search
                        className="nav-search"
                        placeholder="input search text"
                        onSearch={value => console.log(value)}
                        style={{ width: 200, margin: "10px" }}
                    />
                    <div className="curr-user">
                        <Dropdown overlay={menu} placement="bottomLeft">
                            <button className="nav-item-button px-3">Premium</button>
                        </Dropdown>
                        <div className="user-info px-3">
                            <span style={{ paddingRight: "10px" }}>Jack Jone</span>
                            <Avatar className="bg-success" icon="user" />
                        </div>
                    </div>
                </div>

                <div className="mobile-nav">
                    <OverlayVisible />
                </div>
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
        <div className="ui inverted vertical footer segment pt-5" style={{ backgroundColor: "#203a54" }}>
            <div className="ui center aligned container">
                <div className="ui stackable inverted divided grid">
                    <div className="three wide column left aligned">
                        <h4 className="ui inverted header">
                            Our Services
                        </h4>
                        <div className="ui inverted link list">
                            <a className="item" href={window.___reactjsD.host2}>{props.language.new.our_services[0]}</a>
                            <a className="item" href={window.___reactjsD.host2 + "/sign"}>{props.language.new.our_services[1]}</a>
                            <a className="item" href={window.___reactjsD.host2}>{props.language.new.our_services[2]}</a>
                            <a className="item" href={window.___reactjsD.host2}>{props.language.new.our_services[3]}</a>
                        </div>
                    </div>
                    <div className="three wide column left aligned" style={{borderColor: "rgba(255,255,255,.1)"}}>
                        <h4 className="ui inverted header">
                            Website
                        </h4>
                        <div className="ui inverted link list">
                            <a className="item" href={window.___reactjsD.host2 + "/sign"}>{props.language.new.website[0]}</a>
                            <a className="item" href={window.___reactjsD.host2 + "/sign"}>{props.language.new.website[1]}</a>
                            <a className="item" href={window.___reactjsD.host + "/dmca-adshrink-it/"}>{props.language.new.website[2]}</a>
                            <a className="item" href={window.___reactjsD.host + "/payout-rates/"}>{props.language.new.website[3]}</a>
                        </div>
                    </div>
                    {/* <div className="three wide column"></div> */}
                    <div className="seven wide column left aligned" style={{borderColor: "rgba(255,255,255,.1)"}}>
                        <h4 className="ui inverted header">
                            <div className="content">
                                {window.___reactjsD.website} <small style={{ textTransform: 'uppercase', color: '#c9c9c9' }}>{props.language.new.footer_payments_premium[0]}</small>
                                <div className="sub header">{props.language.new.footer_payments_premium[1]}</div>
                            </div>
                        </h4>
                        <h4 className="ui inverted header">
                            <div className="content">
                                {window.___reactjsD.website} <small style={{ textTransform: 'uppercase', color: '#c9c9c9' }}>{props.language.new.footer_payments_rates[0]}</small>
                                <div className="sub header">{props.language.new.footer_payments_rates[1]}</div>
                            </div>
                        </h4>
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

                <img alt="logo" className="ui centered tiny image lazy" src={"https://adshnk.com/wp-content/uploads/2021/10/adshnk.png"} /> <br />
                <p><a style={{ color: "inherit" }} href={_adshrink.instagram} target="_blank"><i className="instagram icon"></i></a> <a style={{ color: "inherit" }} href={_adshrink.facebook} target="_blank"><i className="facebook f icon"></i></a></p>
            </div>
        </div>
    );
}