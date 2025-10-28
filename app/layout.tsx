import type React from "react"
import type { Metadata } from "next"
import { Suspense } from "react"
import { Inter } from "next/font/google"
import { Montserrat } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { ThemeProvider } from "@/components/theme-provider"
import "./globals.css"

const inter = Inter({
  subsets: ["latin", "cyrillic"],
  variable: "--font-inter",
  display: "swap",
  preload: true,
})

const montserrat = Montserrat({
  subsets: ["latin", "cyrillic"],
  variable: "--font-montserrat",
  display: "swap",
  preload: true,
})

export const metadata: Metadata = {
  title: "Производство бетона в Каневской | Доставка по Краснодарскому краю | ЛидерБетон360",
  description:
    "Бетон с доставкой в станице Каневской. Цена от производителя, миксеры любой вместимости. Рассчитайте стоимость бетона М300, М200 для фундамента.",
  keywords:
    "бетон каневская, бетонный завод каневская, купить бетон каневская, бетон с доставкой каневская, бетон от производителя, товарный бетон, бетон М100, бетон М150, бетон М200, бетон М250, бетон М300, бетон М350, бетон для фундамента, цена бетона с доставкой, заказать бетон каневская, краснодарский край",
  authors: [{ name: "ЛидерБетон360" }],
  creator: "ЛидерБетон360",
  publisher: "ЛидерБетон360",
  robots: "index, follow",
  openGraph: {
    title: "Производство бетона в Каневской | Доставка по Краснодарскому краю | ЛидерБетон360",
    description: "Бетон с доставкой в станице Каневской. Цена от производителя, миксеры любой вместимости.",
    url: "https://liderbeton360.ru",
    siteName: "ЛидерБетон360",
    locale: "ru_RU",
    type: "website",
    images: [
      {
        url: "/images/concrete-plant-bg-new.jpg",
        width: 1200,
        height: 630,
        alt: "Бетонный завод ЛидерБетон360 в Каневской",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Производство бетона в Каневской | ЛидерБетон360",
    description: "Бетон с доставкой в станице Каневской и по Краснодарскому краю.",
    images: ["/images/concrete-plant-bg-new.jpg"],
  },
  alternates: {
    canonical: "https://liderbeton360.ru",
  },
  verification: {
    google: "google0f75360bd88b39a0",
    yandex: "7134ed7c0457b85b",
  },
    generator: 'v0.app'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ru" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              name: "ЛидерБетон360",
              address: {
                "@type": "PostalAddress",
                addressLocality: "станица Каневская",
                addressRegion: "Краснодарский край",
                streetAddress: "ул. Широкая, д. 247",
                addressCountry: "RU",
              },
              telephone: "+7-918-360-10-10",
              areaServed: "Краснодарский край",
              description: "Производство и доставка бетона в станице Каневской и по Краснодарскому краю.",
              url: "https://liderbeton360.ru",
              openingHours: "Mo-Sa 08:00-18:00",
              priceRange: "$$",
            }),
          }}
        />
      </head>
      <body className={`font-sans ${inter.variable} ${montserrat.variable}`}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
          <Suspense fallback={null}>{children}</Suspense>
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  )
}
