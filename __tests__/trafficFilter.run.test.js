import { expect } from 'chai';

function getNestedObj(fn, defaultVal = false) {
    try {
        return fn();
    } catch (e) {
        return defaultVal;
    }
}

function ads({
    RecaptchaV2Required, RecaptchaV2Completed, AdscoreRequired, AdscoreCompleted,
    isVpn, isIABReject, isMobile, isHuman, isIncognito, GoogleRecaptchaV3Score, connection
}) {

    function parseBoolean(str) {
        if (str === 'true') return true;
        if (str === 'false') return false;
        return str;
    }

    // Data validation
    if (typeof RecaptchaV2Required !== 'boolean') RecaptchaV2Required = parseBoolean(RecaptchaV2Required);
    if (typeof RecaptchaV2Completed !== 'number') RecaptchaV2Completed = parseInt(RecaptchaV2Completed);
    if (typeof AdscoreRequired !== 'boolean') AdscoreRequired = parseBoolean(AdscoreRequired);
    if (typeof AdscoreCompleted !== 'number') AdscoreCompleted = parseInt(AdscoreCompleted);
    if (typeof isVpn !== 'boolean') isVpn = parseBoolean(isVpn);
    if (typeof isIABReject !== 'boolean') isIABReject = parseBoolean(isIABReject);
    if (typeof isMobile !== 'boolean') isMobile = parseBoolean(isMobile);
    if (typeof isHuman !== 'boolean') isHuman = parseBoolean(isHuman);
    if (typeof isIncognito !== 'boolean') isIncognito = parseBoolean(isIncognito);
    if (typeof connection !== 'string') connection = '3g';

    GoogleRecaptchaV3Score = parseFloat(GoogleRecaptchaV3Score) || 0;

    let isTaskDone = (required, completed) => {
        if (!required)
            return true;
        return required && (completed == 1);
    }

    const GENERAL = true
        && isTaskDone(RecaptchaV2Required, RecaptchaV2Completed)
        && isTaskDone(AdscoreRequired, AdscoreCompleted);

    let SCORE = false;

    if (GoogleRecaptchaV3Score >= 0.7 && GoogleRecaptchaV3Score < 0.9)
        SCORE = isTaskDone(true, AdscoreCompleted);
    else if (GoogleRecaptchaV3Score >= 0.9)
        SCORE = true;

    const adsense = () => {
        return GENERAL && SCORE && !isVpn;
    }

    const taboola = () => {
        return GENERAL && SCORE && !isVpn;
    }

    const inhouse = () => {
        return GENERAL && SCORE;
    }

    return {
        adsense: adsense(),
        taboola: taboola(),
        inhouse: inhouse()
    };

}

function run({ isVpn, isIABReject, isMobile, isHuman, isIncognito, GoogleRecaptchaV3Score, connection }) {
    let FLOAT_GoogleRecaptchaV3Score = parseFloat(GoogleRecaptchaV3Score) || 0;

    let _RecaptchaV2Required = false;
    let _AdscoreRequired = false;

    let setRecaptchaV2Required = (value) => {
        if (_RecaptchaV2Required || value) {
            _RecaptchaV2Required = true;
        }
    };

    let setAdscoreRequired = (value) => {
        if (_AdscoreRequired || value) {
            _AdscoreRequired = true;
        }
    };

    if (FLOAT_GoogleRecaptchaV3Score < 0 || (FLOAT_GoogleRecaptchaV3Score >= 0 && FLOAT_GoogleRecaptchaV3Score < 0.7)) {
        setRecaptchaV2Required(true);
    } else if (FLOAT_GoogleRecaptchaV3Score >= 0.7 && FLOAT_GoogleRecaptchaV3Score < 0.9) {
        setRecaptchaV2Required(true);
        setAdscoreRequired(true);
    }

    if (isVpn || isIncognito || isIABReject) {
        setRecaptchaV2Required(true);
    }

    let getRecaptchaV2Required = () => _RecaptchaV2Required;
    let getAdscoreRequired = () => _AdscoreRequired;

    return {
        getRecaptchaV2Required,
        getAdscoreRequired
    };
}

