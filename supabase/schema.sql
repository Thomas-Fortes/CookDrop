-- CookDrop — Schema v1.0
-- Exécuter dans l'éditeur SQL de votre projet Supabase

-- ===== TABLES =====

create table if not exists recipes (
  id            uuid primary key default gen_random_uuid(),
  slug          text not null unique,
  name          text not null,
  short_desc    text not null,
  long_desc     text not null default '',
  category      text not null check (category in ('Pâtes','Viande','Poisson','Végétarien','Soupe','Riz','Autre')),
  total_time    integer not null,
  prep_time     integer not null default 0,
  cook_time     integer not null default 0,
  difficulty    text not null check (difficulty in ('Facile','Moyen','Élaboré')),
  servings      integer not null default 2,
  tags          text[] not null default '{}',
  illustration_url text not null default '',
  has_steam     boolean not null default false,
  created_at    timestamptz not null default now()
);

create table if not exists ingredients (
  id            uuid primary key default gen_random_uuid(),
  recipe_id     uuid not null references recipes(id) on delete cascade,
  name          text not null,
  quantity      text not null default '',
  unit          text not null default '',
  group_name    text not null default '',
  display_order integer not null default 0
);

create table if not exists steps (
  id            uuid primary key default gen_random_uuid(),
  recipe_id     uuid not null references recipes(id) on delete cascade,
  instruction   text not null,
  duration_min  integer,
  step_order    integer not null default 0
);

create table if not exists daily_drops (
  id            uuid primary key default gen_random_uuid(),
  date          date not null unique,
  recipe_1_id   uuid not null references recipes(id),
  recipe_2_id   uuid not null references recipes(id),
  created_at    timestamptz not null default now(),
  constraint different_recipes check (recipe_1_id <> recipe_2_id)
);

create table if not exists user_cooked (
  id            uuid primary key default gen_random_uuid(),
  user_id       uuid not null references auth.users(id) on delete cascade,
  recipe_id     uuid not null references recipes(id) on delete cascade,
  cooked_at     timestamptz not null default now(),
  unique(user_id, recipe_id)
);

create table if not exists user_favorites (
  id            uuid primary key default gen_random_uuid(),
  user_id       uuid not null references auth.users(id) on delete cascade,
  recipe_id     uuid not null references recipes(id) on delete cascade,
  saved_at      timestamptz not null default now(),
  unique(user_id, recipe_id)
);

-- ===== INDEXES =====

create index if not exists idx_ingredients_recipe on ingredients(recipe_id);
create index if not exists idx_steps_recipe on steps(recipe_id);
create index if not exists idx_daily_drops_date on daily_drops(date desc);
create index if not exists idx_user_cooked_user on user_cooked(user_id);
create index if not exists idx_user_favorites_user on user_favorites(user_id);

-- ===== RLS =====

alter table recipes enable row level security;
alter table ingredients enable row level security;
alter table steps enable row level security;
alter table daily_drops enable row level security;
alter table user_cooked enable row level security;
alter table user_favorites enable row level security;

-- Recettes publiques en lecture
create policy "recipes_public_read" on recipes for select using (true);
create policy "ingredients_public_read" on ingredients for select using (true);
create policy "steps_public_read" on steps for select using (true);
create policy "drops_public_read" on daily_drops for select using (true);

-- Recettes : écriture admin seulement (via service_role key dans le back-office)

-- user_cooked : l'utilisateur gère ses propres données
create policy "user_cooked_select" on user_cooked for select using (auth.uid() = user_id);
create policy "user_cooked_insert" on user_cooked for insert with check (auth.uid() = user_id);
create policy "user_cooked_delete" on user_cooked for delete using (auth.uid() = user_id);

-- user_favorites : l'utilisateur gère ses propres données
create policy "user_favorites_select" on user_favorites for select using (auth.uid() = user_id);
create policy "user_favorites_insert" on user_favorites for insert with check (auth.uid() = user_id);
create policy "user_favorites_delete" on user_favorites for delete using (auth.uid() = user_id);
