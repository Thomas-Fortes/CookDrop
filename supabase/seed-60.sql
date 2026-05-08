-- CookDrop — 60 recettes complètes
-- Exécuter dans SQL Editor Supabase (après auto-drop.sql)

truncate daily_drops, steps, ingredients, recipes restart identity cascade;

-- ══════════════════════════════════════════════════
-- RECETTES
-- ══════════════════════════════════════════════════
insert into recipes (id, slug, name, short_desc, long_desc, category, total_time, prep_time, cook_time, difficulty, servings, tags, illustration_url, has_steam) values

-- ── PÂTES (0001–0012) ──
('a1000001-0000-0000-0000-000000000000','carbonara-maison','Carbonara Maison','La vraie carbonara — sans crème, juste des œufs et du pecorino.','Le secret : ne jamais mettre de crème. L''onctuosité vient de l''émulsion entre les jaunes d''œuf et l''eau de cuisson des pâtes. Sortez les œufs à température ambiante 20 min avant.','Pâtes',20,5,15,'Facile',2,ARRAY['rapide','économique'],'/illustrations/pates.svg',true),

('a1000002-0000-0000-0000-000000000000','pates-citron-parmesan','Pâtes Citron & Parmesan','Des pâtes lumineuses, crémeuses et prêtes en 15 minutes.','Pas besoin de crème : le parmesan et l''eau de cuisson font tout. Zestez généreusement le citron — c''est lui qui donne le caractère du plat.','Pâtes',15,3,12,'Facile',2,ARRAY['rapide','végétarien'],'/illustrations/pates.svg',true),

('a1000003-0000-0000-0000-000000000000','spaghetti-aglio-olio','Spaghetti Aglio e Olio','L''anti-recette romaine : ail, huile, piment, c''est tout.','Toute la magie est dans l''huile infusée à feu doux. L''ail ne doit jamais brunir, juste blondir. Ajoutez un peu d''eau de cuisson pour lier.','Pâtes',18,3,15,'Facile',2,ARRAY['rapide','végétarien','économique'],'/illustrations/pates.svg',true),

('a1000004-0000-0000-0000-000000000000','penne-arrabbiata','Penne all''Arrabbiata','Une sauce tomate pimentée, vive et directe. Prête en 20 min.','Arrabbiata veut dire "en colère" en italien. Dosez le piment selon votre courage. La sauce doit réduire jusqu''à être dense et brillante.','Pâtes',20,5,15,'Facile',2,ARRAY['végétarien','rapide'],'/illustrations/pates.svg',true),

('a1000005-0000-0000-0000-000000000000','tagliatelles-bolognaise','Tagliatelles à la Bolognaise','La bolognaise classique, mijotée et généreuse.','Le secret d''une vraie bolognaise : cuire la viande à feu vif pour la dorer, puis mijoter longtemps. Le lait en fin de cuisson adoucit l''acidité.','Pâtes',40,10,30,'Moyen',4,ARRAY['économique'],'/illustrations/pates.svg',true),

('a1000006-0000-0000-0000-000000000000','pates-pesto-maison','Pâtes au Pesto Maison','Basilic frais, parmesan, pignons — un pesto qui change tout.','Ne jamais chauffer le pesto — il s''incorpore hors du feu avec un peu d''eau de cuisson. Les pignons peuvent être remplacés par des noix de cajou.','Pâtes',18,8,10,'Facile',2,ARRAY['végétarien','rapide'],'/illustrations/pates.svg',true),

('a1000007-0000-0000-0000-000000000000','pasta-e-fagioli','Pasta e Fagioli','Le mijoté de pâtes et haricots blancs de la cucina povera.','Une soupe-plat réconfortante. Mixez un tiers des haricots pour épaissir le bouillon naturellement — ça donne une texture veloutée sans ajout de crème.','Pâtes',30,5,25,'Facile',3,ARRAY['végétarien','économique'],'/illustrations/pates.svg',true),

