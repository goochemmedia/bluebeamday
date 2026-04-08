import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "BPA Bluebeam Day 2026 | Slimmer bouwen. Beter samenwerken.",
  description:
    "Woensdag 1 juli 2026 – Van der Valk Hotel Amersfoort. De jaarlijkse BPA Bluebeam Day brengt bouwprofessionals samen voor kennis, netwerken en de nieuwste ontwikkelingen in Bluebeam.",
  openGraph: {
    title: "BPA Bluebeam Day 2026",
    description: "Slimmer bouwen. Beter samenwerken. | 1 juli 2026 – Van der Valk Hotel Amersfoort",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="nl" className="h-full antialiased">
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
