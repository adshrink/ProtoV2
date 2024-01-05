import React from 'react';
import ReactDOM from 'react-dom';
import { Progress, Button, Icon } from 'antd';
import { Link, withRouter } from 'react-router-dom';

const ButtonGroup = Button.Group;

class Step extends React.Component {
    state = {
        percent: 0,
        percentIndex: 0,
        buttonDisabled: [false, false, false, true],
        history: [],
    };

    increase = (index) => {
        const { percent, buttonDisabled, history } = this.state;

        if (percent < 100 && !buttonDisabled[index]) {
            let newPercent = percent + 33;
            let newPercentIndex = newPercent / 33;

            const updatedButtonDisabled = [...buttonDisabled];

            if (newPercent > 90) {
                newPercent = 100;
                updatedButtonDisabled[3] = false;
            }

            updatedButtonDisabled[index] = true;

            const newHistory = [
                ...history,
                {
                    percent: newPercent,
                    percentIndex: newPercentIndex,
                    buttonDisabled: updatedButtonDisabled,
                },
            ];

            this.setState({
                percent: newPercent,
                percentIndex: newPercentIndex,
                buttonDisabled: updatedButtonDisabled,
                history: newHistory,
            });
        }
    };

    goBack = () => {
        const { history } = this.state;

        if (history.length > 1) {
            const previousStep = history[history.length - 2];

            this.setState({
                percent: previousStep.percent,
                percentIndex: previousStep.percentIndex,
                buttonDisabled: previousStep.buttonDisabled,
                history: history.slice(0, -1),
            });
        } else if (history.length === 1) {
            // If only one step in history, go back to initial state
            this.setState({
                percent: 0,
                percentIndex: 0,
                buttonDisabled: [false, false, false, true],
                history: [],
            });
        } else {
            // Navigate to the previous page when history is empty
            this.props.history.goBack();
        }
    };

    render() {
        const { percent, buttonDisabled } = this.state;

        return (
            <div className="step-btn-group">
                <Progress
                    strokeColor={{
                        from: '#108ee9',
                        to: '#87d068',
                    }}
                    percent={percent}
                    status="active"
                />
                <ButtonGroup className="text-center w-100">
                    <Button
                        type="primary"
                        className="d-block w-100 my-3 rounded-btn"
                        onClick={() => this.increase(0)}
                        disabled={buttonDisabled[0]}
                    >
                        <Icon type="youtube" />Subscribe & Turn notifications On
                    </Button>
                    <Button
                        type="primary"
                        className="d-block w-100 my-3 rounded-btn"
                        onClick={() => this.increase(1)}
                        disabled={buttonDisabled[1]}
                    >
                        <Icon type="copy" />Click on Ad
                    </Button>
                    <Button
                        type="primary"
                        className="d-block w-100 my-3 rounded-btn"
                        onClick={() => this.increase(2)}
                        disabled={buttonDisabled[2]}
                    >
                        <Icon type="download" />Download Extension
                    </Button>
                    <Button
                        type="primary"
                        className="d-block w-100 my-3 rounded-btn"
                        onClick={() => this.increase(3)}
                        disabled={buttonDisabled[3]}
                    >
                        <Link to={'/'} className="text-white custom-color">
                            <Icon type="unlock" theme="filled" />Unlock content
                        </Link>
                    </Button>
                </ButtonGroup>
                <Button
                    type="default"
                    className="d-block w-100 my-3 rounded-btn"
                    onClick={this.goBack}
                >
                    <Icon type="rollback" />Back
                </Button>
            </div>
        );
    }
}

export default withRouter(Step);
