import rss from '@astrojs/rss'
import { getAllPosts, getSiteMeta } from '../../lib/notion/client'
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
  const [posts, siteMeta] = await Promise.all([
    getAllPosts(lang),
    getSiteMeta(lang),
  ])

  return rss({
    title: siteMeta.Title,
    description: siteMeta.Description,
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
