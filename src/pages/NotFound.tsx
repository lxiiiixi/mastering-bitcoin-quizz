import { useTranslation } from 'react-i18next'
import { useNavigate } from 'react-router-dom'
import { pagePaths } from '../routes/pageRoutes'
import { Button } from '../ui'

export function NotFound() {
  const { t } = useTranslation()
  const navigate = useNavigate()

  return (
    <div className="not-found">
      <h1>{t('notFoundTitle')}</h1>
      <p>{t('notFoundSubtitle')}</p>
      <Button onClick={() => navigate(pagePaths.home)}>{t('notFoundBack')}</Button>
    </div>
  )
}
