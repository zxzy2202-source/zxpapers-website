# Hostinger Node.js Hosting Deployment

This project can run on Hostinger Node.js Hosting, but production should not rely on local SQLite or local uploaded files.

## Recommended production setup

- Runtime: Node.js `20.x` or `22.x`
- Deploy source: GitHub repository
- Database: Turso/libSQL
- Upload storage: object storage via `BLOB_READ_WRITE_TOKEN`

## Why not use local SQLite on Hostinger Node.js Hosting

This app defaults to:

- `DATABASE_URL=file:./prisma/admin.db`
- local image uploads in `public/uploads`

That is acceptable for local development, but not recommended for managed Node.js hosting because:

- the database file is not stored in Git
- local files may not behave like durable storage across redeploys
- a fresh deployment can start with an empty backend

## hPanel deployment settings

Use Hostinger's Node.js Web App flow and connect the GitHub repository.

- Repository: `zxzy2202-source/zxpapers-website`
- Branch: `main`
- Node.js version: `20.x` or `22.x`
- Build command: `npm run build`
- Start command: `npm run start`

Hostinger can auto-detect the Node version from `package.json`, but set it explicitly if needed.

## Environment variables

Import variables from `.env.hostinger.example`, then replace placeholders with real values.

Minimum required:

- `AUTH_SECRET`
- `NEXTAUTH_SECRET`
- `NEXTAUTH_URL`
- `DATABASE_URL`
- `TURSO_AUTH_TOKEN` if using Turso
- `OPENAI_API_KEY` if you want AI article generation

Optional but recommended:

- `OPENAI_BASE_URL`
- `AI_ARTICLE_MODEL`
- `AI_ARTICLE_REASONING_EFFORT`
- `BLOB_READ_WRITE_TOKEN`
- `ALLOW_LOCAL_FILE_UPLOADS=false`
- `ANTHROPIC_API_KEY`
- `ANTHROPIC_BASE_URL`

## Turso setup

Recommended database target:

- `DATABASE_URL=libsql://...`
- `TURSO_AUTH_TOKEN=...`

This project already supports libSQL/Turso in the Prisma adapter layer.

## First deploy checklist

1. Push code to GitHub.
2. In hPanel, create a Node.js Web App from GitHub.
3. Select `main`.
4. Set Node.js version to `20.x` or `22.x`.
5. Import environment variables.
6. Deploy the app.
7. Open `/api/admin/seed` once only if you need to create the first admin in a new empty database and you are in a controlled setup.
8. Log in to `/admin/login`.

## Important notes

- On Hostinger production, keep `ALLOW_LOCAL_FILE_UPLOADS=false` and set `BLOB_READ_WRITE_TOKEN` for durable uploads.
- If Claude credentials are not set, ALT generation falls back to rule-based generation.
- AI article generation requires a working `OPENAI_API_KEY`.

## Current admin URL pattern

After deployment, the admin login path is:

- `/admin/login`
