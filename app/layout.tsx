import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";
import { Bricolage_Grotesque, Public_Sans } from "next/font/google";
import "./globals.css";
import { Nav } from "@/components/layout/Nav";
import { Footer } from "@/components/layout/Footer";
import { BRAND } from "@/lib/brand";

const jetbrainsMono = localFont({
  src: "./fonts/JetBrainsMono-Variable.woff2",
  variable: "--font-jetbrains-mono",
  weight: "100 800",
  display: "swap",
});

// Display face: a geometric grotesk with slightly irregular terminals - echoes the
// logomark's own asymmetric ring-gap rather than reaching for the cream+serif combo
// this palette would otherwise default to.
const bricolage = Bricolage_Grotesque({
  subsets: ["latin"],
  variable: "--font-bricolage",
  display: "swap",
});

// Body face: quiet and built for reading, deliberately not Inter/Roboto/system-ui.
const publicSans = Public_Sans({
  subsets: ["latin"],
  variable: "--font-public-sans",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://nylor.tech"),
  title: {
    default: "Nylor Tech — Websites, automation, and AI agents",
    template: "%s | Nylor Tech",
  },
  description:
    "Nylor Tech is a software studio building websites, automation, and AI agents for businesses that need serious software built right. First product: Atlas.",
  openGraph: {
    type: "website",
    siteName: "Nylor Tech",
    title: "Nylor Tech — Websites, automation, and AI agents",
    description:
      "Nylor Tech is a software studio building websites, automation, and AI agents for businesses that need serious software built right. First product: Atlas.",
  },
};

export const viewport: Viewport = {
  themeColor: BRAND.cloud,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      data-scroll-behavior="smooth"
      className={`${jetbrainsMono.variable} ${bricolage.variable} ${publicSans.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <Nav />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
