import { useTranslation } from 'react-i18next'
import { useNavigate } from 'react-router-dom'
import { Badge, Button, Card } from '../ui'
import { chapters, getQuestionsByChapter, questions } from '../data/questions'

export function ChapterSelect() {
  const { t, i18n } = useTranslation()
  const navigate = useNavigate()
  const lang = i18n.language.startsWith('zh') ? 'zh' : 'en'

  return (
    <div className="chapter-select">
      <div className="chapter-select__header">
        <Badge variant="primary">{t('questionBadge')}</Badge>
        <h1>{t('questionSelectChapter')}</h1>
        <p>{t('questionSelectChapterHint')}</p>
      </div>

      <div className="chapter-grid">
        {chapters.map((chapter) => {
          const chapterQuestions = getQuestionsByChapter(chapter.id)
          return (
            <Card
              key={chapter.id}
              title={`${chapter.icon} ${chapter.name[lang]}`}
              subtitle={t('questionQuestions', { count: chapterQuestions.length })}
              footer={
                <Button
                  size="sm"
                  onClick={() => navigate(`/quiz/${chapter.id}`)}
                >
                  {t('questionStart')}
                </Button>
              }
            >
              <div className="chapter-card__preview">
                {chapterQuestions.slice(0, 2).map((q) => (
                  <span key={q.id} className="chapter-card__topic">
                    {q.prompt[lang].length > 40
                      ? q.prompt[lang].slice(0, 40) + '…'
                      : q.prompt[lang]}
                  </span>
                ))}
              </div>
            </Card>
          )
        })}

        <Card
          title={`🎯 ${t('questionAllChapters')}`}
          subtitle={t('questionQuestions', { count: questions.length })}
          footer={
            <Button
              size="sm"
              variant="secondary"
              onClick={() => navigate('/quiz/all')}
            >
              {t('questionStart')}
            </Button>
          }
        >
          {t('questionAllChaptersHint')}
        </Card>
      </div>

      <Button variant="outline" onClick={() => navigate('/')}>
        {t('questionBack')}
      </Button>
    </div>
  )
}
