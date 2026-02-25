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
  metadataBase: new URL('https://yogeshchavan.in'),
  title: {
    default: 'Yogesh Chavan | Full-Stack Software Engineer & Technical Expert',
    template: '%s | Yogesh Chavan'
  },
  description: 'Official portfolio of Yogesh Chavan. A Full-Stack Software Engineer specializing in building scalable, secure, and ultra-high-performance web applications with Next.js and MERN.',
  keywords: ['Yogesh Chavan', 'Yogesh Chavan Portfolio', 'Software Engineer India', 'Full Stack Developer', 'React Expert', 'Next.js Specialist', 'Yogesh Chavan Developer', 'Best Developer in India'],
  authors: [{ name: 'Yogesh Chavan' }],
  creator: 'Yogesh Chavan',
  publisher: 'Yogesh Chavan',
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Yogesh Chavan | Full-Stack Software Engineer',
    description: 'Building the future of the web with clean architecture and modern engineering.',
    url: 'https://yogeshchavan.in/',
    siteName: 'Yogesh Chavan Portfolio',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Yogesh Chavan Portfolio',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Yogesh Chavan | Software Engineer',
    description: 'Full-Stack Developer focused on high-performance web systems.',
    images: ['/og-image.png'],
    creator: '@YogeshChavan',
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
  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    "@id": "https://yogeshchavan.in/#person",
    "name": "Yogesh Chavan",
    "alternateName": "Yogesh D. Chavan",
    "url": "https://yogeshchavan.in",
    "image": "https://yogeshchavan.in/logo.png",
    "description": "Software Engineer specializing in full-stack architecture and high-performance web applications.",
    "jobTitle": "Full-Stack Software Engineer",
    "knowsAbout": [
      "Software Engineering",
      "Web Development",
      "React.js",
      "Next.js",
      "Node.js",
      "Cloud Infrastructure",
      "User Experience Design"
    ],
    "sameAs": [
      "https://github.com/Yogesh100-design/",
      "https://www.linkedin.com/in/yogesh-chavan-494196316/",
      "https://twitter.com/YogeshChavan",
      "https://instagram.com/YogeshChavan"
    ]
  };


  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "Yogesh Chavan Portfolio",
    "url": "https://yogeshchavan.in",
    "potentialAction": {
      "@type": "SearchAction",
      "target": "https://yogeshchavan.in/search?q={search_term_string}",
      "query-input": "required name=search_term_string"
    }
  };

  return (
    <html lang="en" className={`${inter.variable} ${outfit.variable} scroll-smooth`} suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
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
