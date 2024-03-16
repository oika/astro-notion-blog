import rss from '@astrojs/rss'
import { getAllPosts, getDatabase } from '../../lib/notion/client'
import { getPostLink } from '../../lib/blog-helpers'
import { LANGUAGE_KEYS, Language } from '../../content-constants'
import { APIContext } from 'astro'

export async function getStaticPaths() {
  return LANGUAGE_KEYS.map((lang) => {
    return { params: { lang } }
  })
}

export async function GET(context: APIContext) {
  const lang = Language.fromApiContext(context)
  const [posts, database] = await Promise.all([
    getAllPosts(lang),
    getDatabase(),
  ])

  return rss({
    title: database.Title,
    description: database.Description,
    site: import.meta.env.SITE,
    customData: `<language>${lang}</language>`,
    items: posts.map((post) => ({
      link: new URL(
        getPostLink(lang, post.Slug),
        import.meta.env.SITE
      ).toString(),
      title: post.Title,
      description: post.Excerpt,
      pubDate: new Date(post.Date),
    })),
  })
}
