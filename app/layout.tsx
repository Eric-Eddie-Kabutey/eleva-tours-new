import { Geist, Geist_Mono } from "next/font/google";
import { fontRoboto, fontPlayfair, fontDancingScript } from '@/lib/fonts';
import "./globals.css";
import { generateMetadata } from "./metadata";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = generateMetadata({
  title: "Eleva Tour | Discover the World with Unforgettable Travel Experiences",
  description:
    "Elava Tour brings you closer to the world’s most breathtaking destinations with personalized travel packages, guided tours, and unforgettable adventures designed just for you.",
  url: "/",
});

const OrganizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Eleva Tour",
  "url": "https://www.elavatour.com",
  "logo": "https://elavatour.s3.amazonaws.com/images/elavatour-logo.png",
  "sameAs": [
    "https://www.instagram.com/elavatour",
    "https://www.facebook.com/elavatour",
    "https://x.com/elavatour",
    "https://www.linkedin.com/company/elavatour"
  ],
  "description":
    "Elava Tour is your trusted travel partner, offering unforgettable experiences through curated tours, adventure trips, and cultural explorations around the world.",
  "foundingDate": "2020",
  "founder": {
    "@type": "Person",
    "name": "Eleva Tour Team"
  },
  "contactPoint": {
    "@type": "ContactPoint",
    "telephone": "+233-XXX-XXX-XXX",
    "contactType": "Customer Service",
    "areaServed": "Worldwide",
    "availableLanguage": ["English"]
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(OrganizationSchema) }}
        />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} ${fontRoboto.variable} ${fontPlayfair.variable} ${fontDancingScript.variable} antialiased`}>
          <Header />
          {children}                    
          <Footer />
      </body>
    </html>
  );
}
