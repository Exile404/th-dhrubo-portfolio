import type { Metadata, Viewport } from "next";
import { DM_Sans, Syne } from "next/font/google";
import { NavBar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { CustomCursor } from "@/components/shared/custom-cursor";
import { ClickRipple } from "@/components/shared/click-ripple";
import { Toaster } from "@/components/ui/sonner";
import { PROFILE } from "@/lib/data/profile";
import "./globals.css";

const SITE_URL = "https://th-dhrubo-portfolio.vercel.app";

const syne = Syne({
  subsets: ["latin"],
  weight: ["400", "600", "700", "800"],
  variable: "--font-syne",
  display: "swap",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-dm",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: `${PROFILE.name} — ${PROFILE.title}`,
    template: `%s | ${PROFILE.name}`,
  },
  description: PROFILE.tagline,
  keywords: [
    "Tahsinul Haque Dhrubo",
    "Data Scientist",
    "ML Engineer",
    "LLM",
    "NLP",
    "PyTorch",
    "FastAPI",
    "Next.js",
    "Melbourne",
    "Deakin University",
    "Portfolio",
  ],
  authors: [{ name: PROFILE.name, url: PROFILE.links.linkedin }],
  creator: PROFILE.name,
  openGraph: {
    type: "website",
    url: SITE_URL,
    title: `${PROFILE.name} — ${PROFILE.title}`,
    description: PROFILE.tagline,
    siteName: `${PROFILE.name} Portfolio`,
    locale: "en_AU",
  },
  twitter: {
    card: "summary_large_image",
    title: `${PROFILE.name} — ${PROFILE.title}`,
    description: PROFILE.tagline,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large" },
  },
  alternates: { canonical: SITE_URL },
};

export const viewport: Viewport = {
  themeColor: "#0a0a20",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <body
        className={`${syne.variable} ${dmSans.variable} font-dm antialiased`}
      >
        <CustomCursor />
        <ClickRipple />
        <NavBar />
        {children}
        <Footer />
        <Toaster theme="dark" position="bottom-right" richColors />
      </body>
    </html>
  );
}