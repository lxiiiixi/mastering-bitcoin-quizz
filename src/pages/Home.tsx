import { useTranslation } from 'react-i18next'
import { useNavigate } from 'react-router-dom'
import { getChapterOverviews } from '../question-bank/repository'
import { getChapterQuestionPath } from '../routes/pageRoutes'
import { Badge, Button, Card } from '../ui'

export function Home() {
  const { t, i18n } = useTranslation()
  const navigate = useNavigate()
  const language = i18n.resolvedLanguage ?? i18n.language
  const chapters = getChapterOverviews(language)
  const firstChapterWithQuestions = chapters.find(
    (chapter) => chapter.firstQuestionId !== undefined,
  )
  const getChapterText = (key: string | undefined, fallback: string) => {
    if (!key) {
      return fallback
    }
    return t(key, { defaultValue: fallback })
  }
  const scrollToChapters = () => {
    document.getElementById('chapters')?.scrollIntoView({ behavior: 'smooth', block: 'start' })
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
            <Button
              disabled={!firstChapterWithQuestions?.firstQuestionId}
              onClick={() => {
                if (!firstChapterWithQuestions?.firstQuestionId) {
                  return
                }
                navigate(
                  getChapterQuestionPath(
                    firstChapterWithQuestions.id,
                    firstChapterWithQuestions.firstQuestionId,
                  ),
                )
              }}
            >
              {t('heroPrimary')}
            </Button>
            <Button variant="outline" onClick={scrollToChapters}>
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
        {chapters.length > 0 ? (
          <div className="card-grid">
            {chapters.map((chapter) => (
              <Card
                key={chapter.id}
                title={getChapterText(chapter.titleKey, chapter.id)}
                subtitle={t('chapterQuestionCount', { count: chapter.questionCount })}
                footer={
                  <Button
                    size="sm"
                    disabled={!chapter.firstQuestionId}
                    onClick={() => {
                      if (!chapter.firstQuestionId) {
                        return
                      }
                      navigate(getChapterQuestionPath(chapter.id, chapter.firstQuestionId))
                    }}
                  >
                    {t('questionStart')}
                  </Button>
                }
              >
                {getChapterText(chapter.descriptionKey, chapter.id)}
              </Card>
            ))}
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
