# CRM Trade — trader's room prototype

A mobile-first client cabinet for a forex/CFD broker, designed and built from scratch as a portfolio case study.

> Working title. The final name and visual style are chosen at stage 3 (see [project plan](docs/product/plan.md)).

## What's inside

- **Design** — Figma, built on the [Obra shadcn/ui kit](https://www.figma.com/design/VQwRmtVOgfqWYIn5z5wfor/shadcn-ui-kit-community-edition--Community-) (community edition). Variables in Figma match the CSS variables in code one to one.
- **Code** — Next.js (App Router) + Tailwind CSS v4 + shadcn/ui on Radix primitives.
- **Data** — mock only. No backend: every flow and state runs on fixtures.

## Flows in the coded prototype

1. Sign up & log in with 2FA
2. Onboarding & KYC
3. Dashboard
4. Deposit
5. Open a trading account (MetaTrader 4, MetaTrader 5, cTrader, TradeLocker)

Everything else (withdrawal, transfer, settings, affiliate, notifications, support) lives in the Figma prototype.

## Getting started

```bash
pnpm install
pnpm dev
```

Open http://localhost:3000. The component showcase is at `/kit`.

### Adding shadcn/ui components

```bash
pnpm dlx shadcn@latest add input card drawer tabs
```

Components land in `components/ui/` and are ours to edit.

## Project structure

```
app/                 routes (App Router)
  kit/               component showcase
components/
  ui/                shadcn/ui components
  finance/           custom components: BalanceHero, AccountCard, AmountInput…
styles/themes.css    theme tokens: light, dark, brand themes (from Figma)
lib/                 utilities: cn(), money formatting
mocks/               fixtures for accounts, transactions, KYC, notifications
docs/
  product/           scope, sitemap, flows
  case-study/        portfolio write-up
  adr/               architecture decisions
```

## Theming

All colors are CSS variables in `styles/themes.css`, named exactly like the shadcn/ui variables and the Figma kit. Dark mode is the `.dark` class (next-themes); brand themes are `data-brand="…"` on `<html>`. Finance-specific tokens: `--gain`, `--loss`, `--warning`.

## Status

Stage 0 — setup. See [plan](docs/product/plan.md).
