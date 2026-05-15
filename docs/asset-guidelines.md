# Asset Guidelines

Use this document when adding or replacing images and videos.

## Folders

```text
public/images/home/
public/images/products/
public/images/about/
public/images/markets/
public/images/oem/
public/videos/
```

## Naming

Use lowercase, descriptive filenames:

```text
home-hero-factory.webp
product-thermal-rolls-80x80.webp
product-thermal-labels-4x6.webp
about-factory-aerial.webp
market-south-africa-hero.webp
factory-printing-slitting-line.mp4
```

Avoid spaces, Chinese characters, and random camera filenames.

## Image Format

- Prefer `.webp` for website images.
- Use `.png` only for logos or transparent graphics.
- Use `.jpg` only when source photos cannot be converted cleanly.

Recommended sizes:

- Hero images: 1600x900 or 1920x1080.
- Product cards: 1000x750 or 1200x900.
- Logos: keep original ratio, transparent PNG if needed.
- Open Graph image: 1200x630.

## Video Format

- Use `.mp4`.
- Keep videos short, compressed, and web-ready.
- Recommended resolution: 1280x720 or 1920x1080.
- Avoid uploading very large raw files.

## How To Replace A Stable Asset

If the page already references a file, replace the file with the same name and path.

Example:

```text
public/images/logo.png
public/images/logo-dark.png
```

Then commit and push to GitHub.

## Hostinger

Do not rely on Hostinger File Manager for permanent image or video changes. GitHub deployment can overwrite manual uploads. Permanent assets should be committed to this repository.

