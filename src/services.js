import __tcfapi from '__tcfapi';
import JsCookie from 'js-cookie';
import { detectIncognito } from "detectincognitojs";

import * as CONSTANST from './constants';

function generateADSHLogo(fontSize) {
    var logo = '';

    // Generate the ASCII art for each letter
    var letters = {
        A: [
            '   ___    ',
            '  / _ \\   ',
            ' / /_\\ \\  ',
            '/ /   \\ \\ ',
            '\\/     \\/ '
        ],
        D: [
            ' ____   ',
            '|  _ \\  ',
            '| |_) | ',
            '|____/  ',
            '        '
        ],
        S: [
            '  _____ ',
            ' /  ___|',
            ' \\ `--. ',
            '  `--. \\',
            ' /\\__/ /',
            ' \\____/ '
        ],
        H: [
            ' _    _ ',
            '| |  | |',
            '| |__| |',
            '|  __  |',
            '|_|  |_|'
        ]
    };

    // Iterate over each row of the letters and build the logo
    for (var i = 0; i < 5; i++) {
        for (var letter in letters) {
            logo += letters[letter][i] + ' ';
        }
        logo += '\n';
    }

    // Style the logo with the specified font size
    var style = 'font-size: ' + fontSize + ';';
    console.log('%c' + logo, style);
    console.log(`
                _.--.
            .-"\\\`_.--.\     .-.___________
          ."_-"\\\`     \\   (  0;------/\\\\"'
        ,"=___        =))  \\  \\     /  \\\\
         \`~\` .=\\\`~'~)    ( _/ /    /    \\\\
 =\\\`---====""~\\\`\\\\          _/    /      \\\\
               \`-------"\\\`       /        \\\\
                                /          \\\\
                               (            )
                                '._      _.'
                                   '----'
`);
}

function calculateHighContrastColor(inputColor) {
    // Convert the input color to RGB format
    var hex = inputColor.replace('#', '');
    var r = parseInt(hex.substr(0, 2), 16);
    var g = parseInt(hex.substr(2, 2), 16);
    var b = parseInt(hex.substr(4, 2), 16);

    // Calculate the color's luminance using the relative luminance formula
    var luminance = (0.299 * r + 0.587 * g + 0.114 * b) / 255;

    // Determine the contrast color based on the luminance
    var contrastColor = luminance > 0.5 ? '#000000' : '#FFFFFF';

    return contrastColor;
}

function printJSONWithTabs(obj, depth = 0, symbols = ['\t - ', '\t > ', '\t ']) {
    var indent = symbols[depth % symbols.length].repeat(depth);

    var result = '';
    for (var key in obj) {
        var value = obj[key];
        if (typeof value === 'object' && value !== null) {
            result += indent + key + ':\n' + printJSONWithTabs(value, depth + 1, symbols);
        } else {
            result += indent + key + ': ' + value + '\n';
        }
    }

    return result;
}

export function consoleLOG_color_font_size(text, color, fontType, fontSize) {
    generateADSHLogo("20px");

    var text;

    if (typeof text === 'object' && text !== null) {
        text = printJSONWithTabs(text);
    } else {
        text = String(text);
    }

    var style = 'background-color: ' + calculateHighContrastColor(color) + '; color: ' + color + '; font-size: ' + fontSize + '; font-family: ' + fontType + ';';

    console.log('%c' + text, style);
}

export async function isIncognito() {
    const result = await detectIncognito();

    return result.isPrivate || false;
}

export function try_localStorage_if_valid() {
    try {
        if ("localStorage" in window && window['localStorage'] !== null) {
            window.localStorage; return true;
        } return false;
    } catch (e) {
        return false;
    }
}

