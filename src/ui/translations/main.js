// add a function tha get the language of the browser in two letters
// and return the translation object
// import the translation object
import en from './en.json';
// import es from './es.json';
// import fr from './fr.json';
// import pt from './pt.json';
// import de from './de.json';
import it from './it.json';
// import nl from './nl.json';
// import pl from './pl.json';
// import sv from './sv.json';
// import ru from './ru.json';
// import zh from './zh.json';

// create a dictionary of the translations
const translations = {
    en,
    // es,
    // fr,
    // pt,
    // de,
    it,
    // nl,
    // pl,
    // sv,
    // ru,
    // zh,
};

// get the language of the browser in two letters
var language = "en";

try {
    language = navigator.language.split(/[-_]/)[0];
} catch (e) {
    language = "en";
}

// export the translation object
export default translations[language] || translations.en;