-- ============================================================
-- KESUMA JMB v2.2 — SCHEMA UPDATE
-- Jalankan dalam Supabase SQL Editor
-- ============================================================

-- 1. Tambah email + password_hash ke v2_owners
alter table v2_owners add column if not exists email     text default null;
alter table v2_owners add column if not exists password  text default null;
-- Tenant slots pun perlu password & email
alter table v2_owners add column if not exists tenant1_email    text default null;
alter table v2_owners add column if not exists tenant1_password text default null;
alter table v2_owners add column if not exists tenant2_email    text default null;
alter table v2_owners add column if not exists tenant2_password text default null;
alter table v2_owners add column if not exists tenant3_email    text default null;
alter table v2_owners add column if not exists tenant3_password text default null;

-- 2. Security users table
create table if not exists v2_security (
  id         bigint generated always as identity primary key,
  username   text unique not null,
  password   text not null,
  name       text default null,
  created_at timestamptz default now()
);

alter table v2_security enable row level security;
create policy "public access v2_security" on v2_security for all using (true) with check (true);

-- Seed default security account
insert into v2_security (username, password, name) values
  ('guard1', 'kesuma1125', 'Guard Utama')
on conflict (username) do nothing;

-- 3. Admin users table
create table if not exists v2_admin (
  id         bigint generated always as identity primary key,
  username   text unique not null,
  password   text not null,
  name       text default null,
  created_at timestamptz default now()
);

alter table v2_admin enable row level security;
create policy "public access v2_admin" on v2_admin for all using (true) with check (true);

-- Seed default admin account
insert into v2_admin (username, password, name) values
  ('admin', 'kesuma1125', 'Admin JMB')
on conflict (username) do nothing;

-- VERIFY:
-- select username, name from v2_security;
-- select username, name from v2_admin;
-- select unit, phone, email from v2_owners limit 5;