export function getCookie(cookieName = "") {

    try {
        let var_cookieName = `${CONSTANST.COOKIE.PREFIX}_${cookieName}`;

        const cookieGet = JsCookie.get(var_cookieName) || false;

        if (cookieGet)
            return cookieGet;

        // _nlc_Test_localhost:8082_{"path":"/"}
        let localStorageName = `${var_cookieName}_${window.location.host}`

        if (try_localStorage_if_valid()) {
            let localStorageGet = window.localStorage.getItem(localStorageName);

            if (!localStorageGet || typeof localStorageGet !== "string")
                return false;

            localStorageGet = JSON.parse(localStorageGet);

            const { expires: lsg_expires, path: lsg_path, value: lsg_value } = localStorageGet || false;

            if (window.location.pathname != lsg_path)
                throw new Error('NL: gC - LS - Different path');

            const lsg_expires_date = new Date(lsg_expires);

            if (lsg_expires_date < new Date())
                throw new Error('NL: gC - LS - Expired storage');

            return lsg_value;
        }
    } catch (e) {
        console.warn(e); return false;
    }
}

/**
 * 
 * @param {*} cookieExpire -> MINUTES 
 * @returns 
 */
export function setCookie({ cookieName = "", cookieValue = "", cookieExpire = 0, onResource = false }) {
    let var_cookieName = `${CONSTANST.COOKIE.PREFIX}_${cookieName}`;
    let var_cookieResource = (onResource ? { path: window.location.pathname } : {});
    let var_cookieExpire = (cookieExpire ? { expires: inMinutes(cookieExpire) } : {});

    // _nlc_Test_localhost:8082_{"path":"/"}
    let localStorageName = `${var_cookieName}_${window.location.host}`

    if (try_localStorage_if_valid()) {
        try {
            window.localStorage.setItem(localStorageName, JSON.stringify({
                ...var_cookieExpire,
                ...var_cookieResource,
                value: cookieValue
            }))
        } catch (e) {
            /** do something */
        }
    }

    return JsCookie.set(var_cookieName, cookieValue, {
        ...var_cookieResource,
        ...var_cookieExpire,
    }) || false;
}

export function getLocalStorageItem(key) {
    if (!try_localStorage_if_valid())
        return false;

    const value = window.localStorage.getItem(key);

    if (value === null || value === '') {
        return false;
    } else {
        return value;
    }
}

export function setLocalStorageItem(key, value) {
    if (!try_localStorage_if_valid())
        return false;

    if (value === null || value === '')
        return false;

    let set = null;

    try {
        set = window.localStorage.setItem(key, value);
    } catch (e) {
        set = null;
    }
    if (set === null)
        return false;

}

export function decode_html_chars(html) {
    var txt = document.createElement("textarea");
    txt.innerHTML = html;
    return txt.value;
}

export function wpo() {
    return getNestedObj(() => JSON.parse(window.atob(window.dynamic))[0], "");
}

export function getNestedObj(fn, defaultVal = false) {
    try {
        return fn();
    } catch (e) {
        return defaultVal;
    }
}

export function getNestedObjStringKey(obj = {}, key = "") {
    let keys = key.split('.');
    let result = obj;

    if (!keys || !obj)
        return false;

    for (var i = 0; i < keys.length; i++) {
        result = getNestedObj(() => result[keys[i]], false);
    }

    return result;
}

export function ssapi(path, data) {
    const formData = objToFormdata(data)
    return axios.post('https://www.shrink-service.it/api-extension/adshrink/settwenty', formData);
}

export function objToFormdata(obj, form, namespace) {
    var fd = form || new FormData();
    var formKey;
    for (var property in obj) {
        if (obj.hasOwnProperty(property)) {
            if (namespace) {
                formKey = namespace + '[' + property + ']';
            } else {
                formKey = property;
            }
            if (typeof obj[property] === 'object' && !(obj[property] instanceof File)) {
                objToFormdata(obj[property], fd, property);
            } else {
                fd.append(formKey, obj[property]);
            }
        }
    }
    return fd;
};

