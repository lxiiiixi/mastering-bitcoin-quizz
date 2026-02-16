import type { ChangeEvent } from 'react'
import { useTranslation } from 'react-i18next'
import { Link, useRoutes } from 'react-router-dom'
import { navPages, pagePaths, pageRoutes } from './routes/pageRoutes'
import './App.css'

function App() {
  const { t, i18n } = useTranslation()
  const routesElement = useRoutes(pageRoutes)

  const handleLanguageChange = (event: ChangeEvent<HTMLSelectElement>) => {
    const nextLanguage = event.target.value
    void i18n.changeLanguage(nextLanguage)
    localStorage.setItem('lang', nextLanguage)
  }

  return (
    <div className="page">
      <div className="top-bar">
        <nav className="nav">
          <Link className="nav__brand" to={pagePaths.home}>
            {t('appName')}
          </Link>
          <div className="nav__links">
            {navPages.map((page) => (
              <Link key={page.to} to={page.to}>
                {t(page.labelKey)}
              </Link>
            ))}
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

      {routesElement}
    </div>
  )
}

export default App