('a1000008-0000-0000-0000-000000000000','pates-gorgonzola-noix','Pâtes Gorgonzola & Noix','Sauce fondante au gorgonzola, noix croquantes. Prêt en 15 min.','Le gorgonzola fond mieux dans une cuillère de crème légère. Les noix se torréfient 2 min à sec dans une poêle — ça change tout au goût.','Pâtes',15,3,12,'Facile',2,ARRAY['rapide'],'/illustrations/pates.svg',true),

('a1000009-0000-0000-0000-000000000000','linguine-palourdes','Linguine aux Palourdes','Vongole express : palourdes en bocal, vin blanc, ail.','Si vous avez des palourdes fraîches, c''est encore mieux. Sinon, les palourdes en bocal sont parfaitement acceptables pour une version du soir.','Pâtes',20,5,15,'Facile',2,ARRAY['rapide'],'/illustrations/pates.svg',true),

('a1000010-0000-0000-0000-000000000000','pates-beurre-sauge','Pâtes Beurre Noisette & Sauge','Le beurre noisette et la sauge croustillante : une élégance totale.','Le beurre noisette se fait en 3 minutes — attendez qu''il mousse, puis qu''il sente la noisette. Retirez du feu dès les premières fumées légères.','Pâtes',18,3,15,'Facile',2,ARRAY['végétarien','rapide'],'/illustrations/pates.svg',true),

('a1000011-0000-0000-0000-000000000000','orzo-legumes-grilles','Orzo aux Légumes Grillés','Petites pâtes en grains, légumes rôtis, féta émiettée.','L''orzo cuit comme un risotto ou dans beaucoup d''eau. Rôtir les légumes à 200°C leur donne une saveur caramélisée incomparable.','Pâtes',25,8,17,'Facile',2,ARRAY['végétarien'],'/illustrations/pates.svg',true),

('a1000012-0000-0000-0000-000000000000','bucatini-amatriciana','Bucatini all''Amatriciana','Guanciale, tomate, pecorino — la trinité romaine.','Le guanciale (joue de porc) est inimitable, mais des lardons fumés fonctionnent très bien. Pas de crème, pas d''oignon dans la vraie amatriciana.','Pâtes',25,5,20,'Facile',2,ARRAY['rapide'],'/illustrations/pates.svg',true),

-- ── VÉGÉTARIEN (0013–0027) ──
('a1000013-0000-0000-0000-000000000000','curry-pois-chiches','Curry de Pois Chiches','Un curry végétarien réconfortant, prêt en 20 minutes chrono.','Faites revenir les épices à sec 30 secondes avant d''ajouter les légumes — ça libère leurs arômes et change tout au résultat final.','Végétarien',20,5,15,'Facile',2,ARRAY['végétarien','sans gluten','rapide','économique'],'/illustrations/vegetarien.svg',true),

('a1000014-0000-0000-0000-000000000000','tarte-poireaux-chevre','Tarte Poireaux & Chèvre','Une tarte crémeuse aux poireaux fondants et au chèvre gratiné.','Avec une pâte brisée du commerce, vous êtes à 10 minutes de préparation. Ajoutez une pincée de noix de muscade à l''appareil.','Végétarien',40,10,30,'Facile',4,ARRAY['végétarien','économique'],'/illustrations/vegetarien.svg',false),

('a1000015-0000-0000-0000-000000000000','shakshuka','Shakshuka aux Épices','Œufs pochés dans une sauce tomate épicée à l''israélienne.','La sauce doit mijoter au moins 10 minutes avant d''ajouter les œufs pour développer ses arômes. Couvrez la poêle pour que les blancs coagulent sans toucher les jaunes.','Végétarien',25,5,20,'Facile',2,ARRAY['végétarien','sans gluten','rapide'],'/illustrations/vegetarien.svg',true),

('a1000016-0000-0000-0000-000000000000','omelette-provencale','Omelette Provençale','Tomates, poivrons, herbes de Provence — l''été dans une poêle.','Une omelette réussie se fait sur feu vif les 30 premières secondes, puis feu doux. Elle doit rester baveuse à cœur.','Végétarien',15,5,10,'Facile',2,ARRAY['végétarien','rapide','sans gluten'],'/illustrations/vegetarien.svg',true),

