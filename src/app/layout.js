import { Inter, Outfit } from 'next/font/google';
import './globals.css';
import Header from '../Components/layouts/Header';
import Footer from '../Components/layouts/Footer';
import { Toaster } from 'react-hot-toast';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
});

const outfit = Outfit({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-outfit',
});

export const metadata = {
  title: 'Yogesh Chavan | Software Engineer & Full Stack Developer Portfolio',
  description: 'Yogesh Chavan is a Full Stack Developer and Software Engineer specializing in building scalable web applications with React, Node.js, and modern technologies. Explore the portfolio of Yogesh Chavan to see his latest projects and work experience.',
  keywords: 'Yogesh Chavan, Yogesh Chavan Developer, Yogesh Chavan Portfolio, Software Engineer Yogesh Chavan, Full Stack Developer India, Yogesh Chavan React Developer',
  authors: [{ name: 'Yogesh Chavan' }],
  icons: {
    icon: '/logo.png',
    shortcut: '/logo.png',
    apple: '/logo.png',
  },
  openGraph: {
    title: 'Yogesh Chavan | Software Engineer & Full Stack Developer Portfolio',
    description: 'Explore the expert portfolio of Yogesh Chavan, a Software Engineer and Full Stack Developer building scalable, high-performance web applications.',
    url: 'https://yogeshchavan.in/',
    siteName: 'Yogesh Chavan Portfolio',
    images: [
      {
        url: 'https://yogeshchavan.in/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Yogesh Chavan - Software Engineer & Full Stack Developer Portfolio',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Yogesh Chavan | Software Engineer & Full Stack Developer Portfolio',
    description: 'Professional portfolio and case studies of Yogesh Chavan, a Full Stack Developer and Software Engineer.',
    images: ['https://yogeshchavan.in/og-image.png'],
    creator: '@YogeshChavan',
  },
  alternates: {
    canonical: 'https://yogeshchavan.in',
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
  verification: {
    google: 'UBHmZkftZG1VqbZC7JsSqm0aFGE9xDTKMpSWvSSqdGw',
  },
};

import { Providers } from '../Components/Providers';

export default function RootLayout({ children }) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Person",
    "@id": "https://yogeshchavan.in/#person",
    "name": "Yogesh Chavan",
    "url": "https://yogeshchavan.in",
    "image": "https://yogeshchavan.in/logo.png",
    "sameAs": [
      "https://github.com/Yogesh100-design/",
      "https://www.linkedin.com/in/yogesh-chavan-494196316/"
    ],
    "jobTitle": "Software Engineer & Full Stack Developer",
    "worksFor": {
      "@type": "Organization",
      "name": "Freelance"
    },
    "address": {
      "@type": "PostalAddress",
      "addressCountry": "India"
    },
    "knowsAbout": [
      "React",
      "Node.js",
      "MongoDB",
      "Cloudinary",
      "Full Stack Development",
      "Web Performance Optimization"
    ],
    "description": "I specialize in full-stack architecture, crafting high-performance web applications that bridge the gap between complex engineering and intuitive user experience."
  };

  return (
    <html lang="en" className={`${inter.variable} ${outfit.variable} scroll-smooth`} suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </head>
      <body suppressHydrationWarning>
        <Providers>
          <div className="min-h-screen bg-stone-50">
            <Toaster position="bottom-right" />
            <Header />
            <main>{children}</main>
            <Footer />
          </div>
        </Providers>
      </body>
    </html>
  );
}
