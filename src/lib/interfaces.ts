export interface Database {
  Title: string
  Description: string
  Icon: FileObject | Emoji | null
  Cover: FileObject | null
}

export interface Post {
  PageId: string
  Title: string
  Icon: FileObject | Emoji | null
  Cover: FileObject | null
  Slug: string
  Date: string
  Tags: SelectProperty[]
  Excerpt: string
  FeaturedImage: FileObject | null
  Rank: number
}

interface BlockBase {
  Id: string
  HasChildren: boolean
}

interface BookmarkBlock extends BlockBase {
  Type: 'bookmark'
  Bookmark: Bookmark
}
interface BreadcrumbBlock extends BlockBase {
  Type: 'breadcrumb'
}
interface BulletedListItemBlock extends BlockBase {
  Type: 'bulleted_list_item'
  BulletedListItem: BulletedListItem
}
interface CalloutBlock extends BlockBase {
  Type: 'callout'
  Callout: Callout
}
interface ChildDatabaseBlock extends BlockBase {
  Type: 'child_database'
}
interface ChildPageBlock extends BlockBase {
  Type: 'child_page'
}
interface CodeBlock extends BlockBase {
  Type: 'code'
  Code: Code
}
interface ColumnBlock extends BlockBase {
  Type: 'column'
}
interface ColumnListBlock extends BlockBase {
  Type: 'column_list'
  ColumnList: ColumnList
}
interface DividerBlock extends BlockBase {
  Type: 'divider'
}
interface EmbedBlock extends BlockBase {
  Type: 'embed'
  Embed: Embed
}
interface EquationBlock extends BlockBase {
  Type: 'equation'
  Equation: Equation
}
interface FileBlock extends BlockBase {
  Type: 'file'
  File: File
}
interface Heading1Block extends BlockBase {
  Type: 'heading_1'
  Heading1: Heading1
}
interface Heading2Block extends BlockBase {
  Type: 'heading_2'
  Heading2: Heading2
}
interface Heading3Block extends BlockBase {
  Type: 'heading_3'
  Heading3: Heading3
}
interface ImageBlock extends BlockBase {
  Type: 'image'
  Image: Image
}
interface LinkPreviewBlock extends BlockBase {
  Type: 'link_preview'
  LinkPreview: LinkPreview
}
interface LinkToPageBlock extends BlockBase {
  Type: 'link_to_page'
  LinkToPage: LinkToPage | undefined
}
interface NumberedListItemBlock extends BlockBase {
  Type: 'numbered_list_item'
  NumberedListItem: NumberedListItem
}
interface ParagraphBlock extends BlockBase {
  Type: 'paragraph'
  Paragraph: Paragraph
}
interface PdfBlock extends BlockBase {
  Type: 'pdf'
}
interface QuoteBlock extends BlockBase {
  Type: 'quote'
  Quote: Quote
}
interface SyncedBlockBlock extends BlockBase {
  Type: 'synced_block'
  SyncedBlock: SyncedBlock
}
interface TableBlock extends BlockBase {
  Type: 'table'
  Table: Table
}
interface TableOfContentsBlock extends BlockBase {
  Type: 'table_of_contents'
  TableOfContents: TableOfContents
}
interface TableRowBlock extends BlockBase {
  Type: 'table_row'
}
interface TemplateBlock extends BlockBase {
  Type: 'template'
}
interface ToDoBlock extends BlockBase {
  Type: 'to_do'
  ToDo: ToDo
}
interface ToggleBlock extends BlockBase {
  Type: 'toggle'
  Toggle: Toggle
}
interface UnsupportedBlock extends BlockBase {
  Type: 'unsupported'
}
interface VideoBlock extends BlockBase {
  Type: 'video'
  Video: Video
}

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
  | Heading1Block
  | Heading2Block
  | Heading3Block
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

export interface Paragraph {
  RichTexts: RichText[]
  Color: string
  Children?: Block[]
}

export interface Heading1 {
  RichTexts: RichText[]
  Color: string
  IsToggleable: boolean
  Children?: Block[]
}

export interface Heading2 {
  RichTexts: RichText[]
  Color: string
  IsToggleable: boolean
  Children?: Block[]
}

export interface Heading3 {
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
  File?: FileObject
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
  File?: FileObject
  External?: External
}

export interface FileObject {
  Type: string
  Url: string
  ExpiryTime?: string
}

export interface External {
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
  Icon: FileObject | Emoji | null
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

export interface List {
  Type: string
  ListItems: Block[]
}

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
  Type: string
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