('a1000017-0000-0000-0000-000000000000','risotto-champignons','Risotto aux Champignons','Le risotto crémeux classique, technique maîtrisée en 25 minutes.','Le secret : ajouter le bouillon chaud louche par louche, jamais froid. Remuez souvent mais pas en continu — les grains doivent garder leur structure.','Végétarien',30,5,25,'Moyen',2,ARRAY['végétarien'],'/illustrations/vegetarien.svg',true),

('a1000018-0000-0000-0000-000000000000','gratin-dauphinois','Gratin Dauphinois','Le vrai gratin dauphinois : pommes de terre fondantes, crème, ail.','Pas de fromage dans le vrai dauphinois — juste de la crème et de l''ail. Les tranches doivent être fines et régulières, idéalement à la mandoline.','Végétarien',80,15,65,'Moyen',4,ARRAY['végétarien','sans gluten'],'/illustrations/vegetarien.svg',false),

('a1000019-0000-0000-0000-000000000000','buddha-bowl-quinoa','Buddha Bowl Quinoa','Quinoa, légumes rôtis, avocat, sauce tahini — complet et beau.','Préparez la sauce tahini en fouettant tahini + citron + ail + eau jusqu''à obtenir une texture fluide. Rôtissez les légumes à 200°C pendant 20 minutes.','Végétarien',30,10,20,'Facile',2,ARRAY['végétarien','sans gluten','rapide'],'/illustrations/vegetarien.svg',false),

('a1000020-0000-0000-0000-000000000000','frittata-legumes','Frittata aux Légumes','L''omelette italienne épaisse qui finit au four — simple et généreuse.','La frittata commence sur le feu et finit sous le gril du four 3-4 minutes. Elle doit être dorée dessus et fondante dedans.','Végétarien',20,5,15,'Facile',4,ARRAY['végétarien','sans gluten','rapide'],'/illustrations/vegetarien.svg',true),

('a1000021-0000-0000-0000-000000000000','galettes-courgette','Galettes de Courgette','Croustillantes dehors, fondantes dedans. Sauce yaourt à la menthe.','Essorez bien les courgettes râpées dans un torchon — l''excès d''eau empêche les galettes de dorer. Une bonne poêle antiadhésive est indispensable.','Végétarien',20,10,10,'Facile',2,ARRAY['végétarien','rapide'],'/illustrations/vegetarien.svg',false),

('a1000022-0000-0000-0000-000000000000','tian-provencal','Tian Provençal','Rondelles de tomates, courgettes et aubergines rôties en gratin.','Coupez tous les légumes à la même épaisseur pour une cuisson homogène. Un filet généreux d''huile d''olive et du thym — c''est tout ce qu''il faut.','Végétarien',50,15,35,'Facile',4,ARRAY['végétarien','sans gluten'],'/illustrations/vegetarien.svg',false),

('a1000023-0000-0000-0000-000000000000','quesadillas-vegetariennes','Quesadillas Végétariennes','Fromage fondu, haricots noirs, poivrons — croustillant et rapide.','Le secret d''une quesadilla croustillante : une poêle sèche, sans matière grasse, à feu moyen. Retournez-la délicatement avec une spatule large.','Végétarien',15,5,10,'Facile',2,ARRAY['végétarien','rapide'],'/illustrations/vegetarien.svg',false),

('a1000024-0000-0000-0000-000000000000','soupe-lentilles-corail','Soupe de Lentilles Corail','Veloutée, épicée, ultra-nourrissante. Prête en 25 minutes.','Les lentilles corail ne nécessitent aucun trempage et cuisent en 15 minutes. Elles fondent naturellement pour donner une soupe onctueuse sans mixer.','Végétarien',25,5,20,'Facile',4,ARRAY['végétarien','sans gluten','rapide','économique'],'/illustrations/vegetarien.svg',true),

('a1000025-0000-0000-0000-000000000000','veloute-butternut','Velouté de Butternut','Doux, épais, légèrement sucré — le velouté d''automne par excellence.','Rôtir la butternut au four avant de la mixer lui donne une profondeur de goût incomparable. Une pointe de gingembre et de noix de muscade relève tout.','Végétarien',35,10,25,'Facile',4,ARRAY['végétarien','sans gluten'],'/illustrations/vegetarien.svg',true),

