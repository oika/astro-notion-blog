// Query a database response
// https://developers.notion.com/reference/post-database-query
export interface QueryDatabaseResponse {
  object: string
  results: PageObject[]
  next_cursor: null | string
  has_more: boolean
  type: string
  page?: Record<string, never>
}

// Retrieve a database response
// https://developers.notion.com/reference/retrieve-a-database
// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface RetrieveDatabaseResponse extends DatabaseObject {}

// Retrieve a block response
// https://developers.notion.com/reference/retrieve-a-block
export type RetrieveBlockResponse = BlockObject

// Retrieve block children response
// https://developers.notion.com/reference/get-block-children
export interface RetrieveBlockChildrenResponse {
  object: string
  results: BlockObject[]
  next_cursor: null | string
  has_more: boolean
  type: string
  block?: Record<string, never>
}

// common interfaces
interface UserObject {
  object: 'user'
  id: string
}

type FileObject = {
  type: 'file'
  file: File
} | {
  type: 'external'
  external: External
}

interface File {
  url: string
  expiry_time: string
}

interface External {
  url: string
}

export interface Emoji {
  type: 'emoji'
  emoji: string
}

type Parent = {
  type: 'database_id'
  database_id: string
} | {
  type: 'page_id'
  page_id: string
}

export type RichTextObject = {
  plain_text: string
  annotations: Annotations
  href?: string
} & (
  {
    type: 'text'
    text: Text
  } | {
    type: 'mention'
    mention: Mention
  } | {
    type: 'equation'
    equation: Equation
  }
)

interface Annotations {
  bold: boolean
  italic: boolean
  strikethrough: boolean
  underline: boolean
  code: boolean
  color: string
}

interface Text {
  content: string
  link?: Link
}

interface Link {
  type: string
  url: string
}

type Mention = {
  type: 'database'
  database: Reference
} | {
  type: 'date',
  date: DateProperty
} | {
  type: 'user',
  user: UserObject
} | {
  type: 'link_preview',
  link_preview: LinkPreview
} | {
  type: 'page',
  page: Reference
} | {
  type: 'template_mention'
  template_mention: TemplateMension
}

interface Reference {
  id: string
}

interface DateProperty {
  start: string
  end?: null | string
  timezone?: null | string
}

interface LinkPreview {
  url: string
}

type TemplateMension = {
  type: 'template_mention_date',
  template_mention_date: 'today' | 'now'
} | {
  type: 'template_mention_user',
  template_mention_user: 'me'
}

interface Equation {
  expression: string
}

// Database object
// https://developers.notion.com/reference/database
interface DatabaseObject {
  object: string
  id: string
  created_time: string
  created_by: UserObject
  last_edited_time: string
  last_edited_by: UserObject
  title: RichTextObject[]
  description: RichTextObject[]
  icon: FileObject | Emoji | null
  cover: FileObject
  properties: DatabaseProperties
  parent: Parent
  url: string
  archived: boolean
  is_inline: boolean
}

interface DatabaseProperties {
  [key: string]: DatabaseProperty
}

interface DatabaseProperty {
  id: string
  type: string

  title?: Record<string, never>
  rich_text?: Record<string, never>
  number?: NumberConfiguration
  select?: SelectConfiguration
  status?: StatusConfiguration
  multi_select?: SelectConfiguration
  date?: Record<string, never>
  people?: Record<string, never>
  files?: Record<string, never>
  checkbox?: Record<string, never>
  url?: Record<string, never>
  email?: Record<string, never>
  phone_number?: Record<string, never>
  formula?: FormulaConfiguration
  relation?: RelationConfiguration
  rollup?: RollupConfiguration
  created_time?: Record<string, never>
  created_by?: Record<string, never>
  last_edited_time?: Record<string, never>
  last_edited_by?: Record<string, never>
}

interface NumberConfiguration {
  format: string
}

interface SelectConfiguration {
  options: SelectOptionObject[]
}

interface SelectOptionObject {
  name: string
  id: string
  color: string
}

interface StatusConfiguration {
  options: StatusOptionObject[]
  groups: StatusGroupObject[]
}

interface StatusOptionObject {
  name: string
  id: string
  color: string
}

interface StatusGroupObject {
  name: string
  id: string
  color: string
  option_ids: string[]
}

interface FormulaConfiguration {
  expression: string
}

