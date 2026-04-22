import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingAudioPlayer from "@/components/FloatingAudioPlayer";

export const metadata: Metadata = {
  title: "Avyukta – Luxury House of Indian Soul",
  description:
    "A sanctuary of Indian luxury — experiential living through fragrance, sound, and stillness. Discover premium rituals, music baithaks, and mindfulness experiences.",
  keywords: "Avyukta, Indian luxury, fragrance rituals, music baithak, mindfulness, spiritual experiences, Indian heritage",
  openGraph: {
    title: "Avyukta – Luxury House of Indian Soul",
    description: "Experiential living through fragrance, sound, and stillness.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,500;0,600;0,700;1,400;1,500&family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;1,300;1,400&family=Inter:wght@300;400;500;600&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="antialiased bg-ivory text-charcoal">
        <Navbar />
        <main>{children}</main>
        <Footer />
        <FloatingAudioPlayer />
      </body>
    </html>
  );
}
