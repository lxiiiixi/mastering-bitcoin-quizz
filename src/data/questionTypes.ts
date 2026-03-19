export interface Question {
  id: string
  chapter: string
  prompt: { en: string; zh: string }
  options: {
    A: { en: string; zh: string }
    B: { en: string; zh: string }
    C: { en: string; zh: string }
    D: { en: string; zh: string }
  }
  answer: 'A' | 'B' | 'C' | 'D'
  explanation: { en: string; zh: string }
}

export interface Chapter {
  id: string
  name: { en: string; zh: string }
  icon: string
}

export type OptionKey = 'A' | 'B' | 'C' | 'D'