interface RelationConfiguration {
  database_id: string
  type: string

  single_property?: Record<string, never>
  dual_property?: DualPropertyRelationConfiguration
}

interface DualPropertyRelationConfiguration {
  synced_property_name: string
  synced_property_id: string
}

interface RollupConfiguration {
  relation_property_name: string
  relation_property_id: string
  rollup_property_name: string
  rollup_property_id: string
  function: string
}

// Page object
// https://developers.notion.com/reference/page
export interface PageObject {
  object: 'page'
  id: string
  created_time: string
  created_by: UserObject
  last_edited_time: string
  last_edited_by: UserObject
  archived: boolean
  icon: FileObject | Emoji | null
  cover: FileObject
  properties: PageProperties
  parent: Parent
  url: string
}

interface PageProperties {
  [key: string]: PageProperty
}

interface PageProperty {
  id: string
  type: string

  title?: RichTextObject[]
  rich_text?: RichTextObject[]
  number?: number
  select?: SelectProperty
  status?: StatusProperty
  multi_select?: SelectProperty[]
  date?: DateProperty
  formula?: FormulaProperty
  relation?: RelationProperty[]
  rollup?: RollupProperty
  people?: UserObject[]
  files?: FileObject[]
  checkbox?: boolean
  url?: string
  email?: string
  phone_number?: string
  created_time?: string
  created_by?: UserObject
  last_edited_time?: string
  last_edited_by?: UserObject
}

interface SelectProperty {
  id: string
  name: string
  color: string
}

interface StatusProperty {
  id: string
  name: string
  color: string
}

interface FormulaProperty {
  type: string

  number?: number
  string?: string
  boolean?: boolean
  date?: DateProperty
}

interface RelationProperty {
  id: string
}

interface RollupProperty {
  type: string
  function: string

  number?: number
  string?: string
  date?: DateProperty
  results?: string[]
}

// Block object
// https://developers.notion.com/reference/block
interface BlockObjectBase {
  object: 'block'
  id: string
  created_time: string
  created_by: UserObject
  last_edited_by: UserObject
  has_children: boolean
  archived: boolean
}
interface BookmarkBlockObject extends BlockObjectBase {
  type: 'bookmark'
  bookmark: Bookmark
}
interface BreadcrumbBlockObject extends BlockObjectBase {
  type: 'breadcrumb'
  breadcrumb: Record<string, never>
}
interface BulletedListItemBlockObject extends BlockObjectBase {
  type: 'bulleted_list_item'
  bulleted_list_item: ListItem
}
interface CalloutBlockObject extends BlockObjectBase {
  type: 'callout'
  callout: Callout
}
interface ChildDatabaseBlockObject extends BlockObjectBase {
  type: 'child_database'
  child_database: ChildDatabase
}
interface ChildPageBlockObject extends BlockObjectBase {
  type: 'child_page'
  child_page: ChildPage
}
interface CodeBlockObject extends BlockObjectBase {
  type: 'code'
  code: Code
}
interface ColumnBlockObject extends BlockObjectBase {
  type: 'column'
  column: Record<string, never>
}
interface ColumnListBlockObject extends BlockObjectBase {
  type: 'column_list'
  column_list: Record<string, never>
}
interface DividerBlockObject extends BlockObjectBase {
  type: 'divider'
  divider: Record<string, never>
}
interface EmbedBlockObject extends BlockObjectBase {
  type: 'embed'
  embed: Embed
}
interface EquationBlockObject extends BlockObjectBase {
  type: 'equation'
  equation: Equation
}
interface FileBlockObject extends BlockObjectBase {
  type: 'file'
  file: FileBlock
}
interface Heading1BlockObject extends BlockObjectBase {
  type: 'heading_1'
  heading_1: Heading
}
interface Heading2BlockObject extends BlockObjectBase {
  type: 'heading_2'
  heading_2: Heading
}
interface Heading3BlockObject extends BlockObjectBase {
  type: 'heading_3'
  heading_3: Heading
}
interface ImageBlockObject extends BlockObjectBase {
  type: 'image'
  image: FileBlock
}
interface LinkPreviewBlockObject extends BlockObjectBase {
  type: 'link_preview'
  link_preview: LinkPreview
}
interface LinkToPageBlockObject extends BlockObjectBase {
  type: 'link_to_page'
  link_to_page: LinkToPage
}
interface NumberedListItemBlockObject extends BlockObjectBase {
  type: 'numbered_list_item'
  numbered_list_item: ListItem
}
interface ParagraphBlockObject extends BlockObjectBase {
  type: 'paragraph'
  paragraph: Paragraph
}
interface PdfBlockObject extends BlockObjectBase {
  type: 'pdf'
  pdf: FileBlock
}
interface QuoteBlockObject extends BlockObjectBase {
  type: 'quote'
  quote: Quote
}
interface SyncedBlockBlockObject extends BlockObjectBase {
  type: 'synced_block'
  synced_block: SyncedBlock
}
interface TableBlockObject extends BlockObjectBase {
  type: 'table'
  table: Table
}
interface TableOfContentsBlockObject extends BlockObjectBase {
  type: 'table_of_contents'
  table_of_contents: TableOfContents
}
interface TableRowBlockObject extends BlockObjectBase {
  type: 'table_row'
  table_row: TableRow
}
interface TemplateBlockObject extends BlockObjectBase {
  type: 'template'
  template: Template
}
interface ToDoBlockObject extends BlockObjectBase {
  type: 'to_do'
  to_do: ToDo
}
interface ToggleBlockObject extends BlockObjectBase {
  type: 'toggle'
  toggle: Toggle
}
interface UnsupportedBlockObject extends BlockObjectBase {
  type: 'unsupported'
}
interface VideoBlockObject extends BlockObjectBase {
  type: 'video'
  video: FileBlock
}

