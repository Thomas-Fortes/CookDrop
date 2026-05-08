-- CookDrop — Seed de données initiales
-- À exécuter dans l'éditeur SQL de votre projet Supabase
-- (Table Editor → SQL Editor → coller et Run)

-- ─── NETTOYAGE ───
truncate daily_drops, steps, ingredients, recipes restart identity cascade;

-- ─── RECETTES ───
insert into recipes (id, slug, name, short_desc, long_desc, category, total_time, prep_time, cook_time, difficulty, servings, tags, illustration_url, has_steam) values

('a1b2c3d4-0001-0000-0000-000000000001',
 'carbonara-maison', 'Carbonara Maison',
 'La vraie carbonara — sans crème, juste des œufs et du pecorino.',
 'Originaire de Rome, la carbonara tire son nom des charbonniers (carbonari) qui l''auraient inventée. Le secret : ne jamais mettre de crème. L''onctuosité vient de l''émulsion entre les jaunes d''œuf et l''eau de cuisson des pâtes. Un conseil : sortez les œufs à température ambiante 20 min avant de commencer.',
 'Pâtes', 20, 5, 15, 'Facile', 2,
 ARRAY['rapide','économique'], '/illustrations/carbonara.svg', true),

('a1b2c3d4-0002-0000-0000-000000000002',
 'curry-pois-chiches', 'Curry de Pois Chiches',
 'Un curry végétarien réconfortant, prêt en 20 minutes chrono.',
 'Ce curry s''inspire du chana masala indien, mais simplifié pour une cuisine du soir rapide. La boîte de tomates concassées fait tout le travail. Un conseil : faites revenir les épices à sec dans la poêle 30 secondes avant d''ajouter les légumes — ça libère leurs arômes et change tout au résultat final.',
 'Végétarien', 20, 5, 15, 'Facile', 2,
 ARRAY['végétarien','sans gluten','rapide','économique'], '/illustrations/curry.svg', true),

('a1b2c3d4-0003-0000-0000-000000000003',
 'saumon-papillote-citron', 'Saumon en Papillote',
 'Saumon fondant, citron et herbes — cuisson au four sans surveillance.',
 'La papillote est la technique reine pour cuisiner le poisson sans stress. Le saumon cuit dans sa propre vapeur — impossible de le rater. Choisissez un pavé de 150-180g par personne. Si vous aimez les herbes, c''est le moment de tout mettre : aneth, estragon, persil — tout fonctionne.',
 'Poisson', 25, 5, 20, 'Facile', 2,
 ARRAY['sans gluten','rapide'], '/illustrations/saumon.svg', true),

('a1b2c3d4-0004-0000-0000-000000000004',
 'tarte-poireaux-chevre', 'Tarte Poireaux & Chèvre',
 'Une tarte crémeuse aux poireaux fondants et au chèvre gratiné.',
 'La tarte salée est l''une des recettes les plus simples et les plus rassurantes de la cuisine française. Avec une pâte brisée du commerce, vous êtes à 10 minutes de préparation. Les poireaux fondants et le chèvre sont une association classique qui ne déçoit jamais. Conseil : ajoutez une pincée de noix de muscade à l''appareil.',
 'Végétarien', 40, 10, 30, 'Facile', 4,
 ARRAY['végétarien','économique'], '/illustrations/tarte.svg', false);

