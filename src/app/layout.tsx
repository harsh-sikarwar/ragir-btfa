import type { Metadata } from "next";
import { Poppins, Barlow } from "next/font/google"; 
import "./globals.css";

// Optimized font loading with display swap for better performance
const poppins = Poppins({
  variable: "--font-poppins",
  weight: ["400", "500", "600"],
  subsets: ["latin"],
  display: "swap", // Improves loading performance
});

const barlow = Barlow({
  variable: "--font-barlow",
  weight: ["400", "500", "700"],
  subsets: ["latin"],
  style: ["normal", "italic"],
  display: "swap", // Improves loading performance
});

// Comprehensive SEO metadata
export const metadata: Metadata = {
  title: {
    default: "Ragir - India's First Group Trip Platform",
    template: "%s | Ragir"
  },
  description: "Ragir is India's first search and discovery platform exclusively for fixed departure group trips. Connect trip organizers with travelers, grow your community, and discover amazing group adventures.",
  keywords: ["group trips", "travel", "adventure", "trek", "expedition", "tour organizer", "India travel", "group travel", "fixed departure"],
  authors: [{ name: "Ragir Team" }],
  creator: "Ragir",
  publisher: "Ragir",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://ragir.com'), // Replace with your actual domain
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: "Ragir - India's First Group Trip Platform",
    description: "Connect with trip organizers and discover amazing group adventures across India. Join the community of travelers and organizers.",
    url: 'https://ragir.com', // Replace with your actual domain
    siteName: 'Ragir',
    images: [
      {
        url: '/hero.png',
        width: 1200,
        height: 630,
        alt: 'Ragir - Group Trip Platform',
      },
    ],
    locale: 'en_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "Ragir - India's First Group Trip Platform",
    description: "Connect with trip organizers and discover amazing group adventures across India.",
    images: ['/hero.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  viewport: {
    width: 'device-width',
    initialScale: 1,
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
        className={`${poppins.variable} ${barlow.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
