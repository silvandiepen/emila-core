export type FieldType = 'string' | 'text' | 'number' | 'boolean' | 'date' | 'datetime' | 'url' | 'email' | 'json' | 'file' | 'files' | 'select' | 'reference'

export type FieldOptions = {
  label?: string
  description?: string
  required?: boolean
  localized?: boolean
  translatable?: boolean
  default?: unknown
  options?: string[]
}

export type FieldDefinition = FieldOptions & { kind: 'field'; type: FieldType }
export type GroupDefinition = { kind: 'group'; label?: string; children: SchemaTree }
export type CollectionDefinition = { kind: 'collection'; label?: string; item: SchemaTree; min?: number; max?: number }
export type SchemaNode = FieldDefinition | GroupDefinition | CollectionDefinition
export type SchemaTree = Record<string, SchemaNode>

export type LocaleConfig = {
  default: string
  supported: string[]
  autoTranslate?: boolean
}

export type CMSDefinition = {
  locales?: LocaleConfig
  schema: SchemaTree
}

const field = (type: FieldType, options: FieldOptions = {}): FieldDefinition => ({ kind: 'field', type, ...options })

export const string = (options?: FieldOptions) => field('string', options)
export const text = (options?: FieldOptions) => field('text', options)
export const number = (options?: FieldOptions) => field('number', options)
export const boolean = (options?: FieldOptions) => field('boolean', options)
export const date = (options?: FieldOptions) => field('date', options)
export const datetime = (options?: FieldOptions) => field('datetime', options)
export const url = (options?: FieldOptions) => field('url', options)
export const email = (options?: FieldOptions) => field('email', options)
export const json = (options?: FieldOptions) => field('json', options)
export const file = (options?: FieldOptions) => field('file', options)
export const files = (options?: FieldOptions) => field('files', options)
export const select = (options: FieldOptions & { options: string[] }) => field('select', options)
export const reference = (options?: FieldOptions) => field('reference', options)

export const group = (children: SchemaTree, options: { label?: string } = {}): GroupDefinition => ({ kind: 'group', children, ...options })
export const collection = (item: SchemaTree, options: { label?: string; min?: number; max?: number } = {}): CollectionDefinition => ({ kind: 'collection', item, ...options })
export const defineCMS = (definition: CMSDefinition) => definition