('a1000026-0000-0000-0000-000000000000','salade-nicoise','Salade Niçoise','La vraie niçoise : thon, œufs durs, anchois, olives noires.','La niçoise authentique ne contient pas de haricots verts cuits — juste des crudités. La vinaigrette doit être bien moutardée.','Végétarien',20,20,0,'Facile',2,ARRAY['végétarien','sans gluten','rapide'],'/illustrations/vegetarien.svg',false),

('a1000027-0000-0000-0000-000000000000','poelee-asiatique','Poêlée Asiatique de Légumes','Légumes croquants, sauce soja, gingembre, sésame.','Tout se joue sur le feu vif et la rapidité. Coupez tous les légumes avant de commencer — une fois la poêle chaude, ça va très vite.','Végétarien',20,10,10,'Facile',2,ARRAY['végétarien','rapide','sans gluten'],'/illustrations/vegetarien.svg',true),

-- ── VIANDE (0028–0039) ──
('a1000028-0000-0000-0000-000000000000','poulet-roti-herbes','Poulet Rôti aux Herbes','Des cuisses de poulet dorées, herbes et ail — le classique du dimanche.','Séchez bien le poulet avec du papier absorbant avant d''assaisonner — c''est la clé pour une peau croustillante. Arrosez toutes les 15 minutes.','Viande',45,5,40,'Facile',2,ARRAY['sans gluten'],'/illustrations/viande.svg',false),

('a1000029-0000-0000-0000-000000000000','steak-sauce-moutarde','Steak Sauce Moutarde','Steak saisi, sauce à la moutarde à l''ancienne et aux herbes.','Sortez le steak du frigo 20 minutes avant. Poêle très chaude, matière grasse qui fume — c''est ça qui donne la croûte. Laissez reposer 3 minutes.','Viande',20,5,15,'Facile',2,ARRAY['sans gluten','rapide'],'/illustrations/viande.svg',false),

('a1000030-0000-0000-0000-000000000000','boulettes-sauce-tomate','Boulettes de Bœuf Sauce Tomate','Des boulettes moelleuses mijotées dans une sauce tomate parfumée.','L''astuce pour des boulettes qui restent moelleuses : ajoutez de la mie de pain trempée dans du lait au hachis. Ne sur-malaxez pas la viande.','Viande',35,15,20,'Facile',4,ARRAY['économique'],'/illustrations/viande.svg',true),

('a1000031-0000-0000-0000-000000000000','poulet-citron-ail','Poulet Citron & Ail','Escalopes de poulet marinées au citron, rôties à la poêle.','Plus la marinade est longue, meilleur c''est — idéalement 30 min. Si vous êtes pressé, 10 minutes suffisent. Le citron doit caraméliser dans la poêle.','Viande',25,10,15,'Facile',2,ARRAY['sans gluten','rapide'],'/illustrations/viande.svg',false),

('a1000032-0000-0000-0000-000000000000','escalope-milanaise','Escalope Milanaise','Escalope panée croustillante, citron et salade — l''incontournable.','Aplatissez l''escalope avec un rouleau à pâtisserie pour une épaisseur homogène. La panure double (farine → œuf → chapelure) est indispensable.','Viande',20,8,12,'Facile',2,ARRAY['rapide'],'/illustrations/viande.svg',false),

('a1000033-0000-0000-0000-000000000000','saute-dinde-champignons','Sauté de Dinde aux Champignons','Morceaux de dinde fondants, champignons, crème et persil.','La dinde est une viande maigre qui sèche vite — ne la surcuisez pas. Dès qu''elle n''est plus rose, retirez-la et laissez la sauce réduire seule.','Viande',25,5,20,'Facile',2,ARRAY['rapide'],'/illustrations/viande.svg',true),

('a1000034-0000-0000-0000-000000000000','hachis-parmentier','Hachis Parmentier','Le plat réconfort absolu : viande mijotée, purée dorée.','Faites une purée avec beaucoup de beurre — c''est son âme. La viande doit être bien assaisonnée et humide. Gratinez 10 min sous le gril.','Viande',50,15,35,'Facile',4,ARRAY['économique'],'/illustrations/viande.svg',false),

