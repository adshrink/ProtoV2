import React from 'react';
import ErrorBoundary from './errorComponent';
import antd from 'antd';

import { DomPresenceTracker } from './middleware/index';

import AdsenseBanner from './ui/adsense';
import { Header } from './ui/static';

import YandexAdUnit from './ui/ads/yandex';
import AdsMiddleware from './middleware/adsMiddleware'

import ModalButton from './modalWebpage';

import img1 from "./images/img-1.jpg";
import img2 from "./images/img-2.jpg";
import img3 from "./images/img-3.jpg";
import img4 from "./images/img-4.jpg";
import img5 from "./images/img-5.jpg";
import img6 from "./images/img-6.jpg";
import img7 from "./images/img-7.jpg";
import img8 from "./images/img-8.jpg";
import img9 from "./images/img-9.jpg";
import img10 from "./images/img-10.jpg";
import img11 from "./images/img-11.jpg";
import img12 from "./images/img-12.jpg";

// import Tabs from "./tab";
import { Button, Icon, Card, CardBody, CardHeader, Col, Container, Row, Badge, Tabs } from 'antd';
import { Link } from 'react-router-dom';

const { TabPane } = Tabs;
const { Meta } = Card;
let orderNum = 0;
let flag = "";


const cardData = [
    { img: img1, title: 'Europe Street beat1', user: "User name", link: "https://example.com", description: 'fjawepifajwefoi' },
    { img: img2, title: 'Europe Street beat2', user: "User name", link: "https://example.com", description: 'fmpaowfj awegnipuasfgewa' },
    { img: img3, title: 'Europe Street beat3', user: "User name", link: "https://example.com", description: 'wa fjewaof oawefjaowepifjawe f' },
    { img: img4, title: 'Europe Street beat4', user: "User name", link: "https://example.com", description: 'sdfajpfe faowefjaweo fawef o' },
];

const mayLikeData = [
    { img: img5, title: 'Europe Street beat5', user: "User name", link: "https://example.com", description: 'awe fp wejfaowepfja[ wef[p' },
    { img: img6, title: 'Europe Street beat6', user: "User name", link: "https://example.com", description: 'sdfa wepf weaoif[jaowie fj' },
    { img: img7, title: 'Europe Street beat7', user: "User name", link: "https://example.com", description: 'asdfjawpf wepafjaw opfwe' },
    { img: img8, title: 'Europe Street beat8', user: "User name", link: "https://example.com", description: ' wcfawenpj cewijc' },
    { img: img9, title: 'Europe Street beat9', user: "User name", link: "https://example.com", description: 'sdf jaowfapew [awefa wefja[iwef' },
    { img: img12, title: 'Europe Street beat10', user: "User name", link: "https://example.com", description: 'pf ja[wfwepfjoaiwe fpwejfawie f' },
    { img: img10, title: 'Europe Street beat11', user: "User name", link: "https://example.com", description: 'we fopawjfepawejf awe[' },
    { img: img11, title: 'Europe Street beat12', user: "User name", link: "https://example.com", description: 'cewnc;awe cewapcjwe' },
];


function callback(key) {
    console.log(key);
}