export type BlockObject =
  BookmarkBlockObject
  | BreadcrumbBlockObject
  | BulletedListItemBlockObject
  | CalloutBlockObject
  | ChildDatabaseBlockObject
  | ChildPageBlockObject
  | CodeBlockObject
  | ColumnBlockObject
  | ColumnListBlockObject
  | DividerBlockObject
  | EmbedBlockObject
  | EquationBlockObject
  | FileBlockObject
  | Heading1BlockObject
  | Heading2BlockObject
  | Heading3BlockObject
  | ImageBlockObject
  | LinkPreviewBlockObject
  | LinkToPageBlockObject
  | NumberedListItemBlockObject
  | ParagraphBlockObject
  | PdfBlockObject
  | QuoteBlockObject
  | SyncedBlockBlockObject
  | TableBlockObject
  | TableOfContentsBlockObject
  | TableRowBlockObject
  | TemplateBlockObject
  | ToDoBlockObject
  | ToggleBlockObject
  | UnsupportedBlockObject
  | VideoBlockObject

interface Paragraph {
  rich_text: RichTextObject[]
  color: string
  children?: BlockObject[]
}

interface Heading {
  rich_text: RichTextObject[]
  color: string
  is_toggleable: boolean
}

interface Callout {
  rich_text: RichTextObject[]
  icon: FileObject | Emoji
  color: string
  children?: BlockObject[]
}

interface Quote {
  rich_text: RichTextObject[]
  color: string
  children?: BlockObject[]
}

interface ListItem {
  rich_text: RichTextObject[]
  color: string
  children?: BlockObject[]
}

interface ToDo {
  rich_text: RichTextObject[]
  checked: boolean
  color: string
  children?: BlockObject[]
}

interface Toggle {
  rich_text: RichTextObject[]
  color: string
  children?: BlockObject[]
}

interface Code {
  rich_text: RichTextObject[]
  caption?: RichTextObject[]
  language: string
}

interface ChildPage {
  title: string
}

interface ChildDatabase {
  title: string
}

interface Embed {
  url: string
}

type FileBlock = FileObject & {
  caption?: RichTextObject[]
}

interface Bookmark {
  url: string
  caption?: RichTextObject[]
}

interface TableOfContents {
  color: string
}

interface Template {
  rich_text: RichTextObject[]
  children?: BlockObject[]
}

interface LinkToPage {
  type: string
  page_id?: string
  database_id?: string
}

interface SyncedBlock {
  synced_from: null | SyncedFrom
  children?: BlockObject[]
}

interface SyncedFrom {
  type: string
  block_id: string
}

interface Table {
  table_width: number
  has_column_header: boolean
  has_row_header: boolean
  children?: BlockObject[]
}

interface TableRow {
  cells: RichTextObject[][]
}
