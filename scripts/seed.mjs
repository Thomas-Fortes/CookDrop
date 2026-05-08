import { createClient } from '@supabase/supabase-js'
import { readFileSync } from 'fs'

// Lire les vars d'env depuis .env.local
const env = readFileSync('.env.local', 'utf8')
const url = env.match(/NEXT_PUBLIC_SUPABASE_URL=(.+)/)?.[1]?.trim()
const key = env.match(/NEXT_PUBLIC_SUPABASE_ANON_KEY=(.+)/)?.[1]?.trim()

if (!url || !key) { console.error('Variables manquantes dans .env.local'); process.exit(1) }

const supabase = createClient(url, key)
const today = new Date().toISOString().split('T')[0]

/* ─── RECETTES ─── */
const RECIPES = [
  {
    slug: 'carbonara-maison',
    name: 'Carbonara Maison',
    short_desc: 'La vraie carbonara — sans crème, juste des œufs et du pecorino.',
    long_desc: "Originaire de Rome, la carbonara tire son nom des charbonniers (carbonari) qui l'auraient inventée. Le secret : ne jamais mettre de crème. L'onctuosité vient de l'émulsion entre les jaunes d'œuf et l'eau de cuisson des pâtes. Un conseil : sortez les œufs à température ambiante 20 min avant de commencer.",
    category: 'Pâtes', total_time: 20, prep_time: 5, cook_time: 15,
    difficulty: 'Facile', servings: 2, tags: ['rapide', 'économique'],
    illustration_url: '/illustrations/carbonara.svg', has_steam: true,
  },
  {
    slug: 'curry-pois-chiches',
    name: 'Curry de Pois Chiches',
    short_desc: 'Un curry végétarien réconfortant, prêt en 20 minutes chrono.',
    long_desc: "Ce curry s'inspire du chana masala indien, mais simplifié pour une cuisine du soir rapide. La boîte de tomates concassées fait tout le travail. Un conseil : faites revenir les épices à sec dans la poêle 30 secondes avant d'ajouter les légumes — ça libère leurs arômes et change tout au résultat final.",
    category: 'Végétarien', total_time: 20, prep_time: 5, cook_time: 15,
    difficulty: 'Facile', servings: 2, tags: ['végétarien', 'sans gluten', 'rapide', 'économique'],
    illustration_url: '/illustrations/curry.svg', has_steam: true,
  },
  {
    slug: 'saumon-papillote-citron',
    name: 'Saumon en Papillote',
    short_desc: 'Saumon fondant, citron et herbes — cuisson au four sans surveillance.',
    long_desc: "La papillote est la technique reine pour cuisiner le poisson sans stress. Le saumon cuit dans sa propre vapeur — impossible de le rater. Choisissez un pavé de 150-180g par personne. Si vous aimez les herbes, c'est le moment de tout mettre : aneth, estragon, persil — tout fonctionne.",
    category: 'Poisson', total_time: 25, prep_time: 5, cook_time: 20,
    difficulty: 'Facile', servings: 2, tags: ['sans gluten', 'rapide'],
    illustration_url: '/illustrations/saumon.svg', has_steam: true,
  },
  {
    slug: 'tarte-poireaux-chevre',
    name: 'Tarte Poireaux & Chèvre',
    short_desc: 'Une tarte crémeuse aux poireaux fondants et au chèvre gratiné.',
    long_desc: "La tarte salée est l'une des recettes les plus simples et les plus rassurantes de la cuisine française. Avec une pâte brisée du commerce, vous êtes à 10 minutes de préparation. Les poireaux fondants et le chèvre sont une association classique qui ne déçoit jamais. Conseil : ajoutez une pincée de noix de muscade à l'appareil.",
    category: 'Végétarien', total_time: 40, prep_time: 10, cook_time: 30,
    difficulty: 'Facile', servings: 4, tags: ['végétarien', 'économique'],
    illustration_url: '/illustrations/tarte.svg', has_steam: false,
  },
]

