# Copilot Instructions for glify-cleaning

## Project Overview

- This is a Next.js app using the `/src/app` directory structure and TypeScript.
- UI components are organized under `src/components/ui/`.
- Utility functions live in `src/lib/utils.ts`.
- The project uses Shadcn UI (see `button.tsx` in `src/components/ui/`).
- Static assets (SVGs) are in `public/`.

## Key Workflows

- **Development:** Start with `npm run dev` (or `yarn dev`, `pnpm dev`, `bun dev`).
- **Main entrypoint:** `src/app/page.tsx` is the default landing page.
- **Global styles:** Defined in `src/app/globals.css`.
- **Layout:** Shared layout in `src/app/layout.tsx`.

## Patterns & Conventions

- Use functional React components and hooks.
- UI components follow Shadcn conventions (see `src/components/ui/button.tsx`).
- Prefer colocating styles with components when possible.
- Use TypeScript for all source files.
- Utilities are centralized in `src/lib/utils.ts`.
- Use cn() when adding classNames with default styles.
- SVGs are imported from `public/` for icons and graphics.

## Integration Points

- Shadcn UI: Components are added via CLI (`npx shadcn@latest add <component>`).
- Next.js routing: All pages and layouts are under `src/app/`.
- Fonts: Uses `next/font` for optimized font loading (Inter).

## Examples

- To add a new UI component, run `npx shadcn@latest add <component>` and place it in `src/components/ui/`.
- To update the main page, edit `src/app/page.tsx`.
- To add a utility, use `src/lib/utils.ts`.

## External Dependencies

- Next.js
- Shadcn UI
- Inter font (via `next/font`)

## References

- See `README.md` for setup and deployment details.
- See `src/components/ui/button.tsx` for UI patterns.
- See `src/app/layout.tsx` for layout conventions.

---

If any conventions or workflows are unclear, please ask for clarification or provide feedback to improve these instructions.
