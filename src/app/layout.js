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
  title: 'Yogesh Chavan - Software Engineer & Full Stack Developer',
  description: 'Official Portfolio of Yogesh Chavan. A Software Engineer and Full Stack Developer building scalable web applications with React, Node.js, and modern tech.',
  keywords: 'Yogesh Chavan, Yogesh Developer, Yogesh Chavan Portfolio',
  authors: [{ name: 'Yogesh Chavan' }],
  icons: {
    icon: '/logo.png',
  },
  openGraph: {
    title: 'Yogesh Chavan | Software Engineer & Full Stack Developer',
    description: 'Official Portfolio of Yogesh Chavan. A Software Engineer and Full Stack Developer building scalable web applications.',
    url: 'https://yogeshchavan.in/',
    siteName: 'Yogesh Chavan Portfolio',
    images: [
      {
        url: 'https://yogeshchavan.in/og-image.png',
        width: 1200,
        height: 630,
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Yogesh Chavan | Software Engineer & Full Stack Developer',
    description: 'Official Portfolio of Yogesh Chavan. A Software Engineer and Full Stack Developer building scalable web applications.',
    images: ['https://yogeshchavan.in/og-image.png'],
  },
  alternates: {
    canonical: 'https://yogeshchavan.in',
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