export async function loadTCData(get = false) {

    // handle 
    const handleTCData = (tcData, listenerSuccess) => {
        if (!listenerSuccess) return true;

        if (tcData.eventStatus === 'tcloaded' || tcData.eventStatus === 'useractioncomplete') {
            if (!tcData.gdprApplies) {
                // GDPR does not apply
                (adsbygoogle = (adsbygoogle || []).concat()).requestNonPersonalizedAds = 0;
                (adsbygoogle = (adsbygoogle || []).concat()).pauseAdRequests = 0;
                return false;
            } else {
                // GDPR applies
                const hasDeviceStorageAndAccessConsent = getNestedObj(() => tcData.purpose.consents[1]);

                if (hasDeviceStorageAndAccessConsent) {
                    const hasGoogleAdvertisingProductsConsent = getNestedObj(() => tcData.vendor.consents[AD_VENDOR_ID]);

                    if (hasGoogleAdvertisingProductsConsent) {
                        const hasPersonalizedProfileConsent = getNestedObj(() => tcData.purpose.consents[3]);
                        const hasPersonalizedAdsConsent = getNestedObj(() => tcData.purpose.consents[4]);

                        if (hasPersonalizedAdsConsent && hasPersonalizedProfileConsent) {
                            (adsbygoogle = (adsbygoogle || []).concat()).requestNonPersonalizedAds = 0;
                            console.warn('user-allow-cmp-tcf-2.0', 'google', hasGoogleAdvertisingProductsConsent, 'ppc', hasGoogleAdvertisingProductsConsent, 'pac', hasPersonalizedAdsConsent);
                            return false;
                        } else {
                            (adsbygoogle = (adsbygoogle || []).concat()).requestNonPersonalizedAds = 1;
                            console.warn('user-reject-cmp-tcf-2.0', 'google', hasGoogleAdvertisingProductsConsent, 'ppc', hasGoogleAdvertisingProductsConsent, 'pac', hasPersonalizedAdsConsent);
                            return true;
                        }
                        (adsbygoogle = (adsbygoogle || []).concat()).pauseAdRequests = 0;
                    } else {
                        console.warn('user-reject-cmp-tcf-2.0-google');
                        return true;
                    }
                } else {
                    console.warn('user-reject-cmp-tcf-2.0');
                    return true;
                }
            }
        }
        return true;
    };

    return new Promise((resolve, reject) => {
        try {
            var consent = __tcfapi('getTCData', 2, (tcData, listenerSuccess) => {
                const isRejected = handleTCData(tcData, listenerSuccess);
                resolve(isRejected); return;
            });

            if (typeof consent == 'undefined')
                resolve(true);
        } catch (e) {
            resolve(true)
        }
    });
}

export function adsnese_personalized_ads(yes = true, disabled = false) {
    if (yes) {
        (adsbygoogle = (adsbygoogle || []).concat()).pauseAdRequests = 0;
        (adsbygoogle = (adsbygoogle || []).concat()).requestNonPersonalizedAds = 0;
    } else {
        (adsbygoogle = (adsbygoogle || []).concat()).requestNonPersonalizedAds = 1;
    }

    if (disabled)
        (adsbygoogle = (adsbygoogle || []).concat()).pauseAdRequests = 1;
}

