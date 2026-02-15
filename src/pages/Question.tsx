import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { useNavigate, useParams } from 'react-router-dom'
import { Badge, Button, Card, Progress } from '../ui'

export function Question() {
  const { t } = useTranslation()
  const navigate = useNavigate()
  const { id } = useParams()
  const questionId = id ?? '1'
  const [selected, setSelected] = useState<string | null>(null)

  const options = [
    t('questionOptionA'),
    t('questionOptionB'),
    t('questionOptionC'),
    t('questionOptionD'),
  ]

  return (
    <div className="question-page">
      <div className="question-page__header">
        <div>
          <Badge variant="primary">{t('questionBadge')}</Badge>
          <h1>{t('questionTitle', { id: questionId })}</h1>
          <p>{t('questionPrompt')}</p>
        </div>
        <Button variant="outline" size="sm" onClick={() => navigate('/')}>
          {t('questionBack')}
        </Button>
      </div>

      <div className="question-page__content">
        <Card title={t('questionCardTitlePage')} subtitle={t('questionHint')}>
          <div className="option-grid">
            {options.map((option) => (
              <Button
                key={option}
                variant={selected === option ? 'secondary' : 'outline'}
                className="option-button"
                onClick={() => setSelected(option)}
              >
                {option}
              </Button>
            ))}
          </div>
          <div className="question-page__actions">
            <Button disabled={!selected}>{t('questionSubmit')}</Button>
            <Button variant="ghost" onClick={() => setSelected(null)}>
              {t('questionReset')}
            </Button>
          </div>
        </Card>

        <Card title={t('questionProgressTitle')} subtitle={t('questionProgressSubtitle')}>
          <Progress value={42} label={t('questionProgressLabel')} />
          <p className="question-page__note">{t('questionProgressNote')}</p>
        </Card>
      </div>
    </div>
  )
}
