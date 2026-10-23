# CLAUDE.md — project context

Read this first. It carries the full context from the planning chat (claude.ai, Oct 20–21, 2026).

Communication rules (Russian with the owner, English in code and docs, multiple-choice questions) live in `~/.claude/CLAUDE.md`.

## What this is

Portfolio case study: a **trader's room** (client cabinet) for a forex/CFD broker, designed from scratch. Not a client project — no customer, no rights questions.

- The old Figma file **CRM Trade (Copy)** is a **functional reference only** (which screens and flows exist). Do not copy its visuals, layer structure or purple-gradient style. Name and style should move away from it.
- Working title: CRM Trade. Final name chosen at stage 3.

## Links

| What | Link |
| --- | --- |
| Reference file (old) | https://www.figma.com/design/ZMLF5ui6i48BbHDQkN5j6Y/CRM-Trade--Copy- |
| Figma kit / Library (Obra shadcn/ui community edition) | https://www.figma.com/design/VQwRmtVOgfqWYIn5z5wfor/shadcn-ui-kit-community-edition--Community- |
| Figma Product file (screens) | _not created yet — ask Alex_ |
| Working doc with full plan (RU) | https://claude.ai/code/artifact/ffd98fcc-8b9b-478c-93e6-64e74ead26a1 |
| Repo | https://github.com/kogdanikogda/crmtrade |

## Decisions (locked)

| Topic | Decision |
| --- | --- |
| Platform | Mobile-first: 390 → 744 → 1440 |
| Design system | shadcn/ui + Tailwind v4 on Radix primitives (chosen over Ant Design 6.2, see `docs/adr/0001`) |
| Figma | Obra shadcn/ui kit; Figma variable names = shadcn CSS variable names |
| Coded flows (5) | Sign up / log in + 2FA · Onboarding & KYC · Dashboard · Deposit · Open trading account |
| Other modules | Figma prototype only (withdrawal, transfer, history, settings, affiliate, notifications, support) |
| Trading platforms | Several real: MetaTrader 4, MetaTrader 5, cTrader, TradeLocker — with a comparison card on selection |
| Language | English only |
| Hosting | Vercel (Alex connects it) |
| Component showcase | `/kit` page inside the app; Storybook optional later |
| Data | Mocks only (MSW + fixtures in `mocks/`), no backend |

## Open (decided at stage 3)

Style direction (Calm finance / Terminal / Editorial — shown on dashboard, deposit, open account), name and wordmark, typeface with tabular figures (Geist is a placeholder), illustrations, 3–5 non-forex references.

## Plan

| # | Stage | Figma | Code | Status |
| --- | --- | --- | --- | --- |
| 0 | Setup | Kit + Library + Product files | Repo, Next.js + shadcn, README, CI | Code done; Product file pending |
| 1 | Architecture | Sitemap, flows, screen & state list | Issue per screen | **Next** |
| 2 | Wireframes | Mobile wireframes on kit components, lo-fi prototype | — | |
| 3 | Style | 3 directions × 3 screens, name | — | |
| 4 | Design system | Theme (light/dark, 2–3 brands), custom components, patterns | `themes.css`, `components/finance`, `/kit` | |
| 5 | Screens & prototype | Mobile → tablet → desktop, prototype | 5 flows on mocks, deploy | |
| 6 | Case study | Cover, mockups, flow GIFs | README showcase, `docs/case-study` | |

Details: `docs/product/plan.md`.

## Modules

From the reference: auth (individual/company sign-up, social login, email code, 2FA, password reset), dashboard (total balance + 24h change, hide balance, Total/Wallets, quick actions, account cards, charts, history), accounts, deposit (currency, platform, amount with % chips, crypto with QR + timer, receipt), withdrawal (address book), transfer, settings (profile, password, phone, SMS→app 2FA, devices & sessions, wallet address book, support PIN, close account), affiliate, notifications, help/support, about.

To add: KYC tiers, open trading account, payment methods, transaction history screen, system states (empty, skeleton, form/network errors, insufficient funds, limits, 404, session expired), onboarding checklist, dark theme, dashboard tour, auto-logout, maintenance, banner slots, legal, accessibility (AA, 44px touch targets); P2 — education, guest mode.

## Figma conventions

- Files: Kit (base, untouched) · Library (theme + custom components + patterns) · Product (screens).
- Product pages: Cover · Sitemap & flows · Wireframes · Style exploration · Mobile · Tablet · Desktop · Prototype · Handoff · Archive.
- Frame name: `Module / Screen / State` (e.g. `Deposit / Crypto / Expired`). Section = module, with status Draft / In review / Ready for dev.
- Auto layout everywhere, colors only from variables, text only from styles, screens only from instances.
- Custom components: Balance hero, Account card, Amount input, Transaction row, Payment method tile, Tab bar, Onboarding tour, Document upload, Stepper.
- Load the `figma-use` skill before any `use_figma` call.

## Code conventions

- Next.js 16 App Router — read `AGENTS.md` and `node_modules/next/dist/docs/` before using Next APIs.
- Theme tokens live in `styles/themes.css`, bridged to Tailwind in `app/globals.css`. Extra finance tokens: `--gain`, `--loss`, `--warning`. Dark = `.dark` (next-themes); brands = `data-brand` on `<html>`.
- shadcn components: `pnpm dlx shadcn@latest add <name>` → `components/ui/`. Own components → `components/finance/`.
- All money through `lib/format.ts`; amounts use the `tabular` utility.
- Mobile: primary actions `size="touch"`, Drawer instead of Dialog.
- Before committing: `pnpm lint && pnpm typecheck && pnpm build`.
