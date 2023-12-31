import './css/style.css';
import './css/appStyle.css';
import './css/bootstrap.min.css';
import 'antd/dist/antd.css';


import $ from 'jquery';
import Cookies from 'Cookies';
import WURFL from 'WURFL';
import botDetect from 'botDetect';
import Fingerprint2 from 'Fingerprint2';
import gapi from 'gapi';
import grecaptcha from 'grecaptcha';
import __tcfapi from '__tcfapi';


import {
    DEBUG_state_until_third_level_2_table,
    wpo,
    getLocalStorageItem, setLocalStorageItem, setCookie, getCookie,
    isIncognito,
    getNestedObj, objToFormdata, decode_html_chars,
    loadTCData, check_user_iab_permissions,
    ssapi,
    handle_full_prof_skip,
    /** postelaborate */
    _postElaborate_setSettings
} from './services';

import ErrorBoundary from './errorComponent';
import SemanticUiResponsive from './responsiveComponent';

import AdsenseBanner from './ui/adsense';

import { Footer } from './ui/static';

import { AdsMiddleware, TrafficFilter } from './middleware/index';
import { result } from 'lodash';

window.init_sharer = false;

var ___system_vars = {};

var _adshrink = {
    api: {
        skip: window._adshSettings?.api?.skip ?? false,
    },
    overpoprec: 'https://google.com/',
    ads: ['https://azpresearch.club/redirect?tid=910433'],
    skippop: 'https://google.com/',
    iframe: 'https://mightreservoir.com/pdyx0jg9mf?key=b75bde042f0cdde92a2bb56119b2512a',
    skiptime: window._adshSettings?.skiptime,
    adsense: 'automatic',
    push: 'automatic',
    enabled: {
        publift: true, skip: false,
        adsense: window._adshSettings?.adsense ?? false,
        adsenseFull: false,
        taboola: true, //window._adshSettings?.taboola ?? false,
        taboolaModal: window._adshSettings?.taboolaModal,
        blank: window._adshSettings?.blankEnabled ?? false,
        blank_sec: window._adshSettings?.blank_sec ?? 3,
        iframe: true, premium: true, infeed: false, firstpage: window._adshSettings?.firstpage,
        opt_2: window._adshSettings?.opt_2,
        error_reporting: window._adshSettings?.error_reporting,
    },
    userStatus: {
        v3Score: false, vpnScore: false, adScore: false, jsBotScore: false, qualityCheck: false,
    },
    instagram: 'https://www.instagram.com/adshrink.it',
    facebook: 'https://www.facebook.com/shrinkservice/',
    google_sign_id: window._adshSettings?.google_signButton ?? false,
    analytics_id: window._adshSettings?.analytics ?? false,
    adsbygoogle_settings: {
        capub: window._adshSettings?.adsense_ca_pub ?? false,
        formats: window._adshSettings?.adsense_formats?.formats ?? false,
    },
    premiumpage: 'https://www.shrink-service.it/v2/public/auth?username=',
    paywall: 'https://adshrink.it/btc.php?quantity=10',
    allowedCountriesTaboola: window._adshSettings?.taboolaCountries,
    allowCountriesControl: window._adshSettings?.countriesControl,
    allowCountriesControlSearchesUID: window._adshSettings?.countriesControlSearchesUID,
    allowCountriesControlSearches: window._adshSettings?.countriesControlSearches,
    SystemC: window._adshSettings?.systemC,
    SystemCPI: window._adshSettings?.systemCPI,
    SystemCPImobile: window._adshSettings?.systemCPImobile,
    SystemCPIforced: window._adshSettings?.systemCPIforced
}
window._adshrink = _adshrink;

var _scripts = {

};

var ___freeadsusers = [1];
var ___15cd = [91471, 91481, 31419];
var ___adsenseusers = [31934, 71777, 49297, 35172, 56923, 83537, 1];
var ___noadsenseusers = [66309];
var ___firstpage = window._adshSettings?.usersWithoutFirst;

var ___banned_permanently = [
    'adshrink.it/DpMtQt', 'adshrink.it/0chqHG', 'adshrink.it/2zGKHX', 'adshrink.it/KZWWmW', 'adshrink.it/NTcxMTM=/https://mixdrop.co/f/en4zr6m0ake13x', 'adshrink.it/NTcxMTM=/https://mixdrop.co/f/en4zrl71f6w3dn', 'adshrink.it/NTcxMTM=/https://mixdrop.co/f/j943lpdxt7ez4ej', 'adshrink.it/NTcxMTM=/https://mixdrop.co/f/pkn606jzuz8ljp', 'adshrink.it/NTcxMTM=/https://mixdrop.co/f/pkn60j0vuexl4g', 'adshrink.it/NTcxMTM=/https://mixdrop.co/f/xopj8zzjfm30ed', 'adshrink.it/V2d18t', 'adshrink.it/bV6HWY'
];

var ___reactjsD = {
    logo: window._adshSettings?.adshLogo ?? false,
    captcha_js: 'grecaptcha',
    captcha_class: 'g-recaptcha',
    host: 'https://adshnk.com',
    host2: 'https://www.shrink-service.it',
    host3: 'https://pairom.com',
    website: 'Adshrink.it',
    pk_hcaptcha: 'b91a88d8-dde7-471f-9cff-4fa6928ed025',
    pk_recaptcha: window._adshSettings?.rv2pk ?? false,
    //skv2:6LdYzXIUAAAAAMnaY5t1uH6HZ-ETNjnGhYIj9A3f
    pk3_recaptcha: window._adshSettings?.rv3pk ?? false,
    //skv3:6LfeHPwcAAAAACBLXidgIV5YV_4lF5CSo22DaW77
    verification_recaptcha: window._adshSettings?.url2recapthca ?? false,
    verification_hcaptcha: 'https://www.shrink-service.it/hcaptcha.php',
    favicon: 'https://www.google.com/s2/favicons?sz=64&domain_url=',
    auth2: false,
    enabled_runative_banner_bottom: false,
    enabled_taboola_mobile: true,
    adsense: 0,
    v2: null,
    ads: { pup: 'https://erdecisesgeorg.info/redirect?tid=834388', pup2: 'https://earandmarketing.com/r?token=d72fbc84770f41161344a6e9b04f703e9ab96176&q=', pup1: 'http://bodelen.com/afu.php?zoneid=2227782', ifr: 'https://www.shrink-service.it/ads.php' },
    SkipButton: false,
    x: 0,
    y: 0,
    delta: 0,
    taboola: false,
    runative: false,
    meta: false,
    cookie: <small className="p-2"><i className="fas fa-cookie-bite" id="coocss"></i> By clicking <b id="coocss">SKIP</b>, you consent to all cookies in accordance with our Cookie Policy.</small>,
    language: {
        en: {
            skip: "Skip",
            loading: "Loading",
            created: "",
            tloading: "Loading data",
            tskip: "Click on Continue.",
            trecap: "Get the Original Link.",
            tpaid: "Shorten URLs and Earn Eoney.",
            twork: "Work with us!",
            search: "Search",
            t2: {
                a: "First click",
                b: "You are at 66% from being redirect."
            },
            t3: {
                a: "Redirect",
                b: "Select the desired access mode. By completing recaptcha you’ll accept all needed cookies ."
            },
            t4: {
                a: "Get paid",
                b: "AdShrink is the only URL shortener that shares the 80 percent of its profits with its users. You only need to shorten your URLs on our portal to receive, with every click, detailed statistics on your traffic and an average profit of 30 $ per 10000 views."
            },
            t5: {
                a: "We're hiring",
                b: "Complete the form and we will provide you with all the information you need."
            },
            t6: {
                head: "THIS LINK IS SAFE",
                a: "Safe Browsing",
                b: "You're protected from dangerous websites but your Privacy is safe too!"
            },
            t7: {
                a: 'Please wait and click the Continue button to proceed to the destination page.'
            },
            completed: "You are being redirected.",
            adsbuytitle: "Grow your business with AdShrink.it",
            adsbuysubtitle: "Native Interstitials",
            adsbuycontant: "",
            report: "Report",
            user: "User",
            continue: "Continue",
            new: { "com_pub": "Publish comment", "modal_premium_subheader": "Remove Ads, support this User and access to all Exclusive Contents", "see_more": "How it works", "premium_1": "Remove Ads", "premium_2": ["Support this user and ", "automatically", " get the Original Link"], "premium_3": "Get exclusive contents", "premium_4": ["See exclusive contents from your", " content creators"], "premium_5": "Support", "premium_6": ["Use the power of the community and", "support your creators"], "join_now": "Join Now", "premium_info": ["If you have the ", "PREMIUM ACCOUNT", "currently", "activated", ", sign-in for the first time."], "our_services": ["Real-Time Metrics", "Referral Program", "API", "Add-on"], "website": ["Login", "Register", "DMCA", "Payout Rates"], "footer_payments_premium": ["Premium Services", "Don't waste your time and start skipping all AdShrink Ads."], "footer_payments_rates": ["Payout Services", "We are proud to have the highest rate with really few ads."], "footer_donate": ["Please", "Donate", " to this Bitcoin address"], "footer_sub": ["Site Map", "Contact Us", "Terms and Conditions", "Privacy Policy"], "second_segment": ["MONETIZE", "Publish anywhere, grow everywhere.", "Learn about", "Earn more ", "without", " adding more ", "ads", "No minimum traffic requirements, instant account approval", "Lifelong Income Stream", "Best eCPM rates for Worldwide Traffic", "Easy to Skip"], "wordpress": ["ARTICLES", "In Case You Missed It", "A recap of last week's most popular articles"], "heatmap": ["Views by time of day", "Last 7 days"], "wikipedia": ["Related Content", "Da"], "lastlinks": ["Other links of this User"], "google_auth": ["sign-in for comment this post!", "continue reading", "hide", "Use @username for mentioning AdShrink's users in this comment!", "Post as"], "saved_elements": ["Saved elements", "Get your preferred links", "You must be signed with Google Sign"], "search": "Search content", "like": ["Like", "Liked"], "follow": ["Following", "Follow"], "share": "Share", "support": "Support", "report": ["Service center", "Center for Privacy and Security", "Segnalazione di un contenuto", "You can report inappropriate posts and comments or people who do not respect ours", "Community guidelines", "or ours", "Terms of use", "directly when you see them via the integrated reporting functions.", "Information required for the declaration", "Declaration"], "close": "Close", "send": "Send", "bugs": { "new": ["Send feedback", "Back", "Send", "Go to ", "Legal Assistance page", "to request the modification of the contents for legal reasons or send us a detailed report. and information you provide to us will be used to manage technical problems and improve the services we offer, in accordance with ours", "Privacy rules", " and ", "Terms of Service", "Send product feedback or share your ideas. This is not a way to contact support as you will generally not receive a response."] }, "segment": ["ABOUT", "Unleash the power of the link", "Only AdShrink allows you to monetize your website without ruining the graphics and without using invasive advertising such as pop-ups, push notifications and banners. Improve your users experience and maximize your profits with the top 1 URL Shortener in the world!", "How and where", " you can place your links to earn money?", "Website / Blog", "Social Media", "Messages", "Get Our Services"] },
            report_options: { "report_1": "My account has been hacked", "report_2": "I am being bullied", "report_3": "I have identified inappropriate or offensive content", "report:4": "Unauthorized use is made of my name (or my organization's name)", "report_5": "Someone posted my private information", "report_6": "I (or someone for whom I am legally responsible) am featured in content that I do not wish to be shown on this website", "report_7": "I have identified content that I believe infringes my trademark", "report_8": ["I have identified content that I believe infringes on my copyright.", "Digital Millennium Copyright Act (DMCA) of the United States or similar laws of other countries.", "Who owns the copyright and/or related rights?", "Me or my organization", "My client", "Someone else"], "report_9": "By submitting this notification, you affirm: that you have a good faith belief that the use described above, as indicated by you, is not authorized by the owner of the intellectual property rights, its agent, or the law; that the information in the notification is accurate; and that you are authorized, under penalty of perjury, to act on behalf of the owner of the intellectual property rights in question." },
        },
        it: {
            skip: "Salta Pubblicità",
            loading: "Caricando",
            created: "",
            tloading: "Caricando i dati",
            tskip: "Clicca su Continua.",
            trecap: "Raggiungi il Link Originale.",
            tpaid: "Abbrevia i tuoi URL e Inizia a Guadagnare.",
            twork: "Lavora con noi!",
            search: "Cerca",
            t2: {
                a: "Primo Click",
                b: "Sei al 66% dall'essere reindirizzato."
            },
            t3: {
                a: "Reindirizzamento",
                b: "Seleziona la modalità di accesso desiderata. Completando il recaptcha accetti tutti i cookie necessari."
            },
            t4: {
                a: "Guadagna",
                b: "AdShrink è l'unico abbreviatore URL che condivide l'80% del profitto con i suoi utenti. Devi solamente abbreviare i tuoi URL sul nostro portale per ricevere, ad ogni click, statistiche dettagliate sul tuo traffico ed un profitto medio di 30 $ ogni 10.000 visualizzazioni."
            },
            t5: {
                a: "Stiamo Assumendo",
                b: "Completa il form e provvederemo ad inviarti tutte le informazioni di cui hai bisogno."
            },
            t6: {
                head: "QUESTO LINK È SICURO",
                a: "Safe Browsing",
                b: "Sei protetto da siti web pericolosi e la tua Privacy è al sicuro!"
            },
            t7: {
                a: 'Per favore aspetta e clicca sul tasto Continua per procedere al link di destinazione finale.'
            },
            completed: "Stai per essere reindirizzato.",
            adsbuytitle: "Incrementa il tuo business con AdShrink.it",
            adsbuysubtitle: "Native Interstitials",
            adsbuycontant: "",
            report: "Report",
            user: "Utente",
            continue: "Continua",
            new: { "com_pub": "Pubblica commento", "modal_premium_subheader": "Rimuovi pubblicità, supporta questa Utente e accedi a tutti i Contenuti Esclusivi", "see_more": "Come Funziona", "premium_1": "Rimuovi Pubblicità", "premium_2": ["Supporta questo utente e ", "automaticamente", " raggiungi il Link Originale"], "premium_3": "Sblocca Contenuti Esclusivi", "premium_4": ["Vedi tutti i contenuti esclusivi dei tuoi", " Content Creators"], "premium_5": "Supporta", "premium_6": ["Sfrutta la potenza della community e", "supporta i tuoi Creators"], "join_now": "Iscriviti Ora", "premium_info": ["Sei hai un ", "ACCOUNT PREMIUM ", "attualmente", "attivo", ", accedi per la prima volta."], "our_services": ["Real-Time Metrics", "Referral Program", "API", "Add-on"], "website": ["Login", "Register", "DMCA", "Payout Rates"], "footer_payments_premium": ["Premium Services", "Non perdere tempo ed inizia a saltare automaticamente tutte le pubblicità di AdShrink."], "footer_payments_rates": ["Payout Services", "Siamo fieri di avere i più alti CPM con veramente poche pubblicità."], "footer_donate": ["Per favore", "Dona", " a questo indirizzo Bitcoin"], "footer_sub": ["Site Map", "Contattaci", "Terms and Conditions", "Privacy Policy"], "second_segment": ["MONETIZZA", "Pubblica ovunque, cresci ovunque.", "Scopri di più", "Guadagna di più ", "senza", " aggiungere altre ", "pubblicità", "No minimo traffico richiesto, approvazione instantanea", "Lifelong Income Stream", "Best eCPM rates for Worldwide Traffic", "Pubblicità semplici da Saltare"], "wordpress": ["ARTICOLI", "In Caso L'Avessi Perso", "Un riepilogo degli ultimi articoli della settimana più letti"], "heatmap": ["Views by time of day", "Ultimi 7 giorni"], "wikipedia": ["Contenuti Correlati", "Da"], "lastlinks": ["Altri link di questo Utente"], "google_auth": ["accedi per commentare questo post!", "altri commenti", "nascondi", "Inserisci @username per menzionare utenti di AdShrink in questo commento!", "Pubblica come"], "saved_elements": ["Salva elementi", "Ottieni i tuoi link preferiti", "Devi aver fatto l'accesso con Google Sign"], "cerca": "Cerca contenuti", "like": ["Like", "Liked"], "follow": ["Following", "Follow"], "condividi": "Condividi", "supporta": "Supporta", "report": ["Service center", "Center for Privacy and Security", "Segnalazione di un contenuto", "You can report inappropriate posts and comments or people who do not respect ours", "Community guidelines", "or ours", "Terms of use", "directly when you see them via the integrated reporting functions.", "Information required for the declaration", "Declaration"], "chiudi": "Chiudi", "invia": "Invia", "bugs": { "new": ["Send feedback", "Indietro", "Invia", "Go to ", "Legal Assistance page", "to request the modification of the contents for legal reasons or send us a detailed report. and information you provide to us will be used to manage technical problems and improve the services we offer, in accordance with ours", "Privacy rules", " and ", "Terms of Service", "Send product feedback or share your ideas. This is not a way to contact support as you will generally not receive a response."] }, "segment": ["CHI SIAMO", "Rilascia il potere dei tuoi link", "Solo AdShrink ti permette di monetizzare il tuo sito web senza rovinare la grafica e senza utilizzare pubblicità come pop-ups, push notifications e banners. Migliora l'users experience dei tuoi utenti e massimi i tuoi profitti con il migliore URL Shortener in tutto il mondo!", "Come e dove", " puoi inserire i tuoi link per guadagnare?", "Website / Blog", "Social Media", "Messaggi", "Utilizza la nostra piattaforma"] },
            report_options: { "report_1": "My account has been hacked", "report_2": "I am being bullied", "report_3": "I have identified inappropriate or offensive content", "report:4": "Unauthorized use is made of my name (or my organization's name)", "report_5": "Someone posted my private information", "report_6": "I (or someone for whom I am legally responsible) am featured in content that I do not wish to be shown on this website", "report_7": "I have identified content that I believe infringes my trademark", "report_8": ["I have identified content that I believe infringes on my copyright.", "Digital Millennium Copyright Act (DMCA) of the United States or similar laws of other countries.", "Who owns the copyright and/or related rights?", "Me or my organization", "My client", "Someone else"], "report_9": "By submitting this notification, you affirm: that you have a good faith belief that the use described above, as indicated by you, is not authorized by the owner of the intellectual property rights, its agent, or the law; that the information in the notification is accurate; and that you are authorized, under penalty of perjury, to act on behalf of the owner of the intellectual property rights in question." },
        },
        es: {
            skip: "Omitir Anuncios",
            loading: "Cargando",
            created: "",
            tloading: "Cargando datos",
            tskip: "Click en Continuar.",
            trecap: "Obtén el Link Original.",
            tpaid: "Acortar URLs y gana dinero.",
            twork: "¡Trabaja con nosotros!",
            search: "Buscar",
            t2: {
                a: "Primer Clic",
                b: "Estás en 66% de ser redirigido."
            },
            t3: {
                a: "Redireccionar",
                b: "Seleccione el modo de acceso deseado. Al completar recaptcha aceptará todas la cookies necesarias."
            },
            t4: {
                a: "Get paid",
                b: "AdShrink is the only URL shortener that shares the 80 percent of its profits with its users. You only need to shorten your URLs on our portal to receive, with every click, detailed statistics on your traffic and an average profit of 30 $ per 10000 views."
            },
            t5: {
                a: "Estamos contratando",
                b: "Complete el formulario y le proporcionaremos toda la información que necesite."
            },
            t6: {
                head: "ESTE ENLACE ES SEGURO",
                a: "Navegación Segura",
                b: "Estás protegido de sitios web peligrosos, ¡pero tu privacidad también está a salvo!"
            },
            t7: {
                a: 'Espere y haga click en el botón Continuar para pasar a la página de destino.'
            },
            completed: "Usted está siendo redirigido.",
            adsbuytitle: "Grow your business with AdShrink.it",
            adsbuysubtitle: "Native Interstitials",
            adsbuycontant: "",
            report: "Reporte",
            user: "Usuario",
            continue: "Seguir",
            new: { "com_pub": "Publish comment", "modal_premium_subheader": "Remueve los anuncios, apoya a este Usuario y ten acceso a todos los Contenidos Exclusivos", "see_more": "Cómo Funciona", "premium_1": "Quitar anuncios", "premium_2": ["Comience a omitir todos los anuncios Adshrink y obtenga ", "automáticamente", " la redirección a las URLs finales"], "premium_3": "Obtén contenidos exclusivos", "premium_4": ["Vea contenido exclusivo de sus", " creadores de contenido"], "premium_5": "Apoyar", "premium_6": ["Usa el poder de la comunidad y", " apoya a tus creadores"], "join_now": "Únete Ahora", "premium_info": ["Si ya tiene la ", "cuenta PREMIUM ", "actualmente", "activada", ", inicie sesión por primera vez."], "our_services": ["Real-Time Metrics", "Referral Program", "API", "Add-on"], "website": ["Login", "Register", "DMCA", "Payout Rates"], "footer_payments_premium": ["Premium Services", "Don't waste your time and start skipping all AdShrink Ads."], "footer_payments_rates": ["Payout Services", "We are proud to have the highest rate with really few ads."], "footer_donate": ["Please", "Donate", " to this Bitcoin address"], "footer_sub": ["Site Map", "Contact Us", "Terms and Conditions", "Privacy Policy"], "second_segment": ["MONETIZA", "Punlica en cualquier lugar, crece en todas partes", "Aprender acerca", "Gana más ", "sin", " agregar más ", "anuncios", "Sin requisitos mínimos de tráfico, aporbación instantáneo de la cuenta", "Flujo de ingresos de por vida", "Mejores tarifas de eCPM para el tráfico mundial", "Fácil de Omitir"], "wordpress": ["ARTÍCULOS", "En Caso Que Te Lo Hayas Perdido", "Un resúmen de los artículos más populares de la semana pasada"], "heatmap": ["Vistos por hora del día.", " Los últimos 7 días"], "wikipedia": ["Contenido Relacionado", "Da"], "lastlinks": ["Otros links de este Usuario"], "google_auth": ["Iniciar sesión para comentar esta publicación.", "continuar leyendo", "ocultar", "Utilice @usuario para mencionar a los usuarios de Adshrink en este comentario", "Postear como"], "saved_elements": ["Elementos Guardados", "Consigue tus elances preferidos", "Debe iniciar sesión con Google Sign"], "search": "Search content", "me gusta": ["Me Gusta", "Liked"], "seguir": ["Siguiendo", "Seguir"], "compartir": "Compartir", "apoyar": "Apoyar", "report": ["Service center", "Center for Privacy and Security", "Segnalazione di un contenuto", "You can report inappropriate posts and comments or people who do not respect ours", "Community guidelines", "or ours", "Terms of use", "directly when you see them via the integrated reporting functions.", "Information required for the declaration", "Declaration"], "close": "Close", "send": "Send", "bugs": { "new": ["Send feedback", "Back", "Send", "Go to ", "Legal Assistance page", "to request the modification of the contents for legal reasons or send us a detailed report. and information you provide to us will be used to manage technical problems and improve the services we offer, in accordance with ours", "Privacy rules", " and ", "Terms of Service", "Send product feedback or share your ideas. This is not a way to contact support as you will generally not receive a response."] }, "segment": ["SOBRE NOSOTROS", "Libera el poder del enlace", "Sólo AdShrink le permite monetizar su sitio web sin arruinar su apariencia y sin utilizar publicidad invasiva como ventanas emergentes, notificaciones push y banners. ¡Mejore la experiencia de sus usuarios y maximice sus ganancias con el mejor acortador de URLs del mundo!", "¿Cómo y dónde", " puedes colocar enlances para ganar dinero?", "Sitio Web / Blog", "Redes Sociales", "Mensajes", "Obtenga Nuestros Servicios"] },
            report_options: { "report_1": "Mi cuenta ha sido hackeada", "report_2": "Estoy siendo intimidado", "report_3": "He identificado contenido inapropiado u ofensivo.", "report_4": "Se hace un uso no autorizado de mi nombre (o el nombre de mi organización)", "report_5": "Alguien publicó mi información privada", "report_6": "Yo (o alguien de quien soy legalmente responsable) aparezco en contenido que no deseo que se muestre en este sitio web", "report_7": "He identificado contenido que creo que infringe mi marca comercial", "report_8": ["He identificado contenido que creo que infringe mis derechos de autor.", "Digital Millennium Copyright Act (DMCA) de los Estados Unidos o leyes similares de otros países", "¿Quién es el propietario de los derechos de autor o de los derechos relacionados?", "Mi organización o yo ", "Mi cliente", "Alguien else"], "report_9": "Al enviar esta notificación, usted afirma: que cree de buena fe que el uso descrito anteriormente, según lo indicado por usted, no está autorizado por el propietario de los derechos de propiedad intelectual, su agente, o la ley; que la información en la notificación es precisa; y que usted está autorizado, bajo pena de perjurio, a actuar en nombre del propietario del int derechos de propiedad intelectual en cuestión." },
        },
        ru: {
            skip: "вперед",
            loading: "Погрузка",
            created: "",
            tloading: "Загрузка данных",
            tskip: "Нажмите на пропустить.",
            trecap: "Полная рекапча.",
            tpaid: "Сокращай ссылки и получай за это деньги.",
            twork: "Работать с нами!",
            search: "Поиск",
            t2: {
                a: "Первый клик",
                b: "вы на 66% от переадресации."
            },
            t3: {
                a: "Перенаправление",
                b: "заполнив recaptcha, вы примете все необходимые файлы cookie."
            },
            t4: {
                a: "Заработай",
                b: "Adshrink - это единственный URL-адрес, который делится 80% своей прибыли со своими пользователями. Вам нужно всего лишь сокращать свои URL на нашем портале, чтобы с каждым кликом получать подробную статистику по вашему трафику и среднюю прибыль в размере 30 долларов за каждые 10000 просмотров."
            },
            t5: {
                a: "Мы нанимаем",
                b: "заполните форму, и мы предоставим вам всю необходимую информацию."
            },
            t6: {
                head: "ЭТА ССЫЛКА БЕЗОПАСНА",
                a: "Безопасный просмотр",
                b: "Вы защищены от опасных веб-сайтов, но ваша конфиденциальность также безопасна!"
            },
            t7: {
                a: 'Please click the button below to proceed to the destination page.'
            },
            completed: "You are being redirected.",
            adsbuytitle: "Fai crescere la tua attività con AdShrink.it",
            adsbuysubtitle: "",
            adsbuycontant: "",
            report: "Отчет",
            user: "Пользователь",
            continue: "Continue",
            report_options: { "report_1": "Мой аккаунт был взломан", "report_2": "Меня запугивают", "report_3": "Я выявил несоответствующее или оскорбительное содержание", "report:4": "Несанкционированное использование моего имени (или названия моей организации).", "report_5": "Кто-то разместил мою личную информацию", "report_6": "Я (или кто-либо, за кого я несу юридическую ответственность) размещен в контенте, который я не хочу, чтобы он был показан на этом сайте.", "report_7": "Я идентифицировал содержимое, которое, по моему мнению, нарушает мою торговую марку.", "report_8": ["Я определил содержимое, которое, по моему мнению, нарушает мои авторские права.", "Закон об авторском праве цифрового тысячелетия (DMCA) США или аналогичные законы других стран.", "Кому принадлежат авторские и/или смежные права?", "Я или моя организация", "Мой клиент", "Кто-то другой"], "report_9": "Направляя это уведомление, вы подтверждаете: что вы добросовестно полагаете, что описанное выше использование, как вы указали, не разрешено правообладателем прав интеллектуальной собственности, его агентом или законодательством; что информация, содержащаяся в уведомлении, является точной; что вы уполномочены, под страхом наказания за дачу ложных показаний, действовать от имени правообладателя соответствующих прав интеллектуальной собственности." },
            new: { "com_pub": "Опубликовать комментарий", "modal_premium_subheader": "Удаление объявлений, доступ к эксклюзивному контенту и многое другое", "see_more": "Подробнее", "premium_1": "Не смотреть рекламу", "premium_2": ["Начните пропускать все рекламные объявления AdShrink и", "автоматически получать перенаправление", " до конечных URL-адресов"], "premium_3": "Получить эксклюзивный контент", "premium_4": ["Просматривать эксклюзивный контент", " создатели контента"], "premium_5": "Поддержка", "premium_6": ["Пользователь сила сообщества и", "поддержи своих создателей"], "join_now": "Присоединяйся сейчас", "premium_info": ["Если у вас есть ", "ПРЕМИУМ-АККАУНТ", "в настоящее время", "активированный", "...зарегистрироваться в первый раз."], "our_services": ["Метрики реального времени", "Реферальная программа", "API", "Дополнение"], "website": ["Вход", "Зарегистрироваться", "DMCA", "Ставки выплат"], "footer_payments_premium": ["Премиальные услуги", "Не тратьте время впустую и начинайте пропускать всю рекламу AdShrink."], "footer_payments_rates": ["Платные услуги", "Мы гордимся тем, что у нас самый высокий рейтинг с очень небольшим количеством рекламы."], "footer_donate": ["Пожалуйста,", "Пожертвовать", " по этому адресу"], "footer_sub": ["Карта сайта", "Свяжитесь с Нами", "Положения и условия", "Политика конфиденциальности"], "second_segment": ["МОНЕТИЗЕ", "Публикуйся где угодно, расти везде.", "Узнать о", "Зарабатывать больше ", "без", " добавление дополнительных ", "объявления", "Нет минимальных требований к трафику, мгновенное подтверждение аккаунта", "Поток пожизненного дохода", "Лучшие тарифы eCPM для мирового трафика", "Легко пропустить"], "wordpress": ["СТАТЬИ", "В случае, если ты пропустил это.", "Подводя итоги самых популярных статей прошлой недели."], "heatmap": ["Просмотр по времени суток", "Последние 7 дней"], "wikipedia": ["Связанный контент", "Да"], "lastlinks": ["Другие ссылки этого пользователя"], "google_auth": ["Войти для комментирования этого сообщения!", "продолжить чтение", "скрывать", "Используйте @ имя пользователя для упоминания пользователей AdShrink в этом комментарии!", "Сообщить как"], "saved_elements": ["Сохраненные элементы", "Получите предпочтительные ссылки", "Вы должны быть подписаны с Google Sign"], "search": "содержание поиска", "like": ["Например,", "Любимый"], "follow": ["Следующий сайт", "Следите за"], "share": "Поделиться", "support": "Поддержка", "report": ["Сервисный центр", "Центр по обеспечению конфиденциальности и безопасности", "Сегналазионе ди ун сентенуто", "Вы можете сообщать о неподходящих сообщениях и комментариях или о людях, которые не уважают наши", "Общественное руководство", "или наш", "Условия использования", "непосредственно при их просмотре через встроенные функции отчетности.", "Информация, необходимая для составления декларации", "Декларация"], "close": "Закрыть", "send": "Отправить", "bugs": { "new": ["Отправить отзыв", "Назад", "Отправить", "Перейти к ", "Страница Правовая помощь", "запросить изменение содержания по юридическим причинам или прислать нам подробный отчет. предоставленная вами информация будет использована для решения технических проблем и улучшения услуг, которые мы предлагаем, в соответствии с нашим", "Правила защиты персональных данных", " и ", "Условия предоставления услуг", "Отправьте отзывы о продукте или поделитесь своими идеями. Это не способ связаться со службой поддержки, так как вы, как правило, не получите ответа."] }, "segment": ["ОТКРЫТО", "Высвободить энергию соединения", "Только AdShrink позволяет монетизировать ваш сайт, не портя графику и не используя инвазивную рекламу, такую как всплывающие окна, push-уведомления и баннеры. Улучшите опыт своих пользователей и максимизируйте свою прибыль с лучшим в мире укоротителем 1 URL!", "Как и где", " ты можешь разместить свои ссылки, чтобы заработать деньги?", "Веб-сайт / Блог", "Социальные сети", "Сообщения", "Получить наши услуги"] }

        },
        hi: {
            skip: "विज्ञापन छोड़ें",
            loading: "लदान",
            created: "",
            tloading: "डेटा लोड हो रहा है",
            tskip: "स्किप पर क्लिक करें",
            trecap: "पूरा रेकप्टा।",
            tpaid: "यूआरएल को छोटा करें और पैसा कमाएं",
            twork: "हमारे साथ कार्य करें!",
            search: "खोजें",
            t2: {
                a: "फर्स्ट क्लिक",
                b: "आप रीडायरेक्ट होने से 66% पर हैं।"
            },
            t3: {
                a: "रीडायरेक्ट",
                b: "पुनरावृत्ति को पूरा करके आप सभी आवश्यक कुकीज़ स्वीकार करेंगे।"
            },
            t4: {
                a: "कमाएँ",
                b: "Adshrink एकमात्र URL shortner है जो अपने लाभ का 80 प्रतिशत अपने उपयोगकर्ताओं के साथ साझा करता है। आपको केवल अपने क्लिक पर, अपने ट्रैफ़िक पर विस्तृत आँकड़े और प्रत्येक $ 10000 विचारों पर 30 डॉलर का लाभ प्राप्त करने के लिए हमारे पोर्टल पर अपने यूआरएल को छोटा करना होगा।"
            },
            t5: {
                a: "हम काम पर रख रहे हैं",
                b: "फ़ॉर्म को पूरा करें और हम आपको आपकी ज़रूरत की सभी जानकारी प्रदान करेंगे।"
            },
            t6: {
                head: "यह लिंक सुरक्षित है",
                a: "सुरक्षित ब्राउज़िंग",
                b: "आप खतरनाक वेबसाइटों से सुरक्षित हैं लेकिन आपकी गोपनीयता भी सुरक्षित है!"
            },
            t7: {
                a: 'Please click the button below to proceed to the destination page.'
            },
            completed: "You are being redirected.",
            adsbuytitle: "Fai crescere la tua attività con AdShrink.it",
            adsbuysubtitle: "",
            adsbuycontant: "",
            report: "रिपोर्ट",
            user: "उपयोगकर्ता",
            continue: "Continue",
            new: { "com_pub": "Publish comment", "modal_premium_subheader": "Remove Ads, access to exclusive content and much more", "see_more": "See more", "premium_1": "See no Advertising", "premium_2": ["Start skipping all AdShrink Ads and", "automatically get redirect", " to the final URLs"], "premium_3": "Get exclusive content", "premium_4": ["See exclusive content from your", " content creators"], "premium_5": "Support", "premium_6": ["User the power of the community and", "support your creators"], "join_now": "Join Now", "premium_info": ["If you have the ", "PREMIUM ACCOUNT", "currently", "activated", ", sign-in for the first time."], "our_services": ["Real-Time Metrics", "Referral Program", "API", "Add-on"], "website": ["Login", "Register", "DMCA", "Payout Rates"], "footer_payments_premium": ["Premium Services", "Don't waste your time and start skipping all AdShrink Ads."], "footer_payments_rates": ["Payout Services", "We are proud to have the highest rate with really few ads."], "footer_donate": ["Please", "Donate", " to this Bitcoin address"], "footer_sub": ["Site Map", "Contact Us", "Terms and Conditions", "Privacy Policy"], "second_segment": ["MONETIZE", "Publish anywhere, grow everywhere.", "Learn about", "Earn more ", "without", " adding more ", "ads", "No minimum traffic requirements, instant account approval", "Lifelong Income Stream", "Best eCPM rates for Worldwide Traffic", "Easy to Skip"], "wordpress": ["ARTICLES", "In Case You Missed It", "A recap of last week's most popular articles"], "heatmap": ["Views by time of day", "Last 7 days"], "wikipedia": ["Related Content", "Da"], "lastlinks": ["Other links of this User"], "google_auth": ["sign-in for comment this post!", "continue reading", "hide", "Use @username for mentioning AdShrink's users in this comment!", "Post as"], "saved_elements": ["Saved elements", "Get your preferred links", "You must be signed with Google Sign"], "search": "Search content", "like": ["Like", "Liked"], "follow": ["Following", "Follow"], "share": "Share", "support": "Support", "report": ["Service center", "Center for Privacy and Security", "Segnalazione di un contenuto", "You can report inappropriate posts and comments or people who do not respect ours", "Community guidelines", "or ours", "Terms of use", "directly when you see them via the integrated reporting functions.", "Information required for the declaration", "Declaration"], "close": "Close", "send": "Send", "bugs": { "new": ["Send feedback", "Back", "Send", "Go to ", "Legal Assistance page", "to request the modification of the contents for legal reasons or send us a detailed report. and information you provide to us will be used to manage technical problems and improve the services we offer, in accordance with ours", "Privacy rules", " and ", "Terms of Service", "Send product feedback or share your ideas. This is not a way to contact support as you will generally not receive a response."] }, "segment": ["ABOUT", "Unleash the power of the link", "Only AdShrink allows you to monetize your website without ruining the graphics and without using invasive advertising such as pop-ups, push notifications and banners. Improve your users experience and maximize your profits with the top 1 URL Shortener in the world!", "How and where", " you can place your links to earn money?", "Website / Blog", "Social Media", "Messages", "Get Our Services"] },
            report_options: { "report_1": "My account has been hacked", "report_2": "I am being bullied", "report_3": "I have identified inappropriate or offensive content", "report:4": "Unauthorized use is made of my name (or my organization's name)", "report_5": "Someone posted my private information", "report_6": "I (or someone for whom I am legally responsible) am featured in content that I do not wish to be shown on this website", "report_7": "I have identified content that I believe infringes my trademark", "report_8": ["I have identified content that I believe infringes on my copyright.", "Digital Millennium Copyright Act (DMCA) of the United States or similar laws of other countries.", "Who owns the copyright and/or related rights?", "Me or my organization", "My client", "Someone else"], "report_9": "By submitting this notification, you affirm: that you have a good faith belief that the use described above, as indicated by you, is not authorized by the owner of the intellectual property rights, its agent, or the law; that the information in the notification is accurate; and that you are authorized, under penalty of perjury, to act on behalf of the owner of the intellectual property rights in question." },
        },
        zh: {
            skip: "跳过广告",
            loading: "请稍等",
            created: "",
            tloading: "加载数据中",
            tskip: "点击SKIP",
            trecap: "完成Recaptcha。",
            tpaid: "缩短网址并赚钱。",
            twork: "跟我们工作！",
            search: "搜索",
            t2: {
                a: "第一次点击",
                b: "你被重定向的比例为66％。"
            },
            t3: {
                a: "重定向",
                b: "通过完成recaptcha，你将接受所有需要的cookie。"
            },
            t4: {
                a: "赚",
                b: "Adshrink是唯一与用户分享其利润的80％的URL缩写。您只需要缩短我们门户网站上的网址，每次点击即可获得有关您的点击量的详细统计信息，每10000次观看可获得30 $的平均利润。"
            },
            t5: {
                a: "我们正在招聘",
                b: "填写表格，我们将为您提供所需的所有信息。"
            },
            t6: {
                head: "此链接很安全",
                a: "安全浏览",
                b: "您受到危险网站的保护，但您的隐私也很安全！"
            },
            t7: {
                a: 'Please click the button below to proceed to the destination page.'
            },
            completed: "You are being redirected.",
            adsbuytitle: "Fai crescere la tua attività con AdShrink.it",
            adsbuysubtitle: "",
            adsbuycontant: "",
            report: "报告",
            user: "用户",
            continue: "Continue",
            report_options: { "report_1": "我的账户被黑了", "report_2": "我被人欺负了", "report_3": "我已经发现了不适当或令人反感的内容。", "report:4": "未经授权使用我的姓名（或我的组织名称）。", "report_5": "有人把我的私人信息贴出来了", "report_6": "本人（或本人负有法律责任的人）不希望在本网站上显示的内容。", "report_7": "我已经发现了我认为侵犯我商标的内容。", "report_8": ["我已经确定了我认为侵犯我的版权的内容。", "美国《数字千年版权法》（DMCA）或其他国家的类似法律。", "谁拥有版权和/或相关权利？", "我或我的组织", "我的客户", "某个人"], "report_9": "提交本通知书，即表示您确认：您有诚意相信，您所指出的上述使用行为未经知识产权人、其代理人或法律授权；通知书中的信息准确无误；您已被授权代表有关知识产权人行事，否则将受伪证罪处罚。" },
            new: { "com_pub": "发表评论", "modal_premium_subheader": "移除广告，获取独家内容等等。", "see_more": "查看更多", "premium_1": "未见广告", "premium_2": ["开始跳过所有AdShrink广告和", "自动获得重定向", "到最终的URL"], "premium_3": "获取独家内容", "premium_4": ["查看来自您的独家内容", "内容创作者"], "premium_5": "支持", "premium_6": ["用户社区的力量和", "支持你的创作者"], "join_now": "现在加入", "premium_info": ["如果你有 ", "高级账户", "当前", "活性", "，首次登录。"], "our_services": ["实时指标", "推荐计划", "API", "附加功能"], "website": ["登入", "注册", "DMCA", "赔付率"], "footer_payments_premium": ["高级服务", "不要浪费你的时间，开始跳过所有的AdShrink广告。"], "footer_payments_rates": ["赔付服务", "我们为拥有最高的广告率而感到自豪。"], "footer_donate": ["请您", "捐献", "到这个比特币地址"], "footer_sub": ["网站地图", "联系我们", "条款和条件", "私隐政策"], "second_segment": ["货币化", "随处发布，随处发展。", "了解", "赚取更多 ", "橆", "再加 ", "广告", "无最低流量要求，即时账户审批", "终身收入流", "最好的eCPM率为全球流量", "轻松跳过"], "wordpress": ["文章", "万一你错过了", "上周热门文章回顾"], "heatmap": ["按时间划分的浏览量", "最后7天"], "wikipedia": ["相关内容", "Da"], "lastlinks": ["该用户的其他链接"], "google_auth": ["签到评论本帖!", "继续阅读", "隐蔽", "使用@用户名在此评论中提及AdShrink的用户!", "发布为"], "saved_elements": ["已保存的内容", "获取您的首选链接", "你必须用谷歌签名"], "search": "搜索内容", "like": ["喜欢", "喜欢"], "follow": ["以下", "遵循"], "share": "分享", "support": "支持", "report": ["服务中心", "隐私与安全中心", "内容的开发利用", "您可以举报不适当的帖子和评论或不尊重我们的人。", "社区准则", "或我们", "使用条款", "当您通过综合申报功能直接看到它们。", "申报所需信息", "宣言"], "close": "关闭", "send": "发送", "bugs": { "new": ["发送反馈", "返回", "发送", "前往 ", "法律援助页面", "您提供给我们的信息将用于管理技术问题和改善我们的服务，按照我们的规定。", "隐私规则", "和 ", "服务条款", "发送产品反馈或分享您的想法。这不是联系支持的方式，因为您一般不会收到回复。"] }, "segment": ["关于我们", "释放链接的力量", "只有AdShrink可以让您在不破坏图形和不使用弹出窗口，推送通知和横幅等侵入性广告的情况下使您的网站盈利。改善您的用户体验，并最大限度地提高您的利润，与世界顶级的1 URL Shortener!", "如何以及在哪里", "你可以放置你的链接来赚钱吗？", "网站/博客", "社交媒体", "讯息", "获取我们的服务"] }
        },
        de: {
            skip: "Werbung überspringen",
            loading: "Bitte warten sie",
            created: "",
            tloading: "Lade daten",
            tskip: "Klicken sie auf überspringen",
            trecap: "Schließe Recaptcha ab.",
            tpaid: "URLs kürzen und Geld verdienen.",
            twork: "Arbeite mit uns!",
            search: "Suche",
            t2: {
                a: "Erster Klick",
                b: "Sie sind zu 66% von der Weiterleitung entfernt."
            },
            t3: {
                a: "Weiterleitung",
                b: "Wenn Sie Recaptcha ausfüllen, akzeptieren Sie alle benötigten Cookies."
            },
            t4: {
                a: "Verdienen",
                b: "Adshrink ist der einzige URL-Shortner, der die 80 Prozent seines Gewinns mit seinen Nutzern teilt. Sie müssen nur Ihre URLs auf unserem Portal kürzen, um mit jedem Klick detaillierte Statistiken über Ihren Datenverkehr und einen durchschnittlichen Gewinn von 30 $ pro 10000 Aufrufe zu erhalten."
            },
            t5: {
                a: "Wir stellen ein",
                b: "Füllen Sie das Formular aus und wir stellen Ihnen alle Informationen zur Verfügung, die Sie benötigen."
            },
            t6: {
                head: "DIESER LINK IST SICHER",
                a: "Sicheres Surfen",
                b: "Sie sind vor gefährlichen Websites geschützt, aber auch Ihre Privatsphäre ist geschützt!"
            },
            t7: {
                a: 'Please click the button below to proceed to the destination page.'
            },
            completed: "You are being redirected.",
            adsbuytitle: "Fai crescere la tua attività con AdShrink.it",
            adsbuysubtitle: "",
            adsbuycontant: "",
            report: "Bericht",
            user: "Benutzer",
            continue: "Continue",
            report_options: { "report_1": "Mein Konto wurde gehackt", "report_2": "Ich werde schikaniert", "report_3": "Ich habe unangemessene oder anstößige Inhalte identifiziert", "report:4": "Mein Name (oder der Name meiner Organisation) wird unbefugt verwendet", "report_5": "Jemand hat meine privaten Informationen gepostet", "report_6": "Ich (oder jemand, für den ich rechtlich verantwortlich bin) wird in Inhalten gezeigt, von denen ich nicht möchte, dass sie auf dieser Website gezeigt werden", "report_7": "Ich habe Inhalte identifiziert, die meiner Meinung nach meine Marke verletzen", "report_8": ["Ich habe Inhalte identifiziert, von denen ich glaube, dass sie mein Urheberrecht verletzen", "Digital Millennium Copyright Act (DMCA) der Vereinigten Staaten oder ähnliche Gesetze anderer Länder.", "Wer besitzt das Urheberrecht und/oder verwandte Rechte?", "Ich oder meine Organisation", "Mein Kunde", "Jemand anderes"], "report_9": "Mit dem Einreichen dieser Meldung versichern Sie: dass Sie in gutem Glauben davon ausgehen, dass die oben beschriebene Nutzung, wie von Ihnen angegeben, nicht durch den Inhaber der Rechte an geistigem Eigentum, seinen Vertreter oder das Gesetz autorisiert ist; dass die Informationen in der Meldung korrekt sind; dass Sie unter Androhung von Meineid autorisiert sind, im Namen des Inhabers der betreffenden Rechte an geistigem Eigentum zu handeln." },
            new: { "com_pub": "Kommentar veröffentlichen", "modal_premium_subheader": "Werbeeinblendungen entfernen, Zugang zu exklusiven Inhalten und vieles mehr", "see_more": "Mehr sehen", "premium_1": "Keine Werbung sehen", "premium_2": ["Beginnen Sie, alle AdShrink-Anzeigen zu überspringen und", "automatisch weitergeleitet zu werden", " zu den endgültigen URLs"], "premium_3": "Exklusive Inhalte erhalten", "premium_4": ["Sehen Sie exklusive Inhalte von Ihren", " Content-Ersteller"], "premium_5": "Unterstützen Sie", "premium_6": ["Nutzen Sie die Kraft der Community und", "unterstützen Sie Ihre Schöpfer"], "join_now": "Jetzt anmelden", "premium_info": ["Wenn Sie den ", "PREMIUM-KONTO", "aktuell", "aktiviert", ", melden Sie sich zum ersten Mal an."], "our_services": ["Echtzeit-Metriken", "Empfehlungsprogramm", "API", "Add-on"], "website": ["Anmeldung", "Registrieren", "DMCA", "Auszahlungsraten"], "footer_payments_premium": ["Premium-Dienste", "Verschwenden Sie nicht Ihre Zeit und beginnen Sie, alle AdShrink-Anzeigen zu überspringen."], "footer_payments_rates": ["Auszahlungs-Services", "Wir sind stolz darauf, die höchste Rate mit wirklich wenigen Anzeigen zu haben."], "footer_donate": ["Bitte", "Spenden Sie", " an diese Bitcoin-Adresse"], "footer_sub": ["Seite Karte", "Kontaktieren Sie uns", "Bedingungen und Konditionen", "Datenschutzrichtlinien"], "second_segment": ["MONETIZE", "Überall veröffentlichen, überall wachsen.", "Erfahren Sie mehr über", "Mehr verdienen ", "ohne", " mehr hinzuzufügen ", "Anzeigen", "Keine Mindest-Traffic-Anforderungen, sofortige Kontofreigabe", "Lebenslanger Einkommensstrom", "Beste eCPM-Raten für weltweiten Traffic", "Leicht zu überspringen"], "wordpress": ["ARTIKEL", "Falls Sie es verpasst haben", "Eine Zusammenfassung der beliebtesten Artikel der letzten Woche"], "heatmap": ["Ansichten nach Tageszeit", "Letzte 7 Tage"], "wikipedia": ["Ähnliche Inhalte", "Da"], "lastlinks": ["Andere Links von diesem Benutzer"], "google_auth": ["Anmelden, um diesen Beitrag zu kommentieren!", "weiter lesen", "ausblenden", "Benutzen Sie @Benutzername für die Erwähnung der Benutzer von AdShrink in diesem Kommentar!", "Posten als"], "saved_elements": ["Gespeicherte Elemente", "Erhalten Sie Ihre bevorzugten Links", "Sie müssen mit Google Sign angemeldet sein"], "search": "Inhalte suchen", "like": ["Gefällt mir", "Geliked"], "follow": ["Folgen", "Folgen Sie"], "share": "Teilen", "support": "Unterstützen Sie", "report": ["Service-Center", "Zentrum für Datenschutz und Sicherheit", "Segnalazione di un contenuto", "Sie können unangemessene Beiträge und Kommentare oder Personen melden, die sich nicht an unsere", "Community-Richtlinien", "oder unsere", "Nutzungsbedingungen", "direkt, wenn Sie sie sehen, über die integrierten Meldefunktionen melden.", "Erforderliche Informationen für die Erklärung", "Erklärung"], "close": "Schließen", "send": "Senden", "bugs": { "new": ["Feedback senden", "Zurück", "Senden", "Gehe zu ", "Seite Rechtshilfe", "um die Änderung der Inhalte aus rechtlichen Gründen anzufordern oder uns einen detaillierten Bericht zu schicken. und Informationen, die Sie uns zur Verfügung stellen, werden verwendet, um technische Probleme zu verwalten und die von uns angebotenen Dienstleistungen zu verbessern, in Übereinstimmung mit unseren", "Regeln des Datenschutzes", " und ", "Servicebedingungen", "Senden Sie Produkt-Feedback oder teilen Sie Ihre Ideen mit. Dies ist keine Möglichkeit, den Support zu kontaktieren, da Sie in der Regel keine Antwort erhalten werden."] }, "segment": ["ÜBER", "Entfesseln Sie die Macht des Links", "Nur AdShrink ermöglicht es Ihnen, Ihre Website zu monetarisieren, ohne die Grafik zu ruinieren und ohne invasive Werbung wie Pop-ups, Push-Benachrichtigungen und Banner zu verwenden. Verbessern Sie die Erfahrung Ihrer Nutzer und maximieren Sie Ihre Gewinne mit dem Top 1 URL Shortener der Welt!", "Wie und wo", " Sie Ihre Links platzieren können, um Geld zu verdienen?", "Website / Blog", "Soziale Medien", "Nachrichten", "Erhalten Sie unsere Dienstleistungen"] }
        },
        ar: {
            skip: "تخطي الإعلان",
            loading: "الرجاء الإنتظار",
            created: "",
            tloading: "تحميل البيانات",
            tskip: "انقر فوق تخطي.",
            trecap: "Recaptcha كاملة.",
            tpaid: "تقصير عناوين المواقع الخاصة بك وكسب المال.",
            twork: "اعمل معنا!",
            search: "بحث",
            t2: {
                a: "النقرة الأولى",
                b: "أنت في 66٪ من إعادة التوجيه."
            },
            t3: {
                a: "إعادة التوجيه",
                b: "من خلال إكمال الاسترداد ، ستقبل جميع ملفات تعريف الارتباط المطلوبة."
            },
            t4: {
                a: "اكسب",
                b: "Adshrink هو عنوان URL الوحيد الذي يشارك 80 في المائة من أرباحه مع مستخدميها. ما عليك سوى تقصير عناوين url الخاصة بك على بوابتنا لتلقي ، مع كل نقرة ، إحصاءات مفصلة عن حركة المرور الخاصة بك وأرباح متقاربة قدرها 30 دولار كل 10000 مرة."
            },
            t5: {
                a: "نحن نوظف",
                b: "أكمل النموذج وسنقدم لك جميع المعلومات التي تحتاجها."
            },
            t6: {
                head: "هذا الرابط آمن",
                a: "التصفح الآمن",
                b: "أنت محمي من المواقع الخطرة ولكن خصوصيتك آمنة أيضًا!"
            },
            t7: {
                a: 'Please click the button below to proceed to the destination page.'
            },
            completed: "You are being redirected.",
            adsbuytitle: "Fai crescere la tua attività con AdShrink.it",
            adsbuysubtitle: "",
            adsbuycontant: "",
            report: "تقرير",
            user: "المستخدم",
            continue: "Continue",
            new: { "com_pub": "Publish comment", "modal_premium_subheader": "Remove Ads, access to exclusive content and much more", "see_more": "See more", "premium_1": "See no Advertising", "premium_2": ["Start skipping all AdShrink Ads and", "automatically get redirect", " to the final URLs"], "premium_3": "Get exclusive content", "premium_4": ["See exclusive content from your", " content creators"], "premium_5": "Support", "premium_6": ["User the power of the community and", "support your creators"], "join_now": "Join Now", "premium_info": ["If you have the ", "PREMIUM ACCOUNT", "currently", "activated", ", sign-in for the first time."], "our_services": ["Real-Time Metrics", "Referral Program", "API", "Add-on"], "website": ["Login", "Register", "DMCA", "Payout Rates"], "footer_payments_premium": ["Premium Services", "Don't waste your time and start skipping all AdShrink Ads."], "footer_payments_rates": ["Payout Services", "We are proud to have the highest rate with really few ads."], "footer_donate": ["Please", "Donate", " to this Bitcoin address"], "footer_sub": ["Site Map", "Contact Us", "Terms and Conditions", "Privacy Policy"], "second_segment": ["MONETIZE", "Publish anywhere, grow everywhere.", "Learn about", "Earn more ", "without", " adding more ", "ads", "No minimum traffic requirements, instant account approval", "Lifelong Income Stream", "Best eCPM rates for Worldwide Traffic", "Easy to Skip"], "wordpress": ["ARTICLES", "In Case You Missed It", "A recap of last week's most popular articles"], "heatmap": ["Views by time of day", "Last 7 days"], "wikipedia": ["Related Content", "Da"], "lastlinks": ["Other links of this User"], "google_auth": ["sign-in for comment this post!", "continue reading", "hide", "Use @username for mentioning AdShrink's users in this comment!", "Post as"], "saved_elements": ["Saved elements", "Get your preferred links", "You must be signed with Google Sign"], "search": "Search content", "like": ["Like", "Liked"], "follow": ["Following", "Follow"], "share": "Share", "support": "Support", "report": ["Service center", "Center for Privacy and Security", "Segnalazione di un contenuto", "You can report inappropriate posts and comments or people who do not respect ours", "Community guidelines", "or ours", "Terms of use", "directly when you see them via the integrated reporting functions.", "Information required for the declaration", "Declaration"], "close": "Close", "send": "Send", "bugs": { "new": ["Send feedback", "Back", "Send", "Go to ", "Legal Assistance page", "to request the modification of the contents for legal reasons or send us a detailed report. and information you provide to us will be used to manage technical problems and improve the services we offer, in accordance with ours", "Privacy rules", " and ", "Terms of Service", "Send product feedback or share your ideas. This is not a way to contact support as you will generally not receive a response."] }, "segment": ["ABOUT", "Unleash the power of the link", "Only AdShrink allows you to monetize your website without ruining the graphics and without using invasive advertising such as pop-ups, push notifications and banners. Improve your users experience and maximize your profits with the top 1 URL Shortener in the world!", "How and where", " you can place your links to earn money?", "Website / Blog", "Social Media", "Messages", "Get Our Services"] },
            report_options: { "report_1": "My account has been hacked", "report_2": "I am being bullied", "report_3": "I have identified inappropriate or offensive content", "report:4": "Unauthorized use is made of my name (or my organization's name)", "report_5": "Someone posted my private information", "report_6": "I (or someone for whom I am legally responsible) am featured in content that I do not wish to be shown on this website", "report_7": "I have identified content that I believe infringes my trademark", "report_8": ["I have identified content that I believe infringes on my copyright.", "Digital Millennium Copyright Act (DMCA) of the United States or similar laws of other countries.", "Who owns the copyright and/or related rights?", "Me or my organization", "My client", "Someone else"], "report_9": "By submitting this notification, you affirm: that you have a good faith belief that the use described above, as indicated by you, is not authorized by the owner of the intellectual property rights, its agent, or the law; that the information in the notification is accurate; and that you are authorized, under penalty of perjury, to act on behalf of the owner of the intellectual property rights in question." },
        },
        fr: {
            skip: "Passer L'annonce",
            loading: "Patientez",
            created: "",
            tloading: "Chargement des données",
            tskip: "Cliquez sur sauter.",
            trecap: "Recaptcha complet.",
            tpaid: "Raccourcissez vos URL et gagnez de l'argent.",
            twork: "Travaille avec nous!",
            search: "Chercher",
            t2: {
                a: "Premier clic",
                b: "vous êtes à 66% de la redirection."
            },
            t3: {
                a: "Redirection",
                b: "en remplissant recaptcha, vous accepterez tous les cookies nécessaires."
            },
            t4: {
                a: "Gagnez",
                b: "Adshrink est le seul vendeur d'URL à partager les 80% de ses bénéfices avec ses utilisateurs. Il vous suffit de raccourcir vos URL sur notre portail pour recevoir, à chaque clic, des statistiques détaillées sur votre trafic et un bénéfice moyen de 30 € tous les 10 000 vues."
            },
            t5: {
                a: "Nous recrutons",
                b: "remplissez le formulaire et nous vous fournirons toutes les informations dont vous avez besoin."
            },
            t6: {
                head: "CE LIEN EST SÉCURITAIRE",
                a: "Navigation sûre",
                b: "Vous êtes protégé contre les sites Web dangereux, mais votre vie privée est également protégée!"
            },
            t7: {
                a: 'Please click the button below to proceed to the destination page.'
            },
            completed: "You are being redirected.",
            adsbuytitle: "Fai crescere la tua attività con AdShrink.it",
            adsbuysubtitle: "",
            adsbuycontant: "",
            report: "Rapport",
            user: "Utilisateur",
            continue: "Continue",
            report_options: { "report_1": "Mon compte a été piraté", "report_2": "Je suis intimidé", "report_3": "J'ai identifié un contenu inapproprié ou offensant", "report:4": "Mon nom (ou le nom de mon organisation) est utilisé sans autorisation", "report_5": "Quelqu'un a publié mes informations privées", "report_6": "Je (ou une personne dont je suis légalement responsable) figure dans un contenu que je ne souhaite pas voir figurer sur ce site", "report_7": "J'ai identifié un contenu qui, selon moi, porte atteinte à ma marque", "report_8": ["J'ai identifié un contenu qui, selon moi, viole mon droit d'auteur", "Digital Millennium Copyright Act (DMCA) des États-Unis ou des lois similaires d'autres pays.", "Qui détient les droits d'auteur et/ou les droits voisins ?", "Moi ou mon organisation", "Mon client", "Quelqu'un d'autre"], "report_9": "En envoyant cette notification, vous affirmez : que vous pensez de bonne foi que l'utilisation décrite ci-dessus, telle que vous l'avez indiquée, n'est pas autorisée par le titulaire des droits de propriété intellectuelle, son agent ou la loi ; que les informations contenues dans la notification sont exactes ; que vous êtes autorisé, sous peine de parjure, à agir au nom du titulaire des droits de propriété intellectuelle en question." },
            new: { "com_pub": "Publier un commentaire", "modal_premium_subheader": "Supprimer les publicités, accéder à un contenu exclusif et bien plus encore", "see_more": "En savoir plus", "premium_1": "Ne pas voir de publicité", "premium_2": ["Commencez à sauter toutes les publicités AdShrink et", "obtenir automatiquement une redirection", " vers les URL finales"], "premium_3": "Obtenir un contenu exclusif", "premium_4": ["Voir le contenu exclusif de votre", " les créateurs de contenu"], "premium_5": "Soutien", "premium_6": ["Utiliser le pouvoir de la communauté et", "soutenir vos créateurs"], "join_now": "S'inscrire maintenant", "premium_info": ["Si vous avez le ", "COMPTE PREMIUM", "actuellement", "activé", "Pour la première fois, vous pouvez vous inscrire."], "our_services": ["Métriques en temps réel", "Programme d'orientation", "API", "Add-on"], "website": ["Connexion", "S'inscrire", "DMCA", "Taux de distribution"], "footer_payments_premium": ["Services à valeur ajoutée", "Ne perdez pas votre temps et commencez à sauter toutes les publicités AdShrink."], "footer_payments_rates": ["Services de paiement", "Nous sommes fiers d'avoir le taux le plus élevé avec très peu de publicités."], "footer_donate": ["Veuillez consulter le site", "Faire un don", " à cette adresse Bitcoin"], "footer_sub": ["Plan du site", "Contactez-nous", "Conditions générales", "Politique de confidentialité"], "second_segment": ["MONETIZE", "Publier n'importe où, grandir partout.", "En savoir plus sur", "Gagner plus ", "sans", " ajouter plus ", "annonces", "Pas d'exigences minimales en matière de trafic, approbation instantanée du compte", "Flux de revenus tout au long de la vie", "Les meilleurs taux de l'eCPM pour le trafic mondial", "Facile à sauter"], "wordpress": ["ARTICLES", "Au cas où vous l'auriez manqué", "Récapitulatif des articles les plus populaires de la semaine dernière"], "heatmap": ["Vues par heure de la journée", "Les 7 derniers jours"], "wikipedia": ["Contenu connexe", "Da"], "lastlinks": ["Autres liens de cet utilisateur"], "google_auth": ["Connectez-vous pour commenter cet article !", "continuer la lecture", "cacher", "Utilisez @username pour mentionner les utilisateurs d'AdShrink dans ce commentaire !", "Publier sous"], "saved_elements": ["Éléments sauvegardés", "Obtenez vos liens préférés", "Vous devez être signé avec Google Sign"], "search": "Recherche de contenu", "like": ["Comme", "Aimé"], "follow": ["Suivant", "Suivez"], "share": "Partager", "support": "Soutien", "report": ["Centre de services", "Centre pour la vie privée et la sécurité", "Segnalazione di un contenuto", "Vous pouvez signaler les messages et commentaires inappropriés ou les personnes qui ne respectent pas les nôtres", "Orientations communautaires", "ou la nôtre", "Conditions d'utilisation", "directement lorsque vous les voyez grâce aux fonctions de rapport intégrées.", "Informations requises pour la déclaration", "Déclaration"], "close": "Fermer", "send": "Envoyer", "bugs": { "new": ["Envoyer des commentaires", "Retour", "Envoyer", "Aller à ", "Page de l'assistance juridique", "demander la modification du contenu pour des raisons juridiques ou nous envoyer un rapport détaillé. et les informations que vous nous fournissez seront utilisées pour gérer les problèmes techniques et améliorer les services que nous offrons, conformément aux nôtres", "Règles relatives à la protection de la vie privée", " et ", "Conditions de service", "Envoyez des commentaires sur les produits ou partagez vos idées. Ce n'est pas une façon de contacter le support car vous ne recevrez généralement pas de réponse."] }, "segment": ["À PROPOS DE", "Libérer la puissance du lien", "Seul AdShrink vous permet de monétiser votre site web sans ruiner les graphismes et sans utiliser de publicité invasive comme les pop-ups, les notifications push et les bannières. Améliorez l'expérience de vos utilisateurs et maximisez vos profits avec le top 1 des raccourcisseurs d'URL dans le monde !", "Comment et où", " vous pouvez placer vos liens pour gagner de l'argent ?", "Site web / Blog", "Médias sociaux", "Messages", "Obtenez nos services"] }
        },
        ko: {
            skip: "광고 건너 뛰기",
            loading: "초만 기다리세요",
            created: "",
            tloading: "데이터로드 중",
            tskip: "건너 뛰기를 클릭하십시오.",
            trecap: "완전 탈출구.",
            tpaid: "URL을 짧게하고 돈을 벌어 라.",
            twork: "우리와 함께 일하십시오!",
            search: "검색",
            t2: {
                a: "처음 클릭",
                b: "리디렉션 중 66 %가되었습니다."
            },
            t3: {
                a: "리디렉션",
                b: "recaptcha를 완료하면 필요한 모든 쿠키를 수락 할 것입니다."
            },
            t4: {
                a: "적립",
                b: "Adshrink는 수익의 80 %를 사용자와 공유하는 유일한 URL 단축 프로그램입니다. 모든 클릭과 함께 트래픽에 대한 자세한 통계와 10000 회 조회마다 30 $의 평균 수익을 받으려면 포털의 URL을 단축해야합니다."
            },
            t5: {
                a: "우리는 고용하고있다",
                b: "양식을 작성하면 필요한 모든 정보를 제공해 드리겠습니다."
            },
            t6: {
                head: "이 링크는 안전합니다",
                a: "안전한 브라우징",
                b: "위험한 웹 사이트로부터 보호되지만 개인 정보도 안전합니다!"
            },
            t7: {
                a: 'Please click the button below to proceed to the destination page.'
            },
            completed: "You are being redirected.",
            adsbuytitle: "Fai crescere la tua attività con AdShrink.it",
            adsbuysubtitle: "",
            adsbuycontant: "",
            report: "보고서",
            user: "사용자",
            continue: "Continue",
            report_options: { "report_1": "私のアカウントは違反しています。", "report_2": "強気な男には強気な男", "report_3": "不適切で攻撃的なコンテンツを個人化していないか", "report:4": "あなたの名前（またはあなたの組織の名前）を許可されていない使用法を使用していることを確認してください。", "report_5": "個人情報を公開しています。", "report_6": "私は（または法的に責任を負うことができます）は、このサイトウエブのコンテンツの中に存在していますが、その中には、あなたが望むものはありません。", "report_7": "Ho individuato un contenuto che, a mio avviso, viola il mio marchio", "report_8": ["Ho individuato un contenuto che, a mio avviso, viola il mio diritto d'autore.", "デジタルミレニアム著作権法(DMCA)は、国や他の国の著作権者にも適用されます。", "著作権を侵害していませんか？", "私は、またはあなたの組織", "お客様の声", "品質保証"], "report_9": "Inviando questa notifica, affermi.この通知に記載されている情報は正確なものであることを確認してください。通知書に記載されている情報は正確であること；不正な証言をした場合には安全性を確保するために、権限を付与するために、知的財産権の所有者からの通知を受けていることを確認してください。" },
        },
        pt: {
            skip: "Fechar Propaganda",
            loading: "Por favor espere",
            created: "",
            tloading: "Carregando dados",
            tskip: "Clique em Fechar Propaganda.",
            trecap: "Recaptcha completa.",
            tpaid: "Encurte urls e ganhe dinheiro.",
            twork: "Trabalhe Conosco!",
            search: "Pesquisar",
            t2: {
                a: "Primeiro clique",
                b: "você está com 66% de ser redirecionado."
            },
            t3: {
                a: "Redirecionar",
                b: "completando recaptcha você aceitará todos os cookies necessários."
            },
            t4: {
                um: "Ganhe",
                b: "O Adshrink é o único encurtador de URL que compartilha os 80% de seus lucros com seus usuários. Você só precisa reduzir seus URLs em nosso portal para receber, a cada clique, estatísticas detalhadas sobre seu tráfego e um lucro médio de 30 $ a cada 10000 visualizações."
            },
            t5: {
                a: "Estamos contratando",
                b: "preencha o formulário e forneceremos todas as informações de que você precisa."
            },
            t6: {
                head: "ESTE LINK É SEGURO",
                a: "Navegação segura",
                b: "Você está protegido contra sites perigosos, mas sua privacidade também é segura!"
            },
            t7: {
                a: 'Please click the button below to proceed to the destination page.'
            },
            completed: "You are being redirected.",
            adsbuytitle: "Fai crescere la tua attività con AdShrink.it",
            adsbuysubtitle: "",
            adsbuycontant: "",
            report: "Relatório",
            user: "Usuário",
            continue: "Continue",
            report_options: { "report_1": "A minha conta foi pirateada", "report_2": "Estou a ser intimidado", "report_3": "Identifiquei conteúdos inapropriados ou ofensivos", "report:4": "Está a ser feito uso não autorizado do meu nome (ou do nome da minha organização)", "report_5": "Alguém afixou a minha informação privada", "report_6": "Eu (ou alguém por quem sou legalmente responsável) sou destacado em conteúdos que não desejo que sejam mostrados neste sítio", "report_7": "Identifiquei conteúdos que considero infringirem a minha marca", "report_8": ["Identifiquei conteúdos que considero infringirem os meus direitos de autor", "Digital Millennium Copyright Act (DMCA) dos Estados Unidos ou leis semelhantes de outros países.", "A quem pertencem os direitos de autor e/ou direitos conexos?", "Eu ou a minha organização", "O meu cliente", "Alguém mais"], "report_9": "Ao submeter esta notificação, afirma: que acredita de boa fé que a utilização acima descrita, como indicado por si, não está autorizada pelo proprietário dos direitos de propriedade intelectual, pelo seu agente, ou pela lei; que as informações na notificação são exactas; que está autorizado, sob pena de perjúrio, a agir em nome do proprietário dos direitos de propriedade intelectual em questão." },
            new: { "com_pub": "Publicar comentário", "modal_premium_subheader": "Remover Anúncios, acesso a conteúdo exclusivo e muito mais", "see_more": "Ver mais", "premium_1": "Não ver Publicidade", "premium_2": ["Comece a saltar todos os Anúncios AdShrink e", "ser automaticamente redireccionado", " para os URLs finais"], "premium_3": "Obter conteúdo exclusivo", "premium_4": ["Veja o conteúdo exclusivo do seu", " criadores de conteúdos"], "premium_5": "Apoio", "premium_6": ["Utilizador o poder da comunidade e", "apoie os seus criadores"], "join_now": "Junte-se agora", "premium_info": ["Se tiver o ", "CONTA PREMIUM", "actualmente", "activado", ", inicie a sessão pela primeira vez."], "our_services": ["Métricas em Tempo Real", "Programa de Referência", "API", "Complemento"], "website": ["Login", "Registe-se", "DMCA", "Taxas de Pagamento"], "footer_payments_premium": ["Serviços Premium", "Não perca o seu tempo e comece a saltar todos os Anúncios AdShrink."], "footer_payments_rates": ["Serviços de Pagamento", "Orgulhamo-nos de ter a taxa mais alta com realmente poucos anúncios."], "footer_donate": ["Por favor", "Doe", " para este endereço Bitcoin"], "footer_sub": ["Mapa do sítio", "Contacte-nos", "Termos e Condições", "Política de Privacidade"], "second_segment": ["MONETIZE", "Publicar em qualquer lugar, crescer em qualquer lugar.", "Saiba mais sobre", "Ganhe mais ", "sem", " adicionando mais ", "anúncios", "Sem requisitos mínimos de tráfego, aprovação de conta instantânea", "Fluxo de rendimentos ao longo da vida", "Melhores taxas de eCPM para tráfego mundial", "Fácil de Saltar"], "wordpress": ["ARTIGOS", "No caso de o ter perdido", "Uma recapitulação dos artigos mais populares da semana passada"], "heatmap": ["Vistas por hora do dia", "Últimos 7 dias"], "wikipedia": ["Conteúdo relacionado", "Da"], "lastlinks": ["Outros links deste Utilizador"], "google_auth": ["inscreva-se para comentar este post!", "continuar a ler", "esconder", "Use @username para mencionar os utilizadores do AdShrink neste comentário!", "Publicar como"], "saved_elements": ["Elementos guardados", "Obtenha os seus links preferidos", "Deve ser assinado com o Google Sign"], "search": "Pesquisar conteúdo", "like": ["Como", "Gosto"], "follow": ["A seguir", "Siga"], "share": "Partilhar", "support": "Apoio", "report": ["Centro de serviço", "Centro de Privacidade e Segurança", "Segnalazione di un contenuto", "Pode denunciar mensagens e comentários inadequados ou pessoas que não respeitem os nossos", "Orientações comunitárias", "ou a nossa", "Termos de utilização", "directamente quando os vê através das funções de relatório integradas.", "Informações necessárias para a declaração", "Declaração"], "close": "Fechar", "send": "Enviar", "bugs": { "new": ["Enviar feedback", "Voltar", "Enviar", "Ir para ", "Página de assistência jurídica", "para solicitar a modificação do conteúdo por razões legais ou enviar-nos um relatório detalhado. e as informações que nos fornecer serão utilizadas para gerir problemas técnicos e melhorar os serviços que oferecemos, de acordo com os nossos", "Regras de privacidade", " e ", "Termos de Serviço", "Envie comentários sobre produtos ou partilhe as suas ideias. Esta não é uma forma de contactar o apoio, pois geralmente não receberá uma resposta."] }, "segment": ["SOBRE", "Libertar o poder da ligação", "Apenas o AdShrink lhe permite rentabilizar o seu website sem arruinar os gráficos e sem utilizar publicidade invasiva, como pop-ups, notificações push e banners. Melhore a experiência dos seus utilizadores e maximize os seus lucros com o encurtador de URL de topo 1 no mundo!", "Como e onde", " pode colocar os seus links para ganhar dinheiro?", "Website / Blog", "Meios de comunicação social", "Mensagens", "Obter os nossos serviços"] }
        },
        ja: {
            skip: "広告をスキップする",
            loading: "ロード中",
            created: "",
            tloading: "データのロード",
            tskip: "[広告をスキップする]をクリックします",
            trecap: "コンプリート Recaptcha.",
            tpaid: "URLを短縮し、お金を稼ぎます。",
            twork: "俺たちと一緒に仕事しようよ！",
            search: "検索",
            t2: {
                a: "最初のクリック",
                b: "あなたはリダイレクトされてから66％のところにいます。"
            },
            t3: {
                a: "リダイレクト",
                b: "要約を完成させることによってあなたはすべての必要なクッキーを受け入れるでしょう。"
            },
            t4: {
                um: "稼ぐ",
                b: "Adshrinkは、利益の80％をユーザーと共有する唯一のURL短縮サービスです。ポータルのURLを短くするだけで、クリックごとにトラフィックの詳細な統計と10000ビューごとに30ドルの平均利益を受け取ることができます。"
            },
            t5: {
                a: "私たちは雇っています",
                b: "フォームに記入すると、必要な情報をすべて提供します"
            },
            t6: {
                head: "このリンクは安全です",
                a: "安全なブラウジング",
                b: "あなたは危険なウェブサイトから保護されていますが、あなたのプライバシーも安全です！"
            },
            t7: {
                a: 'Please click the button below to proceed to the destination page.'
            },
            completed: "You are being redirected.",
            adsbuytitle: "Fai crescere la tua attività con AdShrink.it",
            adsbuysubtitle: "",
            adsbuycontant: "",
            report: "報告",
            user: "User",
            continue: "Continue",
            report_options: { "report_1": "私のアカウントはハッキングされました", "report_2": "私はいじめられている", "report_3": "不適切または攻撃的なコンテンツを特定しました。", "report:4": "私の名前（または私の組織名）を無断で使用しています。", "report_5": "誰かが私の個人情報を投稿してくれた", "report_6": "私（または私が法的責任を負う者）が、このウェブサイトに掲載を希望しないコンテンツを掲載している場合", "report_7": "私は、私の商標を侵害していると思われるコンテンツを特定しました。", "report_8": ["私は、私の著作権を侵害していると思われるコンテンツを特定しました。", "米国のデジタルミレニアム著作権法（DMCA）または他の国の同様の法律。", "著作権および／または関連する権利は誰が所有していますか？", "私または私の組織", "私のクライアント", "他の誰かが"], "report_9": "この通知を提出することにより、あなたは、上記の使用が知的財産権の所有者、その代理人、または法律によって許可されていないことを誠実に信じていること、通知の情報が正確であること、偽証罪の罰則の下、問題の知的財産権の所有者を代表して行動する権限を与えられていることを確認します。" },
            new: { "com_pub": "コメントを公開する", "modal_premium_subheader": "広告の削除、独占コンテンツへのアクセス、その他多くのことが可能です。", "see_more": "もっと見る", "premium_1": "広告なしを参照してください。", "premium_2": ["すべてのAdShrink Adsをスキップして", "リダイレクトがかかる", "を最終的なURLに変換します。"], "premium_3": "独占コンテンツの取得", "premium_4": ["あなたの独占コンテンツを見る", "コンテンツクリエーター"], "premium_5": "サポート", "premium_6": ["ユーザーはコミュニティの力と", "クリエイターを応援する"], "join_now": "今すぐ参加する", "premium_info": ["を持っている場合は ", "プレミアムアカウント", "只今", "活性化", "をクリックして、初めてサインインしてください。"], "our_services": ["リアルタイムのメトリクス", "紹介プログラム", "API", "アドオン"], "website": ["ログイン", "登録", "ディーエムシーエー", "ペイアウト率"], "footer_payments_premium": ["プレミアムサービス", "時間を無駄にしないで、すべてのAdShrink広告をスキップし始めましょう。"], "footer_payments_rates": ["ペイアウトサービス", "本当に少ない広告で最高レートを誇っています。"], "footer_donate": ["お願いします。", "寄付をする", "このビットコインのアドレスに"], "footer_sub": ["サイトマップ", "お問い合わせ", "ご利用条件", "個人情報保護方針"], "second_segment": ["マネタイズ", "どこでも発行、どこでも成長。", "詳細はこちら", "もっと稼ぐ ", "なくても", "加筆 ", "広告", "最小限のトラフィック要件なし、即時のアカウント承認", "生涯所得の流れ", "世界的なトラフィックのための最高のeCPM率", "スキップしやすい"], "wordpress": ["記事", "もしもの時のために", "先週の人気記事のまとめ"], "heatmap": ["時間帯別閲覧数", "最後の7日間"], "wikipedia": ["関連コンテンツ", "ダ"], "lastlinks": ["このユーザーの他のリンク"], "google_auth": ["この記事をコメントするためにサインインしてください", "続きを読む", "隠蔽", "このコメントでAdShrinkのユーザーに言及する場合は、@usernameを使用してください!", "として投稿する"], "saved_elements": ["保存された要素", "お気に入りのリンクを取得する", "Google Signでの署名が必要です。"], "search": "検索内容", "like": ["のように", "気に入った"], "follow": ["続いて", "フォロー"], "share": "シェア", "support": "サポート", "report": ["サービスセンター", "プライバシー・セキュリティセンター", "コンテンツの分割", "不適切な投稿やコメント、または私たちを尊重していない人を報告することができます。", "コミュニティガイドライン", "此方か此方か", "ご利用条件", "統合されたレポート機能で見ると直接", "申告に必要な情報", "宣言"], "close": "クローズ", "send": "送信", "bugs": { "new": ["フィードバックを送る", "戻る", "送信", "に行く ", "法律扶助のページ", "法律上の理由で内容の変更を要求したり、詳細な報告書を送ったりすることができます。", "個人情報の取り扱いについて", "そして ", "利用規約", "製品のフィードバックを送信したり、アイデアを共有したりすることができます。これはサポートに連絡する方法ではありません。"] }, "segment": ["について", "リンクの力を解き放つ", "AdShrinkだけが、グラフィックを損なうことなく、ポップアップ、プッシュ通知、バナーなどの侵襲的な広告を使用することなく、あなたのウェブサイトを収益化することを可能にします。世界でトップ1のURL短縮ツールでユーザー体験を向上させ、利益を最大化しましょう!", "どこでどのように", "あなたはお金を稼ぐためにあなたのリンクを配置することができますか？", "ウェブサイト/ブログ", "ソーシャルメディア", "メッセージ", "サービスを受ける"] }
        }
    }

}

window.___reactjsD = ___reactjsD;


try {
    window.toastr.options = {
        "closeButton": false,
        "debug": false,
        "newestOnTop": true,
        "progressBar": true,
        "positionClass": "toast-top-right",
        "preventDuplicates": true,
        "onclick": null,
        "showDuration": "300",
        "hideDuration": "1000",
        "timeOut": "4000",
        "extendedTimeOut": "1000",
        "showEasing": "swing",
        "hideEasing": "linear",
        "showMethod": "fadeIn",
        "hideMethod": "fadeOut"
    }
} catch (error) {
    console.warn('toastr-error');

}

const detectLang = (navigator.language.length === 2 ? navigator.language : navigator.language.substr(0, 2));
const detectLangStorage = detectLang; //( !isEmpty( window.localStorage.getItem('language') ) ? ( window.localStorage.getItem('language') === 'local' ? detectLang : window.localStorage.getItem('language') ) : detectLang );

//var language = ___reactjsD.language[detectLangStorage];
var language = ___reactjsD.language['en'];

document.head || (document.head = document.getElementsByTagName('head')[0]);

window.iab_rejected = true;

function safe_read_cookie(name) {
    let cookie = null;
    /** read c */
    try {
        if (!navigator.cookieEnabled)
            throw 'cookies not enabled';

        cookie =
            Cookies.get(name)
            || window.localStorage.getItem(name)
            || false;
    } catch (e) {
        cookie = false;
    }

    return cookie;
}

function safe_write_cookie(name, persistent = false, time, value) {
    let cookie = null;
    /** read c */
    try {
        if (!navigator.cookieEnabled)
            throw 'cookies not enabled';
        /** delete old */ Cookies.expire(name);
        cookie = Cookies.set(name, value, { domain: 'adshnk.com', expires: time });
    } catch (e) {
        cookie = false;
    }

    return (cookie);
}

//OneTrust.getVendorConsentsRequestV2((e) => { console.log(e) })


/**
 * Deep diff between two object, using lodash
 * @param  {Object} object Object compared
 * @param  {Object} base   Object to compare with
 * @return {Object}        Return a new object who represent the diff
 */
function difference(object, base) {
    function changes(object, base) {
        return _.transform(object, function (result, value, key) {
            if (!_.isEqual(value, base[key])) {
                result[key] = (_.isObject(value) && _.isObject(base[key])) ? changes(value, base[key]) : value;
            }
        });
    }
    return changes(object, base);
}

function changeFavicon(src) {
    var link = document.createElement('link'),
        oldLink = document.getElementById('dynamic-favicon');
    link.id = 'dynamic-favicon';
    link.rel = 'shortcut icon';
    link.href = src;
    if (oldLink) {
        document.head.removeChild(oldLink);
    }
    document.head.appendChild(link);
}

function on_get_banned_browser() {
    try {
        //Chrome iOS Mobile
        var isChromeIOS = navigator.userAgent.match('CriOS');

        // Opera 8.0+
        var isOpera = (!!window.opr && !!opr.addons) || !!window.opera || navigator.userAgent.indexOf(' OPR/') >= 0;

        // Firefox 1.0+
        var isFirefox = typeof InstallTrigger !== 'undefined';

        // Safari 3.0+ "[object HTMLElementConstructor]" 
        var isSafari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent);

        // Internet Explorer 6-11
        var isIE = /*@cc_on!@*/false || !!document.documentMode;

        // Edge 20+
        //var isEdge = !isIE && !!window.StyleMedia;

        // Chrome 1 - 79
        //var isChrome = !!window.chrome && (!!window.chrome.webstore || !!window.chrome.runtime);

        // Edge (based on chromium) detection
        //var isEdgeChromium = isChrome && (navigator.userAgent.indexOf("Edg") != -1);

        // Blink engine detection
        //var isBlink = (isChrome || isOpera) && !!window.CSS;

        console.log('personalized_ads_browser', isChromeIOS, isOpera, isFirefox, isSafari, isIE);

        if (isChromeIOS)
            return false;

        if (isOpera || isFirefox || isIE || isSafari)
            return true;

        return false;

    } catch (e) {
        return false;
    }
}

function strip(html) {
    var tmp = document.createElement("DIV");
    tmp.innerHTML = html;
    return (tmp.textContent || tmp.innerText || "").substring(0, 350);
}



function isEmpty(obj) {
    for (var key in obj) {
        if (obj.hasOwnProperty(key))
            return false;
    }
    return true;
}

function countProperties(obj) {
    var count = 0;

    for (var property in obj) {
        if (Object.prototype.hasOwnProperty.call(obj, property)) {
            count++;
        }
    }

    return count;
}

function findMostRepeatedWord(str) {
    let words = str.match(/\w+/g);


    let occurances = {};

    for (let word of words) {
        if (occurances[word]) {
            occurances[word]++;
        } else {
            occurances[word] = 1;
        }
    }

    let max = 0;
    let mostRepeatedWord = '';

    for (let word of words) {
        if (occurances[word] > max) {
            max = occurances[word];
            mostRepeatedWord = word;
        }
    }

    return mostRepeatedWord;
}

function sortByFrequency(array) {
    var frequency = {};

    array.forEach(function (value) { frequency[value] = 0; });

    var uniques = array.filter(function (value) {
        return ++frequency[value] == 1;
    });

    return uniques.sort(function (a, b) {
        return frequency[b] - frequency[a];
    });
}

function hasAdblock() {
    var a = document.createElement('div');
    a.innerHTML = '&nbsp;';
    a.className = 'adsbox pub_300x250 pub_300x250m pub_728x90 text-ad textAd text_ad adglare ad-server';
    a.style = 'width: 1px !important; height: 1px !important; position: absolute !important; left: -10000px !important; top: -1000px !important;';
    var r = false;
    try {
        document.body.appendChild(a);
        var e = document.getElementsByClassName('adsbox')[0];
        if (e.offsetHeight === 0 || e.clientHeight === 0) r = true;
        if (window.getComputedStyle !== undefined) {
            var tmp = window.getComputedStyle(e, null);
            if (tmp && (tmp.getPropertyValue('display') == 'none' || tmp.getPropertyValue('visibility') == 'hidden')) r = true;
        }
        document.body.removeChild(a);
    } catch (e) { }
    return r;
}

const checkAdBlocker = async () => {
    // Used to cache the result
    let isBlocked;

    const tryRequest = async () => {
        try {
            return fetch(
                new Request("https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js", {
                    method: 'HEAD',
                    mode: 'no-cors'
                }))
                .then(function (response) {
                    // Google Ads request succeeded, so likely no ad blocker
                    isBlocked = false;
                    return isBlocked;
                }).catch(function (e) {
                    // Request failed, likely due to ad blocker
                    isBlocked = true;
                    return isBlocked;
                });
        } catch (error) {
            // fetch API error; possible fetch not supported (old browser)
            // Marking as a blocker since there was an error and so
            // we can prevent continued requests when this function is run
            console.log('checkAdBlocker', error);
            isBlocked = true;
            return isBlocked;
        }
    }

    return isBlocked !== undefined ? isBlocked : await tryRequest();
}

function _hasPopupBlocker(poppedWindow) {
    var result = false;

    try {
        if (typeof poppedWindow == 'undefined') {
            // Safari with popup blocker... leaves the popup window handle undefined
            result = true;
        }
        else if (poppedWindow && poppedWindow.closed) {
            // This happens if the user opens and closes the client window...
            // Confusing because the handle is still available, but it's in a "closed" state.
            // We're not saying that the window is not being blocked, we're just saying
            // that the window has been closed before the test could be run.
            result = false;
        }
        else if (poppedWindow && poppedWindow.test) {
            // This is the actual test. The client window should be fine.
            result = false;
        }
        else {
            // Else we'll assume the window is not OK
            result = true;
        }

    } catch (err) {
        //if (console) {
        //    console.warn("Could not access popup window", err);
        //}
    }

    return result;
}


function detectConsoleOpen() {
    var element = new Image;
    var devtoolsOpen = false;
    element.__defineGetter__("id", function () {
        devtoolsOpen = true; // This only executes when devtools is open.
    });
    setInterval(function () {
        devtoolsOpen = false;

        if (devtoolsOpen)
            window.location.href = 'https://www.shrink-service.it/Ops/990';
    }, 1000);
}

function retry(isDone, next) {
    var current_trial = 0, max_retry = 50, interval = 10, is_timeout = false;
    var id = window.setInterval(
        function () {
            if (isDone()) {
                window.clearInterval(id);
                next(is_timeout);
            }
            if (current_trial++ > max_retry) {
                window.clearInterval(id);
                is_timeout = true;
                next(is_timeout);
            }
        },
        10
    );
}

function isIE10OrLater(user_agent) {
    var ua = user_agent.toLowerCase();
    if (ua.indexOf('msie') === 0 && ua.indexOf('trident') === 0) {
        return false;
    }
    var match = /(?:msie|rv:)\s?([\d\.]+)/.exec(ua);
    if (match && parseInt(match[1], 10) >= 10) {
        return true;
    }
    // MS Edge Detection from this gist: https://gist.github.com/cou929/7973956
    var edge = /edge/.exec(ua);
    if (edge && edge[0] == "edge") {
        return true;
    }
    return false;
}

function jsUcfirst(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

function detectIncognito(callback) {
    var is_private;

    if (window.webkitRequestFileSystem) {
        window.webkitRequestFileSystem(
            window.TEMPORARY, 1,
            function () {
                is_private = false;
            },
            function (e) {
                //console.log(e);
                is_private = true;
            }
        );
    } else if (window.indexedDB && /Firefox/.test(window.navigator.userAgent)) {
        var db;
        try {
            db = window.indexedDB.open('test');
        } catch (e) {
            is_private = true;
        }

        if (typeof is_private === 'undefined') {
            retry(
                function isDone() {
                    return db.readyState === 'done' ? true : false;
                },
                function next(is_timeout) {
                    if (!is_timeout) {
                        is_private = db.result ? false : true;
                    }
                }
            );
        }
    } else if (isIE10OrLater(window.navigator.userAgent)) {
        is_private = false;
        try {
            if (!window.indexedDB) {
                is_private = true;
            }
        } catch (e) {
            is_private = true;
        }
    } else if (window.localStorage && /Safari/.test(window.navigator.userAgent)) {
        // One-off check for weird sports 2.0 polyfill
        // This also impacts iOS Firefox and Chrome (newer versions), apparently
        // @see bglobe-js/containers/App.js:116
        if (window.safariIncognito) {
            is_private = true;
        } else {
            try {
                window.openDatabase(null, null, null, null);
            } catch (e) {
                is_private = true;
            }

            try {
                window.localStorage.setItem('test', 1);
            } catch (e) {
                is_private = true;
            }
        }
        if (typeof is_private === 'undefined') {
            is_private = false;
            window.localStorage.removeItem('test');
        }
    }

    retry(
        function isDone() {
            return typeof is_private !== 'undefined' ? true : false;
        },
        function next(is_timeout) {
            callback(is_private);
        }
    );
}

async function new_script(src, attr = null) {
    let _s = window.btoa(src);

    if (_scripts.hasOwnProperty(_s))
        return false;

    _scripts[_s] = true;

    let promise = new Promise(function (resolve, reject) {
        var script = document.createElement('script');
        script.async = true;
        script.src = src;

        if (!isEmpty(attr)) {
            script.setAttribute(attr.name, attr.value);
        }

        script.onerror = function (e) {
            reject(e);
        };

        script.onload = function (e) {
            resolve(e);
        };

        document.getElementsByTagName("head")[0].appendChild(script);
    });

    let result = await promise;

    return result;
}

function decodeHtml(html) {
    var txt = document.createElement("textarea");
    txt.innerHTML = html;
    return txt.value;
}

function getPercentageChange(oldNumber, newNumber) {
    var decreaseValue = oldNumber - newNumber;

    return (decreaseValue / oldNumber) * 100;
}

function setWindowEventMouse() {
    window.onmousemove = function (e) {
        ___reactjsD.x += parseFloat(e.clientX);
        ___reactjsD.y += parseFloat(e.clientY);
    };
}

function getDeltaMouse() {
    return parseFloat((___reactjsD.x / ___reactjsD.y).toFixed(2));
}

function Logo(props) {
    return (
        <a href={props.url} target="_blank"><img alt="logo" className="lazy" height="55" data-src={props.logo}></img></a>
    )
}



function ssapi_functions(path, data) {
    const formData = objToFormdata(data)
    return axios.post('https://www.shrink-service.it/api-extension/adshrink/' + path, formData);
}

function initAPI(data) {
    const formData = objToFormdata(data); //console.log(formData);
    return axios.post('https://www.shrink-service.it/api-extension/prototype/shrink', formData);
}

function setupAPI() {
    return axios.post('https://www.shrink-service.it/api-extension/prototype/setup');
}

function reportAPI(type_r, shrink_r, reports_r) {

    const formData = objToFormdata({ type: type_r, shrink: shrink_r, reports: (typeof (reports_r) === 'object' ? JSON.stringify(reports_r) : reports_r) })
    return axios.post('https://www.shrink-service.it/api-extension/prototype/report', formData);
}

function socialAPI(logged, usert) {
    const formData = objToFormdata({ booleanFollowDataRequest: (logged ? true : false), _iu: logged, _is: usert })
    return axios.post('https://www.shrink-service.it/api-extension/prototype/follow-unfollow', formData);
}

function tasteAPI(a, b) {
    const formData = objToFormdata({ ishk: a, type: b })
    return axios.post('https://www.shrink-service.it/api-extension/prototype/like-unlike', formData);
}

function adblockAPI() {
    return axios('https://www.ecpms.net/qyw9a89c?key=5740b25b3271497132ad3a6d2d9652df', {
        method: 'HEAD',
        mode: 'no cors',
        crossdomain: true
    });
}

function goNext(data) {
    const formData = objToFormdata(data); //console.log(formData);
    return axios.post(
        _adshrink.api.skip, //'https://www.shrink-service.it/api-extension/prototype/next', 
        formData
    );
}

function SemanticCard(props) {

    let user = props.user || false;

    let get_data = (property) => {
        return $('meta[property="' + property + '"]').attr('content');
    }

    return (
        <div className="ui card" style={{ margin: "0 auto" }}>
            <div className="content">
                <div className="right floated meta">{moment(get_data('article:published_time')).fromNow()}</div>
                <img className="ui avatar image lazy" data-src="https://adshrink.it/wp-content/uploads/apps/nouser.jpg" /> {(user ? user : 'Private user')}
                <p><b>{get_data('og:title')}</b></p>
            </div>
            <div className="image">
                <img className="lazy" data-src={get_data('og:image')} />
            </div>
            <div className="content">

                <span className="right floated">
                    <i className="heart outline like icon"></i>
                    99+ likes
                </span>
                <i className="comment icon"></i>
                10+ comments
                <br />
                {get_data('og:description')}
            </div>
        </div>
    )

}

class BlogCards extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            fetching: false,
            articles: [
                { title: "Best Minecraft Tricks", url: 'https://adshnk.com/blog2/best-minecraft-tricks.html', img: 'https://adshnk.com/src/img/bg/blog-5.jpg', text: "Whether you're looking to build a giant sign or store items in the Nether, these tips will come in handy! We'll also cover ways to detect mobs and break columns with torches. Scroll down to find out more! Listed below are 25 of the best Minecraft tricks. You can use these to complete more tasks, and enjoy playing this popular game for longer! So, get your hands on these helpful tips!" },
                { title: "Four Funniest Roblox Games", url: 'https://adshnk.com/blog2/four-funniest-roblox-games.html', img: 'https://adshnk.com/src/img/bg/blog-2.jpg', text: "There are many great Roblox games available on the Internet. However, there are several that top the list of funniest games. This list includes games like SharkBite, Work at a Pizza Place, Piggy Traitor Mode, and more. Let's take a closer look at each game and their funny moments. In the end, we'll recommend one game that has made us laugh the most: SharkBite." },
                { title: "Funniest Minecraft Mods", url: 'https://adshnk.com/blog2/funniest-minecraft-mods.html', img: 'https://adshnk.com/src/img/bg/blog-6.jpg', text: "If you've ever wanted to twerk in Minecraft, this mod allows you to do it in an infinite amount of ways. You can twerk and melt creepers or set them ablaze, the choices are endless. Another popular mod is called Creeperade, which gives you unlimited ability to abuse creepers. Creeperade also includes a Creeper in the Jar mode, which allows you to capture creepers and set them on fire, creating hilarious results." },
                { title: "Hardest Minecraft Levels", url: 'https://adshnk.com/blog2/hardest-minecraft-levels.html', img: 'https://adshnk.com/src/img/bg/blog-7.jpg', text: "There are some levels in Minecraft that are harder than others. Here are the hardest levels: Beaconater, Heart of Ender, Savanna Village, Shipwreck, and more! You must pass them all to move to the next level. To know which levels are more difficult than others, read our guides to the toughest Minecraft levels! And don't forget to share your own tips and tricks! We hope this article will help you beat those levels and make them easier for you." },
                { title: "How and Where to Download Minecraft Mods", url: 'https://adshnk.com/blog2/how-and-where-to-download-minecraft-mods.html', img: 'https://adshnk.com/src/img/bg/blog-8.jpg', text: "Minecraft mods are extremely popular, but how and where do you download them? In this article, I'll cover the CurseForge, The Minecraft Forum, and BetterPortals, just to name a few. I also discuss how to download mods on the PC. Hopefully, this article has been helpful. Please share this article with other Minecraft players! And remember to check back for more articles about Minecraft mods!" },
                { title: "Roblox Games to play with friends", url: 'https://adshnk.com/blog2/roblox-games-to-play-with-friends.html', img: 'https://adshnk.com/src/img/bg/blog-3.jpg', text: "When you're looking for Roblox games to play with your friends, there are many great options. Some of the games you can try to include Blox Fruits, Royale High, Anime Fighting Simulator, and Work at a Pizza Place. There are also lots of different challenges that you can take on with your friends. If you're new to Roblox, check out these tips and tricks to get started." },
                { title: "Six BEST Roblox games for 2022", url: 'https://adshnk.com/blog2/six-best-roblox-games-for-2022.html', img: 'https://adshnk.com/src/img/bg/blog-1.jpg', text: "There are many great Roblox games, but what is the best one for you? Check out this article and find out! You can play some of your favorite games, too! There's a game for everyone! Here are a few of my favorites: Tower of Hell, Work at a Pizza Place, Survive the Killer, MeepCity, and more! Check them out today! You'll be glad you did!" },
                { title: "The Best Mods for minecraft 2022", url: 'https://adshnk.com/blog2/the-best-mods-for-minecraft-2022.html', img: 'https://adshnk.com/src/img/bg/blog-4.jpg', text: "If you want to make your Minecraft experience even more immersive, there are a number of great mods available for the game. Among the most popular are FastCraft, Optifine, Backpack Add-On, and Game Polish. Below we'll go over some of the best mods for Minecraft 2022. You can also read our in-depth reviews of all of the mods. But how do you decide which one is the best?" },
            ],
            html: [],
            nads: 0,
        }
    }

    componentDidMount() {
        this.print_list();
    }

    shouldComponentUpdate(nextPros, nextState) {
        if (nextPros !== this.props) {
            return true;
        } if (nextState !== this.state) {
            return true;
        } return false;
    }

    componentDidUpdate(nextProps, nextState) {
        if (nextProps !== this.props)
            this.print_list();
    }

    print_list = () => {

        var html = [];
        var dev = getNestedObj(() => this.props.dev, 'Desktop');
        var articles = getNestedObj(() => this.state.articles, []);

        Object.keys(articles).map((elem) => {

            let { title, url, img, text } = getNestedObj(() => articles[elem], {});

            let post_title = title;
            let post_content = text;
            let post_thumb = img;
            let post_image = img;

            let post_excerpt = post_content.substr(0, 175) + " [...]"
            let slug = post_title.substr(0, 50) + " [...]";

            html.push(
                <div key={elem} className="eight wide column item" >
                    <div className="ui basic segment">
                        <div key={elem} className={"ui card " + (dev === 'Smartphone' ? '' : 'horizontal')}>
                            <div alt={post_title} className="image" style={(dev === 'Smartphone' ? { width: "100%" } : { height: "180px", width: "180px" })}>
                                <img alt={post_title} className="lazy" data-src={post_thumb} />
                            </div>
                            <div className="content">
                                <div className="meta">
                                    <span className="date"><b>{"adshnk.com"}</b> <small><a>{moment('2022-01-01').fromNow()}</a></small></span>
                                </div>
                                <a href={url} className="header newsheader">{post_title}</a>
                                <div className="description">{post_excerpt}</div>
                                <div className="extra">
                                    <i className="paperclip icon middle aligned small"></i>{slug}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            );
        });

        if (isEmpty(html)) {

            html.push(
                <React.Fragment>
                    <div className="eight wide column item" style={{ overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>
                        <div className="ui card" style={{ maxWidth: "100%", minWidth: "100%" }}>
                            <div className="content">
                                <div className="ui placeholder">
                                    <div className="image header">
                                        <div className="line"></div>
                                        <div className="line"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="eight wide column item" style={{ overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>
                        <div className="ui card" style={{ maxWidth: "100%", minWidth: "100%" }}>
                            <div className="content">
                                <div className="ui placeholder">
                                    <div className="image header">
                                        <div className="line"></div>
                                        <div className="line"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="eight wide column item" style={{ overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>
                        <div className="ui card" style={{ maxWidth: "100%", minWidth: "100%" }}>
                            <div className="content">
                                <div className="ui placeholder">
                                    <div className="image header">
                                        <div className="line"></div>
                                        <div className="line"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="eight wide column item" style={{ overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>
                        <div className="ui card" style={{ maxWidth: "100%", minWidth: "100%" }}>
                            <div className="content">
                                <div className="ui placeholder">
                                    <div className="image header">
                                        <div className="line"></div>
                                        <div className="line"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </React.Fragment>
            );

        }

        this.setState({ html: html, nads: false });

        return html;

    }



    render() {

        let { html } = this.state || [];

        return (
            <div className="ui grid stackable contaienr">
                <div className="sixteen wide column">
                    <h2 className="ui header">
                        <i className="thumbtack icon"></i>
                        <div className="content">
                            <div className="sub header">{language.new.wordpress[0]}</div>
                            {language.new.wordpress[1]}
                            <div className="sub header">{language.new.wordpress[2]}</div>
                        </div>
                    </h2>
                </div>

                {!html && this.print_list()}
                {html && html}

            </div>
        );

    }
}

function ModalSharer(props) {

    return (
        <div className="ui basic modal" id="modal_share_content">

            <h2 className="ui header">
                <i className="share icon" style={{ WebkitMaskImage: "-webkit-gradient(linear, 0% 0%, 0% 100%, from(rgba(90, 50, 50, 0.8)), color-stop(0.5, rgba(119, 47, 26, 0.74)), to(rgba(123, 78, 32, 0.75)))", color: '#4184f3' }}></i>
                <div className="content">
                    {___reactjsD.website}
                    <div className="sub header" style={{ color: '#c9c9c9' }}>LINK SHARER</div>
                </div>
            </h2>

            <div className="content">
                <div className="ui grid" id="container_sharer"></div>
            </div>
        </div>
    );

}

function MenuItem(props) {
    let data = (props.data.hasOwnProperty(props.report) ? props.data[props.report] : {
        badge: '',
        reports: 0,
        success: false
    });

    return (
        <React.Fragment>
            <a href={"#modal_report_success" + props.report} className={data.class} data-badge={data.reports} onClick={props.click} data-report={props.report}>{props.textcontent}</a>
            {data.success &&
                <div className="modal active bg-gray" id={"modal_report_success" + props.report}>
                    <div className="empty">
                        <div className="empty-icon">
                            <i className="icon icon-check icon-3x"></i>
                        </div>
                        <p className="empty-title h5">Reported</p>
                        <p className="empty-subtitle">Thanks for your feedback</p>
                        <div className="empty-action">
                            <a className="btn btn-primary" href="#close">Close</a>
                        </div>
                    </div>
                </div>
            }
        </React.Fragment>
    )
}

class Report extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            reports: this.props.badge,
            status: []
        }
        this.onClickHandler = this.onClickHandler.bind(this);
    }

    componentDidMount() {
        if (this.props.reports !== null && this.props.reports.hasOwnProperty('type')) {
            let _reports = Object.keys(this.props.reports.type);
            let _status = this.state.status;
            _reports.map((key) => {
                _status[key] = { class: 'badge', reports: this.props.reports.type[key] };
                this.setState({ status: _status })
                //console.log(status);
            });
        }

    }

    componentWillUnmount() {

    }

    onClickHandler(e) {
        e.preventDefault();
        let data = this.state.status;
        let type = e.target.dataset.report;
        let shrink = parseInt(this.props.shrink);
        let reports = this.props.reports; //console.log(reports);
        let request = reportAPI(type, shrink, reports);

        request.then((response) => {
            let data = response.data;
            if (data.boolean) {
                let reports_type = (data.type.hasOwnProperty(type) ? data.type[type] : 1);
                let reports = data.reports

                data[type] = { class: 'badge', reports: reports_type, response: data, success: true };
                this.setState({ status: data, reports: reports })
            }
        }).catch((error) => {
            data[type] = { class: '', reports: 0, response: error.data, success: false };
            this.setState({ status: data })
        });
    }

    render() {
        return (
            <React.Fragment>
                <span className="badge" data-badge={this.state.reports}>
                    <a href="#report" className="btn btn-link text-light">{language.report}</a>
                </span>
                <div className="modal modal-sm" id="report">
                    <a href="#close" className="modal-overlay" aria-label="Close"></a>
                    <ul className="menu" >
                        <li className="divider" data-content="REPORT Advertising" ></li>
                        {this.state.axios}
                        <li className="menu-item">
                            <MenuItem report={'ad#1'} data={this.state.status} click={this.onClickHandler} textcontent={'I\'m not interested'} />
                            <MenuItem report={'ad#2'} data={this.state.status} click={this.onClickHandler} textcontent={'Hidden content'} />
                            <MenuItem report={'ad#3'} data={this.state.status} click={this.onClickHandler} textcontent={'Inappropriate Ad'} />
                            <MenuItem report={'ad#4'} data={this.state.status} click={this.onClickHandler} textcontent={'Seen several times'} />
                        </li>
                        <li className="divider" data-content="REPORT User"></li>
                        <li className="menu-item">
                            <MenuItem report={'us#1'} data={this.state.status} click={this.onClickHandler} textcontent={'Link expired'} />
                            <MenuItem report={'us#2'} data={this.state.status} click={this.onClickHandler} textcontent={'Inappropriate'} />
                            <MenuItem report={'us#3'} data={this.state.status} click={this.onClickHandler} textcontent={'Copyright'} />
                            <MenuItem report={'us#4'} data={this.state.status} click={this.onClickHandler} textcontent={'Loop shrinks'} />
                        </li>
                    </ul>
                </div>
            </React.Fragment>
        )
    }
}

function Created(props) {

    return (
        <small className="text-ellipsis text-uppercase mr-2 text-light"><small className="sub text-gray-2">Created </small>{props.ago}</small>
    )

}

function ComponentInfos(props) {

    return (

        <div className="ui basic segment center aligned">
            <small id="small_loading_indicator">Loaded in 0.00n seconds (0.0n% difference)</small>
        </div>

    );

}

class Affiliate extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            operagxrendered: false
        };

        /** general */
        this.select_countries = this.select_countries.bind(this);
        /** detail */
        this.render_operagx = this.render_operagx.bind(this);
        this.render_raid = this.render_raid.bind(this);
        this.render_adsense_leaderboard = this.render_adsense_leaderboard.bind(this);

    }

    componentDidMount() {

    }

    shouldComponentUpdate(nextProps, nextState) {
        if (nextState !== this.state)
            return true;
        if (nextProps !== this.props)
            return true;
        return false;
    }

    componentDidUpdate(nextProps, nextState) {
        if (nextState.operagxrendered !== this.state.operagxrendered && this.state.operagxrendered) {
            if (window.hasOwnProperty('$script'))
                $script(['https://unpkg.com/typewriter-effect@latest/dist/core.js'], 'typewriter-bundle')

            $script.ready('typewriter-bundle', function () {
                var typewriter = new Typewriter(document.getElementById('typed_operagx'), {
                    loop: true,
                    delay: 75,
                    cursor: "_"
                });
                typewriter
                    .typeString('Browser for gamers')
                    .pauseFor(2500)
                    .deleteAll()
                    .typeString('Set limits on CPU, RAM, and Network')
                    .pauseFor(2500)
                    .deleteAll()
                    .typeString('Use Discord&Twitch from the sidebar')
                    .pauseFor(2500)
                    .start();
            });
        }
    }

    select_countries = (list = []) => {

        let vpninfo = this.props.vpn || {};
        let country = getNestedObj(() => vpninfo.country.code, false);

        if (!vpninfo)
            return false;

        /** ['it', 'st'].indexOf('it') 
         * array
         */
        if (list.indexOf(country))
            return true;

        return false;
    }

    render_operagx = () => {
        const rendered = this.state.operagxrendered || false;

        if (!rendered)
            this.setState({ operagxrendered: true });


        return (
            <React.Fragment>
                <style>{"\
                    @import url('https://fonts.googleapis.com/css2?family=Orbitron:wght@500&display=swap');\
                    .aff-adshnk-mat-card>:last-child:not(.mat-card-footer), .mat-card-content>:last-child:not(.mat-card-footer) {margin-bottom:0;}\
                    .aff-adshnk-advertise {height: 90px;min-height: 90px;max-height: 160px;margin: -10px 0 18px !important;}\
                    .aff-adshnk-ad-dp3-wrapper {height: 100%;}\
                    .aff-adshnk-opera-background {max-height: 160px;min-height: 90px;background: transparent linear-gradient(101deg,#a40048,#0e0042) 0 0 no-repeat padding-box;cursor: pointer;width: 100%;height: 100%;display: flex;justify-content: center;align-items: center;}\
                    .aff-adshnk-body-wrapper.make-visible{opacity: 1;}\
                    .aff-adshnk-body-wrapper {opacity: 0;display: flex;justify-content: space-between;align-items: center;transition: opacity 1s;}\
                    .aff-adshnk-body-wrapper, .aff-adshnk-inner-wrapper {margin: 0 20px;height: 100%;width: 100%;}\
                    .aff-adshnk-logo-wrapper {margin-right: 20px;height: 100%;display: flex;align-items: center;}\
                    .aff-adshnk-download-wrapper, .aff-adshnk-logo-wrapper img {height: calc(100% - 40px);}\
                    .aff-adshnk-ad-text {font-family: 'Orbitron', sans-serif;margin-right: 20px;font-size: 55px;line-height: 60px;letter-spacing: 0;color: #17fc76;letter-spacing: -1.5px;}\
                    .aff-adshnk-ad-text a {-webkit-animation: blink 1s step-start 0s infinite;animation: blink 1s step-start 0s infinite;opacity: 1;}\
                    .aff-adshnk-download-wrapper {padding: 0 15px;display: flex;align-items: center;background: #17fc76 0 0 no-repeat padding-box;box-shadow: 0 0 50px rgba(23,252,118,.6);border-radius: 2px;}\
                    .aff-adshnk-download-wrapper, .aff-adshnk-logo-wrapper img[_adshnk-vm1-129] {height: calc(100% - 40px);}\
                    .aff-adshnk-download-wrapper .aff-adshnk-download-text {font: normal normal normal 34px/43px 'Orbitron';letter-spacing: 0;color: #0e0042;letter-spacing: -1.5px;}\
                    .aff-adshnk-download-wrapper .aff-adshnk-download-image-wrapper .aff-adshnk-download-image {margin-left: 4px;height: 30px;width: 30px;}\
                "}</style>

                <div id="aff-adshnk-advertise-block" className="aff-adshnk-advertise" style={{ height: "52px", marginBottom: "30px !important" }} onClick={() => { window.open('https://www.adtogametrk.com/5QR6K28/HX6G2NF/', '_blank') }}>
                    <div >
                        <div className="aff-adshnk-ad-dp3-wrapper ng-star-inserted">
                            <div className="aff-adshnk-ng-star-inserted">
                                <div id="aff-adshnk-opera-body-advertise" className="aff-adshnk-opera-background">
                                    <div className="aff-adshnk-body-wrapper make-visible">
                                        <div className="aff-adshnk-logo-wrapper">
                                            <img src="https://adshnk.com/src/img/opera.svg" alt="" className="aff-adshnk-ng-star-inserted" style={{ height: "52px" }} />
                                        </div>
                                        <div id="typed_operagx" className="aff-adshnk-ad-text" style={{ fontFamily: '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,"Noto Sans",sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji"', fontSize: "34px", fontWeight: "400", lineHeight: "1.5" }}> </div>
                                        <div id="opera-download-body" className="aff-adshnk-download-wrapper"><div className="aff-adshnk-download-text"> Download </div>
                                            <div className="aff-adshnk-download-image-wrapper">
                                                <img src="https://adshnk.com/src/img/arrows.svg" alt="" className="aff-adshnk-download-image" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        )
    }

    render_raid = () => {

        return (
            <a className="item" href="https://plarium.com/landings/en/desktop/raid/dragon_fire_a_m_f038_arrow_rdoapp?plid=797314&pxl=adshrink" target="_blank" >
                <img style={{ height: "90px", width: "970px" }} className="ui image bordered lazy" data-src="https://i.postimg.cc/sDt482Qn/Raid-970x90-ENG2-2.png" alt="RAD Deliana RAD-Deliana-MYDELIANA-B132644-970x90-No-OS-English-IMG-2-UCK-2" />
            </a>
        )
    }

    render_adsense_leaderboard = () => {

        return (
            <React.Fragment>
                {true == true && _adshrink?.enabled?.adsenseFull &&
                    <ErrorBoundary><AdsenseBanner size={'leaderboard'} /></ErrorBoundary>
                }
            </React.Fragment>
        )
    }

    render() {

        /*
            {this.select_countries(['RU', 'CN']) == false && true == false
                ? this.render_raid()
                : this.render_adsense_leaderboard()
            }
        */

        return (
            <React.Fragment>
                {this.render_raid()}
            </React.Fragment>
        )
    }
}

class SponsorizedIframeModal extends React.Component {
    constructor(props) {
        super(props);

        const sysC = _adshrink?.SystemC ?? [];

        this.state = {
            banner: false /** when modal full active and loaded */,
            setting_modal: 1,
            setting_adstype: 1,
            cid: false, /** click id */
            cid_check: false, /** if click id okay and clicked */
            cid_attempt: 1, /** numero tentativi */
            cid_required: false,
            cid_maxttempt: false,
            //cid_fail: false, /** if goes in fail */
            topic: false, /** selected topic */
            tab: false, /** topic tab object */
            tab_load: false, /** when loaded */
            //
            verify_button_fetch: false,
        }

        this.endpoint = [
            //'https://www.shrink-service.it/v3/api/pb/channels/bergfried/check?cid=', //https://adshnk.com/src/js/widget/api.json?read=1&b=1&cid=
            'https://adshnk.com/src/js/widget/api.json?read=1&b=1&cid=',
            'https://www.shrink-service.it/v3/api/pb/channels/cpi/check?cid='
        ];

        this.interval_after_open = false;
        this.modal = 1;
        this.adstype = 1;
        this.verify_click_mode = 2;

        this.timeout = 120;
        this.nextopening = 20;
        this.maxattempt = 1; //2 default prima 21/11/2022
        this.finaltimeout = 30;
        this.finalattempt = false;

        this.categories = [
            "legal",
            "medical",
            "car insurance",
            "loans & finance",
            "marketing",
            "software",
            "real estate",
            "insurance",
            "home improvement",
            "automotive",
            "education",
        ];

        this.translations = {
            'en': {
                'modal_2': {
                    0: 'Click the button',
                    1: 'Click on the first Ad Search',
                    2: 'Task completed',
                    3: 'Discover Interesting Ad-Searches',
                    4: 'Click on the first Ad Search, don\'t close the page, come back here and verify the click.',
                    5: 'Discover and Click on the Search Ad',
                    6: 'Install and Run ',
                    7: "To proceed Download\n ",
                    8: " now",
                    9: " for 30 seconds"
                },
                'step_one': {
                    'title': '1. Choose your favorite Ad Topic',
                    'sub': 'To see search ads on the next page, disable AdBlock'
                },
                'step_two': {
                    'title': '2. Click on the Search Ad',
                    'sub': 'Wait until the page is fully loaded and come back to this page. See example below'
                },
                'messages': {
                    'verify_click_fetch': "We are verifying you click or wait for the countdown to close this window.",
                    'verify_click_success': "Click detected, don't close the tab or it could be invalidated!",
                    'verify_click_fail': "No clicks detected..",
                    'verifiy_click_title': {
                        ok: 'Don\'t close the tab!',
                        no: 'We are almost there!',
                        btn: 'Verify Click'
                    },
                    'max_attempt': {
                        'sub': 'You have reached the maximum number of attempts, wait the countdown and close the window!',
                        'title': ''
                    },
                    'tab_open': {
                        'sub': 'Ad Topic opened. Click on one of the Search Ads, and unlock your content.',
                        'title': ''
                    },
                    'alerts': {
                        'forced': 'This step is required, choose an Ad Topic again and retry.',
                        'open_after': 'You can reopen the results in '
                    }
                }
            },
            'ja': {
                'modal_2': {
                    0: 'ボタンをクリック',
                    1: '最初の広告検索をクリック',
                    2: 'タスク完了',
                    3: '興味深い広告検索を発見する',
                    4: '最初の広告検索をクリックして、ページを閉じずにここに戻り、クリックを確認してください。',
                    5: '広告を検索してクリックする',
                    6: 'インストールして実行',
                    7: "続行するには\n",
                    8: "をダウンロードしてください。",
                    9: "30秒間"
                },
                'step_one': {
                    'title': '1. お気に入りの広告トピックを選択',
                    'sub': '次のページで広告を検索するには、AdBlockを無効にしてください'
                },
                'step_two': {
                    'title': '2. 広告検索をクリック',
                    'sub': 'ページが完全に読み込まれるまで待ってから、このページに戻ってください。以下の例を参照してください'
                },
                'messages': {
                    'verify_click_fetch': "クリックを確認しています。カウントダウンが終了するまでこのウィンドウを閉じないでください。",
                    'verify_click_success': "クリックが検出されました。タブを閉じないでください。無効になる可能性があります！",
                    'verify_click_fail': "クリックが検出されませんでした。",
                    'verifiy_click_title': {
                        ok: 'タブを閉じないでください！',
                        no: 'もう少しです！',
                        btn: 'クリックを確認'
                    },
                    'max_attempt': {
                        'sub': '最大試行回数に達しました。カウントダウンが終了するまで待ってウィンドウを閉じてください！',
                        'title': ''
                    },
                    'tab_open': {
                        'sub': '広告トピックが開きました。広告検索の1つをクリックして、コンテンツをロック解除してください。',
                        'title': ''
                    },
                    'alerts': {
                        'forced': 'このステップは必須です。再度広告トピックを選択して、やり直してください。',
                        'open_after': '結果を再度開くことができます '
                    }
                }
            },
            'it': {
                'modal_2': {
                    0: 'Clicca sul pulsante',
                    1: 'Clicca sul primo Annuncio',
                    2: 'Task Completata',
                    3: 'Scopri Annunci Interessanti',
                    4: 'Clicca sul primo Annuncio, non chiudere la pagina, ritorna e verifica il click.',
                    5: 'Scopri e fai clic sull\'Annuncio Pubblicitario',
                    6: 'Installa ed Esegui ',
                    7: "Per procedere Scarica\n ",
                    8: " adesso",
                    9: " per 30 secondi"
                },
                'step_one': {
                    'title': '1. Scegli la tua Categoria preferita',
                    'sub': 'Per mostrare gli annunci, disabilita AdBlock'
                },
                'step_two': {
                    'title': '2. Clicca sull\'Annuncio di Ricerca',
                    'sub': 'Aspetta che il caricamento della pagina sia completo e ritorna su Adshnk. Guarda l\'esempio in basso'
                },
                'messages': {
                    'verify_click_fetch': "Stiamo verificando il tuo click oppure aspetta il countdown per chiudere la finestra.",
                    'verify_click_success': "Click individuato, non chiudere il tab!",
                    'verify_click_fail': "Nessun click individuato..",
                    'verifiy_click_title': {
                        ok: 'Non chiudere il tab!',
                        no: 'Ci siamo quasi!',
                        btn: 'Verifica Click'
                    },
                    'max_attempt': {
                        'sub': 'Hai ragigunto il numero massimo di tentativi, aspetta il countdown e chiudi la finestra!',
                        'title': ''
                    },
                    'tab_open': {
                        'sub': 'Individuato il Tab aperto. Clicca su uno degli annunci e sblocca il tuo contenuto.',
                        'title': ''
                    },
                    'alerts': {
                        'forced': 'Questo step è obbligatorio, scegli un Ad Topic e riprova.',
                        'open_after': 'Puoi riaprire i risultati in '
                    }
                }
            },
            'es': {
                'modal_2': {
                    0: 'Haga clic en el botón',
                    1: 'Haga clic en la primera búsqueda de anuncios',
                    2: 'Tarea terminada',
                    3: 'Descubrir Búsquedas de Anuncios Interesantes',
                    4: 'Haga clic en la primera búsqueda de anuncios, no cierre la página, vuelva aquí y verifique el clic.',
                    5: 'Descubra y haga clic en el Anuncio de Búsqueda',
                    6: 'Instalar y Ejecutar ',
                    7: "Para continuar Descargar\n ",
                    8: " ahora",
                    9: " durante 30 segundos"
                },
                'step_one': {
                    'title': '1. Elija su tema publicitario favorito',
                    'sub': 'Para ver los anuncios de búsqueda en la página siguiente, deshabilite AdBlock'
                },
                'step_two': {
                    'title': '2. Haga clic en el anuncio de búsqueda',
                    'sub': 'Espere hasta que la página esté completamente cargada y vuelva a esta página. Ver ejemplo a continuación'
                },
                'messages': {
                    'verify_click_fetch': "Estamos verificando que haga clic o espere la cuenta regresiva para cerrar esta ventana.",
                    'verify_click_success': "Clic detectado, no cierres la pestaña o podría quedar invalidada!",
                    'verify_click_fail': "No se detectaron clics..",
                    'verifiy_click_title': {
                        ok: '¡No cierres la pestaña!',
                        no: '¡Estamos casi alli!',
                        btn: 'Verificar Clic'
                    },
                    'max_attempt': {
                        'sub': 'Has alcanzado el número máximo de intentos!',
                        'title': ''
                    },
                    'tab_open': {
                        'sub': 'Haga clic en uno de los anuncios de búsqueda y desbloquee este contenido.',
                        'title': ''
                    },
                    'alerts': {
                        'forced': 'Este paso es obligatorio, elija un tema de anuncio nuevamente y vuelva a intentarlo.',
                        'open_after': 'Puedes reabrir los resultados en 10 segundos'
                    }
                }
            },
            'pt': {
                'modal_2': {
                    0: 'Click the button',
                    1: 'Clique na primeira pesquisa de anúncios',
                    2: 'Tarefa completa',
                    3: 'Descubra pesquisas de anúncios interessantes',
                    4: 'Clique na primeira pesquisa de anúncios, não feche a página, volte aqui e verifique o clique.',
                    5: 'Descubra e clique no anúncio de pesquisa',
                    6: 'Baixe e Siga ',
                    7: "Para proceder Baixe\n ",
                    8: " agora",
                    9: " por 30 segundos"
                },
                'step_one': {
                    'title': '1. Choose your favorite Ad Topic',
                    'sub': 'To see search ads on the next page, disable AdBlock'
                },
                'step_two': {
                    'title': '2. Click on the Search Ad',
                    'sub': 'Wait until the page is fully loaded and come back to this page. See example below'
                },
                'messages': {
                    'verify_click_fetch': "We are verifying you click or wait for the countdown to close this window.",
                    'verify_click_success': "Click detected, don't close the tab or it could be invalidated!",
                    'verify_click_fail': "No clicks detected..",
                    'verifiy_click_title': {
                        ok: 'Don\'t close the tab!',
                        no: 'We are almost there!',
                        btn: 'Verify Click'
                    },
                    'max_attempt': {
                        'sub': 'You have reached the maximum number of attempts, wait the countdown and close the window!',
                        'title': ''
                    },
                    'tab_open': {
                        'sub': 'Ad Topic opened. Click on one of the Search Ads, and unlock your content.',
                        'title': ''
                    },
                    'alerts': {
                        'forced': 'This step is required, choose an Ad Topic again and retry.',
                        'open_after': 'You can reopen the results in '
                    }
                }
            },
        };

        this.on_close_modal = this.on_close_modal.bind(this);

    }

    componentDidMount() {
        var that = this;

        /** settings */
        const userse = getNestedObj(() => this.props.se, false);
        const userid = getNestedObj(() => this.props.data.userid, false) ?? false;

        const sysC = _adshrink?.SystemC ?? [];

        if (sysC.indexOf(userid) >= 0) {
            this.maxattempt = 1;
        }
        /** CPI da cambiare - solo se ha i requisiti */
        if (userse) {
            this.maxattempt = 1;
        }

        var modal = document.getElementById("si_modal");
        var close = document.getElementById("si_modal_close_x");

        // When the user clicks anywhere outside of the modal, close it
        window.onclick = function (event) {
            if (event.target == modal) {
                //modal.style.display = "none";
            }
        }

        var previousdisplayvalue = modal.style.display;

        var observer = new MutationObserver((mutations) => {
            var SETINTERVAL = null;

            mutations.forEach(function (mutation) {
                if (mutation.attributeName !== 'style') return;
                var currentValue = mutation.target.style.display; console.log('mutations', currentValue);
                if (currentValue === 'block') {
                    console.log('si-modal-attr', modal.getAttribute('adstype'), modal.getAttribute('modal'));

                    /** interval + other */
                    const INTERVAL = that.timeout;

                    SETINTERVAL = setInterval(() => {
                        that.timeout = that.timeout - 1;

                        console.info('modal sponsorized', that.timeout);
                        if (parseInt(that.timeout) >= 6)

                            if (!getNestedObj(() => that.state.banner, true)) {
                                console.log('cdm-siads', window.__adsmodal); /** ci sono  */
                                /** settings */
                                that.modal = parseInt(modal.getAttribute('modal'));
                                that.adstype = parseInt(modal.getAttribute('adstype'));

                                /** check if forced */
                                var _force_click = that.on_random_force();
                                if (!_force_click) { that.timeout = 7; window.cd = 53; }
                                if (that.adstype == 2) { that.maxattempt = 10; that.finaltimeout = getNestedObj(() => window.timers[2], 30); that.timeout = 7; window.cd = (getNestedObj(() => window.timers[2], 30) - 6); }
                                /** set initial state */
                                that.setState({ banner: true, cid_required: _force_click, setting_modal: that.modal, setting_adstype: that.adstype, cid: makeid(16, true, userid) });
                            }

                        if (that.timeout <= 0) {
                            clearInterval(SETINTERVAL)
                        }
                    }, 1000);
                } else if (currentValue === 'none') {
                    /** like if none but the steps are not completed yet */
                    clearInterval(SETINTERVAL);
                }
            });
        });

        /** set observer */
        observer.observe(modal, {
            attributes: true,
            attributeFilter: ["style"]
        });

    }

    /** pass next state and props */
    shouldComponentUpdate(nextProps, nextState) {

        if (nextProps !== this.props) {
            return true;
        } if (nextState !== this.state) {
            return true;
        } return false;

    }

    /** pass prev state and props */
    componentDidUpdate(prevProps, prevState) {
        if (prevState.banner !== this.state.banner) {
            /** make something when the modal is open */
            $('#si_related').attr('src', this.get_link_bt());
        }

        if ((prevState.setting_adstype !== this.state.setting_adstype && this.state.setting_adstype == 2)) {
            let userid = getNestedObj(() => this.props.data.userid, false) ?? false;
            /** smartlook */
            if ('smartlook' in window) {
                smartlook('identify', userid, {
                    "modaltype": this.state.setting_modal,
                    "adstype": this.state.setting_adstype,
                    "cdn_v": getNestedObj(() => window.cdn_version, "")
                });
                smartlook('init', '618845a82fb37a3b4a76c806fede2c807341e5ca', {
                    region: 'eu'
                });
            }
            /** sentry  */
            if ('Sentry' in window) {
                Sentry.init({
                    dsn: "https://59a156f577ce474b9a893ba3ed06413c@o1176729.ingest.sentry.io/6274791",
                    // this assumes your build process replaces `process.env.npm_package_version` with a value
                    release: getNestedObj(() => window.cdn_version, ""),
                    integrations: [new Sentry.BrowserTracing()],

                    // We recommend adjusting this value in production, or using tracesSampler
                    // for finer control
                    tracesSampleRate: 1.0,
                });
            }

            /** event */  ga('send', 'event', 'Page', 'app_installs', 'modal_open_serve_new_offer');
        }
    }

    on_random_force = () => {
        /** forced */ return true;
    }

    on_close_modal(programmatic = false) {
        /** se richiesto e non ha fatto tentativi non puo chiude, inoltre se il timer è zero uguale.  */
        console.info([
            (getNestedObj(() => this.state.cid_required, false) && getNestedObj(() => this.state.cid_check, 1)),
            (programmatic),
            (getNestedObj(() => this.state.cid_attempt, 1) > 2 && this.timeout <= 0),
            (!getNestedObj(() => this.state.cid_required, false) && this.timeout <= 0)
        ]);

        if (
            (getNestedObj(() => this.state.cid_required, false) && getNestedObj(() => this.state.cid_check, 1))
            || (programmatic)
            || (getNestedObj(() => this.state.cid_attempt, 1) > 2 && this.timeout <= 0)
            || (!getNestedObj(() => this.state.cid_required, false) && this.timeout <= 0)
        ) {
            try {
                // Get the modal
                var modal = document.getElementById("si_modal");
                //close
                modal.style.display = "none";
                /** event */ ga('send', 'event', 'Page', 'forced_searches', 'modal_closed');
            } catch (e) {
                alert(e);
            }
        } else {
            alert("Complete this step to continue");
        }
    }

    get_title() {
        const { title } = this.props.data || [];

        return decodeHtml(title ?? 'This link has no title..');
    }

    get_category() {
        return getNestedObj(() => this.props.data.category, 'any');
    }

    /** PHP */
    rtrim = (str, chr) => {
        var rgxtrim = (!chr) ? new RegExp('\\s+$') : new RegExp(chr + '+$');
        return str.replace(rgxtrim, '');
    }

    base64url_encode = (url) => {
        return this.rtrim(window.btoa(url).replace('+/', '-_'), '=');
    }

    get_link_bt = (cat, cid) => {

        /** '&category=' + encodeURIComponent(cat) + */
        if (this.state.setting_adstype == 1) {
            return 'https://search.bergfried.tech/v4.2/balancer/?pid=networkloop&subid=5402&category=' + encodeURIComponent(cat) + '&context=' + encodeURIComponent(this.get_title()) + '&cid=' + cid + '&bucket=' + getNestedObj(() => this.props.data.userid, 'not_set');
        } else if (this.state.setting_adstype == 2) {
            /** get cpi link  */

            var ___offer_link = getNestedObj(() => this.props.offer.offer_link, "");
            ___offer_link = ___offer_link + "";
            ___offer_link = ___offer_link + cid;
            ___offer_link = ___offer_link.toString().replace('ssh_adsh', getNestedObj(() => this.props.data.userid, 0));
            ___offer_link = ___offer_link.toString().replace('agm_unique', safe_read_cookie('cookie_bypass_v1'));

            var ___route = getNestedObj(() => this.props.offer._route, false);
            /** redirect */
            if (___route) {
                /** encode */
                ___offer_link = ___route + "/" + this.base64url_encode(___offer_link);
            }

            return ___offer_link;

        }

    }

    open_in_new_tab = (url) => {
        var tab = window.open(url, '_blank', 'noopener,noreferrer'); return tab;
    }

    get_time_remaining = () => {
        const endtime = new Date();
        endtime.setHours(23, 59, 59, 999);

        const total = Date.parse(endtime) - Date.parse(new Date());
        const seconds = Math.floor((total / 1000) % 60);
        const minutes = Math.floor((total / 1000 / 60) % 60);
        const hours = Math.floor((total / (1000 * 60 * 60)) % 24);
        const days = Math.floor(total / (1000 * 60 * 60 * 24));

        return {
            total,
            days,
            hours,
            minutes,
            seconds
        };
    }

    check_cid_if_successful = async () => { /** okay */

        const cid = getNestedObj(() => this.state.cid, false) ?? false;
        const cid_check = getNestedObj(() => this.state.cid_check, false) ?? false;
        const _pa = getNestedObj(() => this.props.offer._pa, "");

        console.warn('check_cid_if_successful::cid_check::A', cid_check);

        if (cid_check)
            return true;

        if (!cid)
            return false;

        var endpoint = this.endpoint[(this.state.setting_adstype - 1)];
        var random = Math.floor(Math.random() * 99999999);
        /** search */
        if (this.state.setting_adstype == 1) {
            endpoint = endpoint + cid;
        }
        /** CPI */
        if (this.state.setting_adstype == 2) {
            endpoint = endpoint + random + "&oid=" + getNestedObj(() => this.props.offer.offer_id, 0) + "&uid=" + getNestedObj(() => this.props.data.userid, 0) + "&sid=" + getNestedObj(() => this.props.data.id, 0);
        }

        /** INIT->random digit | CID=random_digitXXXXrandomalfaXXXXuserid */
        var cid_check_req = await $.get(endpoint);

        if (this.state.setting_adstype == 1) {
            ga('send', 'event', 'Page', 'forced_searches', 'check_postback');

        }
        if (this.state.setting_adstype == 2) {
            /** add somedata */
            try {
                /** get the data */
                let _od = getNestedObj(() => this.props.offer._od, "");
                /** set */
                window[___reactjsD.o] = Object.assign({}, window[___reactjsD.o], { _od: _od, ran: random });
                /** cookie cpi try 15m */
                safe_write_cookie('cpi_app_fail', false, (60 * 30), true);
            } catch (e) { }
            ga('send', 'event', 'Page', 'app_installs', 'check_postback', getNestedObj(() => cid_check_req._st[0]));
        }

        /** _st[0] -CPU | _st[4] -microtime */

        const is_success = getNestedObj(() => cid_check_req.success, false) || false;

        if (is_success) {

            if (this.state.setting_adstype == 1) {
                /** cookie */ safe_write_cookie('search_feed_once', false, 60 * 60, true);
                /** event */  ga('send', 'event', 'Page', 'forced_searches', 'ad_click_success');
            } if (this.state.setting_adstype == 2) {
                /** cookie cpi success */ safe_write_cookie('cpi_app_success', false, this.get_time_remaining().seconds, true);
                /** event */  ga('send', 'event', 'Page', 'app_installs', 'cpi_success');
                window[___reactjsD.o] = Object.assign({}, window[___reactjsD.o], { [_pa]: true });
            }

            this.setState({ cid_check: true });
        }

        console.warn('check_cid_if_successful::cid_check::B::setstate', cid_check, is_success);

        return is_success;

    }

    check_cid_if_successful_by_button = async () => {

        const that = this || [];
        /** FIX BUG  */
        let transaltions = this.translations?.[detectLangStorage] ?? this.translations['en'];

        this.setState({ verify_button_fetch: true });

        let success = await this.check_cid_if_successful();

        if (!success) {
            this.setState({ verify_button_fetch: false });
            alert(transaltions.messages.verify_click_fail);
            return false;
        }

        try { clearInterval(that.interval_after_open); that.interval_after_open = false; } catch (e) { }

        /** change state */
        console.warn('3173');

        that.setState({
            cid_check: true, tab: false, timer: false, verify_button_fetch: false
        });

        setTimeout(() => {
            that.on_close_modal(true); window.cd = 60;
        }, 1500)

    }

    onclick_topic = async (e, cat) => { /** okay */
        e.preventDefault();

        const that = this || {};

        /** LIMITE CLICK TOPIC, OGNI 30 SEC */
        if (that.state.setting_adstype == 1 && this.state.cid_attempt >= 2 && (window.cd < this.nextopening)) {   /** okay */
            /** event */  ga('send', 'event', 'Page', 'forced_searches', 'fail_and_tried_reopening_before_timer');
            alert("You can reopen the results in " + (this.nextopening - window.cd) + " seconds");
            return false;
        }

        /** event */  ga('send', 'event', 'Page', 'forced_searches', 'tried_open_cat');

        const topic_url = this.get_link_bt(cat, getNestedObj(() => this.state.cid, false)); /** alert(topic_url); */
        const close = document.getElementById("si_modal_close_x");

        /** TAB APERTO E IN ISTANZA */
        var tab = window.open(topic_url, '_blank');

        console.log('gc window.open', topic_url, tab);

        /** detect if new tab blocked */
        if (!tab || getNestedObj(() => tab.closed, true)) {
            /** event */ ga('send', 'event', 'Page', 'forced_searches', 'tab_blocked_by_browser');
            alert('The browser is blocking the loading of the new tab.'); return;
        }

        /** MEASURE TIME */
        var starttime_topic_open = new Date().getTime();

        /** event */  ga('send', 'event', 'Page', 'forced_searches', 'opened_topic');

        if (that.state.setting_adstype == 2) {
            /** check for unique cpi offer open */
            if (!safe_read_cookie('cpi_unique_user'))
                ga('send', 'event', 'Page', 'app_installs', 'opened_cpi_offer_unique');
            safe_write_cookie('cpi_unique_user', false, that.get_time_remaining().seconds, true);
        }

        this.categories.splice(this.categories.indexOf(cat), 1);

        /** non funziona - DOMException: Blocked a frame with origin "https://adshnk.com" from accessing a cross-origin frame. */
        /*
        tab[tab.addEventListener ? 'addEventListener' : 'attachEvent'](
            (tab.attachEvent ? 'on' : '') + 'load', () => {
                this.setState({tab_load: true});
            }, false
        );
        */

        var cid_attempt = parseInt(this.state?.cid_attempt ?? 1);
        var _last_countdown_at_maxatt = false;

        /** set interval */
        var N = 0; var cid_success = false; var tab_closed = false;
        this.interval_after_open = setInterval(async function () { /** counter */ N++; $('#_click_check_label_').text("00:" + (10 - N % 10));
            /** set state timer */
            if (!getNestedObj(() => that.state.timer, false)) {
                /** increase attempt */ cid_attempt++;

                console.warn('2949');
                that.setState({
                    timer: true,
                    tab: tab,
                    cid_attempt: cid_attempt
                });

            }
            /** set funcion */
            var safe_clear_interval = () => {
                try { clearInterval(that.interval_after_open); that.interval_after_open = false; } catch (e) { }
            }
            var click_success = () => { /** okay */
                safe_clear_interval();
                /** change state */
                console.warn('2963');
                that.setState({
                    cid_check: true, tab: false, timer: false
                });
                that.on_close_modal(true); window.cd = 60;
            }
            var click_fail = () => {
                safe_clear_interval();
                /** if max attempt */
                if (cid_attempt >= (that.maxattempt + 1)) {
                    console.warn('MAX ATTEMPTS');
                    /** event */ ga('send', 'event', 'Page', 'forced_searches', 'success_by_max_attemps');


                    //click_success(); return;   
                }
                let userid = getNestedObj(() => that.props.data.userid, false) ?? false;
                /** make new cid  */
                let new_cid = makeid(16, true, userid);
                /** change state */
                console.warn('2973');
                that.setState({
                    cid: new_cid, topic: false, cid_check: false, tab: false, timer: false
                });
                /** cookie */
                //safe_write_cookie('search_feed_suspect', false, (60*60), true);

                /** alert */
                alert("This step is required, choose an Ad Topic again and retry.");
            }

            /** check for the tab status */ tab_closed = (getNestedObj(() => tab.closed, true) ? true : false);
            /** check if the tab is closed and clicked | if CPI (adstype=2) if close the tab its not a problem */
            if (tab_closed) { /** if tab close */ //& that.state.setting_adstype==1
                /** MEASURE TIME */
                var endtime_topic_close = new Date().getTime() - starttime_topic_open;
                /** event */ ga('send', 'event', 'Page', 'forced_searches', 'average_time_from_open_to_close_ms', endtime_topic_close);


                //debug-verify cid_success = await that.check_cid_if_successful();
                /** if user close the tab and clicked - success */
                if (cid_success) {
                    /** event */ ga('send', 'event', 'Page', 'forced_searches', 'average_time_from_open_to_close_ms_success', endtime_topic_close);
                    //debug-verify click//click_success();
                    //click_success();
                } else {
                    /** event */ ga('send', 'event', 'Page', 'forced_searches', 'average_time_from_open_to_close_ms_fail', endtime_topic_close);
                    click_fail();
                }
            }

            /** if pass 60sec clear all - make as fail*/
            if (that.state.setting_adstype == 1 && N > 60) {
                /** event */ ga('send', 'event', 'Page', 'forced_searches', '60_seconds_expired');
                click_fail();
            }

            /** if pass 60sec clear all - make as fail*/
            if (that.state.setting_adstype === 2 && N > getNestedObj(() => window.timers[2], 30)) {
                /** event */ ga('send', 'event', 'Page', 'forced_searches', '60*5_seconds_expired_cpi');
                click_fail();
            }

            /** every 10 sec check for the click - at the >6 fails every time*/
            if (N % 7 === 0 && N <= 60 && N > 5) {
                cid_success = false;

                if (that.verify_click_mode === 2)
                    cid_success = await that.check_cid_if_successful();

                //debug-verify cid_success = await that.check_cid_if_successful();
                /** if already click - success */
                if (cid_success) {
                    if (that.verify_click_mode === 2) {
                        click_success();
                        /** event */ ga('send', 'event', 'Page', 'forced_searches', '10_interval_cid_success');
                    }
                    //debug-verify click//click_success();
                    //click_success();
                }
            }

            if (cid_attempt >= (that.maxattempt + 1) && !_last_countdown_at_maxatt && !that.finalattempt) // (n:start:1) n+ >= 2
            {
                that.finalattempt = true;
                /** set final 30 seconds for who doesnt click */
                console.info('cid_attempt final countdown', cid_attempt, that.maxattempt, _last_countdown_at_maxatt, that.finalattempt);

                var _last_countdown_at_maxatt = setInterval(async function () {

                    that.finaltimeout = that.finaltimeout - 1;
                    if (that.state.setting_adstype == 1) {
                        close.style.fontSize = "27px";
                        close.innerHTML = ".." + that.finaltimeout;
                    } else if (that.state.setting_adstype == 2) {
                        close.style.display = 'none';
                    }

                    if (that.finaltimeout <= 0) {
                        close.innerHTML = "×";
                        close.style.display = 'none';
                        close.style.fontSize = "50px";
                        try { clearInterval(_last_countdown_at_maxatt) } catch (e) { /** event */ ga('send', 'event', 'Page', 'forced_searches', 'last_30_sec_at_maxattempt_limit'); }
                        click_success(); return;
                    }

                }, 1000); return;
            }

        }, 1000);

        /** get the focus and load the page */ tab.focus();

        console.warn('3009');
        this.setState({ topic: cat, tab: tab });
    }

    on_print_verify_button = (type = 'no') => {

        let { topic, tab, cid, cid_check, cid_attempt, cid_required, timer, verify_button_fetch } = getNestedObj(() => this.state, {});

        let { name_short } = getNestedObj(() => this.props.offer, "");

        let transaltions = this.translations?.[detectLangStorage] ?? this.translations['en'];

        var mode = this.verify_click_mode;

        if (type == 'first') { mode = 1; }

        if (mode === 1) {
            return (
                <React.Fragment>
                    <div className="ui icon message">
                        {cid_check ?
                            <i className="check icon green"></i>
                            :
                            <i className="notched circle loading icon"></i>
                        }
                        <div className="content">
                            <div className="header">
                                {cid_check ? transaltions.messages.verifiy_click_title.ok : transaltions.messages.verifiy_click_title.not}
                            </div>
                            <p>{verify_button_fetch ? transaltions.messages.verify_click_fetch : cid_check ? transaltions.messages.verify_click_success : transaltions.messages.tab_open.sub}</p>
                        </div>
                    </div>
                    {this.state.setting_adstype == 1 &&
                        <React.Fragment>
                            {!cid_check && <button class={"ui primary fluid button " + (verify_button_fetch ? 'loading' : '')} onClick={this.check_cid_if_successful_by_button}>{transaltions.messages.verifiy_click_title.btn}</button>}
                        </React.Fragment>
                    }
                    {this.state.setting_adstype == 2 &&
                        <React.Fragment>
                            {!cid_check && <button class={"ui primary fluid button " + (verify_button_fetch ? 'loading' : '')} onClick={this.check_cid_if_successful_by_button}>{"Download " + name_short}</button>}
                        </React.Fragment>
                    }
                </React.Fragment>
            );
        } else if (mode === 2) {
            /** modal type 2 */
            return (
                <React.Fragment>
                    <br />
                    {this.state.setting_adstype == 1 &&
                        <button class={"ui primary fluid big button loading"} onClick={this.check_cid_if_successful_by_button}>{transaltions.modal_2[5]}</button>
                    }
                    {this.state.setting_adstype == 2 &&
                        <button class={"ui primary fluid big button loading"} onClick={this.check_cid_if_successful_by_button}>{"Download " + name_short}</button>
                    }
                </React.Fragment>
            );
        }
    }

    on_tab_status = (type = "step status") => {
        const { topic, tab, timer, tab_load, cid_check } = getNestedObj(() => this.state, {});

        var tab_closed = true;

        if (tab)
            tab_closed = (getNestedObj(() => tab.closed, true) ? true : false);

        console.warn('tab_status', topic, tab, tab_closed, cid_check);

        if (type === "icon status") {
            if (tab) {
                if (tab_closed && !cid_check)
                    return false;
            }
        }

        if (type === "step status") {
            if (!topic) {
                return "disabled";
            } else if (!timer && cid_check) { /** timer not active and click detected */
                return "completed";
            } else if (topic && tab) { /** in the while - when tab is open e user not clicked yet */
                /** check for tab status */

                /** check also for the click */
                if (tab_closed && !cid_check || !timer && !cid_check)
                    return "disabled";
                if (!tab_closed || timer)
                    return "active";
                else
                    return "disabled";
            } else if (topic && !tab) { /** topic clicked */
                return "disabled";
            } else {
                return "disabled";
            }
        }
    }

    on_step_status = (type = "step status") => {
        const { topic, tab, timer, tab_load, cid_check } = getNestedObj(() => this.state, {});

        //const styleParent = {verticalAlign: "center",fontSize: "37px"};
        //const styleDiv = {borderRadius: "50%",backgroundImage: "url(" + getNestedObj(() => this.props.offer.picture, "") + ")",backgroundSize: "cover", width: "64px",height: "64px",position: "relative",margin: "0 auto",top: "5px"}

        var options = {
            0: <React.Fragment>
                <div>
                    <span className="fa-stack" style={{ verticalAlign: "center", fontSize: "23px" }}>
                        {/**<!-- 1 -->*/}
                        <i className="fal fa-circle-notch fa-spin fa-stack-2x"></i>
                        <i className="fal fa-mouse-pointer fa-stack-1x fa-sm"></i>
                    </span>
                </div>
                <div _adsh_skip_3_1_m="" className="line line-inactive"></div>
                <div>
                    <span className="fa-stack" style={{ verticalAlign: "center", fontSize: "23px" }}>
                        {/**<!-- 2 -->*/}
                        <i className="fal fa-circle fa-stack-2x"></i>
                        <i className="fal fa-puzzle-piece fa-stack-1x fa-sm"></i>
                    </span>
                </div>
                <div _adsh_skip_3_1_m="" className="line line-inactive"></div>
                <div>
                    <span className="fa-stack" style={{ verticalAlign: "center", fontSize: "23px" }}>
                        {/**<!-- 2 -->*/}
                        <i className="fal fa-circle fa-stack-2x"></i>
                        <i className="fal fa-check fa-stack-1x fa-sm"></i>
                    </span>
                </div>
            </React.Fragment>,
            1: <React.Fragment>
                <div>
                    <span className="fa-stack" style={{ verticalAlign: "center", fontSize: "23px", color: "#13dc74" }}>
                        {/**<!-- 1 -->*/}
                        <i className="fal fa-circle fa-stack-2x"></i>
                        <i className="fal fa-mouse-pointer fa-stack-1x fa-sm"></i>
                    </span>
                </div>
                <div _adsh_skip_3_1_m="" className="line line-inactive"></div>
                <div>
                    <span className="fa-stack" style={{ verticalAlign: "center", fontSize: "23px" }}>
                        {/**<!-- 2 -->*/}
                        <i className="fal fa-circle-notch fa-spin fa-stack-2x"></i>
                        <i className="fal fa-puzzle-piece fa-stack-1x fa-sm"></i>
                    </span>
                </div>
                <div _adsh_skip_3_1_m="" className="line line-inactive"></div>
                <div>
                    <span className="fa-stack" style={{ verticalAlign: "center", fontSize: "23px" }}>
                        {/**<!-- 2 -->*/}
                        <i className="fal fa-circle fa-stack-2x"></i>
                        <i className="fal fa-check fa-stack-1x fa-sm"></i>
                    </span>
                </div>
            </React.Fragment>,
            2: <React.Fragment>
                <div>
                    <span className="fa-stack" style={{ verticalAlign: "center", fontSize: "23px", color: "#13dc74" }}>
                        {/**<!-- 1 -->*/}
                        <i className="fal fa-circle fa-stack-2x"></i>
                        <i className="fal fa-mouse-pointer fa-stack-1x fa-sm"></i>
                    </span>
                </div>
                <div _adsh_skip_3_1_m="" className="line line-inactive"></div>
                <div>
                    <span className="fa-stack" style={{ verticalAlign: "center", fontSize: "23px", color: "#13dc74" }}>
                        {/**<!-- 2 -->*/}
                        <i className="fal fa-circle fa-stack-2x"></i>
                        <i className="fal fa-puzzle-piece fa-stack-1x fa-sm"></i>
                    </span>
                </div>
                <div _adsh_skip_3_1_m="" className="line line-inactive"></div>
                <div>
                    <span className="fa-stack" style={{ verticalAlign: "center", fontSize: "23px", color: "#13dc74" }}>
                        {/**<!-- 2 -->*/}
                        <i className="fal fa-circle fa-stack-2x"></i>
                        <i className="fal fa-check fa-stack-1x fa-sm"></i>
                    </span>
                </div>
            </React.Fragment>
        }

        var tab_closed = true;

        if (tab)
            tab_closed = (getNestedObj(() => tab.closed, true) ? true : false);

        console.warn('tab_status', topic, tab, tab_closed, cid_check);

        var _STATUS = 0;
        if (type === "step status") {
            if (!topic) {
                _STATUS = 0;
            } else if (!timer && cid_check) {
                _STATUS = 2;
            } else if (topic && tab) {

                if (tab_closed && !cid_check || !timer && !cid_check)
                    _STATUS = 0;
                if (!tab_closed || timer)
                    _STATUS = 1;
                else
                    _STATUS = 0;
            } else if (topic && !tab) {
                _STATUS = 0;
            } else {
                _STATUS = 0;
            }
        }

        return (options[_STATUS]);


        /*
        return (
            <React.Fragment>
            {!cid_check && !topic && options.pending}
            {!cid_check && topic && !tab_closed && options.completed}
            <div _adsh_skip_3_1_m="" className="line line-inactive"></div>
            {!cid_check && topic && !tab_closed && timer && options.pending}
            {cid_check && !timer && options.completed}
            <div _adsh_skip_3_1_m="" className="line line-inactive"></div>
            {cid_check && !timer && options.completed}
            </React.Fragment>
        );
        */
    }

    example_search_ad = () => {
        return (
            <React.Fragment>
                <div>
                    <img style={{ width: "100%" }} src="https://adshnk.com/src/img/search-adblock.gif" alt="disable-click-check"></img>
                </div>
            </React.Fragment>
        );

        return (
            <React.Fragment>
                { /** SEARCH AD EXAMPLE */}
                <p>Search Ad Example • Disable your AdBlocker to prevent issues</p>
                <div className="ui segment" style={{ marginTop: "10px" }}>
                    <span style={{ fontWeight: "300" }}><custom style={{ fontWeight: "600", border: "1.5px solid #2f932f", padding: "0px 4px", borderRadius: "5px", color: "#2f932f" }}>Ad</custom> ・ </span><span style={{ fontWeight: "600" }}>www.example.domain.com/advertsing/Landing-Page</span>
                    <h2 className="ui header" style={{ fontWeight: "700", marginTop: "0px" }}>
                        <blue style={{ color: "rgb(26, 13, 171)" }}>Example Advertising Website Header - Promoted Content <i className="mouse pointer icon"></i></blue>
                        <div className="sub header">
                            <div className="ui placeholder">
                                <div className="paragraph">
                                    <div className="line"></div>
                                    <div className="line"></div>
                                    <div className="line"></div>
                                </div>
                            </div>
                        </div>
                    </h2>
                </div>
            </React.Fragment>
        )
    }

    render_type_one_modal = (type = 1) => {
        let dev = getNestedObj(() => this.props.dev, false);

        let device_format_tablet_computer = (dev === 'Desktop' || dev === 'Tablet' ? true : false);

        let { topic, tab, cid, cid_check, cid_attempt, cid_required, timer, verify_button_fetch } = getNestedObj(() => this.state, {});

        let { name_short, picture } = getNestedObj(() => this.props.offer, "");

        let transaltions = this.translations?.[detectLangStorage] ?? this.translations['en'];
        let html = null;

        if (type === 1) {
            html = (
                <React.Fragment>
                    <style>{"\
                    @media (min-width:1200px){.custom-modal{max-width:100%}}\
                    @media (min-width:992px){.custom-modal{max-width:100%}}\
                    @media only screen and (max-width:768px){.custom-modal{margin-left:0}}\
                    @media only screen and (max-width: 990px)  { .modal-content { width: 100% !important; } .custom-modal { margin-left: 0px !important;padding-top: 0px !important;} .taboola-header-discover {font-size:16px !important;margin-left: 0px !important;} .close {margin-top: 12px !important} .header-modal {padding: 6px 16px 6px 16px !important;} }\
                    @media (min-width: 992px) {.modal {max-width: 800px;}}\
                    .full-modal{max-width:100%!important}\
                    .modal-body[adshnk_modal_1]{position:relative;flex:1 1 auto;padding:1rem;background-color:#f5f5f5;box-shadow:0 3px 8px rgba(50,50,50,.1607843137254902)}\
                    .thumbnails-s .videoCube.syndicatedItem{box-shadow:0 3px 8px #32323229!important}\
                    .thumbnails-s .syndicatedItem .video-label-box{background-color:#fff}\
                    .modal-header{rgb(43,106,255);background:linear-gradient(270deg, rgba(43,106,255,1) 0%, rgba(15,90,218,1) 26%, rgba(9,9,121,1) 100%);padding:0 30px;border-radius:0!important;min-height:70px!important;display:flex;justify-content:flex-start;align-items:center;position:relative}\
                    .custom-modal::-webkit-scrollbar {display: none;} \
                    .custom-modal{-ms-overflow-style: none;  /* IE and Edge */ scrollbar-width: none;  /* Firefox */ margin-left:0px;display:none;position:fixed;z-index:1000;padding-top:4%;left:0;top:0;width:100%;height:100%;overflow:auto;background-color:rgb(0,0,0);background-color: rgba(0,0,0,0.4);}\
                    .modal-content{background-color:#fefefe;margin:auto;padding:0;border:none;width:70%}\
                    .header-modal{padding:5px 30px 5px 30px;background-color:#4184f3}\
                    .close{color:#fff;float:right!important;margin-top:18px;display:block;font-size: 27px;font-weight: bold;}\
                    .close:focus,.close:hover{color:#13dc74;text-decoration:none;cursor:pointer}\
                    #si_modal_close_x[adshnk_modal_1] { font-size: 50px;margin-top: 17px; } \
                    #si_modal_close_button {margin:6px;}\
                "}</style>
                    { /** ONE-INSTRUCTIONS | TWO-BUTTONS */}
                    <div className="ui grid stackable">
                        { /** INSTRUCTIONS */}
                        <div className="eight wide column">
                            { /** STEPS  */}
                            {true === false && <p><b>{cid_attempt}</b> {cid}</p>}
                            <div className="ui fluid vertical steps">
                                <div className={(topic ? "completed" : "active") + " step"} style={{ flexWrap: "nowrap" }}>
                                    <i className="podcast icon"></i>
                                    <div className="content">
                                        <div className="title">{/** lang */}{transaltions.step_one.title}</div>
                                        <div className="description">{/** lang */}{transaltions.step_one.sub}</div>
                                    </div>
                                </div>

                                {/** first state <i class="mouse pointer icon"></i> */}
                                {/** post-click-on-topic state <i className="notched circle loading icon"></i> */}
                                {/** click-on-ad-not-detected state <i className="close icon"></i> */}
                                {/** click-on-ad-successful-detected state <i className="check icon"></i> */} { /** CLICK DETECTOR RENDER - show only after the topic click */}
                                <div className={this.on_tab_status("step status") + " step"} style={{ flexWrap: "nowrap" }}>
                                    {this.on_tab_status("step status") === "completed" && <i className="mouse pointer icon"></i>}
                                    {this.on_tab_status("step status") === "disabled" && cid_attempt <= 1 && <i className="mouse pointer icon"></i>}
                                    {this.on_tab_status("step status") === "disabled" && cid_attempt > 1 && <i className="close icon"></i>}
                                    {this.on_tab_status("step status") === "active" && <i className="notched circle loading icon"></i>}
                                    <div className="content">
                                        <div className="title">{/** lang */}{transaltions.step_two.title} {true === false && cid_required && !cid_check && <React.Fragment><div style={{ marginLeft: "3px" }} class="ui red basic label tiny">Required</div><div id="_click_check_label_" class="ui blue basic label tiny">00:10</div></React.Fragment>}</div>
                                        <div className="description">{/** lang */}{transaltions.step_two.sub}</div>
                                        { /** messaggio di errore */}
                                    </div>
                                </div>
                            </div>

                            {/** only desktop e tablet */}
                            {device_format_tablet_computer && this.example_search_ad()}

                        </div>

                        { /** BUTTONS */}
                        <div className="eight wide column" style={(!device_format_tablet_computer === 'Desktop' ? { columns: "2 auto" } : {})}>
                            {!device_format_tablet_computer && <p>Topics</p>}

                            {/** topic missing */}
                            {this.on_tab_status("step status") !== "active" ? //!cid_check || (!timer && tab !== false) ?
                                <React.Fragment>
                                    { /** {cid_attempt < 3 && !cid_check ? */}
                                    {cid_attempt < 3 ?
                                        <React.Fragment>
                                            {!cid_check ?
                                                shuffle(this.categories).slice(0, 4).map((cat, index) =>
                                                    <div><a onClick={(e) => { this.onclick_topic(e, cat) }} data-cat={cat} style={{ marginBottom: "5px", textAlign: "left" }} className="ui right labeled icon button primary fluid"><b>{parseInt(index) + 1}</b> {capitalizeFirstLetter(cat)} <i className="right chevron icon"></i></a></div>)
                                                :
                                                this.on_print_verify_button('first')
                                            }
                                        </React.Fragment>
                                        :
                                        <div className="ui message">
                                            <div className="header">
                                                {/** lang */}{transaltions.messages.max_attempt.title}
                                            </div>
                                            <p>{/** lang */}{transaltions.messages.max_attempt.sub}</p>
                                        </div>
                                    }
                                </React.Fragment>
                                :
                                <React.Fragment>
                                    {true === false &&
                                        <div className="ui message">
                                            <div className="header">
                                                {/** lang */}{transaltions.messages.tab_open.title}
                                            </div>
                                            <p>{/** lang */}{transaltions.messages.tab_open.sub}</p>
                                        </div>
                                    }
                                    {/**SYSTEM- VERIFY CLICK BUTTON */}
                                    {this.on_print_verify_button('first')}
                                </React.Fragment>
                            }

                            {/** only mobile */}
                            {!device_format_tablet_computer && this.example_search_ad()}

                        </div>
                    </div>

                    {/*<div className="ui two column centered grid"></div> */}
                </React.Fragment>
            );
        } else if (type === 2) {
            html = (
                <React.Fragment>

                    <style>{"\
                    #si_modal_close_x[adshnk_modal_2] { position: relative;font-size: 50px;margin-top: 17px; } \
                    #si_modal_close_button {margin:6px;}\
                    \
                    @media only screen and (max-width:1200px){.triangle-result[_adsh_skip_3]{display:none!important}}\
                    @media only screen and (max-width:1024px){.custom-modal{width:100%;margin-left:0;padding-top:0!important}.custom-ad-content-wrapper{padding:65px 10px}.modal-content,.result-triangle-wrapper{width:100%!important}.taboola-header-discover{font-size:16px}.close{margin-top:-6px!important}.header-modal{padding:6px 16px!important}.result-triangle-wrapper[_adsh_skip_3_1]{box-shadow:none!important}.animation-steps{padding:40px 25px}}\
                    @media only screen and (max-width:480px){.custom-ad-content-wrapper{padding:25px 10px!important}.animation-steps{padding:0 10px !important; text-align: center;}.custom-ad-title h1{font-size:1.5em}.app-icon-wrapper[adshnk_modal_2_adt2] {background-color: transparent;margin-top:10%;margin-bottom: 10%;}.app-icon-wrapper[adshnk_modal_2_adt2] .img-responsive {width: 40%;}.custom-ad-title[adshnk_modal_2_adt2] {margin: 16px 30px;}.custom-ad-title[adshnk_modal_2_adt2] h1 {font-size: 2.5em;}.custom-ad-description[adshnk_modal_2_adt2] p {font-size: 1.2em;margin: 0px 30px 10px 30px;} #si_modal_close_x[adshnk_modal_2] { position: relative;font-size: 50px;margin-top: 13px !important; }}\
                    @media (min-width:1025px){.modal-body[adshnk_modal_2]{display:flex;flex-direction:column!important;align-items:center!important}.triangle-result{display:block!important}}\
                    @media (min-width: 1920px) {.modal-body[adshnk_modal_2]{zoom: 150%;}.result-triangle-wrapper[_adsh_skip_3_1] {width: 650px;}.custom-ad-content-wrapper {padding: 35px 50px !important;}.custom-ad-content-wrapper .custom-ad-title {margin:36px 0px 25px 0px !important}.custom-ad-content-wrapper .custom-ad-description {margin-bottom: 15px;}.animation-steps {padding: 0px 25px !important;}}\
                    @media (min-width:3000px){.modal-body[adshnk_modal_2]{zoom: 180%;}.custom-ad-content-wrapper .animation-text {line-height:1.2}}\
                    .full-modal{max-width:100%!important}\
                    .modal-body[adshnk_modal_2]{position:relative!important;flex:1 1 auto;padding:1rem;background-color:#f5f5f5;box-shadow:0 3px 8px rgba(50,50,50,.1607843137254902)}\
                    .modal-header{background:#2b6aff;background:linear-gradient(270deg,#2b6aff 0,#0f5ada 26%,#090979 100%);padding:0 30px;border-radius:0!important;min-height:70px!important;display:flex;justify-content:flex-start;align-items:center;position:relative}\
                    .custom-modal{display:none;position:fixed;z-index:1000;padding-top:2%;left:0;top:0;width:100%;height:100%;overflow:auto;background-color:rgba(0,0,0,.4);-ms-overflow-style:none;scrollbar-width:none}\
                    .modal::-webkit-scrollbar{display:none}\
                    .modal-content{background-color:#fefefe;margin:auto;padding:0;border:none;width:70%}\
                    .header-modal{padding:5px 30px;background-color:#4184f3}.close{color:#fff;float:right!important;font-size:50px;font-weight:700;margin-top:6px}\
                    .close:focus,.close:hover{color:#13dc74;text-decoration:none;cursor:pointer}\
                    .suggestion-result-wrapper{margin-top:15px}\
                    .triangle-left-wrapper[_adsh_skip_3]{position:absolute;left:0;height:100%}\
                    .triangle-right-wrapper[_adsh_skip_3]{position:absolute;right:0;height:100%}\
                    .triangle-result[_adsh_skip_3]{display:none;height:100%;max-height:703px;width:100%;max-width:230px}\
                    .modal-body[adshnk_modal_1] #related-articles-body[_adsh_skip_3]{width:100%;padding-left:30px;padding-right:30px;padding-top:55px;overflow:hidden}\
                    .result-triangle-wrapper[_adsh_skip_3_1]{justify-content:center;text-align:center;justify-content:center;width:494px;height:auto;margin-top:20px!important;padding:0!important;box-shadow:0 2px 1px -1px #0003,0 1px 1px #00000024,0 1px 3px #0000001f}\
                    .app-icon-wrapper{display:flex;background-color:#fff;justify-content:center}\
                    .app-icon-wrapper .img-responsive{width:100%}\
                    .app-icon-wrapper[adshnk_modal_2_adt2] {background-color: transparent;  margin-top:10%;margin-bottom: 10%;}\
                    .app-icon-wrapper[adshnk_modal_2_adt2] .img-responsive { width: 40%; }\
                    .custom-ad-content-wrapper{display:flex;flex-direction:column;padding:25px 60px}\
                    .download-animation{display:flex;justify-content:center;align-items:center;padding:0 22px}\
                    .download-animation .line-inactive{border-top:2px solid grey}\
                    .custom-ad-content-wrapper .animation-text{display:flex;justify-content:center;align-items:center;padding:10px 0px;text-align:center;font-size:14px;margin 0 auto;}\
                    .line.line-inactive[_adsh_skip_3_1_m] {display: inline-block;width: 10em;margin: 0 10px}\
                    .custom-ad-title {margin: 16px 0px;}\
                "}</style>

                    <div _adsh_skip_3="" className="triangle-left-wrapper">
                        <img _adsh_skip_3="" src="https://adshnk.com/src/img/right-row.svg" alt="" className="triangle-result" />
                    </div>
                    <div _adsh_skip_3="" className="triangle-right-wrapper">
                        <img _adsh_skip_3="" src="https://adshnk.com/src/img/left-row.svg" alt="" className="triangle-result" />
                    </div>
                    <div _adsh_skip_3="" className="kw-heading-wrapper">
                        <div _adsh_skip_3="" className="kw-header">

                        </div>
                    </div>
                    <div _adsh_skip_3="" id="related-articles-body">
                        <div _adsh_skip_3="" className="suggestion-result-wrapper">
                            <div _adsh_skip_3_1="" className="result-triangle-wrapper">
                                {this.state.setting_adstype == 1 &&
                                    <div className="app-icon-wrapper">
                                        <img className="img-responsive" src="https://adshnk.com/src/img/search-adblock.gif" alt="Avast Browser (Region B)" />
                                    </div>
                                }
                                {this.state.setting_adstype == 2 &&
                                    <div className="app-icon-wrapper" adshnk_modal_2_adt2="">
                                        <img className="img-responsive" src={picture} alt={name_short} />
                                    </div>
                                }
                                <div className="custom-ad-content-wrapper">
                                    <div className="download-animation">
                                        {this.on_step_status()}
                                    </div>
                                    <div className="animation-text">
                                        <div className="animation-steps">
                                            <span>{transaltions.modal_2[0]}</span>
                                        </div>
                                        <div className="animation-steps" style={{ padding: "0px 10px 0px 10px" }}>
                                            {this.state.setting_adstype == 1 &&
                                                <span className="inner-text" >{transaltions.modal_2[1]}</span>
                                            }
                                            {/** CPI */}
                                            {this.state.setting_adstype == 2 &&
                                                <span className="inner-text">{transaltions.modal_2[6] + getNestedObj(() => this.props.offer.name_short, "") + transaltions.modal_2[9]}</span>
                                            }
                                        </div>
                                        <div className="animation-steps">
                                            <span>{transaltions.modal_2[2]}</span>
                                        </div>
                                    </div>
                                    <div className="custom-ad-title" {...(this.state.setting_adstype == 2 ? { adshnk_modal_2_adt2: "" } : {})}>
                                        {this.state.setting_adstype == 1 &&
                                            <h1>{transaltions.modal_2[3]}</h1>
                                        }
                                        {/** CPI */}
                                        {this.state.setting_adstype == 2 &&
                                            <h1>{transaltions.modal_2[7]}<br />{getNestedObj(() => this.props.offer.name_short, "")}<br />{transaltions.modal_2[8]}</h1>
                                        }
                                    </div>
                                    <div className="custom-ad-description" {...(this.state.setting_adstype == 2 ? { adshnk_modal_2_adt2: "" } : {})}>
                                        {this.state.setting_adstype == 1 &&
                                            <p>{(tab && timer ? transaltions.messages.verify_click_fetch : transaltions.modal_2[4])}</p>
                                        }
                                        {/** CPI */}
                                        {this.state.setting_adstype == 2 &&
                                            <p>{getNestedObj(() => this.props.offer.adcopy, "")}</p>
                                        }
                                    </div>

                                    {/**<!-- Aggiungere Pulsante -->*/}
                                    {this.on_tab_status("step status") !== "active" ? //!cid_check || (!timer && tab !== false) ?
                                        <React.Fragment>
                                            { /** {cid_attempt < 3 && !cid_check ? */}
                                            {cid_attempt < 11 ?
                                                <React.Fragment>
                                                    {!cid_check ?
                                                        <div><br />
                                                            {this.state.setting_adstype == 1 &&
                                                                <div><a onClick={(e) => { this.onclick_topic(e, "software") }} data-cat={"software"} style={{ marginBottom: "5px", textAlign: "left", paddingTop: "1em", textAlign: "center" }} className="ui right labeled icon button primary fluid big">{capitalizeFirstLetter(transaltions.modal_2[5])} <i className="right chevron icon"></i></a></div>
                                                            }
                                                            {this.state.setting_adstype == 2 &&
                                                                <div><a onClick={(e) => { this.onclick_topic(e, "software") }} data-cat={"software"} style={{ marginBottom: "5px", textAlign: "left", paddingTop: "1em", textAlign: "center" }} className="ui right labeled icon button primary fluid big">{"Download " + name_short} <i className="right chevron icon"></i></a></div>
                                                            }
                                                        </div>
                                                        :
                                                        <React.Fragment>
                                                            {this.on_print_verify_button()}
                                                        </React.Fragment>
                                                    }
                                                </React.Fragment>
                                                :
                                                <div className="ui message">
                                                    <div className="header">
                                                        {/** lang */}{transaltions.messages.max_attempt.title}
                                                    </div>
                                                    <p>{/** lang */}{transaltions.messages.max_attempt.sub}</p>
                                                </div>
                                            }
                                        </React.Fragment>
                                        :
                                        <React.Fragment>
                                            {/**SYSTEM- VERIFY CLICK BUTTON */}
                                            {this.on_print_verify_button()}
                                        </React.Fragment>
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
                </React.Fragment>
            );
        }

        return html;
    }

    //<button className="ui secondary button" id="t_modal_close_button" ></button>

    render() {

        let dev = getNestedObj(() => this.props.dev, false);
        let device_format_tablet_computer = (dev === 'Desktop' || dev === 'Tablet' ? true : false);

        let { topic, tab, cid, cid_check, cid_attempt, cid_required, timer, verify_button_fetch } = getNestedObj(() => this.state, {});

        let transaltions = this.translations?.[detectLangStorage] ?? this.translations['en'];

        return (
            <React.Fragment>

                <div id="si_modal" className="custom-modal">
                    <div className="modal-content">
                        <div className="header-modal">
                            <span onClick={() => { this.on_close_modal() }} className="close" id="si_modal_close_x" {...(this.state.setting_modal === 1 ? { adshnk_modal_1: "" } : { adshnk_modal_2: "" })} style={{ display: 'none' }} >×</span>
                            <h2 style={{ color: "white", margin: "15px" }} className="taboola-header-discover">{(this.state.setting_adstype == 1 ? 'Discover relating topics' : 'Sponsorized Apps (Required)')}</h2>
                        </div>
                        <div className="modal-body" {...(this.state.setting_modal === 1 ? { adshnk_modal_1: "" } : { adshnk_modal_2: "" })}>
                            {/*<ErrorBoundary><TaboolaBanner size={"Mid_Article_3X1_2"}/></ErrorBoundary> */}
                            {/*<ErrorBoundary><TaboolaBanner size={'Mid_Article_Reco_Reel'} /></ErrorBoundary>*/}
                            {/** iframe referrerpolicy="no-referrer" */}
                            {/*<iframe  style={{overflow: "auto", border: "none",width: "100%",height: "60vh"}} scrolling="yes" id="si_related"></iframe>*/}

                            {this.state.banner && this.render_type_one_modal(this.state.setting_modal)}

                            {!this.state.banner &&
                                <div className="ui active inverted dimmer" style={{ padding: "50px" }}>
                                    <div className="ui medium text loader">Loading</div>
                                </div>
                            }
                        </div>

                    </div>
                </div>
            </React.Fragment>
        )

    }

}

class TaboolaBannerModal extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            banner: false
        }

        this.timeout = 7;

        this.on_close_modal = this.on_close_modal.bind(this);

    }

    componentDidMount() {
        var that = this;

        var modal = document.getElementById("t_modal");
        var close = document.getElementById("t_modal_close_x");
        // When the user clicks anywhere outside of the modal, close it
        window.onclick = function (event) {
            if (event.target == modal) {
                modal.style.display = "none";
            }
        }

        var previousdisplayvalue = modal.style.display;

        var observer = new MutationObserver((mutations) => {
            mutations.forEach(function (mutation) {
                if (mutation.attributeName !== 'style') return;
                var currentValue = mutation.target.style.display;
                if (currentValue === 'block') {
                    console.warn('t-modal');
                    const INTERVAL = that.timeout;
                    const SETINTERVAL = setInterval(() => {
                        that.timeout = that.timeout - 1;
                        close.innerHTML = ".." + that.timeout;
                        if (that.timeout === 6)
                            that.setState({ banner: true });
                        if (that.timeout <= 0) {
                            clearInterval(SETINTERVAL)
                            close.innerHTML = "×";
                            close.style.fontSize = "50px";
                            //close.style.display = "block";
                        }
                    }, 1000);
                }
            });
        });
        observer.observe(modal, {
            attributes: true,
            attributeFilter: ["style"]
        });


        if (_adshrink.enabled.taboola && getNestedObj(() => _adshrink.enabled.taboolaModal, false)) {
            //window._taboola = window._taboola || []; _taboola.push({ mode: 'thumbnails-s', container: 'taboola-below-article-thumbnails_3x2d_1x6m', placement: 'Below Article Thumbnails_3x2D_1x6M', target_type: 'mix' });
            //window._taboola = window._taboola || []; _taboola.push({ mode: 'thumbnails-m-3X1', container: 'taboola-mid_article_3x1_2', placement: 'Mid_Article_3X1', target_type: 'mix' });
            //window._taboola = window._taboola || []; _taboola.push({ mode: 'Reco_Reel_1x5', container: 'taboola-mid-article-reco-reel', placement: 'Mid Article Reco Reel', target_type: 'mix' });
        }


    }

    shouldComponentUpdate(nextProps, nextState) {

        if (nextProps !== this.props) {
            return true;
        } if (nextState !== this.state) {
            return true;
        } return false;

    }

    componentDidUpdate(nextProps, nextState) {
        if (nextState.banner !== this.state.banner) {
            window._taboola = window._taboola || []; _taboola.push({ mode: 'thumbnails-s', container: 'taboola-below-article-thumbnails_3x2d_1x6m', placement: 'Below Article Thumbnails_3x2D_1x6M', target_type: 'mix' });
        }
    }

    on_close_modal() {
        if (this.timeout <= 0) {
            try {
                // Get the modal
                var modal = document.getElementById("t_modal");
                //close
                modal.style.display = "none";
            } catch (e) {
                alert(e);
            }
        }
    }

    //<button className="ui secondary button" id="t_modal_close_button" ></button>

    render() {

        return (
            <React.Fragment>
                <style>{"\
                    @media (min-width:1200px){.custom-modal{max-width:100%}}\
                    @media (min-width:992px){.custom-modal{max-width:100%}}\
                    @media only screen and (max-width:768px){.custom-modal{margin-left:0}}\
                    @media only screen and (max-width: 990px)  { .modal-content { width: 100% !important; } .custom-modal { margin-left: 0px !important;padding-top: 0px !important;} .taboola-header-discover {font-size:16px !important;margin-left: 0px !important;} .close {margin-top: 12px !important} .header-modal {padding: 6px 16px 6px 16px !important;} }\
                    @media (min-width: 992px) {.modal {max-width: 800px;}}\
                    .full-modal{max-width:100%!important}\
                    .modal-body{position:relative;flex:1 1 auto;padding:1rem;background-color:#f5f5f5;box-shadow:0 3px 8px rgba(50,50,50,.1607843137254902)}\
                    .thumbnails-s .videoCube.syndicatedItem{box-shadow:0 3px 8px #32323229!important}\
                    .thumbnails-s .syndicatedItem .video-label-box{background-color:#fff}\
                    .modal-header{rgb(43,106,255);background:linear-gradient(270deg, rgba(43,106,255,1) 0%, rgba(15,90,218,1) 26%, rgba(9,9,121,1) 100%);padding:0 30px;border-radius:0!important;min-height:70px!important;display:flex;justify-content:flex-start;align-items:center;position:relative}\
                    .custom-modal::-webkit-scrollbar {display: none;} \
                    .custom-modal{-ms-overflow-style: none;  /* IE and Edge */ scrollbar-width: none;  /* Firefox */ margin-left:0px;display:none;position:fixed;z-index:1000;padding-top:4%;left:0;top:0;width:100%;height:100%;overflow:auto;background-color:rgb(0,0,0);background-color: rgba(0,0,0,0.4);}\
                    .modal-content{background-color:#fefefe;margin:auto;padding:0;border:none;width:70%}\
                    .header-modal{padding:5px 30px 5px 30px;background-color:#4184f3}\
                    .close{color:#fff;float:right!important;margin-top:18px;display:block;font-size: 27px;font-weight: bold;}\
                    .close:focus,.close:hover{color:#13dc74;text-decoration:none;cursor:pointer}\
                    #t_modal_close_button {margin:6px;}\
                "}</style>

                <div id="t_modal" className="custom-modal">
                    <div className="modal-content">
                        <div className="header-modal">
                            <span onClick={() => { this.on_close_modal() }} className="close" id="t_modal_close_x">..7</span>
                            <h2 style={{ color: "white", margin: "15px" }} className="taboola-header-discover">Discover interesting articles</h2>
                        </div>
                        <div className="modal-body">
                            {/*<ErrorBoundary><TaboolaBanner size={"Mid_Article_3X1_2"}/></ErrorBoundary> */}
                            {/*<ErrorBoundary><TaboolaBanner size={'Mid_Article_Reco_Reel'} /></ErrorBoundary>*/}
                            {this.state.banner && <ErrorBoundary><div id="taboola-below-article-thumbnails_3x2d_1x6m"></div></ErrorBoundary>}
                            {!this.state.banner &&
                                <div className="ui active inverted dimmer" style={{ padding: "50px" }}>
                                    <div className="ui medium text loader">Loading</div>
                                </div>
                            }
                        </div>

                    </div>
                </div>
            </React.Fragment>
        )

    }

}

class TaboolaBanner extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            div: '',
            display: 'to_check',
            script: {
                adsense: false
            }
        }

        this.onScriptLoad = this.onScriptLoad.bind(this);

        this.onCheckParentDiv = this.onCheckParentDiv.bind(this);


    }

    componentDidMount() {

        if (_adshrink.enabled.taboola) {

            const { size } = this.props || [];

            if (window.hasOwnProperty('_taboola')) {
                console.log('Taboola-' + size);

                if (size === 'Mid_Article_5X1') {
                    window._taboola = window._taboola || []; _taboola.push({ mode: 'thumbnails-m-5X1', container: 'taboola-mid_article_5x1', placement: 'Mid_Article_5X1', target_type: 'mix' });
                } else if (size === 'Mid_Article_Reco_Reel') {
                    window._taboola = window._taboola || []; _taboola.push({ mode: 'Reco_Reel_1x5', container: 'taboola-mid-article-reco-reel', placement: 'Mid Article Reco Reel', target_type: 'mix' });
                } else if (size === 'Mid_Article_3X1') {
                    window._taboola = window._taboola || []; _taboola.push({ mode: 'thumbnails-m-3X1', container: 'taboola-mid_article_3x1', placement: 'Mid_Article_3X1', target_type: 'mix' });
                } else if (size === 'Mid_Article_3X1_2') {
                    window._taboola = window._taboola || []; _taboola.push({ mode: 'thumbnails-m-3X1', container: 'taboola-mid_article_3x1_2', placement: 'Mid_Article_3X1', target_type: 'mix' });
                } else if (size === 'Mid_Article_Reco_Reel_2') {
                    window._taboola = window._taboola || []; _taboola.push({ mode: 'Reco_Reel_1x5', container: 'taboola-mid-article-reco-reel-2', placement: 'Mid Article Reco Reel', target_type: 'mix' });
                } else if (size === 'Mid_Article_3X2') {
                    window._taboola = window._taboola || []; _taboola.push({ mode: 'thumbnails-s', container: 'taboola-below-article-thumbnails_3x2d_1x6m', placement: 'Below Article Thumbnails_3x2D_1x6M', target_type: 'mix' });
                }

                (window._taboola = window._taboola || []).push({ flush: true });
            } else {
                /**
                 * dont
                 */
            }

        }

    }

    shouldComponentUpdate(nextProps, nextState) {

        if (nextState.script !== this.state.script) {
            return true;
        } if (nextState.div !== this.state.div) {
            return true;
        } return false;

    }

    componentDidUpdate(nextProps, nextState) {

        const { div, display, script } = this.state || 'none';

        if (nextState.script !== this.state.script) {

            if (_adshrink.enabled.taboola && window.hasOwnProperty('_taboola')) {
                //alert('loADED');
                (window._taboola = window._taboola || []).push({ flush: true });
            }

        }

        if (nextState.div !== div) {

            this.onCheckParentDiv();

        }

    }

    onScriptLoad(scriptname, src, attr) {
        const that = this;

        let script;
        let request_script = new_script(src, attr);

        request_script.then(function (resolve) {
            script = Object.assign({}, that.state.script, { [scriptname]: true }); that.setState({ script });
        }).catch(function (reject) {
            script = Object.assign({}, that.state.script, { [scriptname]: false }); that.setState({ script });
        });
    }

    onCheckParentDiv() {

        const { div } = this.state || 'na';

        if (isEmpty($('#' + div)))
            return false;

        //const parent_dataset = $('#box_adgoog_' + div).parent()[0].dataset;

        const parent_display = $('.box_adtaboo_').parent().css('display');

        //this.state({ display: parent_display });

        if (_adshrink.enabled.taboola && parent_display === 'block') {

            (window._taboola = window._taboola || []).push({ flush: true });

        }

    }

    render() {

        const { size } = this.props || [];

        const { div } = this.state || 'na';

        //data-ad-format="auto"
        //data-full-width-responsive="true"

        return (

            <React.Fragment>

                <div class={"box_adtaboo_"}>

                    <style>{" \
                    .ui[class*='half page'].ad { margin-left: calc(50% - 150px) !important; position: relative !important; } \
                    .ui[class*='medium rectangle'].ad { margin-left: calc(50% - 150px) !important; position: relative !important; } \
                "}</style>

                    {size === 'Mid_Article_5X1' && _adshrink.enabled.taboola &&

                        <div >
                            <div id="taboola-mid_article_5x1"></div>
                        </div>

                    }

                    {size === 'Mid_Article_Reco_Reel_2' && _adshrink.enabled.taboola &&

                        <div >
                            <div id="taboola-mid-article-reco-reel-2"></div>
                        </div>

                    }

                    {size === 'Mid_Article_Reco_Reel' && _adshrink.enabled.taboola &&

                        <div >
                            <div id="taboola-mid-article-reco-reel"></div>
                        </div>

                    }

                    {size === 'Mid_Article_3X1' && _adshrink.enabled.taboola &&

                        <div >
                            <div id="taboola-mid_article_3x1"></div>
                        </div>

                    }

                    {size === 'Mid_Article_3X1_2' && _adshrink.enabled.taboola &&

                        <div >
                            <div id="taboola-mid_article_3x1_2"></div>
                        </div>

                    }

                    {size === 'Mid_Article_3X2' && _adshrink.enabled.taboola &&
                        <div>
                            <div id="taboola-below-article-thumbnails_3x2d_1x6m"></div>
                        </div>
                    }

                </div>
                {_adshrink.enabled.taboola &&
                    <br />
                }

            </React.Fragment>

        )

    }

}

function ComponentFirstInfoSegment(props) {

    return (

        <div className="ui grid middle aligned stackable">

            <style>{" \
                .custom-image-segment-one { width: 80% !important; margin-left: calc(50% - 40%) !important; } \
            "}</style>

            <div className="eight wide computer eight wide tablet sixteen wide mobile column ">

                <h1 className="ui header">
                    <div className="sub header">{language.new.segment[0]}</div>
                    {language.new.segment[1]}
                </h1>

                <p style={{ color: 'rgb(134 134 134)' }}>{language.new.segment[2]}</p>

                <h2 className="ui sub header">
                    <a>{language.new.segment[3]}</a> {language.new.segment[4]}
                </h2>

                <div className="ui list">

                    <a className="item">
                        <i className="check blue icon"></i>
                        <div className="content">
                            <div className="header">{language.new.segment[5]}</div>
                        </div>
                    </a>

                    <a className="item">
                        <i className="check blue icon"></i>
                        <div className="content">
                            <div className="header">Youtube</div>
                        </div>
                    </a>

                    <a className="item">
                        <i className="check blue icon"></i>
                        <div className="content">
                            <div className="header">{language.new.segment[6]}</div>
                        </div>
                    </a>

                    <a className="item">
                        <i className="check blue icon"></i>
                        <div className="content">
                            <div className="header">Email, {language.new.segment[7]}, etc.</div>
                        </div>
                    </a>

                </div>

                <br />

                <a className="ui primary button rounded large" href="https://adshrink.it/about/" target="_blank"> {language.new.segment[8]} <i className="right arrow icon"></i> </a>

            </div>

            <div className="eight wide computer eight wide tablet sixteen wide mobile column">

                <img alt="Unleash the power of the link" data-src="https://adshrink.it/wp-content/uploads/2019/02/ndkejndksjndks.png" className="ui fluid image lazy custom-image-segment-one" />

            </div>

        </div>

    );

}

function ComponentSecondInfoSegment(props) {

    return (

        <div className="ui grid middle aligned stackable">

            <style>{" \
                .custom-image-segment-one { width: 80% !important; margin-left: calc(50% - 40%) !important; } \
            "}</style>

            <div className="eight wide computer eight wide tablet sixteen wide mobile column">

                <div className="ui grid centered">

                    <img alt="Publish anywhere, grow everywhere." className="ui image lazy" data-src="https://i.l.inmobicdn.net/website/website/6.0.1/img/publisher-campaign/eCPM.png" />

                </div>

            </div>

            <div className="eight wide computer eight wide tablet sixteen wide mobile column ">

                <h1 className="ui header">
                    <div className="sub header">{language.new.second_segment[0]}</div>
                    {language.new.second_segment[1]}
                </h1>

                <div className="ui sizer vertical segment">
                    <div className="ui medium header" style={{ fontWeight: "100", color: "rgb(121 122 122)" }}>

                        <h3 className="ui header">
                            <a href={___reactjsD.host + "/about/"}>{language.new.second_segment[2]} {___reactjsD.website}</a>
                            <div className="sub header">{language.new.second_segment[3]}<b>{language.new.second_segment[4]}</b>{language.new.second_segment[5]}<b>{language.new.second_segment[6]}</b>{" !"}</div>
                        </h3>

                        <ol className="ui list">
                            <li value="-">{language.new.second_segment[7]}</li>
                            <li value="-">{language.new.second_segment[8]}</li>
                            <li value="-">{language.new.second_segment[9]}</li>
                            <li value="-">{language.new.second_segment[10]}</li>
                        </ol>
                    </div>

                </div>

            </div>

        </div>

    );

}

function ComponentChangeLanguage(props) {

    $(document).ready(() => {

        $('#system_navbar_dropdown_language').dropdown({
            on: 'hover',
            onChange: function (select_languange, text, $selectedItem) {

                if (select_languange === 'local') {
                    language = ___reactjsD.language[detectLang];

                    //window.localStorage.removeItem('language');
                    //window.localStorage.removeItem('language_text');

                    window.location.reload();

                    return false;
                }

                language = ___reactjsD.language[select_languange];

                //window.localStorage.setItem('language', select_languange);
                //window.localStorage.setItem('language_text', text);

                window.location.reload();

            }
        });

    });

    function return_first_text_placeholder() {

        const lt = { en: 'English', it: 'Italian', ja: '日本の', hi: 'हिन्दी', fr: 'Français (France)', es: 'Español', pt: 'Português (Brasil)', ar: 'العربية', de: 'Deutsch', ko: '한국의', zh: '中国' }

        const language = 'en'; //window.localStorage.getItem('language');
        const language_text = 'English'; //window.localStorage.getItem('language_text');

        var html = null;

        if (isEmpty(language) || language === 'local') {
            html = <div>
                <i className="world icon"></i> Local
            </div>;
        } else {
            html = <div>
                <i className={language + " flag"}></i>{" " + lt[language]}
            </div>;
        }

        return html;

    }

    return (

        <div className="ui floating dropdown labeled item white-text-color" id="system_navbar_dropdown_language">

            <div> {return_first_text_placeholder()} </div>

            <div className="menu">

                <div className="item" data-value="local"><i className="world icon"></i> Local</div>

                <div className="divider"></div>

                <div className="header">
                    <i className="tags icon"></i>
                    Filter by availability
                </div>

                <div className="item" data-value="it"><i className="it flag"></i> Italian</div>
                <div className="item" data-value="en"><i className="uk flag"></i> English</div>
                <div className="item" data-value="ja"><i className="jp flag"></i> 日本の</div>
                <div className="item" data-value="hi"><i className="in flag"></i> हिन्दी</div>
                <div className="item" data-value="ar"><i className="ae flag"></i> العربية</div>
                <div className="item" data-value="fr"><i className="fr flag"></i> Français (France)</div>
                <div className="item" data-value="es"><i className="es flag"></i><i className="mx flag"></i> Español</div>
                <div className="item" data-value="pt"><i className="pt flag"></i><i className="br flag"></i> Português (Brasil)</div>
                <div className="item" data-value="ko"><i className="kr flag"></i> 한국의</div>
                <div className="item" data-value="zh"><i className="cn flag"></i> 中国</div>
                <div className="item" data-value="de"><i className="de flag"></i> Deutsch</div>

            </div>

        </div>

    );

}

class ModalComponentSaved extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            fetching: false,
            page: 1,
            saved: []
        };

    }

    on_open_modal = () => {

        const that = this;

        $('#modal_user_saved_links').modal({
            onShow: () => {
                that.on_fetch_saved();
            }
        }).modal('show');
    }

    on_fetch_saved = (p = 1) => {

        let that = this;

        let { id, userid } = this.props.u || false;
        let basics = this.get_google_user();

        if (!basics || ("signed" in basics && !basics.signed))
            return false;

        this.setState({ fetching: true });

        $.post('https://www.shrink-service.it/v2/public/api/prototype/saved/u/' + userid + '/' + id, { page: p, oauth_user: { id: basics.id, name: basics.name, email: basics.email } }).then((res) => {

            if (res.success)
                that.setState({ saved: res.data, fetching: false, page: p });

        }).catch((err) => {

            that.setState({ fetching: false });
        });

    }

    get_google_user = () => {
        return window.ubasics;
    }

    print_extension_icon = (e) => {

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

    print_list = () => {

        let that = this;
        let { saved } = that.state || [];

        let html = [];

        Object.keys(saved).map((elem) => {

            let { domain, ext, artcode, title, username, likes, saved_at } = saved[elem];

            html.push(
                <div key={elem} className="sixteen wide column item" style={{ overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>
                    <h5 className="ui header">
                        {that.print_extension_icon(ext)}
                        <div className="content">
                            <span><small style={{ fontWeight: "100", color: "#c9c9c9" }}>{domain.toUpperCase()}</small></span> <br />
                            <a href={___reactjsD.host + "/" + artcode} style={{ overflow: "hidden", textOverflow: "ellipsis", color: "rgba(0,0,0,.6)" }}>{title + " "}</a><i className="external square alternate icon"></i>
                            <div className="sub header" style={{ overflow: "hidden", textOverflow: "ellipsis" }}>{username + " "} <a href={___reactjsD.host + "/search?user=" + username}><i className="check circle small icon" style={{ bottom: 5, position: 'relative' }}></i></a></div>
                        </div>
                    </h5>
                </div>
            );

        });

        if (isEmpty(html)) {

            html.push(
                <div key={1} className="sixteen wide column item" style={{ overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>
                    <div className="ui placeholder">
                        <div className="image header">
                            <div className="line"></div>
                            <div className="line"></div>
                        </div>
                    </div>
                </div>
            );
        }

        return html

    }

    change_subscribers_page = (e, direction) => {
        e.preventDefault();

        let P = this.state.page || 1;

        if (direction === 'left')
            P--;
        else if (direction === 'right')
            P++;

        if (parseInt(P) < 1)
            P = 1;

        this.on_fetch_saved(P);

    }


    render() {

        let { fetching } = this.state || false;

        return (
            <React.Fragment>

                <a className="item white-text-color" onClick={(e) => this.on_open_modal()}>
                    <i className="bookmark icon" data-content={"Saved Elements."} data-variation="basic inverted mini" data-position="bottom center" data-inverted="" ></i>{this.props.children}
                </a>

                <div className="ui basic small modal" id="modal_user_saved_links">

                    <div className="ui segments">
                        <div className={"ui segment " + (fetching ? 'loading' : '')}>
                            <h3 className="ui header">
                                <i className="bookmark icon" style={{ color: '#c9c9c9' }}></i>
                                <div className="content">
                                    {language.new.saved_elements[0]}
                                    <div className="sub header">{language.new.saved_elements[1]}</div>
                                </div>
                            </h3>

                            <div className="ui divider"></div>

                            <div className="content">

                                <div className="ui grid stackable">
                                    {this.print_list()}
                                </div>

                            </div>

                            <div className="ui bottom right attached label"><i className="angle left icon" style={{ marginRight: "10px" }} onClick={(e) => this.change_subscribers_page(e, 'left')}></i> <i className="file outline icon" style={{ margin: "0px" }}></i> <i className="angle right icon" style={{ marginLeft: "10px" }} onClick={(e) => this.change_subscribers_page(e, 'right')}></i></div>

                        </div>

                        <div className="ui secondary segment">
                            <p><i className="info circle icon"></i> {language.new.saved_elements[2]}, <a onClick={(e) => { if ("gapi" in window) { gapi.auth2.getAuthInstance().signIn() } }}>here.</a></p>
                        </div>
                    </div>

                </div>

            </React.Fragment>
        );

    }
}

class ComponentReports extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            form_reports: [
                { id: 'prototype_report_1', message: language.report_options.report_1, sub_menu_bool: false },
                { id: 'prototype_report_2', message: language.report_options.report_2, sub_menu_bool: false },
                { id: 'prototype_report_3', message: language.report_options.report_3, sub_menu_bool: false },
                { id: 'prototype_report_4', message: language.report_options.report_4, sub_menu_bool: false },
                { id: 'prototype_report_5', message: language.report_options.report_5, sub_menu_bool: false },
                { id: 'prototype_report_6', message: language.report_options.report_6, sub_menu_bool: false },
                { id: 'prototype_report_7', message: language.report_options.report_7, sub_menu_bool: false },
                {
                    id: 'prototype_report_8', message: language.report_options.report_8[0], 'extra': language.report_options.report_8[1], sub_menu_bool: true, sub_menu_title: language.report_options.report_8[2], sub_menu: [
                        { id: 'prototype_report_8_sub_1', message: language.report_options.report_8[3] },
                        { id: 'prototype_report_8_sub_2', message: language.report_options.report_8[4] },
                        { id: 'prototype_report_8_sub_3', message: language.report_options.report_8[5] }
                    ], dichiarazione_bool: true, dichiarazione: language.report_options.report_9
                },

            ],
            selected_option: null
        }

        this.onScriptLoad = this.onScriptLoad.bind(this);

        this.onOpenModal = this.onOpenModal.bind(this);
        this.renderOptions = this.renderOptions.bind(this);
        this.renderSubOptions = this.renderSubOptions.bind(this);

        this.getSelectedOption = this.getSelectedOption.bind(this);

        this.onSend = this.onSend.bind(this);

    }

    componentDidMount() {
        this._is_mounted = true;

    }

    shouldComponentUpdate(nextProps, nextState) {

        if (nextState.selected_option !== this.state.selected_option) {
            return true;
        } return false;

    }

    componentDidUpdate(nextProps, nextState) {

    }

    onScriptLoad(scriptname, src) {
        const that = this;

        let script;
        let request_script = new_script(src);

        request_script.then(function (resolve) {
            script = Object.assign({}, that.state.script, { [scriptname]: true }); that.setState({ script });
        }).catch(function (reject) {
            script = Object.assign({}, that.state.script, { [scriptname]: false }); that.setState({ script });
        });
    }

    onOpenModal(event) {
        event.preventDefault();

        const that = this || [];

        $('#system_modal_reports').modal('show');

        $('.ui.radio.checkbox.reports').checkbox({
            onChange: function () {
                that.setState({ selected_option: that.getSelectedOption() });

            }
        });
    }

    renderOptions() {

        let { form_reports } = this.state || [];

        var list = Object.keys(form_reports).map((item) => {
            let option = form_reports[item] || {};

            return (
                <div className="field">
                    <div className="ui radio checkbox reports">
                        <input data-key={item} type="radio" name={'reports_radio'} checked={item === 0 ? 'checked' : ''} />
                        <label>{option.message}</label>
                    </div>
                </div>
            );

        });

        return list;

    }

    renderSubOptions() {
        let { form_reports, selected_option } = this.state || [];

        let sub_options = getNestedObj(() => form_reports[selected_option]);

        if (!getNestedObj(() => sub_options.sub_menu_bool))
            return false;

        var list = Object.keys(sub_options.sub_menu).map((item) => {

            let option = sub_options.sub_menu[item] || {};

            return (
                <div className="field">
                    <div className="ui radio checkbox reports">
                        <input data-key={item} type="radio" name={sub_options.id} checked={item === 0 ? 'checked' : ''} />
                        <label>{option.message}</label>
                    </div>
                </div>
            );

        });

        return list;
    }

    getSelectedOption(array = null) {
        if (array === null)
            array = $('.ui.radio.checkbox.reports').checkbox('is checked')

        let identifiers = Object.keys(array)
        let active = identifiers.filter(function (id) {
            return (array)[id]
        })

        return active;
    }

    onSend(event) {
        event.preventDefault();

    }


    render() {

        const { form_reports, selected_option } = this.state || [];

        /*
        *Link expired, Inappropiate, Copyright, Loop shrinks
        *
        *
        */

        return (

            <React.Fragment>

                <a className="item white-text-color" onClick={(e) => this.onOpenModal(e)}>
                    <i className="exclamation circle icon" data-content={"Report this link."} data-variation="basic inverted mini" data-position="bottom center" data-inverted="" ></i> {this.props.children}
                </a>

                <div className="ui modal small" id="system_modal_reports">

                    <div className="header"><i className="exclamation circle icon"></i>{" " + "Usi impropi di Adshrink"}</div>

                    <div className="scrolling content">

                        <div className="ui grid stackable">

                            <div className="sixteen wide column">

                                <h4 className="ui header">
                                    <div className="ui breadcrumb">
                                        <a className="section">{language.new.report[0]}</a>
                                        <span className="divider">/</span>
                                        <a className="section">{language.new.report[1]}</a>
                                        <span className="divider">/</span>
                                        <div className="active section">{language.new.report[2]}</div>
                                    </div>

                                    <br /><br />

                                    <div className="sub header">{language.new.report[3]} <a>{language.new.report[4]}</a> {language.new.report[5]} <a>{language.new.report[6]}</a> {language.new.report[7]}</div>
                                </h4>

                                <div className="ui form">
                                    <div className="grouped fields">
                                        <label>How often do you use checkboxes?</label>
                                        {this.renderOptions()}
                                    </div>
                                </div>

                                {selected_option &&

                                    <React.Fragment>
                                        <div className="ui form">
                                            <div className="grouped fields">
                                                <label>{form_reports[selected_option].sub_menu_title}</label>
                                                {this.renderSubOptions()}
                                            </div>
                                        </div>

                                        {form_reports[selected_option].dichiarazione_bool &&

                                            <React.Fragment>

                                                <br />

                                                <form className="ui form">
                                                    <h4 className="ui dividing header">{language.new.report[8]}</h4>
                                                    <div className="field">
                                                        <label>Full name</label>
                                                        <div className="two fields">
                                                            <div className="field">
                                                                <input type="text" name="report[first-name]" placeholder="First Name" />
                                                            </div>
                                                            <div className="field">
                                                                <input type="text" name="report[last-name]" placeholder="Last Name" />
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="field">
                                                        <label>Company</label>
                                                        <div className="two fields">
                                                            <div className="field">
                                                                <input type="text" name="report[company]" placeholder="Company" />
                                                            </div>
                                                            <div className="field">
                                                                <input type="text" name="report[country]" placeholder="Country, State, City" />
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="field">
                                                        <label>Address</label>
                                                        <div className="fields">
                                                            <div className="twelve wide field">
                                                                <input type="text" name="report[address]" placeholder="Street Address" />
                                                            </div>
                                                            <div className="four wide field">
                                                                <input type="text" name="report[address-2]" placeholder="Apt #" />
                                                            </div>
                                                        </div>
                                                    </div>
                                                </form>

                                                <h2 className="ui header">
                                                    {language.new.report[9]}
                                                    <div className="sub header">{form_reports[selected_option].dichiarazione}</div>
                                                </h2>

                                            </React.Fragment>

                                        }

                                    </React.Fragment>
                                }

                            </div>

                            <div className="sixteen wide column right aligned">
                                <button className="ui secondary button">Close</button>
                                <button className="ui primary button">Send</button>
                            </div>

                        </div>

                    </div>

                </div>

            </React.Fragment>

        );

    }


}

class ComponentBugs extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            script: {
                h2c: false
            }
        }

        this.onScriptLoad = this.onScriptLoad.bind(this);
        this.captureScreen = this.captureScreen.bind(this);

        this.onOpenModal = this.onOpenModal.bind(this);

        this.onSend = this.onSend.bind(this);

    }

    componentDidMount() {
        this._is_mounted = true;

        this.onScriptLoad('h2c', 'https://shrink-service.it/js/h2c.min.js');

    }

    shouldComponentUpdate(nextProps, nextState) {

        if (nextState.script !== this.state.script) {
            return true;
        } if (nextState.canvas !== this.state.canvas) {
            return true;
        } if (nextState.img !== this.state.img) {
            return true;
        } return false;

    }

    componentDidUpdate(nextProps, nextState) {

        if (getNestedObj(() => nextState.script.h2c) !== getNestedObj(() => this.state.script.h2c))
            this.captureScreen(nextProps, nextState);

    }

    onScriptLoad(scriptname, src) {
        const that = this;

        let script;
        let request_script = new_script(src);

        request_script.then(function (resolve) {
            script = Object.assign({}, that.state.script, { [scriptname]: true }); that.setState({ script });
        }).catch(function (reject) {
            script = Object.assign({}, that.state.script, { [scriptname]: false }); that.setState({ script });
        });
    }

    captureScreen(nextProps = null, nextState = null) {

        const that = this;

        $('.basic-inverted-popup').popup();

        if (getNestedObj(() => this.state.script.h2c)) {

            html2canvas(
                document.querySelector("html"),
                {
                    allowTaint: true,
                    useCORS: true,
                    logging: false,
                    height: $('html')[0].scrollHeight,
                    windowHeight: $('html')[0].scrollHeight
                }).then(canvas => {
                    let png = canvas.toDataURL("image/png");

                    that.setState({ canvas: canvas, img: png });
                });

        }

    }

    onOpenModal(event) {
        event.preventDefault();

        this.captureScreen();

        $('#system_modal_bugs_feedback').modal('show');

        $('#screenshot_checkbox').checkbox('check');
    }

    onSend(event) {
        event.preventDefault();

    }


    render() {

        const { script, canvas, img } = this.state || [];

        return (

            <React.Fragment>

                {getNestedObj(() => script.h2c) &&

                    <a className="item white-text-color" onClick={(e) => this.onOpenModal(e)}>
                        <i className="code icon basic-inverted-popup" data-content={"Saved Elements"} data-variation="basic inverted mini" data-position="bottom center" data-inverted="" ></i>{this.props.children}
                    </a>

                }

                <div className="ui modal mini" id="system_modal_bugs_feedback" data-html2canvas-ignore>

                    <style>{" \
                        #screenshot_div { background-image:url('" + img + "'); width:100%; height:200px; background-repeat:no-repeat; background-size:cover; } \
                    "}</style>

                    <div className="header"><i className="code icon"></i>{" " + language.new.bugs.new[0]}</div>

                    <div className="content">

                        <div className="ui grid stackable">

                            <div className="sixteen wide column">

                                <div className="ui top attached segment mini" style={{ width: '100%' }}>

                                    <div className="ui form">

                                        <div className="field required">
                                            <textarea style={{ border: 'none' }} rows="5" placeholder={language.new.bugs.new[9]}></textarea>
                                        </div>

                                    </div>

                                </div>

                                <div className="ui attached segment floating" id="screenshot_div"></div>

                                <div className="ui bottom attached segment mini" style={{ width: '100%' }}>
                                    <div className="ui checkbox disabled" id="screenshot_checkbox" onClick={() => { window.open(img, '_blank'); }}>
                                        <input type="checkbox" />
                                        <label>Screenshot</label>
                                    </div>
                                </div>

                                <br />

                                <p><small>{language.new.bugs.new[3]}<a>{language.new.bugs.new[4]}</a> {language.new.bugs.new[5]}<a> {language.new.bugs.new[6]}</a>{language.new.bugs.new[7]}<a>{language.new.bugs.new[8]}</a>.</small></p>

                            </div>

                            <div className="sixteen wide column right aligned">
                                <button className="ui secondary basic button">{language.new.bugs.new[1]}</button>
                                <button className="ui primary button">{language.new.bugs.new[2]}</button>
                            </div>

                        </div>

                    </div>

                </div>

            </React.Fragment>

        );

    }


}

class TwitterTimeline extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            fetching: false
        };

    }

    componentDidMount() {

    }

    shouldComponentUpdate(nextProps, nextState) {
        if (nextProps !== this.props) {
            return true;
        } return false;

    }

    print_tweets = () => {

        let that = this;

        let data = getNestedObj(() => this.props.tweets.data, []) || [];

        var html = [];
        Object.keys(data).map((e) => {
            let { created_at, text, retweeted_status, user, entities } = data[e] || [];
            let { name, profile_image_url_https, screen_name, verified } = user || [];
            let { hashtags, media, urls, user_mentions } = entities || [];

            hashtags = (hashtags ? hashtags : []);
            media = (media ? media : []);
            urls = (urls ? urls : []);

            var html_media = Object.keys(media).map((e_media) => {
                let { media_url_https, expanded_url } = media[e_media] || 'n/a';

                return (
                    <a href={expanded_url} target="_blank"><img src={media_url_https} /></a>
                );
            });

            var html_hashtag = Object.keys(hashtags).map((e_hashtags) => {
                let { text } = hashtags[e_hashtags] || 'n/a';

                return (
                    <span className="ui label tiny">{"#" + text}</span>
                )
            });

            var html_urls = Object.keys(urls).map((e_urls) => {
                let { display_url } = urls[e_urls] || 'n/a';

                return (
                    <a href={getNestedObj(() => urls[e_urls].expanded_url)} target="_blank">{display_url}</a>
                )
            });

            html.push(
                <div className="event">
                    <div className="label">
                        <img src={profile_image_url_https} />
                    </div>
                    <div className="content">
                        <div className="summary">
                            <a>{name}</a> {text}
                            <div className="date">
                                {moment(created_at).fromNow()}
                            </div>
                        </div>
                        <div className="extra images">
                            {html_media}
                        </div>
                        <div className="meta">
                            {html_hashtag}
                        </div>
                    </div>
                </div>
            )


        });

        return (
            <div className="ui segment">
                <div className="ui feed">
                    {html}
                </div>
            </div>
        )
    }

    render() {

        return (
            <React.Fragment>
                <div className="ui segments">
                    <div className="ui segment secondary">
                        <h2 className="ui header left aligned">
                            Latest Tweets <a href="https://support.twitter.com/articles/20175256" target="_blank" style={{ color: "inherit" }}><i style={{ color: "#8c8c8c" }} className="small question circle outline icon middle aligned"></i></a>
                            <div className="sub header">by keyword <a>Adshrink.it</a></div>
                        </h2>
                        <div className="ui message tiny"><p>Publish our links on twitter for appear here. <span className="ui span blue tiny">#adshrinkit</span></p></div>
                    </div>
                    {this.print_tweets()}
                </div>
            </React.Fragment>
        );

    }
}

class ComponentFirstPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        };

    }

    componentDidMount() {

    }

    componentDidUpdate(nextProps, nextState) {

    }

    shouldComponentUpdate(nextProps, nextState) {
        if (nextProps !== this.props)
            return true;
        return false;
    }

    componentDidUpdate(nextProps, nextState) {

    }

    on_continue = (e, type = 'premium') => {
        e.preventDefault();

        let { u, dev, basic } = this.props || false;
        let { username } = getNestedObj(() => u.username) || 'Guest';

        if (type === 'premium') {
            window.location.href = (_adshrink.premiumpage + username);
            return;
        } else if (type === 'btcpaidlink') {
            if (basic)
                window.open(_adshrink.paywall, '_blank');
            else if (!basic && typeof basic !== 'undefined') {

            }
        }

        this.props.on_continue(e);

        if ("$" in window)
            setTimeout($('body')[0].scrollTo(0, 0));
    }

    print_lastlinks = () => {
        return (
            getNestedObj(() => this.props.html_lastlinks)
        )
    }

    print_telegrambot = () => {
        return (
            getNestedObj(() => this.props.html_telegrambot)
        )
    }

    render() {

        let { u, dev, publicdata } = this.props || false;
        let { username } = getNestedObj(() => u.username) || 'Guest';

        let paid_btc = false;

        let italy_mode = {
            green: { background: "#11998e", background: "-webkit-linear-gradient(to right, #38ef7d, #11998e)", background: "linear-gradient(to right, #38ef7d, #11998e)" },
            white: { background: "#ED213A", background: "-webkit-linear-gradient(to right, #93291E, #ED213A)", background: "linear-gradient(to right, #93291E, #ED213A)" },
            red: { background: "#ED213A", background: "-webkit-linear-gradient(to right, #93291E, #ED213A)", background: "linear-gradient(to right, #93291E, #ED213A)" }
        }

        let faded_img = { paddingLeft: "250px", boxSizing: "border-box" }

        let device_format_tablet_computer = (dev === 'Desktop' || dev === 'Tablet' ? true : false);

        let modal = "ui dimmer basic fullscreen long modal";

        let isSafari = /constructor/i.test(window.HTMLElement) || (function (p) { return p.toString() === "[object SafariRemoteNotification]"; })(!window['safari'] || (typeof safari !== 'undefined' && window['safari'].pushNotification));

        //onClick={(e) => this.props.on_continue(e, 'premium')}
        //<p><span style={{margin: "5px 0px 5px 5px"}} className="ui label red mini">Accept all <span style={{marginLeft: "5px", padding: "0px 5px", borderRadius: "3px", background: "white", color: "#9e9e9e"}}>Cookie consent and the GDPR</span></span> <span style={{margin: "5px 0px 5px 5px"}} className="ui label red mini">Disable <span style={{marginLeft: "5px", padding: "0px 5px", borderRadius: "3px", background: "white", color: "#9e9e9e"}}>Ad-Blocker</span></span></p>

        return (
            <div id="first_page_content_div" className={"twelve wide computer eight wide tablet sixteen wide mobile column middle aligned " + (!device_format_tablet_computer ? '' : 'lazy')} data-bg-multi="url(https://i.ibb.co/Fg3D2JH/mega-bottom-page-start-img3-2x-f907575db76f9466.png),url(https://i.ibb.co/YZSJDZx/start-img3-2-2x.png),linear-gradient(rgb(255, 255, 255), rgb(248 249 250))" style={{ padding: "120px 0px", backgroundColor: "#000000d6 !important", width: "100% !important", backgroundSize: "contain" }} ><div className="row" style={{ maxHeight: "calc(100%) !important", margin: "20px !important" }}>
                <style>{".super-bg-gradient-pro { background: #fff !important;background: -moz-linear-gradient(top, #fff 0, #fafafa 100%) !important;background: -webkit-linear-gradient(top, #fff, #fafafa) !important;background: linear-gradient(180deg, #fff 0, #fafafa) !important;-webkit-box-shadow: 0 1px 2px 0 rgba(0, 0, 0, .15) !important;-moz-box-shadow: 0 1px 2px 0 rgba(0, 0, 0, .15) !important;box-shadow: 0 1px 2px 0 rgba(0, 0, 0, .15) !important; } .scrolling.content {} .ui.segments.bgimg {background: white;border: solid 1px #c9c9c9;box-sizing: border-box; margin: 0px !important; }.rainbow-text{background-image: linear-gradient(to left, violet, indigo, blue, green, yellow, orange, red);-webkit-background-clip: text;color: transparent;"}</style>

                {device_format_tablet_computer && typeof device_format_tablet_computer !== 'undefined' &&
                    <div className="ui container grid stackable computer only tablet only center aligned">

                        <div className="twelve wide computer fourteen wide tablet column">

                            <div className="row center algined">
                                <div className="ui horizontal segments bgimg super-bg-gradient-pro" style={{ margin: "12px 0px !important" }}>
                                    <div className="ui segments" style={{ paddingTop: "10px", width: (paid_btc ? "50%" : "50%"), border: "0px", boxShadow: "initial" }}>

                                        <div className="ui segment basic" style={(isSafari ? {} : { height: "100%" })}>
                                            <h2 className="ui header left aligned middle aligned" style={{ color: "#444" }}>
                                                Continue without AdShrink Premium
                                                <div className="sub header" style={{ color: "#848484" }}>Continue and get the final content without the benefits of being a Premium user. Please deactivate your Ad-Blocker and click "Continue"</div>
                                            </h2>

                                            <div className="ui segment basic">
                                                <div className="ui list">
                                                    <div className="item">
                                                        <i className="check icon" style={{ color: "#13dc74" }}></i>
                                                        <div className="content" style={{ textAlign: "left", color: "#888888" }}>
                                                            Free
                                                        </div>
                                                    </div>
                                                    <div className="item">
                                                        <i className="close icon red"></i>
                                                        <div className="content" style={{ textAlign: "left", color: "#888888" }}>
                                                            Automatic destination
                                                        </div>
                                                    </div>
                                                    <div className="item">
                                                        <i className="close icon red"></i>
                                                        <div className="content" style={{ textAlign: "left", color: "#888888" }}>
                                                            Exclusive content
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="ui animated button fluid big primary" tabindex="0" style={(isSafari ? { position: "relative", top: "77px", marginTop: "10px !important" } : { bottom: "0px", bottom: "15px", position: "absolute", width: "calc(100% - 28px)", marginTop: "10px !important" })} onClick={(e) => this.props.on_continue(e)}>
                                                <div className="visible content">Click here<br />to Continue</div>
                                                <div className="hidden content">
                                                    <i className="right arrow icon"></i>
                                                </div>
                                            </div>

                                        </div>

                                        {paid_btc &&
                                            <div className="ui segment basic" style={{ paddingTop: "10px", width: "100%" }}>
                                                <h2 className="ui header left aligned middle aligned" style={{ color: "#444" }}>
                                                    Buy direct access to the link!
                                                    <div className="sub header" style={{ color: "848484" }}>After purchase, the link will always remain directly accessible to your account</div>
                                                    <p><a style={{ color: "rgb(221, 221, 221)" }}> <span style={{ margin: "5px 0px 5px 5px" }} className="ui label red mini"> Bitcoin <span style={{ marginLeft: "5px", padding: "0px 5px", borderRadius: "3px", background: "white", color: "red" }}>HOT - Make your first Paid Link and get 80% from each sale</span></span></a></p>
                                                </h2>
                                                <div className="ui animated button fluid secondary" tabindex="0" style={{ position: "relative", bottom: "0px" }} onClick={(e) => this.on_continue(e, 'btcpaidlink')}>
                                                    <div className="visible content">Buy direct access using Bitcoin</div>
                                                    <div className="hidden content">
                                                        <i className="btc icon"></i>
                                                    </div>
                                                </div>
                                            </div>
                                        }

                                    </div>
                                    <div className="ui vertical divider">Or</div>
                                    <div className="ui segments" style={{ width: (paid_btc ? "50%" : "50%"), border: "0px", boxShadow: "initial" }}>
                                        <div className="ui segment basic">
                                            <h2 className="ui header left aligned middle aligned" style={{ color: "#444" }}>
                                                Continue with Adshrink Premium
                                                <div className="sub header" style={{ color: "#848484" }}>{'Say thanks to "' + username + '". Our creators love hearing from you and seeing how you are supporting them'}</div>
                                            </h2>
                                            <video className="lazy" controls width="100%" data-src="https://adshnk.com/video/adshrink-premium-explanation-video.mp4" data-poster="https://res.cloudinary.com/drzbscyrl/image/upload/c_scale,q_49,w_1038/v1613778146/adshrink-premium-picture_dyyc8x.png" style={{ marginBottom: "20px" }}>
                                                <source type="video/mp4" data-src="https://adshnk.com/video/adshrink-premium-explanation-video.mp4" />
                                            </video>
                                            <a href={_adshrink.premiumpage + username} target="_blank" style={{ marginTop: "5px", position: "relative", bottom: "0px", background: "#13dc74" }} className="ui animated button fluid big secondary" tabindex="0" >
                                                <div className="visible content">Premium <br /> Access</div>
                                                <div className="hidden content">
                                                    <i className="shop icon"></i>
                                                </div>
                                            </a>
                                        </div>
                                    </div>

                                </div>

                            </div>

                        </div>
                    </div>
                }

                {!device_format_tablet_computer && typeof device_format_tablet_computer !== 'undefined' &&
                    <div className="ui grid mobile only center aligned">

                        <div className="row">
                            <div className="ui segments" style={{ margin: "18px 0px" }}>
                                <div className="ui segment">
                                    <h2 className="ui header left aligned middle aligned" style={{ color: "#444" }}>
                                        Continue without AdShrink Premium
                                        <div className="sub header" style={{ color: "#848484" }}>Continue and get the final content without the benefits of being a Premium user. Please deactivate your Ad-Blocker and click "Continue"</div>
                                    </h2>
                                    <div className="ui animated button fluid big primary" tabindex="0" style={{ position: "relative", bottom: "0px" }} onClick={(e) => this.props.on_continue(e)}>
                                        <div className="visible content">Click here<br />to Continue</div>
                                        <div className="hidden content">
                                            <i className="right arrow icon"></i>
                                        </div>
                                    </div>
                                </div>
                                <div className="ui segment">
                                    <h2 className="ui header left aligned middle aligned" style={{ color: "#444" }}>
                                        Continue with Adshrink Premium
                                        <div className="sub header" style={{ color: "#848484" }}>{'Say thanks to "' + username + '". Our creators love hearing from you and seeing how you are supporting them'}</div>
                                    </h2>
                                    <video className="lazy" controls width="100%" data-src="https://adshnk.com/video/adshrink-premium-explanation-video.mp4" data-poster="https://res.cloudinary.com/drzbscyrl/image/upload/c_scale,q_49,w_1038/v1613778146/adshrink-premium-picture_dyyc8x.png" style={{ marginBottom: "20px" }}>
                                        <source type="video/mp4" data-src="https://adshnk.com/video/adshrink-premium-explanation-video.mp4" />
                                    </video>
                                    <a href={_adshrink.premiumpage + username} className="ui animated button fluid big secondary" tabindex="0" style={{ marginTop: "5px", position: "relative", bottom: "0px", background: "#13dc74", marginTop: "10px !important" }}>
                                        <div className="visible content">Premium Access</div>
                                        <div className="hidden content">
                                            <i className="shop icon"></i>
                                        </div>
                                    </a>
                                </div>
                                {paid_btc &&
                                    <div className="ui segment">
                                        <h2 className="ui header left aligned middle aligned" style={{ color: "#444" }}>
                                            Buy direct access to the link!
                                            <div className="sub header" style={{ color: "848484" }}>After purchase, the link will always remain directly accessible to your account</div>
                                            <p><a style={{ color: "rgb(221, 221, 221)" }}> <span style={{ margin: "5px 0px 5px 5px" }} className="ui label red mini"> Bitcoin <span style={{ marginLeft: "5px", padding: "0px 5px", borderRadius: "3px", background: "white", color: "red" }}>HOT - Make your first Paid Link and get 80% of each sale</span></span></a></p>
                                        </h2>
                                        <div className="ui animated button fluid secondary" tabindex="0" style={{ position: "relative", bottom: "0px" }} onClick={(e) => this.props.on_continue(e, 'btcpaidlink')}>
                                            <div className="visible content">Buy direct access using Bitcoin</div>
                                            <div className="hidden content">
                                                <i className="btc icon"></i>
                                            </div>
                                        </div>
                                    </div>
                                }
                            </div>
                        </div>

                    </div>
                }

            </div></div>
        );

    }

}

class ComponentExtraScripts extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            auth: false,
            script: {
                botDetect: false,
                wurfl: false,
                fingerprint: false
            },
            data: {

            }
        }

        this._is_mounted = false

        this.done = {};

        this.onScriptLoad = this.onScriptLoad.bind(this);

        this.onScriptLoaded = this.onScriptLoaded.bind(this);

        this.authUser = this.authUser.bind(this);

        this.onCheckConnectionSpeed = this.onCheckConnectionSpeed.bind(this);

    }

    componentDidMount() {
        this._is_mounted = true;

        this.onScriptLoad('botDetect', 'https://cdn.jsdelivr.net/gh/adshrink/skip.prod.js@main1.111/botDetector.js');
        this.onScriptLoad('wurfl', '//wurfl.io/wurfl.js');
        this.onScriptLoad('fingerprint', 'https://cdnjs.cloudflare.com/ajax/libs/fingerprintjs2/1.8.1/fingerprint2.min.js');

        /*
        window[___reactjsD.o] = Object.assign({}, 
            window[___reactjsD.o], 
            {trusted: true, docReferrer: 'test', 
                navigator: {
                    os: navigator.platform, 
                    cookie: navigator.cookieEnabled, 
                    language: navigator.language, 
                    width: screen.width, 
                    height: screen.height, 
                    uA: window.navigator.userAgent
                }
            }
        );
        */

        this.onCheckConnectionSpeed();

    }

    shouldComponentUpdate(nextProps, nextState) {
        if (nextState.auth !== this.state.auth) {
            return true;
        } if (nextState.script !== this.state.script) {
            return true;
        } if (nextState.data !== this.state.data) {
            return true;
        } return false;

    }

    componentDidUpdate(nextProps, nextState) {
        if (getNestedObj(() => nextState.script) !== getNestedObj(() => this.state.script))
            this.onScriptLoaded(nextProps, nextState);

    }

    onScriptLoad(scriptname, src) {
        const that = this;

        let script;
        let request_script = new_script(src);

        request_script.then(function (resolve) {
            script = Object.assign({}, that.state.script, { [scriptname]: true }); that.setState({ script });
        }).catch(function (reject) {
            script = Object.assign({}, that.state.script, { [scriptname]: false }); that.setState({ script });
        });
    }

    onScriptLoaded(p, s) {
        const that = this;

        const { importNavigatorScript } = this.props || [];

        if (!this._is_mounted)
            return false;

        const script_name = Object.keys(difference(this.state.script, s.script))[0];

        if (getNestedObj(() => this.done[script_name]))
            return false;

        $(document).ready(() => {

            switch (script_name) {
                case 'botDetect':

                    window[script_name].onUser(function () {

                        window[___reactjsD.o] = Object.assign({}, window[___reactjsD.o], { [script_name]: { isUser: window.botDetect.isUser, tests: window.botDetect.tests } })

                        let data = { ...that.state.data, [script_name]: window[___reactjsD.o][script_name] };

                        that.setState({ data });

                    });

                    break;
                case 'fingerprint':

                    new Fingerprint2({ swfPath: '/assets/FontList.swf', excludeUserAgent: true }).get(function (bkey, components) {

                        window[___reactjsD.o] = Object.assign({}, window[___reactjsD.o], { [script_name]: bkey });

                        let data = { ...that.state.data, [script_name]: window[___reactjsD.o][script_name] };

                        that.setState({ data });

                    });

                    break;
                case 'wurfl':

                    window[___reactjsD.o] = Object.assign({}, window[___reactjsD.o], { [script_name]: window.WURFL });

                    let data = { ...that.state.data, [script_name]: window[___reactjsD.o][script_name] };

                    importNavigatorScript(data);

                    that.setState({ data });

                    break;
            }

        })

        this.done = { ...this.done, [script_name]: true };

    }

    authUser(event) {
        event.preventDefault();

        const password = prompt('Insert Special Code');

        if (password === '1234567890')
            this.setState({ auth: true });
        else
            window.toastr.error('Authorized personnel only.')

    }

    onCheckConnectionSpeed() {
        const that = this || [];

        var connection = navigator.connection || navigator.mozConnection || navigator.webkitConnection || false;

        if (!connection)
            return false;

        connection.onchange = function (event) {
            const { target } = event || [];
            const { effectiveType, downlink } = target || false

            that.setState({ connection: { type: effectiveType, dl: downlink } });
        }

        if (connection) {
            const { effectiveType, downlink } = connection || false

            that.setState({ connection: { type: effectiveType, dl: downlink } });
        }

    }

    render() {

        const that = this;
        const { auth, script, data, connection } = this.state || [];

        const html = {
            loaded_script: []
        }

        Object.keys(script).map((k) => {

            let loaded = script[k] || false;
            let script_name = k || '«script»';
            let loaded_time = new Date();

            html.loaded_script.push(

                <div className="item">
                    <i className="large code middle aligned icon"></i>
                    <div className="content">
                        <a className="header">{script_name}</a>
                        <div className="description">{"Loaded " + loaded + " at " + loaded_time.getTime()} <small>{JSON.stringify(getNestedObj(() => data[script_name]))}</small></div>
                    </div>
                </div>

            );

        })

        return (
            <React.Fragment>

                {auth &&
                    <div className="ui relaxed divided list">
                        {html.loaded_script}

                        <p>Connection type: {getNestedObj(() => connection.type)} and downloadSpeed: {getNestedObj(() => connection.dl)}</p>
                    </div>
                }

                {!auth && true === false &&
                    <a onClick={(e) => this.authUser(e)}>Status</a>
                }

            </React.Fragment>
        )

    }

}

class ComponentVerifyBot extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            fetching: false,
            recaptcha: false,
            rendered: false,
            adblock: false,
            rejectediab: false
        }

        this.divname = ___reactjsD.captcha_class + '-antibot';

        this.message = {
            'adblock': 'Disable your Ad-block',
            'iab': 'Accept data processing in order to show advertising',
            'allow': 'Click here to accept'
        }
    }

    componentDidMount() {
        window.lazyLoadInstance.update();
    }

    shouldComponentUpdate(nextProps, nextState) {
        if (nextProps !== this.props)
            return true;
        if (nextState.recaptcha !== this.state.recaptcha || nextState.rendered !== this.state.rendered || nextState.adblock !== this.state.adblock || nextState.rejectediab !== this.state.rejectediab)
            return true;

        return false;
    }

    componentDidUpdate(nextProps, nextState) {
        if (nextState.recaptcha !== this.state.recaptcha) {
            if (this.state.recaptcha)
                this.props.pass(true);
        } if (nextState.render !== this.state.rendered) {
            if (this.state.rendered)
                this.on_render_recaptcha();
        }
    }

    toast_msg = (msg, error = false) => {
        if (!msg) return;

        try {
            if (error)
                window.toastr.error(msg, null, { "positionClass": "toast-bottom-left" });
            else
                window.toastr.info(msg, null, { "positionClass": "toast-bottom-left" });
        } catch (error) {
            console.warn('toast-error');
        }
    }

    script_loaded = (url) => {
        if (!url) url = "http://xxx.co.uk/xxx/script.js";
        var scripts = document.getElementsByTagName('script');
        for (var i = scripts.length; i--;) {
            if (scripts[i].src == url) return true;
        }
        return false;
    }

    on_verify_hcaptcha = async (key) => {

    }

    on_verify_recaptcha = async (key) => {
        let that = this;

        that.props.pass(true);
        return;

        that.setState({ recaptcha: false, fetching: true, adblock: false, rejectediab: false });

        let adblock = await checkAdBlocker();
        let iab = await check_user_iab_permissions(true);

        let tcf = window.iab_rejected;

        let allow_alert = false;

        if (adblock) {
            alert(this.message.adblock);

            if (___reactjsD.captcha_js in window)
                window[___reactjsD.captcha_js].reset();

            this.setState({ adblock: true, recaptcha: false, fetching: false });

            return false;
        } else if (tcf) {
            allow_alert = confirm(this.message.iab + "." + this.message.allow);

            if (allow_alert) {
                //OneTrust.AllowAll();

                iab = await check_user_iab_permissions(true);
                adblock = await checkAdBlocker();

                if (adblock) {
                    alert(this.message.adblock);

                    if (___reactjsD.captcha_js in window)
                        window[___reactjsD.captcha_js].reset();

                    this.setState({ adblock: true, recaptcha: false, fetching: false, rejectediab: false });

                    return false;

                }

            } else {
                if (___reactjsD.captcha_js in window)
                    window[___reactjsD.captcha_js].reset();

                this.setState({ rejectediab: true, recaptcha: false, fetching: false, rejectediab: true });

                return false;
            }

            window.location.reload();

        } else {
            this.setState({ adblock: true, recaptcha: false, fetching: false, rejectediab: false });
        }

        if (this.state.adblock || this.state.rejectediab)
            return false;

        iab = await check_user_iab_permissions(true);

        //https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js
        let script_aloaded = this.script_loaded('https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js');

        if (!script_aloaded)
            await $script('https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js', 'adsense-by-google');

        const server_recaptcha = $.post(___reactjsD.verification_recaptcha, { v: 'v2', response: key }).then((res) => {


            if (res.success) {
                console.log('captcha', res, res.success);
                this.props.pass(true);
                //that.setState({ recaptcha: true, fetching: false });
                ga('send', 'event', 'Recapthca', 'prototype', 'Verify-true', 100);

            } else {
                ga('send', 'event', 'Recapthca', 'prototype', 'Verify-false', 10);
                that.setState({ recaptcha: false, fetching: false });

            }

        }).catch((error) => {
            that.toast_msg(error, true);
            ga('send', 'event', 'Recapthca', 'prototype', 'Verify-fail', 0);

            that.setState({ recaptcha: false, fetching: false });

        });

        this.forceUpdate();

    }

    on_verify_recaptcha_v3 = async (event) => {

        const that = this;

        axios.post(___reactjsD.verification_recaptcha, objToFormdata({ response: event, v: 'v3' }))

            .then(function (result) {
                console.log('recaptcha v3 results..', result);
                ga('send', 'event', 'Page', 'recaptcha_v3_total_server_requests', 'Verify requests to server', 100);

                if (getNestedObj(() => result.data.success))
                    window[___reactjsD.o] = { ...window[___reactjsD.o], recapv3: getNestedObj(() => result.data) }; //result.data.g_response[0]

                const score = result.data?.score ?? 0;

                _adshrink.userStatus.v3Score = score;
                if (score < (window._adshSettings?.minUserScoreThreshold ?? 0.1)) {
                    console.log('adS<min', score);
                    ga('send', 'event', 'User', 'score_under_0_7', 'Bad User', 10);
                    _adshrink.enabled.adsense = false;
                    _adshrink.enabled.taboola = false;
                    $('#goog_loader_script, #tb_loader_script').remove();
                    ga('send', 'event', 'Annunci', 'banner_removed', 'Because bad traffic', 0);
                } else if (score >= (window._adshSettings?.minUserScoreThreshold ?? 0.1) && score < (window._adshSettings?.maxUserScoreThreshold ?? 0.9)) {
                    console.log('adS><min|max', score);
                    ga('send', 'event', 'User', 'score_0_7', 'Intermediare User', 70);
                    if (!'AdscoreInit' in window)
                        throw new Error('adscore missing');

                    window.AdscoreInit("QrCXAAAAAAAAQS8B6tSAeOiLaCMe3MfUDtE30mY", {
                        sub_id: parseInt(window[___reactjsD.o]?.uid),
                        callback: function (result) {
                            let { signature, error } = result || false;
                            console.log('adS', (signature ? signature : false), error);
                            if (parseInt(error) > 0)
                                return;
                            $.post('https://www.shrink-service.it/v3/api/prototype/adscore', { signature: signature, referrer: getNestedObj(() => window.document.referrer), host: window.dhost }).then((res) => {
                                if (res && !res.success) {
                                    /**
                                     * good
                                     * @facts
                                     */
                                    ga('send', 'event', 'User', 'score_0_7_adscore_good', 'Good User', 100);

                                    /**
                                     * AUTOMATIC ADS GOOGLE
                                     */
                                    if (_adshrink.enabled.adsense) {
                                        (adsbygoogle = window.adsbygoogle || []).push({
                                            google_ad_client: _adshrink.adsbygoogle_settings.capub,
                                            params: { google_ad_channel: window[___reactjsD.o]?.uid },
                                            enable_page_level_ads: true,
                                        });
                                        //overlays: {bottom: true}
                                    }
                                } else {
                                    throw new Error('something gone wrong');
                                }
                            }).catch((error) => {
                                _adshrink.enabled.adsense = false;
                                _adshrink.enabled.taboola = false;
                                _adshrink.userStatus.adScore = true;
                                $('#goog_loader_script, #tb_loader_script').remove();

                                ga('send', 'event', 'User', 'score_0_7_adscore_bad', 'Bad User', 0);
                                ga('send', 'event', 'Annunci', 'banner_removed', 'Because bad traffic', 0);
                            });

                        }
                    });
                } else {
                    /**
                     * good
                     * @v3
                     */
                    console.log('adS>max', score);
                    ga('send', 'event', 'User', 'score_0_9', 'Good User', 90);

                    /**
                     * AUTOMATIC ADS GOOGLE
                     */
                    if (_adshrink.enabled.adsense) {
                        (adsbygoogle = window.adsbygoogle || []).push({
                            google_ad_client: _adshrink.adsbygoogle_settings.capub,
                            params: { google_ad_channel: window[___reactjsD.o]?.uid },
                            enable_page_level_ads: true,
                        });
                        //overlays: {bottom: true}
                    }
                }

            })
            .catch(function (error) {

                console.warn('grecaptcha.execute.server', error);
                _adshrink.enabled.adsense = false;
                _adshrink.enabled.taboola = false;
                _adshrink.userStatus.adScore = true;
                $('#goog_loader_script, #tb_loader_script').remove();

                ga('send', 'event', 'Page', 'recaptcha_v3_error', error, 0);
                ga('send', 'event', 'Annunci', 'banner_removed', 'Because bad traffic', 0);

            });

    }

    on_render_recaptcha = async () => {

        let that = this;

        $script('https://www.google.com/recaptcha/api.js?render=' + ___reactjsD.pk3_recaptcha, 'recaptcha_antibot');

        $script.ready('recaptcha_antibot', () => {

            console.log('loaded.. recaptcha v3');

            window.grecaptcha.ready(() => {

                window.grecaptcha.render(document.getElementsByClassName(that.divname)[0], {
                    sitekey: ___reactjsD.pk_recaptcha,
                    callback: function (event) {
                        /** event */  ga('send', 'event', 'Page', 'after_load_recaptcha_v2', 'recaptcha_triggered');
                        that.on_verify_recaptcha(event);
                    }
                });

                window.grecaptcha.execute(___reactjsD.pk3_recaptcha, { action: parseInt(window[___reactjsD.o]?.uid) })
                    .then(function (token) {

                        that.on_verify_recaptcha_v3(token);

                    });

            });
        });

        let adblock = await checkAdBlocker();
        let iab = await check_user_iab_permissions();
        let tcf = window.iab_rejected;

        this.setState({ adblock: adblock, rejectediab: tcf });

    }

    on_allow_iab = () => {
        if ('googlefc' in window)
            googlefc.showRevocationMessage()
    }

    render() {

        const { rendered, fetching, recaptcha, adblock, rejectediab } = this.state || false;

        if (!rendered)
            this.setState({ rendered: true });

        return (
            <React.Fragment>
                <div className="ui bulleted list red">
                    {adblock &&
                        <div className="item">{this.message.adblock}</div>
                    }
                    {rejectediab &&
                        <div className="item" id="pre-captcha-iab-message-rejected">{this.message.iab}. <br /> <a onClick={() => this.on_allow_iab()}>{this.message.allow}</a></div>
                    }
                </div>
                {!recaptcha &&
                    <div className={this.divname}></div>
                }
                {recaptcha &&
                    <div className="not_a_bot"></div>
                }
            </React.Fragment>
        )
    }
}

class ComponentRecaptcha extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            script: {
                recaptcha: false
            },
            fetching: false,
            recaptcha: false,
        }

        this.done = {};

        this.onVerifyRecaptcha = this.onVerifyRecaptcha.bind(this);
        this.onClickContinue = this.onClickContinue.bind(this);
        this.onSetButton = this.onSetButton.bind(this);

        this.interval_countdown = false;

    }

    componentDidMount() {

    }

    shouldComponentUpdate(nextProps, nextState) {

        if (nextState.script !== this.state.script) {
            return true;
        } if (nextState.recaptcha !== this.state.recaptcha) {
            return true;
        } if (nextProps !== this.props) {
            return true;
        } return false;

    }

    on_render_recaptcha = () => {

        let that = this;

        if (!getNestedObj(() => this.props.mode, false)) {
            console.warn('Adshrink::error', 'mode not selected');
            return false;
        }

        $script('https://www.google.com/recaptcha/api.js?render=' + ___reactjsD.pk3_recaptcha, 'grecaptcha');

        $script.ready('grecaptcha', () => {

            window.grecaptcha.ready(() => {
                window.grecaptcha.render(document.getElementsByClassName('g-recaptcha')[0], {
                    sitekey: ___reactjsD.pk_recaptcha,
                    callback: function (event) {
                    /** event */  ga('send', 'event', 'Page', 'after_load_recaptcha_v2', 'recaptcha_triggered');
                        that.onVerifyRecaptcha(event);
                    }
                });

                window.grecaptcha.execute(___reactjsD.pk3_recaptcha, { action: window[___reactjsD.o]?.uid })
                    .then(function (token) {

                        axios.post(___reactjsD.verification_recaptcha, objToFormdata({ response: token, v: 'v3' }))//axios.post('https://www.shrink-service.it/api-extension/prototype/recaptcha', objToFormdata({booleanRecaptchaV3: true, postkey: token, v: 3}))
                            .then(function (result) {

                                if (getNestedObj(() => result.data.success))
                                    window[___reactjsD.o] = { ...window[___reactjsD.o], recapv3: getNestedObj(() => result.data) }; //result.data.g_response[0]

                            })
                            .catch(function (error) {

                                console.warn('grecaptcha.execute.server', error);

                            });

                    });
            });

        });

    }

    componentDidUpdate(nextProps, nextState) {

        if (nextState.recaptcha !== this.state.recaptcha) {
            this.props.skip();

            this.onSetButton();

            try {
                window.toastr.info('Loading.. <br/> <a href="' + _adshrink.instagram + '" target="_blank"><i className="instagram icon"></i> Follow </a> <a href="' + _adshrink.facebook + '" target="_blank"><i className="facebook f icon"></i> Follow </a>', null, { "positionClass": "toast-bottom-left" });
            } catch (error) {
                console.warn('toastr-error');
            }
        } if (nextProps.url !== this.props.url) {
            $('#sbs_loading').removeClass('disabled loading');
        } if (nextProps.mode !== this.props.mode) {
            console.log(nextProps, this.props);
            this.on_render_recaptcha();
        }

    }

    onVerifyRecaptcha(key) {
        let that = this;

        $('#sbs_loading').addClass('disabled loading');

        const server_recaptcha = $.post(___reactjsD.verification_recaptcha, { v: 'v2', response: key }).then((res) => {

            if (res.success) {
                that.setState({ recaptcha: true, fetching: true });

                ga('send', 'event', 'Recapthca', 'prototype', 'Verify-true', 100);

            } else {
                ga('send', 'event', 'Recapthca', 'prototype', 'Verify-false', 10);
            }

        }).catch((error) => {
            try { window.toastr.error(error, null, { "positionClass": "toast-bottom-left" }); } catch (error) { console.warn('toast-error'); }
            ga('send', 'event', 'Recapthca', 'prototype', 'Verify-fail', 0);

        })

        /*********************************/
        $('#popup_first_step').addClass('completed').removeClass('active');
        $('#popup_second_step').addClass('active').removeClass('disabled');
        /*********************************/
        $('#system_notification_top_header').text(language.tskip);
        $('#system_notification_top_subheader').text(language.t7.a);
        $('#system_notification_top_label').text('2 Step');

    }

    onClickContinue(event) {
        event.preventDefault();

        const { type, skip, url } = this.props;

        //console.log('this.system_pop_n', this.system_pop_n, type);

        this.system_need = true;
        this.system_pop_max = (type === 'Normal' ? 1 : (type === 'Full-Profits' ? 2 : (type === 'Super-Full-Profits' ? 3 : 0)));

        if (this.system_pop_n >= 0)
            this.system_pop_n++;
        else
            this.system_pop_n = 0;

        switch (type) {
            case 'Light':

                $('#popup_second_step').addClass('completed').removeClass('active');
                $('#popup_third_step').addClass('active').removeClass('disabled');

                if (this.system_pop_n >= 0) {
                    this.system_need = false;

                } else {

                    //console.log('Light SKIP event by reCaptcha');

                }

                break;
            case 'Normal':

                if (this.system_pop_n > 0) {
                    this.system_need = false;

                    $('#popup_second_step').addClass('completed').removeClass('active');
                    $('#popup_third_step').addClass('active').removeClass('disabled');

                } else {

                    if (this.system_pop_n === 0) {

                        $('#popup_second_step').addClass('completed').removeClass('active');
                        $('#popup_third_step').addClass('active').removeClass('disabled');

                    }

                    //console.log('Normal SKIP event');

                }

                break;
            case 'Full-Profits':
                if (this.system_pop_n > 1) {
                    this.system_need = false;



                } else {

                    if (this.system_pop_n === 1) {

                        $('#popup_second_step').addClass('completed').removeClass('active');
                        $('#popup_third_step').addClass('active').removeClass('disabled');

                    }

                    //console.log('Full-Profits SKIP event');

                }

                break;
            case 'Super-Full-Profits':
                if (this.system_pop_n > 2) {
                    this.system_need = false;
                } else {

                    if (this.system_pop_n === 2) {

                        $('#popup_second_step').addClass('completed').removeClass('active');
                        $('#popup_third_step').addClass('active').removeClass('disabled');

                    }

                    //console.log('Super-Full-Profits SKIP event');

                }

                break;

        }

        if (this.system_need) {

            //this.system_pop = window.open( getNestedObj(() => _adshrink.ads[this.system_pop_n]), '_blank');

            if (this.system_pop_n <= this.system_pop_max)
                $('#pop_number').text((this.system_pop_n + 1));

        }

        return true;

    }

    onSetButton() {

        let { type, url } = this.props;
        let { fetching } = this.state;
        let loading = (fetching && !url ? true : false);

        let button = <div className="ui segment basic center aligned">
            <button className={"ui right labeled icon button green fluid primary " + (loading ? 'loading' : '')} id="complete_recaptcha_a_button" onClick={(e) => this.onClickContinue(e)}>
                {type}
            </button>
        </div>;

        if (url) {

            let that = this;

            window.cd = 0;

            this.interval_countdown = setInterval(function () {
                window.cd++;

                $('#final_redirect_text').text('Wait .. ' + (_adshrink.skiptime - window.cd) + ' sec and ');

                if (window.cd === 3) {
                    //$('#modal_surveyplanet').modal('show');

                }

                if (window.cd >= _adshrink.skiptime) {
                    var rurl = url;
                    /* da togliere */
                    //try {
                    //rurl = new URL(rurl);
                    //if ( getNestedObj(() => rurl.protocol) === 'http:' )
                    //rurl = "http://adshrink.it/redirectwos.php?uri=" + window.btoa(rurl);
                    //} catch(error) {
                    //console.warn('new URL() error', rurl);
                    //}

                    //$('#final_redirect').attr('href', rurl);
                    //$('#final_redirect_text').text( '' );
                    clearInterval(that.interval_countdown);
                    ga('send', 'event', 'Destination', 'prototype', 'Countdown-finish', 100);
                }

            }, 1000);

            button = <React.Fragment>
                <a id="final_redirect" className={"ui right labeled icon primary green fluid button " + (loading ? 'loading' : '')} style={{ marginBottom: "10px" }}>
                    <i className="right arrow icon"></i>
                    <span id="final_redirect_text"></span> {(loading ? 'Loading' : language.continue) + " ("}<text id="pop_number">0</text>{"/" + (type === 'Normal' ? 1 : (type === 'Full-Profits' ? 2 : 0)) + ")"}
                </a>
                <a className="ui button primary fluid huge modal_premium_infos" href="#" target="_blank" style={{ backgroundColor: "#13dc74" }}>Premium Access</a>
            </React.Fragment>;
        }

        return (

            <React.Fragment>

                <style>{"   \
                    #complete_recaptcha_a_button { background-color: #13dc74 !important; } \
                "}</style>

                {type === 'Light' &&
                    button
                }

                {type === 'Normal' &&
                    <React.Fragment>
                        {button}
                    </React.Fragment>
                }

                {type === 'Full-Profits' &&
                    <React.Fragment>
                        {button}
                    </React.Fragment>
                }

            </React.Fragment>

        )

    }

    render() {

        const { recaptcha } = this.state || false;

        return (
            <React.Fragment>

                <div id="system_center_card_bounce">

                    <style>{" .g-recaptcha > div:first-of-type { margin: 0 auto; } "}</style>

                    {!recaptcha &&
                        <div className={"g-recaptcha"} data-sitekey={___reactjsD.pk_recaptcha}></div>
                    }

                    {recaptcha &&
                        <div className={"ui segment basic center aligned middle aligned"} style={{ margin: "0px" }} id="sbs_loading">
                            {this.onSetButton()}
                        </div>
                    }

                </div>

            </React.Fragment>
        )

    }

}

function ComponentStaticStepsMessages(props) {

    function onHover(event) {

        event.preventDefault();

        $('.g-recaptcha, #final_redirect').transition({
            animation: 'flash',
            duration: 800,
            interval: 200
        });

    }

    //Definitivo

    return (

        <div className="ui segments" onMouseOver={(e) => onHover(e)}>

            <div className="ui secondary segment">
                <i className="info circle icon"></i><text id="system_notification_top_header">{language.trecap}</text> <a className="ui mini basic label" id="system_notification_top_label" style={{ position: "relative", bottom: "2px" }}>1 Step</a>
            </div>
            <div className="ui segment">
                <h3 className="ui header">
                    <p className="sub header" id="system_notification_top_subheader">{language.t3.b}</p>
                </h3>
            </div>

        </div>

    );

}

class Subscribers extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            premium: getNestedObj(() => this.props.premium, []),
            page: 1
        }

    }

    componentDidMount() {
        $('#premium_tab .item').tab()
    }

    shouldComponentUpdate(nextProps, nextState) {
        if (nextState !== this.state)
            return true;
        if (nextProps !== this.props)
            return true;
        return false;
    }

    componentDidUpdate(nextProps, nextState) {
        if (nextProps !== this.props) {

        }
    }

    search_subscribers = () => {

        let that = this;

        let { u } = this.props || false;
        let { id, userid } = u || false;

        $.post('https://www.shrink-service.it/v2/public/api/prototype/premium/u/' + userid + '/' + id).then((res) => {

            if (res.success)
                that.setState({ premium: res });

        });

    }

    change_subscribers_page = (e, direction = 'right') => {
        e.preventDefault();

        let that = this;

        let { page } = this.state;

        let { u } = this.props || false;
        let { id, userid } = u || false;

        let n = page;

        if (direction === 'right')
            n++;
        else if (direction === 'left')
            n--;

        if (n < 1)
            return false;

        $('#content-segment-subscriptions').addClass('loading');

        $.post('https://www.shrink-service.it/v2/public/api/prototype/subscribers/u/' + userid + '/' + id, { page: n }).then((res) => {

            if (res.success) {
                let data = { ...that.state.premium, page: res.data, subscribers: res.subscribers };

                that.setState({ premium: data, page: n });
            }

            $('#content-segment-subscriptions').removeClass('loading');

        }).catch((error) => {
            $('#content-segment-subscriptions').removeClass('loading');

        });

    }

    print_awards = (elem) => {

        if (elem == 0) {
            return <i className="certificate icon" style={{ WebkitMaskImage: "-webkit-gradient(linear, left top, left bottom, from(rgb(90 50 50 / 80%)) ,color-stop(50%, #772f1a57), to(#7b4e20bf))", color: '#e8b90d' }}></i>;
        } else if (elem == 1) {
            return <i className="certificate icon" style={{ WebkitMaskImage: "-webkit-gradient(linear, left top, left bottom, from(rgb(90 50 50 / 80%)) ,color-stop(50%, #772f1a57), to(#7b4e20bf))", color: '#c1bfb7' }}></i>;
        } else if (elem == 2) {
            return <i className="certificate icon" style={{ WebkitMaskImage: "-webkit-gradient(linear, left top, left bottom, from(rgb(90 50 50 / 80%)) ,color-stop(50%, #772f1a57), to(#7b4e20bf))", color: '#b16422' }}></i>;
        } else {
            return <i className="certificate icon" style={{ WebkitMaskImage: "-webkit-gradient(linear, left top, left bottom, from(rgb(90 50 50 / 80%)) ,color-stop(50%, #772f1a57), to(#7b4e20bf))", color: '#525251' }}></i>;
        }

    }

    print_list = (what = 'UnlimitedSkip') => {

        let that = this;

        let { premium } = this.state || [];
        let { subscribers, best } = premium || []

        var html = [];

        if (what === 'Subscribers') {

            if (isEmpty(subscribers))
                return false;

            Object.keys(subscribers).map((elem) => {

                let { email, name, plan } = subscribers[elem];

                let award = <img src={(plan === 'UnlimitedSkip' ? 'https://shrink-service.it/png/premium/skip.png' : 'https://shrink-service.it/png/premium/exclusive.png')} style={{}} />
                let anchor = <a href={"https://www.social-searcher.com/google-social-search/?q=" + name.replace(/\s/g, '+') + "&fb=on&tw=on&in=on&tt=on&li=on&pi=on"} className="header" style={{ overflow: "hidden", textOverflow: "ellipsis", color: "rgba(0,0,0,.6)" }}>{name}</a>

                html.push(

                    <div key={elem} className="sixteen wide column item" style={{ overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap", padding: "7px 15px 7px 15px" }}>
                        <h5 className="ui header">
                            {award}
                            <div className="content">
                                <span><small style={{ fontWeight: "100", color: "#c9c9c9" }}>{(plan === 'UnlimitedSkip' ? 'BASIC' : 'EXCLUSIVE') + " PLAN".toUpperCase()}</small></span> <br />
                                {anchor}
                                <div className="sub header" style={{ overflow: "hidden", textOverflow: "ellipsis" }}>{email}</div>
                            </div>
                        </h5>
                    </div>

                );
            });

        } else if (what === 'UnlimitedSkip' && !isEmpty(best) && best.hasOwnProperty(what)) {

            Object.keys(best[what]).map((elem) => {

                let { email, name, amount } = best[what][elem];

                let award = this.print_awards(elem);
                let anchor = <a href={"https://www.social-searcher.com/google-social-search/?q=" + name.replace(/\s/g, '+') + "&fb=on&tw=on&in=on&tt=on&li=on&pi=on"} className="header" style={{ overflow: "hidden", textOverflow: "ellipsis", color: "rgba(0,0,0,.6)" }}>{name}</a>

                html.push(

                    <div key={elem} className="sixteen wide column item" style={{ overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap", padding: "7px 15px 7px 15px" }}>
                        <h5 className="ui header">
                            {award}
                            <div className="content">
                                <span><small style={{ fontWeight: "100", color: "#c9c9c9" }}>{"BASIC PLAN".toUpperCase()}</small></span> <br />
                                {anchor}
                                <div className="sub header" style={{ overflow: "hidden", textOverflow: "ellipsis" }}>{email}</div>
                            </div>
                        </h5>
                    </div>

                );
            });

        } else if (what === 'ExclusiveContent' && !isEmpty(best) && best.hasOwnProperty(what)) {

            Object.keys(best[what]).map((elem) => {

                let { email, name, amount } = best[what][elem];

                let award = this.print_awards(elem);
                let anchor = <a href={"https://www.social-searcher.com/google-social-search/?q=" + name.replace(/\s/g, '+') + "&fb=on&tw=on&in=on&tt=on&li=on&pi=on"} className="header" style={{ overflow: "hidden", textOverflow: "ellipsis", color: "rgba(0,0,0,.6)" }}>{name}</a>

                html.push(

                    <div key={elem} className="sixteen wide column item" style={{ overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap", padding: "7px 15px 7px 15px" }}>
                        <h5 className="ui header">
                            {award}
                            <div className="content">
                                <span><small style={{ fontWeight: "100", color: "#c9c9c9" }}>{"EXCLUSIVE PLAN".toUpperCase()}</small></span> <br />
                                {anchor}
                                <div className="sub header" style={{ overflow: "hidden", textOverflow: "ellipsis" }}>{email}</div>
                            </div>
                        </h5>
                    </div>

                );
            });

        }

        if (isEmpty(html)) {

            html.push(
                <React.Fragment>
                    <div className="sixteen wide column">
                        <div className="ui placeholder">
                            <div className="image header">
                                <div className="line"></div>
                                <div className="line"></div>
                            </div>
                        </div>
                    </div>
                    <div className="sixteen wide column">
                        <div className="ui placeholder">
                            <div className="image header">
                                <div className="line"></div>
                                <div className="line"></div>
                            </div>
                        </div>
                    </div>
                    <div className="sixteen wide column">
                        <div className="ui placeholder">
                            <div className="image header">
                                <div className="line"></div>
                                <div className="line"></div>
                            </div>
                        </div>
                    </div>
                </React.Fragment>
            );

        }

        return html;
    }

    render() {

        let username = getNestedObj(() => this.props.u.username);

        let { premium } = this.state || [];
        let { subnumber, monthincome } = premium || 0;

        let pages = (parseInt(subnumber) / 10).toFixed(0);

        return (
            <React.Fragment>
                <div className="ui red segments">
                    <div className="ui secondary segment">

                        <div className="ui bottom attached active tab" data-tab="second" style={{ marginBottom: "10px" }}>
                            <h3 className="ui header">
                                <img src="https://shrink-service.it/png/premium/skip.png" />
                                <div className="content">
                                    Top Supporters - Basic Plan
                                    <div className="sub header">Do you want to appear here?<br /><b>Support this user</b> </div>
                                </div>
                            </h3>
                        </div>
                        <div className="ui bottom attached tab" data-tab="third" style={{ marginBottom: "10px" }}>
                            <h3 className="ui header">
                                <img src="https://shrink-service.it/png/premium/exclusive.png" />
                                <div className="content">
                                    Top Supporters - Exclusive Plan
                                    <div className="sub header">Do you want to appear here?<br /><b>Support this user</b> </div>
                                </div>
                            </h3>
                        </div>
                        <div className="ui bottom attached center aligned tab" data-tab="first" style={{ marginBottom: "10px" }}>
                            <div className="ui segment basic center aligned">
                                <div className="ui mini statistics">
                                    <div className="mini statistic" style={{ margin: "0px auto" }}>
                                        <div className="value">
                                            {subnumber}
                                        </div>
                                        <div className="label" style={{ color: '#c9c9c9' }}>
                                            Supporters
                                        </div>
                                    </div>
                                    <div className="mini statistic" style={{ margin: "0px auto" }}>
                                        <div className="value">
                                            {"€ " + parseInt(monthincome).toFixed(0)}
                                        </div>
                                        <div className="label" style={{ color: '#c9c9c9' }}>
                                            Per Month
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {_adshrink.enabled.premium &&
                            <p><a href="#" id="support-button-user" className="ui primary button fluid"><i className="gem icon"></i> <b>Level Up to Pro for only $2.38/month!</b></a></p>
                        }

                    </div>

                    <div className="ui segment" id="content-segment-subscriptions" style={{ padding: "5px 0px 20px" }}>
                        <div className="ui pointing secondary menu" id="premium_tab">
                            <a className="active item" data-tab="second">{"Basic "}</a>
                            <a className="item" data-tab="third">{"Hero "}</a>
                            <a className="item" data-tab="first">{"Subscribers "}</a>
                        </div>

                        <div className="ui bottom attached active tab" data-tab="second">
                            <div className="ui grid stackable" style={{ padding: "15px 20px 20px" }}>
                                {this.print_list('UnlimitedSkip')}
                            </div>
                        </div>
                        <div className="ui bottom attached tab" data-tab="third">
                            <div className="ui grid stackable" style={{ padding: "15px 20px 20px" }}>
                                {this.print_list('ExclusiveContent')}
                            </div>
                        </div>
                        <div className="ui bottom attached tab" data-tab="first">
                            <div className="ui grid stackable" style={{ padding: "15px 20px 20px" }}>
                                {this.print_list('Subscribers')}
                            </div>

                            <div className="ui bottom right attached label"><i className="angle left icon" style={{ marginRight: "10px" }} onClick={(e) => this.change_subscribers_page(e, 'left')}></i> <i className="file outline icon" style={{ margin: "0px" }}></i> <i className="angle right icon" style={{ marginLeft: "10px" }} onClick={(e) => this.change_subscribers_page(e, 'right')}></i></div>

                        </div>
                    </div>

                </div>
            </React.Fragment>
        );

    }
}

class LastLinks extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            links: []
        }

    }

    componentDidMount() {
        if (!isEmpty(getNestedObj(() => this.props.u.id)))
            this.search_links();

    }

    shouldComponentUpdate(nextProps, nextState) {
        if (nextState !== this.state)
            return true;
        if (nextProps !== this.props)
            return true;
        return false;
    }

    componentDidUpdate(nextProps, nextState) {
        if (nextProps.u !== this.props.u) {

            if (!isEmpty(getNestedObj(() => this.props.u.id)))
                this.search_links();

        }
    }

    search_links = () => {

        const that = this;

        let { u } = this.props || false;
        let { id, userid } = u || false;

        let { links } = this.state || [];

        if (!isEmpty(links))
            return false;

        $.post('https://www.shrink-service.it/v2/public/api/prototype/last/u/' + userid + '/' + id).then((res) => {

            if (res.success)
                that.setState({ links: res.data });

        });

    }

    get_meta = (title, meta, domain) => {

        var cardData = { title: title, description: '', image: '', icon: ___reactjsD.favicon + domain };

        if (meta === 'empty' || isEmpty(meta))
            return { title: 'AdShrink.it - Unnamed', description: 'No description available..', image: '', icon: ___reactjsD.favicon + domain };

        if (!isEmpty(meta) && typeof meta === 'string')
            meta = JSON.parse(meta);

        if (meta.hasOwnProperty('description')) {
            cardData.description = meta.description;

            const element_cut_dest = (cardData.description.length > 150 ? (cardData.description.substring(0, 150) + '... [continue]') : cardData.description);
            cardData.description = decodeHtml(element_cut_dest);
        } else if (meta.hasOwnProperty('og:description')) {
            cardData.description = meta['og:description'];

            const element_cut_dest = (cardData.description.length > 150 ? (cardData.description.substring(0, 150) + '... [continue]') : cardData.description);
            cardData.description = decodeHtml(element_cut_dest);
        } else if (meta.hasOwnProperty('twitter:description')) {
            cardData.description = meta['twitter:description'];

            const element_cut_dest = (cardData.description.length > 150 ? (cardData.description.substring(0, 150) + '... [continue]') : cardData.description);
            cardData.description = decodeHtml(element_cut_dest);
        }

        if (meta.hasOwnProperty('title')) {
            cardData.title = meta.title;
        } else if (meta.hasOwnProperty('og:title')) {
            cardData.title = meta['og:title'];
        } else if (meta.hasOwnProperty('twitter:title')) {
            cardData.title = meta['twitter:title'];
        }

        if (meta.hasOwnProperty('image')) {
            cardData.image = meta.image;
        } else if (meta.hasOwnProperty('og:image')) {
            cardData.image = meta['og:image'];
        } else if (meta.hasOwnProperty('twitter:image')) {
            cardData.image = meta['twitter:image'];
        }

        if (meta.hasOwnProperty('icon')) {
            cardData.icon = meta['icon'];
        }

        return cardData;

    }

    print_extension_icon = (e) => {

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

    print_list = (where = 'state') => {

        let that = this;

        let links = [];

        if (where === 'state')
            links = getNestedObj(() => this.state.links) || [];
        else if (where === 'props')
            links = getNestedObj(() => this.props.lastlinks.data) || [];

        var html = [];

        Object.keys(links).map((elem) => {

            let { artcode, id, meta, title, domain, ext } = links[elem];

            let meta_dec = that.get_meta(title, meta, domain);

            html.push(

                <div key={elem} className="four wide column item" style={{ overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>
                    <h5 className="ui header">
                        <img className="lazy" alt="icon" data-src={meta_dec.icon} />
                        <div className="content">
                            <span><small style={{ fontWeight: "100", color: "#c9c9c9" }}>{domain.toUpperCase()}</small></span> <br />
                            <a href={___reactjsD.host + "/" + artcode} style={{ overflow: "hidden", textOverflow: "ellipsis", color: "rgba(0,0,0,.6)" }}>{this.print_extension_icon(ext)} {title + " "}</a><i className="external square alternate icon"></i>
                            <div className="sub header" style={{ overflow: "hidden", textOverflow: "ellipsis" }}>{meta_dec.description}</div>
                        </div>
                    </h5>
                </div>

            );
        });

        if (isEmpty(html)) {

            html.push(
                <React.Fragment>
                    <div className="four wide column item" style={{ overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>
                        <div className="ui placeholder">
                            <div className="image header">
                                <div className="line"></div>
                                <div className="line"></div>
                            </div>
                        </div>
                    </div>
                    <div className="four wide column item" style={{ overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>
                        <div className="ui placeholder">
                            <div className="image header">
                                <div className="line"></div>
                                <div className="line"></div>
                            </div>
                        </div>
                    </div>
                    <div className="four wide column  item" style={{ overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>
                        <div className="ui placeholder">
                            <div className="image header">
                                <div className="line"></div>
                                <div className="line"></div>
                            </div>
                        </div>
                    </div>
                    <div className="four wide column  item" style={{ overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>
                        <div className="ui placeholder">
                            <div className="image header">
                                <div className="line"></div>
                                <div className="line"></div>
                            </div>
                        </div>
                    </div>
                </React.Fragment>
            );

        }


        return html;

    }

    render() {

        return (
            <div className="ui grid stackable" style={{ paddingRight: '10px' }}>
                {this.print_list('props')}
            </div>
        );

    }
}

class RenderUpdated extends React.Component {
    constructor(props) {
        super(props);

        this.state = {

        }
    }

    componentDidMount() {

    }

    on_update = () => {
        setTimeout(function () {
            window.lazyLoadInstance.update();
            $script('https://z-na.amazon-adsystem.com/widgets/onejs?MarketPlace=US&adInstanceId=ee77c3c5-b9e7-4fe5-9138-dfcf9b59e5ad', 'aws');
        }, 500);

        return <updated></updated>;
    }

    render() {
        return (
            <upixel>{this.on_update()}</upixel>
        )
    }
}

class Wikipedia extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            wiki_result: [],
            wiki_errors: [],
            whois: [],
            updated: 0
        }
    }

    update_db = (wiki) => {
        let { search, host, description, u } = this.props || false;
        let { id, userid } = u || false;

        let data = { wiki: JSON.stringify(wiki), referrer: getNestedObj(() => window.document.referrer) };

        if (host)
            data = { ...data, domain: search }

        $.post('https://www.shrink-service.it/v3/public/api/prototype/wiki/u/' + userid + '/' + id, data);
    }

    search_on_wiki = (desc = false) => {

        let { host, description, u } = this.props || false;
        let { id, userid } = u || false;

        const that = this;

        let srsearch = this.props.search || 'Naruto';

        if (!isEmpty(this.state.wiki_result))
            return false;

        if (host) {
            srsearch = srsearch.replace('.', '') + " " + srsearch;

            this.whois_scan();

        } else {

            if (desc)
                srsearch = findMostRepeatedWord(description);
            else
                srsearch = findMostRepeatedWord(srsearch);
        }

        var url = "https://en.wikipedia.org/w/api.php";

        var params = {
            action: "query",
            list: "search",
            srsearch: srsearch,
            format: "json",
            srlimit: (host ? 1 : 5),
        };

        url = url + "?origin=*";
        Object.keys(params).forEach(function (key) { url += "&" + key + "=" + params[key]; });

        var wiki_result = [];

        $.get(url).then((response) => {
            let result = response;

            let search = getNestedObj(() => result.query.search);

            if (!isEmpty(search)) {
                wiki_result = search;

                that.update_db(wiki_result);

                that.setState({ wiki_result: search });
            } else {

                srsearch = findMostRepeatedWord(description);

                let srmostfreq = sortByFrequency((description).split(" "));

                srsearch = srmostfreq[0] + " " + srmostfreq[1];

                params = {
                    action: "query",
                    list: "search",
                    srsearch: srsearch,
                    format: "json",
                    srlimit: (host ? 1 : 5),
                };

                url = "https://en.wikipedia.org/w/api.php";
                url = url + "?origin=*";

                Object.keys(params).forEach(function (key) { url += "&" + key + "=" + params[key]; });

                $.get(url).then((response) => {
                    let result = response;

                    let search = getNestedObj(() => result.query.search);

                    if (!isEmpty(search)) {
                        wiki_result = search;

                        that.update_db(wiki_result);

                        that.setState({ wiki_result: search });
                    }


                }).catch((error) => {
                    console.warn('wikipedia', error);

                    that.setState({ wiki_errors: error });

                });

            }


        }).catch((error) => {
            console.warn('wikipedia', error);

            that.setState({ wiki_errors: error });

        });


    }

    whois_scan = () => {

        const that = this;

        const { host, search } = this.props || false;

        return false;

        $.get('https://lookup.icann.org/api/whois?q=' + search).then((response) => {
            console.log('whois', response);
            that.setState({ whois: response });
        });



    }

    print_list = () => {


        const { host, u } = this.props || false;
        const { wiki_result, wiki_errors, updated } = this.state || [];
        const { id, userid } = u || false;

        let html = [];

        Object.keys(wiki_result).map((wiki) => {
            let { ns, pageid, size, snippet, timestamp, title, wordcount } = wiki_result[wiki];

            snippet = snippet.replace(/<(\/*)span[^>]*>/g, '<$1b>');

            let icon = (host ? ___reactjsD.favicon + this.props.search : ___reactjsD.favicon + 'adshrink.it');

            if (!host) {
                html.push(
                    <React.Fragment>

                        <div className="title">
                            <i className="dropdown icon"></i>
                            {title}
                        </div>

                        <div className="content" dangerouslySetInnerHTML={{ __html: snippet }}></div>

                    </React.Fragment>
                );
            } else if (host) {
                html.push(
                    <React.Fragment>
                        <div className="ui segments" id="wiki_hostname_info">
                            <div className="ui segment">

                                <h2 className="ui header">
                                    <div className="content">
                                        <span><img alt="icon" className="lazy" width="20" data-src={icon} /> {title} <small style={{ color: '#c9c9c9' }}>Product/Service</small></span>
                                        <div className="sub header" dangerouslySetInnerHTML={{ __html: snippet }}></div>
                                    </div>
                                </h2>

                            </div>
                            <div className="ui secondary segment">
                                <p><i className="info circle icon"></i> {language.new.wikipedia[1]} <a href={"https://it.wikipedia.org/wiki/" + title} >Wikipedia</a> (<a href="https://creativecommons.org/licenses/by-sa/3.0/" target="_blank">Creative Commons</a>)</p>
                            </div>
                            <div className="ui segment">
                                {getNestedObj(() => this.props.html_lastlinks)}
                            </div>
                            <div className="ui secondary segment small">
                                <p><i className="external square alternate icon"></i> {language.new.lastlinks[0]}</p>
                            </div>
                        </div>

                    </React.Fragment>
                );
            }

        });

        if (isEmpty(html)) {

            if (!host) {

                html.push(
                    <React.Fragment>
                        <div className="title">
                            <i className="dropdown icon"></i>
                            <div className="ui placeholder">
                                <div className="paragraph">
                                    <div className="line"></div>
                                    <div className="line"></div>
                                </div>
                            </div>
                        </div>

                        <div className="content">
                            <div className="content"><p>Empty</p></div>
                        </div>
                    </React.Fragment>
                )

            } else if (host) {
                html.push(
                    <div className="ui segments">
                        <div className="ui secondary segment small">
                            <h2 className="ui header">
                                <div className="content">
                                    <span>Popular <small style={{ color: '#c9c9c9' }}>Content/Link</small></span>
                                </div>
                            </h2>
                        </div>
                        <div className="ui segment">
                            {getNestedObj(() => this.props.html_lastlinks)}
                        </div>
                        <div className="ui secondary segment small">
                            <p><i className="external square alternate icon"></i> {language.new.lastlinks[0]}</p>
                        </div>
                    </div>
                )
            }

        }

        html.push(<RenderUpdated />);

        return html;
    }

    componentDidMount() {
        if (this.props.search) {
            this.search_on_wiki();

        }
    }

    shouldComponentUpdate(nextProps, nextState) {
        if (nextState !== this.state)
            return true;
        if (nextProps !== this.props)
            return true;
        return false;
    }

    componentDidUpdate(nextProps, nextState) {
        if (nextProps.search !== this.props.search) {
            this.search_on_wiki();

        }
    }

    render() {

        const { host } = this.props || false;

        return (
            <div>
                {!host &&
                    <div className="ui segments" id="wiki_related_content">
                        <div className="ui secondary segment">
                            <p><i className="wikipedia w icon"></i> <b>{language.new.wikipedia[0]}</b></p>
                        </div>
                        <div className="ui segment">
                            <div className="ui fluid accordion" id="wikipedia">
                                {this.print_list()}
                            </div>
                        </div>
                        <div className="ui secondary segment">
                            <p><i className="info circle icon"></i> {language.new.wikipedia[1]} <a href={"https://it.wikipedia.org"} >Wikipedia</a> (<a href="https://creativecommons.org/licenses/by-sa/3.0/" target="_blank">Creative Commons</a>)</p>
                        </div>
                    </div>
                }
                {host &&
                    this.print_list()
                }

            </div>
        );
    }

}

function capitalizeFirstLetter(string, n) {
    let a = string.charAt(0).toUpperCase() + string.slice(1);
    return a.substr(a, n);
}

function shuffle(a) {
    for (let i = a.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
}

function makeid(length, predigit = false, postdigit = false) {
    var predigit = Math.floor(Math.random() * 100000);
    var result = '';
    var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    var charactersLength = characters.length;
    for (var i = 0; i < length; i++) {
        result += characters.charAt(Math.floor(Math.random() *
            charactersLength));
    }
    if (predigit)
        return predigit + "XXXX" + result + (postdigit ? ("XXXX" + postdigit) : "");
    return result;
}

class ComponentComplete extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            user: [],
            oauth: [],
        }

        this.onAuthGoogle = this.onAuthGoogle.bind(this);

        this.getUsername = this.getUsername.bind(this);

        this.getTitle = this.getTitle.bind(this);
        this.getMeta = this.getMeta.bind(this);
        this.getImage = this.getImage.bind(this);
        this.getDestination = this.getDestination.bind(this);
        this.getLikes = this.getLikes.bind(this);
        this.getSecure = this.getSecure.bind(this);
        this.getFromNow = this.getFromNow.bind(this);
        this.getType = this.getType.bind(this);


        this.sys_var = {};


    }

    componentDidMount() {

        $('.basic-inverted-popup').popup();
        /**
         * disqus count
         */
        var d = document, s = d.createElement('script');
        s = d.createElement('script');
        s.src = 'https://adsh.disqus.com/count.js';
        s.id = 'dsq-count-scr';
        (d.body).appendChild(s);
    }

    shouldComponentUpdate(nextProps, nextState) {
        if (nextProps !== this.props) {
            return true;
        } if (nextState.user !== this.state.user) {
            return true;
        } if (nextState.oauth !== this.state.oauth) {
            return true;
        } return false;
    }

    componentDidUpdate(nextProps, nextState) {
        if (nextProps.data !== this.props.data) {

        } if (nextProps.user !== this.props.user) {
            this.setState({ user: this.props.user });

        }
    }

    onAuthGoogle(google_user) {
        ___reactjsD.auth2 = google_user;

        alert(JSON.stringify(google_user));

        const signed = getNestedObj(() => ___reactjsD.auth2.isSignedIn()) || false;
        const oauth = { signed: signed, google_user: ___reactjsD.auth2 };

        this.setState({ oauth });
    }

    getUsername() {
        const { username } = getNestedObj(() => this.state.user) || 'AdShrink Private User';

        return username;
    }

    getTitle() {
        const { title } = this.props.data || [];

        return decodeHtml(title ?? 'This link has no title..');
    }

    getMeta() {
        const { metadata } = this.props.data || [];

        var meta = metadata;

        var cardData = { title: this.getTitle(), description: '', image: '' };

        if (meta === 'empty' || isEmpty(meta))
            return { title: 'AdShrink.it - Unnamed', description: 'No description available..', image: '' };

        meta = JSON.parse(metadata);

        if (meta.hasOwnProperty('description')) {
            cardData.description = meta.description;

            const element_cut_dest = (cardData.description.length > 150 ? (cardData.description.substring(0, 150) + '... [continue]') : cardData.description);
            cardData.description = decodeHtml(element_cut_dest);
        } else if (meta.hasOwnProperty('og:description')) {
            cardData.description = meta['og:description'];

            const element_cut_dest = (cardData.description.length > 150 ? (cardData.description.substring(0, 150) + '... [continue]') : cardData.description);
            cardData.description = decodeHtml(element_cut_dest);
        } else if (meta.hasOwnProperty('twitter:description')) {
            cardData.description = meta['twitter:description'];

            const element_cut_dest = (cardData.description.length > 150 ? (cardData.description.substring(0, 150) + '... [continue]') : cardData.description);
            cardData.description = decodeHtml(element_cut_dest);
        }

        if (meta.hasOwnProperty('title')) {
            cardData.title = meta.title;
        } else if (meta.hasOwnProperty('og:title')) {
            cardData.title = meta['og:title'];
        } else if (meta.hasOwnProperty('twitter:title')) {
            cardData.title = meta['twitter:title'];
        }

        if (meta.hasOwnProperty('image')) {
            cardData.image = meta.image;
        } else if (meta.hasOwnProperty('og:image')) {
            cardData.image = meta['og:image'];
        } else if (meta.hasOwnProperty('twitter:image')) {
            cardData.image = meta['twitter:image'];
        }

        return cardData;

    }

    getImage() {
        const image = getNestedObj(() => getMeta().image);

        if (!image)
            return "https://www.shrink-service.it/png/search/preview_one.png";

        return image;
    }

    getDestination() {
        //const element_cut_dest = (description.length > 150 ? (description.substring(0, 150) + '... [continue]') : description );
    }

    getLikes() {

        var { likes } = getNestedObj(() => this.props.data) || [];

        if (!isEmpty(likes))
            likes = JSON.parse(likes);

        const { like, dislike } = likes || 0;

        //console.log(likes, like, dislike);

        var difference = (parseInt(like) - parseInt(dislike));

        if (difference > 0)
            return difference.toString();

        return 0;

    }

    get_views = () => {
        var { views } = getNestedObj(() => this.props.data) || [];

        views = parseInt(views);

        if (views < 1)
            views = 0;

        return views;
    }

    get_host = () => {
        var uri = decodeHtml(getNestedObj(() => this.props.data.destination)) || 'https://adshrink.it/';

        if (isEmpty(uri) || typeof uri === 'undefined')
            return 'adshrink';

        try {

            uri = new URL(uri);

        } catch (error) {

            return 'adshrink'

        }

        return uri.hostname;

    }

    getSecure() {
        var uri = decodeHtml(getNestedObj(() => this.props.data.destination)) || 'https://adshrink.it/';

        if (isEmpty(uri) || typeof uri === 'undefined')
            return (
                <React.Fragment>
                    <small>
                        <i className={"icon warning"} style={{ color: "red" }} ></i>
                        <hjsx style={{ color: "red" }}>{'ERROR'}</hjsx>
                    </small>
                </React.Fragment>
            );

        try {

            uri = new URL(uri);

        } catch (error) {

            return (
                <React.Fragment>
                    <small>
                        <i className={"icon exclamation triangle"} style={{ color: "red" }} ></i>
                        <hjsx style={{ color: "red" }}>{'ERROR'}</hjsx>
                    </small>
                </React.Fragment>
            );

        }

        return (
            <React.Fragment>
                <small>
                    <i className={"icon " + (uri.protocol === 'https:' ? "lock" : "unlock")} style={(uri.protocol === 'https:' ? { color: "#13dc74" } : { color: "#ffb700" })} ></i>
                    <hjsx style={(uri.protocol === 'https:' ? { color: "#13dc74" } : { color: "#ffb700" })}>{(uri.protocol === 'https:' ? 'SECURE' : 'WARNING')}</hjsx>
                    <hjsx>{" " + uri.protocol + "//" + uri.host + uri.href.replace(uri.origin, '').substring(0, (uri.href.replace(uri.origin, '').length / 3)) + "... "}</hjsx>
                </small>
            </React.Fragment>
        );
    }

    getFromNow() {
        const { time_stamp } = this.props.data || new Date();

        const onehour = 60 * 60 * 1000;

        const lasthour = <a className="ui red image label mini">
            LAST HOUR
            <div className="detail">{moment(time_stamp).fromNow()}</div>
        </a>;

        if ((new Date().getTime() - moment(time_stamp)) < onehour)
            return lasthour;

        return moment(time_stamp).fromNow();
    }

    getType() {
        const { type } = this.props || 'Normal';

        return type;

    }

    user_header = () => {

        return (
            <h3 className="ui header">
                {this.getUsername()} <small style={{ color: '#4184f3' }}>Verfied</small>
                <div className="sub header">Created <b>{this.getFromNow()}</b> <small><a href={"https://adshrink.it/search?user=" + this.getUsername()} >See all links <i data-variation="basic inverted mini" data-position="top center" data-inverted="" data-content={"Adshrink.it Search Engine - " + this.getUsername() + " links"} className="info circle icon small basic-inverted-popup"></i></a></small></div>
            </h3>
        );

    }

    render() {
        const { data, type, basic, form_factor } = getNestedObj(() => this.props) || [];
        const { id, userid } = data || 0;

        const no_image_available = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAARAAAAC6CAMAAABRJOIbAAAAMFBMVEXm6Of////4+fnw8fHo6unt7u38/Pzk5uXz9PPw8vHx8/L3+Pfn6Oj7+vvt7+39/v2JQ8GPAAACH0lEQVR4nO3a0VLDIBCFYaALJKW27/+2AkkaQtR6VRz3/+6Io4NnFggQYwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAN5CfNa3KxnWp6Emm92fTe/sJswDuzXOtf7zl7XlbWsa2rNBxDWJ3MIhEOtf/PK/dPvYE5mPeVg3unNDSFrGh4h0BVJKRBajO/lWayIuuT4PG9Jq0hOJ+C2RH4X76z/1P7g8ffwmEaukRspCO5dYXlKyCJeFJcj6grYNj+wciJIlZ14qZE8kTD6vKn4+1YySQC7LYHjWSHj+xAe1gdjp4qYtkSQ1HmP6qVZTIDWUuCbirim4+t5xc5oDsaltLJVy2NuoC6QkMnUB9G0F2qLwx2ZefOShOpAybzQb3vJ64lQHUh9c90ByxSTNgYRoJK8u+6mZb+PRGEg5P3PNI3+YVfUFUuaQZJ2Y++M5h6geMqUi8ngpiWxzSHuGpjCQ/CJSSsKZeFlLpD2FVxhIPWVPJYi47uyc8kBc2djljX+ePfzDdjQGUjcwRqRcY/a7f52BWLffTfWXEjoDsWGSmB9HMbEbNUoDKZm4lIJ9+HisESWB+HMgWy5yTCSN7up7nK8v90SOL2Zabr5Pq0mbSFMjSq5lMv/9td1eI0FLfby2fkCi83OiLx0+qYGhRr5QEwlxdDf+juVbzdG9AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAIb6BG0BCzA/r/PHAAAAAElFTkSuQmCC";
        const no_user_image_available = "https://adshrink.it/wp-content/uploads/apps/nouser.jpg";

        //console.log(5888, data, this.get_host());

        /*
        <div className="ui segment basic custom-padding-seg" >
            <Wikipedia u={{id, userid}} search={ this.getTitle() } description={ getNestedObj(() => this.getMeta().description ) } />
        </div>
        */

        return (

            <React.Fragment>

                <style>{" \
                #centered_card_shrink_data { width: 330px !important; z-index: 10 !important; } \
                .top-m { margin-top: 5px !important; } \
            "}</style>

                <div id="after_the_b_g"></div>
                <ErrorBoundary>{true === true && _adshrink?.enabled?.adsenseFull && <AdsenseBanner size={'medium_rectangle_responsive'} />}<TaboolaBanner size="Mid_Article_3X1" /></ErrorBoundary>

                <div className="ui segment basic custom-padding-seg">
                    {/* title, description , other */}
                    <div className="ui segments">
                        <div className="ui secondary segment">
                            <p><i className="heading icon"></i> <b>{this.getTitle()}</b></p>
                        </div>
                        <div className="ui segment">
                            <div className="ui grid">
                                <div className="six wide computer eight wide tablet sixteen wide mobile column">
                                    {getNestedObj(() => this.getMeta().description)}
                                </div>
                                <div className="ten wide computer eight wide tablet sixteen wide mobile column">
                                    {form_factor === 'Smartphone' &&
                                        <ErrorBoundary><TaboolaBanner size={'Mid_Article_Reco_Reel_2'} /></ErrorBoundary>
                                    }
                                    {/** prima stava qui adsense */}
                                </div>
                            </div>
                        </div>
                        <div className="ui secondary segment">
                            <p>{this.getSecure()}</p>
                        </div>
                    </div>
                </div>

                <div className="ui segment basic custom-padding-seg">
                    <Wikipedia html_lastlinks={getNestedObj(() => this.props.html_lastlinks)} u={{ id, userid }} search={this.get_host()} description={getNestedObj(() => this.getMeta().description)} host={true} />
                </div>

                <div className="ui segment basic custom-padding-seg" >
                    {this.props?.html_disqus}
                </div>

            </React.Fragment>
        );

    }


}

class LastNews extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            rendered: false,
            fetching: false,
            news: []
        }

        this._is_mounted = false;
    }

    getInitialState = () => {
        return {
            blockCount: 0
        };
    }

    addNewBloc = () => {
        this.setState({
            blockCount: this.state.blockCount + 1
        });
    }

    componentDidMount() {

    }

    shouldComponentUpdate(nextProps, nextState) {
        if (nextState !== this.state)
            return true;
        if (nextProps !== this.props)
            return true;
        return false;

    }

    componentDidUpdate(nextProps, nextState) {


    }

    print_list = (where = 'state') => {

        let html = [];
        let news = [];

        if (where === 'state') {
            news = getNestedObj(() => this.state.news, []) || [];
        }
        else if (where === 'props') {
            news = getNestedObj(() => this.props.news.data, []) || [];
        }

        let { dev } = this.props || 'Smartphone';

        let desktop_tablet = (dev === 'Desktop' || dev === 'Tablet' ? true : false);

        Object.keys(news).map((element) => {

            let { author, description, publishedAt, source, title, url, urlToImage } = news[element];
            let { id, name } = source || 'Unknown';

            let len_title = parseInt(getNestedObj(() => title.length)) || 0;
            let len_description = parseInt(getNestedObj(() => description.length)) || 0;

            let len = len_title + len_description;
            let newdesc = (len > 190 ? description.substr(0, (175 - len_title)) : description) + " ..";

            html.push(
                <React.Fragment>
                    <div key={element} className="eight wide column item" >
                        <div className="ui basic segment">
                            <div key={element} className={"ui card " + (desktop_tablet ? 'horizontal' : '')}>
                                <div alt={title} className="image" style={(!desktop_tablet ? { width: "100%" } : { height: "180px", width: "180px" })}>
                                    <img alt={title} className="lazy" data-src={urlToImage} />
                                </div>
                                <div className="content">
                                    <div className="meta">
                                        <span className="date"><b>{name.toString().toLowerCase()}</b> <small><a>{moment(publishedAt).fromNow()}</a></small></span>
                                    </div>
                                    <a href={url} className="header newsheader">{title}</a>
                                    <div className="description">{newdesc}</div>
                                    <div className="extra">
                                        <i className="paperclip icon middle aligned small"></i>{author}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </React.Fragment>
            );

        });

        return html;

    }

    render() {

        let { vpn } = this.props || false;
        let { rendered, news } = this.state || false;

        if (!this._is_mounted)
            this._is_mounted = true;

        let cc = (getNestedObj(() => vpn.country.code).toString().toLowerCase()) || 'us';

        return (
            <React.Fragment>
                {news &&
                    <div className="ui grid stackable contaienr">
                        <div className="sixteen wide column">

                            <h2 className="ui header">
                                <i className="newspaper outline icon"></i>
                                <div className="content">
                                    <div className="sub header">{'TECHNOLOGY'}</div>
                                    {'Top Headlines'}
                                    <div className="sub header">
                                        <i className={cc + " flag"}></i> {'Latest News.'}
                                    </div>
                                </div>
                            </h2>
                        </div>

                        {this.print_list('props')}

                    </div>
                }
            </React.Fragment>
        );

    }
}

function TelegramBot(props) {

    let artcode = getNestedObj(() => window._sharedData[0].artcode) ?? '';

    let stats = props.tupdates ?? [];
    let tusers = stats.tusers ?? 0;
    let tdiamonds = stats.tdiamonds ?? 0;
    let tdiamonds_usd = stats.tdiamonds_usd ?? "0,00 $";
    let tdiamonds_tearn_usd = stats.tdiamonds_tearn_usd ?? 0;

    return (
        <React.Fragment>
            {!props.stats &&
                <p>
                    <a style={{ width: "304px" }} className="ui labeled button fluid" tabindex="0" href={"https://t.me/adshrink_bot?start=artcode-" + artcode} target="_blank">
                        <div className="ui blue button" style={{ backgroundColor: "#4184f3" }}>
                            <i className="telegram plane icon"></i> Telegram
                        </div>
                        <a className="ui basic blue left pointing label anchoreth">
                            Direct access without waiting
                        </a>
                    </a>
                </p>
            }
            {props.stats &&
                <div className="ui cards">
                    <div className="card" style={{ width: "100%" }}>
                        <div className="content">
                            <div className="header">🪙 Anchoreth (ADSH)<br /><small style={{ color: "rgba(0,0,0,.4)" }}>#1 DeFi URLs Ecosystem by Adshrink.it</small></div>
                            <div className="description">
                                We are growing very quickly, and it’s especially thanks to you!<br />📈 <b>Real-time Statistics</b> from the first season:
                                <div className="ui statistics two mini">
                                    <div className="statistic">
                                        <div className="value">
                                            {tusers}
                                        </div>
                                        <div className="label">
                                            Signups
                                        </div>
                                    </div>
                                    <div className="statistic">
                                        <div className="value">
                                            {tdiamonds_usd}
                                        </div>
                                        <div className="label">
                                            Awards Granted
                                        </div>
                                    </div>
                                    <div className="statistic">
                                        <div className="value">
                                            <i className="money bill alternate outline icon"></i> {tdiamonds_tearn_usd}
                                        </div>
                                        <div className="label">
                                            Reward Airdrop
                                        </div>
                                    </div>
                                    <div className="statistic">
                                        <div className="value">
                                            {tdiamonds} 💎
                                        </div>
                                        <div className="label">
                                            Total Diamonds
                                        </div>
                                    </div>
                                </div>
                                <small>*limited token quantity</small>
                            </div>
                        </div>
                        <a target="_blank" href="https://t.me/adshrink_bot/?start=1_action_proto" className="ui bottom attached button blue" style={{ background: "#4184f3" }} onClick={() => { ga('send', 'event', 'Anchoreth', 'prototype', 'user-click-join-button-1', 1); window.open('https://t.me/adshrink_bot/?start=1_action_proto', '_blank') }}>
                            <i className="get pocket icon"></i>
                            AIRDROP | Be part of the Crew! 🚀
                        </a>
                    </div>
                </div>
            }
        </React.Fragment>
    )
}

class GoNextOpt extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            sel_opt: 2,
            opt_focus: false,
            opt_one: false,
            opt_two: false,

            user: [],
            oauth: [],
            like: false,
            follow: false,
            save: false,
            mode: false,
            adblock: false
        }

        this.getUsername = this.getUsername.bind(this);

        this.getTitle = this.getTitle.bind(this);
        this.getMeta = this.getMeta.bind(this);
        this.getImage = this.getImage.bind(this);
        this.getDestination = this.getDestination.bind(this);
        this.getLikes = this.getLikes.bind(this);
        this.getSecure = this.getSecure.bind(this);
        this.getFromNow = this.getFromNow.bind(this);
        this.getType = this.getType.bind(this);


        this.sys_var = { oauth: false, userdata: false };
        this.interval_countdown = false;


    }

    componentDidMount() {

        if (this.props.data) {
            if (!isEmpty(this.props.basic) && !this.sys_var.oauth)
                this.get_actions();

        } if (this.props.basic && !this.sys_var.oauth) {
            this.get_actions();
        } if (this.props.user) {
            this.setState({ user: this.props.user });
        }

        let mode = getNestedObj(() => this.props.opt, "?");

        console.log('componentDidMount-GONEXTOPT', this.props.on_choose_opt());

        /** event */  ga('send', 'event', 'Page', 'opt_mode', (mode == 'opt' ? 'taboola+forced_searches' : 'taboola+searches'), 100);

    }

    shouldComponentUpdate(nextProps, nextState) {
        if (nextProps !== this.props) {
            return true;
        } if (nextState.user !== this.state.user) {
            return true;
        } if (nextState.like !== this.state.like || nextState.save !== this.state.save || nextState.follow !== this.state.follow) {
            return true;
        } if (nextState.mode !== this.state.mode) {
            return true;
        } if (nextState.adblock !== this.state.adblock) {
            return true;
        } if (nextState.opt_one !== this.state.opt_one || nextState.opt_two !== this.state.opt_two || nextState.opt_focus !== this.state.opt_focus) {
            return true;
        } return false;
    }

    componentDidUpdate(nextProps, nextState) {

        if (nextProps.data !== this.props.data) {
            if (!isEmpty(this.props.basic) && !this.sys_var.oauth)
                this.get_actions();

        } if (nextProps.basic !== this.props.basic && !this.sys_var.oauth) {
            this.get_actions();
        } if (nextProps.user !== this.props.user) {
            this.setState({ user: this.props.user });
        } if (nextState.opt_one !== this.state.opt_one || nextState.opt_two !== this.state.opt_two) {
            if (this.state.opt_one && this.state.opt_two) {
                this.select_mode('opt_freemium');
            }
        } if (nextState.opt_focus !== this.state.opt_focus) {

        }
    }

    get_actions = () => {

        let { id, userid } = getNestedObj(() => this.props.data);

        if (isEmpty(id) || isEmpty(userid))
            return false;

        let basics = this.get_google_user();

        let that = this;

        $.post('https://www.shrink-service.it/v2/public/api/prototype/past/u/' + userid + '/' + id, { oauth_user: { id: basics.id, name: basics.name, email: basics.email } }).then((res) => {

            if (res.success)
                that.setState({ ...res.data })
            if (getNestedObj(() => res.award.success)) {
                $('#label_collected_points').text('You have ' + getNestedObj(() => res.award.points) + ' points');
                window.award = true;
            }

        });

        this.sys_var.oauth = true;

    }

    getUsername() {
        const { username } = getNestedObj(() => this.state.user) || 'AdShrink Private User';

        return username;
    }

    getSensitive() {
        const { permissions } = getNestedObj(() => this.state.user) || 'FreeSignupUser';

        return (permissions === 'FreeSignupUser' ? true : false);
    }

    getTitle() {
        const { title } = this.props.data || [];

        return decodeHtml(title);
    }

    getMeta() {
        const { metadata } = this.props.data || [];

        var meta = metadata;

        var cardData = { title: this.getTitle(), description: '', image: '' };

        if (meta === 'empty' || isEmpty(meta))
            return { title: 'AdShrink.it - Unnamed', description: 'No description available..', image: '' };

        meta = JSON.parse(metadata);

        //console.log('meta', meta);

        if (meta.hasOwnProperty('description')) {
            cardData.description = meta.description;

            const element_cut_dest = (cardData.description.length > 150 ? (cardData.description.substring(0, 150) + '... [continue]') : cardData.description);
            cardData.description = decodeHtml(element_cut_dest);
        } else if (meta.hasOwnProperty('og:description')) {
            cardData.description = meta['og:description'];

            const element_cut_dest = (cardData.description.length > 150 ? (cardData.description.substring(0, 150) + '... [continue]') : cardData.description);
            cardData.description = decodeHtml(element_cut_dest);
        } else if (meta.hasOwnProperty('twitter:description')) {
            cardData.description = meta['twitter:description'];

            const element_cut_dest = (cardData.description.length > 150 ? (cardData.description.substring(0, 150) + '... [continue]') : cardData.description);
            cardData.description = decodeHtml(element_cut_dest);
        }

        if (meta.hasOwnProperty('title')) {
            cardData.title = meta.title;
        } else if (meta.hasOwnProperty('og:title')) {
            cardData.title = meta['og:title'];
        } else if (meta.hasOwnProperty('twitter:title')) {
            cardData.title = meta['twitter:title'];
        }

        if (meta.hasOwnProperty('image')) {
            cardData.image = meta.image;
        } else if (meta.hasOwnProperty('og:image')) {
            cardData.image = meta['og:image'];
        } else if (meta.hasOwnProperty('twitter:image')) {
            cardData.image = meta['twitter:image'];
        }

        return cardData;

    }

    getImage() {
        const image = getNestedObj(() => this.getMeta().image);

        if (!image)
            return "https://www.shrink-service.it/png/search/preview_one.png";

        return image;
    }

    getDestination() {
        //const element_cut_dest = (description.length > 150 ? (description.substring(0, 150) + '... [continue]') : description );
    }

    getLikes() {

        var { likes } = getNestedObj(() => this.props.data) || [];

        if (!isEmpty(likes))
            likes = JSON.parse(likes);

        const { like, dislike } = likes || 0;

        //console.log(likes, like, dislike);

        var difference = (parseInt(like) - parseInt(dislike));

        if (difference > 0)
            return difference.toString();

        return 0;

    }

    getSecure() {
        var uri = decodeHtml(getNestedObj(() => this.props.data.destination)) || 'https://adshrink.it/';

        if (isEmpty(uri) || typeof uri === 'undefined')
            return <React.Fragment> <i className={"icon warning"} style={{ color: "red" }} ></i> <hjsx style={{ color: "red" }}>{'error'}</hjsx> </React.Fragment>;

        try {

            uri = new URL(uri);

        } catch (error) {

            return <React.Fragment> <i className={"icon exclamation triangle"} style={{ color: "red" }} ></i> <hjsx style={{ color: "red" }}>{'error'}</hjsx> </React.Fragment>;

        }

        return <React.Fragment> <i className={"fas " + (uri.protocol === 'https:' ? "fa-lock" : "fa-lock-open")} style={(uri.protocol === 'https:' ? { color: "#13dc74" } : { color: "#ffb700" })} ></i> <hjsx style={(uri.protocol === 'https:' ? { color: "#13dc74" } : { color: "#ffb700" })}>{(uri.protocol === 'https:' ? 'secure' : 'warning')}</hjsx> <hjsx>{uri.protocol + "//" + uri.host + uri.href.replace(uri.origin, '').substring(0, (uri.href.replace(uri.origin, '').length / 3)) + "... "}</hjsx> </React.Fragment>;
    }

    getFromNow() {
        const { time_stamp } = this.props.data || new Date();

        const onehour = 60 * 60 * 1000;

        const lasthour = <a className="ui red image label tiny">
            LAST HOUR
            <div className="detail">{moment(time_stamp).fromNow()}</div>
        </a>;

        if ((new Date().getTime() - moment(time_stamp)) < onehour)
            return lasthour;

        return moment(time_stamp).fromNow();
    }

    getType() {
        const { type } = this.props || 'Normal';

        return type;

    }

    get_google_user = () => {
        const { basic } = this.props || [];

        return basic;
    }

    social_actions = (e, type = 'like') => {

        e.preventDefault();

        //let { className } = e.target || false;
        let target = e.target || [];
        let id_target = target.id || false;

        $(e.target).addClass('loading');

        //console.log('id_target', id_target, target);

        if (id_target !== '')
            $("#" + id_target).toggleClass('circle notch ' + (this.state.save ? 'bookmark' : 'bookmark outline'))


        let { id, userid } = getNestedObj(() => this.props.data);

        if (isEmpty(id) || isEmpty(userid))
            return false;

        let basics = this.get_google_user();

        let that = this;

        let actions = { like: { like: true }, unlike: { like: false }, 'follow': { follow: true }, 'unfollow': { follow: false }, 'link_post': { save: true }, 'unlink_post': { save: false } };

        $.post('https://www.shrink-service.it/v2/public/api/prototype/social/u/' + userid + '/' + id, { action: type, oauth_user: { id: basics.id, name: basics.name, email: basics.email } }).then((res) => {

            $(target).removeClass('loading');

            if (id_target !== '')
                $("#" + id_target).toggleClass('circle notch ' + (this.state.save ? 'bookmark' : 'bookmark outline'))

            if (res.success) {

                that.setState({ ...actions[type] });

                try {
                    window.toastr.success('Success <br/> <a href="' + _adshrink.instagram + '" target="_blank"><i className="instagram icon"></i> Follow </a> <a href="' + _adshrink.facebook + '" target="_blank"><i className="facebook f icon"></i> Follow </a>', null, { "positionClass": "toast-bottom-left" });
                } catch (error) {
                    console.warn('toastr-error');
                }

            }

        }).catch((error) => {
            $(target).removeClass('loading');

            if (id_target !== '')
                $("#" + id_target).toggleClass('circle notch ' + (this.state.save ? 'bookmark' : 'bookmark outline'))

            try {
                //window.toastr.error( language.new.saved_elements[2] + ". <a style=\"color: white;\" onclick=\"gapi.auth2.getAuthInstance().signIn()\">Click here</a> ", null, { "positionClass": "toast-bottom-left"});
            } catch (error) {
                console.warn('toastr-error');
            }

        });

    }

    /** GO NEXT OPT */
    select_mode = async (selected) => {

        let adblock = await checkAdBlocker();
        let iab = await check_user_iab_permissions(true);
        let tcf = window.iab_rejected;

        if (adblock) {
            $('.g-recaptcha').remove();
            ga('send', 'event', 'Destination', 'prototype', 'Adblock-active', 0);
        } if (tcf) {
            $('.g-recaptcha').remove();
            $('#modal_fct').modal('show');

        }

        $('#system_center_card_bounce').css({ display: 'block' })

        this.setState({ mode: selected, adblock: adblock });
    }

    print_buttons_actions = () => {

        let { data, type, dev, skip, url } = getNestedObj(() => this.props) || [];
        let { id, userid } = data || 0;

        let { like, follow, save, mode } = this.state || false;

        /**
         * (e) => this.social_actions(e, ( follow ? 'unfollow' : 'follow') )
         * this.social_actions(e, ( follow ? 'unfollow' : 'follow') )
         */
        return (
            <div>
                <button className={"ui toggle labeled icon  " + (like ? 'primary' : 'secondary') + " button " + (dev === 'Smartphone' ? 'fluid' : '')} onClick={(e) => this.social_actions(e, (like ? 'unlike' : 'like'))} style={(dev === 'Smartphone' ? { marginBottom: '5px' } : {})}>
                    <i className={"heart " + (like ? "" : "outline") + " icon"}></i> {(like ? language.new.like[1] : language.new.like[0])}
                </button>
                <button className={"ui toggle labeled icon " + (follow ? 'primary' : 'secondary') + " button " + (dev === 'Smartphone' ? 'fluid' : '')} onClick={(e) => { document.getElementById('disqus_thread').scrollIntoView() }} style={(dev === 'Smartphone' ? { marginBottom: '5px' } : {})}>
                    <i className={"comments icon"}></i>
                    {" Comments"}
                </button>
                <button className={"ui labeled icon primary" + " button " + (dev === 'Smartphone' ? 'fluid' : '')} style={(dev === 'Smartphone' ? { marginBottom: '5px' } : {})}>
                    <i className="share icon"></i>
                    {language.new.share}
                </button>

                <a className={"ui labeled icon red" + " button " + (dev === 'Smartphone' ? 'fluid' : '')} href="#" target="_blank" style={(dev === 'Smartphone' ? { marginBottom: '5px' } : {})}>
                    <i className="gem icon"></i>
                    {language.new.support}
                </a>
            </div>
        );

    }

    on_iab_rej = async () => {
        let iab = await check_user_iab_permissions(true);

        if (window.iab_rejected) {
            //OneTrust.AllowAll(); 
            //window.location.reload();

            //window.__tcfapi('displayConsentUi',2, function() {});
        } else {
            this.forceUpdate();
        }

    }

    /** user ads choise */
    get_user_personalized_mode = (user_personalized = false) => {
        const current_mode = getNestedObj(() => this.props.opt, 'opt');
        const country = getNestedObj(() => this.props.vpn.country.code, false) ?? false;
        const userid = getNestedObj(() => this.props.data.userid, false) ?? false;

        const users_enabled = _adshrink?.allowCountriesControlSearchesUID ?? [];
        const selected = _adshrink?.allowCountriesControlSearches ?? ['US', 'UK', 'CA'];
        const sysC = _adshrink?.SystemC ?? [];
        var limits = this.props.on_choose_opt();

        var limits_cpi = _adshrink?.SystemCPIforced.indexOf(userid) >= 0 ? false : this.props.on_choose_opt(true);

        const sensitive = false; //this.getSensitive();
        const offer = getNestedObj(() => this.props.offer.success, false);

        /** isVpn = 'false' */
        var isVpn = getNestedObj(() => this.props.vpn['host-ip'], false);
        isVpn = ((!!isVpn && isVpn == "true") || isVpn === true) ? true : false;
        //isVpn = (!!isVpn && isVpn == "true") ? true : false;

        var isOperaMini = Object.prototype.toString.call(window.operamini) === "[object OperaMini]"

        const cpi_user = _adshrink?.SystemCPI.indexOf(userid) >= 0 ? true : false;
        const cpi_user_mobile = _adshrink?.SystemCPImobile.indexOf(userid) >= 0 ? true : false;

        var cpi_enabled = cpi_user ? (cpi_user_mobile ? (cpi_user_mobile && getNestedObj(() => this.props.dev, 'Desktop') != 'Desktop' ? true : false) : true) : false;
        cpi_enabled = offer ? cpi_enabled : false;
        cpi_enabled = !isVpn ? cpi_enabled : false;
        cpi_enabled = !isOperaMini ? cpi_enabled : false;

        //limits = !isVpn ? limits : true;
        //limits = [82281, 82340, 83537, 87212].indexOf(userid) >= 0 ? this.props.on_choose_opt() : true

        /** 2c_freemium or opt */
        console.log('personalized_ads', current_mode, country, userid, '| M. Opt Enabled: ', _adshrink.enabled.opt_2.indexOf(userid), ' | S::A Only Selected C Enabled: ', users_enabled.indexOf(userid), '| Right Country (>0): ', selected.indexOf(country), ' | S::C: ', sysC.indexOf(userid), ' | limits: ', limits, ' | sensitive: ', sensitive, ' | limits no brow: ', limits_cpi, ' | cpi_enabled: ', cpi_enabled)

        /** CPI */
        if (cpi_enabled) {
            if (!limits_cpi)
                return 'opt_cpi';
            if (!limits)
                return 'opt';
        }

        /** FORCE ALL */
        if (sysC.indexOf(userid) >= 0 && !limits) {
            return 'opt';
        }

        /** SYSTEM A */
        /** only to selected users - _adshrink.enabled.opt_2.indexOf(userid) >= 0 && */
        if (user_personalized && _adshrink.enabled.opt_2.indexOf(userid) >= 0 && users_enabled.indexOf(userid) >= 0) {
            if (selected.indexOf(country) >= 0 && !limits) {
                /** event */ ga('send', 'event', 'Page', 'choose_opt', 'forced_overwrite_personalized_&_usersenabled_&_country', 0);
                return 'opt';
            } else {
                return 'freemium'
            }
        }

        /** SYSTEM B */
        if (_adshrink.enabled.opt_2.indexOf(userid) >= 0) {
            if (selected.indexOf(country) >= 0 && !limits) {
                /** event */ ga('send', 'event', 'Page', 'choose_opt', 'forced_overwrite_personalized_&_usersenabled_&_country', 0);
                return 'opt';
            } else {
                if (!limits)
                    return '2c_freemium'
                else
                    return 'freemium';
            }

            if (!user_personalized) {
                return 'opt';
            }

            return current_mode;
        }

        /** event */ ga('send', 'event', 'Page', 'choose_opt', 'forced_overwrite_freemium', 0);
        return 'freemium';
    }

    on_native_articles = () => {
        let that = this; window.cd = 0;

        var opt_focus = this.state?.opt_focus || false;
        var opt_one = this.state?.opt_one || false;

        if (opt_focus || opt_one) return;

        this.setState({ opt_focus: true });

        /** native-t */
        var modal = document.getElementById("t_modal");
        modal.style.display = "block";

        this.interval_countdown = setInterval(function () {
            window.cd++;

            if (window.cd < 7) {
                $('#t_modal_close_time').text((6 - window.cd) + ' sec');
            } else {
                /** set completed */
                that.setState({ opt_one: true, opt_focus: false });
                /** clear the interval */
                try { clearInterval(that.interval_countdown); that.interval_countdown = false; } catch (e) { }

            }

        }, 1000);

        /** event */  ga('send', 'event', 'Page', 'opt_mode_step_taboola');
    }

    get_link_bt = () => {
        let random_keyword = ["Pro Bono Divorce Lawyers", "Travelers Insurance", "health insurance", "car insurance", "international insurance", "insurance", "Drug Rehab", "Free website", "10 Best Web Hosting Companies", "hosting", "accounting", "supercar rentals", "SUV Rentals", "Discount Rental Cars", "car rent", "online school for diploma", "diploma", "vpn", "ibm hybrid cloud", "cloud", "hybrid cloud service", "online classes", "MBA", "Harvard Online MBA", "Best Online MBA", "affordable divorce attorneys for women", "24 Hour Divorce", "Free Divorce Lawyers"];

        //return 'https://af.xdock.co/?pid=210&subid=2101&bucket=heycentral&keyword=' + encodeURIComponent(random_keyword[Math.floor(Math.random()*random_keyword.length)]);
        //return 'https://search.bergfried.tech/v4.2/balancer/?pid=networkloop&subid=5402&bucket=v3_plus_query&q=' + encodeURIComponent(random_keyword[Math.floor(Math.random()*random_keyword.length)]) + '&context=' + encodeURIComponent(this.getTitle());
        return 'https://search.bergfried.tech/v4.2/balancer/?pid=networkloop&subid=5402&bucket=v3_auto&category=' + encodeURIComponent(getNestedObj(() => this.props.data.category, 'any')) + '&context=' + encodeURIComponent(this.getTitle());
    }

    on_sponsorized_results = (type = 'C') => {
        let that = this; window.cd = 0;

        console.error('on_sponsorized_result', type, that, window.cd);

        var opt_focus = this.state?.opt_focus || false;
        var opt_two = this.state?.opt_two || false;

        if (opt_focus || opt_two) return;

        this.setState({ opt_focus: true }); /** to avoid other steps open */

        /** A METHOD */ if (type === 'A') {


            /** native-si */
            var modal = document.getElementById("si_modal");
            modal.style.display = "block";

            this.interval_countdown = setInterval(function () {
                window.cd++;

                if (window.cd < 7) {
                    $('#si_modal_close_time').text((6 - window.cd) + ' sec');
                } else {
                    /** set completed */
                    that.setState({ opt_two: true, opt_focus: false });
                    /** clear the interval */
                    try { clearInterval(that.interval_countdown); that.interval_countdown = false; } catch (e) { }

                }

            }, 1000);
        }

        /** B METHOD */ if (type === 'B') {
            /** continue 1/2 system with tab */
            const new_tab = window.open(this.get_link_bt(), '_blank');

            if (!new_tab)
                return false;

            this.interval_countdown = setInterval(function () {
                window.cd++;
                // check if closed 
                if (window.cd <= 1 && new_tab.closed) {
                    alert('Closed too early..');
                    // set completed 
                    that.setState({ opt_two: false, opt_focus: false });
                    // clear the interval 
                    try { clearInterval(that.interval_countdown); that.interval_countdown = false; } catch (e) { return; } return false;
                } else if (window.cd > 1 && !new_tab.closed) {
                    // set completed 
                    that.setState({ opt_two: true, opt_focus: false });
                    // clear the interval 
                    try { clearInterval(that.interval_countdown); that.interval_countdown = false; } catch (e) { }
                }

            }, 2000);
        }

        /** C METHOD (taboola|search) */ if (type === 'C') {

            /** native-si */
            var modal = document.getElementById("si_modal");

            if (modal === null) {
                    /** event */  ga('send', 'event', 'PageError', 'method_C_no_modal');
                return false;
            }

            window.__adsmodal = { adstype: 1, modal: 2 };
            modal.setAttribute("adstype", 1);
            modal.setAttribute("modal", 2);
            /** show */
            modal.style.display = "block";

            this.interval_countdown = setInterval(function () {
                window.cd++;

                if (window.cd < 60) {
                    $('#si_modal_close_time').text((59 - window.cd) + ' sec');
                } else {
                    /** set completed */
                    that.setState({ opt_two: true, opt_focus: false });
                    /** clear the interval */
                    try { clearInterval(that.interval_countdown); that.interval_countdown = false; } catch (e) { }

                }

            }, 1000);

        }

        /** D METHOD (taboola|cpi) */ if (type === 'D') {
            try {
                /** native-si */
                var modal = document.getElementById("si_modal");

                if (modal === null) {
                        /** event */  ga('send', 'event', 'PageError', 'method_D_no_modal');
                    return false;
                }

                window.__adsmodal = { adstype: 2, modal: 2 };
                modal.setAttribute("adstype", 2);
                modal.setAttribute("modal", 2);
                /** show */
                modal.style.display = "block";


                this.interval_countdown = setInterval(function () {
                    window.cd++;

                    if (window.cd < getNestedObj(() => window.timers[2], 30)) {
                        //$('#si_modal_close_time').text((59 - window.cd) + ' sec');
                    } else {
                        /** set completed */
                        that.setState({ opt_two: true, opt_focus: false });
                        /** clear the interval */
                        clearInterval(that.interval_countdown); that.interval_countdown = false;
                    }

                }, 1000);
            } catch (e) {
                console.error('SyD', e);
            }
        }

        /** event */  ga('send', 'event', 'Page', 'opt_mode_step_searches');
    }

    render() {
        let { data, type, dev, skip, url, vpn } = getNestedObj(() => this.props) || [];

        let { id, userid } = data || 0;
        let _isVpn = getNestedObj(() => vpn['host-ip'], false);
        _isVpn = ((!!_isVpn && _isVpn == "true") || _isVpn === true) ? true : false;

        let { like, follow, save, mode, adblock, opt_one, opt_two, opt_focus } = this.state || false;

        let desktop_tablet = (dev === 'Desktop' || dev === 'Tablet' ? true : false);

        window.iab_rejected = false;

        return (

            <div className="ui segment basic inverted">

                {dev &&

                    <div className="ui grid stackable">

                        <style>{".image_container_black { padding: 0px !important; } "}</style>
                        {/** image */}
                        <div className="image_container_black four wide column">
                            <div className="ui image fluid">
                                <img alt="preview" className="lazy" data-src={this.getImage()} />
                            </div>
                        </div>
                        {/** title & social */}
                        <div className="seven wide column middle aligned">

                            <h2 className="ui header inverted" style={{ margin: "0px" }}>
                                <div className="sub header">Created <b>{this.getFromNow()}</b>
                                    {getNestedObj(() => this.props.offer.success, false) && <small><i className="app store icon"></i></small>}
                                    {this.props.on_choose_opt(true) && <small><i className="user secret icon"></i></small>}
                                    {_isVpn && <small><i className="server icon"></i></small>}
                                </div>
                                {this.getUsername()} <a><i className="check circle small icon" style={{ bottom: 5, position: 'relative' }}></i></a> <p><small> - {this.getTitle()} {desktop_tablet && <a onClick={(e) => this.social_actions(e, (save ? 'unlink_post' : 'link_post'))}><i id="bookmark_save_link" className={"bookmark " + (save ? '' : 'outline') + " small icon"}></i></a>} </small></p>
                            </h2>

                            <br />

                            {dev === 'Smartphone' && true === false &&
                                <div className="ui equal width grid center aligned">
                                    <div className="column">
                                        <a className="ui icon red button modal_premium_infos" href="#" target="_blank">
                                            <i className="gem icon"></i>
                                        </a>
                                        <p><small>{language.new.support}</small></p>
                                    </div>
                                    <div className="column" onClick={(e) => this.social_actions(e, (like ? 'unlike' : 'like'))}><i className={(like ? "heart red large icon" : "heart outline large icon")}></i> <p><small>{(like ? language.new.like[1] : language.new.like[0])}</small></p> </div>
                                    <div className="column" onClick={(e) => { document.getElementById('disqus_thread').scrollIntoView() }}><i className={"comments large icon"}></i> <p><small>{" Comments"}</small></p> </div>
                                    <div className="column" onClick={(e) => this.social_actions(e, (save ? 'unlink_post' : 'link_post'))}><i className={(save ? "bookmark blue large icon" : "bookmark outline large icon")}></i> <p><small>{(save ? 'Saved' : 'Save')}</small></p> </div>
                                    <div className="column" onClick={(e) => $('#modal_share_content').modal('show')}><i className="share large icon"></i> <p><small>{language.new.share}</small></p> </div>
                                </div>
                            }

                            {dev === 'Smartphone' &&
                                <div className="ui labeled icon mini menu inverted">
                                    <a className="item modal_premium_infos" href="#" target="_blank">
                                        <i className="gem icon"></i>
                                        {language.new.support}
                                    </a>
                                    <a className="item" onClick={(e) => this.social_actions(e, (like ? 'unlike' : 'like'))}>
                                        <i className={(like ? "heart red icon" : "heart outline icon")}></i>
                                        {(like ? language.new.like[1] : language.new.like[0])}
                                    </a>
                                    <a className="item" onClick={(e) => { document.getElementById('disqus_thread').scrollIntoView() }}>
                                        <i className={"comments icon"}></i>
                                        {" Comments"}
                                    </a>
                                    <a className="item" onClick={(e) => this.social_actions(e, (save ? 'unlink_post' : 'link_post'))}>
                                        <i className={(save ? "bookmark blue icon" : "bookmark outline icon")}></i>
                                        {(save ? 'Saved' : 'Save')}
                                    </a>
                                    <a className="item" onClick={(e) => $('#modal_share_content').modal('show')}>
                                        <i className="share icon"></i>
                                        {language.new.share}
                                    </a>
                                </div>
                            }

                            {desktop_tablet &&
                                <div className="ui basic tiny buttons inverted">
                                    <a className="ui button modal_premium_infos" href="#" target="_blank"> <i className="gem icon"></i> {language.new.support} </a>
                                    <div className="ui button" onClick={(e) => this.social_actions(e, (like ? 'unlike' : 'like'))}> <i className={(like ? "heart red icon" : "heart outline icon")}></i> {(like ? language.new.like[1] : language.new.like[0])} </div>
                                    <div className="ui button" onClick={(e) => { document.getElementById('disqus_thread').scrollIntoView() }}> <i className={"comments icon"}></i> {" Comments"} </div>
                                    <div className="ui button" onClick={(e) => $('#modal_share_content').modal('show')}> <i className="share icon"></i> {language.new.share} </div>
                                </div>
                            }

                        </div>
                        {/** actions */}
                        <div className="five wide column middle aligned center aligned">

                            {window.iab_rejected && type && !adblock && type !== 'Exclusive' &&
                                <React.Fragment>
                                    <div className="ui red floating message">
                                        <p> <i className="adversal icon"></i> Accept data processing and disable your ad blocker</p>
                                    </div>
                                    <button className="ui right labeled icon button primary huge fluid" style={{ marginBottom: "10px", backgroundColor: "#13dc74" }} onClick={() => this.on_iab_rej()}>Allow and reload <i className="recycle icon"></i> </button>
                                </React.Fragment>
                            }

                            { /** go next opt - getNestedObj(() => this.get_user_personalized_mode(true)this.props.opt, 'opt') */}
                            {!isEmpty(data) && !mode && type !== 'Exclusive' && !window.iab_rejected &&
                                <React.Fragment>
                                    <button
                                        className="ui right labeled icon button primary huge fluid"
                                        style={{ marginBottom: "10px", backgroundColor: "#13dc74" }}
                                        onClick={(e) => this.select_mode(this.get_user_personalized_mode(true))}>Click here to Continue <i className="arrow right icon"></i>
                                    </button>
                                    <a className="ui button primary fluid" href={"https://shrink-service.it/v2/public/auth?username=" + getNestedObj(() => this.props.user.username, 'user')} target="_blank">Premium Access</a>
                                </React.Fragment>
                            }

                            {/** main-r opt 2-steps | 4184f3 -> 13dc74 | arrow right */}
                            {!isEmpty(data) && type !== 'Exclusive' && mode === 'opt' &&
                                <React.Fragment>
                                    <button
                                        id="adshnk-step-one"
                                        className={"ui right labeled icon button huge fluid" + (opt_one ? "primary" : "primary")}
                                        style={{ marginBottom: "10px", ...(opt_one ? { backgroundColor: "#13dc74" } : {}) }}
                                        onClick={(e) => this.on_native_articles()}>{"Step One (" + (opt_one ? "1" : "0") + "/1)"} {(opt_one ? <i className="check icon"></i> : <i className="newspaper outline icon"></i>)}
                                    </button>
                                    <button
                                        id="adshnk-step-two"
                                        className={"ui right labeled icon button huge fluid" + (opt_two ? "primary" : "primary")}
                                        style={{ marginBottom: "10px", ...(opt_two ? { backgroundColor: "#13dc74" } : {}) }}
                                        onClick={(e) => this.on_sponsorized_results()}>{"Step Two (" + (opt_two ? "1" : "0") + "/1)"} {(opt_two ? <i className="check icon"></i> : <i className="list ul icon"></i>)}
                                    </button>
                                </React.Fragment>
                            }

                            {/** main-r opt 2-steps-but-cpi | 4184f3 -> 13dc74 */}
                            {!isEmpty(data) && type !== 'Exclusive' && mode === 'opt_cpi' &&
                                <React.Fragment>
                                    <button
                                        id="adshnk-step-one"
                                        className={"ui right labeled icon button huge fluid" + (opt_one ? "primary" : "primary")}
                                        style={{ marginBottom: "10px", ...(opt_one ? { backgroundColor: "#13dc74" } : {}) }}
                                        onClick={(e) => this.on_native_articles()}>{"Step One (" + (opt_one ? "1" : "0") + "/1)"} {(opt_one ? <i className="check icon"></i> : <i className="newspaper outline icon"></i>)}
                                    </button>
                                    <button
                                        id="adshnk-step-two"
                                        className={"ui right labeled icon button huge fluid" + (opt_two ? "primary" : "primary")}
                                        style={{ marginBottom: "10px", ...(opt_two ? { backgroundColor: "#13dc74" } : {}) }}
                                        onClick={(e) => this.on_sponsorized_results('D')}>{"Step Two (" + (opt_two ? "1" : "0") + "/1)"} {(opt_two ? <i className="check icon"></i> : <i className="app store icon"></i>)}
                                    </button>
                                </React.Fragment>
                            }

                            {/** main-r freemium 2-step */}
                            {!isEmpty(data) && type !== 'Exclusive' && mode === 'opt_freemium' &&
                                <ComponentGetDestination type={type} skip={skip} url={url} mode={mode} />
                            }

                            {/** main-r freemium 2-step */}
                            {!isEmpty(data) && type !== 'Exclusive' && mode === 'freemium' &&
                                <ComponentGetDestination type={type} skip={skip} url={url} mode={mode} />
                            }

                            {/** main-r freemium 1-step 2 continue */}
                            {!isEmpty(data) && type !== 'Exclusive' && mode === '2c_freemium' &&
                                <ComponentGetDestination type={type} skip={skip} url={url} mode={mode} bt={this.get_link_bt()} />
                            }
                        </div>

                    </div>

                }

            </div>

        );

    }


}

class SemanticNavContent extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            user: [],
            oauth: [],
            like: false,
            follow: false,
            save: false,
            mode: false,
            adblock: false
        }

        this.getUsername = this.getUsername.bind(this);

        this.getTitle = this.getTitle.bind(this);
        this.getMeta = this.getMeta.bind(this);
        this.getImage = this.getImage.bind(this);
        this.getDestination = this.getDestination.bind(this);
        this.getLikes = this.getLikes.bind(this);
        this.getSecure = this.getSecure.bind(this);
        this.getFromNow = this.getFromNow.bind(this);
        this.getType = this.getType.bind(this);


        this.sys_var = { oauth: false, userdata: false };


    }

    componentDidMount() {

        if (this.props.data) {
            if (!isEmpty(this.props.basic) && !this.sys_var.oauth)
                this.get_actions();

        } if (this.props.basic && !this.sys_var.oauth) {
            this.get_actions();
        } if (this.props.user) {
            this.setState({ user: this.props.user });
        }

    }

    shouldComponentUpdate(nextProps, nextState) {
        if (nextProps !== this.props) {
            return true;
        } if (nextState.user !== this.state.user) {
            return true;
        } if (nextState.like !== this.state.like || nextState.save !== this.state.save || nextState.follow !== this.state.follow) {
            return true;
        } if (nextState.mode !== this.state.mode) {
            return true;
        } if (nextState.adblock !== this.state.adblock) {
            return true;
        } return false;
    }

    componentDidUpdate(nextProps, nextState) {

        if (nextProps.data !== this.props.data) {
            if (!isEmpty(this.props.basic) && !this.sys_var.oauth)
                this.get_actions();

        } if (nextProps.basic !== this.props.basic && !this.sys_var.oauth) {
            this.get_actions();
        } if (nextProps.user !== this.props.user) {
            this.setState({ user: this.props.user });
        }
    }

    get_actions = () => {

        let { id, userid } = getNestedObj(() => this.props.data);

        if (isEmpty(id) || isEmpty(userid))
            return false;

        let basics = this.get_google_user();

        let that = this;

        $.post('https://www.shrink-service.it/v2/public/api/prototype/past/u/' + userid + '/' + id, { oauth_user: { id: basics.id, name: basics.name, email: basics.email } }).then((res) => {

            if (res.success)
                that.setState({ ...res.data })
            if (getNestedObj(() => res.award.success)) {
                $('#label_collected_points').text('You have ' + getNestedObj(() => res.award.points) + ' points');
                window.award = true;
            }

        });

        this.sys_var.oauth = true;

    }

    getUsername() {
        const { username } = getNestedObj(() => this.state.user) || 'AdShrink Private User';

        return username;
    }

    getTitle() {
        const { title } = this.props.data || [];

        return decodeHtml(title);
    }

    getMeta() {
        const { metadata } = this.props.data || [];

        var meta = metadata;

        var cardData = { title: this.getTitle(), description: '', image: '' };

        if (meta === 'empty' || isEmpty(meta))
            return { title: 'AdShrink.it - Unnamed', description: 'No description available..', image: '' };

        meta = JSON.parse(metadata);

        //console.log('meta', meta);

        if (meta.hasOwnProperty('description')) {
            cardData.description = meta.description;

            const element_cut_dest = (cardData.description.length > 150 ? (cardData.description.substring(0, 150) + '... [continue]') : cardData.description);
            cardData.description = decodeHtml(element_cut_dest);
        } else if (meta.hasOwnProperty('og:description')) {
            cardData.description = meta['og:description'];

            const element_cut_dest = (cardData.description.length > 150 ? (cardData.description.substring(0, 150) + '... [continue]') : cardData.description);
            cardData.description = decodeHtml(element_cut_dest);
        } else if (meta.hasOwnProperty('twitter:description')) {
            cardData.description = meta['twitter:description'];

            const element_cut_dest = (cardData.description.length > 150 ? (cardData.description.substring(0, 150) + '... [continue]') : cardData.description);
            cardData.description = decodeHtml(element_cut_dest);
        }

        if (meta.hasOwnProperty('title')) {
            cardData.title = meta.title;
        } else if (meta.hasOwnProperty('og:title')) {
            cardData.title = meta['og:title'];
        } else if (meta.hasOwnProperty('twitter:title')) {
            cardData.title = meta['twitter:title'];
        }

        if (meta.hasOwnProperty('image')) {
            cardData.image = meta.image;
        } else if (meta.hasOwnProperty('og:image')) {
            cardData.image = meta['og:image'];
        } else if (meta.hasOwnProperty('twitter:image')) {
            cardData.image = meta['twitter:image'];
        }

        return cardData;

    }

    getImage() {
        const image = getNestedObj(() => this.getMeta().image);

        if (!image)
            return "https://www.shrink-service.it/png/search/preview_one.png";

        return image;
    }

    getDestination() {
        //const element_cut_dest = (description.length > 150 ? (description.substring(0, 150) + '... [continue]') : description );
    }

    getLikes() {

        var { likes } = getNestedObj(() => this.props.data) || [];

        if (!isEmpty(likes))
            likes = JSON.parse(likes);

        const { like, dislike } = likes || 0;

        //console.log(likes, like, dislike);

        var difference = (parseInt(like) - parseInt(dislike));

        if (difference > 0)
            return difference.toString();

        return 0;

    }

    getSecure() {
        var uri = decodeHtml(getNestedObj(() => this.props.data.destination)) || 'https://adshrink.it/';

        if (isEmpty(uri) || typeof uri === 'undefined')
            return <React.Fragment> <i className={"icon warning"} style={{ color: "red" }} ></i> <hjsx style={{ color: "red" }}>{'error'}</hjsx> </React.Fragment>;

        try {

            uri = new URL(uri);

        } catch (error) {

            return <React.Fragment> <i className={"icon exclamation triangle"} style={{ color: "red" }} ></i> <hjsx style={{ color: "red" }}>{'error'}</hjsx> </React.Fragment>;

        }

        return <React.Fragment> <i className={"fas " + (uri.protocol === 'https:' ? "fa-lock" : "fa-lock-open")} style={(uri.protocol === 'https:' ? { color: "#13dc74" } : { color: "#ffb700" })} ></i> <hjsx style={(uri.protocol === 'https:' ? { color: "#13dc74" } : { color: "#ffb700" })}>{(uri.protocol === 'https:' ? 'secure' : 'warning')}</hjsx> <hjsx>{uri.protocol + "//" + uri.host + uri.href.replace(uri.origin, '').substring(0, (uri.href.replace(uri.origin, '').length / 3)) + "... "}</hjsx> </React.Fragment>;
    }

    getFromNow() {
        const { time_stamp } = this.props.data || new Date();

        const onehour = 60 * 60 * 1000;

        const lasthour = <a className="ui red image label tiny">
            LAST HOUR
            <div className="detail">{moment(time_stamp).fromNow()}</div>
        </a>;

        if ((new Date().getTime() - moment(time_stamp)) < onehour)
            return lasthour;

        return moment(time_stamp).fromNow();
    }

    getType() {
        const { type } = this.props || 'Normal';

        return type;

    }

    get_google_user = () => {
        const { basic } = this.props || [];

        return basic;
    }

    social_actions = (e, type = 'like') => {

        e.preventDefault();

        //let { className } = e.target || false;
        let target = e.target || [];
        let id_target = target.id || false;

        $(e.target).addClass('loading');

        //console.log('id_target', id_target, target);

        if (id_target !== '')
            $("#" + id_target).toggleClass('circle notch ' + (this.state.save ? 'bookmark' : 'bookmark outline'))


        let { id, userid } = getNestedObj(() => this.props.data);

        if (isEmpty(id) || isEmpty(userid))
            return false;

        let basics = this.get_google_user();

        let that = this;

        let actions = { like: { like: true }, unlike: { like: false }, 'follow': { follow: true }, 'unfollow': { follow: false }, 'link_post': { save: true }, 'unlink_post': { save: false } };

        $.post('https://www.shrink-service.it/v2/public/api/prototype/social/u/' + userid + '/' + id, { action: type, oauth_user: { id: basics.id, name: basics.name, email: basics.email } }).then((res) => {

            $(target).removeClass('loading');

            if (id_target !== '')
                $("#" + id_target).toggleClass('circle notch ' + (this.state.save ? 'bookmark' : 'bookmark outline'))

            if (res.success) {

                that.setState({ ...actions[type] });

                try {
                    window.toastr.success('Success <br/> <a href="' + _adshrink.instagram + '" target="_blank"><i className="instagram icon"></i> Follow </a> <a href="' + _adshrink.facebook + '" target="_blank"><i className="facebook f icon"></i> Follow </a>', null, { "positionClass": "toast-bottom-left" });
                } catch (error) {
                    console.warn('toastr-error');
                }

            }

        }).catch((error) => {
            $(target).removeClass('loading');

            if (id_target !== '')
                $("#" + id_target).toggleClass('circle notch ' + (this.state.save ? 'bookmark' : 'bookmark outline'))

            try {
                //window.toastr.error( language.new.saved_elements[2] + ". <a style=\"color: white;\" onclick=\"gapi.auth2.getAuthInstance().signIn()\">Click here</a> ", null, { "positionClass": "toast-bottom-left"});
            } catch (error) {
                console.warn('toastr-error');
            }

        });

    }

    select_mode = async (selected) => {

        let adblock = await checkAdBlocker();
        let iab = await check_user_iab_permissions(true);
        let tcf = window.iab_rejected;

        console.warn('select_mode', selected); alert(selected); alert(this.props.opt);

        if (adblock) {
            $('.g-recaptcha').remove();
            ga('send', 'event', 'Destination', 'prototype', 'Adblock-active', 0);
        } if (tcf) {
            $('.g-recaptcha').remove();
            $('#modal_fct').modal('show');

        }

        $('#system_center_card_bounce').css({ display: 'block' })

        this.setState({ mode: selected, adblock: adblock });
    }

    print_buttons_actions = () => {

        let { data, type, dev, skip, url } = getNestedObj(() => this.props) || [];
        let { id, userid } = data || 0;

        let { like, follow, save, mode } = this.state || false;

        /**
         * (e) => this.social_actions(e, ( follow ? 'unfollow' : 'follow') )
         * this.social_actions(e, ( follow ? 'unfollow' : 'follow') )
         */
        return (
            <div>
                <button className={"ui toggle labeled icon  " + (like ? 'primary' : 'secondary') + " button " + (dev === 'Smartphone' ? 'fluid' : '')} onClick={(e) => this.social_actions(e, (like ? 'unlike' : 'like'))} style={(dev === 'Smartphone' ? { marginBottom: '5px' } : {})}>
                    <i className={"heart " + (like ? "" : "outline") + " icon"}></i> {(like ? language.new.like[1] : language.new.like[0])}
                </button>
                <button className={"ui toggle labeled icon " + (follow ? 'primary' : 'secondary') + " button " + (dev === 'Smartphone' ? 'fluid' : '')} onClick={(e) => { document.getElementById('disqus_thread').scrollIntoView() }} style={(dev === 'Smartphone' ? { marginBottom: '5px' } : {})}>
                    <i className={"comments icon"}></i>
                    {" Comments"}
                </button>
                <button className={"ui labeled icon primary" + " button " + (dev === 'Smartphone' ? 'fluid' : '')} style={(dev === 'Smartphone' ? { marginBottom: '5px' } : {})}>
                    <i className="share icon"></i>
                    {language.new.share}
                </button>

                <a className={"ui labeled icon red" + " button " + (dev === 'Smartphone' ? 'fluid' : '')} href="#" target="_blank" style={(dev === 'Smartphone' ? { marginBottom: '5px' } : {})}>
                    <i className="gem icon"></i>
                    {language.new.support}
                </a>
            </div>
        );

    }

    on_iab_rej = async () => {
        let iab = await check_user_iab_permissions(true);

        if (window.iab_rejected) {
            //OneTrust.AllowAll(); 
            //window.location.reload();

            //window.__tcfapi('displayConsentUi',2, function() {});
        } else {
            this.forceUpdate();
        }

    }

    render() {
        let { data, type, dev, skip, url } = getNestedObj(() => this.props) || [];
        let { id, userid } = data || 0;

        let { like, follow, save, mode, adblock } = this.state || false;

        let desktop_tablet = (dev === 'Desktop' || dev === 'Tablet' ? true : false);

        window.iab_rejected = false;

        return (

            <div className="ui segment basic inverted">

                {dev &&

                    <div className="ui grid stackable">

                        <style>{".image_container_black { padding: 0px !important; } "}</style>

                        <div className="image_container_black four wide column">
                            <div className="ui image fluid">
                                <img alt="preview" className="lazy" data-src={this.getImage()} />
                            </div>
                        </div>
                        <div className="seven wide column middle aligned">

                            <h2 className="ui header inverted" style={{ margin: "0px" }}>
                                <div className="sub header">Created <b>{this.getFromNow()}</b> <small><a href={"https://adshrink.it/search?user=" + this.getUsername()} >See all links <i data-variation="basic inverted mini" data-position="top center" data-inverted="" data-content={"Adshrink.it Search Engine - " + this.getUsername() + " links"} className="info circle icon small basic-inverted-popup"></i></a></small></div>
                                {this.getUsername()} <a><i className="check circle small icon" style={{ bottom: 5, position: 'relative' }}></i></a> <p><small> - {this.getTitle()} {desktop_tablet && <a onClick={(e) => this.social_actions(e, (save ? 'unlink_post' : 'link_post'))}><i id="bookmark_save_link" className={"bookmark " + (save ? '' : 'outline') + " small icon"}></i></a>} </small></p>
                            </h2>

                            <br />

                            {dev === 'Smartphone' && true === false &&
                                <div className="ui equal width grid center aligned">
                                    <div className="column">
                                        <a className="ui icon red button modal_premium_infos" href="#" target="_blank">
                                            <i className="gem icon"></i>
                                        </a>
                                        <p><small>{language.new.support}</small></p>
                                    </div>
                                    <div className="column" onClick={(e) => this.social_actions(e, (like ? 'unlike' : 'like'))}><i className={(like ? "heart red large icon" : "heart outline large icon")}></i> <p><small>{(like ? language.new.like[1] : language.new.like[0])}</small></p> </div>
                                    <div className="column" onClick={(e) => { document.getElementById('disqus_thread').scrollIntoView() }}><i className={"comments large icon"}></i> <p><small>{" Comments"}</small></p> </div>
                                    <div className="column" onClick={(e) => this.social_actions(e, (save ? 'unlink_post' : 'link_post'))}><i className={(save ? "bookmark blue large icon" : "bookmark outline large icon")}></i> <p><small>{(save ? 'Saved' : 'Save')}</small></p> </div>
                                    <div className="column" onClick={(e) => $('#modal_share_content').modal('show')}><i className="share large icon"></i> <p><small>{language.new.share}</small></p> </div>
                                </div>
                            }

                            {dev === 'Smartphone' &&
                                <div className="ui labeled icon mini menu inverted">
                                    <a className="item modal_premium_infos" href="#" target="_blank">
                                        <i className="gem icon"></i>
                                        {language.new.support}
                                    </a>
                                    <a className="item" onClick={(e) => this.social_actions(e, (like ? 'unlike' : 'like'))}>
                                        <i className={(like ? "heart red icon" : "heart outline icon")}></i>
                                        {(like ? language.new.like[1] : language.new.like[0])}
                                    </a>
                                    <a className="item" onClick={(e) => { document.getElementById('disqus_thread').scrollIntoView() }}>
                                        <i className={"comments icon"}></i>
                                        {" Comments"}
                                    </a>
                                    <a className="item" onClick={(e) => this.social_actions(e, (save ? 'unlink_post' : 'link_post'))}>
                                        <i className={(save ? "bookmark blue icon" : "bookmark outline icon")}></i>
                                        {(save ? 'Saved' : 'Save')}
                                    </a>
                                    <a className="item" onClick={(e) => $('#modal_share_content').modal('show')}>
                                        <i className="share icon"></i>
                                        {language.new.share}
                                    </a>
                                </div>
                            }

                            {desktop_tablet &&
                                <div className="ui basic tiny buttons inverted">
                                    <a className="ui button modal_premium_infos" href="#" target="_blank"> <i className="gem icon"></i> {language.new.support} </a>
                                    <div className="ui button" onClick={(e) => this.social_actions(e, (like ? 'unlike' : 'like'))}> <i className={(like ? "heart red icon" : "heart outline icon")}></i> {(like ? language.new.like[1] : language.new.like[0])} </div>
                                    <div className="ui button" onClick={(e) => { document.getElementById('disqus_thread').scrollIntoView() }}> <i className={"comments icon"}></i> {" Comments"} </div>
                                    <div className="ui button" onClick={(e) => $('#modal_share_content').modal('show')}> <i className="share icon"></i> {language.new.share} </div>
                                </div>
                            }

                        </div>
                        <div className="five wide column middle aligned center aligned">

                            {window.iab_rejected && type && !adblock && type !== 'Exclusive' &&
                                <React.Fragment>
                                    <div className="ui red floating message">
                                        <p> <i className="adversal icon"></i> Accept data processing and disable your ad blocker</p>
                                    </div>
                                    <button className="ui right labeled icon button primary huge fluid" style={{ marginBottom: "10px", backgroundColor: "#13dc74" }} onClick={() => this.on_iab_rej()}>Allow and reload <i className="recycle icon"></i> </button>
                                </React.Fragment>
                            }

                            {!isEmpty(data) && !mode && type !== 'Exclusive' && !window.iab_rejected &&
                                <React.Fragment>
                                    <button className="ui right labeled icon button primary huge fluid" style={{ marginBottom: "10px", backgroundColor: "#13dc74" }} onClick={(e) => this.select_mode('freemium')}>Click here to Continue <i className="arrow right icon"></i> </button>
                                    <a className="ui button primary fluid modal_premium_infos" href="#" target="_blank">Premium Access</a>
                                </React.Fragment>
                            }

                            {/** mode freemium - continue(1/1) */}
                            {!isEmpty(data) && type !== 'Exclusive' && mode &&
                                <ComponentGetDestination type={type} skip={skip} url={url} mode={mode} />
                            }

                            {!window.iab_rejected && type === 'Exclusive' && true === false &&
                                <React.Fragment>
                                    <div className="ui red floating message">
                                        <p> <i className="minus circle icon"></i> <b>Exclusive content.</b> You must have a Premium account to continue!</p>
                                    </div>
                                    <a className="ui button primary fluid modal_premium_infos" href="#" target="_blank">Become a Premium member</a>
                                </React.Fragment>
                            }

                        </div>

                    </div>

                }

            </div>

        );

    }


}

class ComponentGetDestination extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            fetching: false,
            adblock: false,
            rejectediab: false,
        }

        this.message = {
            'adblock': 'Disable your Ad-block and reload.',
            'iab': 'Accept data processing in order to show advertising',
            'allow': 'Click here to accept'
        }

        this.interval_countdown = false;

    }

    componentDidMount() {
        this.on_get();
    }

    shouldComponentUpdate(nextProps, nextState) {
        if (nextProps !== this.props)
            return true;
        if (nextState !== this.state)
            return true;

        return false;

    }

    componentDidUpdate(nextProps, nextState) {
        if (nextProps.url !== this.props.url) {
            this.on_url();
        }
    }

    on_get = async () => {
        let that = this;

        let adblock = await checkAdBlocker();
        let iab = await check_user_iab_permissions(true);
        let tcf = window.iab_rejected;

        if (adblock) {
            that.setState({ adblock: true });

            return false;
        } else if (tcf) {
            that.setState({ adblock: true });

            return false;
        }

        that.setState({ adblock: false, rejectediab: false, fetching: true });

        this.props.skip();
    }

    on_url = () => {
        this.on_countdown(true);
        this.forceUpdate();
    }

    on_allow_iab = () => {
        try {
            //if ( "OneTrust" in window )
            //OneTrust.AllowAll(); 

            window.location.reload()
        } catch (error) {
            console.warn('Catched some error from on_allow_iab: ', error);
        }
    }

    on_countdown = (loaded = false) => {

        let that = this; window.cd = 0; window.btcd = 0;
        let { url, mode } = this.props || false;

        /** t_native */
        var modal = document.getElementById("t_modal"); /** if taboolaModal disabled go in catch in 2c_freemium because style is underfined */

        /** two steps opt */
        if (mode === 'opt_freemium') {
            /** little bit of interval */
            this.interval_countdown = setInterval(function () {
                window.cd++; var _skippy = 3;
                /** update text */
                $('#final_redirect_text').text('Wait .. ' + (_skippy - window.cd) + ' sec and ');

                if (window.cd >= _skippy) {
                    $('#final_redirect').attr('href', url);
                    $('#final_redirect_text').text('');
                    $('#pop_number').text("1");
                    ga('send', 'event', 'Destination', 'prototype', 'request-finalurk-finish-opt_2', 100);
                    clearInterval(that.interval_countdown); that.interval_countdown = false;
                }
            });
            /** because we dont need other */
            return;
        } else if (mode === '2c_freemium') {
            /** show native */ modal.style.display = "block";

            const bt = getNestedObj(() => this.props.bt, url);
            this.interval_countdown = setInterval(function () {
                window.cd++;

                /** wait */ $('#final_redirect_text').text('Wait .. ' + (_adshrink.skiptime - window.cd) + ' sec and ');

                if (window.cd < 7) {
                    /** t-native */ $('#t_modal_close_time').text((6 - window.cd) + ' sec');
                }
                if (window.cd >= _adshrink.skiptime) {
                    /** set 1/2 step completed */ $('#final_redirect_text').text(''); $('#pop_number').text("1");
                    /** clear */ clearInterval(that.interval_countdown);
                    /** event */ ga('send', 'event', 'Destination', 'prototype', '2c_freemium-countdown-finish', 100);

                    $('#final_redirect').click(() => {
                        if (safe_read_cookie('search_feed_suspect')) {
                            /** set completed */
                            $('#final_redirect').unbind('click');
                            $('#final_redirect').attr('href', url);
                            $('#pop_number').text("2");
                            /** stop the process */ return;
                        }

                        /** open */
                        const new_tab = window.open(bt, '_blank');
                        /** not open */
                        if (!new_tab) return false;

                        /** event */ ga('send', 'event', 'Page', 'forced_searches', '2c_freemium_opt_tab_open');

                        let _bt_countdown = false;
                        _bt_countdown = setInterval(function () { /** increase timer */ window.btcd++;
                            /** check if closed */
                            if (window.btcd <= 1 && new_tab.closed) {
                                /** event */ ga('send', 'event', 'Page', 'forced_searches', '2c_freemium_opt_tab_closed_early');
                                safe_write_cookie('search_feed_suspect', false, 60 * 60, true);
                                /** alert the user */
                                alert('Closed too early..');
                                /** clear the interval */
                                try { clearInterval(_bt_countdown); _bt_countdown = false; } catch (e) { return; } return false;
                            } else if (window.btcd > 1 && !new_tab.closed) {

                                /** set completed */
                                $('#final_redirect').unbind('click');
                                $('#final_redirect').attr('href', url);
                                $('#pop_number').text("2");

                                /** clear the interval */
                                try { clearInterval(_bt_countdown); _bt_countdown = false; } catch (e) { }
                            }
                        }, 1000);
                    });
                }
            }, 1000);
            return;
        }

        /** freemium 1_opt */
        modal.style.display = "block";


        this.interval_countdown = setInterval(function () {
            window.cd++;

            $('#final_redirect_text').text('Wait .. ' + (_adshrink.skiptime - window.cd) + ' sec and ');

            if (window.cd < 7) {
                $('#t_modal_close_time').text((6 - window.cd) + ' sec');
            }

            if (window.cd >= _adshrink.skiptime) {
                var rurl = url;
                /* da togliere */
                try {
                    rurl = new URL(rurl);
                    if (getNestedObj(() => rurl.protocol) === 'http:')
                        rurl = "http://adshrink.it/redirectwos.php?uri=" + window.btoa(rurl);
                } catch (error) {
                    console.warn('new URL() error', rurl);
                }

                $('#final_redirect').attr('href', rurl);
                $('#final_redirect_text').text('');
                clearInterval(that.interval_countdown);
                ga('send', 'event', 'Destination', 'prototype', 'Countdown-finish', 100);
            }

        }, 1000);
    }

    render() {

        let { adblock, rejectediab } = this.state || true;
        let { mode, type, skip, url } = this.props || false;

        let blocks = (adblock || rejectediab ? true : false);
        let exclusive = (type === 'Exclusive' ? true : false);
        let loaded = (!exclusive && url ? true : false);

        let artcode = getNestedObj(() => window._sharedData[0].artcode) ?? '';

        let n_skip_mode = (mode === '2c_freemium' ? 2 : 1);

        return (
            <React.Fragment>
                {blocks &&
                    <button className="ui right labeled icon button primary huge fluid" style={{ marginBottom: "10px", backgroundColor: "rgb(220 19 19)" }} onClick={() => this.on_allow_iab()}>Allow Data Processing - Accept All <i className="recycle icon"></i> </button>
                }
                {!blocks &&
                    <React.Fragment>
                        {exclusive &&
                            <React.Fragment>
                                <div className="ui red floating message">
                                    <p> <i className="minus circle icon"></i> <b>Exclusive content.</b> You must have a Premium account to continue!</p>
                                </div>
                                <a className="ui button primary fluid modal_premium_infos" href="#" target="_blank">Become a Premium member</a>
                            </React.Fragment>
                        }
                        {!exclusive && !url &&
                            <button className="ui right labeled icon button primary huge fluid" style={{ marginBottom: "10px", backgroundColor: "#13dc74" }}>Loading <i className="loading icon"></i> </button>
                        }
                        {loaded &&
                            <React.Fragment>

                                <a id="final_redirect" className={"ui right labeled icon primary green fluid button "} style={{ marginBottom: "10px" }}>
                                    <i className="right arrow icon"></i>
                                    <span id="final_redirect_text"></span> {language.continue + " ("}<text id="pop_number">0</text>{"/" + n_skip_mode + ")"}
                                </a>
                                <a className="ui button primary fluid huge" href={"https://t.me/adshrink_bot/?start=artcode-" + artcode} target="_blank" style={{ backgroundColor: "#13dc74" }}>Direct Access Telegram</a>
                            </React.Fragment>
                        }
                    </React.Fragment>
                }

                <a style={{ marginTop: "10px !important" }} href="#disqus_segment">Leave a comment..</a>
            </React.Fragment>
        )
    }
}


class SemanticNav extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            dev: false
        }

    }

    componentDidMount() {
        $('#system_popup_menu_trigger')
            .popup({
                hoverable: true,
                popup: $('#system_popup_menu'),
                lastResort: 'bottom right'
            });
    }

    shouldComponentUpdate(nextProps, nextState) {
        if (nextProps !== this.props)
            return true;
        if (nextState.dev !== this.state.dev)
            return true;
        return false;
    }

    componentDidUpdate(nextProps, nextState) {
        if (nextProps.dev !== this.props.dev) {
            this.setState({ dev: this.props.dev });

        } if (nextState.dev !== this.state.dev) {
            $('#smartphone_menu_dropdown').dropdown();
        }
    }

    render() {

        let { method_change_shrink_type } = this.props || [];
        let { dev } = this.state || false;

        return (

            <React.Fragment>

                <nav className="ui big top fixed menu compatct icon" id="center_jumbotron" data-html2canvas-ignore>
                    <div className="item">
                        <img data-src="https://adshnk.com/wp-content/uploads/2021/10/adshnk.png" src="https://adshnk.com/wp-content/uploads/2021/10/adshnk.png" className="logo-dim lazy" style={{ width: '120px' }} />
                    </div>

                    {(dev === 'Desktop' || dev === 'Tablet') &&
                        <React.Fragment>

                            {true === false &&
                                <a className="item white-text-color">
                                    <button className="ui left attached button small" onClick={(e) => method_change_shrink_type(e, 'Light')}>Light</button>
                                    <button className="left attached ui button small blue" onClick={(e) => method_change_shrink_type(e, 'Normal')}>Normal</button>
                                    <button className="right attached ui button small red" onClick={(e) => method_change_shrink_type(e, 'Full-Profits')}>Full-Profits</button>
                                </a>
                            }

                            <div className="right menu">

                                {true == false && <ConnectionSymbol />}

                                <ModalComponentSaved u={this.props.u} />

                                <a className="item white-text-color">
                                    <div className="ui fluid icon input">
                                        <input id="searchenginequery" name="searchenginequery" type="text" placeholder={language.new.search} style={{ minWidth: "170px" }} />
                                        <i className="circular search link icon" onClick={(e) => { window.open(encodeURI('https://adshrink.it/search?q=' + $('#searchenginequery').val()), '_blank'); }}></i>
                                    </div>
                                </a>

                                {true === false && <ComponentReports />}
                                {true === false && <ComponentBugs />}

                                <ComponentChangeLanguage />

                            </div>

                        </React.Fragment>

                    }

                    {dev && dev === 'Smartphone' &&
                        <a className="item white-text-color">
                            <div className="ui fluid icon input">
                                <input id="searchenginequery" name="searchenginequery" type="text" placeholder={"Search content"} style={{ minWidth: "180px" }} />
                                <i className="circular search link icon" onClick={(e) => { window.open(encodeURI('https://adshrink.it/search?q=' + $('#searchenginequery').val()), '_blank'); }}></i>
                            </div>
                        </a>
                    }

                </nav>

                {dev && dev === 'Smartphone' &&
                    <React.Fragment>

                        <div className="ui text menu" style={{ top: "60px", position: "relative" }}>
                            <div className="item">
                                <div className="ui dropdown" id="smartphone_menu_dropdown">
                                    <div className="text"><i className="bars icon"></i> Explore</div>
                                    <i className="dropdown icon"></i>
                                    <div className="menu" style={{ backgroundColor: '#1c1d1e' }}>
                                        <div className="item">
                                            <ModalComponentSaved u={this.props.u}><span className="description" style={{ top: "3px", position: "relative", color: "#c9c9c9" }}>Saved Elements</span></ModalComponentSaved>
                                        </div>
                                        {true === false &&
                                            <div className="item">
                                                <ComponentReports><span className="description" style={{ top: "3px", position: "relative", color: "#c9c9c9" }}>Report</span></ComponentReports>
                                            </div>
                                        }
                                        <div className="item">
                                            <ComponentBugs ><span className="description" style={{ top: "3px", position: "relative", color: "#c9c9c9" }}>Feedback & Bugs</span></ComponentBugs>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </React.Fragment>
                }

            </React.Fragment>


        );

    }

}

function ConnectionSymbol(props) {

    var connection = navigator.connection || navigator.mozConnection || navigator.webkitConnection || false;
    connection = getNestedObj(() => connection.effectiveType) || '3g'; //75% in the world

    var color = 'gray';

    if (connection === '4g') {
        color = 'green';
    } else if (connection === '3g') {
        color = 'yellow';
    } else if (connection === '2g') {
        color = 'red';
    }

    $('.basis-inverted-popup').popup();

    return (
        <div className="item">
            <i className={"basic-inverted-popup signal icon " + color} data-content={"Internet connection: " + connection} data-variation="basic inverted mini" data-position="bottom center" data-inverted=""></i>
        </div>

    );

}

function StickyBottomBar(props) {

    let device_format_tablet_computer = (props.dev === 'Desktop' || props.dev === 'Tablet' ? true : false);

    return (
        <div className="ui bottom fixed stackable menu">
            <a className="item">
                {!props.basic &&
                    <div className="g-signin2" id="g-signin2" data-onsuccess={(googleUser) => this.onAuthGoogle(googleUser)}></div>
                }
                {props.basic &&
                    <p><a><i className="google icon middle aligned"></i> {getNestedObj(() => props.basic.firstname)}</a></p>
                }
            </a>
            {device_format_tablet_computer && true == false &&
                <React.Fragment>
                    <a className="item" href="https://plarium.com/landings/en/desktop/raid/rdo/media/deliana_f052_jt1892_v2?plid=797314&pxl=adshrink" target="_blank" style={{ padding: "4px" }}>
                        <img style={{ height: "90px", width: "970px" }} className="ui image bordered lazy" data-src="https://i.ibb.co/R3mywdC/RAD-Deliana-MYDELIANA-B132644-970x90-No-OS-English-IMG-2-UCK-2.jpg" alt="RAD Deliana RAD-Deliana-MYDELIANA-B132644-970x90-No-OS-English-IMG-2-UCK-2" />
                    </a>
                </React.Fragment>
            }
        </div>
    )
}

class Disqus extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            init: false
        }

        this.init_disqus = this.init_disqus.bind(this);
    }

    componentDidMount() {
        /**
         * init script 
         */
        console.log('disqus loading..');

        const _sid = getNestedObj(() => this.props.u.id, false);
        if (_sid)
            this.init_disqus(_sid);
    }

    shouldComponentUpdate(nextProps, nextState) {
        if (nextProps.u !== this.props.u)
            return true;
        if (nextState.init !== this.state.init)
            return false;
        return false;
    }

    /**
     * 
     * @param {*} nextProps 
     * @param {*} nextState 
     * u={{id: get_shrink_id, userid: get_user_id, username: get_user_name}}
     */
    componentDidUpdate(nextProps, nextState) {
        if (nextProps.u !== this.props.u && !this.state.init) {
            this.init_disqus(getNestedObj(() => this.props.u.id, false));
        }
    }

    init_disqus = (sid = false) => {
        if (!sid)
            return;
        window.disqus_config = function () {
            this.page.url = "https://www.shrink-service.it/s/" + sid;
            this.page.title = "Shrink ID: " + sid;
            this.page.identifier = sid;
        }
        var d = document, s = d.createElement('script');
        s.src = 'https://adsh.disqus.com/embed.js';
        s.setAttribute('data-timestamp', +new Date());
        (d.head || d.body).appendChild(s);
        /**
         * update state
         */
        this.setState({ init: true });
    }

    render() {

        return (
            <div className="ui segments" id="disqus_segment">
                <div className="ui secondary segment">
                    <p><i className="comments icon"></i> <b>Comments</b></p>
                </div>
                <div className="ui segment">
                    <div id="disqus_thread"></div>
                </div>
                <div className="ui secondary segment">
                    <p><i className="info circle icon"></i> Disqus <a href={"https://help.disqus.com/customer/portal/articles/466260-terms-of-service"} >Terms</a></p>
                </div>
            </div>
        );

    }
}

class Prototype extends React.Component {
    constructor(props) {
        super(props);
        this.tModal = React.createRef();

        this.state = {
            return: true,
            script: {
                botDetect: false,
                wurfl: false,
                fingerprint: false,
                recapv3: false,
                donate: false
            },
            init: false,
            loaded: false,
            howmanyscript: 0,
            type: 'Normal',
            clicked: false,
            recaptcha: false,
            initShrinkData: [],
            requestedPage: false,
            taboola: false,
            runative: false,
            mgid: false,
            adsense: false,
            vpninfo: [],
            cc: '',
            observer: false,
            oAuth: false,
            wurfl: [],
            componentLoaded: false,
            url: false,
            user: false,
            clicked_continue: false,
            publicdata: { news: false, premium: false, tweets: false, lastlinks: false },
            v3publicdata: { telegram: false, shop: false },
            html: {
                firstpage: {
                    lastlinks: false,
                    content: false
                },
                secondpage: {
                    news: false,
                    premium: false,
                    shop: false,
                    telegram: false,
                    disqus: false
                }
            },
            updatedhtml: 0,
        };


        this.onScriptLoad = this.onScriptLoad.bind(this);
        this.onHandleScript = this.onHandleScript.bind(this);
        this.onHandleDirect = this.onHandleDirect.bind(this);
        this.onHandleSkip = this.onHandleSkip.bind(this);
        this.onHandleFull = this.onHandleFull.bind(this);

        this.onAuthGoogle = this.onAuthGoogle.bind(this);

        this.shouldScriptDidUpdate = this.shouldScriptDidUpdate.bind(this);

        this.onDataAvailable = this.onDataAvailable.bind(this);

        this.externalChangeShrinkType = this.externalChangeShrinkType.bind(this);

        this.navigatorComponentScripts = this.navigatorComponentScripts.bind(this);

        this.propsInitData = this.propsInitData.bind(this);
        this.onVpnInfo = this.onVpnInfo.bind(this);
        this.onEmptyData = this.onEmptyData.bind(this);

    }

    onDataAvailable() {

        const keys = ["userFrom", "vpninfo", "country", "subdivision", "location", "request_from_host", "iframeLoadingTime", "host", "reqpath", "phpsid", "dest", "incognito", "wurfl", "fingerprint", "recapv3", "botDetect", "skipMouse", "delta"];

        this.onHandleFull();

        for (var p in keys) {

            if (!window[___reactjsD.o].hasOwnProperty(keys[p])) {
                console.log('onDataAvailable', false, p, keys[p]);
                return false;
            }

        }
    }

    onAuthGoogle(google_user) {
        ___reactjsD.auth2 = google_user;

        let signed = getNestedObj(() => ___reactjsD.auth2.isSignedIn()) || false;
        let oAuth = google_user

        let userBasics = {};

        if (signed && oAuth) {
            oAuth = getNestedObj(() => oAuth.getBasicProfile()) || [];

            userBasics = {
                id: (oAuth.getId() ? oAuth.getId() : 'id:n/a'),
                name: (oAuth.getName() ? oAuth.getName() : 'Unknow'),
                firstname: (oAuth.getGivenName() ? oAuth.getGivenName() : 'Unk. Name'),
                familyname: (oAuth.getFamilyName() ? oAuth.getFamilyName() : 'Unk. F.Name'),
                email: (oAuth.getEmail() ? oAuth.getEmail() : 'Unk. Email'),
                signed: true
            }

            if (window.ga && ga.create) {
                ga('create', _adshrink.analytics_id, 'auto', 'adshrinktraker', {
                    userId: userBasics.id
                });

                ga('send', 'event', 'GSign', 'prototype', 'Login', 10);


            }

            window.ubasics = userBasics;

        } else {
            userBasics = false;

        }

        this.setState({ oAuth: userBasics });

        return userBasics;

    }

    ads_by_google_check_rendered = () => {

        for (let i = 0; i < (parseInt(Object.keys($('.adsbygoogle')).length) - 1); i++) {
            if (typeof $('.adsbygoogle')[i] !== 'undefined')
                console.log(i, $('.adsbygoogle')[i].children.length);
        }

    }

    onHandleFull(event = null, rec = false) {
        //event.preventDefault();

        //console.log('___reactjsD.handle_full_data', ___reactjsD.handle_full_data);
        if (___reactjsD.handle_full_data)
            return false;

        const that = this;

        let data = getNestedObj(() => this.state.initShrinkData) || [];
        let get_shrink_id = getNestedObj(() => data.id);

        let { recaptcha } = this.state || false;

        const _state = { b: get_shrink_id, d0: $('meta[http-equiv="c-token"]').attr('key'), d1: this.state.initShrinkData.input[0], s0: getNestedObj(() => this.state.initShrinkData.data.id) };

        var url = (!isEmpty(document.referrer) ? new URL(document.referrer) : { origin: 'emptyReferrer' });
        //url = (url.origin === 'emptyReferrer' ? (!isEmpty(localStorage.getItem('_referrer')) ? {origin: localStorage.getItem('_referrer')} : url ) : url);

        const deltaMouse = getDeltaMouse();

        if (!window[___reactjsD.o].hasOwnProperty('skipMouse'))
            window[___reactjsD.o] = Object.assign({}, window[___reactjsD.o], { skipMouse: { time: (((Date.now() - timerStart) / 1000) + 's') }, delta: deltaMouse });

        window[___reactjsD.o] = Object.assign({},
            window[___reactjsD.o],
            {
                trusted: true, docReferrer: url.origin,
                navigator: {
                    os: navigator.platform,
                    cookie: navigator.cookieEnabled,
                    language: navigator.language,
                    width: screen.width,
                    height: screen.height,
                    uA: window.navigator.userAgent
                }
            }
        );

        if (!window[___reactjsD.o].hasOwnProperty('iframeLoadingTime')) {
            window[___reactjsD.o] = Object.assign({},
                window[___reactjsD.o],
                {
                    iframeLoadingTime: { loaded: false, time: '0s', iframeMouseOver: 0, iframeClick: 0 }
                }
            );
        }

        const properties = ["wurfl", "botDetect", "iframeLoadingTime", "skipMouse", "navigator", "vpninfo"];

        for (var p in properties) {
            //console.log(properties[p], window[_state.d1].hasOwnProperty( properties[p] ))
            if (!window[_state.d1].hasOwnProperty(properties[p]))
                return false;
        }

        ___reactjsD.handle_full_data = true;

        if (_state.b) {

            /** event */  ga('send', 'event', 'Page', 'destination', 'validate_view_full', 100);

            let datatosend = { booleanDataRequest: _state.b, int_shid: get_shrink_id, objTiming: window[_state.d1], t: _state.d0 };

            let verify = goNext(datatosend);

            verify.then((response) => {

                //console.info("verify_then", datatosend, response.data, {booleanDataRequest: _state.b, int_shid: _state.s0, objTiming: window[_state.d1], t: _state.d0}, _state);

                that.setState({ requestedPage: true, url: response.data.url });

                if (recaptcha && !isEmpty(recaptcha))
                    window.location.href = getNestedObj(() => response.data.url);

                ___reactjsD.verify_destination = { b: true, uri: response.data.url }

            })
                .catch((error) => {

                    console.warn('verify_error', error);

                    that.setState({ requestedPage: true, url: window[___reactjsD.o].dest });

                    ___reactjsD.verify_destination = { b: true, uri: window[___reactjsD.o].dest }

                })
        }

        //try { document.getElementById('after_the_b_g').scrollIntoView(); } catch(e) { console.warn('scroll') }
    }

    onHandleSkip(e) {
        e.preventDefault();
        this.setState({ clicked: true });

        const deltaMouse = getDeltaMouse();

        if (!window[___reactjsD.o].hasOwnProperty('skipMouse'))
            window[___reactjsD.o] = Object.assign({}, window[___reactjsD.o], { skipMouse: { time: (((Date.now() - timerStart) / 1000) + 's') }, delta: deltaMouse });

    }

    onHandleDirect(special = false) {
        const that = this;
        if (this.state.type === 'direct' || special) {

            for (var e in this.state.script) {
                if (!this.state.script[e])
                    return false;
            }

            let rv3 = getNestedObj(() => window[___reactjsD.o].recapv3.success);

            if (!rv3)
                return false;

            if (that.state.script.wurfl === 'error' || that.state.script.fingerprint === 'error')
                return false;

            if (that.state.script.botDetect === true) {
                window[___reactjsD.o] = Object.assign({}, window[___reactjsD.o], {
                    botDetect: { isUser: true, tests: { key: false, mouse: true, scroll: false } },
                });
            }
            var url = (!isEmpty(document.referrer) ? new URL(document.referrer) : { origin: 'emptyReferrer' });
            //url = (url.origin === 'emptyReferrer' ? (!isEmpty(localStorage.getItem('_referrer')) ? {origin: localStorage.getItem('_referrer')} : url ) : url);

            const deltaMouse = getDeltaMouse();

            if (!window[___reactjsD.o].hasOwnProperty('skipMouse'))
                window[___reactjsD.o] = Object.assign({}, window[___reactjsD.o], { skipMouse: { time: (((Date.now() - timerStart) / 1000) + 's') }, delta: deltaMouse });

            window[___reactjsD.o] = Object.assign({},
                window[___reactjsD.o],
                {
                    trusted: true, docReferrer: url.origin,
                    navigator: {
                        os: navigator.platform,
                        cookie: navigator.cookieEnabled,
                        language: navigator.language,
                        width: screen.width,
                        height: screen.height,
                        uA: window.navigator.userAgent
                    },
                    specialPremium: special,
                    docReferrer: url.origin,
                    trusted: true,
                }
            );

            if (!window[___reactjsD.o].hasOwnProperty('iframeLoadingTime')) {
                window[___reactjsD.o] = Object.assign({},
                    window[___reactjsD.o],
                    {
                        iframeLoadingTime: { loaded: false, time: '0s', iframeMouseOver: 0, iframeClick: 0 }
                    }
                );
            }

            let data = getNestedObj(() => this.state.initShrinkData) || [];
            let get_shrink_id = getNestedObj(() => data.id);

            //console.info('!DIRECT!', window[___reactjsD.o]);

            /** event */  ga('send', 'event', 'Page', 'destination', 'validate_view_direct', 100);

            const _state = { b: true, d0: this.state.initShrinkData.output.dynamic[0], d1: this.state.initShrinkData.output.dynamic[1], s0: this.state.initShrinkData.output.shrink[0] };
            const verify = goNext({ booleanDataRequest: _state.b, int_shid: get_shrink_id, objTiming: window[_state.d1], t: _state.d0 });
            verify.then((response) => {
                //console.info("verify_then_direct", window[_state.d1], response, {booleanDataRequest: _state.b, int_shid: _state.s0, objTiming: window[_state.d1], t: _state.d0}, _state);
                //console.info('RESPONSE DIRECT', response);
            })
                .catch((error) => {
                    console.warn('ERROR DIRECT', error);
                })
        }
    }

    onScriptLoad(scriptname, src) {
        const that = this;

        let script;
        let request_script = new_script(src);

        request_script.then(function (resolve) {
            script = Object.assign({}, that.state.script, { [scriptname]: true }); that.setState({ script });
        }).catch(function (reject) {
            script = Object.assign({}, that.state.script, { [scriptname]: 'error' }); that.setState({ script });
        });
    }

    onHandleScript() {
        const that = this;

        const scripts = Object.keys(that.state.script);
        const object = { 'botDetect': 'botDetect', 'wurfl': 'WURFL', 'recapv3': 'grecaptcha', 'fingerprint': 'Fingerprint2' }
        const taboolaDev = ["Desktop", "Tablet"];

        scripts.map((key) => {
            if (typeof (window[object[key]]) !== 'undefined' && that.state.script[key] === true) {
                switch (key) {
                    case 'botDetect':
                        window[object[key]].onUser(function () {
                            let script = Object.assign({}, that.state.script, { [key]: 'isUser: ' + window[object[key]].isUser }); that.setState({ script });
                            window[___reactjsD.o] = Object.assign({}, window[___reactjsD.o], { [key]: { isUser: window[object[key]].isUser, tests: window[object[key]].tests } })
                        })
                        break;
                    case 'fingerprint':
                        new Fingerprint2({ swfPath: '/assets/FontList.swf', excludeUserAgent: true }).get(function (bkey, components) {
                            let script = Object.assign({}, that.state.script, { [key]: 'browserFingerprint: ' + bkey }); that.setState({ script });
                            window[___reactjsD.o] = Object.assign({}, window[___reactjsD.o], { [key]: bkey });
                        });
                        break;
                    case 'wurfl':
                        let script = Object.assign({}, that.state.script, { [key]: JSON.stringify(window[object[key]]) }); that.setState({ script });
                        window[___reactjsD.o] = Object.assign({}, window[___reactjsD.o], { [key]: window[object[key]] });
                        if (!___reactjsD.enabled_taboola_mobile && taboolaDev.indexOf(window[object[key]].form_factor) < 0)
                            $('#taboola-below-article-thumbnails').remove();//$('#_div_recaptcha_under_ads').css({"background-color": "white"});
                        break;
                    case 'recapv3':
                        window[object[key]].ready(function () {

                            if (!isEmpty(that.state.recaptcha))
                                return true;

                            //official 1/5/2022 (window[___reactjsD.o].uid) (metatag)
                            window[object[key]].execute(___reactjsD.pk3_recaptcha, { action: window[___reactjsD.o].uid })
                                .then(function (token) {
                                    axios.post(___reactjsD.verification_recaptcha, objToFormdata({ response: token, v: 'v3' }))//axios.post('https://www.shrink-service.it/api-extension/prototype/recaptcha', objToFormdata({booleanRecaptchaV3: true, postkey: token, v: 3}))
                                        .then(function (result) {

                                            if (getNestedObj(() => result.data.success))
                                                window[___reactjsD.o] = { ...window[___reactjsD.o], recapv3: getNestedObj(() => result.data) }; //result.data.g_response[0]

                                        })
                                        .catch(function (error) {
                                            console.warn('grecaptcha.execute.server', error);
                                        });
                                })

                            //that.setState({recaptcha: true});

                        });
                        break;
                }
            }
        });
    }

    on_premium = () => {
        let that = this;

        if (window.premiumCheck)
            return false;

        if (___reactjsD.premium_special_req)
            return false;

        let type = getNestedObj(() => this.state.type) || 'Normal';
        let data = getNestedObj(() => this.state.initShrinkData) || [];
        let form_factor = getNestedObj(() => this.state.wurfl.form_factor) || 'Desktop';
        let connection = getNestedObj(() => this.state.connection) || '3g';

        let get_shrink_id = getNestedObj(() => data.id);
        let get_user_id = getNestedObj(() => data.userid);
        let get_user_red = getNestedObj(() => decodeHtml(data.destination));

        let basic = getNestedObj(() => this.state.oAuth);

        //console.log('onpremium-vars', basic, type, data, form_factor, connection, get_shrink_id, get_user_id);

        let unlimitedSkip = $.post('https://www.shrink-service.it/v2/public/api/prototype/premium', { oauth_user: { id: basic.id, email: basic.email, name: basic.name }, adshrink_user: get_user_id });

        try {
            window.toastr.info('<b> 💡 Checking subscription status .. </b> <br/> <a href="' + _adshrink.instagram + '" target="_blank"><i className="instagram icon"></i> Follow </a> <a href="' + _adshrink.facebook + '" target="_blank"><i className="facebook f icon"></i> Follow </a>', null, { "positionClass": "toast-bottom-left" });
        } catch (error) {
            console.warn('toastr-error');
        }

        console.log('onpremium-vars', basic, type, data, form_factor, connection, get_shrink_id, get_user_id, unlimitedSkip);

        window.premiumCheck = true;

        unlimitedSkip.then((response) => {

            if (getNestedObj(() => response.premium) && getNestedObj(() => response.special)) {
                //that.onHandleDirect(true);

                //decodeHtml
                window.location.href = decodeHtml(window[___reactjsD.o].dest);

                try {
                    window.toastr.success("<b>👑 Premium detected!</b> <br/> " + language.completed + ' <br/> <a href="' + _adshrink.instagram + '" target="_blank"><i className="instagram icon"></i> Follow </a> <a href="' + _adshrink.facebook + '" target="_blank"><i className="facebook f icon"></i> Follow </a>', null, { "positionClass": "toast-bottom-left" });
                } catch (error) {
                    console.warn('toastr-error');
                }

                ___reactjsD.premium_special_req = true
            } else if (getNestedObj(() => response.premium)) {

                try {
                    window.toastr.success("<b>👑 Premium detected!</b> <br/> " + language.completed + ' <br/> <a href="' + _adshrink.instagram + '" target="_blank"><i className="instagram icon"></i> Follow </a> <a href="' + _adshrink.facebook + '" target="_blank"><i className="facebook f icon"></i> Follow </a>', null, { "positionClass": "toast-bottom-left" });
                } catch (error) {
                    console.warn('toastr-error');
                }

                Object.keys(response.user).map((stored_premium) => {
                    let { plan } = response.user[stored_premium] || [];

                    if (type === 'Exclusive' && plan === 'ExclusiveContent') {
                        /** event */  ga('send', 'event', 'Page', 'destination', 'premium_exclusivecontent', 100);
                        window.location.href = decodeHtml(window[___reactjsD.o].dest);
                    } else if (type !== 'Exclusive' && plan === 'UnlimitedSkip') {
                        /** event */  ga('send', 'event', 'Page', 'destination', 'premium_unlimitedskip', 100);
                        window.location.href = decodeHtml(window[___reactjsD.o].dest);
                    }

                });

            } else {
                return false;
            }

        }).catch((error) => {
            //window.toastr.error('Something gone wrong about your premium.. If the problem persists, contact support.', null, { "positionClass": "toast-bottom-left"});

        })

        if (window.hasOwnProperty("ga") && !window.adsht) {

            window.adsht = true;

            ga('create', {
                trackingId: '',
                cookieDomain: 'auto',
                name: 'adsh.t',
                userId: basic.id
            });

        }
    }

    on_script_load_first_page = () => {

        try {
            $('#premium_video_mob').embed();


        } catch (error) {
            console.warn('Adshrink:error', error);
        }

    }

    on_script_load_second_page = () => {

    }

    async componentDidMount() {

        console.log('-PROTOTYPE-', this.props);

        delete axios.defaults.headers.common['Authorization'];

        let that = this;

        let dynamic_rjs = JSON.parse(window.atob(window.dynamic));

        ___reactjsD = Object.assign({}, ___reactjsD, { t: dynamic_rjs[2], o: dynamic_rjs[0], from: dynamic_rjs[1] });

        let loaded_interval = setInterval(function () {

            let _script_loaded = getNestedObj(() => that.state.loaded) || false;

            if (!_script_loaded) {

                if (window.labjs_scripts)
                    that.setState({ loaded: true, componentLoaded: true });

                check_user_iab_permissions();

                that.on_script_load_first_page();
                that.on_script_load_second_page();

            } else {

                try {
                    clearInterval(loaded_interval);
                } catch (error) {
                    console.warn('interval-cleared');
                }

            }

        }, 333);

        //this.setState({componentLoaded: true})

    }

    component_redered = () => {

        let that = this;

        if ("gapi" in window && window.location.hostname !== 'localhost') {
            gapi.signin2.render('g-signin2', {
                'scope': 'profile email',
                'width': 240,
                'height': 50,
                'longtitle': false,
                'theme': 'dark',
                'onsuccess': that.onAuthGoogle,
                'onfailure': function (error) {
                    console.warn('Google::render::g-signin2', error);
                }
            });

            gapi.load('auth2', function () {
                ___reactjsD.auth2 = gapi.auth2.init({
                    client_id: _adshrink.google_sign_id
                });

                ___reactjsD.auth2.attachClickHandler(
                    'g-signin2', {},
                    that.onAuthGoogle,
                    function (error) {
                        console.warn('Google::attachClickHandler::g-signin2', error);
                    });
            });
        }

        try {

            if (!window.init_sharer || isEmpty($('#modal_share_content'))) {

                let data = [{ sharer: 'facebook' }, { sharer: 'twitter' }, { sharer: 'linkedin' }, { sharer: 'email' }, { sharer: 'whatsapp' }, { sharer: 'telegram' }, { sharer: 'viber' }, { sharer: 'pinterest' }, { sharer: 'tumblr' }, { sharer: 'hackernew' }];

                $('#container_sharer').children().remove();

                Object.keys(data).map((elem) => {

                    let { sharer, url } = data[elem];

                    $('#container_sharer').append('<div className="three wide desktop four wide tablet sixteen wide mobile column"><button className="ui secondary fluid button" data-description="' + $('meta[property="og:description"]').attr('content') + '" data-title="' + $('meta[property="og:title"]').attr('content') + '" data-url="' + $('meta[property="og:url"]').attr('content') + '"  data-web="' + $('meta[property="og:url"]').attr('content') + '" data-sharer="' + sharer + '" data-image="' + $('meta[property="og:image"]').attr('content') + '">' + sharer.toUpperCase() + '</button>');

                });

                window.Sharer.init();

            }

        } catch (error) {
            console.warn('sticky-ads-error-scroll');
        }

        //$('#wikipedia').accordion({ selector: {trigger: '.title'} });

        $('#smartphone_menu_dropdown').dropdown();

        $('.basic-inverted-popup').popup();

    }

    /** SECOND FETCH */
    fetchPageData = (id, userid, c) => {
        let that = this || [];

        /* news, lastlinks, premium, tweets */
        $.post('https://www.shrink-service.it/v3/public/api/prototype/public/' + userid + '/' + id, {
            c: c,
            referrer: getNestedObj(() => window.document.referrer),
            host: window.dhost,
            ua: window.navigator.userAgent,
            cpi: getNestedObj(() => that.props.data.cpi, [])
        }).then((res) => {

            if (getNestedObj(() => res.success)) {
                /** set the entire response and extract usermain */
                let usermain = getNestedObj(() => res.usermain, { 0: 'Unknow' });
                that.setState({ publicdata: res, user: usermain });

            } else {
                window.location.href = "https://adshnk.com/HTTP404.html";
            }

        });

    }

    fetchUserData = (id, userid) => {

        if (parseInt(id) <= 0 || parseInt(userid) <= 0)
            return false;

        const server_user = ssapi_functions('api', { method: 'post/user', shrink: id, user: userid });

        server_user.then((res) => {

            if (!getNestedObj(() => res.data))
                return false;

            const user = getNestedObj(() => res.data[0]) || [];

            this.setState({ user });

        }).catch((error) => {

            //this.setState({user: {username: 'AdShrink Private User', permission: 'Private'} });

        })


    }

    propsInitData(from = 'props', idata = null) {

        let { init } = this.state || false;

        if (init)
            return false;

        let dynamic_rjs = JSON.parse(window.atob(window.dynamic));

        ___reactjsD = Object.assign({}, ___reactjsD, { t: dynamic_rjs[2], o: dynamic_rjs[0], from: dynamic_rjs[1] });

        var data = null;

        if (from === 'props') {

            if (isEmpty(this.props.data) || isEmpty(this.props.dynamic))
                this.onEmptyData();

            data = getNestedObj(() => this.props.data) || [];

            console.warn('data', data);

        } else if (from === 'state') {

            data = idata || [];

        }

        if (isEmpty(data))
            this.onEmptyData();

        let dest = decodeHtml(getNestedObj(() => data[0].destination));
        let type = (getNestedObj(() => data[0].type)) || 'Normal';
        let userid = parseInt((getNestedObj(() => data[0].userid))) || 2;
        let shrinkid = parseInt((getNestedObj(() => data[0].id))) || 2;
        let location = (getNestedObj(() => data.location, false)) || false;
        let oncontinuefirstpage = false;

        if (___freeadsusers.indexOf(userid) >= 0) {
            _adshrink.skiptime = 60;
            _adshrink.enabled.iframe = false;
            _adshrink.enabled.skip = false;
            oncontinuefirstpage = true;
        }

        if (___15cd.indexOf(userid) >= 0) {
            _adshrink.skiptime = 15;
        }

        oncontinuefirstpage = true;

        /** no adsense users */
        if (___noadsenseusers.indexOf(userid) >= 0) {
            _adshrink.enabled.adsense = false;
        }

        if (___banned_permanently.indexOf('adshrink.it' + window.location.pathname) >= 0) {
            _adshrink.enabled.adsense = false;
        }

        /** set ran if system cpi */
        if (_adshrink.SystemCPI.indexOf(userid) >= 0) {
            window[___reactjsD.o] = Object.assign({}, window[___reactjsD.o], { ran: 123456 });
        }


        window[___reactjsD.o].uid = userid;
        window[___reactjsD.o].host = getNestedObj(() => data.host);
        window[___reactjsD.o].reqpath = getNestedObj(() => data.path);
        window[___reactjsD.o].phpsid = getNestedObj(() => data.phpsessionid);
        window[___reactjsD.o].dest = dest;

        window[___reactjsD.o].exemicrotiming = getNestedObj(() => data.exe_microtime_function);
        window[___reactjsD.o].exemicrotimingq = getNestedObj(() => data.exe_microtime_query);
        window[___reactjsD.o].tempshc = getNestedObj(() => data.sys_host_cookie);

        window.dhost = getNestedObj(() => window[___reactjsD.o].host);

        try {
            let _shc = parseInt(window[___reactjsD.o].tempshc);
            _shc = (_shc > 0 ? _shc : 1);

            if (isEmpty(window.localStorage.getItem('aduid'))) { //posibileProblema

                window[___reactjsD.o].shcid = _shc;
                window.localStorage.setItem('aduid', window[___reactjsD.o].shcid);
            } else {
                let aduid = window.localStorage.getItem('aduid');
                aduid = (aduid === 'NaN' ? _shc : aduid);
                window[___reactjsD.o].shcid = aduid;
                window.localStorage.setItem('aduid', aduid);
            }

        } catch (error) {
            let _shc = parseInt(window[___reactjsD.o].tempshc);
            _shc = (_shc > 0 ? _shc : 1);

            window[___reactjsD.o].shcid = _shc;
        }

        const time_difference_percange = ((1 - (window[___reactjsD.o].exemicrotimingq / window[___reactjsD.o].exemicrotiming)) * 100).toFixed(2);

        $('#small_loading_indicator').text('Loaded in ' + window[___reactjsD.o].exemicrotimingq.toFixed(5) + ' seconds (' + time_difference_percange + '% difference) - Ready in ' + ((new Date().getTime() - timerStart) / 1000) + 's');

        $('head').append('<meta http-equiv="c-token" key="' + data.token + '">');

        ///connection
        var connection = navigator.connection || navigator.mozConnection || navigator.webkitConnection || false;
        connection = getNestedObj(() => connection.effectiveType) || '3g'; //75% in the world
        ///

        this.setState({ initShrinkData: { ...getNestedObj(() => data[0]), input: dynamic_rjs }, type: type, init: true, connection: connection, clicked_continue: oncontinuefirstpage, vpninfo: location });

    }

    onVpnInfo() {

        const that = this;

        const on_success = (response, newr = false) => {
            var vpninfo = Object.assign({}, this.state.vpninfo, response);
            delete vpninfo.package;
            delete vpninfo.ipaddress;

            const { country, subdivision, city, postal, location, request_from_host } = response;

            window[___reactjsD.o].userFrom = country.code.toUpperCase();
            window[___reactjsD.o].vpninfo = response;

            window[___reactjsD.o].country = country;
            window[___reactjsD.o].subdivision = subdivision;
            window[___reactjsD.o].location = location;
            window[___reactjsD.o].request_from_host = request_from_host;

            if (newr)
                this.setState({ vpninfo });

            let shrink_id = getNestedObj(() => that.props.data[0].id);
            let user_id = getNestedObj(() => that.props.data[0].userid);

            this.fetchPageData(shrink_id, user_id, country);

            /** enabled adsense and taboola and disable if conditions  */
            console.warn('vpn response data', _adshrink.allowedCountriesTaboola, country?.code, _adshrink.allowedCountriesTaboola.indexOf(country?.code))
            if (_adshrink?.allowCountriesControl && _adshrink.allowedCountriesTaboola.indexOf(country?.code) == -1) {
                _adshrink.enabled.taboola = false;
                _adshrink.enabled.adsenseFull = true;
            }

            /**
             * checking user and disabling components
             * _adshrink.allowedCountriesTaboola
             */
            var isVpn = getNestedObj(() => response['host-ip'], false);
            isVpn = ((!!isVpn && isVpn == "true") || isVpn === true) ? true : false;

                /** console */ console.log('1) is vpn.. ', isVpn);


            if (isVpn) {
                /** disable adsense */
                _adshrink.enabled.adsense = false;
                //_adshrink.enabled.taboola = false;
                //_adshrink.userStatus.vpnScore = isVpn;
                //$('#goog_loader_script, #tb_loader_script').remove();
                ga('send', 'event', 'User', 'is_vpn', window[___reactjsD.o]?.uid, 100);
            } else {
                ga('send', 'event', 'User', 'not_vpn', 'Not Vpn User', 0);
            }

        }

        const vpninfo = getNestedObj(() => this.state.vpninfo, false) || false;

        console.log('onVpnInfo - location, vpninfo', vpninfo);

        const page = new Url();
        const path = page.path + (!isEmpty(page.query) ? ('?' + page.query) : '') + (!isEmpty(page.hash) ? ('#' + page.hash) : '');

        var hrefof = window.location.href.split('/');
        hrefof = hrefof.filter(function (value, index, arr) {
            return index > 2;
        });
        hrefof = "/" + hrefof.join('/');

        hrefof = window.btoa('/xvUIim');

        if (!vpninfo) {
            const server_vpninfo = ssapi('vpninfo', { req: 'vpninfo', uri_path: path });
            server_vpninfo.then((response) => {
                /** set parameters */ on_success(response.data, true);
            }).catch((error) => {
                console.warn('vpninfo', error);
                ga('send', 'event', 'Page', 'error_check_vpn', 'Server Request to VPN Checker', 100);
            });

        } else {
            on_success(vpninfo, false);
        }

    }

    onEmptyData() {

        alert('Empty DATA');

        return false;
    }

    shouldScriptDidUpdate(nextState) {
        const { vpninfo } = nextState || false;
        const { wurfl, recapv3, botDetect, fingerprint } = nextState.script || false;

        if (wurfl && recapv3 && botDetect && fingerprint)
            return true;

        return false;

    }

    externalChangeShrinkType(event, type) {
        event.preventDefault();

        this.setState({ type: type });
    }

    navigatorComponentScripts(data) {

        const wurfl = getNestedObj(() => data.wurfl) || [];

        this.setState({ wurfl });
    }

    shouldComponentUpdate(nextProps, nextState) {
        if (nextProps.data !== this.props.data) {
            return false;
        } if (nextState.loaded !== this.state.loaded) {
            return true;
        } if (nextState.componentLoaded !== this.state.componentLoaded) {
            return true;
        } if (nextState.initShrinkData !== this.state.initShrinkData) {
            return true;
        } if (nextState.type !== this.state.type || nextState.url !== this.state.url || nextState.recaptcha !== this.state.recaptcha) {
            return true;
        } if (nextState.wurfl !== this.state.wurfl || nextState.vpninfo !== this.state.vpninfo) {
            return true;
        } if (nextState.user !== this.state.user || nextState.oAuth !== this.state.oAuth) {
            return true;
        } if (nextState.clicked_continue !== this.state.clicked_continue || nextState.publicdata !== this.state.publicdata || nextState.v3publicdata !== this.state.v3publicdata) {
            return true;
        } if (nextState.html !== this.state.html || nextState.updatedhtml !== this.state.updatedhtml) {
            return true;
        }
        return false;
    }

    componentDidUpdate(nextProps, nextState) {

        if (nextProps.data !== this.props.data) {
            //this.propsInitData(); alert()
            //alert('PROPS data');
        }

        if (nextState.componentLoaded !== this.state.componentLoaded) {
            this.propsInitData();
        }

        if (nextState.initShrinkData !== this.state.initShrinkData) {

            this.onVpnInfo();

            detectIncognito(function (boolean) {
                window[___reactjsD.o] = Object.assign({}, window[___reactjsD.o], { incognito: boolean });
            });

            setWindowEventMouse();

            return true;

        }

        if (getNestedObj(() => this.state.oAuth.signed) && this.state.initShrinkData) {
            this.on_premium();
        }

        //script-caricati
        /*
        *
        * Azioni prima pagina.
        */
        if (nextState.loaded !== this.state.loaded) {
            this.component_redered();
        }

        if (nextState.publicdata !== this.state.publicdata) {
            this.on_publicdata_firstpage();

        }

        if (nextState.html !== this.state.html || nextState.updatedhtml !== this.state.updatedhtml) {
            window.lazyLoadInstance.update();
        }

        //script-caricati e click su continua dopo la prima pagina
        /*
        *
        * Azioni seconda pagina.
        */
        if (nextState.clicked_continue !== this.state.clicked_continue || (this.state.clicked_continue && nextState.v3publicdata !== this.state.v3publicdata)) {
            this.on_publicdata_secondpage();
        }


    }

    on_publicdata_firstpage = () => {

        let { html, updatedhtml, vpninfo, user } = this.state || [];
        let data = getNestedObj(() => this.state.initShrinkData) || [];
        let form_factor = getNestedObj(() => this.state.wurfl.form_factor) || false;

        let get_shrink_id = getNestedObj(() => data.id);
        let get_user_id = getNestedObj(() => data.userid);
        let get_user_name = getNestedObj(() => user.username);

        html.firstpage.lastlinks = <ErrorBoundary><LastLinks lastlinks={getNestedObj(() => this.state.publicdata.lastlinks)} /></ErrorBoundary>;
        /**
         * because we need also in firstpage
         */
        html.secondpage.news = <ErrorBoundary><LastNews vpn={vpninfo} dev={form_factor} news={getNestedObj(() => this.state.publicdata.news)} /></ErrorBoundary>;
        html.firstpage.content = getNestedObj(() => this.state.publicdata.content);
        //html.firstpage.telegram = <ErrorBoundary><TelegramBot data={data} dev={form_factor} stats={true} tupdates={getNestedObj(() => this.state.v3publicdata.anchoreth)} /></ErrorBoundary>

        updatedhtml = updatedhtml + 1;

        this.setState({ html: html, updatedhtml: updatedhtml });

    }

    on_publicdata_secondpage = () => {
        let { html, updatedhtml, vpninfo, user } = this.state || [];
        let data = getNestedObj(() => this.state.initShrinkData) || [];
        let form_factor = getNestedObj(() => this.state.wurfl.form_factor) || false;

        let get_shrink_id = getNestedObj(() => data.id);
        let get_user_id = getNestedObj(() => data.userid);
        let get_user_name = getNestedObj(() => user.username);

        html.secondpage.premium = <ErrorBoundary><Subscribers u={{ id: get_shrink_id, userid: get_user_id, username: get_user_name }} premium={getNestedObj(() => this.state.publicdata.premium)} /></ErrorBoundary>;
        html.secondpage.shop = <ErrorBoundary><div></div></ErrorBoundary>;
        //html.firstpage.telegram = <ErrorBoundary><TelegramBot data={data} dev={form_factor} stats={true} tupdates={getNestedObj(() => this.state.v3publicdata.anchoreth)} /></ErrorBoundary>
        html.firstpage.telegram = <ErrorBoundary><div className="ui success message"><div className="header"><b>AD</b> <a href="https://walletschat.com/?_w=0x9dbaef8535abB034B5ba3dF417b3b7CEB3c8bD4B&_text=I'm%20writing%20you%20from%20WalletsChat!" target="_blank" alt="walletschat url">WalletsChat Web</a></div><p>Send and receive messages by connecting your MetaMask Wallet. <b>Refer your friends — and start earning!</b> When your friend will buy the license you'll receive 10USDT directly on your wallet!</p></div></ErrorBoundary>
        html.secondpage.disqus = <ErrorBoundary><Disqus u={{ id: get_shrink_id, userid: get_user_id, username: get_user_name }} /></ErrorBoundary>;

        updatedhtml = updatedhtml + 1;

        this.setState({ html: html, updatedhtml: updatedhtml });

        /**
         * set premium links
         * 
         * _adshrink.premiumpage + username
         */
        $('a.modal_premium_infos').map((index, object) => {
            $(object)[0].href = _adshrink.premiumpage + get_user_name;
        });

    }

    on_continue_from_modal = (e, type = false) => {
        e.preventDefault();

        let { user } = this.state || [];

        let get_user_name = getNestedObj(() => user.username);

        if (type && type === 'premium') {
            window.location.href = (_adshrink.premiumpage + get_user_name);
            return true;
        }

        this.setState({ clicked_continue: true });
    }

    on_recaptcha_passed = (value) => {
        this.setState({ recaptcha: value });
    }

    on_choose_opt = (cpi = false) => {
        /** options: '2c_freemium' :  'opt' */
        let cookie = cpi ? false : safe_read_cookie('search_feed_adblock_active'); //adblock -> true
        let o_cookie = false; //safe_read_cookie('search_feed_once');
        let osusp_cookie = cpi ? false : safe_read_cookie('search_feed_suspect');
        let cpi_cookie_fail = cpi ? safe_read_cookie('cpi_app_fail') : false;
        let cpi_cookie_success = cpi ? safe_read_cookie('cpi_app_success') : false;
        let browser = cpi ? false : on_get_banned_browser(); //banned -> true

        console.log('prosnalized_ads_opt_selected', { search_feed_adblock_active: cookie, o_cookie: o_cookie, search_feed_suspect: osusp_cookie, browser: browser, cpi_cookie_fail: cpi_cookie_fail, cpi_cookie_success: cpi_cookie_success });

        if (cookie) {

            /** event */ ga('send', 'event', 'Page', 'choose_opt', 'forced_disabled_cookie', 0);
            return true;
        } else if (o_cookie) {

            /** event */ ga('send', 'event', 'Page', 'choose_opt', 'forced_disabled_successful_postback', 0);
            return true;
        } else if (osusp_cookie) {

            /** event */ ga('send', 'event', 'Page', 'choose_opt', 'forced_disabled_failed_postback', 0);
            return true;
        } else if (cpi_cookie_success) {

            /** event */ ga('send', 'event', 'Page', 'choose_opt', 'forced_disabled_cpi_success', 0);
            return true;
        } else if (cpi_cookie_fail) {

            /** event */ ga('send', 'event', 'Page', 'choose_opt', 'forced_disabled_cpi_fail', 0);
            return true;
        } else if (browser) {

            /** event */ ga('send', 'event', 'Page', 'choose_opt', 'forced_disabled_browser', 0);
            return true;
        }

        /** event */ ga('send', 'event', 'Page', 'choose_opt', 'opt_forced_searches', 1);
        return false;
    }

    componentWillUnmount() {

    }

    render() {

        let that = this;

        let { clicked_continue, publicdata } = this.state

        let type = getNestedObj(() => this.state.type) || 'Normal';
        let data = getNestedObj(() => this.state.initShrinkData) || [];
        let form_factor = getNestedObj(() => this.state.wurfl.form_factor) || false;
        let connection = getNestedObj(() => this.state.connection) || '3g';
        let redurl = getNestedObj(() => this.state.url);
        let user = getNestedObj(() => this.state.user) || 'Guest';
        let vpninfo = getNestedObj(() => this.state.vpninfo) || [];
        let cpi_offer = getNestedObj(() => this.state.publicdata.offer, []);

        $(document).ready(function () {

            if (window.document_ready)
                return false;

            window.document_ready = true;
            //document.addEventListener('visibilitychange', function(e) {
            //    console.log(document.hidden, e);
            //});
            if (!document.hidden) { }

            changeFavicon('https://www.shrink-service.it/ico/favicons.png');

            //RedirectCom();

        });

        const today = new Date();

        let _script_loaded = getNestedObj(() => this.state.loaded) || false;
        let basic = getNestedObj(() => this.state.oAuth);
        let recaptcha = getNestedObj(() => this.state.recaptcha) || false;

        let get_shrink_id = getNestedObj(() => data.id);
        let get_user_id = getNestedObj(() => data.userid);
        let get_user_name = getNestedObj(() => data.username);
        let get_user_sensitive = getNestedObj(() => user.permissions, 'FreeSignupUser') === 'FreeSignupUser' ? true : false;

        let desktop_tablet = (form_factor === 'Desktop' || form_factor === 'Tablet' ? true : false);

        console.log(_adshrink.enabled.opt_2.indexOf(get_user_id) >= 0 || get_user_sensitive, _adshrink.enabled.opt_2.indexOf(get_user_id), get_user_sensitive);

        /*
        * old-style
        * @media only screen and (min-width: 700px) { .custom-padding-seg { padding: 15px 27px 15px 40px !important; } } \ 
        *
        * must-js
        * __tcfapi('displayConsentUi',2, function() {}); QUANTCAST
        * 
        * 
        */

        return (
            <ErrorBoundary main={true}>

                {_script_loaded &&
                    <React.Fragment>

                        <ErrorBoundary>
                            <ModalSharer />
                            {getNestedObj(() => _adshrink.enabled.taboolaModal, false) && <TaboolaBannerModal dev={form_factor} active={false} ref={this.tModal} />}

                            {/** non esce se systema markus & sensitive insieme */}
                            {(_adshrink.enabled.opt_2.indexOf(get_user_id) >= 0 || _adshrink.SystemCPI.indexOf(get_user_id) >= 0) && <SponsorizedIframeModal dev={form_factor} data={data} offer={cpi_offer} se={get_user_sensitive} vpn={{}} />}{/** vpninfo */}
                        </ErrorBoundary>

                        {!isEmpty(data) && true == false &&
                            <ErrorBoundary>
                                <ComponentExtraScripts importNavigatorScript={this.navigatorComponentScripts} />
                            </ErrorBoundary>
                        }

                        <div className={"ui grid stackable " + (isEmpty(data) ? 'blurred' : '')} id="app_second_panel">

                            <div className="sixteen wide column" id="first_div_full">
                                <ErrorBoundary>
                                    <SemanticNav
                                        method_change_shrink_type={this.externalChangeShrinkType}
                                        dev={form_factor} u={{ id: get_shrink_id, userid: get_user_id }} />
                                </ErrorBoundary>
                            </div>

                            {recaptcha &&
                                <div className="four wide computer eight wide tablet sixteen wide mobile column center algined" style={{ background: "#f8f9fa", padding: "27px 20px 7px 7px" }}>
                                    {desktop_tablet && true === false &&
                                        <ErrorBoundary>
                                            <ComponentStaticStepsMessages />
                                        </ErrorBoundary>
                                    }

                                    {desktop_tablet && true === true && <ErrorBoundary>{_adshrink?.enabled?.adsenseFull && <AdsenseBanner size={'half_page_responsive'} />}<TaboolaBanner size={'Mid_Article_Reco_Reel'} /></ErrorBoundary>}
                                    {!desktop_tablet && true === true && <ErrorBoundary>{_adshrink?.enabled?.adsenseFull && <AdsenseBanner size={'half_page'} />}<TaboolaBanner size={'Mid_Article_Reco_Reel'} /></ErrorBoundary>}

                                    { /** versione pre selezione countries - abilitare questi se solo taboola e adsense paraziale */}
                                    {desktop_tablet && true == false && <ErrorBoundary><br /><br /><TaboolaBanner size={'Mid_Article_Reco_Reel'} /></ErrorBoundary>}
                                    {!desktop_tablet && true == false && <ErrorBoundary><br /><br /><TaboolaBanner size={'Mid_Article_Reco_Reel'} /></ErrorBoundary>}

                                    {desktop_tablet && clicked_continue && getNestedObj(() => this.state.html.firstpage.telegram)}
                                    {desktop_tablet && getNestedObj(() => this.state.html.secondpage.premium)}

                                </div>
                            }

                            {!isEmpty(data) && !clicked_continue && recaptcha && _adshrink.enabled.firstpage &&
                                <ErrorBoundary>
                                    <ComponentFirstPage
                                        on_continue={this.on_continue_from_modal}
                                        data={data} u={{ id: get_shrink_id, userid: get_user_id, username: user }} vpn={vpninfo} dev={form_factor} type={type} basic={basic} connection={connection} publicdata={{ tweets: getNestedObj(() => publicdata.tweets) }}
                                        html_lastlinks={getNestedObj(() => this.state.html.firstpage.lastlinks)}
                                        html_telegrambot={getNestedObj(() => this.state.html.firstpage.telegram)} />
                                </ErrorBoundary>
                            }

                            {!recaptcha && true === false &&
                                <ErrorBoundary>
                                    <ComponentRecaptcha />
                                </ErrorBoundary>
                            }

                            {clicked_continue && recaptcha &&
                                <React.Fragment>

                                    <div className="twelve wide computer eight wide tablet sixteen wide mobile column" style={(form_factor === 'Smartphone' ? {} : { padding: "0px" })}>

                                        <div className="ui segment basic" style={{ margin: "0px", paddingBottom: "0px", top: "12px" }}>

                                            {true === false && <TaboolaBanner size="Mid_Article_5X1" />}
                                            {/** opera only desktop */}
                                            {form_factor === 'Desktop' && true === false &&
                                                <Affiliate vpn={vpninfo} />
                                            }
                                            {/** adsense only desktop - leaderboard disabled here, check in affialite */}
                                            {form_factor === 'Desktop' && true === true && _adshrink?.enabled?.adsenseFull &&
                                                <ErrorBoundary><AdsenseBanner size={'leaderboard'} /></ErrorBoundary>
                                            }

                                            {form_factor === 'Tablet' && true === true &&
                                                <ErrorBoundary>{_adshrink?.enabled?.adsenseFull && <AdsenseBanner size={'leaderboard'} />}<TaboolaBanner size="Mid_Article_5X1" /></ErrorBoundary>
                                            }

                                            {/** adsense qua no  */}
                                            {form_factor === 'Smartphone' && true === false &&
                                                <ErrorBoundary><AdsenseBanner size={'half_page'} /><TaboolaBanner size="Mid_Article_Reco_Reel" /></ErrorBoundary>
                                            }

                                            {form_factor === 'Tablet' &&
                                                <ErrorBoundary><TaboolaBanner size="Mid_Article_5X1" /></ErrorBoundary>
                                            }

                                        </div>

                                        {form_factor === 'Smartphone' &&
                                            <ErrorBoundary>
                                                <ComponentStaticStepsMessages />
                                            </ErrorBoundary>
                                        }

                                        <ErrorBoundary>
                                            {_adshrink.enabled.opt_2.indexOf(get_user_id) == -1 && true == false &&
                                                <SemanticNavContent dev={form_factor} data={data} type={type} skip={this.onDataAvailable} url={redurl} basic={basic} user={user} />
                                            }

                                            {true === true && //_adshrink.enabled.opt_2.indexOf(get_user_id) >= 0 && 
                                                <GoNextOpt
                                                    on_choose_opt={this.on_choose_opt}
                                                    opt={this.on_choose_opt() === true ? '2c_freemium' : 'opt'}
                                                    vpn={vpninfo}
                                                    dev={form_factor} data={data} type={type} skip={this.onDataAvailable} url={redurl} basic={basic} user={user} offer={cpi_offer} />
                                            }
                                        </ErrorBoundary>

                                        <ErrorBoundary>
                                            <ComponentComplete
                                                data={data} type={type} basic={basic} user={user}
                                                html_lastlinks={getNestedObj(() => this.state.html.firstpage.lastlinks)}
                                                html_disqus={getNestedObj(() => this.state.html.secondpage.disqus)}
                                                form_factor={form_factor} />
                                        </ErrorBoundary>

                                        {form_factor === 'Smartphone' && getNestedObj(() => this.state.html.firstpage.telegram)}
                                        {form_factor === 'Smartphone' && getNestedObj(() => this.state.html.secondpage.premium)}

                                        <ErrorBoundary>
                                            <ComponentInfos />
                                        </ErrorBoundary>


                                    </div>

                                    {!desktop_tablet && true === false &&
                                        <div className="four wide computer eight wide tablet sixteen wide mobile column" style={{ background: "#f8f9fa", padding: "27px 20px 7px 7px" }}>

                                            {true === false && <p><a onClick={(e) => this.onDataAvailable()}>Check</a></p>}

                                            {desktop_tablet && true === false &&
                                                <ComponentStaticStepsMessages />
                                            }

                                            <ErrorBoundary><AdsenseBanner size={'half_page_responsive'} /></ErrorBoundary>

                                            {getNestedObj(() => this.state.html.secondpage.premium)}

                                        </div>
                                    }

                                </React.Fragment>
                            }

                        </div>

                        {recaptcha && true == true &&
                            <React.Fragment>

                                <div className="ui divider"></div> <br />

                                <div className={"ui grid centered stackable container" + (isEmpty(data) ? 'blurred' : '')}>

                                    <div className={"sixteen wide column"}>
                                        {getNestedObj(() => this.state.html.secondpage.news)}
                                    </div>

                                    <div className="sixteen wide column"><div className="ui divider"></div></div>

                                    <div className="sixteen wide column">
                                        <ErrorBoundary>
                                            <ComponentFirstInfoSegment />
                                        </ErrorBoundary>
                                    </div>

                                    <div className="sixteen wide column"><div className="ui divider"></div></div>

                                    <div className="sixteen wide column">
                                        <ErrorBoundary>
                                            <ComponentSecondInfoSegment />
                                        </ErrorBoundary>
                                    </div>

                                    <div className="sixteen wide column"><div className="ui divider"></div></div>

                                    {form_factor &&
                                        <div className="sixteen wide column" style={{ marginBottom: "30px" }}>
                                            <ErrorBoundary>
                                                <BlogCards dev={form_factor} />
                                            </ErrorBoundary>
                                        </div>
                                    }

                                    {getNestedObj(() => this.state.html.firstpage.content) &&
                                        <React.Fragment>
                                            <div className="sixteen wide column"><div className="ui divider"></div></div>

                                            <div className="sixteen wide column">
                                                <h2 className="ui header">
                                                    <i className="thumbtack icon"></i>
                                                    <div className="content">
                                                        <div className="sub header">ABOUT</div>
                                                        Related Content
                                                        <div className="sub header">Powered by Machine learning</div>
                                                    </div>
                                                </h2>
                                                <div dangerouslySetInnerHTML={{ __html: getNestedObj(() => this.state.html.firstpage.content) }}></div>
                                            </div>
                                        </React.Fragment>
                                    }

                                </div>

                            </React.Fragment>
                        }

                        {!recaptcha &&
                            <React.Fragment>
                                <div className="ui grid stackable middle aligned lazy 100vh" data-bg-multi="linear-gradient(to left ,rgb(248 249 250) 40%, rgb(248 249 250 / 0%)), url(https://i.ibb.co/WHNbxPZ/bot-analytics-hero-illustration-3-1.png)" style={{ padding: "120px 0px", backgroundColor: "#000000d6 !important", width: "100% !important", backgroundSize: "contain", backgroundRepeat: "no-repeat", margin: "5%", backgroundPosition: "calc(50% + 50px) 50%" }} >
                                    <div className="eight wide column left aligned">
                                        {true == false &&
                                            <h2 className="ui header">
                                                Before continuing..
                                                <div className="sub header"> • This page checks if the requests <br /> are really sent by you and not by a robot. <a href="https://www.cpomagazine.com/cyber-security/the-hidden-dangers-of-malicious-bots/" target="_blank">Why?</a></div>
                                                <div className="sub header"> • Can't disable the browser's built-in ad-block?<br />Change your browser or set up a <a href="https://protonvpn.com/?ref=QYwdGwxA0C2e1jwS">VPN</a></div>
                                            </h2>
                                        }

                                        <h2 className="ui header">
                                            🤖 One more step
                                            <div className="sub header">Please complete the security check</div>
                                        </h2>

                                        {this.state.vpninfo &&
                                            <ErrorBoundary>
                                                <ComponentVerifyBot pass={this.on_recaptcha_passed} />
                                            </ErrorBoundary>
                                        }

                                        {!this.state.vpninfo &&
                                            <h2 className="ui header">Loading ReCaptcha..</h2>
                                        }

                                        {!desktop_tablet &&
                                            <ErrorBoundary>
                                                <div><br /><b>Or</b><br /><br /></div>
                                                <TelegramBot data={data} dev={form_factor} stats={false} tupdates={getNestedObj(() => this.state.v3publicdata.anchoreth)} />
                                            </ErrorBoundary>
                                        }
                                    </div>

                                    <div className="eight wide column">
                                        <ErrorBoundary>
                                            <SemanticCard user={getNestedObj(() => this.state.user.username, false)} />
                                        </ErrorBoundary>
                                    </div>

                                </div>
                                <ErrorBoundary>
                                    <StickyBottomBar dev={form_factor} basic={basic} />
                                </ErrorBoundary>
                            </React.Fragment>
                        }

                    </React.Fragment>
                }

                <Footer
                    language={language} />

            </ErrorBoundary>
        )
    }
}

/*
{
    "uid": 91481,
    "host": "adshnk.com",
    "reqpath": "/AgarHA",
    "phpsid": "AT2TOslf2hFnG6oxK8kcLZxVWzg9Ot8Eu2O7EB0G",
    "dest": "https://spdmteam.com/arceusx/keysystemtest/key3",
    "exemicrotiming": 0.1,
    "exemicrotimingq": 0.005881786346435547,
    "tempshc": "false",
    "shcid": 1,
    "incognito": false,
    "userFrom": "IT",
    "vpninfo": { ok
        "status": "success",
        "package": "Professional",
        "ipaddress": "93.67.78.52",
        "host-ip": false,
        "type-ip": "Residential",
        "hostname": "AS30722",
        "org": "Vodafone Italia S.p.A.",
        "continent": "Europe",
        "country": {
            "name": "Italy",
            "code": "IT"
        },
        "subdivision": {
            "name": null,
            "code": null
        },
        "city": "Lido di Ostia",
        "postal": null,
        "location": {
            "lat": 41.7297,
            "long": 12.2641
        },
        "request_from_host": {
            "scheme": "https",
            "host": "adshnk.com",
            "path": "/"
        },
        "result": [],
        "api_status": "success"
    },
    "country": {
        "name": "Italy",
        "code": "IT"
    },
    "subdivision": {
        "name": null,
        "code": null
    },
    "location": {
        "lat": 41.7297,
        "long": 12.2641
    },
    "request_from_host": {
        "scheme": "https",
        "host": "adshnk.com",
        "path": "/"
    },
    "botDetect": { ok
        "isUser": true,
        "tests": {
            "scroll": false,
            "mouse": true,
            "key": false
        }
    },
    "fingerprint": "c9d48d97ff8f2a017b576a2c01b78646", ok
    "wurfl": { ok
        "complete_device_name": "Google Chrome",
        "form_factor": "Desktop",
        "is_mobile": false
    },
    "recapv3": { ok
        "success": true,
        "challenge_ts": "2023-03-18T10:43:08Z",
        "hostname": "adshnk.com",
        "score": 0.9,
        "action": "91481"
    }
}
*/
class MainApp extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            cdn: getNestedObj(() => window.cdn_version, ""),
            page: {},
            results: [],
            loading: true,
            fetch: false,
            dy: []
        }

        this.page = this.initStatic();

    }

    async componentDidMount() {
        this.multiPromise();
    }

    shouldComponentUpdate(nextProps, nextState) {
        if (nextProps !== this.props) {
            console.warn('adshnk - update - mainComp', nextProps, this.props);

            return true;
        } if (nextState !== this.state) {
            return true;

        }

        return false;
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevState.fetch !== this.state.fetch
            || prevState.loading !== this.state.loading)
            return true;
        return false;
    }

    initStatic = () => {
        // page
        const page = new Url();
        const path = page.path + (!isEmpty(page.query) ? ('?' + page.query) : '') + (!isEmpty(page.hash) ? ('#' + page.hash) : '');

        // href
        var hrefof = window.location.href.split('/');
        hrefof = hrefof.filter(function (value, index, arr) {
            return index > 2;
        });
        hrefof = "/" + hrefof.join('/');
        // debug
        hrefof = window.btoa('/xvUIim');

        return { path: path, href: hrefof };
    }

    visitorData() {
        let { id, userid } = getNestedObj(() => this.props.data[0], {})
        let { _c: country = 0, _p: device = 0 } = getNestedObj(() => this.props.data._gm, {}) || {}

        if (!country)
            country = getNestedObj(() => this.state.results.vpninfo.country.code, 0);

        if (!device)
            device = getNestedObj(() => window.navigator.userAgent, 0);

        let device_name = getNestedObj(() => this.state.results.wurfl.complete_device_name, 0);
        let device_format = getNestedObj(() => this.state.results.wurfl.is_mobile, 0);

        return {
            ...{ id, userid },
            ...{ country, device, device_name, device_format },
        }
    };

    postElaborate = (result1, result2, result3, result4, result5, result6, result7, result8, result9, result10) => {

        /** SETTINGS */
        _postElaborate_setSettings(result10);


        // post elaborate
        return;

        if (___freeadsusers.indexOf(userid) >= 0) {
            _adshrink.skiptime = 60;
            _adshrink.enabled.iframe = false;
            _adshrink.enabled.skip = false;
            oncontinuefirstpage = true;
        }

        if (___15cd.indexOf(userid) >= 0) {
            _adshrink.skiptime = 15;
        }

        oncontinuefirstpage = true;

        /** no adsense users */
        if (___noadsenseusers.indexOf(userid) >= 0) {
            _adshrink.enabled.adsense = false;
        }

        if (___banned_permanently.indexOf('adshrink.it' + window.location.pathname) >= 0) {
            _adshrink.enabled.adsense = false;
        }

        /** set ran if system cpi */
        if (_adshrink.SystemCPI.indexOf(userid) >= 0) {
            window[___reactjsD.o] = Object.assign({}, window[___reactjsD.o], { ran: 123456 });
        }

    }

    multiPromise = () => {
        const that = this;

        Promise.all([
            this.getDataFromAPI1(),
            this.getDataFromAPI2(),
            this.getDataFromAPI3(),
            this.getDataFromAPI4(),
            this.getDataFromAPI5(),
            this.getDataFromAPI6(),
            this.getDataFromAPI7(),
            this.getDataFromAPI8(),
            this.getDataFromAPI9(),
            this.getDataFromAPI10(),
        ]).then(([result1, result2, result3, result4, result5, result6, result7, result8, result9, result10]) => {

            // post elaborate
            this.postElaborate(result1, result2, result3, result4, result5, result6, result7, result8, result9, result10);

            this.setState({
                page: {
                    ...that.page,
                    settings: result10
                },
                loading: false,
                fetch: true,
                results: {
                    recapv3: result1,
                    fingerprint: result2,
                    wurfl: result3,
                    botDetect: result4,
                    vpninfo: result5,
                    tcfapi: result6,
                    wadsho: result7,
                    incognito: result8,
                    lazyload: result9
                },
            });
        }).catch(error => {
            console.error(error);
            this.setState({ loading: false, fetch: false });
        });
    }

    getDataFromAPI1() {
        // return promise 1

        // Get reCAPTCHA token
        const captchaAction = getNestedObj(() => this.props.data[0].userid, 10000);
        return new Promise((resolve, reject) => {
            // debug
            resolve({
                "success": true,
                "challenge_ts": "2023-03-18T10:43:08Z",
                "hostname": "adshnk.com",
                "score": 0.9,
                "action": "11111"
            }); return;

            // ready
            grecaptcha.ready(() => {
                // execute
                grecaptcha.execute(window.___reactjsD.pk3_recaptcha, { action: captchaAction })
                    .then((token) => {
                        // Make API request with token and fingerprint
                        fetch(window.___reactjsD.verification_recaptcha, {
                            method: 'POST',
                            headers: {
                                'Content-Type': 'application/json'
                            },
                            body: JSON.stringify({
                                response: token,
                                v: 'v3'
                            })
                        })
                            .then(response => response.json())
                            .then(data => resolve(data))
                            .catch(error => reject(error));
                    })
                    .catch(error => reject(error));
            })

        });
    }

    getDataFromAPI2() {
        // return promise 2

        // FingerPrint
        return new Promise((resolve, reject) => {
            new Fingerprint2({ swfPath: '/assets/FontList.swf', excludeUserAgent: false }).get((fingerprint) => {
                resolve(fingerprint);
            });
        });
    }

    getDataFromAPI3() {
        // return promise 3

        // WURFL
        return new Promise((resolve, reject) => {
            resolve(window.WURFL);
        });
    }

    getDataFromAPI4() {
        // return promise 4

        // botDetect
        return new Promise((resolve, reject) => {
            resolve({
                "isUser": true,
                "tests": {
                    "scroll": false,
                    "mouse": true,
                    "key": false
                }
            });
        });
    }

    getDataFromAPI5() {
        // return promise 5
        const that = this;

        // location
        const location = getNestedObj(() => this.props.data.location, false);

        return new Promise((resolve, reject) => {
            if (location) {
                resolve(location);
            } else {
                ssapi('vpninfo', { req: 'vpninfo', uri_path: getNestedObj(() => that.page.path, "") }).then((response) => {
                    console.log(that, response);
                    resolve(response.data || {});
                }).catch((error) => {
                    resolve(error);
                })
            }
        });
    }

    getDataFromAPI6() {
        const that = this; console.log(this);

        // add event listners
        function handleTcfData(tcData, success) {
            if (success) {
                // Determine whether user has provided consent for personalized ads, etc.
                const hasConsent = getNestedObj(() => tcData.purpose.consents[1], false) && getNestedObj(() => tcData.vendor.consents[755], false);

                const new_state = {
                    ...that.state,
                    results: {
                        ...getNestedObj(() => that.state.results, {}),
                        tcfapi: {
                            ...getNestedObj(() => that.state.results.tcfapi, {}),
                            rejected: !hasConsent
                        }
                    }
                };

                that.setState(new_state);
            } else {
                console.log('Unable to retrieve TCF consent data');
            }
        }

        function handleGoogleTagReady() {
            console.log('Google Publisher Tag: CONSENT_DATA_READY');
            __tcfapi('getTCData', 2, handleTcfData);
        }

        // Register TCF event listener
        __tcfapi('addEventListener', 2, handleTcfData);

        // Register Google Publisher Tag callback
        window.googlefc = window.googlefc || {};
        window.googlefc.callbackQueue = window.googlefc.callbackQueue || [];
        window.googlefc.callbackQueue.push({
            'CONSENT_DATA_READY': handleGoogleTagReady
        });

        const tcfapiPingStatus = () => {
            return new Promise((resolve, reject) => {
                __tcfapi('ping', 2, (pingReturn) => {
                    // do something with pingReturn
                    resolve(pingReturn)
                });
            })
        }
        // return promise 4
        return new Promise((resolve, reject) => {
            Promise.all([
                loadTCData(),
                tcfapiPingStatus()
            ]).then(([tcData, tcStatus]) => {
                resolve({ rejected: tcData, ...tcStatus });
            })
        });
    }

    // this post prepends the data 
    getDataFromAPI7() {

        const DYNAMIC = getNestedObj(() => JSON.parse(window.atob(window.dynamic)), []);
        const DYNAMIC_RESHAPE = {
            o: getNestedObj(() => DYNAMIC[0], false),
            from: getNestedObj(() => DYNAMIC[1], false),
            t: getNestedObj(() => DYNAMIC[2], false),
        }

        // assign
        window.___reactjsD.o = DYNAMIC_RESHAPE.o;

        // extract properties
        const { userid: USERID, id: SHRINKID, title: STITLE = "Adshnk Title", type: TYPE, destination: FINAL_REDIRECT, metadata: JSON_LINK_METADATA = false } = getNestedObj(() => this.props.data[0], {}) || {};
        const { userpic: USERPIC = "Unknow", website: WEBSITE = "https://example.com", jsonAccountSettings: JSON_USER_SETTINGS = false } = getNestedObj(() => this.props.data.details, {}) || {};
        const { host: HOST, path: PATH, phpsessionid: PHPSESSIONID, exe_microtime_function: EXEMICROTIMEFUNCTION, exe_microtime_query: EXEMICROTIMEQUERY, sys_host_cookie: TEMPSHC, token: ONE_TOKEN } = getNestedObj(() => this.props.data, {}) || {};

        ///connection
        var connection = navigator.connection || navigator.mozConnection || navigator.webkitConnection || false;
        connection = getNestedObj(() => connection.effectiveType) || '3g'; //75% in the world

        // set properties
        window[DYNAMIC_RESHAPE.o] = Object.assign({}, window[DYNAMIC_RESHAPE.o], DYNAMIC_RESHAPE);
        window[DYNAMIC_RESHAPE.o].uid = USERID;
        window[DYNAMIC_RESHAPE.o].upic = USERPIC;
        window[DYNAMIC_RESHAPE.o].uwebsite = WEBSITE;
        window[DYNAMIC_RESHAPE.o].usettings = JSON_USER_SETTINGS && typeof JSON_USER_SETTINGS === 'string' ? JSON.parse(JSON_USER_SETTINGS) : {};
        window[DYNAMIC_RESHAPE.o].shrinkid = SHRINKID;
        window[DYNAMIC_RESHAPE.o].shrinktitle = STITLE;
        window[DYNAMIC_RESHAPE.o].dest = FINAL_REDIRECT;
        window[DYNAMIC_RESHAPE.o].ddest = decode_html_chars(FINAL_REDIRECT);
        window[DYNAMIC_RESHAPE.o].type = TYPE;
        window[DYNAMIC_RESHAPE.o].metadata = JSON_LINK_METADATA && typeof JSON_LINK_METADATA === 'string' ? JSON.parse(JSON_LINK_METADATA) : {};

        window[DYNAMIC_RESHAPE.o].host = HOST;
        window[DYNAMIC_RESHAPE.o].reqpath = PATH;
        window[DYNAMIC_RESHAPE.o].phpsid = PHPSESSIONID
        window[DYNAMIC_RESHAPE.o].exemicrotiming = EXEMICROTIMEFUNCTION
        window[DYNAMIC_RESHAPE.o].exemicrotimingq = EXEMICROTIMEQUERY
        window[DYNAMIC_RESHAPE.o].tempshc = TEMPSHC // cookye_bypass_v1
        window[DYNAMIC_RESHAPE.o].connection = connection // cookye_bypass_v1

        window.dhost = HOST;

        let __ADUID = getLocalStorageItem('aduid');
        let __SHC = TEMPSHC;

        window[DYNAMIC_RESHAPE.o].shcid = __SHC;

        if (!__ADUID) {
            __ADUID = __SHC;
            // set also local storage
            setLocalStorageItem('aduid', __ADUID);
        }

        // add html meta and info elements
        $('head').append(`<meta http-equiv="c-token" key="${ONE_TOKEN}">`);

        return new Promise((resolve, reject) => {
            resolve({
                ...DYNAMIC_RESHAPE,
                aduid: __ADUID,
                ...window[DYNAMIC_RESHAPE.o]
            });
        });
    }

    getDataFromAPI8() {

        return new Promise(async (resolve, reject) => {
            let _is_incognito = await isIncognito();
            resolve(_is_incognito);
        });
    }

    getDataFromAPI9() {

        return new Promise(async (resolve, reject) => {
            if (!window.hasOwnProperty('lli')) {
                window.lli = new LazyLoad();
                window.lli.update();

                resolve(true);
            }

            resolve(false);
        });
    }

    getDataFromAPI10() {
        const settings = getNestedObj(() => this.props.data.settings, {});

        return new Promise(async (resolve, reject) => {
            let { api: API_endpoints, countriesControlSearches: SEARCH_available_countries } = settings || {};

            resolve({
                api: API_endpoints || {},
                searches: {
                    countries: SEARCH_available_countries || []
                }
            });
        });
    }

    render() {

        let { dynamic, timerStart, data } = getNestedObj(() => this.props, false);
        let { loading, fetch } = getNestedObj(() => this.state, false);

        const { id: page_link_id, userid: page_link_userid, sensitive: isSensitive } = getNestedObj(() => this.props.data[0], {}) || {};

        // traffic quality check parameters
        const { ['host-ip']: isVpn } = getNestedObj(() => this.state.results.vpninfo, {}) || false;
        const { connection: InternetConnection } = getNestedObj(() => this.state.results.wadsho, {}) || false;
        const { rejected: isIABReject } = getNestedObj(() => this.state.results.tcfapi, {}) || false;
        const { score: GoogleRecaptchaV3Score } = getNestedObj(() => this.state.results.recapv3, {}) || false;
        const { isUser: isHuman } = getNestedObj(() => this.state.results.botDetect, {}) || false;
        const { incognito: isIncognito } = getNestedObj(() => this.state.results, {}) || false;
        const { is_mobile: page_properties_device_mobile, form_factor: page_properties_device_form } = getNestedObj(() => this.state.results.wurfl, {}) || false;

        return (
            <React.Fragment>
                {loading && !fetch ?
                    <React.Fragment>
                        <p>Loading</p>

                    </React.Fragment>
                    :
                    <React.Fragment>

                        <TrafficFilter
                            isVpn={isVpn}
                            isIABReject={isIABReject}
                            isMobile={page_properties_device_mobile}
                            isHuman={isHuman}
                            isIncognito={isIncognito}
                            isSensitive={isSensitive}
                            GoogleRecaptchaV3Score={GoogleRecaptchaV3Score}
                            connection={InternetConnection}

                            visitorData={this.visitorData()}
                        >
                            <AdsMiddleware>
                                <SemanticUiResponsive
                                    device_form={page_properties_device_form}
                                    header={<SemanticNav
                                        dev={page_properties_device_form}
                                        u={{ id: page_link_id, userid: page_link_userid }} />}
                                    footer={<Footer
                                        language={language} />}
                                >
                                </SemanticUiResponsive>
                            </AdsMiddleware>
                        </TrafficFilter>
                    </React.Fragment>

                }
            </React.Fragment>
        );
    }
}

/** CATCHER */

ReactDOM.render(
    <React.StrictMode>
        <MainApp dynamic={window.dynamic} timerStart={window.timerStart} data={window._sharedData} /></React.StrictMode>,
    document.getElementById('app')
);