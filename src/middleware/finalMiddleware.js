
import { getNestedObj } from "../services";

import { DIV_PreMessageSuccess } from "../ui/steps";

export default class FinalMiddleware extends React.Component {
    constructor(props) {
        super(props);
        /** class constants */
        this.CONST_INTERNVAL_componentDidMount = null;
        this.CONST_TIMEOUT = 10;

        this.state = {
            ready: -1,
            timer: 0,
        };

    }

    componentDidMount() {
        const that = this;

        this.CONST_INTERNVAL_componentDidMount = setInterval(() => {
            /** update timer from TIMEOUT */
            that.setState(prevState => {
                const currentStep = getNestedObj(() => prevState.timer, 0);
                /** create a var */
                let updatedValue, booleanTimerFinished;
                /** update the var */
                updatedValue = currentStep + 1;
                booleanTimerFinished = Boolean(updatedValue === that.CONST_TIMEOUT);

                /** clear the timer */
                if (this.CONST_INTERNVAL_componentDidMount && booleanTimerFinished)
                    clearInterval(that.CONST_INTERNVAL_componentDidMount);

                return {
                    ready: booleanTimerFinished ? 1 : -1,
                    timer: updatedValue,
                };
            });
        }, 1000)

    }

    COMPONENT_READY = () => {
        const { ready } = this.state;
        if (ready == 1)
            return true;
        return false;
    }

    render() {

        return (
            <div>
                <h1>Final Middleware {this.state.timer}</h1>
                {this.COMPONENT_READY() ?
                    this.props.children
                    :
                    DIV_PreMessageSuccess()
                }
            </div>
        );
    }
}