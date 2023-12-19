// jest-setup.js
const { JSDOM } = require('jsdom');

async function importScript(src) {
    return new Promise((resolve, reject) => {
        const script = window.document.createElement('script');
        script.src = src;
        script.onload = resolve;
        script.onerror = reject;
        window.document.body.appendChild(script);
    });
}

async function loadScriptsFromCDN(urls) {
    const dom = new JSDOM('<html><body></body></html>', {
        url: 'http://localhost',
        runScripts: 'dangerously',
        resources: 'usable',
    });

    const { window } = dom;

    await Promise.all(urls.map(url => importScript(url)));

    return window;
}

(async () => {
    const cdnUrls = [
        'https://cdn.jsdelivr.net/jquery/latest/jquery.min.js',
        'https://cdnjs.cloudflare.com/ajax/libs/react/17.0.2/umd/react.production.min.js',
        'https://cdnjs.cloudflare.com/ajax/libs/Cookies.js/1.2.1/cookies.min.js',
        'https://apis.google.com/js/platform.js?onload=on_load_gapi',
        'https://fundingchoicesmessages.google.com/i/pub-6916142683962713?ers=1',
        'https://cdn.jsdelivr.net/momentjs/latest/moment.min.js',
        'https://cdn.trackjs.com/agent/v3/latest/t.js',
        'https://cdn.jsdelivr.net/npm/lodash@4.17.15/lodash.min.js',
        'https://cdnjs.cloudflare.com/ajax/libs/toastr.js/latest/js/toastr.min.js',
        'https://cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.4.1/semantic.min.js',
        'https://cdn.jsdelivr.net/gh/adshrink/skip.prod.js@main1.117/url.min.js',
        'https://cdnjs.cloudflare.com/ajax/libs/react-dom/17.0.2/umd/react-dom.production.min.js',
        'https://cdnjs.cloudflare.com/ajax/libs/axios/0.19.2/axios.min.js',
        'https://cdn.jsdelivr.net/npm/vanilla-lazyload@17.3.1/dist/lazyload.min.js',
        // nuova version
        'https://cdn.jsdelivr.net/gh/adshrink/skip.prod.js@main1.207/tcfapi.js',
        'https://wurfl.io/wurfl.js',
        'https://cdnjs.cloudflare.com/ajax/libs/fingerprintjs2/1.8.1/fingerprint2.min.js',
        'https://cdn.jsdelivr.net/gh/adshrink/skip.prod.js@main1.111/botDetector.js',
        'https://www.google.com/recaptcha/api.js'
        // Add more CDN URLs as needed
    ];

    const window = await loadScriptsFromCDN(cdnUrls);

    // Access the globally available objects or functions defined by the scripts
    const object1 = window.$;
    const object2 = window.Cookies;
    const object3 = window.WURFL;
    const object4 = window._botDetect;
    const object5 = window._Fingerprint2;
    const object6 = window._gapi;
    const object7 = window._grecaptcha;
    const object8 = window.___tcfapi;
    const object9 = window.React;
    const object10 = window.ReactDOM;
    // ...

    // Your mock implementation or modifications to the objects go here

    // Export the objects as needed
    module.exports = { React: object9, ReactDOM: object10, $: object1, Cookies: object2, WURFL: object3, botDetect: object4, Fingerprint2: object5, gapi: object6, grecaptcha: object7, __tcfapi: object8 };
})();