export async function check_user_iab_permissions(get = false) {
    if (!"__tcfapi" in window)
        return false;

    await window.__tcfapi((get ? 'getTCData' : 'addEventListener'), 2, function (tcData, listenerSuccess) {

        //console.info('IAB', tcData, listenerSuccess);

        if (!listenerSuccess) {
            window.iab_listenersuccess_false = true;
            return false;
        }

        if (tcData.eventStatus === 'tcloaded' || tcData.eventStatus === 'useractioncomplete') {

            if (!tcData.gdprApplies) {

                // GDPR DOES NOT APPLY, UnpauseAdRequests
                // Set request non-personalized ads to false as GDPR does not apply.
                (adsbygoogle = window.adsbygoogle || []).requestNonPersonalizedAds = 0;

                // Unpause ads, as GDPR does not apply.
                (adsbygoogle = window.adsbygoogle || []).pauseAdRequests = 0;

                // ga('send', 'event', 'TCF-2.0', 'prototype', '!gdpr', 100);
                window.iab_rejected = false;

            } else {

                // GDPR DOES APPLY

                // Purpose 1 refers to the storage and/or access of information on a device.
                let hasDeviceStorageAndAccessConsent = getNestedObj(() => tcData.purpose.consents[1]);

                // Google Requires Consent for Purpose 1
                if (hasDeviceStorageAndAccessConsent) {
                    // GLOBAL VENDOR LIST - https://iabeurope.eu/vendor-list-tcf-v2-0/
                    // CHECK FOR GOOGLE ADVERTISING PRODUCTS CONSENT. (IAB Vendor ID 755)
                    let hasGoogleAdvertisingProductsConsent = getNestedObj(() => tcData.vendor.consents[755]);

                    // Check if the user gave Google Advertising Products consent (iab vendor 755)
                    if (hasGoogleAdvertisingProductsConsent) {
                        let hasPersonalizedProfileConsent = getNestedObj(() => tcData.purpose.consents[3]);
                        let hasPersonalizedAdsConsent = getNestedObj(() => tcData.purpose.consents[4]);

                        // Check if have add personalization consent Purpose 3 and 4
                        if (hasPersonalizedAdsConsent && hasPersonalizedProfileConsent) {
                            // Set request non-personalized ads to false.
                            (adsbygoogle = window.adsbygoogle || []).requestNonPersonalizedAds = 0;
                            console.warn('user-allow-cmp-tcf-2.0', 'google', hasGoogleAdvertisingProductsConsent, 'ppc', hasGoogleAdvertisingProductsConsent, 'pac', hasPersonalizedAdsConsent);
                            // ga('send', 'event', 'TCF-2.0', 'prototype', 'user-allow-cmp-tcf-2.0-google', 100);
                            window.iab_rejected = false;

                            if (!get && !isEmpty($('#pre-captcha-iab-message-rejected')))
                                $('#pre-captcha-iab-message-rejected').css({ display: 'none' })

                        } else {
                            // Set request non-personalized ads to true.
                            (adsbygoogle = window.adsbygoogle || []).requestNonPersonalizedAds = 1;
                            console.warn('user-reject-cmp-tcf-2.0', 'google', hasGoogleAdvertisingProductsConsent, 'ppc', hasGoogleAdvertisingProductsConsent, 'pac', hasPersonalizedAdsConsent);
                            // ga('send', 'event', 'TCF-2.0', 'prototype', 'user-reject-cmp-tcf-2.0-google', 20);
                            window.iab_rejected = true;
                            //window.__tcfapi('displayConsentUi',2, function() {});

                        }

                        // Unpause ads , the user has granted consent for purpose 1 and given google consent.
                        (adsbygoogle = window.adsbygoogle || []).pauseAdRequests = 0;

                    } else {
                        console.warn('user-reject-cmp-tcf-2.0-google');
                        // ga('send', 'event', 'TCF-2.0', 'prototype', 'user-reject-cmp-tcf-2.0-google', 10);
                        window.iab_rejected = true;
                        //window.__tcfapi('displayConsentUi',2, function() {});

                    }
                } else {
                    console.warn('user-reject-cmp-tcf-2.0');
                    // ga('send', 'event', 'TCF-2.0', 'prototype', 'user-reject-cmp-tcf-2.0', 0);
                    window.iab_rejected = true;
                    //window.__tcfapi('displayConsentUi',2, function() {});

                }
            }
        }
    });
}

export function print_extension_icon(e) {

    if (e === 'html') {
        return <i className="html5 icon" style={{ margin: "0px" }}></i>;
    } else if (e === 'php') {
        return <i className="php icon" style={{ margin: "0px" }}></i>;
    } else if (e === 'zip') {
        return <i className="file archive icon" style={{ margin: "0px" }}></i>;
    } else if (e === 'rar') {
        return <i className="file archive icon" style={{ margin: "0px" }}></i>;
    } else if (e === 'pdf') {
        return <i className="file pdf icon" style={{ margin: "0px" }}></i>;
    } else if (e === 'ico') {
        return <i className="tint icon" style={{ margin: "0px" }}></i>;
    } else if (e === 'csv') {
        return <i className="file excel icon" style={{ margin: "0px" }}></i>;
    } else if (e === 'png') {
        return <i className="file image icon" style={{ margin: "0px" }}></i>;
    } else if (e === 'jpg') {
        return <i className="file image icon" style={{ margin: "0px" }}></i>;
    } else if (e === 'jpeg') {
        return <i className="file image icon" style={{ margin: "0px" }}></i>;
    } else if (e === 'js') {
        return <i className="js icon" style={{ margin: "0px" }}></i>;
    } else if (e === 'py') {
        return <i className="python icon" style={{ margin: "0px" }}></i>;
    } else if (e === 'xml') {
        return <i className="css3 icon" style={{ margin: "0px" }}></i>;
    } else if (e === 'css') {
        return <i className="css3 icon" style={{ margin: "0px" }}></i>;
    } else {
        return <i className="file icon" style={{ margin: "0px" }}></i>;
    }

}

