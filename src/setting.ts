import { LanguageKey } from './content-constants'

export const SETTING = {
  layout: {
    showsFeaturedImageInPostPage: true,
    siteTitleColor: 'white',
  },
  i18n: {
    // astro.config.mjs should be changed as well
    defaultLanguage: 'ja' satisfies LanguageKey,
  },
} as const
