import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/react";
import "./globals.css";

export const metadata: Metadata = {
  title: "SalesforceNinja | Salesforce Solutions & Consulting",
  description:
    "Expert Salesforce solutions, implementation, and consulting services. We help businesses maximize their Salesforce investment with custom development, integrations, and support.",
  keywords:
    "Salesforce, Salesforce consulting, Salesforce implementation, Salesforce developer, CRM solutions, Salesforce integration",
  authors: [{ name: "SalesforceNinja" }],
  openGraph: {
    title: "SalesforceNinja | Salesforce Solutions & Consulting",
    description:
      "Expert Salesforce solutions, implementation, and consulting services.",
    url: "https://www.salesforceninja.dev",
    siteName: "SalesforceNinja",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "SalesforceNinja | Salesforce Solutions & Consulting",
    description:
      "Expert Salesforce solutions, implementation, and consulting services.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-theme="dark">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Cinzel:wght@400;500;600;700;900&family=Lora:ital,wght@0,400;0,500;1,400;1,500&family=DM+Sans:opsz,wght@9..40,300;9..40,400;9..40,500;9..40,600&display=swap"
          rel="stylesheet"
        />
        {/* Prevent flash of wrong theme on load */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  var t = localStorage.getItem('cf-theme') || 'dark';
                  document.documentElement.setAttribute('data-theme', t);
                } catch(e) {}
              })();
            `,
          }}
        />
      </head>
      <body className="antialiased">
        {children}
        <Analytics />
      </body>
    </html>
  );
}
