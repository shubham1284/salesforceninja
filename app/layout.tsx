import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

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
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
        <Analytics />
      </body>
    </html>
  );
}
