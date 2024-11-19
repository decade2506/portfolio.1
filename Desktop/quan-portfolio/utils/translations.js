import enTranslations from '@/locales/en.json';
import viTranslations from '@/locales/vi.json';

export const translations = {
  en: enTranslations,
  vi: viTranslations
};

export const getTranslation = (language, key) => {
  const keys = key.split('.');
  let value = translations[language];
  
  for (const k of keys) {
    value = value?.[k];
  }
  
  return value || key;
}; 