import { useState, useMemo } from 'react'
import { useTranslation } from 'react-i18next'
import { useNavigate, useParams } from 'react-router-dom'
import { Badge, Button, Card, Progress } from '../ui'
import { getQuestionsByChapter, getChapterById, questions as allQuestions } from '../data/questions'
import type { OptionKey } from '../data/questionTypes'

export function Question() {
  const { t, i18n } = useTranslation()
  const navigate = useNavigate()
  const { chapterId } = useParams()
  const lang = i18n.language.startsWith('zh') ? 'zh' : 'en'

  const questions = useMemo(() => {
    if (chapterId === 'all') return allQuestions
    return getQuestionsByChapter(chapterId ?? '')
  }, [chapterId])

  const chapter = chapterId !== 'all' ? getChapterById(chapterId ?? '') : null

  const [currentIndex, setCurrentIndex] = useState(0)
  const [selected, setSelected] = useState<OptionKey | null>(null)
  const [submitted, setSubmitted] = useState(false)
  const [scores, setScores] = useState<boolean[]>([])
  const [finished, setFinished] = useState(false)

  if (questions.length === 0) {
    return (
      <div className="not-found">
        <h1>{t('notFoundTitle')}</h1>
        <Button onClick={() => navigate('/chapters')}>{t('questionBackToChapters')}</Button>
      </div>
    )
  }

  const question = questions[currentIndex]
  const progressValue = ((currentIndex + (submitted ? 1 : 0)) / questions.length) * 100
  const optionKeys: OptionKey[] = ['A', 'B', 'C', 'D']

  const handleSubmit = () => {
    if (!selected) return
    setSubmitted(true)
    const isCorrect = selected === question.answer
    setScores((prev) => [...prev, isCorrect])
  }

  const handleNext = () => {
    if (currentIndex < questions.length - 1) {
      setCurrentIndex((i) => i + 1)
      setSelected(null)
      setSubmitted(false)
    } else {
      setFinished(true)
    }
  }

  const handleReset = () => {
    setSelected(null)
    setSubmitted(false)
  }

  const handleRetry = () => {
    setCurrentIndex(0)
    setSelected(null)
    setSubmitted(false)
    setScores([])
    setFinished(false)
  }

  if (finished) {
    const correctCount = scores.filter(Boolean).length
    const percentage = Math.round((correctCount / questions.length) * 100)
    return (
      <div className="question-page">
        <div className="question-page__header">
          <div>
            <Badge variant="success">{t('questionResults')}</Badge>
            <h1>{t('questionScore', { score: correctCount, total: questions.length })}</h1>
          </div>
        </div>
        <div className="question-page__content">
          <Card title={t('questionResults')}>
            <Progress value={percentage} label={`${percentage}%`} />
            <div className="results-summary">
              {questions.map((q, i) => (
                <div key={q.id} className={`result-item ${scores[i] ? 'result-item--correct' : 'result-item--wrong'}`}>
                  <span className="result-item__icon">{scores[i] ? '✓' : '✗'}</span>
                  <span className="result-item__text">{q.prompt[lang]}</span>
                </div>
              ))}
            </div>
            <div className="question-page__actions">
              <Button onClick={handleRetry}>{t('questionRetry')}</Button>
              <Button variant="outline" onClick={() => navigate('/chapters')}>
                {t('questionBackToChapters')}
              </Button>
            </div>
          </Card>
        </div>
      </div>
    )
  }

  const getOptionVariant = (key: OptionKey) => {
    if (!submitted) {
      return selected === key ? 'secondary' : 'outline'
    }
    if (key === question.answer) return 'primary'
    if (key === selected && key !== question.answer) return 'danger'
    return 'outline'
  }

  return (
    <div className="question-page">
      <div className="question-page__header">
        <div>
          <Badge variant="primary">
            {chapter ? `${chapter.icon} ${chapter.name[lang]}` : t('questionAllChapters')}
          </Badge>
          <h1>{t('questionTitle', { index: currentIndex + 1 })}</h1>
          <p className="question-page__prompt">{question.prompt[lang]}</p>
        </div>
        <div className="question-page__meta">
          <span className="question-page__counter">
            {t('questionOf', { current: currentIndex + 1, total: questions.length })}
          </span>
          <Button variant="outline" size="sm" onClick={() => navigate('/chapters')}>
            {t('questionBack')}
          </Button>
        </div>
      </div>

      <div className="question-page__content">
        <Card title={t('questionCardTitlePage')} subtitle={submitted ? '' : t('questionHint')}>
          <div className="option-grid">
            {optionKeys.map((key) => (
              <Button
                key={key}
                variant={getOptionVariant(key) as 'primary' | 'secondary' | 'outline' | 'ghost' | 'danger'}
                className={`option-button ${submitted && key === question.answer ? 'option-button--correct' : ''}`}
                onClick={() => !submitted && setSelected(key)}
                disabled={submitted}
              >
                <span className="option-label">{key}.</span>
                {question.options[key][lang]}
              </Button>
            ))}
          </div>

          {submitted && (
            <div className={`answer-feedback ${selected === question.answer ? 'answer-feedback--correct' : 'answer-feedback--wrong'}`}>
              <div className="answer-feedback__title">
                {selected === question.answer ? t('questionCorrect') : t('questionIncorrect')}
              </div>
              {selected !== question.answer && (
                <div className="answer-feedback__correct">
                  {t('questionCorrectAnswer', { answer: question.answer })}
                </div>
              )}
              <div className="answer-feedback__explanation">
                <strong>{t('questionExplanation')}:</strong> {question.explanation[lang]}
              </div>
            </div>
          )}

          <div className="question-page__actions">
            {!submitted ? (
              <>
                <Button disabled={!selected} onClick={handleSubmit}>
                  {t('questionSubmit')}
                </Button>
                <Button variant="ghost" onClick={handleReset}>
                  {t('questionReset')}
                </Button>
              </>
            ) : (
              <Button onClick={handleNext}>
                {currentIndex < questions.length - 1 ? t('questionNext') : t('questionFinish')}
              </Button>
            )}
          </div>
        </Card>

        <Card title={t('questionProgressTitle')} subtitle={t('questionProgressSubtitle')}>
          <Progress value={progressValue} label={t('questionProgressLabel')} />
          <p className="question-page__note">{t('questionProgressNote')}</p>
          <div className="question-dots">
            {questions.map((_, i) => (
              <span
                key={i}
                className={`question-dot ${
                  i < scores.length
                    ? scores[i]
                      ? 'question-dot--correct'
                      : 'question-dot--wrong'
                    : i === currentIndex
                      ? 'question-dot--active'
                      : ''
                }`}
              />
            ))}
          </div>
        </Card>
      </div>
    </div>
  )
}
