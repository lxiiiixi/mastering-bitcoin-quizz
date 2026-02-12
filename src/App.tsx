import type { ChangeEvent } from 'react'
import { useTranslation } from 'react-i18next'
import {
  Avatar,
  Badge,
  Button,
  Card,
  Checkbox,
  Input,
  Progress,
  Switch,
  Textarea,
} from './ui'
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

      <header className="hero">
        <div className="hero__content">
          <Badge variant="secondary" size="sm">
            {t('heroBadge')}
          </Badge>
          <h1>{t('pageTitle')}</h1>
          <p>{t('pageSubtitle')}</p>
          <div className="hero__actions">
            <Button>{t('heroPrimary')}</Button>
            <Button variant="outline">{t('heroSecondary')}</Button>
          </div>
        </div>
        <div className="hero__decor">
          <div className="hero__bubble hero__bubble--one" />
          <div className="hero__bubble hero__bubble--two" />
          <div className="hero__bubble hero__bubble--three" />
          <div className="hero__sparkle">*</div>
          <div className="hero__sparkle hero__sparkle--small">*</div>
        </div>
      </header>

      <section className="section">
        <h2>{t('sectionButtons')}</h2>
        <div className="preview-row">
          <Button>{t('buttonPrimary')}</Button>
          <Button variant="secondary">{t('buttonSecondary')}</Button>
          <Button variant="outline">{t('buttonOutline')}</Button>
          <Button variant="ghost">{t('buttonGhost')}</Button>
          <Button variant="danger">{t('buttonDanger')}</Button>
        </div>
        <div className="preview-row">
          <Button size="sm">{t('buttonSmall')}</Button>
          <Button size="md">{t('buttonMedium')}</Button>
          <Button size="lg" pill>
            {t('buttonPill')}
          </Button>
        </div>
      </section>

      <section className="section">
        <h2>{t('sectionBadges')}</h2>
        <div className="preview-row">
          <Badge>{t('badgePrimary')}</Badge>
          <Badge variant="secondary">{t('badgeSecondary')}</Badge>
          <Badge variant="success">{t('badgeSuccess')}</Badge>
          <Badge variant="warning">{t('badgeWarning')}</Badge>
          <Badge variant="danger">{t('badgeDanger')}</Badge>
        </div>
      </section>

      <section className="section">
        <h2>{t('sectionCards')}</h2>
        <div className="card-grid">
          <Card
            title={t('cardTitleOne')}
            subtitle={t('cardSubtitleOne')}
            footer={<Button size="sm">{t('cardAction')}</Button>}
          >
            {t('cardBodyOne')}
          </Card>
          <Card
            title={t('cardTitleTwo')}
            subtitle={t('cardSubtitleTwo')}
            footer={<Button size="sm" variant="secondary">{t('cardAction')}</Button>}
          >
            {t('cardBodyTwo')}
          </Card>
          <Card
            title={t('cardTitleThree')}
            subtitle={t('cardSubtitleThree')}
            footer={<Button size="sm" variant="ghost">{t('cardAction')}</Button>}
          >
            {t('cardBodyThree')}
          </Card>
        </div>
      </section>

      <section className="section">
        <h2>{t('sectionForms')}</h2>
        <div className="form-grid">
          <Input
            label={t('inputLabel')}
            placeholder={t('inputPlaceholder')}
            hint={t('inputHint')}
          />
          <Input
            label={t('inputEmail')}
            placeholder={t('inputEmailPlaceholder')}
            error={t('inputError')}
          />
          <Textarea
            label={t('textareaLabel')}
            placeholder={t('textareaPlaceholder')}
            hint={t('textareaHint')}
          />
          <div className="toggle-row">
            <Checkbox defaultChecked label={t('checkboxLabel')} />
            <Switch defaultChecked label={t('switchLabel')} />
          </div>
        </div>
      </section>

      <section className="section">
        <h2>{t('sectionAvatars')}</h2>
        <div className="preview-row">
          <Avatar name="Momo Star" size="sm" />
          <Avatar name="Luna Park" size="md" />
          <Avatar name="Panda Pop" size="lg" />
        </div>
      </section>

      <section className="section">
        <h2>{t('sectionProgress')}</h2>
        <div className="preview-column">
          <Progress value={62} label={t('progressDaily')} />
          <Progress value={86} label={t('progressWeekly')} />
        </div>
      </section>
    </div>
  )
}

export default App
