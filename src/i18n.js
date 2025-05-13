// src/i18n.js
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

// Importar traduções
import translationEN from './locales/en/translation.json';
import translationPT from './locales/pt/translation.json';


const resources = {
  en: { translation: translationEN },
  pt: { translation: translationPT },
};

// Inicialização do i18n
i18n
  .use(LanguageDetector) // Detecta o idioma do navegador
  .use(initReactI18next) // Integra com React
  .init({
    resources,
    fallbackLng: 'en', // idioma fallback caso não tenha tradução disponível
    interpolation: { escapeValue: false }, // Evita que caracteres especiais causem problemas
    lng: localStorage.getItem('language') || 'en', // Define o idioma inicial com base no localStorage
  });

export default i18n;