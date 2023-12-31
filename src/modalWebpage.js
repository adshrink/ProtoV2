import React from 'react';
import ErrorBoundary from './errorComponent';
import antd from 'antd';


import { DomPresenceTracker } from './middleware/index';

import AdsenseBanner from './ui/adsense';
import { Header } from './ui/static';

import YandexAdUnit from './ui/ads/yandex';

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

const { TabPane } = Tabs;
const { Meta } = Card;
var orderNum = 0


function callback(key) {
    console.log(key);
}


export default class SemanticUiResponsive extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

            // elements to print and update one shot
            STATE_ref_container: 0,
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
            document.querySelector('#adshnk-main-container').style.marginTop = navBarHeight + 'px';
        }

        this.setState(prevState => ({
            STATE_ref_container: prevState.STATE_ref_container + 1
        }));

        return true; // tell to update the DOM
    }

    handleCardClick = (img, title, description, index) => {
        this.setState({
            selectedCard: { img, title, description, index },
        });
        orderNum = index;
        console.log("----------->", title, img);

        window.scrollTo({ top: 0, behavior: 'smooth' });
    };


    render() {
        const { Meta } = Card;
        const { visible, confirmLoading, ModalText } = this.state;

        const cardData = [
            { img: img1, title: 'Europe Street beat1', description: 'fjawepifajwefoi' },
            { img: img2, title: 'Europe Street beat2', description: 'fmpaowfj awegnipuasfgewa' },
            { img: img3, title: 'Europe Street beat3', description: 'wa fjewaof oawefjaowepifjawe f' },
            { img: img4, title: 'Europe Street beat4', description: 'sdfajpfe faowefjaweo fawef o' },
            { img: img5, title: 'Europe Street beat5', description: 'awe fp wejfaowepfja[ wef[p' },
            { img: img6, title: 'Europe Street beat6', description: 'sdfa wepf weaoif[jaowie fj' },
            { img: img7, title: 'Europe Street beat7', description: 'asdfjawpf wepafjaw opfwe' },
            { img: img8, title: 'Europe Street beat8', description: ' wcfawenpj cewijc' },
            { img: img9, title: 'Europe Street beat9', description: 'sdf jaowfapew [awefa wefja[iwef' },
            { img: img12, title: 'Europe Street beat10', description: 'pf ja[wfwepfjoaiwe fpwejfawie f' },
            { img: img10, title: 'Europe Street beat11', description: 'we fopawjfepawejf awe[' },
            { img: img11, title: 'Europe Street beat12', description: 'cewnc;awe cewapcjwe' },
        ];

        const selectedcardData = cardData[orderNum];

        return (
            <div ref={this.ref_container}>
                {Header()}

                {true === false && <YandexAdUnit blockId="R-A-2468309-1" />}
                {true === false && <YandexAdUnit blockId="C-A-2468309-2" />}

                <div id="adshnk-main-container" className="container">
                    <ErrorBoundary><AdsenseBanner size={'leaderboard'} from={'Component'} /></ErrorBoundary>

                    <Row gutter={[{ xs: 4, sm: 8, md: 12, lg: 16 }]}>
                        <Col className="mb-4" md={24} lg={16}>
                            <div className='gutter-row pt-5' id='cardDetail'>
                                <span className='bg-success text-white px-3 py-1 m-3' style={{ borderRadius: "20px" }}>
                                    <Icon type="calendar" /> 9 months
                                </span>
                                <span className='bg-success text-white px-3 py-1' style={{ borderRadius: "20px" }}>
                                    <Icon type="fire" /> Trending
                                </span>
                                <div className='p-4'>
                                    <h2 className='title py-2'>{selectedcardData.title}</h2>
                                    <h5>
                                        <Icon type="user" /> Hydrogen
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
                                                    <span><Icon type="like" />12.123</span>
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

                                            <ModalButton />
                                            <p className='pt-3'>3 free Access Credits left today.</p>
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
                                                    <span><Icon type="like" />12.123</span>
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

                                            <Button type="primary w-100">Get Hydrogen Gateway</Button>
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

                                <Col className="py-4" sm={32} md={12} lg={8} xl={6}>
                                    <div className='gutter-row'>
                                        <Card
                                            hoverable
                                            style={{ width: "100%" }}
                                            cover={<img alt="example"
                                                src={data.img}
                                                onClick={() => this.handleCardClick(data.img, data.title, data.description, index)}
                                            />}
                                        >
                                            <Meta title={data.title} description={data.description} />
                                        </Card>
                                    </div>
                                </Col>
                            ))}
                        </Row>
                    </div>

                    {this.props.steps}



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