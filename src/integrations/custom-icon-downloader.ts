import type { AstroIntegration } from 'astro'
import { getDatabase, downloadFile } from '../lib/notion/client'

export default (): AstroIntegration => ({
  name: 'custom-icon-downloader',
  hooks: {
    'astro:build:start': async () => {
      const database = await getDatabase()

      if (!database.Icon || database.Icon.Type !== 'file') {
        return Promise.resolve()
      }

      const icon = database.Icon

      let url: URL
      try {
        url = new URL(icon.Url)
      } catch (err) {
        console.log('Invalid Icon image URL')
        return Promise.resolve()
      }

      return downloadFile(url)
    },
  },
})