('a1000035-0000-0000-0000-000000000000','poulet-tikka-masala','Poulet Tikka Masala','Le curry crémeux au poulet, sauce tomate épicée et coriandre.','Le tikka masala est né dans les restaurants indiens de Grande-Bretagne. Faites mariner le poulet dans le yaourt et les épices au moins 15 minutes.','Viande',35,10,25,'Moyen',2,ARRAY['sans gluten'],'/illustrations/viande.svg',true),

('a1000036-0000-0000-0000-000000000000','porc-miel-moutarde','Côtelettes de Porc Miel & Moutarde','Porc tendre laqué, sauce miel-moutarde en 20 minutes.','Caramélisez le miel à feu vif 30 secondes avant d''ajouter la moutarde — ça lui donne de la profondeur. Évitez de trop cuire le porc qui serait sec.','Viande',20,5,15,'Facile',2,ARRAY['sans gluten','rapide'],'/illustrations/viande.svg',false),

('a1000037-0000-0000-0000-000000000000','boeuf-stroganoff','Bœuf Stroganoff','Bœuf tendre, champignons, crème aigre — le classique russe.','Saisissez le bœuf par petites quantités pour bien le dorer — trop de viande à la fois rend la poêle trop froide et la viande cuit à l''étouffée.','Viande',30,10,20,'Moyen',2,ARRAY['rapide'],'/illustrations/viande.svg',true),

('a1000038-0000-0000-0000-000000000000','poulet-basquaise','Poulet à la Basquaise','Poulet mijoté aux poivrons, tomates et piment d''Espelette.','Le piment d''Espelette est doux et fruité — ne le remplacez pas par du piment fort. Ce plat est encore meilleur réchauffé le lendemain.','Viande',45,10,35,'Facile',4,ARRAY['sans gluten'],'/illustrations/viande.svg',true),

('a1000039-0000-0000-0000-000000000000','brochettes-agneau','Brochettes d''Agneau Marinées','Agneau mariné aux herbes, citron et ail, grillé à la poêle.','La marinade à l''huile d''olive, citron, ail et origan attendrit la viande. Au moins 20 minutes, idéalement 2 heures. Poêle très chaude pour marquer les brochettes.','Viande',30,20,10,'Facile',2,ARRAY['sans gluten','rapide'],'/illustrations/viande.svg',false),

-- ── POISSON (0040–0048) ──
('a1000040-0000-0000-0000-000000000000','saumon-papillote-citron','Saumon en Papillote','Saumon fondant, citron et herbes — cuisson au four sans surveillance.','La papillote cuit le saumon dans sa propre vapeur — impossible de le rater. Fermez hermétiquement pour que la vapeur reste à l''intérieur.','Poisson',25,5,20,'Facile',2,ARRAY['sans gluten','rapide'],'/illustrations/poisson.svg',true),

('a1000041-0000-0000-0000-000000000000','cabillaud-provencal','Cabillaud à la Provençale','Dos de cabillaud sur lit de tomates, olives et herbes.','Le cabillaud est un poisson délicat qui ne supporte pas la surcuisson. Il est cuit quand il s''effeuillle facilement à la fourchette.','Poisson',25,5,20,'Facile',2,ARRAY['sans gluten','rapide'],'/illustrations/poisson.svg',true),

('a1000042-0000-0000-0000-000000000000','crevettes-sautes-ail','Crevettes Sautées à l''Ail','Crevettes saisies à l''ail, beurre, persil — 10 minutes top.','Les crevettes cuisent en 2-3 minutes max — dès qu''elles sont roses et recourbées, elles sont prêtes. Au-delà, elles deviennent caoutchouteuses.','Poisson',10,2,8,'Facile',2,ARRAY['sans gluten','rapide'],'/illustrations/poisson.svg',false),

('a1000043-0000-0000-0000-000000000000','sole-meuniere','Sole Meunière','La sole à la meunière : beurre noisette, citron, la grande classique.','Farinez légèrement la sole juste avant la cuisson — pas avant. Le beurre noisette se fait séparément dans une petite casserole, versé au dernier moment.','Poisson',15,5,10,'Facile',2,ARRAY['rapide'],'/illustrations/poisson.svg',false),