-- ─── INGRÉDIENTS ───
insert into ingredients (recipe_id, name, quantity, unit, group_name, display_order) values
-- Carbonara
('a1b2c3d4-0001-0000-0000-000000000001', 'Spaghetti', '200', 'g', 'féculent', 1),
('a1b2c3d4-0001-0000-0000-000000000001', 'Lardons fumés', '150', 'g', 'protéine', 2),
('a1b2c3d4-0001-0000-0000-000000000001', 'Jaunes d''œuf', '3', '', 'liant', 3),
('a1b2c3d4-0001-0000-0000-000000000001', 'Pecorino romano râpé', '60', 'g', 'fromage', 4),
('a1b2c3d4-0001-0000-0000-000000000001', 'Poivre noir', '1', 'c. à café', 'épice', 5),
('a1b2c3d4-0001-0000-0000-000000000001', 'Sel', '', '', 'assaisonnement', 6),
-- Curry
('a1b2c3d4-0002-0000-0000-000000000002', 'Pois chiches (boîte)', '400', 'g', 'protéine', 1),
('a1b2c3d4-0002-0000-0000-000000000002', 'Tomates concassées (boîte)', '400', 'g', 'légume', 2),
('a1b2c3d4-0002-0000-0000-000000000002', 'Oignon', '1', '', 'légume', 3),
('a1b2c3d4-0002-0000-0000-000000000002', 'Ail', '2', 'gousses', 'aromatique', 4),
('a1b2c3d4-0002-0000-0000-000000000002', 'Curry en poudre', '2', 'c. à café', 'épice', 5),
('a1b2c3d4-0002-0000-0000-000000000002', 'Cumin moulu', '1', 'c. à café', 'épice', 6),
('a1b2c3d4-0002-0000-0000-000000000002', 'Lait de coco', '100', 'ml', 'sauce', 7),
('a1b2c3d4-0002-0000-0000-000000000002', 'Huile d''olive', '2', 'c. à soupe', 'matière grasse', 8),
-- Saumon
('a1b2c3d4-0003-0000-0000-000000000003', 'Pavés de saumon', '2', 'pièces', 'protéine', 1),
('a1b2c3d4-0003-0000-0000-000000000003', 'Citron', '1', '', 'agrume', 2),
('a1b2c3d4-0003-0000-0000-000000000003', 'Aneth frais', '1', 'bouquet', 'herbe', 3),
('a1b2c3d4-0003-0000-0000-000000000003', 'Beurre', '20', 'g', 'matière grasse', 4),
('a1b2c3d4-0003-0000-0000-000000000003', 'Sel & poivre', '', '', 'assaisonnement', 5),
-- Tarte
('a1b2c3d4-0004-0000-0000-000000000004', 'Pâte brisée', '1', 'rouleau', 'base', 1),
('a1b2c3d4-0004-0000-0000-000000000004', 'Poireaux', '3', 'moyens', 'légume', 2),
('a1b2c3d4-0004-0000-0000-000000000004', 'Bûche de chèvre', '150', 'g', 'fromage', 3),
('a1b2c3d4-0004-0000-0000-000000000004', 'Œufs', '3', '', 'liant', 4),
('a1b2c3d4-0004-0000-0000-000000000004', 'Crème fraîche', '200', 'ml', 'sauce', 5),
('a1b2c3d4-0004-0000-0000-000000000004', 'Beurre', '20', 'g', 'matière grasse', 6),
('a1b2c3d4-0004-0000-0000-000000000004', 'Muscade, sel, poivre', '', '', 'assaisonnement', 7);

