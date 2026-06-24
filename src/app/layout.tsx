import type { Metadata, Viewport } from "next";
import { Geist_Mono, Poppins } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { LanguageProvider } from "@/components/language-provider";
import { CookieConsent } from "@/components/cookie-consent";

const initScript = `(function(){try{var t=localStorage.getItem("theme");if(t!=="light"&&t!=="dark"){t="dark"}var e=document.documentElement;e.classList.add(t);var l=localStorage.getItem("locale");if(l==="pt-BR"||l==="en-US"||l==="es-ES"){e.lang=l}}catch(_){document.documentElement.classList.add("dark")}})();`;

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const siteUrl = "https://devniltonrocha.com.br";
const siteTitle = "Nilton Rocha | Desenvolvedor Web e Mobile";
const siteDescription =
  "Portfólio de Nilton Rocha, desenvolvedor web e mobile com foco em UI/UX, performance, IA e SEO.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: siteTitle,
    template: "%s | Nilton Rocha",
  },
  description: siteDescription,
  applicationName: "devNilton",
  authors: [{ name: "Nilton Rocha", url: siteUrl }],
  creator: "Nilton Rocha",
  keywords: [
    "Nilton Rocha",
    "desenvolvedor web",
    "desenvolvedor mobile",
    "React",
    "Next.js",
    "TypeScript",
    "React Native",
    "Flutter",
    "UI/UX",
    "IA",
    "fintech",
  ],
  alternates: {
    canonical: "/",
    languages: {
      "pt-BR": "/",
      "en-US": "/",
      "es-ES": "/",
    },
  },
  manifest: "/manifest.webmanifest",
  openGraph: {
    title: siteTitle,
    description: siteDescription,
    url: siteUrl,
    siteName: "devNilton",
    locale: "pt_BR",
    alternateLocale: ["en_US", "es_ES"],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: siteTitle,
    description: siteDescription,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large" },
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: dark)", color: "#0c1228" },
    { media: "(prefers-color-scheme: light)", color: "#f7f5ff" },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pt-BR"
      suppressHydrationWarning
      className={`${poppins.variable} ${geistMono.variable} h-full antialiased`}
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: initScript }} />
      </head>
      <body>
        <LanguageProvider>
          <ThemeProvider>{children}</ThemeProvider>
          <CookieConsent />
        </LanguageProvider>
      </body>
    </html>
  );
}
