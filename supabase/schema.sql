-- ==============================================================================
-- Hello Sunshine Cafe (Anjuna, Goa) - Complete Supabase Backend Schema
-- ==============================================================================

-- Enable UUID extension if not already present
create extension if not exists "uuid-ossp";

-- ------------------------------------------------------------------------------
-- 1. RESERVATIONS TABLE
-- Stores table reservation requests submitted from the website
-- ------------------------------------------------------------------------------
create table if not exists public.reservations (
    id uuid default gen_random_uuid() primary key,
    created_at timestamp with time zone default timezone('utc'::text, now()) not null,
    name text not null,
    phone text not null,
    reservation_date date not null,
    reservation_time text not null,
    guests text not null,
    seating_preference text default 'Any Available',
    notes text,
    status text default 'pending' check (status in ('pending', 'confirmed', 'cancelled', 'completed'))
);

comment on table public.reservations is 'Table reservation inquiries and booking requests for Hello Sunshine Cafe';

-- Indexes for efficient queries
create index if not exists idx_reservations_date on public.reservations (reservation_date);
create index if not exists idx_reservations_status on public.reservations (status);
create index if not exists idx_reservations_created_at on public.reservations (created_at desc);

-- ------------------------------------------------------------------------------
-- 2. ORDER INQUIRIES TABLE
-- Stores dishes added to the tray / custom menu orders compiled by guests
-- ------------------------------------------------------------------------------
create table if not exists public.order_inquiries (
    id uuid default gen_random_uuid() primary key,
    created_at timestamp with time zone default timezone('utc'::text, now()) not null,
    customer_name text not null,
    customer_phone text not null,
    items jsonb not null default '[]'::jsonb,
    estimated_total numeric(10, 2) not null default 0.00,
    special_instructions text,
    status text default 'pending' check (status in ('pending', 'processing', 'completed', 'cancelled'))
);

comment on table public.order_inquiries is 'Custom order tray inquiries compiled by guests on the website';

-- Indexes
create index if not exists idx_order_inquiries_created_at on public.order_inquiries (created_at desc);
create index if not exists idx_order_inquiries_status on public.order_inquiries (status);

-- ------------------------------------------------------------------------------
-- 3. CONTACT & GENERAL INQUIRIES TABLE
-- Stores feedback, event bookings, catering questions, and general inquiries
-- ------------------------------------------------------------------------------
create table if not exists public.contact_inquiries (
    id uuid default gen_random_uuid() primary key,
    created_at timestamp with time zone default timezone('utc'::text, now()) not null,
    name text not null,
    phone text,
    email text,
    subject text,
    message text not null,
    status text default 'new' check (status in ('new', 'in_progress', 'resolved', 'archived'))
);

comment on table public.contact_inquiries is 'General contact inquiries, private event queries, and feedback';

-- Indexes
create index if not exists idx_contact_inquiries_created_at on public.contact_inquiries (created_at desc);
create index if not exists idx_contact_inquiries_status on public.contact_inquiries (status);

-- ------------------------------------------------------------------------------
-- 4. ROW LEVEL SECURITY (RLS) POLICIES
-- Enforce best practices: Public visitors can INSERT, but only Admin/Staff can SELECT
-- ------------------------------------------------------------------------------

-- Enable RLS
alter table public.reservations enable row level security;
alter table public.order_inquiries enable row level security;
alter table public.contact_inquiries enable row level security;

-- Public can submit reservations
drop policy if exists "Allow anonymous inserts to reservations" on public.reservations;
create policy "Allow anonymous inserts to reservations"
    on public.reservations
    for insert
    to anon, authenticated
    with check (true);

-- Public can submit order inquiries
drop policy if exists "Allow anonymous inserts to order_inquiries" on public.order_inquiries;
create policy "Allow anonymous inserts to order_inquiries"
    on public.order_inquiries
    for insert
    to anon, authenticated
    with check (true);

-- Public can submit contact messages
drop policy if exists "Allow anonymous inserts to contact_inquiries" on public.contact_inquiries;
create policy "Allow anonymous inserts to contact_inquiries"
    on public.contact_inquiries
    for insert
    to anon, authenticated
    with check (true);

-- Service role / Authenticated admin full access policies
drop policy if exists "Allow service_role full access to reservations" on public.reservations;
create policy "Allow service_role full access to reservations"
    on public.reservations
    for all
    to service_role
    using (true)
    with check (true);

drop policy if exists "Allow service_role full access to order_inquiries" on public.order_inquiries;
create policy "Allow service_role full access to order_inquiries"
    on public.order_inquiries
    for all
    to service_role
    using (true)
    with check (true);

drop policy if exists "Allow service_role full access to contact_inquiries" on public.contact_inquiries;
create policy "Allow service_role full access to contact_inquiries"
    on public.contact_inquiries
    for all
    to service_role
    using (true)
    with check (true);

-- ------------------------------------------------------------------------------
-- 5. DATA API (PostgREST) ROLE PERMISSIONS
-- Grant required table permissions so anonymous and authenticated clients
-- can execute inserts through Supabase REST API
-- ------------------------------------------------------------------------------
grant usage on schema public to anon, authenticated;
grant all on table public.reservations to anon, authenticated, service_role;
grant all on table public.order_inquiries to anon, authenticated, service_role;
grant all on table public.contact_inquiries to anon, authenticated, service_role;