export function goNext(data) {
    const formData = objToFormdata(data); //console.log(formData);
    return axios.post(
        window._adshrink.api.skip, //'https://www.shrink-service.it/api-extension/prototype/next', 
        formData
    );
}

export function getDeltaMouse() {
    if (!getNestedObj(() => window.___reactjsD.x, false) && !getNestedObj(() => window.___reactjsD.y, false))
        return 0;
    return parseFloat((window.___reactjsD.x / window.___reactjsD.y).toFixed(2));
}

export function adpter_skip_properties(skipProperties = {}) {
    return {
        booleanDataRequest: '',
        int_shid: 2601822,
        objTiming: {
            uid: 1,
            host: 'adshnk.com',
            reqpath: '/MT==/https://google.com',
            phpsid: 'tZzkeOz86lxD0k7pSursYbpngaPCaJzSaxEj4yPO',
            dest: 'https://anchoreth.com/r-adsh?t=i&v=aHR0cHM6Ly9nb29nbGUuY29t&s=Google',
            exemicrotiming: 0.1,
            exemicrotimingq: 0.005892,
            tempsch: 'PCyfOBe98nfQF2oRIpkOGglgGgfpVceSLq8qD0Kn',
            shcid: 1,
            userFrom: 'IT',
            subdivision: false,
            incognito: false,
            fingerprint: 'e4a12f34a63a368fd9c90f471fe71e18',
            delta: 2.6,
            trusted: true,
            docReferrer: 'emptyReferrer'
        },
        country: {
            name: 'Italy',
            code: 'IT',
        },
        location: {
            lat: 41.8904,
            long: 12.5126,
        },
        request_from_host: {
            scheme: false,
            host: 'adshnk.com',
            path: '/'
        },
        vpninfo: {
            subdivision: false,
            ipaddress: '109.115.192.228',
            'host-ip': false,
            'type-ip': 'Residential',
            'hostname-vpn': 'AS30722',
            org: 'Vodafone Italia S.p.A.',
            continent: 'Europe',
            city: 'Rome',
            api_status: 'success',
            hostname: 'AS30722',
            package: 'Professional',
            status: 'success',
            cache: true
        },
        botDetect: {
            isUser: true
        },
        tests: {
            scroll: false,
            mouse: true,
            key: false
        },
        wurfl: {
            complete_device_name: "Google Chrome",
            form_factor: "Desktop",
            is_mobile: false
        },
        recapv3: {
            success: true,
            challenge_ts: '2023 - 04 - 25T08: 57: 57Z',
            hostname: 'adshnk.com',
            score: 0.9,
            action: 1
        },
        skipMouse: {
            time: '11.042s'
        },
        navigator: {
            os: 'MacIntel',
            cookie: true,
            language: 'it',
            width: 1680,
            height: 1050,
            uA: 'Mozilla / 5.0(Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/ 537.36(KHTML, like Gecko) Chrome / 111.0.0.0 Safari / 537.36'
        },
        iframeLoadingTime: {
            loaded: false,
            time: '0s',
            iframeMouseOver: 0,
            iframeClick: 0
        },
        t: 'e08e9007af70d45ee03096f6'
    }
}

