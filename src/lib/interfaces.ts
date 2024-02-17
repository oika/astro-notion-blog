export interface Database {
  Title: string
  Description: string
  Icon: FileOrExternalWithUrl | Emoji | null
  Cover: FileOrExternalWithUrl | null
}

export interface Post {
  PageId: string
  Title: string
  Icon: ExternalWithUrl | Emoji | null
  Cover: FileOrExternalWithUrl | null
  Slug: string
  Date: string
  Tags: SelectProperty[]
  Excerpt: string
  FeaturedImage: FileOrExternalWithUrlAndExpiryTime | null
  Rank: number
}

interface BlockBase {
  Id: string
  HasChildren: boolean
}

export interface BookmarkBlock extends BlockBase {
  Type: 'bookmark'
  Bookmark: Bookmark
}
export interface BreadcrumbBlock extends BlockBase {
  Type: 'breadcrumb'
}
export interface BulletedListItemBlock extends BlockBase {
  Type: 'bulleted_list_item'
  BulletedListItem: BulletedListItem
}
export interface CalloutBlock extends BlockBase {
  Type: 'callout'
  Callout: Callout
}
export interface ChildDatabaseBlock extends BlockBase {
  Type: 'child_database'
}
export interface ChildPageBlock extends BlockBase {
  Type: 'child_page'
}
export interface CodeBlock extends BlockBase {
  Type: 'code'
  Code: Code
}
export interface ColumnBlock extends BlockBase {
  Type: 'column'
}
export interface ColumnListBlock extends BlockBase {
  Type: 'column_list'
  ColumnList: ColumnList
}
export interface DividerBlock extends BlockBase {
  Type: 'divider'
}
export interface EmbedBlock extends BlockBase {
  Type: 'embed'
  Embed: Embed
}
export interface EquationBlock extends BlockBase {
  Type: 'equation'
  Equation: Equation
}
export interface FileBlock extends BlockBase {
  Type: 'file'
  File: File
}
export interface Heading1Block extends BlockBase {
  Type: 'heading_1'
  Heading1: Heading
}
export interface Heading2Block extends BlockBase {
  Type: 'heading_2'
  Heading2: Heading
}
export interface Heading3Block extends BlockBase {
  Type: 'heading_3'
  Heading3: Heading
}
export interface ImageBlock extends BlockBase {
  Type: 'image'
  Image: Image
}
export interface LinkPreviewBlock extends BlockBase {
  Type: 'link_preview'
  LinkPreview: LinkPreview
}
export interface LinkToPageBlock extends BlockBase {
  Type: 'link_to_page'
  LinkToPage: LinkToPage
}
export interface NumberedListItemBlock extends BlockBase {
  Type: 'numbered_list_item'
  NumberedListItem: NumberedListItem
}
export interface ParagraphBlock extends BlockBase {
  Type: 'paragraph'
  Paragraph: Paragraph
}
export interface PdfBlock extends BlockBase {
  Type: 'pdf'
}
export interface QuoteBlock extends BlockBase {
  Type: 'quote'
  Quote: Quote
}
export interface SyncedBlockBlock extends BlockBase {
  Type: 'synced_block'
  SyncedBlock: SyncedBlock
}
export interface TableBlock extends BlockBase {
  Type: 'table'
  Table: Table
}
export interface TableOfContentsBlock extends BlockBase {
  Type: 'table_of_contents'
  TableOfContents: TableOfContents
}
export interface TableRowBlock extends BlockBase {
  Type: 'table_row'
}
export interface TemplateBlock extends BlockBase {
  Type: 'template'
}
export interface ToDoBlock extends BlockBase {
  Type: 'to_do'
  ToDo: ToDo
}
export interface ToggleBlock extends BlockBase {
  Type: 'toggle'
  Toggle: Toggle
}
export interface UnsupportedBlock extends BlockBase {
  Type: 'unsupported'
}
export interface VideoBlock extends BlockBase {
  Type: 'video'
  Video: Video
}

export type HeadingBlock = Heading1Block | Heading2Block | Heading3Block

