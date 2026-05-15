# Collaboration Workflow

This project uses GitHub as the shared source of truth and Hostinger auto deploys from `main`.

## Roles

- Content owner: page structure, copy, SEO, product data, forms, and admin logic.
- Design owner: images, videos, logo files, visual polish, CSS, and page presentation.

## Branches

- `main`: production branch. Hostinger deploys this branch.
- `content`: copy, SEO, product information, and page structure.
- `design`: images, videos, layout polish, and visual styling.

Create the working branches once:

```bash
git checkout main
git pull origin main
git checkout -b content
git push -u origin content
git checkout main
git checkout -b design
git push -u origin design
```

## Daily Workflow

1. Start from the latest branch:

```bash
git checkout content
git pull origin content
```

or:

```bash
git checkout design
git pull origin design
```

2. Make changes and preview locally:

```bash
PORT=3002 corepack pnpm dev --hostname 0.0.0.0
```

3. Run type check before pushing:

```bash
corepack pnpm tsc
```

4. Commit and push:

```bash
git add .
git commit -m "Describe the change"
git push
```

5. Open a GitHub pull request into `main`.

6. Merge only after preview and review. Hostinger deploys after `main` is updated.

## Rules

- Do not edit files directly on Hostinger for permanent changes.
- Do not commit `.next`, `node_modules`, local databases, or generated cache files.
- Large images and videos should be optimized before committing.
- If both people need to edit the same file, communicate first to avoid conflicts.
- Keep product facts, certifications, MOQ, and delivery claims consistent across pages.

