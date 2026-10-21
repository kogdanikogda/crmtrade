import type { Metadata, Viewport } from "next";
import { GeistSans as geistSans } from "geist/font/sans";
import { GeistMono as geistMono } from "geist/font/mono";

import { ThemeProvider } from "@/components/theme-provider";
import "./globals.css";

// Placeholder typeface (self-hosted, no network at build). Final font is chosen at stage 3.

export const metadata: Metadata = {
  title: {
    default: "CRM Trade",
    template: "%s · CRM Trade",
  },
  description: "Trader's room prototype — portfolio case study.",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
