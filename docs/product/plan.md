# Project plan

Portfolio case: a trader's room (client cabinet) for a forex/CFD broker, designed from scratch. The original "CRM Trade (Copy)" Figma file is a functional reference only — visuals, name and style intentionally move away from it.

Full working document (in Russian): https://claude.ai/code/artifact/ffd98fcc-8b9b-478c-93e6-64e74ead26a1

## Decisions (2026-10-20)

| Topic              | Decision                                                               |
| ------------------ | ---------------------------------------------------------------------- |
| Platform           | Mobile-first (390 → 744 → 1440)                                        |
| Design system      | shadcn/ui + Tailwind; Figma: Obra shadcn/ui kit                        |
| Coded flows        | Auth + 2FA, onboarding & KYC, dashboard, deposit, open trading account |
| Trading platforms  | Several real ones: MT4, MT5, cTrader, TradeLocker                      |
| Language           | English only                                                           |
| Hosting            | Vercel                                                                 |
| Component showcase | `/kit` page (Storybook later, optional)                                |
| Style & name       | Chosen at stage 3 from three directions                                |

## Stages

| #   | Stage               | Figma                                                | Code                                       | Gate               |
| --- | ------------------- | ---------------------------------------------------- | ------------------------------------------ | ------------------ |
| 0   | Setup               | Kit copy, Library + Product files                    | Repo, Next.js + shadcn, README, CI         | Tooling ready      |
| 1   | Architecture        | Sitemap, flows, screen & state list                  | Issue per screen                           | Flows agreed       |
| 2   | Wireframes          | Mobile wireframes on kit components, lo-fi prototype | —                                          | Structure accepted |
| 3   | Style               | 3 directions × 3 screens, name                       | —                                          | Style chosen       |
| 4   | Design system       | Theme (light/dark, brands), custom components        | `themes.css`, `components/finance`, `/kit` | Library v1         |
| 5   | Screens & prototype | Mobile → tablet → desktop, Figma prototype           | 5 flows on mocks, deploy                   | Demo               |
| 6   | Case study          | Cover, mockups, flow GIFs                            | README showcase, `docs/case-study`         | Published          |

## Modules

Core (from the reference file): auth, dashboard, accounts, deposit, withdrawal, transfer, settings, affiliate, notifications, support, about.

Added: KYC tiers, open trading account, payment methods, transaction history, system states (empty, loading, errors, session expired), onboarding checklist, dark theme, dashboard tour, auto-logout, maintenance, banner slots, legal, education (P2), guest mode (P2), accessibility.
