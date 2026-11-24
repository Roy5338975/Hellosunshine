# Supabase Backend Setup — Hello Sunshine Cafe

Live Supabase backend configured and connected for **Hello Sunshine**, Anjuna, Goa.

---

## ⚡ Active Project Details

- **Project Name:** `hello-sunshine-cafe`
- **Project ID:** `mbnaoqxowwdrbdwevleo`
- **Organization:** `Roy5338975's Org` (`iifuhjkoxvrpftmxsalo`)
- **Region:** `ap-south-1` (Mumbai, India)
- **Status:** `ACTIVE_HEALTHY`
- **API URL:** `https://mbnaoqxowwdrbdwevleo.supabase.co`

---

## 🗄️ Database Tables Overview

| Table | Purpose | Fields Captured |
|---|---|---|
| `public.reservations` | Table reservation requests | `id`, `created_at`, `name`, `phone`, `reservation_date`, `reservation_time`, `guests`, `seating_preference`, `notes`, `status` |
| `public.order_inquiries` | Custom order inquiries compiled via the Order Tray | `id`, `created_at`, `customer_name`, `customer_phone`, `items` (JSONB), `estimated_total`, `special_instructions`, `status` |
| `public.contact_inquiries` | Direct questions, event inquiries, and feedback | `id`, `created_at`, `name`, `phone`, `email`, `subject`, `message`, `status` |

---

## 🔒 Row Level Security (RLS) & Access Control

- **Public Anonymous Users (`anon`, `authenticated`):** Granted `INSERT` permission so guests visiting the website can safely submit reservations, custom orders, and inquiries.
- **Admin / Staff (`service_role`):** Granted full access (`SELECT`, `UPDATE`, `DELETE`) to review incoming bookings, confirm reservations, and process orders.
- **Privacy & Security Protection:** Public visitors cannot read or query other customers' private booking details or phone numbers.

---

## 📁 Files & Frontend Integration

- [`js/supabaseConfig.js`](../js/supabaseConfig.js): Contains the live project URL and publishable API keys.
- [`js/supabaseClient.js`](../js/supabaseClient.js): Provides the client service layer (`saveReservation`, `saveOrderInquiry`, `saveContactInquiry`) with fallback offline caching.
- [`supabase/schema.sql`](./schema.sql): Complete PostgreSQL schema and RLS policies deployed to the project.