export default class SemanticUiResponsive extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

            // elements to print and update one shot
            STATE_ref_container: 0,
            selectedCard: null,
            loadingMayLike: false, // Add this line
            mayLikeSectionVisible: false, // Add a new state property
        }
        // refs
        this.ref_container = React.createRef();
    }

    componentDidMount() {

        this.setState({
            mobile: 1
        });

        // current check if referred element in DOM && execute
        this.ref_container.current && this.after_render_ref_container(true);
    }

    shouldComponentUpdate(nextProps, nextState) {
        return true;
    }

    componentDidUpdate(prevProps, prevState) {
        const { STATE_ref_container } = this.state || false;

        if (
            this.ref_container.current /** DOM elements */
            && STATE_ref_container == 0 /** DOM elements (recaptcha_v2_block_page) updated 0 times */
        ) {
            /** render */ this.ref_container.current && this.after_render_ref_container(); // current check if referred element in DOM && execute - after any update
            return true;
        }

        if (prevProps !== this.props) {
            return true;
        }
    }

    after_render_ref_container() {

        const { STATE_ref_container } = this.state || false;

        console.log((this.ref_container.current));

        if (STATE_ref_container === 0) {
            // move the container bottom the nav bar for the same height
            let navBarHeight = document.querySelector('.adshnk-fixed-navbar').offsetHeight;
            navBarHeight = parseInt(navBarHeight);
            navBarHeight = navBarHeight + navBarHeight * 2 / 3;
            // set the margin top for the main container
            // document.querySelector('#adshnk-main-container').style.marginTop = navBarHeight + 'px';
        }

        this.setState(prevState => ({
            STATE_ref_container: prevState.STATE_ref_container + 1
        }));

        return true; // tell to update the DOM
    }

    handleCardClick = (img, title, link, user, description, index, flag) => {
        this.setState({
            selectedCard: { img, title, link, user, description, index, flag },
        });
        orderNum = index;
        console.log("----------->", title, img);

        window.scrollTo({ top: 200, behavior: 'smooth' });
    };


    handleMayLikeClick = () => {
        // Show loading modal for 1 second before rendering "You may like" section
        this.setState({ loadingMayLike: true });
        setTimeout(() => {
            this.setState({
                loadingMayLike: false,
                mayLikeSectionVisible: true,
            });
        }, 3000);
    };

    renderMayLikeSection = () => {
        const { selectedCard, mayLikeSectionVisible } = this.state;

        if (!mayLikeSectionVisible) {
            return null; // Do not render anything if the section should not be visible yet
        }

        // Add a check for mayLikeData before mapping
        if (!mayLikeData || !mayLikeData.length) {
            return <div>No data available</div>;
        }

        return (
            <div className="gutter-example">
                <Row gutter={[{ xs: 4, sm: 8, md: 12, lg: 16 }]}>
                    {mayLikeData.map((data, index) => (
                        <Col className="py-4 px-2" sm={32} md={12} lg={8} xl={6} key={index}>
                            <div className='gutter-row'>
                                <Card
                                    hoverable
                                    style={{ width: "100%" }}
                                    cover={<img alt="example" src={data.img} />}
                                    onClick={() => {
                                        flag = "mayLikeData"
                                        this.handleCardClick(data.img, data.title, data.user, data.link, data.description, index, flag)
                                    }}
                                >
                                    <Meta title={data.title} description={data.link} />
                                    <p className="py-2">{data.description}</p>
                                    <hr />
                                    <p className="py-2 user-card"><Icon type="user" />{data.user}</p>
                                </Card>
                            </div>
                        </Col>
                    ))}
                </Row>
            </div>
        );
    };

    render() {
        const { Meta } = Card;
        const { visible, confirmLoading, ModalText, selectedCard, loadingMayLike } = this.state;

        let selectedcardData = cardData[0];

        if (flag == "cardData") {
            selectedcardData = cardData[orderNum];
        }
        else if (flag == "mayLikeData") {
            selectedcardData = mayLikeData[orderNum];
        }

        return (
            <div ref={this.ref_container}>
                {Header()}

                {true === false && <YandexAdUnit blockId="R-A-2468309-1" />}
                {true === false && <YandexAdUnit blockId="C-A-2468309-2" />}


                <div id="adshnk-main-container" className="container">
                    <ErrorBoundary><AdsenseBanner size={'leaderboard'} from={'Component'} /></ErrorBoundary>
                    <div className="adsense-bar">
                        <img alt="example" src={img7} />
                    </div>

                    <Row gutter={[{ xs: 4, sm: 8, md: 12, lg: 16 }]} className="pt-4">
                        <Col className="mb-4" md={24} lg={16}>
                            <div className='gutter-row pt-3' id='cardDetail'>
                                <div className="ms-4">
                                    <span className='bg-secondary text-white px-3 py-1 m-2' style={{ borderRadius: "20px", fontSize: "10px" }}>
                                        <Icon type="calendar" /> 9 months
                                    </span>
                                    <span className='bg-secondary text-white px-3 py-1' style={{ borderRadius: "20px", fontSize: "10px" }}>
                                        <Icon type="fire" /> Trending
                                    </span>
                                </div>
                                <div className='p-4'>
                                    <h2 className='title py-2'>{selectedcardData.title}</h2>
                                    <h5>
                                        <Icon type="user" /> {selectedcardData.user}
                                    </h5>
                                </div>
                                <Card
                                    hoverable
                                    style={{ width: "100%" }}
                                    cover={<img alt="example" src={selectedcardData.img} />}
                                >
                                    <Meta title="Description" description="Hydrogen is a new Roblox exploit that is completely free and very powerful. It allows you to execute arbitrary code and take complete control of any Roblox game. It is extremely stable and has been tested on all major platforms." />
                                </Card>
                            </div>
                        </Col>
                        <Col className="text-center mb-4" md={24} lg={8}>
                            <div className='gutter-row'>
                                <Tabs defaultActiveKey="1" onChange={callback} className='acs-tab'>
                                    <TabPane tab={<div><h5>Free Access</h5><p>with ADS</p></div>} key="1">
                                        <div className='p-4'>
                                            <h3>Hydrogen Gateway 1</h3>
                                            <div className="f-view">
                                                <span className='item'>Views</span>
                                                <span className="f-info">1.231.233</span>
                                            </div>
                                            <hr />
                                            <div className='f-rating'>
                                                <span className='item'>Rating</span>
                                                <span className='f-info'>
                                                    <span><Icon type="dislike" />123.123</span>
                                                    <span style={{ paddingLeft: "10px" }}><Icon type="like" />12.123</span>
                                                </span>
                                            </div>
                                            <hr />
                                            <div className='f-author'>
                                                <span className='item'>Provided by</span>
                                                <span className='f-info'>
                                                    <span>Franklyn</span>
                                                </span>
                                            </div>
                                            <hr />

                                            <button className="free-access-btn rounded w-100"><Link to={'/step'} className="text-white">Free Access</Link></button>
                                            {/* <ModalButton /> */}
                                            {/* <p className='pt-3'>3 free Access Credits left today.</p> */}
                                        </div>
                                    </TabPane>
                                    <TabPane tab={<div><h5>Direct Access</h5><p>with Premium</p></div>} key="2">
                                        <div className='p-4'>
                                            <h3>Hydrogen Gateway 2</h3>
                                            <div className="f-view">
                                                <span className='item'>Views</span>
                                                <span className="f-info">1.231.233</span>
                                            </div>
                                            <hr />
                                            <div className='f-rating'>
                                                <span className='item'>Rating</span>
                                                <span className='f-info'>
                                                    <span><Icon type="dislike" />123.123</span>
                                                    <span style={{ paddingLeft: "10px" }}><Icon type="like" />12.123</span>
                                                </span>
                                            </div>
                                            <hr />
                                            <div className='f-author'>
                                                <span className='item'>Provided by</span>
                                                <span className='f-info'>
                                                    <span>Franklyn</span>
                                                </span>
                                            </div>
                                            <hr />

                                            <button className="free-access-btn rounded w-100">Get Hydrogen Gateway</button>
                                            <p className='pt-3'>Start your 30-Day free Trial. Cancel anytime</p>
                                        </div>
                                    </TabPane>
                                </Tabs>
                            </div>

                        </Col>
                    </Row>

                    <div className="gutter-example">
                        <Row gutter={[{ xs: 4, sm: 8, md: 12, lg: 16 }]}>
                            {cardData.map((data, index) => (

                                <Col className="py-4" sm={32} md={12} lg={8} xl={6} key={index}>
                                    <div className='gutter-row'>
                                        <Card
                                            hoverable
                                            style={{ width: "100%" }}
                                            cover={<img alt="example" src={data.img} />}
                                            onClick={() => {
                                                flag = "cardData"
                                                this.handleCardClick(data.img, data.title, data.user, data.link, data.description, index, flag)
                                            }}
                                        >
                                            <Meta title={data.title} description={data.link} />
                                            <p className="py-2">{data.description}</p>
                                            <hr />
                                            <p className="py-2 user-card"><Icon type="user" />{data.user}</p>
                                        </Card>
                                    </div>
                                </Col>
                            ))}
                        </Row>
                    </div>
                    <h3 onClick={this.handleMayLikeClick} style={{ cursor: 'pointer', paddingBottom: "30px" }}>
                        You may like
                    </h3>

                    {/* Loading modal */}
                    {loadingMayLike && (
                        // Replace this with your actual loading modal component
                        // <div style={{ position: 'fixed', top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }}>
                        //     Loading Modal...
                        // </div>
                        <div style={{ width: "100%", textAlign: "center", fontSize: "larger", padding: "30px" }}>
                            <Icon type="loading" /><span className="px-3">Loading...</span>
                        </div>
                    )}

                    {!loadingMayLike && this.renderMayLikeSection()}


                    {/* <div className="gutter-example">
                        <Row gutter={[{ xs: 4, sm: 8, md: 12, lg: 16 }]}>
                            {mayLikeData.map((data, index) => (

                                <Col className="py-4" sm={32} md={12} lg={8} xl={6}>
                                    <div className='gutter-row'>
                                        <Card
                                            hoverable
                                            style={{ width: "100%" }}
                                            cover={<img alt="example"
                                                src={data.img}
                                            />}
                                            onClick={() => {
                                                flag = "mayLikeData"
                                                this.handleCardClick(data.img, data.title, data.description, index, flag)
                                            }}
                                        >
                                            <Meta title={data.title} description={data.description} />
                                        </Card>
                                    </div>
                                </Col>
                            ))}
                        </Row>
                    </div> */}

                    {/* {this.props.steps} */}



                    {/* <div className="row">
                        <div className="col-xs-12 col-md-4">
                            <div className="p-3 bg-light">
                                <h2>Header</h2>
                                <p>This is a 1/3 column.</p>
                            </div>
                        </div>
                        <div className="col-xs-12 col-md-8">
                            <div className="p-3 bg-secondary">
                                <h2>2/3 Column</h2>
                                <p>This is a 2/3 column.</p>
                                {this.props.children}
                            </div>
                        </div>
                    </div> */}
                </div>
                {this.props.footer}
            </div>
        )
    }
}