-- CookDrop — Ingrédients et étapes des 60 recettes
-- À exécuter APRÈS seed-60.sql

-- ══════════════════════════════════════════════════
-- INGRÉDIENTS
-- ══════════════════════════════════════════════════
insert into ingredients (recipe_id, name, quantity, unit, group_name, display_order) values
-- 0001 Carbonara
('a1000001-0000-0000-0000-000000000000','Spaghetti','200','g','féculent',1),
('a1000001-0000-0000-0000-000000000000','Lardons fumés','150','g','protéine',2),
('a1000001-0000-0000-0000-000000000000','Jaunes d''œuf','3','','liant',3),
('a1000001-0000-0000-0000-000000000000','Pecorino romano râpé','60','g','fromage',4),
('a1000001-0000-0000-0000-000000000000','Poivre noir','1','c. à café','épice',5),
('a1000001-0000-0000-0000-000000000000','Sel','','','assaisonnement',6),
-- 0002 Pâtes Citron
('a1000002-0000-0000-0000-000000000000','Spaghetti','200','g','féculent',1),
('a1000002-0000-0000-0000-000000000000','Citron (zeste + jus)','2','','agrume',2),
('a1000002-0000-0000-0000-000000000000','Parmesan râpé','60','g','fromage',3),
('a1000002-0000-0000-0000-000000000000','Beurre','30','g','matière grasse',4),
('a1000002-0000-0000-0000-000000000000','Sel & poivre','','','assaisonnement',5),
-- 0003 Aglio e Olio
('a1000003-0000-0000-0000-000000000000','Spaghetti','200','g','féculent',1),
('a1000003-0000-0000-0000-000000000000','Ail','5','gousses','aromatique',2),
('a1000003-0000-0000-0000-000000000000','Huile d''olive','6','c. à soupe','matière grasse',3),
('a1000003-0000-0000-0000-000000000000','Piment rouge séché','1','','épice',4),
('a1000003-0000-0000-0000-000000000000','Persil plat','1/2','bouquet','herbe',5),
-- 0004 Arrabbiata
('a1000004-0000-0000-0000-000000000000','Penne','200','g','féculent',1),
('a1000004-0000-0000-0000-000000000000','Tomates concassées','400','g','légume',2),
('a1000004-0000-0000-0000-000000000000','Ail','3','gousses','aromatique',3),
('a1000004-0000-0000-0000-000000000000','Piment rouge','1','','épice',4),
('a1000004-0000-0000-0000-000000000000','Huile d''olive','3','c. à soupe','matière grasse',5),
-- 0005 Bolognaise
('a1000005-0000-0000-0000-000000000000','Tagliatelles','250','g','féculent',1),
('a1000005-0000-0000-0000-000000000000','Bœuf haché','300','g','protéine',2),
('a1000005-0000-0000-0000-000000000000','Tomates concassées','400','g','légume',3),
('a1000005-0000-0000-0000-000000000000','Oignon','1','','légume',4),
('a1000005-0000-0000-0000-000000000000','Ail','2','gousses','aromatique',5),
('a1000005-0000-0000-0000-000000000000','Vin rouge','100','ml','liquide',6),
('a1000005-0000-0000-0000-000000000000','Lait entier','50','ml','liant',7),
-- 0006 Pesto
('a1000006-0000-0000-0000-000000000000','Pâtes (trofie ou linguine)','200','g','féculent',1),
('a1000006-0000-0000-0000-000000000000','Basilic frais','40','g','herbe',2),
('a1000006-0000-0000-0000-000000000000','Parmesan râpé','40','g','fromage',3),
('a1000006-0000-0000-0000-000000000000','Pignons de pin','30','g','oléagineux',4),
('a1000006-0000-0000-0000-000000000000','Ail','1','gousse','aromatique',5),
('a1000006-0000-0000-0000-000000000000','Huile d''olive','6','c. à soupe','matière grasse',6),
-- 0007 Pasta e Fagioli
('a1000007-0000-0000-0000-000000000000','Petites pâtes (ditalini)','120','g','féculent',1),
('a1000007-0000-0000-0000-000000000000','Haricots blancs en boîte','400','g','protéine',2),
('a1000007-0000-0000-0000-000000000000','Tomates concassées','200','g','légume',3),
('a1000007-0000-0000-0000-000000000000','Ail','2','gousses','aromatique',4),
('a1000007-0000-0000-0000-000000000000','Bouillon de légumes','500','ml','liquide',5),
('a1000007-0000-0000-0000-000000000000','Romarin','1','branche','herbe',6),
-- 0008 Gorgonzola Noix
('a1000008-0000-0000-0000-000000000000','Rigatoni','200','g','féculent',1),
('a1000008-0000-0000-0000-000000000000','Gorgonzola','100','g','fromage',2),
('a1000008-0000-0000-0000-000000000000','Cerneaux de noix','50','g','oléagineux',3),
('a1000008-0000-0000-0000-000000000000','Crème fraîche légère','100','ml','sauce',4),
('a1000008-0000-0000-0000-000000000000','Poivre noir','','','épice',5),
-- 0009 Palourdes
('a1000009-0000-0000-0000-000000000000','Linguine','200','g','féculent',1),
('a1000009-0000-0000-0000-000000000000','Palourdes en bocal','200','g','protéine',2),
('a1000009-0000-0000-0000-000000000000','Ail','3','gousses','aromatique',3),
('a1000009-0000-0000-0000-000000000000','Vin blanc sec','100','ml','liquide',4),
('a1000009-0000-0000-0000-000000000000','Huile d''olive','4','c. à soupe','matière grasse',5),
('a1000009-0000-0000-0000-000000000000','Persil plat','1/2','bouquet','herbe',6),
-- 0010 Beurre Sauge
('a1000010-0000-0000-0000-000000000000','Pâtes (pappardelle)','200','g','féculent',1),
('a1000010-0000-0000-0000-000000000000','Beurre','80','g','matière grasse',2),
('a1000010-0000-0000-0000-000000000000','Sauge fraîche','10','feuilles','herbe',3),
('a1000010-0000-0000-0000-000000000000','Parmesan râpé','40','g','fromage',4),
-- 0011 Orzo légumes
('a1000011-0000-0000-0000-000000000000','Orzo','180','g','féculent',1),
('a1000011-0000-0000-0000-000000000000','Courgette','1','','légume',2),
('a1000011-0000-0000-0000-000000000000','Poivron rouge','1','','légume',3),
('a1000011-0000-0000-0000-000000000000','Féta','80','g','fromage',4),
('a1000011-0000-0000-0000-000000000000','Huile d''olive','3','c. à soupe','matière grasse',5),
-- 0012 Amatriciana
('a1000012-0000-0000-0000-000000000000','Bucatini','200','g','féculent',1),
('a1000012-0000-0000-0000-000000000000','Lardons fumés','150','g','protéine',2),
('a1000012-0000-0000-0000-000000000000','Tomates concassées','400','g','légume',3),
('a1000012-0000-0000-0000-000000000000','Pecorino râpé','50','g','fromage',4),
('a1000012-0000-0000-0000-000000000000','Piment rouge','1','pincée','épice',5),
-- 0013 Curry pois chiches
('a1000013-0000-0000-0000-000000000000','Pois chiches (boîte)','400','g','protéine',1),
('a1000013-0000-0000-0000-000000000000','Tomates concassées','400','g','légume',2),
('a1000013-0000-0000-0000-000000000000','Oignon','1','','légume',3),
('a1000013-0000-0000-0000-000000000000','Ail','2','gousses','aromatique',4),
('a1000013-0000-0000-0000-000000000000','Curry en poudre','2','c. à café','épice',5),
('a1000013-0000-0000-0000-000000000000','Lait de coco','100','ml','sauce',6),
-- 0014 Tarte poireaux
('a1000014-0000-0000-0000-000000000000','Pâte brisée','1','rouleau','base',1),
('a1000014-0000-0000-0000-000000000000','Poireaux','3','moyens','légume',2),
('a1000014-0000-0000-0000-000000000000','Bûche de chèvre','150','g','fromage',3),
('a1000014-0000-0000-0000-000000000000','Œufs','3','','liant',4),
('a1000014-0000-0000-0000-000000000000','Crème fraîche','200','ml','sauce',5),
-- 0015 Shakshuka
('a1000015-0000-0000-0000-000000000000','Œufs','4','','protéine',1),
('a1000015-0000-0000-0000-000000000000','Tomates concassées','400','g','légume',2),
('a1000015-0000-0000-0000-000000000000','Poivron rouge','1','','légume',3),
('a1000015-0000-0000-0000-000000000000','Oignon','1','','légume',4),
('a1000015-0000-0000-0000-000000000000','Cumin, paprika, piment','1','c. à café chacun','épice',5),
('a1000015-0000-0000-0000-000000000000','Féta (optionnel)','60','g','fromage',6),
-- 0016 Omelette provençale
('a1000016-0000-0000-0000-000000000000','Œufs','4','','protéine',1),
('a1000016-0000-0000-0000-000000000000','Tomate','1','','légume',2),
('a1000016-0000-0000-0000-000000000000','Poivron','1/2','','légume',3),
('a1000016-0000-0000-0000-000000000000','Herbes de Provence','1','c. à café','herbe',4),
('a1000016-0000-0000-0000-000000000000','Huile d''olive','2','c. à soupe','matière grasse',5),
-- 0017 Risotto champignons
('a1000017-0000-0000-0000-000000000000','Riz Arborio','180','g','féculent',1),
('a1000017-0000-0000-0000-000000000000','Champignons de Paris','250','g','légume',2),
('a1000017-0000-0000-0000-000000000000','Bouillon de légumes chaud','700','ml','liquide',3),
('a1000017-0000-0000-0000-000000000000','Oignon','1','','légume',4),
('a1000017-0000-0000-0000-000000000000','Parmesan râpé','50','g','fromage',5),
('a1000017-0000-0000-0000-000000000000','Vin blanc','100','ml','liquide',6),
('a1000017-0000-0000-0000-000000000000','Beurre','30','g','matière grasse',7),
-- 0018 Gratin dauphinois
('a1000018-0000-0000-0000-000000000000','Pommes de terre','800','g','féculent',1),
('a1000018-0000-0000-0000-000000000000','Crème fraîche liquide','400','ml','sauce',2),
('a1000018-0000-0000-0000-000000000000','Ail','2','gousses','aromatique',3),
('a1000018-0000-0000-0000-000000000000','Noix de muscade','1','pincée','épice',4),
('a1000018-0000-0000-0000-000000000000','Sel & poivre','','','assaisonnement',5),
-- 0019 Buddha bowl
('a1000019-0000-0000-0000-000000000000','Quinoa','150','g','céréale',1),
('a1000019-0000-0000-0000-000000000000','Avocat','1','','légume',2),
('a1000019-0000-0000-0000-000000000000','Pois chiches rôtis','200','g','protéine',3),
('a1000019-0000-0000-0000-000000000000','Concombre','1/2','','légume',4),
('a1000019-0000-0000-0000-000000000000','Tahini','2','c. à soupe','sauce',5),
('a1000019-0000-0000-0000-000000000000','Citron','1','','agrume',6),
-- 0020 Frittata
('a1000020-0000-0000-0000-000000000000','Œufs','6','','protéine',1),
('a1000020-0000-0000-0000-000000000000','Courgette','1','','légume',2),
('a1000020-0000-0000-0000-000000000000','Poivron','1','','légume',3),
('a1000020-0000-0000-0000-000000000000','Parmesan râpé','40','g','fromage',4),
('a1000020-0000-0000-0000-000000000000','Herbes fraîches','1','poignée','herbe',5),
-- 0021 Galettes courgette
('a1000021-0000-0000-0000-000000000000','Courgettes','2','','légume',1),
('a1000021-0000-0000-0000-000000000000','Œuf','1','','liant',2),
('a1000021-0000-0000-0000-000000000000','Farine','3','c. à soupe','féculent',3),
('a1000021-0000-0000-0000-000000000000','Féta émiettée','60','g','fromage',4),
('a1000021-0000-0000-0000-000000000000','Yaourt + menthe (sauce)','1','pot','sauce',5),
-- 0022 Tian provençal
('a1000022-0000-0000-0000-000000000000','Courgettes','2','','légume',1),
('a1000022-0000-0000-0000-000000000000','Tomates','3','','légume',2),
('a1000022-0000-0000-0000-000000000000','Aubergine','1','','légume',3),
('a1000022-0000-0000-0000-000000000000','Ail','3','gousses','aromatique',4),
('a1000022-0000-0000-0000-000000000000','Huile d''olive + thym','4','c. à soupe','matière grasse',5),
-- 0023 Quesadillas
('a1000023-0000-0000-0000-000000000000','Tortillas de blé','4','','base',1),
('a1000023-0000-0000-0000-000000000000','Fromage râpé','120','g','fromage',2),
('a1000023-0000-0000-0000-000000000000','Haricots noirs (boîte)','200','g','protéine',3),
('a1000023-0000-0000-0000-000000000000','Poivron rouge','1','','légume',4),
('a1000023-0000-0000-0000-000000000000','Crème & guacamole','','pour servir','sauce',5),
-- 0024 Lentilles corail
('a1000024-0000-0000-0000-000000000000','Lentilles corail','200','g','légumineuse',1),
('a1000024-0000-0000-0000-000000000000','Bouillon de légumes','1','L','liquide',2),
('a1000024-0000-0000-0000-000000000000','Oignon','1','','légume',3),
('a1000024-0000-0000-0000-000000000000','Cumin, curcuma, paprika','1','c. à café chacun','épice',4),
('a1000024-0000-0000-0000-000000000000','Lait de coco','100','ml','sauce',5),
-- 0025 Velouté butternut
('a1000025-0000-0000-0000-000000000000','Butternut','800','g','légume',1),
('a1000025-0000-0000-0000-000000000000','Oignon','1','','légume',2),
('a1000025-0000-0000-0000-000000000000','Bouillon de légumes','600','ml','liquide',3),
('a1000025-0000-0000-0000-000000000000','Crème fraîche','100','ml','sauce',4),
('a1000025-0000-0000-0000-000000000000','Gingembre frais','1','c. à café','épice',5),
-- 0026 Niçoise
('a1000026-0000-0000-0000-000000000000','Thon en boîte','2','boîtes','protéine',1),
('a1000026-0000-0000-0000-000000000000','Œufs durs','3','','protéine',2),
('a1000026-0000-0000-0000-000000000000','Tomates cerises','200','g','légume',3),
('a1000026-0000-0000-0000-000000000000','Olives noires','80','g','légume',4),
('a1000026-0000-0000-0000-000000000000','Anchois (optionnel)','6','filets','protéine',5),
-- 0027 Poêlée asiatique
('a1000027-0000-0000-0000-000000000000','Légumes variés (carotte, poivron, brocolis)','400','g','légume',1),
('a1000027-0000-0000-0000-000000000000','Sauce soja','3','c. à soupe','sauce',2),
('a1000027-0000-0000-0000-000000000000','Gingembre frais','1','c. à café','aromatique',3),
('a1000027-0000-0000-0000-000000000000','Huile de sésame','1','c. à soupe','matière grasse',4),
('a1000027-0000-0000-0000-000000000000','Graines de sésame','1','c. à soupe','garniture',5),
-- 0028 Poulet rôti
('a1000028-0000-0000-0000-000000000000','Cuisses de poulet','4','','protéine',1),
('a1000028-0000-0000-0000-000000000000','Ail','4','gousses','aromatique',2),
('a1000028-0000-0000-0000-000000000000','Thym + romarin','2','branches chacun','herbe',3),
('a1000028-0000-0000-0000-000000000000','Huile d''olive','3','c. à soupe','matière grasse',4),
('a1000028-0000-0000-0000-000000000000','Citron','1','','agrume',5),
-- 0029 Steak moutarde
('a1000029-0000-0000-0000-000000000000','Steaks de bœuf','2','','protéine',1),
('a1000029-0000-0000-0000-000000000000','Moutarde à l''ancienne','2','c. à soupe','sauce',2),
('a1000029-0000-0000-0000-000000000000','Crème fraîche','100','ml','sauce',3),
('a1000029-0000-0000-0000-000000000000','Échalote','1','','aromatique',4),
('a1000029-0000-0000-0000-000000000000','Beurre','20','g','matière grasse',5),
-- 0030 Boulettes tomate
('a1000030-0000-0000-0000-000000000000','Bœuf haché','400','g','protéine',1),
('a1000030-0000-0000-0000-000000000000','Tomates concassées','400','g','sauce',2),
('a1000030-0000-0000-0000-000000000000','Mie de pain trempée dans du lait','2','tranches','liant',3),
('a1000030-0000-0000-0000-000000000000','Œuf','1','','liant',4),
('a1000030-0000-0000-0000-000000000000','Ail + oignon','1','chacun','aromatique',5),
-- 0031 Poulet citron ail
('a1000031-0000-0000-0000-000000000000','Escalopes de poulet','2','','protéine',1),
('a1000031-0000-0000-0000-000000000000','Citron','2','','agrume',2),
('a1000031-0000-0000-0000-000000000000','Ail','3','gousses','aromatique',3),
('a1000031-0000-0000-0000-000000000000','Huile d''olive','3','c. à soupe','matière grasse',4),
('a1000031-0000-0000-0000-000000000000','Persil plat','1/2','bouquet','herbe',5),
-- 0032 Escalope milanaise
('a1000032-0000-0000-0000-000000000000','Escalopes de veau (ou poulet)','2','','protéine',1),
('a1000032-0000-0000-0000-000000000000','Chapelure','80','g','panure',2),
('a1000032-0000-0000-0000-000000000000','Œuf','1','','liant',3),
('a1000032-0000-0000-0000-000000000000','Farine','3','c. à soupe','panure',4),
('a1000032-0000-0000-0000-000000000000','Citron + salade verte','','pour servir','garniture',5),
-- 0033 Dinde champignons
('a1000033-0000-0000-0000-000000000000','Émincé de dinde','400','g','protéine',1),
('a1000033-0000-0000-0000-000000000000','Champignons de Paris','250','g','légume',2),
('a1000033-0000-0000-0000-000000000000','Crème fraîche','150','ml','sauce',3),
('a1000033-0000-0000-0000-000000000000','Échalote','1','','aromatique',4),
('a1000033-0000-0000-0000-000000000000','Persil plat','1/2','bouquet','herbe',5),
-- 0034 Hachis parmentier
('a1000034-0000-0000-0000-000000000000','Bœuf haché','400','g','protéine',1),
('a1000034-0000-0000-0000-000000000000','Pommes de terre','700','g','féculent',2),
('a1000034-0000-0000-0000-000000000000','Tomates concassées','200','g','sauce',3),
('a1000034-0000-0000-0000-000000000000','Oignon + ail','1','chacun','aromatique',4),
('a1000034-0000-0000-0000-000000000000','Beurre + lait (purée)','40','g + 100ml','matière grasse',5),
-- 0035 Tikka masala
('a1000035-0000-0000-0000-000000000000','Blanc de poulet','400','g','protéine',1),
('a1000035-0000-0000-0000-000000000000','Tomates concassées','400','g','sauce',2),
('a1000035-0000-0000-0000-000000000000','Crème de coco','150','ml','sauce',3),
('a1000035-0000-0000-0000-000000000000','Oignon + ail + gingembre','1','chacun','aromatique',4),
('a1000035-0000-0000-0000-000000000000','Garam masala, cumin, curcuma','2','c. à café chacun','épice',5),
-- 0036 Porc miel moutarde
('a1000036-0000-0000-0000-000000000000','Côtelettes de porc','2','','protéine',1),
('a1000036-0000-0000-0000-000000000000','Miel','2','c. à soupe','sauce',2),
('a1000036-0000-0000-0000-000000000000','Moutarde de Dijon','1','c. à soupe','sauce',3),
('a1000036-0000-0000-0000-000000000000','Thym','2','branches','herbe',4),
('a1000036-0000-0000-0000-000000000000','Beurre','20','g','matière grasse',5),
-- 0037 Stroganoff
('a1000037-0000-0000-0000-000000000000','Émincé de bœuf','400','g','protéine',1),
('a1000037-0000-0000-0000-000000000000','Champignons','200','g','légume',2),
('a1000037-0000-0000-0000-000000000000','Crème aigre (ou fraîche)','150','ml','sauce',3),
('a1000037-0000-0000-0000-000000000000','Oignon','1','','légume',4),
('a1000037-0000-0000-0000-000000000000','Moutarde','1','c. à soupe','sauce',5),
-- 0038 Basquaise
('a1000038-0000-0000-0000-000000000000','Poulet (morceaux)','1','kg','protéine',1),
('a1000038-0000-0000-0000-000000000000','Poivrons (rouge + vert)','2','','légume',2),
('a1000038-0000-0000-0000-000000000000','Tomates','3','','légume',3),
('a1000038-0000-0000-0000-000000000000','Oignon + ail','1','chacun','aromatique',4),
('a1000038-0000-0000-0000-000000000000','Piment d''Espelette','1','c. à café','épice',5),
-- 0039 Brochettes agneau
('a1000039-0000-0000-0000-000000000000','Épaule d''agneau','400','g','protéine',1),
('a1000039-0000-0000-0000-000000000000','Citron','1','','agrume',2),
('a1000039-0000-0000-0000-000000000000','Ail','3','gousses','aromatique',3),
('a1000039-0000-0000-0000-000000000000','Origan séché + huile d''olive','2','c. à café + 4 c.','herbe',4),
-- 0040 Saumon papillote
('a1000040-0000-0000-0000-000000000000','Pavés de saumon','2','','protéine',1),
('a1000040-0000-0000-0000-000000000000','Citron','1','','agrume',2),
('a1000040-0000-0000-0000-000000000000','Aneth frais','1','bouquet','herbe',3),
('a1000040-0000-0000-0000-000000000000','Beurre','20','g','matière grasse',4),
('a1000040-0000-0000-0000-000000000000','Sel & poivre','','','assaisonnement',5),
-- 0041 Cabillaud provençal
('a1000041-0000-0000-0000-000000000000','Dos de cabillaud','2','filets','protéine',1),
('a1000041-0000-0000-0000-000000000000','Tomates cerises','200','g','légume',2),
('a1000041-0000-0000-0000-000000000000','Olives noires','60','g','légume',3),
('a1000041-0000-0000-0000-000000000000','Ail + thym','2','gousses + 2 branches','aromatique',4),
('a1000041-0000-0000-0000-000000000000','Huile d''olive','3','c. à soupe','matière grasse',5),
-- 0042 Crevettes ail
('a1000042-0000-0000-0000-000000000000','Crevettes roses cuites','300','g','protéine',1),
('a1000042-0000-0000-0000-000000000000','Ail','4','gousses','aromatique',2),
('a1000042-0000-0000-0000-000000000000','Beurre','30','g','matière grasse',3),
('a1000042-0000-0000-0000-000000000000','Persil plat','1/2','bouquet','herbe',4),
('a1000042-0000-0000-0000-000000000000','Citron','1/2','','agrume',5),
-- 0043 Sole meunière
('a1000043-0000-0000-0000-000000000000','Soles (ou limandes)','2','','protéine',1),
('a1000043-0000-0000-0000-000000000000','Beurre','80','g','matière grasse',2),
('a1000043-0000-0000-0000-000000000000','Farine','3','c. à soupe','panure',3),
('a1000043-0000-0000-0000-000000000000','Citron','1','','agrume',4),
('a1000043-0000-0000-0000-000000000000','Persil plat','1/2','bouquet','herbe',5),
-- 0044 Thon tomate câpres
('a1000044-0000-0000-0000-000000000000','Thon en boîte','2','boîtes (140g)','protéine',1),
('a1000044-0000-0000-0000-000000000000','Tomates','2','','légume',2),
('a1000044-0000-0000-0000-000000000000','Câpres','2','c. à soupe','condiment',3),
('a1000044-0000-0000-0000-000000000000','Basilic frais','1','poignée','herbe',4),
('a1000044-0000-0000-0000-000000000000','Huile d''olive','3','c. à soupe','matière grasse',5),
-- 0045 Maquereau cidre
('a1000045-0000-0000-0000-000000000000','Filets de maquereau','4','','protéine',1),
('a1000045-0000-0000-0000-000000000000','Cidre brut','200','ml','liquide',2),
('a1000045-0000-0000-0000-000000000000','Oignon','1','','légume',3),
('a1000045-0000-0000-0000-000000000000','Thym + laurier','2','branches + 1 feuille','herbe',4),
-- 0046 Bar beurre citron
('a1000046-0000-0000-0000-000000000000','Filets de bar','2','','protéine',1),
('a1000046-0000-0000-0000-000000000000','Beurre','60','g','matière grasse',2),
('a1000046-0000-0000-0000-000000000000','Citron','1','','agrume',3),
('a1000046-0000-0000-0000-000000000000','Ciboulette','1/2','bouquet','herbe',4),
('a1000046-0000-0000-0000-000000000000','Huile d''olive','1','c. à soupe','matière grasse',5),
-- 0047 Sardines grillées
('a1000047-0000-0000-0000-000000000000','Sardines fraîches','8','','protéine',1),
('a1000047-0000-0000-0000-000000000000','Citron','1','','agrume',2),
('a1000047-0000-0000-0000-000000000000','Persil + ail','1','bouquet + 2 gousses','herbe',3),
('a1000047-0000-0000-0000-000000000000','Huile d''olive','3','c. à soupe','matière grasse',4),
-- 0048 Saint-Jacques
('a1000048-0000-0000-0000-000000000000','Noix de Saint-Jacques','300','g','protéine',1),
('a1000048-0000-0000-0000-000000000000','Beurre','40','g','matière grasse',2),
('a1000048-0000-0000-0000-000000000000','Purée de panais (surgelée ok)','300','g','féculent',3),
('a1000048-0000-0000-0000-000000000000','Citron','1/2','','agrume',4),
-- 0049 Risotto citron
('a1000049-0000-0000-0000-000000000000','Riz Arborio','180','g','féculent',1),
('a1000049-0000-0000-0000-000000000000','Bouillon de légumes chaud','700','ml','liquide',2),
('a1000049-0000-0000-0000-000000000000','Citron (zeste + jus)','1','','agrume',3),
('a1000049-0000-0000-0000-000000000000','Parmesan râpé','50','g','fromage',4),
('a1000049-0000-0000-0000-000000000000','Vin blanc','100','ml','liquide',5),
('a1000049-0000-0000-0000-000000000000','Beurre + oignon','30','g + 1','matière grasse',6),
-- 0050 Riz cantonais
('a1000050-0000-0000-0000-000000000000','Riz cuit de la veille','300','g','féculent',1),
('a1000050-0000-0000-0000-000000000000','Œufs','3','','protéine',2),
('a1000050-0000-0000-0000-000000000000','Petits pois surgelés','100','g','légume',3),
('a1000050-0000-0000-0000-000000000000','Jambon blanc','80','g','protéine',4),
('a1000050-0000-0000-0000-000000000000','Sauce soja','3','c. à soupe','sauce',5),
-- 0051 Quinoa feta
('a1000051-0000-0000-0000-000000000000','Quinoa','150','g','céréale',1),
('a1000051-0000-0000-0000-000000000000','Courgette + poivron','1','chacun','légume',2),
('a1000051-0000-0000-0000-000000000000','Féta','100','g','fromage',3),
('a1000051-0000-0000-0000-000000000000','Menthe fraîche','1','poignée','herbe',4),
('a1000051-0000-0000-0000-000000000000','Huile d''olive + citron','3','c. à soupe + 1','matière grasse',5),
-- 0052 Pilaf amandes
('a1000052-0000-0000-0000-000000000000','Riz long','180','g','féculent',1),
('a1000052-0000-0000-0000-000000000000','Amandes effilées','40','g','oléagineux',2),
('a1000052-0000-0000-0000-000000000000','Raisins secs','30','g','fruit sec',3),
('a1000052-0000-0000-0000-000000000000','Bouillon de légumes','350','ml','liquide',4),
('a1000052-0000-0000-0000-000000000000','Cannelle + beurre','1','bâton + 20g','épice',5),
-- 0053 Tabboulé
('a1000053-0000-0000-0000-000000000000','Boulgour fin','120','g','céréale',1),
('a1000053-0000-0000-0000-000000000000','Persil plat','2','bouquets','herbe',2),
('a1000053-0000-0000-0000-000000000000','Tomates','2','','légume',3),
('a1000053-0000-0000-0000-000000000000','Menthe fraîche','1','bouquet','herbe',4),
('a1000053-0000-0000-0000-000000000000','Citron + huile d''olive','2','+ 4 c. à soupe','agrume',5),
-- 0054 Bulgur menthe
('a1000054-0000-0000-0000-000000000000','Bulgur','150','g','céréale',1),
('a1000054-0000-0000-0000-000000000000','Tomates cerises + concombre','150','g + 1/2','légume',2),
('a1000054-0000-0000-0000-000000000000','Féta','80','g','fromage',3),
('a1000054-0000-0000-0000-000000000000','Menthe + persil','1','bouquet chacun','herbe',4),
('a1000054-0000-0000-0000-000000000000','Citron + huile d''olive','1','+ 3 c. à soupe','agrume',5),
-- 0055 Velouté courge
('a1000055-0000-0000-0000-000000000000','Butternut','1','kg','légume',1),
('a1000055-0000-0000-0000-000000000000','Lait de coco','200','ml','sauce',2),
('a1000055-0000-0000-0000-000000000000','Oignon + ail + gingembre','1','chacun','aromatique',3),
('a1000055-0000-0000-0000-000000000000','Curry doux','1','c. à café','épice',4),
('a1000055-0000-0000-0000-000000000000','Bouillon de légumes','400','ml','liquide',5),
-- 0056 Miso tofu
('a1000056-0000-0000-0000-000000000000','Pâte miso blanche','3','c. à soupe','sauce',1),
('a1000056-0000-0000-0000-000000000000','Tofu soyeux','150','g','protéine',2),
('a1000056-0000-0000-0000-000000000000','Bouillon dashi (ou légumes)','800','ml','liquide',3),
('a1000056-0000-0000-0000-000000000000','Algues wakamé séchées','5','g','légume',4),
('a1000056-0000-0000-0000-000000000000','Ciboule','2','tiges','herbe',5),
-- 0057 Minestrone
('a1000057-0000-0000-0000-000000000000','Légumes variés (carotte, courgette, céleri)','400','g','légume',1),
('a1000057-0000-0000-0000-000000000000','Haricots blancs en boîte','200','g','légumineuse',2),
('a1000057-0000-0000-0000-000000000000','Petites pâtes','80','g','féculent',3),
('a1000057-0000-0000-0000-000000000000','Bouillon de légumes','1','L','liquide',4),
('a1000057-0000-0000-0000-000000000000','Tomates concassées','200','g','légume',5),
-- 0058 Velouté brocolis
('a1000058-0000-0000-0000-000000000000','Brocolis','600','g','légume',1),
('a1000058-0000-0000-0000-000000000000','Pomme de terre','1','','féculent',2),
('a1000058-0000-0000-0000-000000000000','Crème fraîche','100','ml','sauce',3),
('a1000058-0000-0000-0000-000000000000','Bouillon de légumes','600','ml','liquide',4),
('a1000058-0000-0000-0000-000000000000','Amandes grillées','30','g','garniture',5),
-- 0059 Soupe thaï
('a1000059-0000-0000-0000-000000000000','Crevettes roses','200','g','protéine',1),
('a1000059-0000-0000-0000-000000000000','Lait de coco','400','ml','sauce',2),
('a1000059-0000-0000-0000-000000000000','Bouillon de poulet','400','ml','liquide',3),
('a1000059-0000-0000-0000-000000000000','Citronnelle + gingembre','2','tiges + 1 c.','aromatique',4),
('a1000059-0000-0000-0000-000000000000','Sauce poisson + citron vert','2','c. à soupe + 1','condiment',5),
-- 0060 Soupe tomates rôties
('a1000060-0000-0000-0000-000000000000','Tomates','1','kg','légume',1),
('a1000060-0000-0000-0000-000000000000','Ail','6','gousses','aromatique',2),
('a1000060-0000-0000-0000-000000000000','Basilic frais','1','bouquet','herbe',3),
('a1000060-0000-0000-0000-000000000000','Bouillon de légumes','300','ml','liquide',4),
('a1000060-0000-0000-0000-000000000000','Huile d''olive','4','c. à soupe','matière grasse',5);

