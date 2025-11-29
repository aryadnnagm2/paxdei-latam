
-- Clanes
create table clans (
  id uuid primary key default gen_random_uuid(),
  name text not null unique,
  tag text,
  description text,
  region text,
  leader uuid references auth.users(id),
  created_at timestamp default now()
);

-- Perfiles públicos
create table profiles (
  id uuid primary key references auth.users(id) on delete cascade,
  username text unique,
  display_name text,
  avatar_url text,
  bio text,
  created_at timestamp default now()
);

-- Membresías (relación usuarios <-> clanes)
create table memberships (
  id bigint generated always as identity primary key,
  clan_id uuid references clans(id) on delete cascade,
  user_id uuid references profiles(id) on delete cascade,
  role text default 'member',
  joined_at timestamp default now()
);

-- Órdenes de compra/venta entre clanes
create table orders (
  id bigint generated always as identity primary key,
  clan_id uuid references clans(id) on delete cascade,
  user_id uuid references profiles(id) on delete cascade,
  type text check (type in ('buy','sell')),
  item text not null,
  quantity int not null,
  price numeric not null,
  notes text,
  created_at timestamp default now(),
  status text default 'open'
);

-- Anuncios / posts (eventos, noticias)
create table posts (
  id bigint generated always as identity primary key,
  clan_id uuid references clans(id) on delete cascade,
  user_id uuid references profiles(id) on delete cascade,
  title text,
  body text,
  created_at timestamp default now()
);
