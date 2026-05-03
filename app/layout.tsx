import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Competitor Price Drop Alerter",
  description: "Get alerted when competitors drop prices. Monitor competitor product prices across platforms, receive instant alerts, and track pricing history."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="4bf919e4-0b90-4f34-9121-82c6f9bad687"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] antialiased">
        {children}
      </body>
    </html>
  );
}