-- ─── ÉTAPES ───
insert into steps (recipe_id, instruction, duration_min, step_order) values
-- Carbonara
('a1b2c3d4-0001-0000-0000-000000000001', 'Faites bouillir une grande casserole d''eau bien salée. Ajoutez les spaghetti et cuisez-les al dente selon les indications du paquet (environ 9 min).', 9, 1),
('a1b2c3d4-0001-0000-0000-000000000001', 'Pendant ce temps, faites revenir les lardons à feu moyen dans une poêle sans matière grasse. Ils doivent être dorés mais pas trop croustillants. Retirez du feu.', 5, 2),
('a1b2c3d4-0001-0000-0000-000000000001', 'Dans un bol, fouettez les jaunes d''œuf avec le pecorino et le poivre. Le mélange doit former une crème épaisse.', null, 3),
('a1b2c3d4-0001-0000-0000-000000000001', 'Réservez une tasse d''eau de cuisson des pâtes avant d''égoutter. C''est votre secret pour une sauce lisse.', null, 4),
('a1b2c3d4-0001-0000-0000-000000000001', 'Hors du feu, ajoutez les pâtes dans la poêle avec les lardons. Versez la crème d''œufs et mélangez vivement en ajoutant l''eau de cuisson cuillère par cuillère jusqu''à obtenir une sauce brillante.', 2, 5),
('a1b2c3d4-0001-0000-0000-000000000001', 'Servez immédiatement avec un tour de moulin à poivre et du pecorino supplémentaire.', null, 6),
-- Curry
('a1b2c3d4-0002-0000-0000-000000000002', 'Émincez l''oignon et hachez l''ail. Faites chauffer l''huile dans une grande poêle à feu moyen.', 2, 1),
('a1b2c3d4-0002-0000-0000-000000000002', 'Faites revenir l''oignon 3 minutes jusqu''à ce qu''il soit translucide. Ajoutez l''ail, le curry et le cumin. Faites revenir encore 1 minute — les épices vont emballer la cuisine.', 4, 2),
('a1b2c3d4-0002-0000-0000-000000000002', 'Ajoutez les tomates concassées et les pois chiches égouttés. Mélangez bien et laissez mijoter à feu moyen 8 minutes.', 8, 3),
('a1b2c3d4-0002-0000-0000-000000000002', 'Versez le lait de coco, mélangez et laissez mijoter encore 3 minutes. Goûtez et ajustez le sel.', 3, 4),
('a1b2c3d4-0002-0000-0000-000000000002', 'Servez sur du riz basmati ou avec du pain naan. Parsemez de coriandre fraîche si vous en avez.', null, 5),
-- Saumon
('a1b2c3d4-0003-0000-0000-000000000003', 'Préchauffez le four à 200°C. Découpez deux grandes feuilles de papier aluminium — assez grandes pour envelopper un pavé avec de la marge.', 8, 1),
('a1b2c3d4-0003-0000-0000-000000000003', 'Posez chaque pavé au centre d''une feuille. Salez, poivrez. Disposez dessus quelques rondelles de citron et de l''aneth.', null, 2),
('a1b2c3d4-0003-0000-0000-000000000003', 'Ajoutez une noisette de beurre sur chaque pavé. Fermez hermétiquement les papillotes en repliant les bords — la vapeur ne doit pas s''échapper.', null, 3),
('a1b2c3d4-0003-0000-0000-000000000003', 'Enfournez 12 minutes. Ouvrez les papillotes avec précaution — la vapeur est brûlante. Le saumon doit être nacré à cœur.', 12, 4),
('a1b2c3d4-0003-0000-0000-000000000003', 'Servez directement dans la papillote avec du riz ou des légumes vapeur.', null, 5),
-- Tarte
('a1b2c3d4-0004-0000-0000-000000000004', 'Préchauffez le four à 180°C. Foncez un moule à tarte avec la pâte brisée et piquez le fond à la fourchette. Réservez au frais.', null, 1),
('a1b2c3d4-0004-0000-0000-000000000004', 'Lavez et émincez les poireaux (parties blanches et vert clair). Faites-les fondre dans le beurre à feu doux avec une pincée de sel, 8 minutes en remuant.', 8, 2),
('a1b2c3d4-0004-0000-0000-000000000004', 'Dans un bol, fouettez les œufs avec la crème. Assaisonnez avec sel, poivre et muscade râpée.', null, 3),
('a1b2c3d4-0004-0000-0000-000000000004', 'Étalez les poireaux sur le fond de tarte. Versez l''appareil crème-œufs par-dessus. Disposez des rondelles de chèvre sur le dessus.', null, 4),
('a1b2c3d4-0004-0000-0000-000000000004', 'Enfournez 25-30 minutes. La tarte est prête quand elle est dorée et que le centre ne tremble plus. Laissez tiédir 5 minutes avant de couper.', 28, 5);

-- ─── DROPS ───
insert into daily_drops (date, recipe_1_id, recipe_2_id) values
(current_date,        'a1b2c3d4-0001-0000-0000-000000000001', 'a1b2c3d4-0002-0000-0000-000000000002'),
(current_date - 1,    'a1b2c3d4-0003-0000-0000-000000000003', 'a1b2c3d4-0004-0000-0000-000000000004'),
(current_date - 2,    'a1b2c3d4-0001-0000-0000-000000000001', 'a1b2c3d4-0004-0000-0000-000000000004')
on conflict (date) do nothing;
