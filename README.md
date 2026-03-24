# Abhishek Sahu - Personal Docs Site

This repository contains a personal documentation website built with **Zensical** (Material-style docs theme) and Markdown content.

## What is in this site

- Home page: `docs/index.md`
- About page: `docs/about-me.md`
- Blogs section: `docs/blogs/`
- Notes section: `docs/notes/`

## Tech Stack

- Static site generator: Zensical
- Content format: Markdown
- Site config: `zensical.toml`

## Run Locally

1. Create and activate a virtual environment (recommended):

```zsh
python3 -m venv .venv
source .venv/bin/activate
```

2. Install Zensical:

```zsh
pip install zensical
```

3. Start local development server:

```zsh
zensical serve
```

4. Open the local URL shown in terminal (usually `http://127.0.0.1:8000`).

## Build the Site

```zsh
zensical build --clean
```

This generates static files inside `site/`.

## Content Workflow

- Add or edit Markdown files in `docs/`
- Keep assets inside `docs/assets/`
- Rebuild (or use `zensical serve`) to preview changes

## Notes

- `site/` is generated output. Prefer editing files in `docs/` and `zensical.toml`.
- Custom CSS is already linked via `extra_css` in `zensical.toml`.

