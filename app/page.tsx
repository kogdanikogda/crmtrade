import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/theme-toggle";

const flows = [
  { name: "Sign up & log in with 2FA", status: "planned" },
  { name: "Onboarding & KYC", status: "planned" },
  { name: "Dashboard", status: "planned" },
  { name: "Deposit", status: "planned" },
  { name: "Open a trading account", status: "planned" },
] as const;

export default function Home() {
  return (
    <main className="mx-auto flex w-full max-w-md flex-1 flex-col gap-8 px-4 py-10">
      <header className="flex items-center justify-between">
        <span className="text-sm font-semibold tracking-tight">CRM Trade</span>
        <ThemeToggle />
      </header>

      <section className="flex flex-col gap-3">
        <h1 className="text-3xl font-semibold tracking-tight">Trader&apos;s room prototype</h1>
        <p className="text-muted-foreground">
          A mobile-first client cabinet for a forex/CFD broker. Portfolio case study — design in
          Figma, components on shadcn/ui, mock data only.
        </p>
      </section>

      <section className="flex flex-col gap-2">
        <h2 className="text-sm font-medium text-muted-foreground">Flows</h2>
        <ul className="divide-y rounded-lg border">
          {flows.map((flow) => (
            <li key={flow.name} className="flex items-center justify-between px-4 py-3 text-sm">
              <span>{flow.name}</span>
              <span className="text-xs text-muted-foreground">{flow.status}</span>
            </li>
          ))}
        </ul>
      </section>

      <Button asChild size="touch" className="mt-auto">
        <Link href="/kit">
          Component kit <ArrowRight />
        </Link>
      </Button>
    </main>
  );
}
