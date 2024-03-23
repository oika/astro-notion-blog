[English](README.md) | 日本語

# astro-notion-blog-multi-lang

[![GitHub stars](https://img.shields.io/github/stars/oika/astro-notion-blog-multi-lang)](https://github.com/oika/astro-notion-blog-multi-lang/stargazers)
[![GitHub license](https://img.shields.io/github/license/oika/astro-notion-blog-multi-lang)](https://github.com/oika/astro-notion-blog-multi-lang/blob/main/LICENSE)

<img src="https://user-images.githubusercontent.com/1063435/213838069-c9654c32-ec9b-4e82-a3b5-2acbd665b16a.png" width="480">

これは [astro-notion-blog](https://github.com/otoyo/astro-notion-blog) のフォークリポジトリです。

## 本家との違い

本家（v0.9.2時点）との差異は以下の通りです。

* レイアウトの違い
   * サイト名はヘッダ画像上に表示されます
   * 記事ページにもアイキャッチ画像が表示されます（設定変更可）
* 多言語対応
   * 言語別に記事を公開することができます
* その他（開発者向け）
   * Astro V3 -> V4 に更新
   * Notionからの記事情報取得処理が複数回実行されないよう排他制御を追加
   * 型定義を見直し、すべての型エラーを修正
      * あわせてビルド時の型チェックを追加

## 利用方法

導入の基本的な手順は本家リポジトリを参照してください。

加えて、多言語対応のために以下の手順が必要となります。

* Notionのデータベースに以下のプロパティを追加してください
   * Language
      * マルチセレクト
      * `ja`, `en`, `zh` 等、言語キーをオプションとして定義してください
      * 記事の言語をこのプロパティで選択してください
   * Meta
      * チェックボックス
      * 通常の記事ではチェックを入れないでください
* データベースに以下のノートを（言語数分）作成してください
   * ノート名：サイトのタイトル
   * Excerpt：サイトの説明
   * Date： `2000/01/01` 等、過去の日付にしてください
   * Published：チェック
   * Meta：チェック
   * Slug： `title` 
   * Language：対象の言語

## 対応言語の追加について

デフォルトでは 日／英／中 に対応しています。
他の言語を追加したい場合、forkしたリポジトリで下記のソース修正が必要になります。

* astro.config.mjs
   * `defineConfig` 内 `i18n.locales` に言語を追加してください
* content-constants.ts
   * `LANGUAGE_KEYS` , `LANGUAGE` に言語を追加してください
   *  `HEADING` に対象言語のラベル表記を追加してください

## 設定の変更

以下について、 `src/setting.ts` を書き替えることで変更が可能です。

* layout.showsFeaturedImageInPostPage
   * アイキャッチ画像を記事ページにも表示するか