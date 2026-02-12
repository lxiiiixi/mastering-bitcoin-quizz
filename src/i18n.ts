import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import en from './locales/en'
import zhCN from './locales/zh-CN'

const supportedLanguages = ['en', 'zh-CN'] as const

const getInitialLanguage = () => {
  const saved = localStorage.getItem('lang')
  if (saved && supportedLanguages.includes(saved as (typeof supportedLanguages)[number])) {
    return saved
  }

  const browser = navigator.language
  if (supportedLanguages.includes(browser as (typeof supportedLanguages)[number])) {
    return browser
  }
  if (browser.toLowerCase().startsWith('zh')) {
    return 'zh-CN'
  }

  return 'en'
}

void i18n.use(initReactI18next).init({
  resources: {
    en: { translation: en },
    'zh-CN': { translation: zhCN },
  },
  lng: getInitialLanguage(),
  fallbackLng: 'en',
  supportedLngs: supportedLanguages,
  interpolation: {
    escapeValue: false,
  },
})

export default i18n
