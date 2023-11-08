import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import Backend from 'i18next-http-backend';
import LanguageDetector from 'i18next-browser-languagedetector';

i18n
    .use(initReactI18next)
    .use(Backend) // publincteki dosyaları kullanmak için
    .use(LanguageDetector) // dili algılar ve ona göre çalıştırır
    .init({
        fallbackLng:"tr", // default language

    })

    export default i18n;