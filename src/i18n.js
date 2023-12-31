import i18next from "i18next";
import { initReactI18next } from "react-i18next";

import translationEN from "./locales/en/translation.json";

const resources = {
    en: {
        translation: translationEN,
    }
};

i18next.use(initReactI18next).init({
    resources,
    lng: "en", //default language
    keySeparator: false,
    interpolation: {
        escapeValue: false,
    },
});
export default i18next;