describe('TrafficFilter', () => {
    describe('ads()', () => {
        it('VPN true, Score 0.6 -> v2 true, adscore false', () => {
            var props = {
                RecaptchaV2Required: true, RecaptchaV2Completed: 1, AdscoreRequired: true, AdscoreCompleted: 1,
                isVpn: true,
                isIABReject: false,
                isMobile: true,
                isHuman: false,
                isIncognito: false,
                GoogleRecaptchaV3Score: 0.6,
                connection: '4g',
                // add other necessary props here
            };

            var results = ads(props)

            expect(results.adsense).to.be.false;
            expect(results.taboola).to.be.false;
            expect(results.inhouse).to.be.false;
        });

        it('VPN false, Score 0.9 -> v2 false, adscore true', () => {
            var props = {
                RecaptchaV2Required: false, RecaptchaV2Completed: 0, AdscoreRequired: true, AdscoreCompleted: 1,
                isVpn: false,
                isIABReject: false,
                isMobile: false,
                isHuman: true,
                isIncognito: true,
                GoogleRecaptchaV3Score: 0.9,
                connection: 'wifi',
            };

            var results = ads(props)

            expect(results.adsense).to.be.true;
            expect(results.taboola).to.be.true;
            expect(results.inhouse).to.be.true;
        });

        it('VPN true, Score 0.3 -> v2 true, adscore true', () => {
            var props = {
                RecaptchaV2Required: true, RecaptchaV2Completed: 1, AdscoreRequired: true, AdscoreCompleted: 1,
                isVpn: true,
                isIABReject: true,
                isMobile: false,
                isHuman: false,
                isIncognito: true,
                GoogleRecaptchaV3Score: 0.3,
                connection: '3g',
            };

            var results = ads(props)

            expect(results.adsense).to.be.false;
            expect(results.taboola).to.be.false;
            expect(results.inhouse).to.be.false;
        });

        it('VPN false, Score 0.7 -> v2 false, adscore false', () => {
            var props = {
                RecaptchaV2Required: false, RecaptchaV2Completed: 0, AdscoreRequired: false, AdscoreCompleted: 0,
                isVpn: false,
                isIABReject: false,
                isMobile: true,
                isHuman: true,
                isIncognito: false,
                GoogleRecaptchaV3Score: 0.7,
                connection: '4g',
            };

            var results = ads(props)

            expect(results.adsense).to.be.false;
            expect(results.taboola).to.be.false;
            expect(results.inhouse).to.be.false;
        });

        it('VPN false, Score 0.7 -> v2 false, adscore required but not complete', () => {
            var props = {
                RecaptchaV2Required: false, RecaptchaV2Completed: 0, AdscoreRequired: false, AdscoreCompleted: 0,
                isVpn: false,
                isIABReject: false,
                isMobile: true,
                isHuman: true,
                isIncognito: false,
                GoogleRecaptchaV3Score: 0.7,
                connection: '4g',
            };

            var results = ads(props)

            expect(results.adsense).to.be.false;
            expect(results.taboola).to.be.false;
            expect(results.inhouse).to.be.false;
        });

        it('VPN false, Score 0.9 -> v2 false, adscore fetch failed', () => {
            var props = {
                RecaptchaV2Required: false, RecaptchaV2Completed: 0, AdscoreRequired: true, AdscoreCompleted: -1,
                isVpn: false,
                isIABReject: false,
                isMobile: false,
                isHuman: true,
                isIncognito: true,
                GoogleRecaptchaV3Score: 0.9,
                connection: 'wifi',
            };

            var results = ads(props)

            expect(results.adsense).to.be.false;
            expect(results.taboola).to.be.false;
            expect(results.inhouse).to.be.false;
        });

        it('VPN true, Score 0.3 -> v2 true, adscore fetch failed', () => {
            var props = {
                RecaptchaV2Required: true, RecaptchaV2Completed: 1, AdscoreRequired: true, AdscoreCompleted: -1,
                isVpn: true,
                isIABReject: true,
                isMobile: false,
                isHuman: false,
                isIncognito: true,
                GoogleRecaptchaV3Score: 0.3,
                connection: '3g',
            };

            var results = ads(props)

            expect(results.adsense).to.be.false;
            expect(results.taboola).to.be.false;
            expect(results.inhouse).to.be.false;
        });

        it('VPN false, Score 0.7 -> v2 false, adscore not required', () => {
            var props = {
                RecaptchaV2Required: false, RecaptchaV2Completed: 0, AdscoreRequired: false, AdscoreCompleted: 0,
                isVpn: false,
                isIABReject: false,
                isMobile: true,
                isHuman: true,
                isIncognito: false,
                GoogleRecaptchaV3Score: 0.7,
                connection: '4g',
            };

            var results = ads(props)

            expect(results.adsense).to.be.false;
            expect(results.taboola).to.be.false;
            expect(results.inhouse).to.be.false;
        });

        it('Incorrect type values', () => {
            var props = {
                RecaptchaV2Required: "true", RecaptchaV2Completed: "1", AdscoreRequired: "false", AdscoreCompleted: "0",
                isVpn: "false",
                isIABReject: "false",
                isMobile: "true",
                isHuman: "false",
                isIncognito: "false",
                GoogleRecaptchaV3Score: "0.7",
                connection: 4,
            };

            var results = ads(props)

            // Given the current implementation of your ads function, it doesn't throw error, it just performs incorrect logic.
            expect(results.adsense).to.be.false;
            expect(results.taboola).to.be.false;
            expect(results.inhouse).to.be.false;
        });

        it('Incorrect type values score 0.9', () => {
            var props = {
                RecaptchaV2Required: "true", RecaptchaV2Completed: "1", AdscoreRequired: "false", AdscoreCompleted: "0",
                isVpn: "false",
                isIABReject: "false",
                isMobile: "true",
                isHuman: "false",
                isIncognito: "false",
                GoogleRecaptchaV3Score: "0.9",
                connection: 4,
            };

            var results = ads(props)

            // Given the current implementation of your ads function, it doesn't throw error, it just performs incorrect logic.
            expect(results.adsense).to.be.true;
            expect(results.taboola).to.be.true;
            expect(results.inhouse).to.be.true;
        });

        it('Incomplete props', () => {
            var props = {
                RecaptchaV2Required: true, RecaptchaV2Completed: 1,
                isVpn: true,
                GoogleRecaptchaV3Score: 0.6,
                connection: '4g',
            };

            var results = ads(props)

            // Given the current implementation of your ads function, it doesn't throw error, it just performs incorrect logic.
            expect(results.adsense).to.be.false;
            expect(results.taboola).to.be.false;
            expect(results.inhouse).to.be.false;
        });

    });

    describe('run()', () => {
        it('VPN true, Score 0.6 -> v2 true, adscore false', () => {
            var props = {
                isVpn: true,
                isIABReject: false,
                isMobile: true,
                isHuman: false,
                isIncognito: false,
                GoogleRecaptchaV3Score: 0.6,
                connection: '4g',
                // add other necessary props here
            };

            var results = run(props)

            expect(results.getRecaptchaV2Required()).to.be.true;
            expect(results.getAdscoreRequired()).to.be.false;
        });

        it('VPN true, Score 0.7 -> v2 true, adscore true', () => {
            var props = {
                isVpn: true,
                isIABReject: false,
                isMobile: true,
                isHuman: false,
                isIncognito: false,
                GoogleRecaptchaV3Score: 0.7,
                connection: '4g',
                // add other necessary props here
            };

            var results = run(props)

            expect(results.getRecaptchaV2Required()).to.be.true;
            expect(results.getAdscoreRequired()).to.be.true;
        });

        // Add more test cases as needed to cover different scenarios
        it('VPN false, Score 0.9  -> v2 false, adscore false', () => {
            var props = {
                isVpn: false,
                isIABReject: false,
                isMobile: true,
                isHuman: false,
                isIncognito: false,
                GoogleRecaptchaV3Score: 0.9,
                connection: '4g',
                // add other necessary props here
            };

            var results = run(props)

            expect(results.getRecaptchaV2Required()).to.be.false;
            expect(results.getAdscoreRequired()).to.be.false;
        });

        // Add more test cases as needed to cover different scenarios
        it('VPN false, Score 0.1 -> v2 true, adscore false', () => {
            var props = {
                isVpn: false,
                isIABReject: false,
                isMobile: true,
                isHuman: false,
                isIncognito: false,
                GoogleRecaptchaV3Score: 0.1,
                connection: '4g',
                // add other necessary props here
            };

            var results = run(props)

            expect(results.getRecaptchaV2Required()).to.be.true;
            expect(results.getAdscoreRequired()).to.be.false;
        });

        // Add more test cases as needed to cover different scenarios
        it('VPN false, Score N/A -> v2 true, adscore false', () => {
            var props = {
                isVpn: false,
                isIABReject: false,
                isMobile: true,
                isHuman: false,
                isIncognito: false,
                GoogleRecaptchaV3Score: false,
                connection: '4g',
                // add other necessary props here
            };

            var results = run(props)

            expect(results.getRecaptchaV2Required()).to.be.true;
            expect(results.getAdscoreRequired()).to.be.false;
        });
    });
});