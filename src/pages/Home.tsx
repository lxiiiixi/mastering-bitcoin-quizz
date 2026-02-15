import { useTranslation } from 'react-i18next'
import { useNavigate } from 'react-router-dom'
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
} from '../ui'

export function Home() {
  const { t } = useTranslation()
  const navigate = useNavigate()

  const scrollToGallery = () => {
    const section = document.getElementById('ui-gallery')
    section?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return (
    <>
      <header className="hero">
        <div className="hero__content">
          <Badge variant="secondary" size="sm">
            {t('heroBadge')}
          </Badge>
          <h1>{t('pageTitle')}</h1>
          <p>{t('pageSubtitle')}</p>
          <div className="hero__actions">
            <Button onClick={() => navigate('/questions/1')}>{t('heroPrimary')}</Button>
            <Button variant="outline" onClick={scrollToGallery}>
              {t('heroSecondary')}
            </Button>
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
        <h2>{t('sectionQuestions')}</h2>
        <div className="card-grid">
          <Card
            title={t('questionCardTitle')}
            subtitle={t('questionCardSubtitle')}
            footer={
              <Button size="sm" onClick={() => navigate('/questions/1')}>
                {t('questionStart')}
              </Button>
            }
          >
            {t('questionCardBody')}
          </Card>
          <Card
            title={t('questionCardTitleTwo')}
            subtitle={t('questionCardSubtitleTwo')}
            footer={
              <Button size="sm" variant="secondary" onClick={() => navigate('/questions/2')}>
                {t('questionStart')}
              </Button>
            }
          >
            {t('questionCardBodyTwo')}
          </Card>
          <Card
            title={t('questionCardTitleThree')}
            subtitle={t('questionCardSubtitleThree')}
            footer={
              <Button size="sm" variant="ghost" onClick={() => navigate('/questions/3')}>
                {t('questionStart')}
              </Button>
            }
          >
            {t('questionCardBodyThree')}
          </Card>
        </div>
      </section>

      <section className="section" id="ui-gallery">
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
            footer={
              <Button size="sm" variant="secondary">
                {t('cardAction')}
              </Button>
            }
          >
            {t('cardBodyTwo')}
          </Card>
          <Card
            title={t('cardTitleThree')}
            subtitle={t('cardSubtitleThree')}
            footer={
              <Button size="sm" variant="ghost">
                {t('cardAction')}
              </Button>
            }
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
    </>
  )
}
