import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, Plus } from "lucide-react";

import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/theme-toggle";
import { formatMoney, formatPercent } from "@/lib/format";

export const metadata: Metadata = { title: "Kit" };

const tokens = [
  "background",
  "foreground",
  "primary",
  "secondary",
  "muted",
  "accent",
  "destructive",
  "border",
  "gain",
  "loss",
  "warning",
] as const;

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="flex flex-col gap-3">
      <h2 className="text-sm font-medium text-muted-foreground">{title}</h2>
      {children}
    </section>
  );
}

export default function KitPage() {
  return (
    <main className="mx-auto flex w-full max-w-3xl flex-1 flex-col gap-10 px-4 py-10">
      <header className="flex items-center justify-between">
        <Button asChild variant="ghost" size="sm">
          <Link href="/">
            <ArrowLeft /> Back
          </Link>
        </Button>
        <ThemeToggle />
      </header>

      <div className="flex flex-col gap-2">
        <h1 className="text-3xl font-semibold tracking-tight">Component kit</h1>
        <p className="text-muted-foreground">
          Live showcase of the theme tokens and components. Grows with every component added.
        </p>
      </div>

      <Section title="Color tokens">
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
          {tokens.map((token) => (
            <div key={token} className="flex flex-col gap-1.5">
              <div className="h-12 rounded-md border" style={{ background: `var(--${token})` }} />
              <code className="text-xs text-muted-foreground">--{token}</code>
            </div>
          ))}
        </div>
      </Section>

      <Section title="Button">
        <div className="flex flex-wrap items-center gap-3">
          <Button>Default</Button>
          <Button variant="secondary">Secondary</Button>
          <Button variant="outline">Outline</Button>
          <Button variant="ghost">Ghost</Button>
          <Button variant="destructive">Destructive</Button>
          <Button variant="link">Link</Button>
          <Button size="icon" aria-label="Add">
            <Plus />
          </Button>
        </div>
        <Button size="touch" className="w-full sm:w-auto">
          Deposit
        </Button>
      </Section>

      <Section title="Money formatting">
        <div className="flex flex-col gap-1">
          <span className="text-4xl font-semibold tracking-tight tabular">
            {formatMoney(100670.4)}
          </span>
          <span className="text-sm text-gain tabular">
            {`${formatMoney(1240.32, "USD", { signed: true })} (${formatPercent(1.25, { signed: true })}) today`}
          </span>
          <span className="text-sm text-loss tabular">
            {`${formatMoney(-312.08, "USD", { signed: true })} (${formatPercent(-0.31, { signed: true })})`}
          </span>
        </div>
      </Section>
    </main>
  );
}
