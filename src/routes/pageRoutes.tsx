import type { RouteObject } from 'react-router-dom'
import { Home } from '../pages/Home'
import { NotFound } from '../pages/NotFound'
import { Question } from '../pages/Question'

export const pagePaths = {
  home: '/',
  chapterQuestion: '/chapters/:chapterId/questions/:questionId',
  fallback: '*',
} as const

export const getChapterQuestionPath = (
  chapterId: string,
  questionId: string | number,
) => `/chapters/${chapterId}/questions/${questionId}`

export const navPages = [
  { to: pagePaths.home, labelKey: 'navHome' },
] as const

export const pageRoutes: RouteObject[] = [
  { path: pagePaths.home, element: <Home /> },
  { path: pagePaths.chapterQuestion, element: <Question /> },
  { path: pagePaths.fallback, element: <NotFound /> },
]
