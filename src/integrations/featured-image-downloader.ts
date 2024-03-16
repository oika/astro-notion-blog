import type { AstroIntegration } from 'astro'
import { downloadFile, getAllPostsOfAllLanguages } from '../lib/notion/client'

export default (): AstroIntegration => ({
  name: 'featured-image-downloader',
  hooks: {
    'astro:build:start': async () => {
      const posts = await getAllPostsOfAllLanguages()
      const allUrls = posts
        .map((p) => p.FeaturedImage?.Url)
        .filter((url): url is string => url != null)
      const uniqueUrls = [...new Set<string>(allUrls)]

      await Promise.all(
        uniqueUrls.map((urlString) => {
          let url!: URL
          try {
            url = new URL(urlString)
          } catch (err) {
            console.log('Invalid FeaturedImage URL')
            return Promise.resolve()
          }

          return downloadFile(url)
        })
      )
    },
  },
})
