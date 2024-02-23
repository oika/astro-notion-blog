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
  property: string
  checkbox: CheckboxFilterCondition
} | {
  property: string
  date: DateFilterCondition
} | {
  property: string
  created_time: DateFilterCondition
} | {
  property: string
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
  property: string
  direction: 'descending' | 'ascending'
}