export type Block =
  BookmarkBlock
  | BreadcrumbBlock
  | BulletedListItemBlock
  | CalloutBlock
  | ChildDatabaseBlock
  | ChildPageBlock
  | CodeBlock
  | ColumnBlock
  | ColumnListBlock
  | DividerBlock
  | EmbedBlock
  | EquationBlock
  | FileBlock
  | HeadingBlock
  | ImageBlock
  | LinkPreviewBlock
  | LinkToPageBlock
  | NumberedListItemBlock
  | ParagraphBlock
  | PdfBlock
  | QuoteBlock
  | SyncedBlockBlock
  | TableBlock
  | TableOfContentsBlock
  | TableRowBlock
  | TemplateBlock
  | ToDoBlock
  | ToggleBlock
  | UnsupportedBlock
  | VideoBlock

export type BlockType = Block['Type']

export interface Paragraph {
  RichTexts: RichText[]
  Color: string
  Children?: Block[]
}

export interface Heading {
  RichTexts: RichText[]
  Color: string
  IsToggleable: boolean
  Children?: Block[]
}

export interface BulletedListItem {
  RichTexts: RichText[]
  Color: string
  Children?: Block[]
}

export interface NumberedListItem {
  RichTexts: RichText[]
  Color: string
  Children?: Block[]
}

export interface ToDo {
  RichTexts: RichText[]
  Checked: boolean
  Color: string
  Children?: Block[]
}

export interface Image {
  Caption: RichText[]
  Type: string
  File?: FileWithUrlAndExpiryTime
  External?: External
  Width?: number
  Height?: number
}

export interface Video {
  Caption: RichText[]
  Type: string
  External?: External
}

export interface File {
  Caption: RichText[]
  Type: string
  File?: FileWithUrlAndExpiryTime
  External?: External
}

export interface External {
  Url: string
}

export interface ExternalWithUrl {
  Type: 'external'
  Url: string
}

export interface FileWithUrlAndExpiryTime {
  Type: 'file'
  Url: string
  ExpiryTime: string
}

export type FileOrExternalWithUrlAndExpiryTime = ExternalWithUrl | FileWithUrlAndExpiryTime

export interface FileOrExternalWithUrl {
  Type: 'file' | 'external'
  Url: string
}

export interface Code {
  Caption: RichText[]
  RichTexts: RichText[]
  Language: string
}

export interface Quote {
  RichTexts: RichText[]
  Color: string
  Children?: Block[]
}

export interface Equation {
  Expression: string
}

export interface Callout {
  RichTexts: RichText[]
  Icon: FileOrExternalWithUrl | Emoji | null
  Color: string
  Children?: Block[]
}

export interface SyncedBlock {
  SyncedFrom: SyncedFrom | null
  Children?: Block[]
}

export interface SyncedFrom {
  BlockId: string
}

export interface Toggle {
  RichTexts: RichText[]
  Color: string
  Children: Block[]
}

export interface Embed {
  Url: string
}

export interface Bookmark {
  Url: string
}

export interface LinkPreview {
  Url: string
}

export interface Table {
  TableWidth: number
  HasColumnHeader: boolean
  HasRowHeader: boolean
  Rows: TableRow[]
}

export interface TableRow {
  Id: string
  Type: string
  HasChildren: boolean
  Cells: TableCell[]
}

export interface TableCell {
  RichTexts: RichText[]
}

export interface ColumnList {
  Columns: Column[]
}

export interface Column {
  Id: string
  Type: string
  HasChildren: boolean
  Children: Block[]
}

export interface BulletedList {
  Type: 'bulleted_list'
  ListItems: BulletedListItemBlock[]
}

export interface NumberedList {
  Type: 'numbered_list'
  ListItems: NumberedListItemBlock[]
}

export interface ToDoList {
  Type: 'to_do_list'
  ListItems: ToDoBlock[]
}

export type List = BulletedList | NumberedList | ToDoList

export interface TableOfContents {
  Color: string
}

export interface RichText {
  Text?: Text
  Annotation: Annotation
  PlainText: string
  Href?: string
  Equation?: Equation
  Mention?: Mention
}

export interface Text {
  Content: string
  Link?: Link
}

export interface Emoji {
  Type: 'emoji'
  Emoji: string
}

export interface Annotation {
  Bold: boolean
  Italic: boolean
  Strikethrough: boolean
  Underline: boolean
  Code: boolean
  Color: string
}

export interface Link {
  Url: string
}

export interface SelectProperty {
  id: string
  name: string
  color: string
}

export interface LinkToPage {
  Type: string
  PageId: string
}

export interface Mention {
  Type: string
  Page?: Reference
}

export interface Reference {
  Id: string
}
