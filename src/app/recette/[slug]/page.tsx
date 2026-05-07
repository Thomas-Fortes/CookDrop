import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { getRecipeBySlug, getAllRecipes } from '@/lib/data'
import { recipeJsonLd } from '@/lib/json-ld'
import { RecipePageClient } from '@/components/RecipePageClient'

interface Props {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  const recipes = await getAllRecipes()
  return recipes.map(r => ({ slug: r.slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const recipe = await getRecipeBySlug(slug)
  if (!recipe) return {}
  return {
    title: `${recipe.name} — CookDrop`,
    description: recipe.short_desc,
    openGraph: {
      title: recipe.name,
      description: recipe.short_desc,
      type: 'article',
    },
  }
}

export const revalidate = 3600

export default async function RecipePage({ params }: Props) {
  const { slug } = await params
  const recipe = await getRecipeBySlug(slug)
  if (!recipe) notFound()

  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL ?? 'https://cookdrop.app'
  const jsonLd = recipeJsonLd(recipe, baseUrl)

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <RecipePageClient recipe={recipe} />
    </>
  )
}
