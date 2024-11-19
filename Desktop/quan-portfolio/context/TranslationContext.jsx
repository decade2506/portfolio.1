"use client";

import { createContext, useContext, useState } from 'react';
import { getTranslation } from '@/utils/translations';

const TranslationContext = createContext();

export function TranslationProvider({ children }) {
  const [language, setLanguage] = useState('en');

  const t = (key) => getTranslation(language, key);

  return (
    <TranslationContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </TranslationContext.Provider>
  );
}

export function useTranslation() {
  return useContext(TranslationContext);
} 