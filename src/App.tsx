import { useState, type ChangeEvent } from 'react'
import { Trans, useTranslation } from 'react-i18next'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const { t, i18n } = useTranslation()

  const handleLanguageChange = (event: ChangeEvent<HTMLSelectElement>) => {
    const nextLanguage = event.target.value
    void i18n.changeLanguage(nextLanguage)
    localStorage.setItem('lang', nextLanguage)
  }

  return (
    <>
      <div className="language-switcher">
        <label htmlFor="language-select">{t('languageLabel')}</label>
        <select
          id="language-select"
          value={i18n.language}
          onChange={handleLanguageChange}
        >
          <option value="en">{t('languageEn')}</option>
          <option value="zh-CN">{t('languageZhCN')}</option>
        </select>
      </div>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>{t('title')}</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          {t('count', { count })}
        </button>
        <p>
          <Trans i18nKey="editHint">
            Edit <code>src/App.tsx</code> and save to test HMR
          </Trans>
        </p>
      </div>
      <p className="read-the-docs">{t('docsHint')}</p>
    </>
  )
}

export default App
