import React from 'react';
import ReactDOM from 'react-dom';
import { Progress, Button, Icon } from 'antd';

const ButtonGroup = Button.Group;

export default class Step extends React.Component {
    state = {
        percent: 0,
        percentIndex: 0,
        buttonDisabled: [false, false, false, true], // Track disabled state for each button
    };

    increase = (index) => {
        if (this.state.percent < 100 && !this.state.buttonDisabled[index]) {
            let percent = this.state.percent + 33;
            let percentIndex = percent/33;
            const updatedButtonDisabled = [...this.state.buttonDisabled];
            console.log(percentIndex);

            if (percent > 90) {
                percent = 100;
                updatedButtonDisabled[3] = false; // Move this line outside of the if block
            }

            updatedButtonDisabled[index] = true;
            this.setState({ percent, buttonDisabled: updatedButtonDisabled });
        }
    };

    render() {
        return (
            <div className="step-btn-group">
                {/* <Progress type="circle" percent={this.state.percent} className="d-block text-center" /> */}
                {/* <p>{this.state.percentIndex}/3</p> */}
                <Progress
                    strokeColor={{
                        from: '#108ee9',
                        to: '#87d068',
                    }}
                    percent={this.state.percent}
                    status="active"
                />
                <ButtonGroup className="text-center w-100">
                    <Button type="primary" className="d-block w-100 my-3 rounded-btn" onClick={() => this.increase(0)} disabled={this.state.buttonDisabled[0]}>
                        <Icon type="youtube" />Subscribe & Turn notifications On
                    </Button>
                    <Button type="primary" className="d-block w-100 my-3 rounded-btn" onClick={() => this.increase(1)} disabled={this.state.buttonDisabled[1]} >
                        <Icon type="copy" />Click on Ad
                    </Button>
                    <Button type="primary" className="d-block w-100 my-3 rounded-btn" onClick={() => this.increase(2)} disabled={this.state.buttonDisabled[2]} >
                        <Icon type="download" />Download Extension
                    </Button>
                    <Button type="primary" className="d-block w-100 my-3 rounded-btn" onClick={() => this.increase(3)} disabled={this.state.buttonDisabled[3]} >
                        <Icon type="unlock" theme="filled" />Unlock content
                    </Button>
                </ButtonGroup>
            </div>
        );
    }
}