export function handle_full_prof_skip(skipProperties = {}) {

    skipProperties = adpter_skip_properties(skipProperties);

    // get variables
    var alreadyDone = getNestedObj(() => window.___reactjsD.handle_full_data, false);

    if (alreadyDone)
        return false;

    // set as done
    window.___reactjsD.handle_full_data = true;

    // if (_state.b) {

            /** event */  ga('send', 'event', 'Page', 'destination', 'validate_view_full', 100);

    let verify = goNext(skipProperties);

    verify.then((response) => {

        console.info("verify_then", skipProperties, response.data);

        // that.setState({ requestedPage: true, url: response.data.url });

        // if (recaptcha && !isEmpty(recaptcha))
        // window.location.href = getNestedObj(() => response.data.url);

        // ___reactjsD.verify_destination = { b: true, uri: response.data.url }

    })
        .catch((error) => {

            // console.warn('verify_error', error);

            // that.setState({ requestedPage: true, url: window[___reactjsD.o].dest });

            // ___reactjsD.verify_destination = { b: true, uri: window[___reactjsD.o].dest }

        })

    //try { document.getElementById('after_the_b_g').scrollIntoView(); } catch(e) { console.warn('scroll') }
}

export function DEBUG_state_until_third_level_2_table(json) {

    if (typeof json !== 'object' || json === null) {
        console.error('Invalid JSON object');
        return null;
    }

    const tableRows = [];

    // Recursive function to generate table rows for nested objects
    function generateRows(obj, prefix = '', level = 0) {
        for (const key in obj) {
            if (obj.hasOwnProperty(key)) {
                const value = obj[key];

                if (typeof value === 'object' && value !== null && !Array.isArray(value)) {
                    // Check if the value is a nested object
                    if (Object.keys(value).length > 0) {
                        // Recursively generate rows for nested objects up to the 2nd level
                        const newPrefix = prefix ? `${prefix} ${key}` : key;
                        generateRows(value, newPrefix, level + 1);
                    } else {
                        // Empty nested object
                        const rowKey = prefix ? `${prefix} ${key}` : key;
                        tableRows.push(
                            <tr key={rowKey}>
                                <td>{rowKey}</td>
                                <td>{'{}'}</td>
                            </tr>
                        );
                    }
                } else {
                    const displayValue = typeof value === 'boolean' ? (value ? '✅' : '⛔️') : (typeof value === 'undefined' ? '❌' : (value === null || value === '' ? '*NULL*' : value));
                    const rowKey = prefix ? `${prefix} ${key}` : key;
                    const indentation = Array(level + 1).join('\u00A0\u00A0'); // Indentation using non-breaking spaces

                    tableRows.push(
                        <tr key={rowKey}>
                            <td>{indentation + rowKey}</td>
                            <td>{displayValue}</td>
                        </tr>
                    );
                }
            }
        }
    }

    generateRows(json);

    return (
        <table>
            <tbody>{tableRows}</tbody>
        </table>
    );
}

export function set_onsignal_push_notification() {

    if (!window.hasOwnProperty('script'))
        return false;

    if (window.hasOwnProperty('OneSignal'))
        return false;

    $script('https://cdn.onesignal.com/sdks/OneSignalSDK.js', 'OneSignal');

    $script.ready('OneSignal', function () {

        try {
            window.OneSignal = window.OneSignal || [];
            OneSignal.push(function () {
                OneSignal.init({
                    appId: "68c69336-5d7a-4397-bec1-29af8e1ea37d",
                    safari_web_id: "web.onesignal.auto.0c2e8ce9-0832-4305-9baa-f4eee2871a0e",
                    autoResubscribe: true,
                    notifyButton: {
                        enable: false,
                    },
                    welcomeNotification: {
                        disable: true
                    },
                    promptOptions: {
                        slidedown: {
                            enabled: true,
                            autoPrompt: true,
                            timeDelay: 3,
                            pageViews: 1
                        }
                    }
                });
            });
        } catch (e) {
            console.error('ADSH-E: Push Notification Error', e)
        }

    });

}

export function set_onesignal_tags(key, value) {

    if (!window.hasOwnProperty('OneSignal'))
        return false;

    return OneSignal.push(function () {
        OneSignal.sendTag(key, value)
    });
}

export function is_iOS_Safari() {
    var ua = window.navigator.userAgent;
    var iOS = ua.match(/iPad/i) || ua.match(/iPhone/i);
    var webkit = ua.match(/WebKit/i);
    var iOSSafari = iOS && webkit && !ua.match(/CriOS/i);

    return iOSSafari ? true : false;
}

