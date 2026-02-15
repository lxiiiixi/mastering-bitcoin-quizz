import type { ChangeEvent } from 'react'
import { useTranslation } from 'react-i18next'
import { Link, Route, Routes } from 'react-router-dom'
import { Home } from './pages/Home'
import { NotFound } from './pages/NotFound'
import { Question } from './pages/Question'
import './App.css'

function App() {
  const { t, i18n } = useTranslation()

  const handleLanguageChange = (event: ChangeEvent<HTMLSelectElement>) => {
    const nextLanguage = event.target.value
    void i18n.changeLanguage(nextLanguage)
    localStorage.setItem('lang', nextLanguage)
  }

  return (
    <div className="page">
      <div className="top-bar">
        <nav className="nav">
          <Link className="nav__brand" to="/">
            {t('appName')}
          </Link>
          <div className="nav__links">
            <Link to="/">{t('navHome')}</Link>
            <Link to="/questions/1">{t('navQuestion')}</Link>
          </div>
        </nav>
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
      </div>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/questions/:id" element={<Question />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  )
}

export default App