const INGREDIENTS = {
  'carbonara-maison': [
    { name: 'Spaghetti', quantity: '200', unit: 'g', group_name: 'féculent', display_order: 1 },
    { name: 'Lardons fumés', quantity: '150', unit: 'g', group_name: 'protéine', display_order: 2 },
    { name: "Jaunes d'œuf", quantity: '3', unit: '', group_name: 'liant', display_order: 3 },
    { name: 'Pecorino romano râpé', quantity: '60', unit: 'g', group_name: 'fromage', display_order: 4 },
    { name: 'Poivre noir', quantity: '1', unit: 'c. à café', group_name: 'épice', display_order: 5 },
    { name: 'Sel', quantity: '', unit: '', group_name: 'assaisonnement', display_order: 6 },
  ],
  'curry-pois-chiches': [
    { name: 'Pois chiches (boîte)', quantity: '400', unit: 'g', group_name: 'protéine', display_order: 1 },
    { name: 'Tomates concassées (boîte)', quantity: '400', unit: 'g', group_name: 'légume', display_order: 2 },
    { name: 'Oignon', quantity: '1', unit: '', group_name: 'légume', display_order: 3 },
    { name: 'Ail', quantity: '2', unit: 'gousses', group_name: 'aromatique', display_order: 4 },
    { name: 'Curry en poudre', quantity: '2', unit: 'c. à café', group_name: 'épice', display_order: 5 },
    { name: 'Cumin moulu', quantity: '1', unit: 'c. à café', group_name: 'épice', display_order: 6 },
    { name: 'Lait de coco', quantity: '100', unit: 'ml', group_name: 'sauce', display_order: 7 },
    { name: "Huile d'olive", quantity: '2', unit: 'c. à soupe', group_name: 'matière grasse', display_order: 8 },
  ],
  'saumon-papillote-citron': [
    { name: 'Pavés de saumon', quantity: '2', unit: 'pièces', group_name: 'protéine', display_order: 1 },
    { name: 'Citron', quantity: '1', unit: '', group_name: 'agrume', display_order: 2 },
    { name: 'Aneth frais', quantity: '1', unit: 'bouquet', group_name: 'herbe', display_order: 3 },
    { name: 'Beurre', quantity: '20', unit: 'g', group_name: 'matière grasse', display_order: 4 },
    { name: 'Sel & poivre', quantity: '', unit: '', group_name: 'assaisonnement', display_order: 5 },
  ],
  'tarte-poireaux-chevre': [
    { name: 'Pâte brisée', quantity: '1', unit: 'rouleau', group_name: 'base', display_order: 1 },
    { name: 'Poireaux', quantity: '3', unit: 'moyens', group_name: 'légume', display_order: 2 },
    { name: 'Bûche de chèvre', quantity: '150', unit: 'g', group_name: 'fromage', display_order: 3 },
    { name: 'Œufs', quantity: '3', unit: '', group_name: 'liant', display_order: 4 },
    { name: 'Crème fraîche', quantity: '200', unit: 'ml', group_name: 'sauce', display_order: 5 },
    { name: 'Beurre', quantity: '20', unit: 'g', group_name: 'matière grasse', display_order: 6 },
    { name: 'Muscade, sel, poivre', quantity: '', unit: '', group_name: 'assaisonnement', display_order: 7 },
  ],
}

const STEPS = {
  'carbonara-maison': [
    { instruction: "Faites bouillir une grande casserole d'eau bien salée. Ajoutez les spaghetti et cuisez-les al dente selon les indications du paquet (environ 9 min).", duration_min: 9, step_order: 1 },
    { instruction: "Pendant ce temps, faites revenir les lardons à feu moyen dans une poêle sans matière grasse. Ils doivent être dorés mais pas trop croustillants. Retirez du feu.", duration_min: 5, step_order: 2 },
    { instruction: "Dans un bol, fouettez les jaunes d'œuf avec le pecorino et le poivre. Le mélange doit former une crème épaisse.", duration_min: null, step_order: 3 },
    { instruction: "Réservez une tasse d'eau de cuisson des pâtes avant d'égoutter. C'est votre secret pour une sauce lisse.", duration_min: null, step_order: 4 },
    { instruction: "Hors du feu, ajoutez les pâtes dans la poêle avec les lardons. Versez la crème d'œufs et mélangez vivement en ajoutant l'eau de cuisson cuillère par cuillère jusqu'à obtenir une sauce brillante.", duration_min: 2, step_order: 5 },
    { instruction: "Servez immédiatement avec un tour de moulin à poivre et du pecorino supplémentaire.", duration_min: null, step_order: 6 },
  ],
  'curry-pois-chiches': [
    { instruction: "Émincez l'oignon et hachez l'ail. Faites chauffer l'huile dans une grande poêle à feu moyen.", duration_min: 2, step_order: 1 },
    { instruction: "Faites revenir l'oignon 3 minutes jusqu'à ce qu'il soit translucide. Ajoutez l'ail, le curry et le cumin. Faites revenir encore 1 minute — les épices vont emballer la cuisine.", duration_min: 4, step_order: 2 },
    { instruction: "Ajoutez les tomates concassées et les pois chiches égouttés. Mélangez bien et laissez mijoter à feu moyen 8 minutes.", duration_min: 8, step_order: 3 },
    { instruction: "Versez le lait de coco, mélangez et laissez mijoter encore 3 minutes. Goûtez et ajustez le sel.", duration_min: 3, step_order: 4 },
    { instruction: "Servez sur du riz basmati ou avec du pain naan. Parsemez de coriandre fraîche si vous en avez.", duration_min: null, step_order: 5 },
  ],
  'saumon-papillote-citron': [
    { instruction: "Préchauffez le four à 200°C. Découpez deux grandes feuilles de papier aluminium — assez grandes pour envelopper un pavé avec de la marge.", duration_min: 8, step_order: 1 },
    { instruction: "Posez chaque pavé au centre d'une feuille. Salez, poivrez. Disposez dessus quelques rondelles de citron et de l'aneth.", duration_min: null, step_order: 2 },
    { instruction: "Ajoutez une noisette de beurre sur chaque pavé. Fermez hermétiquement les papillotes en repliant les bords — la vapeur ne doit pas s'échapper.", duration_min: null, step_order: 3 },
    { instruction: "Enfournez 12 minutes. Ouvrez les papillotes avec précaution — la vapeur est brûlante. Le saumon doit être nacré à cœur.", duration_min: 12, step_order: 4 },
    { instruction: "Servez directement dans la papillote avec du riz ou des légumes vapeur.", duration_min: null, step_order: 5 },
  ],
  'tarte-poireaux-chevre': [
    { instruction: "Préchauffez le four à 180°C. Foncez un moule à tarte avec la pâte brisée et piquez le fond à la fourchette. Réservez au frais.", duration_min: null, step_order: 1 },
    { instruction: "Lavez et émincez les poireaux (parties blanches et vert clair). Faites-les fondre dans le beurre à feu doux avec une pincée de sel, 8 minutes en remuant.", duration_min: 8, step_order: 2 },
    { instruction: "Dans un bol, fouettez les œufs avec la crème. Assaisonnez avec sel, poivre et muscade râpée.", duration_min: null, step_order: 3 },
    { instruction: "Étalez les poireaux sur le fond de tarte. Versez l'appareil crème-œufs par-dessus. Disposez des rondelles de chèvre sur le dessus.", duration_min: null, step_order: 4 },
    { instruction: "Enfournez 25-30 minutes. La tarte est prête quand elle est dorée et que le centre ne tremble plus. Laissez tiédir 5 minutes avant de couper.", duration_min: 28, step_order: 5 },
  ],
}

