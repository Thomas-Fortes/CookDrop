import type { DailyDrop, Recipe } from './types'
import { MOCK_TODAY_DROP, MOCK_ARCHIVE, MOCK_RECIPES } from './mock-data'

const USE_MOCK = !process.env.NEXT_PUBLIC_SUPABASE_URL || process.env.NEXT_PUBLIC_SUPABASE_URL === 'YOUR_SUPABASE_URL'

export async function getTodayDrop(): Promise<DailyDrop | null> {
  if (USE_MOCK) return MOCK_TODAY_DROP
  try {
    const { createClient } = await import('./supabase-server')
    const supabase = await createClient()
    const today = new Date().toISOString().split('T')[0]

    // Try auto-drop RPC first; fall back to direct query if function not yet created
    const { data: drop, error: rpcError } = await supabase
      .rpc('get_or_create_daily_drop', { p_date: today })
      .single()

    if (drop && !rpcError) {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const dropId = (drop as any).id as string
      const { data } = await supabase
        .from('daily_drops')
        .select('*, recipe_1:recipes!recipe_1_id(*, ingredients(*), steps(*)), recipe_2:recipes!recipe_2_id(*, ingredients(*), steps(*))')
        .eq('id', dropId)
        .single()
      return data
    }

    // Fallback: direct table query
    const { data } = await supabase
      .from('daily_drops')
      .select('*, recipe_1:recipes!recipe_1_id(*, ingredients(*), steps(*)), recipe_2:recipes!recipe_2_id(*, ingredients(*), steps(*))')
      .eq('date', today)
      .single()
    return data ?? null
  } catch { return null }
}

export async function getRecipeBySlug(slug: string): Promise<Recipe | null> {
  if (USE_MOCK) return MOCK_RECIPES.find(r => r.slug === slug) ?? null
  try {
    const { createClient } = await import('./supabase-server')
    const supabase = await createClient()
    const { data } = await supabase
      .from('recipes')
      .select('*, ingredients(*), steps(*)')
      .eq('slug', slug)
      .single()
    return data
  } catch { return MOCK_RECIPES.find(r => r.slug === slug) ?? null }
}

export async function getArchive(): Promise<DailyDrop[]> {
  if (USE_MOCK) return MOCK_ARCHIVE
  try {
    const { createClient } = await import('./supabase-server')
    const supabase = await createClient()
    const { data } = await supabase
      .from('daily_drops')
      .select('*, recipe_1:recipes!recipe_1_id(*), recipe_2:recipes!recipe_2_id(*)')
      .order('date', { ascending: false })
      .limit(60)
    return data ?? []
  } catch { return MOCK_ARCHIVE }
}

export async function getAllRecipes(): Promise<Recipe[]> {
  if (USE_MOCK) return MOCK_RECIPES
  try {
    const { createClient } = await import('./supabase-server')
    const supabase = await createClient()
    const { data } = await supabase.from('recipes').select('*').order('created_at', { ascending: false })
    return data ?? []
  } catch { return MOCK_RECIPES }
}
