import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

i18n.use(initReactI18next).init({
  fallbackLng: 'TR',
  lng: 'TR',
  resources: {
    EN: {
      translations: require('./locales/en/translations.json')
    },
    TR: {
      translations: require('./locales/tr/translations.json')
    }
  },
  ns: ['translations'],
  defaultNS: 'translations'
});

i18n.languages = ['TR', 'EN'];

export default i18n;
