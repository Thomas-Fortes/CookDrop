export type Category = 'Pâtes' | 'Viande' | 'Poisson' | 'Végétarien' | 'Soupe' | 'Riz' | 'Autre'
export type Difficulty = 'Facile' | 'Moyen' | 'Élaboré'

export interface Ingredient {
  id: string
  recipe_id: string
  name: string
  quantity: string
  unit: string
  group_name: string
  display_order: number
}

export interface Step {
  id: string
  recipe_id: string
  instruction: string
  duration_min: number | null
  step_order: number
}

export interface Recipe {
  id: string
  slug: string
  name: string
  short_desc: string
  long_desc: string
  category: Category
  total_time: number
  prep_time: number
  cook_time: number
  difficulty: Difficulty
  servings: number
  tags: string[]
  illustration_url: string
  has_steam: boolean
  created_at: string
  ingredients?: Ingredient[]
  steps?: Step[]
}

export interface DailyDrop {
  id: string
  date: string
  recipe_1_id: string
  recipe_2_id: string
  recipe_1?: Recipe
  recipe_2?: Recipe
}

export interface UserCooked {
  id: string
  user_id: string
  recipe_id: string
  cooked_at: string
}

export interface UserFavorite {
  id: string
  user_id: string
  recipe_id: string
  saved_at: string
}
