import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

i18n.use(initReactI18next).init({
  resources: {
    en: {
      translation: {
        nav: {
          home: 'Home',
          about: 'About',
          services: 'Services',
          areas: 'Operating Areas',
          contact: 'Contact',
        },
        slogan: 'Serving with integrity and dignity',
      },
    },
    fr: {
      translation: {
        nav: {
          home: 'Accueil',
          about: 'À Propos',
          services: 'Services',
          areas: "Zones d'Opération",
          contact: 'Contact',
        },
        slogan: 'Servir avec intégrité et dignité',
      },
    },
  },
  lng: 'fr', // default language
  fallbackLng: 'fr',
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
