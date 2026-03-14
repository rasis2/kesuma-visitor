-- ============================================================
-- KESUMA JMB v2 — VISITOR SYSTEM
-- Jalankan dalam Supabase SQL Editor (project SAMA)
-- Tables baru dengan prefix v2_ — tak kacau data lama
-- ============================================================

-- 1. OWNERS TABLE (v2)
create table v2_owners (
  unit        text primary key,
  phone       text not null unique,
  tenant1     text default null,
  tenant2     text default null,
  tenant3     text default null,
  created_at  timestamptz default now()
);

-- 2. VISITORS TABLE (v2)
create table v2_visitors (
  id              bigint generated always as identity primary key,
  ref_code        text unique not null,
  name            text not null,
  ic_no           text not null,
  phone           text not null,
  vehicle_type    text default null,
  vehicle_plate   text not null,
  unit            text references v2_owners(unit),
  purpose         text not null,
  registered_by   text not null default 'visitor', -- 'owner' | 'tenant' | 'guard' | 'visitor'
  registered_phone text default null,
  status          text not null default 'Pending',  -- Pending | Approved | Rejected | Checked In | Checked Out
  approved_by     text default null,
  expires_at      timestamptz default null,          -- QR sah 24 jam dari masa diluluskan
  created_at      timestamptz default now(),
  checked_in_at   timestamptz default null,
  checked_out_at  timestamptz default null
);

-- 3. ROW LEVEL SECURITY
alter table v2_owners   enable row level security;
alter table v2_visitors enable row level security;

create policy "public access v2_owners"   on v2_owners   for all using (true) with check (true);
create policy "public access v2_visitors" on v2_visitors for all using (true) with check (true);

-- 4. SEED 475 UNITS (floor 4–22, unit 1–25, unit 24 → 23A)
insert into v2_owners (unit, phone)
select
  f::text || '-' || case u when 24 then '23A' else u::text end,
  '0100' || lpad(((f-4)*25 + u)::text, 6, '0')
from generate_series(4,22) f, generate_series(1,25) u;

-- 5. INDEXES
create index on v2_visitors(unit);
create index on v2_visitors(ref_code);
create index on v2_visitors(status);
create index on v2_visitors(created_at desc);

-- VERIFY:
-- select count(*) from v2_owners;   -- should be 475
-- select count(*) from v2_visitors; -- should be 0