async function seed() {
  console.log('🌱 Démarrage du seed Supabase...\n')

  /* 1. Vider les tables existantes (ordre FK) */
  console.log('🗑  Nettoyage des tables...')
  await supabase.from('daily_drops').delete().neq('id', '00000000-0000-0000-0000-000000000000')
  await supabase.from('steps').delete().neq('id', '00000000-0000-0000-0000-000000000000')
  await supabase.from('ingredients').delete().neq('id', '00000000-0000-0000-0000-000000000000')
  await supabase.from('recipes').delete().neq('id', '00000000-0000-0000-0000-000000000000')

  /* 2. Insérer les recettes */
  console.log('📝 Insertion des recettes...')
  const { data: recipes, error: recipesErr } = await supabase
    .from('recipes')
    .insert(RECIPES)
    .select('id, slug')

  if (recipesErr) { console.error('❌ Erreur recettes:', recipesErr.message); process.exit(1) }
  console.log(`   ✓ ${recipes.length} recettes insérées`)

  const recipeMap = Object.fromEntries(recipes.map(r => [r.slug, r.id]))

  /* 3. Insérer les ingrédients */
  console.log('🥕 Insertion des ingrédients...')
  const allIngredients = Object.entries(INGREDIENTS).flatMap(([slug, items]) =>
    items.map(ing => ({ ...ing, recipe_id: recipeMap[slug] }))
  )
  const { error: ingErr } = await supabase.from('ingredients').insert(allIngredients)
  if (ingErr) { console.error('❌ Erreur ingrédients:', ingErr.message); process.exit(1) }
  console.log(`   ✓ ${allIngredients.length} ingrédients insérés`)

  /* 4. Insérer les étapes */
  console.log('👨‍🍳 Insertion des étapes...')
  const allSteps = Object.entries(STEPS).flatMap(([slug, items]) =>
    items.map(step => ({ ...step, recipe_id: recipeMap[slug] }))
  )
  const { error: stepsErr } = await supabase.from('steps').insert(allSteps)
  if (stepsErr) { console.error('❌ Erreur étapes:', stepsErr.message); process.exit(1) }
  console.log(`   ✓ ${allSteps.length} étapes insérées`)

  /* 5. Créer le drop du jour */
  console.log('📅 Création du drop du jour...')
  const { error: dropErr } = await supabase.from('daily_drops').insert({
    date: today,
    recipe_1_id: recipeMap['carbonara-maison'],
    recipe_2_id: recipeMap['curry-pois-chiches'],
  })
  if (dropErr) { console.error('❌ Erreur drop:', dropErr.message); process.exit(1) }
  console.log(`   ✓ Drop du ${today} créé (Carbonara + Curry)`)

  /* 6. Drop d'hier pour l'archive */
  const yesterday = new Date(Date.now() - 86400000).toISOString().split('T')[0]
  const { error: archErr } = await supabase.from('daily_drops').insert({
    date: yesterday,
    recipe_1_id: recipeMap['saumon-papillote-citron'],
    recipe_2_id: recipeMap['tarte-poireaux-chevre'],
  })
  if (archErr && !archErr.message.includes('unique')) {
    console.error('❌ Erreur archive:', archErr.message)
  } else {
    console.log(`   ✓ Drop d'archive du ${yesterday} créé (Saumon + Tarte)`)
  }

  console.log('\n✅ Seed terminé avec succès !')
  console.log('   Lance npm run dev et ouvre http://localhost:3000')
}

seed()
