# 1chooo's Linktree

A small personal link page built with [Astro](https://astro.build/). It shows a profile photo, bio, social links, tagline, and a clickable profile photo popup.

## Getting Started

Install dependencies:

```bash
pnpm install
```

Start the local development server:

```bash
pnpm dev
```

Astro will print a local URL, usually `http://localhost:4321`.

## Customize Your Linktree

Most profile content lives in [`src/data/links.ts`](./src/data/links.ts).

Update the `profile` object to change your name, bio, avatar, favicon, tagline, and popup quote:

```ts
export const profile = {
  name: 'Your Name',
  bio: 'A short bio',
  avatarUrl: 'https://github.com/your-username.png',
  faviconUrl: 'https://github.com/your-username.png',
  tagline: '"A short quote or tagline."',
  popupQuote: '"A quote shown when the profile photo is opened."',
}
```

Update the `links` array to add, remove, or reorder buttons:

```ts
export const links: LinkItem[] = [
  { label: 'Github', url: 'https://github.com/your-username', icon: 'github' },
  {
    label: 'Linkedin',
    url: 'https://www.linkedin.com/in/your-username/',
    icon: 'linkedin',
  },
  { label: 'Portfolio', url: 'https://your-site.com', icon: 'signature' },
]
```

Available icons are defined in [`src/components/Icon.astro`](./src/components/Icon.astro). The current options are:

- `github`
- `linkedin`
- `signature`

To add a new icon, add its name to the `IconName` type in [`src/data/links.ts`](./src/data/links.ts), then add the matching SVG path in [`src/components/Icon.astro`](./src/components/Icon.astro).

## Useful Commands

| Command | Description |
| --- | --- |
| `pnpm dev` | Start the local dev server |
| `pnpm build` | Build the production site into `dist/` |
| `pnpm preview` | Preview the production build locally |

If you prefer npm, the equivalent commands are `npm install`, `npm run dev`, `npm run build`, and `npm run preview`.

## Project Structure

```text
src/
  components/      Astro components and CSS modules
  data/links.ts    Profile content and link button data
  pages/index.astro
  styles/global.css
public/
  fonts/           Local font files
```

## Deploy

Build the site before deploying:

```bash
pnpm build
```

The production output is generated in `dist/`. You can deploy this Astro project to static hosts such as Vercel, Netlify, Cloudflare Pages, or GitHub Pages.

## License

Released under [MIT](./LICENSE) by [Hugo Lin](https://github.com/1chooo).

This software can be modified and reused without restriction. The original license must be included with any copies of this software. If a significant portion of the source code is used, please provide a link back to this repository.
