
# Pax Dei Latam - Minimalist Portal (Scaffold)

Este es un scaffold minimalista para desplegar un portal para clanes latinos de Pax Dei.
Incluye el esquema SQL para Supabase, ejemplo de .env y una estructura básica Next.js.

## Contenido
- supabase_schema.sql  -> SQL para crear tablas básicas
- .env.example         -> variables de entorno a configurar en Vercel
- package.json         -> dependencias mínimas y scripts
- nextjs/              -> carpeta con scaffold Next.js (páginas + componentes)
  - pages/_app.js
  - pages/index.js
  - pages/login.js
  - pages/dashboard.js
  - pages/clan/[id].js
  - lib/supabaseClient.js
  - components/Header.js
  - components/ClanCard.js
  - styles/globals.css

## Pasos rápidos para desplegar
1. Crear proyecto en Supabase (https://supabase.com). Guardar `Project URL` y `anon key`.
2. En Supabase -> SQL Editor -> New Query -> pegar `supabase_schema.sql` y Run.
3. Crear cuenta en Vercel y GitHub.
4. Subir este repo a GitHub o subir los archivos directamente en Vercel (Import Project).
5. En Vercel -> Project -> Settings -> Environment Variables:
   - NEXT_PUBLIC_SUPABASE_URL = (tu supabase url)
   - NEXT_PUBLIC_SUPABASE_ANON_KEY = (tu anon key)
6. Deploy en Vercel.

## Notas
- Este scaffold es básico: las páginas incluyen ejemplos de cómo conectar con Supabase auth y consultar tablas.
- Para producción, revisá seguridad, reglas RLS en Supabase y no publicar SERVICE_ROLE_KEY en cliente.
