import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "API Key Leak GitHub Scanner — Protect Your Secrets",
  description: "Continuously monitors GitHub repositories for API keys, tokens, and secrets in commits with instant Slack alerts. Built for DevOps teams and security engineers."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="c9c09b23-2179-4b01-b98a-0ac88712860b"></script>
      </head>
      <body>{children}</body>
    </html>
  );
}
