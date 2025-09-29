import { createRoot } from 'react-dom/client';
import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import { App } from "./i18nFast";
import index from './locale/index'
i18n
  .use(initReactI18next)
  .init({

    resources: {
      en: {
        translation: index.en
      },
      fa: {
        translation: index.fa
      }
    },
    lng: "fa",
    fallbackLng: "fa",

    interpolation: {
      escapeValue: false
    }
  });

i18n.on('languageChanged', (lng) => {
  if (lng === 'fa') {
    document.documentElement.setAttribute("dir", "ltr");
    document.documentElement.setAttribute("lang", "fa");
  } else {
    document.documentElement.setAttribute("dir", "rtl");
    document.documentElement.setAttribute("lang", "en");
  }
});

// append app to dom
const root = createRoot(document.getElementById('root')!);
root.render(
  <App />
);