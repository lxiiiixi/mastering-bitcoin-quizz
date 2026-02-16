import type { RouteObject } from 'react-router-dom'
import { Home } from '../pages/Home'
import { NotFound } from '../pages/NotFound'
import { Question } from '../pages/Question'

export const pagePaths = {
  home: '/',
  question: '/questions/:id',
  fallback: '*',
} as const

export const getQuestionPath = (id: string | number) => `/questions/${id}`

export const navPages = [
  { to: pagePaths.home, labelKey: 'navHome' },
  { to: getQuestionPath(1), labelKey: 'navQuestion' },
] as const

export const pageRoutes: RouteObject[] = [
  { path: pagePaths.home, element: <Home /> },
  { path: pagePaths.question, element: <Question /> },
  { path: pagePaths.fallback, element: <NotFound /> },
]
