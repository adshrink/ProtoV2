import ErrorBoundary from './errorComponent';

import { DomPresenceTracker } from './middleware/index';

import AdsenseBanner from './ui/adsense';
import { Header } from './ui/static';

import YandexAdUnit from './ui/ads/yandex';

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

    render() {

        return (
            <div ref={this.ref_container}>
                {Header()}

                {true == false && <YandexAdUnit blockId="R-A-2468309-1" />}

                {true == false && <YandexAdUnit blockId="C-A-2468309-2" />}

                <div id="adshnk-main-container" className="ui container" style={{ height: '100vh' }}>
                    <ErrorBoundary><AdsenseBanner size={'leaderboard'} from={'Component'} /></ErrorBoundary>

                    {this.props.steps}

                    <div className="ui grid" style={{ height: '100%' }}>
                        <div className="row">
                            <div className="column">
                                <div className="ui segment" style={{ backgroundColor: '#f8f8f8' }}>
                                    <h2 className="ui header">Header</h2>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="column">
                                <div className="ui segment" style={{ height: '100%', backgroundColor: '#f0f0f0' }}>
                                    <h2 className="ui header">1/3 Column</h2>
                                    <p>This is a 1/3 column.</p>
                                </div>
                            </div>
                            <div className="column">
                                <div className="ui segment" style={{ height: '100%', backgroundColor: '#e0e0e0' }}>
                                    <h2 className="ui header">2/3 Column</h2>
                                    <p>This is a 2/3 column.</p>
                                    {this.props.children}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {this.props.footer}
            </div >
        )
    }
}