-- ══════════════════════════════════════════════════
-- ÉTAPES (3–5 par recette, concises)
-- ══════════════════════════════════════════════════
insert into steps (recipe_id, instruction, duration_min, step_order) values
-- 0001 Carbonara
('a1000001-0000-0000-0000-000000000000','Faites bouillir une grande casserole d''eau salée. Cuisez les spaghetti al dente (≈9 min). Réservez une tasse d''eau de cuisson avant d''égoutter.',9,1),
('a1000001-0000-0000-0000-000000000000','Faites revenir les lardons à sec jusqu''à dorure. Retirez du feu.',5,2),
('a1000001-0000-0000-0000-000000000000','Fouettez les jaunes avec le pecorino et le poivre — crème épaisse.',null,3),
('a1000001-0000-0000-0000-000000000000','Hors du feu, mélangez pâtes + lardons + crème d''œufs. Ajoutez l''eau de cuisson cuillère par cuillère jusqu''à sauce brillante.',2,4),
('a1000001-0000-0000-0000-000000000000','Servez immédiatement avec pecorino et poivre.',null,5),
-- 0002 Pâtes citron
('a1000002-0000-0000-0000-000000000000','Cuisez les pâtes al dente, réservez 100ml d''eau de cuisson.',12,1),
('a1000002-0000-0000-0000-000000000000','Hors du feu, mélangez pâtes chaudes + beurre + zeste + jus de citron.',null,2),
('a1000002-0000-0000-0000-000000000000','Ajoutez le parmesan et l''eau de cuisson pour lier. Poivrez généreusement.',null,3),
-- 0003 Aglio e olio
('a1000003-0000-0000-0000-000000000000','Cuisez les spaghetti al dente, réservez 150ml d''eau de cuisson.',12,1),
('a1000003-0000-0000-0000-000000000000','À feu doux, infusez l''ail émincé et le piment dans l''huile 3 min — l''ail doit blondir, jamais brunir.',3,2),
('a1000003-0000-0000-0000-000000000000','Ajoutez les pâtes, l''eau de cuisson, le persil. Mélangez vivement 1 min.',1,3),
-- 0004 Arrabbiata
('a1000004-0000-0000-0000-000000000000','Cuisez les penne. Pendant ce temps, faites revenir l''ail et le piment dans l''huile 1 min.',12,1),
('a1000004-0000-0000-0000-000000000000','Ajoutez les tomates, salez, laissez réduire 10 min à feu moyen.',10,2),
('a1000004-0000-0000-0000-000000000000','Mélangez les pâtes égouttées dans la sauce, servez.',null,3),
-- 0005 Bolognaise
('a1000005-0000-0000-0000-000000000000','Faites revenir oignon + ail. Ajoutez le bœuf à feu vif et faites-le dorer en l''émiettant.',5,1),
('a1000005-0000-0000-0000-000000000000','Versez le vin, laissez s''évaporer 2 min. Ajoutez les tomates, salez.',2,2),
('a1000005-0000-0000-0000-000000000000','Mijotez à feu doux 20 min. Ajoutez le lait, mijotez encore 5 min.',25,3),
('a1000005-0000-0000-0000-000000000000','Cuisez les tagliatelles. Servez avec la sauce et du parmesan.',10,4),
-- 0006 Pesto
('a1000006-0000-0000-0000-000000000000','Mixez basilic, pignons, ail, parmesan et huile. Salez, poivrez.',null,1),
('a1000006-0000-0000-0000-000000000000','Cuisez les pâtes. Réservez 50ml d''eau de cuisson.',10,2),
('a1000006-0000-0000-0000-000000000000','Hors du feu, mélangez pâtes + pesto + eau de cuisson pour lier.',null,3),
-- 0007 Pasta e fagioli
('a1000007-0000-0000-0000-000000000000','Faites revenir ail + romarin dans l''huile. Ajoutez les tomates et les haricots.',3,1),
('a1000007-0000-0000-0000-000000000000','Versez le bouillon, portez à ébullition. Mixez 1/3 des haricots pour épaissir.',5,2),
('a1000007-0000-0000-0000-000000000000','Ajoutez les pâtes, cuisez selon les indications. Ajustez la consistance avec le bouillon.',10,3),
-- 0008 Gorgonzola noix
('a1000008-0000-0000-0000-000000000000','Cuisez les rigatoni. Torréfiez les noix à sec 2 min dans une poêle.',12,1),
('a1000008-0000-0000-0000-000000000000','Faites fondre le gorgonzola dans la crème à feu doux.',3,2),
('a1000008-0000-0000-0000-000000000000','Mélangez les pâtes dans la sauce. Ajoutez les noix, poivrez.',null,3),
-- 0009 Palourdes
('a1000009-0000-0000-0000-000000000000','Cuisez les linguine. Faites revenir l''ail dans l''huile sans le brunir.',12,1),
('a1000009-0000-0000-0000-000000000000','Versez le vin blanc, laissez réduire 2 min. Ajoutez les palourdes égouttées.',3,2),
('a1000009-0000-0000-0000-000000000000','Mélangez les pâtes dans la sauce, ajoutez le persil. Servez.',null,3),
-- 0010 Beurre sauge
('a1000010-0000-0000-0000-000000000000','Cuisez les pâtes.',10,1),
('a1000010-0000-0000-0000-000000000000','Faites fondre le beurre dans une poêle jusqu''au stade noisette. Ajoutez les feuilles de sauge — elles croustillent en 30 secondes.',2,2),
('a1000010-0000-0000-0000-000000000000','Mélangez les pâtes dans le beurre. Servez avec le parmesan.',null,3),
-- 0011 Orzo légumes
('a1000011-0000-0000-0000-000000000000','Préchauffez le four à 200°C. Découpez les légumes en dés, arrosez d''huile, rôtissez 20 min.',20,1),
('a1000011-0000-0000-0000-000000000000','Cuisez l''orzo selon les indications, égouttez.',10,2),
('a1000011-0000-0000-0000-000000000000','Mélangez orzo + légumes rôtis + féta émiettée. Assaisonnez et servez.',null,3),
-- 0012 Amatriciana
('a1000012-0000-0000-0000-000000000000','Cuisez les bucatini. Faites revenir les lardons dans une poêle.',12,1),
('a1000012-0000-0000-0000-000000000000','Ajoutez le piment, puis les tomates. Salez, mijotez 10 min.',10,2),
('a1000012-0000-0000-0000-000000000000','Mélangez les pâtes dans la sauce. Servez avec le pecorino.',null,3),
-- 0013 Curry pois chiches
('a1000013-0000-0000-0000-000000000000','Faites revenir l''oignon émincé 3 min. Ajoutez l''ail et les épices, remuez 1 min.',4,1),
('a1000013-0000-0000-0000-000000000000','Ajoutez tomates + pois chiches égouttés, mijotez 8 min.',8,2),
('a1000013-0000-0000-0000-000000000000','Versez le lait de coco, mijotez encore 3 min. Servez avec du riz.',3,3),
-- 0014 Tarte poireaux
('a1000014-0000-0000-0000-000000000000','Préchauffez le four à 180°C. Foncez le moule, piquez le fond.',null,1),
('a1000014-0000-0000-0000-000000000000','Émincez les poireaux, faites-les fondre dans le beurre 8 min.',8,2),
('a1000014-0000-0000-0000-000000000000','Fouettez œufs + crème + muscade. Étalez les poireaux, versez l''appareil, disposez le chèvre.',null,3),
('a1000014-0000-0000-0000-000000000000','Enfournez 28 min jusqu''à dorure.',28,4),
-- 0015 Shakshuka
('a1000015-0000-0000-0000-000000000000','Faites revenir oignon + poivron 5 min. Ajoutez les épices, remuez 30 sec.',6,1),
('a1000015-0000-0000-0000-000000000000','Ajoutez les tomates, salez, mijotez 10 min à feu moyen.',10,2),
('a1000015-0000-0000-0000-000000000000','Creusez 4 puits, cassez un œuf dans chaque. Couvrez, cuisez 5 min. Servez avec du pain.',5,3),
-- 0016 Omelette provençale
('a1000016-0000-0000-0000-000000000000','Faites revenir poivron + tomate dans l''huile 5 min.',5,1),
('a1000016-0000-0000-0000-000000000000','Battez les œufs avec les herbes, versez sur les légumes.',null,2),
('a1000016-0000-0000-0000-000000000000','Cuisez feu vif 30 sec, puis feu doux 3 min. Pliez et servez.',4,3),
-- 0017 Risotto champignons
('a1000017-0000-0000-0000-000000000000','Faites revenir l''oignon dans le beurre. Ajoutez le riz, nacrez 2 min. Versez le vin, laissez absorber.',4,1),
('a1000017-0000-0000-0000-000000000000','Ajoutez le bouillon chaud louche par louche en remuant régulièrement, sur 18 min.',18,2),
('a1000017-0000-0000-0000-000000000000','Poêlez les champignons séparément. Incorporez-les dans le risotto avec le parmesan.',5,3),
-- 0018 Gratin dauphinois
('a1000018-0000-0000-0000-000000000000','Préchauffez le four à 150°C. Épluchez et tranchez finement les pommes de terre.',null,1),
('a1000018-0000-0000-0000-000000000000','Frottez le plat à gratin avec l''ail. Disposez les tranches en couches, salez entre chaque.',null,2),
('a1000018-0000-0000-0000-000000000000','Versez la crème, ajoutez muscade et poivre. Enfournez 60 min jusqu''à fondant.',60,3),
-- 0019 Buddha bowl
('a1000019-0000-0000-0000-000000000000','Cuisez le quinoa (ratio 1:2 eau), laissez refroidir. Rincez d''abord pour enlever l''amertume.',15,1),
('a1000019-0000-0000-0000-000000000000','Rôtissez les pois chiches à 200°C avec huile + cumin 20 min.',20,2),
('a1000019-0000-0000-0000-000000000000','Préparez la sauce tahini : tahini + jus citron + ail + eau. Assemblez les bols.',null,3),
-- 0020 Frittata
('a1000020-0000-0000-0000-000000000000','Faites revenir les légumes coupés en dés dans une poêle allant au four, 5 min.',5,1),
('a1000020-0000-0000-0000-000000000000','Versez les œufs battus avec parmesan et herbes sur les légumes.',null,2),
('a1000020-0000-0000-0000-000000000000','Cuisez feu moyen 5 min, puis glissez sous le gril du four 3 min pour dorer le dessus.',8,3),
-- 0021 Galettes courgette
('a1000021-0000-0000-0000-000000000000','Râpez les courgettes, pressez-les dans un torchon pour éliminer l''eau.',null,1),
('a1000021-0000-0000-0000-000000000000','Mélangez courgettes + œuf + farine + féta. Salez, formez des galettes.',null,2),
('a1000021-0000-0000-0000-000000000000','Cuisez dans l''huile chaude, 3-4 min par face. Servez avec sauce yaourt-menthe.',7,3),
-- 0022 Tian
('a1000022-0000-0000-0000-000000000000','Préchauffez le four à 180°C. Tranchez tous les légumes en rondelles épaisses.',null,1),
('a1000022-0000-0000-0000-000000000000','Disposez les rondelles debout en alternant dans un plat huilé. Glissez l''ail entre les légumes.',null,2),
('a1000022-0000-0000-0000-000000000000','Arrosez d''huile d''olive, ajoutez le thym. Enfournez 35 min.',35,3),
-- 0023 Quesadillas
('a1000023-0000-0000-0000-000000000000','Faites revenir le poivron émincé 3 min.',3,1),
('a1000023-0000-0000-0000-000000000000','Étalez fromage + haricots + poivron sur une tortilla, recouvrez d''une autre.',null,2),
('a1000023-0000-0000-0000-000000000000','Cuisez dans une poêle sèche, 2-3 min par face. Découpez en quartiers.',5,3),
-- 0024 Lentilles corail
('a1000024-0000-0000-0000-000000000000','Faites revenir l''oignon et les épices 3 min. Ajoutez les lentilles rincées.',3,1),
('a1000024-0000-0000-0000-000000000000','Versez le bouillon, portez à ébullition, mijotez 15 min. Les lentilles fondent naturellement.',15,2),
('a1000024-0000-0000-0000-000000000000','Ajoutez le lait de coco, ajustez l''assaisonnement. Servez avec du pain ou du riz.',null,3),
-- 0025 Velouté butternut
('a1000025-0000-0000-0000-000000000000','Préchauffez le four à 200°C. Coupez la butternut, arrosez d''huile, rôtissez 25 min.',25,1),
('a1000025-0000-0000-0000-000000000000','Faites revenir oignon + gingembre. Ajoutez la butternut rôtie + bouillon.',3,2),
('a1000025-0000-0000-0000-000000000000','Mixez finement, ajoutez la crème, ajustez l''assaisonnement.',null,3),
-- 0026 Niçoise
('a1000026-0000-0000-0000-000000000000','Cuisez les œufs 9 min dans l''eau bouillante, écalez-les.',9,1),
('a1000026-0000-0000-0000-000000000000','Disposez sur un plat : thon, œufs coupés, tomates, olives, anchois.',null,2),
('a1000026-0000-0000-0000-000000000000','Préparez la vinaigrette : huile + vinaigre + moutarde. Assaisonnez au moment de servir.',null,3),
-- 0027 Poêlée asiatique
('a1000027-0000-0000-0000-000000000000','Préparez et coupez tous les légumes avant de commencer.',null,1),
('a1000027-0000-0000-0000-000000000000','Chauffez le wok à feu très vif. Ajoutez les légumes dans l''ordre de cuisson — carotte en premier, feuilles en dernier.',7,2),
('a1000027-0000-0000-0000-000000000000','Versez la sauce soja + gingembre + huile de sésame. Parsemez de sésame. Servez avec du riz.',null,3),
-- 0028 Poulet rôti
('a1000028-0000-0000-0000-000000000000','Préchauffez le four à 200°C. Massez les cuisses avec huile, sel, poivre, herbes et ail.',null,1),
('a1000028-0000-0000-0000-000000000000','Disposez dans un plat, ajoutez le citron coupé. Enfournez 40 min en arrosant à mi-cuisson.',40,2),
('a1000028-0000-0000-0000-000000000000','La peau doit être bien dorée. Laissez reposer 5 min avant de servir.',null,3),
-- 0029 Steak moutarde
('a1000029-0000-0000-0000-000000000000','Saisissez les steaks dans le beurre très chaud, 2-3 min par face selon cuisson souhaitée. Réservez et laissez reposer.',5,1),
('a1000029-0000-0000-0000-000000000000','Faites revenir l''échalote dans la même poêle. Ajoutez la moutarde + crème, remuez 2 min.',3,2),
('a1000029-0000-0000-0000-000000000000','Nappez les steaks de sauce et servez.',null,3),
-- 0030 Boulettes
('a1000030-0000-0000-0000-000000000000','Mélangez viande + mie de pain essorée + œuf + sel + poivre. Formez des boulettes.',null,1),
('a1000030-0000-0000-0000-000000000000','Faites-les dorer dans l''huile chaude sur toutes les faces, 5 min.',5,2),
('a1000030-0000-0000-0000-000000000000','Versez les tomates + oignon haché, couvrez et mijotez 15 min.',15,3),
-- 0031 Poulet citron ail
('a1000031-0000-0000-0000-000000000000','Marinez le poulet avec citron + ail + huile + sel au moins 10 min.',10,1),
('a1000031-0000-0000-0000-000000000000','Saisissez dans une poêle chaude 5 min par face. Le jus de marinade doit caraméliser.',10,2),
('a1000031-0000-0000-0000-000000000000','Parsemez de persil, servez avec du riz ou une salade.',null,3),
-- 0032 Escalope milanaise
('a1000032-0000-0000-0000-000000000000','Aplatissez l''escalope. Passez-la successivement dans la farine, l''œuf battu, la chapelure.',null,1),
('a1000032-0000-0000-0000-000000000000','Faites frire dans l''huile chaude, 3-4 min par face, jusqu''à dorure.',7,2),
('a1000032-0000-0000-0000-000000000000','Déposez sur du papier absorbant. Servez avec citron et salade.',null,3),
-- 0033 Dinde champignons
('a1000033-0000-0000-0000-000000000000','Faites sauter l''émincé de dinde à feu vif 4 min. Réservez.',4,1),
('a1000033-0000-0000-0000-000000000000','Faites revenir l''échalote + champignons dans la même poêle jusqu''à évaporation de l''eau.',6,2),
('a1000033-0000-0000-0000-000000000000','Remettez la dinde, ajoutez la crème, laissez lier 3 min. Parsemez de persil.',3,3),
-- 0034 Hachis parmentier
('a1000034-0000-0000-0000-000000000000','Faites revenir oignon + ail + bœuf. Ajoutez les tomates, assaisonnez, mijotez 10 min.',15,1),
('a1000034-0000-0000-0000-000000000000','Cuisez les pommes de terre, faites une purée avec beurre + lait + sel.',20,2),
('a1000034-0000-0000-0000-000000000000','Versez la viande dans un plat, couvrez de purée. Passez sous le gril 10 min.',10,3),
-- 0035 Tikka masala
('a1000035-0000-0000-0000-000000000000','Faites revenir oignon + ail + gingembre + épices 3 min. Ajoutez le poulet en morceaux, saisissez 5 min.',8,1),
('a1000035-0000-0000-0000-000000000000','Ajoutez les tomates, couvrez et mijotez 15 min.',15,2),
('a1000035-0000-0000-0000-000000000000','Versez la crème de coco, mijotez encore 5 min. Servez avec du riz et de la coriandre.',5,3),
-- 0036 Porc miel moutarde
('a1000036-0000-0000-0000-000000000000','Saisissez les côtelettes dans le beurre, 3 min par face. Réservez.',6,1),
('a1000036-0000-0000-0000-000000000000','Ajoutez le miel dans la poêle, caramélisez 30 sec. Ajoutez la moutarde + 3 cuillères d''eau.',2,2),
('a1000036-0000-0000-0000-000000000000','Remettez le porc, enrobez de sauce, réchauffez 1 min. Servez.',1,3),
-- 0037 Stroganoff
('a1000037-0000-0000-0000-000000000000','Saisissez le bœuf à feu vif par petites quantités. Réservez.',6,1),
('a1000037-0000-0000-0000-000000000000','Faites revenir oignon + champignons. Ajoutez la moutarde + crème.',8,2),
('a1000037-0000-0000-0000-000000000000','Remettez le bœuf, chauffez 2 min. Servez avec du riz ou des pâtes.',2,3),
-- 0038 Basquaise
('a1000038-0000-0000-0000-000000000000','Faites dorer les morceaux de poulet sur toutes les faces. Réservez.',8,1),
('a1000038-0000-0000-0000-000000000000','Faites revenir oignon + poivrons 5 min. Ajoutez tomates + piment d''Espelette.',5,2),
('a1000038-0000-0000-0000-000000000000','Remettez le poulet, couvrez et mijotez 25 min à feu doux.',25,3),
-- 0039 Brochettes agneau
('a1000039-0000-0000-0000-000000000000','Coupez l''agneau en cubes, marinez avec citron + ail + origan + huile, 20 min minimum.',20,1),
('a1000039-0000-0000-0000-000000000000','Enfilez sur des brochettes, saisissez dans une poêle très chaude, 3-4 min par face.',8,2),
('a1000039-0000-0000-0000-000000000000','Laissez reposer 2 min. Servez avec du riz pilaf ou du pain pita.',null,3),
-- 0040 Saumon papillote
('a1000040-0000-0000-0000-000000000000','Préchauffez le four à 200°C. Disposez chaque pavé sur une feuille d''alu.',8,1),
('a1000040-0000-0000-0000-000000000000','Salez, poivrez, ajoutez rondelles de citron, aneth et beurre. Fermez hermétiquement.',null,2),
('a1000040-0000-0000-0000-000000000000','Enfournez 12 min. Ouvrez avec précaution — vapeur brûlante.',12,3),
-- 0041 Cabillaud
('a1000041-0000-0000-0000-000000000000','Préchauffez le four à 180°C. Disposez les tomates cerises et l''ail dans un plat, arrosez d''huile.',null,1),
('a1000041-0000-0000-0000-000000000000','Posez les filets par-dessus, ajoutez thym et olives.',null,2),
('a1000041-0000-0000-0000-000000000000','Enfournez 18 min. Le cabillaud s''effeuillle facilement quand il est cuit.',18,3),
-- 0042 Crevettes ail
('a1000042-0000-0000-0000-000000000000','Chauffez le beurre dans une poêle, faites revenir l''ail haché 1 min sans brunir.',1,1),
('a1000042-0000-0000-0000-000000000000','Ajoutez les crevettes, saisissez 2 min de chaque côté jusqu''à coloration.',4,2),
('a1000042-0000-0000-0000-000000000000','Pressez le citron, ajoutez le persil. Servez immédiatement avec du pain.',null,3),
-- 0043 Sole meunière
('a1000043-0000-0000-0000-000000000000','Farinez légèrement les soles juste avant cuisson. Saisissez dans le beurre chaud, 3 min par face.',6,1),
('a1000043-0000-0000-0000-000000000000','Dans une petite casserole, faites un beurre noisette séparé.',2,2),
('a1000043-0000-0000-0000-000000000000','Posez les soles sur les assiettes, versez le beurre noisette + citron + persil.',null,3),
-- 0044 Thon câpres
('a1000044-0000-0000-0000-000000000000','Chauffez l''huile, ajoutez les tomates coupées, faites revenir 5 min.',5,1),
('a1000044-0000-0000-0000-000000000000','Ajoutez les câpres et le thon égoutté, remuez délicatement 2 min.',2,2),
('a1000044-0000-0000-0000-000000000000','Ajoutez le basilic déchiré. Servez chaud sur des pâtes ou froid en salade.',null,3),
-- 0045 Maquereau cidre
('a1000045-0000-0000-0000-000000000000','Faites revenir l''oignon émincé 5 min. Déposez les filets de maquereau par-dessus.',5,1),
('a1000045-0000-0000-0000-000000000000','Versez le cidre, ajoutez thym et laurier. Couvrez et mijotez 15 min à feu doux.',15,2),
('a1000045-0000-0000-0000-000000000000','Servez avec de la pomme de terre vapeur ou du pain de campagne.',null,3),
-- 0046 Bar beurre citron
('a1000046-0000-0000-0000-000000000000','Séchez les filets. Saisissez côté peau dans l''huile très chaude 4 min en appuyant.',4,1),
('a1000046-0000-0000-0000-000000000000','Retournez, éteignez le feu, laissez finir 1 min avec la chaleur résiduelle.',1,2),
('a1000046-0000-0000-0000-000000000000','Faites mousser le beurre avec le jus de citron. Nappez les filets, parsemez de ciboulette.',2,3),
-- 0047 Sardines
('a1000047-0000-0000-0000-000000000000','Nettoyez les sardines. Marinez 15 min avec huile, citron, ail haché et persil.',15,1),
('a1000047-0000-0000-0000-000000000000','Chauffez une poêle à feu vif. Saisissez les sardines 3 min par face.',6,2),
('a1000047-0000-0000-0000-000000000000','Servez avec du citron et du pain grillé.',null,3),
-- 0048 Saint-Jacques
('a1000048-0000-0000-0000-000000000000','Réchauffez la purée de panais, assaisonnez.',5,1),
('a1000048-0000-0000-0000-000000000000','Séchez les Saint-Jacques. Poêle très chaude, 1 min par face dans le beurre — elles doivent être dorées dehors, nacrées dedans.',2,2),
('a1000048-0000-0000-0000-000000000000','Dressez la purée, posez les Saint-Jacques. Pressez le citron, servez immédiatement.',null,3),
-- 0049 Risotto citron
('a1000049-0000-0000-0000-000000000000','Faites revenir oignon dans le beurre. Ajoutez le riz, nacrez 2 min, versez le vin.',4,1),
('a1000049-0000-0000-0000-000000000000','Ajoutez le bouillon chaud louche par louche sur 18 min en remuant souvent.',18,2),
('a1000049-0000-0000-0000-000000000000','Hors du feu, ajoutez parmesan + zeste + jus de citron + beurre froid. Remuez vivement.',null,3),
-- 0050 Riz cantonais
('a1000050-0000-0000-0000-000000000000','Chauffez un wok huilé très fort. Faites scramble les œufs en remuant, réservez.',3,1),
('a1000050-0000-0000-0000-000000000000','Ajoutez le riz froid, faites sauter 3 min. Ajoutez petits pois + jambon.',5,2),
('a1000050-0000-0000-0000-000000000000','Remettez les œufs, versez la sauce soja, remuez 1 min. Servez.',1,3),
-- 0051 Quinoa feta
('a1000051-0000-0000-0000-000000000000','Rincez et cuisez le quinoa 12 min. Égouttez, laissez refroidir.',12,1),
('a1000051-0000-0000-0000-000000000000','Rôtissez les légumes découpés à 200°C, 20 min, avec huile et sel.',20,2),
('a1000051-0000-0000-0000-000000000000','Mélangez quinoa + légumes + féta + menthe + citron + huile. Assaisonnez.',null,3),
-- 0052 Pilaf amandes
('a1000052-0000-0000-0000-000000000000','Faites revenir le riz dans le beurre avec la cannelle 2 min.',2,1),
('a1000052-0000-0000-0000-000000000000','Ajoutez le bouillon, portez à ébullition, couvrez et cuisez à feu doux 12 min.',12,2),
('a1000052-0000-0000-0000-000000000000','Torréfiez les amandes à sec. Ajoutez amandes + raisins dans le riz. Servez.',3,3),
-- 0053 Tabboulé
('a1000053-0000-0000-0000-000000000000','Versez de l''eau bouillante sur le boulgour, couvrez 10 min, égouttez et refroidissez.',10,1),
('a1000053-0000-0000-0000-000000000000','Hachez finement le persil et la menthe. Coupez les tomates en petits dés.',null,2),
('a1000053-0000-0000-0000-000000000000','Mélangez tout avec huile d''olive + jus de citron. Réfrigérez 30 min si possible.',null,3),
-- 0054 Bulgur menthe
('a1000054-0000-0000-0000-000000000000','Versez de l''eau bouillante sur le bulgur, couvrez 10 min, égouttez.',10,1),
('a1000054-0000-0000-0000-000000000000','Coupez tomates cerises, concombre. Mélangez avec le bulgur refroidi.',null,2),
('a1000054-0000-0000-0000-000000000000','Ajoutez féta + menthe + persil + citron + huile. Assaisonnez et servez.',null,3),
-- 0055 Velouté courge
('a1000055-0000-0000-0000-000000000000','Préchauffez le four à 200°C. Rôtissez la butternut coupée en morceaux avec huile, 25 min.',25,1),
('a1000055-0000-0000-0000-000000000000','Faites revenir oignon + ail + gingembre + curry. Ajoutez butternut rôtie + bouillon.',3,2),
('a1000055-0000-0000-0000-000000000000','Mixez finement, ajoutez lait de coco, assaisonnez. Servez avec graines de courge.',null,3),
-- 0056 Miso tofu
('a1000056-0000-0000-0000-000000000000','Chauffez le bouillon sans le faire bouillir. Ajoutez les algues wakamé, laissez réhydrater 2 min.',3,1),
('a1000056-0000-0000-0000-000000000000','Délayez le miso dans une louche de bouillon chaud, incorporez hors du feu.',null,2),
('a1000056-0000-0000-0000-000000000000','Ajoutez le tofu coupé en dés et la ciboule ciselée. Servez immédiatement.',null,3),
-- 0057 Minestrone
('a1000057-0000-0000-0000-000000000000','Faites revenir les légumes coupés en dés dans l''huile 5 min.',5,1),
('a1000057-0000-0000-0000-000000000000','Ajoutez tomates + haricots + bouillon. Portez à ébullition, mijotez 15 min.',15,2),
('a1000057-0000-0000-0000-000000000000','Ajoutez les petites pâtes, cuisez encore 8 min. Servez avec parmesan et huile d''olive.',8,3),
-- 0058 Velouté brocolis
('a1000058-0000-0000-0000-000000000000','Faites revenir l''oignon. Ajoutez les bouquets de brocolis + pomme de terre + bouillon.',3,1),
('a1000058-0000-0000-0000-000000000000','Cuisez 12 min à feu moyen. Les brocolis doivent être tendres mais encore verts.',12,2),
('a1000058-0000-0000-0000-000000000000','Mixez, ajoutez la crème, assaisonnez. Servez avec les amandes grillées.',null,3),
-- 0059 Soupe thaï
('a1000059-0000-0000-0000-000000000000','Faites chauffer le bouillon avec la citronnelle écrasée et le gingembre 5 min.',5,1),
('a1000059-0000-0000-0000-000000000000','Ajoutez le lait de coco, la sauce poisson, portez à frémissement.',3,2),
('a1000059-0000-0000-0000-000000000000','Ajoutez les crevettes, cuisez 2 min. Retirez la citronnelle, servez avec citron vert et coriandre.',2,3),
-- 0060 Soupe tomates rôties
('a1000060-0000-0000-0000-000000000000','Préchauffez le four à 180°C. Coupez les tomates en deux, disposez dans un plat avec l''ail et l''huile.',null,1),
('a1000060-0000-0000-0000-000000000000','Rôtissez 35 min jusqu''à caramélisation. Les tomates doivent être confites.',35,2),
('a1000060-0000-0000-0000-000000000000','Mixez avec le bouillon et le basilic. Assaisonnez et servez avec du pain grillé.',null,3);