('a1000044-0000-0000-0000-000000000000','thon-tomate-capres','Thon, Tomates & Câpres','Thon en boîte revisité : tomates fraîches, câpres, basilic.','Le thon en boîte de qualité change tout. Égouttez-le bien. Cette préparation se mange chaude ou froide sur des pâtes ou du riz.','Poisson',15,5,10,'Facile',2,ARRAY['rapide','économique','sans gluten'],'/illustrations/poisson.svg',false),

('a1000045-0000-0000-0000-000000000000','maquereau-cidre','Maquereau au Cidre','Filets de maquereau mijotés dans le cidre brut avec oignons.','Le maquereau est un poisson gras, riche en oméga-3, souvent oublié. Le cidre doux acidule et parfume la sauce de façon incomparable.','Poisson',25,5,20,'Facile',2,ARRAY['sans gluten','économique'],'/illustrations/poisson.svg',true),

('a1000046-0000-0000-0000-000000000000','bar-beurre-citron','Bar au Beurre Citronné','Filets de bar poêlés, beurre citronné et herbes fraîches.','Pour une peau croustillante, appuyez les filets avec une spatule les 30 premières secondes. Cuisez 80% côté peau, puis retournez juste 30 secondes.','Poisson',20,5,15,'Facile',2,ARRAY['sans gluten','rapide'],'/illustrations/poisson.svg',false),

('a1000047-0000-0000-0000-000000000000','sardines-grilees-herbes','Sardines Grillées aux Herbes','Sardines fraîches marinées, grillées à la poêle en 10 minutes.','Les sardines fraîches sont en saison de mai à septembre. Faites-les mariner 15 min dans l''huile, le citron et les herbes avant de griller.','Poisson',20,10,10,'Facile',2,ARRAY['sans gluten','rapide','économique'],'/illustrations/poisson.svg',false),

('a1000048-0000-0000-0000-000000000000','saint-jacques-poelees','Coquilles Saint-Jacques Poêlées','Saint-Jacques saisies, beurre de corail, purée de panais.','La poêle doit être très chaude et très légèrement huilée. 1 minute par face pour des saint-jacques de calibre moyen — elles doivent être nacrées au centre.','Poisson',25,10,15,'Moyen',2,ARRAY['sans gluten'],'/illustrations/poisson.svg',false),

-- ── RIZ & CÉRÉALES (0049–0054) ──
('a1000049-0000-0000-0000-000000000000','risotto-citron-parmesan','Risotto Citron & Parmesan','Risotto blanc, zeste de citron, parmesan — frais et crémeux.','Le citron s''ajoute hors du feu, comme le parmesan. Il doit juste parfumer le risotto, pas l''acidifier. Utilisez un bon bouillon — c''est la base.','Riz',30,5,25,'Moyen',2,ARRAY['végétarien'],'/illustrations/riz.svg',true),

('a1000050-0000-0000-0000-000000000000','riz-cantonais','Riz Cantonais Maison','Le riz cantonais du dimanche : œufs, petits pois, jambon, sauce soja.','Utilisez du riz de la veille — il est plus sec et sèche mieux à la poêle. Feu très vif, wok ou grande poêle, et travaillez vite.','Riz',20,5,15,'Facile',2,ARRAY['rapide','économique'],'/illustrations/riz.svg',true),

('a1000051-0000-0000-0000-000000000000','quinoa-legumes-feta','Quinoa, Légumes Rôtis & Féta','Quinoa moelleux, légumes caramélisés, féta émiettée, menthe.','Rincez toujours le quinoa avant cuisson pour enlever la saponine qui donne un goût amer. Rôtissez les légumes séparément pour les caraméliser.','Riz',30,10,20,'Facile',2,ARRAY['végétarien','sans gluten','rapide'],'/illustrations/riz.svg',false),

