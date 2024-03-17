import type { APIContext, AstroGlobal } from 'astro'

export const SLUG_META_TITLE = 'title'

export const LANGUAGE_KEYS = ['ja', 'en', 'zh'] as const

export type LanguageKey = (typeof LANGUAGE_KEYS)[number]

export const LANGUAGE: { [key in LanguageKey]: { dispName: string } } = {
  ja: { dispName: '日本語' },
  en: { dispName: 'English' },
  zh: { dispName: '简体中文' },
} as const

export const Language = {
  fromCurrentLocale: (
    astro: Pick<AstroGlobal, 'currentLocale'>
  ): LanguageKey => {
    const currentLocale = astro.currentLocale
    if (
      currentLocale == null ||
      !LANGUAGE_KEYS.some((lang) => lang === currentLocale)
    ) {
      return 'ja'
    }

    return currentLocale as LanguageKey
  },
  fromUrl: (url: URL) => {
    const [, langInUrl] = url.pathname.split('/')
    const lang = LANGUAGE_KEYS.find(
      (l) => l.toLowerCase() === langInUrl.toLowerCase()
    )
    return lang ?? 'ja'
  },
  fromApiContext: (context: APIContext) => {
    const langParam = context.params.lang
    const lang = LANGUAGE_KEYS.find(
      (l) => l.toLowerCase() === langParam?.toLowerCase()
    )
    return lang ?? 'ja'
  },
}

export const HEADING = {
  ja: {
    RECOMMENDED: 'おすすめの記事',
    RECENT: '最新の記事',
    CATEGORIES: 'カテゴリ',
    SAME_CATEGORY: '同じカテゴリの記事',
  },
  en: {
    RECOMMENDED: 'Recommended',
    RECENT: 'Latest posts',
    CATEGORIES: 'Categories',
    SAME_CATEGORY: 'Posts in the same category',
  },
  zh: {
    RECOMMENDED: '建议',
    RECENT: '最新文章',
    CATEGORIES: '类别',
    SAME_CATEGORY: '同类文章',
  },
} as const
