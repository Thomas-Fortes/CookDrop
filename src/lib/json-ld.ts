import type { Recipe } from './types'

export function recipeJsonLd(recipe: Recipe, baseUrl: string) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Recipe',
    name: recipe.name,
    description: recipe.short_desc,
    image: `${baseUrl}${recipe.illustration_url}`,
    totalTime: `PT${recipe.total_time}M`,
    prepTime: `PT${recipe.prep_time}M`,
    cookTime: `PT${recipe.cook_time}M`,
    recipeYield: `${recipe.servings} portions`,
    recipeCategory: recipe.category,
    keywords: recipe.tags.join(', '),
    recipeIngredient: recipe.ingredients?.map(i => `${i.quantity} ${i.unit} ${i.name}`.trim()),
    recipeInstructions: recipe.steps?.map(s => ({
      '@type': 'HowToStep',
      text: s.instruction,
    })),
  }
}
