import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import { language_es } from './translate/es';
import { language_en } from './translate/en';



i18n
    .use(initReactI18next)
    .init({
        lng: 'es',
        fallbackLng: 'es',
        interpolation:{
            escapeValue: false
        },
        resources: {
         es: {
            translation: language_es
         },
         en: {
            translation: language_en
         }
         
        }
    });

export default i18n;