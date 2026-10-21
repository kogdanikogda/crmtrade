# ADR 0001 — shadcn/ui instead of Ant Design

Date: 2026-10-20 · Status: accepted

## Context

The product is mobile-first and must look clearly different from the reference file. Candidates: Ant Design 6, shadcn/ui + Tailwind, Material 3 Expressive, a custom system on headless primitives.

## Decision

shadcn/ui + Tailwind, Radix primitives. Figma: Obra shadcn/ui kit (community edition), whose variable names match shadcn CSS variables.

## Why

- Components are copied into the repo, so the visual style is fully ours — easiest way to avoid the recognizable "admin panel" look.
- Drawer (bottom sheet), responsive patterns and touch sizing fit mobile-first better than Ant's desktop-oriented set.
- One token vocabulary across Figma and code.

## Trade-offs

- Fewer ready components than Ant: tour, QR code, statistic, document upload are built by us or taken from small libraries.
- No official Figma kit; we depend on a community kit.
