import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import en from "./locales/en/common.json";
import hy from "./locales/hy/common.json";
import ru from "./locales/ru/common.json";

i18n.use(initReactI18next).init({
  resources: {
    en: {
      translation: en,
    },

    hy: {
      translation: hy,
    },

    ru: {
      translation: ru,
    },
  },

  lng: "en",

  fallbackLng: "en",

  interpolation: {
    escapeValue: false,
  },
});

export default i18n;