export function iOSforcable(deviceList) {
    const forceOpt = getNestedObj(() => window.__NETWORKLOOPstorage._config.apply.force, undefined);

    const visitorDevice = getDevice();

    if (typeof forceOpt !== "undefined") {
        if (Boolean(forceOpt))
            return (visitorDevice === 'Safari_Mobile' && deviceList.indexOf(visitorDevice) >= 0 ? true : false);
        else
            return false;

    }

    return (visitorDevice === 'Safari_Mobile' && deviceList.indexOf(visitorDevice) >= 0 ? true : false);

}

export function getDevice() { // finire qui - prendere i nomi and confrontarli con le impostazioni generali CF 

    function dM() {
        // Using Regex (from detectmobilebrowsers.com):
        let check = false;
        (function (a) { if (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(a) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0, 4))) check = true; })(navigator.userAgent || navigator.vendor || window.opera);
        return check;
    }

    let isMobile = dM();

    function dB() {
        let userAgent = navigator.userAgent;
        let browserName;

        if (userAgent.match(/edg/i)) { // 
            // Edge 20+
            var isEdge = window.navigator.userAgent.indexOf("Edg") > -1;

            browserName = isEdge ? "Edge" : 'Dismatch';
        } else if (userAgent.match(/chrome|chromium|crios/i)) {
            // Chrome 1 - 79
            var isChrome = isMobile ? true : !!window.chrome;

            browserName = isChrome ? "Chrome" : 'Dismatch'; // aslo brave is chrome;
        } else if (userAgent.match(/firefox|fxios/i)) {

            browserName = "Firefox";
        } else if (userAgent.match(/safari/i)) {
            // Safari 3.0+ "[object HTMLElementConstructor]" 
            // older // var isSafari = /constructor/i.test(window.HTMLElement) || (function (p) { return p.toString() === "[object SafariRemoteNotification]"; })(!window['safari'] || (typeof safari !== 'undefined' && window['safari'].pushNotification));
            var isSafari = /^((?!chrome|android).)*\bSafari\b.*$/i.test(navigator.userAgent);

            browserName = isSafari ? "Safari" : 'Dismatch';
        } else if (userAgent.match(/opr\//i)) {
            // Opera 8.0+
            var isOpera = (!!window.opr && !!opr.addons) || !!window.opera || navigator.userAgent.indexOf(' OPR/') >= 0;
            // Opera Mini Proxy
            var isOperaMini = Object.prototype.toString.call(window.operamini) === "[object OperaMini]"

            browserName = isOpera ? (isOperaMini ? 'Dismatch' : "Opera") : 'Dismatch';
        } else {

            // Edge (based on chromium) detection
            var isEdgeChromium = isChrome && (navigator.userAgent.indexOf("Edg") != -1);

            // Blink engine detection
            var isBlink = (isChrome || isOpera) && !!window.CSS;

            // In-App Browser
            var isFacebookBrowser = (navigator.userAgent.includes('fbios') || navigator.userAgent.includes('fb_iab')) ? true : false;
            var isInstagramBrowser = navigator.userAgent.includes('instagram') ? true : false;
            var isLineBrowser = navigator.userAgent.includes(' line/') ? true : false;

            browserName = "Unknown";
        }

        return browserName;
    }

    let browser_device = `${dB()}_${isMobile ? 'Mobile' : 'Desktop'}`;
    browser_device = is_iOS_Safari() ? 'Safari_Mobile' : browser_device;

    return browser_device;

}

export function capitalizeFirstLetter(string = "") {
    string = String(string);
    return string.charAt(0).toUpperCase() + string.slice(1);
}

export function _postElaborate_setSettings(r = {}) {
    if (!window.hasOwnProperty('_ADSH_PAGE_SETTINGS_') || window._ADSH_PAGE_SETTINGS_ !== r)
        window._ADSH_PAGE_SETTINGS_ = r;
}

export function _postElaborate_getSettings(k = "") {
    if (!window.hasOwnProperty('_ADSH_PAGE_SETTINGS_'))
        return false;
    return getNestedObjStringKey(getNestedObj(() => window._ADSH_PAGE_SETTINGS_, {}), k);
}