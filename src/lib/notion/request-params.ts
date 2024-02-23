export interface QueryDatabase {
  database_id: string
  filter?: PropertyFilterObject | CompoundFilterObject
  sorts?: PropertyValueSortObject[]
  page_size?: number
  start_cursor?: string
}

export interface RetrieveDatabase {
  database_id: string
}

export interface RetrieveBlock {
  block_id: string
}

export interface RetrieveBlockChildren {
  block_id: string
  page_size?: number
  start_cursor?: string
}

export type PropertyFilterObject = {
  property: 'Published'
  checkbox: CheckboxFilterCondition
} | {
  property: 'Date'
  date: DateFilterCondition
} | {
  property: 'Tags'
  multi_select: MultiSelectFilterCondition
} | {
  property: 'Slug'
  rich_text: TextFilterCondition
} | {
  property: 'Rank'
  number: NumberFilterCondition
} | {
  timestamp: 'created_time'
  created_time: DateFilterCondition
} | {
  timestamp: 'last_edited_time'
  last_edited_time: DateFilterCondition
}

export type CompoundFilterObject = {
  and: PropertyFilterObject[]
} | {
  or: PropertyFilterObject[]
}

export type CheckboxFilterCondition = {
  equals: boolean
} | {
  does_not_equal: boolean
}

export type MultiSelectFilterCondition = {
  contains: string
} | {
  does_not_contain: string;
} | {
  is_empty: true
} | {
  is_not_empty: true
}

export type TextFilterCondition = {
  equals: string
} | {
  does_not_equal: string
} | {
  contains: string
} | {
  does_not_contain: string
} | {
  starts_with: string
} | {
  ends_with: string
} | {
  is_empty: true
} | {
  is_not_empty: true
}

export type NumberFilterCondition = {
  equals: number
} | {
  does_not_equal: number
} | {
  greater_than: number
} | {
  less_than: number
} | {
  greater_than_or_equal_to: number
} | {
  less_than_or_equal_to: number
} | {
  is_empty: true
} | {
  is_not_empty: true
}

export type DateFilterCondition = {
  equals: string
} | {
  before: string
} | {
  after: string
} | {
  on_or_before: string
} | {
  is_empty: true
} | {
  is_not_empty: true
} | {
  on_or_after: string
}

export interface PropertyValueSortObject {
  property: 'Date' | 'Rank'
  direction: 'descending' | 'ascending'
}
