type OptionKey = 'A' | 'B' | 'C' | 'D'

interface ChapterConfig {
  id: string
  order: number
  titleKey?: string
  descriptionKey?: string
  enabled: boolean
}

interface ChaptersDocument {
  version: number
  chapters: ChapterConfig[]
}

interface BaseQuestion {
  id: string
  chapterId: string
  correctOption: OptionKey
}

interface LocalizedQuestion {
  id: string
  prompt: string
  options: Record<OptionKey, string>
  explanation: string
}

interface LocalizedQuestionDocument {
  language: string
  chapterId: string
  questions: LocalizedQuestion[]
}

export interface ChapterOverview {
  id: string
  order: number
  titleKey?: string
  descriptionKey?: string
  questionCount: number
  firstQuestionId?: string
}

export interface ResolvedQuestion {
  chapterId: string
  questionId: string
  prompt: string
  options: Record<OptionKey, string>
  correctOption: OptionKey
  explanation: string
  index: number
  total: number
  nextQuestionId?: string
}

const questionBankModules = import.meta.glob('../content/question-bank/**/*.json', {
  eager: true,
}) as Record<string, { default: unknown }>

const getModuleJson = <T>(suffix: string): T => {
  const key = Object.keys(questionBankModules).find((path) => path.endsWith(suffix))
  if (!key) {
    throw new Error(`Question bank file not found: ${suffix}`)
  }
  return questionBankModules[key].default as T
}

const chaptersDocument = getModuleJson<ChaptersDocument>('/question-bank/chapters.json')

const baseQuestionsByChapter = new Map<string, BaseQuestion[]>()
const localizedQuestionsByChapter = new Map<string, Map<string, LocalizedQuestion[]>>()

for (const [path, moduleValue] of Object.entries(questionBankModules)) {
  const baseMatch = path.match(/\/question-bank\/([^/]+)\/questions\.base\.json$/)
  if (baseMatch) {
    baseQuestionsByChapter.set(baseMatch[1], moduleValue.default as BaseQuestion[])
    continue
  }

  const localizedMatch = path.match(/\/question-bank\/([^/]+)\/questions\.([^.]+)\.json$/)
  if (!localizedMatch || localizedMatch[2] === 'base') {
    continue
  }

  const chapterId = localizedMatch[1]
  const language = localizedMatch[2]
  const localizedDocument = moduleValue.default as LocalizedQuestionDocument
  const languageMap = localizedQuestionsByChapter.get(chapterId) ?? new Map<string, LocalizedQuestion[]>()
  languageMap.set(language, localizedDocument.questions)
  localizedQuestionsByChapter.set(chapterId, languageMap)
}

const normalizeLanguage = (language: string) => {
  if (language === 'zh-CN') {
    return 'zh-CN'
  }
  if (language.toLowerCase().startsWith('zh')) {
    return 'zh-CN'
  }
  return 'en'
}

const getLocalizedQuestions = (chapterId: string, language: string) => {
  const languageMap = localizedQuestionsByChapter.get(chapterId)
  if (!languageMap) {
    return undefined
  }

  const candidates = [language, normalizeLanguage(language), 'en']
  for (const candidate of candidates) {
    const questions = languageMap.get(candidate)
    if (questions) {
      return questions
    }
  }

  return undefined
}

export const getChapterOverviews = (language: string): ChapterOverview[] => {
  const chapters = chaptersDocument.chapters
    .filter((chapter) => chapter.enabled)
    .sort((a, b) => a.order - b.order)

  return chapters.map((chapter) => {
    const baseQuestions = baseQuestionsByChapter.get(chapter.id) ?? []
    const localizedQuestions = getLocalizedQuestions(chapter.id, language) ?? []
    const localizedById = new Set(localizedQuestions.map((question) => question.id))
    const validQuestions = baseQuestions.filter((question) => localizedById.has(question.id))

    return {
      id: chapter.id,
      order: chapter.order,
      titleKey: chapter.titleKey,
      descriptionKey: chapter.descriptionKey,
      questionCount: validQuestions.length,
      firstQuestionId: validQuestions[0]?.id,
    }
  })
}

export const getResolvedQuestion = (
  chapterId: string,
  questionId: string,
  language: string,
): ResolvedQuestion | null => {
  const baseQuestions = baseQuestionsByChapter.get(chapterId)
  const localizedQuestions = getLocalizedQuestions(chapterId, language)
  if (!baseQuestions || !localizedQuestions) {
    return null
  }

  const localizedById = new Map(localizedQuestions.map((question) => [question.id, question]))
  const mergedQuestions = baseQuestions
    .map((baseQuestion) => {
      const localizedQuestion = localizedById.get(baseQuestion.id)
      if (!localizedQuestion) {
        return null
      }
      return {
        chapterId,
        questionId: baseQuestion.id,
        prompt: localizedQuestion.prompt,
        options: localizedQuestion.options,
        correctOption: baseQuestion.correctOption,
        explanation: localizedQuestion.explanation,
      }
    })
    .filter((question): question is Omit<ResolvedQuestion, 'index' | 'total' | 'nextQuestionId'> => question !== null)

  const index = mergedQuestions.findIndex((question) => question.questionId === questionId)
  if (index < 0) {
    return null
  }

  return {
    ...mergedQuestions[index],
    index,
    total: mergedQuestions.length,
    nextQuestionId: mergedQuestions[index + 1]?.questionId,
  }
}
