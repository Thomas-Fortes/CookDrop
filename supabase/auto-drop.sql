-- CookDrop — Fonction auto-drop
-- À exécuter dans le SQL Editor Supabase AVANT le seed des 60 recettes
--
-- Cette fonction crée automatiquement le drop du jour s'il n'existe pas.
-- SECURITY DEFINER = s'exécute avec les droits postgres, bypass le RLS.

create or replace function get_or_create_daily_drop(p_date date default current_date)
returns table (
  id           uuid,
  date         date,
  recipe_1_id  uuid,
  recipe_2_id  uuid,
  created_at   timestamptz
)
language plpgsql
security definer
set search_path = public
as $$
declare
  v_drop  daily_drops%rowtype;
  v_r1    uuid;
  v_r2    uuid;
begin
  -- 1. Si le drop existe déjà → le retourner directement
  select * into v_drop from daily_drops d where d.date = p_date;
  if found then
    return query select v_drop.id, v_drop.date, v_drop.recipe_1_id, v_drop.recipe_2_id, v_drop.created_at;
    return;
  end if;

  -- 2. Recette non-végétarienne pas répétée dans les 30 derniers jours
  select r.id into v_r1
  from recipes r
  where r.category != 'Végétarien'
    and r.id not in (
      select dd.recipe_1_id from daily_drops dd where dd.date > p_date - 31
      union
      select dd.recipe_2_id from daily_drops dd where dd.date > p_date - 31
    )
  order by random()
  limit 1;

  -- Fallback : toutes déjà utilisées récemment → n'importe laquelle
  if v_r1 is null then
    select r.id into v_r1 from recipes r where r.category != 'Végétarien' order by random() limit 1;
  end if;

  -- 3. Recette végétarienne pas répétée dans les 30 derniers jours
  select r.id into v_r2
  from recipes r
  where r.category = 'Végétarien'
    and r.id != coalesce(v_r1, '00000000-0000-0000-0000-000000000000'::uuid)
    and r.id not in (
      select dd.recipe_1_id from daily_drops dd where dd.date > p_date - 31
      union
      select dd.recipe_2_id from daily_drops dd where dd.date > p_date - 31
    )
  order by random()
  limit 1;

  -- Fallback végétarien
  if v_r2 is null then
    select r.id into v_r2 from recipes r
    where r.category = 'Végétarien'
      and r.id != coalesce(v_r1, '00000000-0000-0000-0000-000000000000'::uuid)
    order by random() limit 1;
  end if;

  -- 4. Insérer le drop
  insert into daily_drops (date, recipe_1_id, recipe_2_id)
  values (p_date, v_r1, v_r2)
  on conflict (date) do nothing
  returning * into v_drop;

  -- Si conflit de concurrence, relire
  if v_drop.id is null then
    select * into v_drop from daily_drops d where d.date = p_date;
  end if;

  return query select v_drop.id, v_drop.date, v_drop.recipe_1_id, v_drop.recipe_2_id, v_drop.created_at;
end;
$$;

-- Permettre à l'anon key d'appeler cette fonction
grant execute on function get_or_create_daily_drop(date) to anon, authenticated;
