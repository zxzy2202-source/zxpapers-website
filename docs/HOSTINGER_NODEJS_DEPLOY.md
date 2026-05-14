# Hostinger Node.js Hosting Deployment

This project is prepared for Hostinger Business Web Hosting with:

- Hostinger MySQL
- Hostinger File Manager / local uploaded files

## Recommended production setup

- Runtime: Node.js `20.x` or `22.x`
- Deploy source: GitHub repository
- Database: Hostinger MySQL
- Upload storage: Hostinger local file storage

## Database strategy

This app now targets MySQL in production. Use the MySQL credentials from hPanel and build:

- `DATABASE_URL=mysql://DB_USER:DB_PASSWORD@HOST:3306/DB_NAME`

Use the exact MySQL host, database name, username, and password from your Hostinger panel.

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
- `OPENAI_API_KEY` if you want AI article generation

Optional but recommended:

- `OPENAI_BASE_URL`
- `AI_ARTICLE_MODEL`
- `AI_ARTICLE_REASONING_EFFORT`
- `ALLOW_LOCAL_FILE_UPLOADS=true`
- `BLOB_READ_WRITE_TOKEN`
- `ANTHROPIC_API_KEY`
- `ANTHROPIC_BASE_URL`

## Hostinger MySQL values

From hPanel collect:

- database host
- database name
- database username
- database password

If the password contains special characters, URL-encode it before placing it into `DATABASE_URL`.

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

- This setup is designed to use Hostinger local file storage, so keep `ALLOW_LOCAL_FILE_UPLOADS=true`.
- Uploaded files are saved into `public/uploads`.
- `BLOB_READ_WRITE_TOKEN` is optional and only needed if you later switch to object storage.
- If Claude credentials are not set, ALT generation falls back to rule-based generation.
- AI article generation requires a working `OPENAI_API_KEY`.

## Current admin URL pattern

After deployment, the admin login path is:

- `/admin/login`
