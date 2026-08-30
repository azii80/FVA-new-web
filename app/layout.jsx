import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import { brand } from "@/lib/content";
import { asset } from "@/lib/asset";

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-jakarta",
});

export const metadata = {
  metadataBase: new URL("https://frontva.com"),
  title: {
    default: `${brand.name} — ${brand.tagline}`,
    template: `%s — ${brand.name}`,
  },
  description: brand.description,
  icons: { icon: asset("/favicon.svg") },
  openGraph: {
    title: `${brand.name} — ${brand.tagline}`,
    description: brand.description,
    siteName: brand.name,
    type: "website",
  },
};

export const viewport = {
  themeColor: "#ffffff",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={jakarta.variable}>
      <body className="antialiased">{children}</body>
    </html>
  );
}
