/*
---------------------------------------------------
DomPresenceTracker Component Tutorial

The DomPresenceTracker component is used to track the presence of its children in the DOM and execute certain tasks when changes are detected. It can auto-update, re-checking the DOM presence and executing tasks on every update.

Props:

1. autoUpdate: Pass a 1 (true) or 0 (false). This value controls whether tasks starting with "$" are executed on every DOM update.

2. tasks: Pass an object where each key-value pair represents a task to execute. Two types of keys are expected:

   - Keys starting with "&", e.g. "&MOUNT", are special tasks that are executed every time the DOM presence is checked.
   
   - Keys starting with "$" are tasks that will be executed on every DOM update (if autoUpdate is set to true). The current number of updates is passed to these tasks as an argument.

   - Keys that don't start with "$" or "&" are tasks that are executed only the first time they are encountered. 

Example usage:

const tasks = {
    "&MOUNT": () => console.log('component has mounted'),
    "recaptcha": () => console.log('recaptcha task executed'),
    "$updates": (updates) => console.log(`this is update number ${updates}`),
};

return (
    <DomPresenceTracker autoUpdate={1} tasks={tasks}>
        <p id="giuseppe">Hello, Giuseppe!</p>
    </DomPresenceTracker>
);

In this example, when the DomPresenceTracker component mounts, it logs 'component has mounted'. The "recaptcha" task logs 'recaptcha task executed' the first time it's encountered. The "$updates" task logs the current number of updates on every update, because autoUpdate is set to 1 (or true).
---------------------------------------------------
*/


import _ from 'lodash'; // for deep comparison

import { getNestedObj } from '../services';

class DomPresenceTracker extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            updates: 0,
            executedKeys: new Set(),
            autoUpdate: getNestedObj(() => this.props.autoUpdate, false) || false
        };

        this.childRef = React.createRef();
    }

    componentDidUpdate(prevProps, prevState) {
        if (!_.isEqual(prevProps.children, this.props.children)) {
            this.checkDomPresence();
        }
    }

    checkDomPresence = () => {
        if (this.childRef.current) {

            const $MOUNT = getNestedObj(() => this.props.tasks['&MOUNT'], false);
            const { autoUpdate: STATE_autoUpdate } = this.state || false;

            // Execute &MOUNT task
            if ($MOUNT) {
                this.props.tasks['&MOUNT']();
            }

            this.setState(prevState => {
                // Conditionally add &MOUNT to the executedKeys Set
                const executedKeys = $MOUNT
                    ? prevState.executedKeys.add('&MOUNT')
                    : prevState.executedKeys;

                return {
                    updates: prevState.updates + 1,
                    executedKeys: executedKeys,
                }
            }, () => {
                this.executeTasks();
                // execute onUpdate callback if autoUpdate is true every time the DOM is refreshed
                if (STATE_autoUpdate)
                    this.props.onUpdate(this.state.updates);
            });
        }
    }

    executeTasks = () => {
        const { tasks } = this.props;
        const { updates, executedKeys, autoUpdate } = this.state;

        for (let key in tasks) {
            if (key.startsWith("$")) {
                if (!autoUpdate) continue; // Skip if autoUpdate is false
                tasks[key](updates); // Pass the number of updates to the function
                executedKeys.add(key); // Mark as executed
            } else if (!executedKeys.has(key) && key !== '&MOUNT') {
                tasks[key](); // Execute task without passing the number of updates
                executedKeys.add(key); // Mark as executed
            }
        }

        this.setState({ executedKeys }); // Update the state
    }

    toggleAutoUpdate = () => {
        this.setState(prevState => ({
            autoUpdate: !prevState.autoUpdate
        }));
    }

    render() {
        const { updates } = this.state;

        return (
            <div ref={this.childRef}>
                {this.props.children}
                <p>Number of updates: {updates}</p>
            </div>
        )
    }
}

DomPresenceTracker.defaultProps = {
    // onUpdate: (updates) => console.log(`Updates: ${updates}`),
    onUpdate: (updates) => true,
    tasks: {},
};

export default DomPresenceTracker;
