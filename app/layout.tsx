import Script from "next/script";
import type { Metadata } from 'next'
import { Playfair_Display, DM_Sans } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const playfair = Playfair_Display({ 
  subsets: ["latin"],
  variable: '--font-serif',
  display: 'swap',
});

const dmSans = DM_Sans({ 
  subsets: ["latin"],
  variable: '--font-sans',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Sun\'s Nail Studio | Private Nail Studio in Wilmington, NC',
  description: 'Wilmington, NC\'s private nail studio. No rush, no crowds — just Sun and you, creating nails you\'ll love. Book your appointment today.',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${playfair.variable} ${dmSans.variable}`}>
  <body className="font-sans antialiased bg-background">
    <Script
      src="https://www.googletagmanager.com/gtag/js?id=G-KEDRSS698Y"
      strategy="afterInteractive"
    />
    <Script id="google-analytics" strategy="afterInteractive">
      {`
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', 'G-KEDRSS698Y');
      `}
    </Script>

    {children}
    {process.env.NODE_ENV === "production" && <Analytics />}
  </body>
</html>
  )
}
