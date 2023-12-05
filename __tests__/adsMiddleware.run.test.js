import { expect } from 'chai';

function getNestedObj(fn, defaultVal = false) {
    try {
        return fn();
    } catch (e) {
        return defaultVal;
    }
}

/**
     * 
     * @param {*} BOOL_return 
     * @returns Boolean value if the user is doing a step or the step number
     */
const STEP_going_on = ({ current_step }, BOOL_return = false) => {
    let CURRENT_STEP = getNestedObj(() => current_step, false); // adding || false -> when current_step === 0 will return BOOLEAN FALSE

    CURRENT_STEP = parseInt(CURRENT_STEP);

    if (isNaN(CURRENT_STEP))
        return BOOL_return ? false : -1;

    if (typeof CURRENT_STEP === 'boolean')
        return BOOL_return ? false : -1;

    if (typeof CURRENT_STEP === 'number' && CURRENT_STEP < 0)
        return BOOL_return ? false : CURRENT_STEP;

    return BOOL_return ? true : CURRENT_STEP;
}

/** if STEP RUNNING and CLICK or OTHER that isnt a "COMPLETED" one RETURN FALSE */
const STEP_completed = ({ key, current_step }) => {
    let index = current_step;
    let step = STEP_going_on({ current_step }); // if the visitor is doing another step (TRUE) otherwhise (FALSE)
    let goingon = STEP_going_on({ current_step }, true); // if the visitor is doing another step (TRUE) otherwhise (FALSE)

    if (goingon && step !== index)
        return false;

    let canProceed = (goingon && key === 'completed') || (!goingon && key !== 'completed');

    return canProceed;
}

describe('AdsMiddleware', () => {
    describe('STEP_completed()', () => {
        it('-1 click', () => {
            var props = {
                key: "click",
                current_step: -1
            };

            var results = STEP_completed(props)

            expect(results).to.be.true;
        });

        it('-1 completed', () => {
            var props = {
                key: "completed",
                current_step: -1
            };

            var results = STEP_completed(props)

            expect(results).to.be.false;
        });

        it('0 click', () => {
            var props = {
                key: "click",
                current_step: 0
            };

            var results = STEP_completed(props)

            expect(results).to.be.false;
        });

        it('0 completed', () => {
            var props = {
                key: "completed",
                current_step: 0
            };

            var results = STEP_completed(props)

            expect(results).to.be.true;
        });

        it('1 click', () => {
            var props = {
                key: "click",
                current_step: 1
            };

            var results = STEP_completed(props)

            expect(results).to.be.false;
        });

        it('1 completed', () => {
            var props = {
                key: "completed",
                current_step: 1
            };

            var results = STEP_completed(props)

            expect(results).to.be.true;
        });

        it('false completed', () => {
            var props = {
                key: "completed",
                current_step: false
            };

            var results = STEP_completed(props)

            expect(results).to.be.false;
        });

        it('true completed', () => {
            var props = {
                key: "completed",
                current_step: true
            };

            var results = STEP_completed(props)

            expect(results).to.be.false;
        });

        it('"true" completed', () => {
            var props = {
                key: "completed",
                current_step: "true"
            };

            var results = STEP_completed(props)

            expect(results).to.be.false;
        });

        it('"false" completed', () => {
            var props = {
                key: "completed",
                current_step: "false"
            };

            var results = STEP_completed(props)

            expect(results).to.be.false;
        });

    });
});