('a1000052-0000-0000-0000-000000000000','pilaf-amandes','Pilaf de Riz aux Amandes & Raisins','Riz parfumé à la cannelle, amandes grillées et raisins secs.','La méthode pilaf : faire revenir le riz dans le beurre avant d''ajouter le bouillon. Les amandes se grillent à sec dans la poêle, 2 minutes, sans les quitter des yeux.','Riz',25,5,20,'Facile',2,ARRAY['végétarien','économique'],'/illustrations/riz.svg',false),

('a1000053-0000-0000-0000-000000000000','tabboule-frais','Tabboulé Frais','Boulgour, persil plat, tomates, menthe, citron — l''original.','Le vrai tabboulé libanais est composé majoritairement de persil, pas de boulgour. Coupez le persil très finement au couteau, jamais au robot.','Riz',20,20,0,'Facile',4,ARRAY['végétarien','rapide','économique'],'/illustrations/riz.svg',false),

('a1000054-0000-0000-0000-000000000000','bulgur-legumes-menthe','Bulgur aux Légumes & Menthe','Bulgur express, légumes sautés, feta, menthe fraîche.','Le bulgur est précuit — il suffit de le réhydrater 10 minutes dans de l''eau bouillante puis de l''égoutter. Plus rapide que le riz et très nourrissant.','Riz',20,5,15,'Facile',2,ARRAY['végétarien','rapide','économique'],'/illustrations/riz.svg',false),

-- ── SOUPES & VELOUTÉS (0055–0060) ──
('a1000055-0000-0000-0000-000000000000','veloute-courge','Velouté de Courge','Butternut fondante, crème de coco, gingembre — velouté d''automne.','Rôtir la courge au four avant de la mixer lui donne une saveur caramélisée bien plus profonde que la cuisson à l''eau. Une touche de curry dore relève tout.','Soupe',35,10,25,'Facile',4,ARRAY['végétarien','sans gluten'],'/illustrations/soupe.svg',true),

('a1000056-0000-0000-0000-000000000000','soupe-miso-tofu','Soupe Miso & Tofu','La soupe japonaise réconfortante — prête en 10 minutes.','Ne faites jamais bouillir le miso — ça détruit ses probiotiques. Délayez-le dans un peu de bouillon chaud, puis incorporez hors du feu.','Soupe',10,2,8,'Facile',2,ARRAY['végétarien','rapide','sans gluten'],'/illustrations/soupe.svg',true),

('a1000057-0000-0000-0000-000000000000','minestrone-rapide','Minestrone Rapide','La soupe italienne de légumes, généreuse et économique.','Le minestrone se fait avec ce qu''on a. Ajoutez les légumes par ordre de cuisson : les plus durs d''abord. Les petites pâtes s''ajoutent en dernier.','Soupe',30,10,20,'Facile',4,ARRAY['végétarien','économique'],'/illustrations/soupe.svg',true),

('a1000058-0000-0000-0000-000000000000','veloute-brocolis','Velouté de Brocolis','Brocolis mixés, crème fraîche, amandes grillées.','Mixez les brocolis al dente pour garder leur couleur verte éclatante. Si vous les surcuisez, ils jaunissent. Une noisette de beurre dans le mixeur les rend soyeux.','Soupe',20,5,15,'Facile',4,ARRAY['végétarien','sans gluten','rapide'],'/illustrations/soupe.svg',true),

('a1000059-0000-0000-0000-000000000000','soupe-thai-coco','Soupe Thaï Coco','Bouillon coco, citronnelle, crevettes, champignons — Tom Kha express.','La citronnelle se coupe en tronçons et s''infuse dans le bouillon — elle ne se mange pas. Le citron vert et la coriandre se mettent impérativement crus, dans l''assiette.','Soupe',20,5,15,'Facile',2,ARRAY['sans gluten','rapide'],'/illustrations/soupe.svg',true),

('a1000060-0000-0000-0000-000000000000','soupe-tomates-roties','Soupe de Tomates Rôties','Tomates rôties au four, basilic, ail confit — intense et parfumée.','Rôtir les tomates 30 minutes à 180°C avant de les mixer concentre leurs arômes. Ajoutez l''ail confit directement dans les gousses — il fond et sucre la soupe.','Soupe',45,5,40,'Facile',4,ARRAY['végétarien','sans gluten'],'/illustrations/soupe.svg',true);
