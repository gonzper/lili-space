# Repository Guidelines

## Project Structure & Module Organization
- `app/`: Next.js App Router pages and layouts (TypeScript). Place new routes under `app/<route>/page.tsx`. Reusable UI lives in `app/components/`.
- `posts/`: Markdown blog posts with frontmatter. Example:
  ---
  title: "First Post"
  date: "2024-01-01"
  ---
- `public/`: Static assets (images, fonts). Refer with `/...` paths.
- Config: `tailwind.config.ts`, `postcss.config.js`, `tsconfig.json`.
- Root: `package.json`, `README.md`.

## Build, Test, and Development Commands
- Install: `npm ci` (use `npm i` for local, `ci` for CI).
- Develop: `npm run dev` — launches Next.js on `http://localhost:3000`.
- Build: `npm run build` — compiles the production bundle.
- Start: `npm start` — runs the built app. Requires a prior build.
Notes: Use Node 18+.

## Coding Style & Naming Conventions
- Language: Prefer TypeScript (`.ts`/`.tsx`) for new code.
- Indentation: 2 spaces; avoid trailing whitespace.
- Components: PascalCase filenames in `app/components/` (e.g., `HeroSection.tsx`).
- Routes: lower-kebab-case directories under `app/` (e.g., `app/blog/[slug]/page.js`).
- Styling: TailwindCSS utility-first; keep page-specific styles in components; global styles in `app/globals.css`.

## Testing Guidelines
- Frameworks: Not configured yet. Suggested setup: unit with Jest/Vitest; e2e with Playwright.
- Placement: Collocate tests as `*.test.ts(x)` next to components or under `__tests__/`.
- Coverage: Target ≥80% lines for core components once tests are added.
- Run: `npm test` (after test tooling is introduced).

## Commit & Pull Request Guidelines
- Commits: Use Conventional Commits (e.g., `feat: add services section`, `fix: correct blog slug parsing`). Keep changes focused.
- PRs: Include description, linked issues, and screenshots for UI changes. Note any breaking changes. Ensure `npm run build` passes.

## Security & Configuration Tips
- Server-only code: The blog uses `fs` to read `posts/`; keep this in server components/routes only.
- Content safety: Validate frontmatter keys (`title`, `date`) and sanitize Markdown rendering as needed.
- Secrets: Do not commit `.env*`. Use environment variables for keys and third-party integrations.
