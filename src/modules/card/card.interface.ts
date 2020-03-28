export interface Card {
  card_id: number
  title: string
  body?: string
  created_at?: string
  updated_at?: string
  folder_id: number // ref to folder model
}
