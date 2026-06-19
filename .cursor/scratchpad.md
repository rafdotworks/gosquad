# Gosquad Design Prototype — Scratchpad

## Background and Motivation

Bootstrap a standalone Vite + React + TypeScript app from the isolated `RolePage` JSX prototype. The repo serves as a design prototyping workspace for Gosquad UI screens, starting with the Role information page.

**Phase 2 (in progress):** Full shadcn + Radix UI redesign — migrate inline styles to Tailwind v4 + customized shadcn primitives and composed Gosquad domain components.

## Key Challenges and Analysis

- Original component used inline styles and Cursor-specific `window.storage` — migrated to extracted tokens and `localStorage`.
- Phase 1 preserved visual parity with inline styles; Phase 2 replaces with shadcn/Radix component system.

## High-level Task Breakdown

- [x] Scaffold Vite + React + TS project
- [x] Extract design tokens and global CSS
- [x] Migrate RolePage to feature folder with data/hooks split
- [x] Implement localStorage adapter for comment pins
- [x] Wire React Router and app entry
- [x] Add README, verify build/lint
- [x] Init Tailwind v4 + shadcn (Radix base)
- [x] Map parchment tokens to CSS variables
- [x] Customize shadcn primitives (Button, Badge, Card, Tabs, Input)
- [x] Build Gosquad domain components
- [x] Refactor RolePage to compose components
- [x] Build/lint verify

## Project Status Board

- [x] shadcn init + primitives
- [x] Theme customization
- [x] Domain components (AppHeader, RoleHero, WhoFitsPanel, CommentPins, sections)
- [x] RolePage refactor (~65 lines)
- [x] Build + lint pass
- [ ] Vercel redeploy (pending auth/CLI)

## Current Status / Progress Tracking

Phase 2 shadcn redesign complete locally. Role page uses composed Gosquad components with customized shadcn/Radix primitives. Build and lint pass.

**Label hierarchy update (Executor):** Replaced all-caps mono section/field labels with softer sentence-case sans typography via updated `Eyebrow` + new `FieldLabel`. At a glance section given more padding, larger values, prominent eyebrow, subtle background, and lg column dividers.

## Executor's Feedback or Assistance Requests

Awaiting planner confirmation on label hierarchy update. Please visually verify At a glance spacing in dev server (`npm run dev`). Vercel deploy attempted — may need user to run `vercel deploy --prod` if CLI auth unavailable.

## Lessons

- Include info useful for debugging in program output.
- Read files before editing.
- Run npm audit if vulnerabilities appear in terminal output.
- Always ask before using git force commands.
- shadcn CLI may write to literal `@/` folder if path alias isn't resolved — move files to `src/` after init.
