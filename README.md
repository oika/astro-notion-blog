English | [日本語](README.ja.md)

# astro-notion-blog-multi-lang

[![GitHub stars](https://img.shields.io/github/stars/oika/astro-notion-blog-multi-lang)](https://github.com/oika/astro-notion-blog-multi-lang/stargazers)
[![GitHub license](https://img.shields.io/github/license/oika/astro-notion-blog-multi-lang)](https://github.com/oika/astro-notion-blog-multi-lang/blob/main/LICENSE)

<img src="https://user-images.githubusercontent.com/1063435/213838069-c9654c32-ec9b-4e82-a3b5-2acbd665b16a.png" width="480">

This is a fork repository of [astro-notion-blog](https://github.com/otoyo/astro-notion-blog).

## Differences from the original

The differences from the original (as of v0.9.2) are as follows

* Difference in layout
   * Site name will be displayed on the header image
   * Eye-catching images are also displayed on article pages (settings can be changed)
* Multilingual support
   * You can publish articles by language
* Other (for developers)
   * Updated Astro from V3 to V4
   * Added exclusion control so that the process of acquiring article information from Notion is not executed more than once
   * Reviewed type definitions and corrected all type errors
      * Added type checking at build time

## How to use

Please refer to the original repository for basic installation procedures.

In addition, the following steps are required for multilingual support.

* Please add the following properties to the Notion database
   * Language
      * Multi select
      * Define language keys such as `ja`, `en`, `zh`, etc as option.
      * Please select the language of the article with this property
   * Meta
      * Checkbox
      * Do not check this box for regular articles
* Please create the following notes (for the number of languages) in the database
   * Note name: Title of the site
   * Excerpt: Description of the site
   * Date: Please use a date in the past, such as `2000/01/01`
   * Published: Checked
   * Meta: Checked
   * Slug: `title` 
   * Language: Target language

## Addition of supported languages

By default, Japanese, English, and Chinese are supported.
If you want to add other languages, the following source modifications are required in the forked repository.

* astro.config.mjs
   * In `defineConfig`, add languages to `i18n.locales`
* content-constants.ts
   * Add languages to `LANGUAGE_KEYS`, `LANGUAGE`
   * Add label texts to `HEADING`

## Change Settings

The following can be changed by rewriting `src/setting.ts`.

* layout.showsFeaturedImageInPostPage
   * Whether to display the eye-catching image on the article page as well