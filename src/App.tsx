import type { ChangeEvent } from 'react'
import { useTranslation } from 'react-i18next'
<<<<<<< HEAD
import { Link, Route, Routes } from 'react-router-dom'
import { ChapterSelect } from './pages/ChapterSelect'
import { Home } from './pages/Home'
import { NotFound } from './pages/NotFound'
import { Question } from './pages/Question'
=======
import { Link, useRoutes } from 'react-router-dom'
import { navPages, pagePaths, pageRoutes } from './routes/pageRoutes'
>>>>>>> 9413933ba449b63be387c46cff668406d5c93f3c
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

<<<<<<< HEAD
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/chapters" element={<ChapterSelect />} />
        <Route path="/quiz/:chapterId" element={<Question />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
=======
      {routesElement}
>>>>>>> 9413933ba449b63be387c46cff668406d5c93f3c
    </div>
  )
}

export default App
