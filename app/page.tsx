"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Truck,
  Settings,
  Calculator,
  CheckCircle,
  Award,
  FileText,
  Clipboard,
  ArrowUp,
} from "lucide-react"
import Head from "next/head"

export default function LiderBetonPage() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    message: "",
  })

  const [showScrollTop, setShowScrollTop] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    console.log("Form submitted:", formData)
    alert("Спасибо за ваше сообщение! Мы свяжемся с вами в ближайшее время.")
    setFormData({ name: "", phone: "", message: "" })
  }

  const scrollToBottom = () => {
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: "smooth",
    })
  }

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    })
  }

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      const navHeight = 80 // высота навигационной панели
      const elementRect = element.getBoundingClientRect()
      const absoluteElementTop = elementRect.top + window.pageYOffset
      const targetPosition = absoluteElementTop - navHeight

      window.scrollTo({
        top: targetPosition,
        behavior: "smooth",
      })
    }
  }

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "Лидер Бетон",
    description:
      "Производство и доставка бетона всех марок в Каневской. Бетонный завод с собственным автопарком миксеров и бетононасосов.",
    url: "https://lider-beton.vercel.app",
    telephone: "+7-918-360-10-10",
    email: "lider360@bk.ru",
    address: {
      "@type": "PostalAddress",
      streetAddress: "ул. Широкая, д. 247",
      addressLocality: "ст. Каневская",
      addressCountry: "RU",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: "46.0833",
      longitude: "38.9167",
    },
    openingHours: "Mo-Fr 08:00-18:00",
    priceRange: "$$",
    areaServed: "Каневская и окрестности до 90 км",
    serviceType: "Производство и доставка бетона",
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Бетон и строительные материалы",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Product",
            name: "Товарный бетон всех марок (М100, М150, М200, М250, М300, М350)",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Product",
            name: "Цементный раствор для кладки и штукатурки",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Product",
            name: "Фундаментные блоки ФБС",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Product",
            name: "Щебень и песок с доставкой",
          },
        },
      ],
    },
  }

  return (
    <div className="min-h-screen bg-background">
      <Head>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
      </Head>

      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-background/95 backdrop-blur-sm border-b border-border z-50">
        <div className="container mx-auto px-4 py-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <img
                src="/images/lider-beton-logo-new.png"
                alt="Лидер Бетон - Бетонный завод в Каневской"
                className="h-8 w-auto"
              />
              <div className="font-heading font-bold text-lg md:text-xl text-primary">ЛИДЕР БЕТОН</div>
            </div>
            <div className="hidden md:flex space-x-6">
              <button
                type="button"
                onClick={() => scrollToSection("hero")}
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                Главная
              </button>
              <button
                type="button"
                onClick={() => scrollToSection("map")}
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                Карта
              </button>
              <button
                type="button"
                onClick={() => scrollToSection("prices")}
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                Цены
              </button>
              <button
                type="button"
                onClick={() => scrollToSection("advantages")}
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                Преимущества
              </button>
              <button
                type="button"
                onClick={() => scrollToSection("contact")}
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                Контакты
              </button>
            </div>
            <div className="flex items-center space-x-1 md:space-x-2">
              <span className="hidden lg:inline text-sm text-muted-foreground">Лидер Бетон:</span>
              <a
                href="tel:89183601010"
                className="text-accent font-semibold hover:text-accent/80 transition-colors text-sm md:text-base whitespace-nowrap"
              >
                8 (918) 360-10-10
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="hero" className="hero-bg min-h-screen flex items-center justify-center text-white">
        <div className="container mx-auto px-4 text-center">
          <div className="flex items-center justify-center mb-6">
            <img
              src="/images/lider-beton-logo-new.png"
              alt="Лидер Бетон - Производство бетона в Каневской"
              className="h-16 md:h-20 w-auto mr-4"
            />
            <h1 className="font-heading text-3xl md:text-6xl lg:text-7xl font-bold text-balance drop-shadow-lg">
              ЛИДЕР БЕТОН
            </h1>
          </div>
          <p className="text-xl md:text-2xl mb-6 max-w-4xl mx-auto text-pretty leading-relaxed drop-shadow-md">
            Мы поможем вам выбрать качественную марку бетона по доступной цене!
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto mb-8">
            <div className="flex items-center justify-center space-x-2 bg-black/20 backdrop-blur-sm rounded-lg p-3">
              <CheckCircle className="h-5 w-5 text-accent" />
              <span className="text-sm md:text-base font-medium">Работаем строго по ГОСТу</span>
            </div>
            <div className="flex items-center justify-center space-x-2 bg-black/20 backdrop-blur-sm rounded-lg p-3">
              <Award className="h-5 w-5 text-accent" />
              <span className="text-sm md:text-base font-medium">Сертификаты качества</span>
            </div>
            <div className="flex items-center justify-center space-x-2 bg-black/20 backdrop-blur-sm rounded-lg p-3">
              <FileText className="h-5 w-5 text-accent" />
              <span className="text-sm md:text-base font-medium">Протокол испытания</span>
            </div>
            <div className="flex items-center justify-center space-x-2 bg-black/20 backdrop-blur-sm rounded-lg p-3">
              <Clipboard className="h-5 w-5 text-accent" />
              <span className="text-sm md:text-base font-medium">Карты подбора</span>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-accent text-accent-foreground hover:bg-accent/90 text-lg px-8 py-6 shadow-lg"
              onClick={scrollToBottom}
            >
              <Calculator className="mr-2 h-5 w-5" />
              Рассчитать стоимость
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-2 border-white text-white hover:bg-white hover:text-primary text-lg px-8 py-6 bg-black/20 backdrop-blur-sm shadow-lg"
              onClick={scrollToBottom}
            >
              <Phone className="mr-2 h-5 w-5" />
              Позвонить нам
            </Button>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section id="map" className="py-16 bg-muted">
        <div className="container mx-auto px-4">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-center mb-12 text-primary">
            География поставок бетона в Каневской
          </h2>
          <div className="max-w-4xl mx-auto">
            <div className="bg-card rounded-lg overflow-hidden shadow-lg">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2734.5!2d38.9167!3d46.0833!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40f0b1234567890a%3A0x1234567890abcdef!2z0YPQuy4g0KjQuNGA0L7QutCw0Y8sIDI0Nywg0KHRgtCw0L3QuNGG0LAg0JrQsNC90LXQstGB0LrQsNGPLCDQmtGA0LDRgdC90L7QtNCw0YDRgdC60LjQuSDQutGA0LDQuSwgUlU!5e0!3m2!1sru!2sru!4v1234567890123&markers=color:red%7Clabel:Л%7C46.0833,38.9167"
                width="100%"
                height="400"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Карта расположения Лидер Бетон"
              />
            </div>
            <div className="text-center mt-6">
              <p className="text-muted-foreground flex items-center justify-center">
                <MapPin className="mr-2 h-5 w-5" />
                Россия, ст. Каневская, ул. Широкая, д. 247
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Products/Prices Section */}
      <section id="prices" className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-center mb-12 text-primary">
            Прайс-лист на бетон и строительные материалы
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="hover:shadow-lg transition-shadow flex flex-col">
              <CardHeader>
                <CardTitle className="text-xl">Бетон всех марок</CardTitle>
                <CardDescription>
                  Бетон М100, М150, М200, М250, М300, М350 для фундамента, стяжки, строительства
                </CardDescription>
              </CardHeader>
              <CardContent className="flex-1 flex flex-col">
                <div className="text-2xl font-bold text-accent mb-4">от 5 000 ₽/м³</div>
                <Button className="w-full bg-transparent mt-auto" variant="outline" onClick={scrollToBottom}>
                  Подробнее
                </Button>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow flex flex-col">
              <CardHeader>
                <CardTitle className="text-xl">Строительные растворы</CardTitle>
                <CardDescription>Качественные кладочные и штукатурные растворы по ГОСТу</CardDescription>
              </CardHeader>
              <CardContent className="flex-1 flex flex-col">
                <div className="text-2xl font-bold text-accent mb-4">от 5 500 ₽/м³</div>
                <Button className="w-full bg-transparent mt-auto" variant="outline" onClick={scrollToBottom}>
                  Подробнее
                </Button>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow flex flex-col">
              <CardHeader>
                <CardTitle className="text-xl">Фундаментные блоки</CardTitle>
                <CardDescription>Прочные и надежные блоки для устройства фундаментов</CardDescription>
              </CardHeader>
              <CardContent className="flex-1 flex flex-col">
                <div className="text-2xl font-bold text-accent mb-4">от 3 000 ₽/шт</div>
                <Button className="w-full bg-transparent mt-auto" variant="outline" onClick={scrollToBottom}>
                  Подробнее
                </Button>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow flex flex-col">
              <CardHeader>
                <CardTitle className="text-xl">Щебень и песок</CardTitle>
                <CardDescription>Доставка нерудных материалов самосвалами</CardDescription>
              </CardHeader>
              <CardContent className="flex-1 flex flex-col">
                <div className="text-2xl font-bold text-accent mb-4">от 1 500 ₽/т</div>
                <Button className="w-full bg-transparent mt-auto" variant="outline" onClick={scrollToBottom}>
                  Подробнее
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Advantages Section */}
      <section id="advantages" className="py-16 bg-muted">
        <div className="container mx-auto px-4">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-center mb-12 text-primary">
            Преимущества бетонного завода Лидер Бетон
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
            <Card className="text-center hover:shadow-lg transition-shadow flex flex-col">
              <CardHeader>
                <div className="mx-auto w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mb-4">
                  <Settings className="h-8 w-8 text-accent" />
                </div>
                <CardTitle className="text-xl">Высокая производительность</CardTitle>
              </CardHeader>
              <CardContent className="flex-1 flex flex-col">
                <CardDescription className="text-pretty mb-4 flex-1">
                  Высокая производительность нашего завода позволяет делать отгрузку бетона очень быстро (1мин=1 м³)
                </CardDescription>
                <Button className="w-full bg-transparent mt-auto" variant="outline" onClick={scrollToBottom}>
                  Подробнее
                </Button>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow flex flex-col">
              <CardHeader>
                <div className="mx-auto w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mb-4">
                  <Truck className="h-8 w-8 text-accent" />
                </div>
                <CardTitle className="text-xl">Собственный автопарк</CardTitle>
              </CardHeader>
              <CardContent className="flex-1 flex flex-col">
                <CardDescription className="text-pretty mb-4 flex-1">
                  Собственный автопарк миксеров и бетононасосов
                </CardDescription>
                <Button className="w-full bg-transparent mt-auto" variant="outline" onClick={scrollToBottom}>
                  Подробнее
                </Button>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow flex flex-col">
              <CardHeader>
                <div className="mx-auto w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mb-4">
                  <Calculator className="h-8 w-8 text-accent" />
                </div>
                <CardTitle className="text-xl">Конкурентные цены</CardTitle>
              </CardHeader>
              <CardContent className="flex-1 flex flex-col">
                <CardDescription className="text-pretty mb-4 flex-1">
                  Предлагаем лучшие цены на рынке без ущерба качеству продукции
                </CardDescription>
                <Button className="w-full bg-transparent mt-auto" variant="outline" onClick={scrollToBottom}>
                  Подробнее
                </Button>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow flex flex-col">
              <CardHeader>
                <div className="mx-auto w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mb-4">
                  <MapPin className="h-8 w-8 text-accent" />
                </div>
                <CardTitle className="text-xl">Быстрая доставка</CardTitle>
              </CardHeader>
              <CardContent className="flex-1 flex flex-col">
                <CardDescription className="text-pretty mb-4 flex-1">
                  Бетон всех марок с быстрой доставкой в ст.Каневской и её окрестностях (до 90 км)
                </CardDescription>
                <Button className="w-full bg-transparent mt-auto" variant="outline" onClick={scrollToBottom}>
                  Подробнее
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 bg-muted">
        <div className="container mx-auto px-4">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-center mb-12 text-primary">Контакты</h2>
          <div className="max-w-2xl mx-auto">
            <div className="grid gap-8">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center">
                  <Phone className="h-6 w-6 text-accent" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg">Телефон</h3>
                  <a href="tel:89183601010" className="text-accent hover:text-accent/80 transition-colors text-lg">
                    8 (918) 360-10-10
                  </a>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center">
                  <Mail className="h-6 w-6 text-accent" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg">Email</h3>
                  <a
                    href="mailto:lider360@bk.ru"
                    className="text-accent hover:text-accent/80 transition-colors text-lg"
                  >
                    lider360@bk.ru
                  </a>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center">
                  <Clock className="h-6 w-6 text-accent" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg">Режим работы</h3>
                  <p className="text-muted-foreground">Пн-Пт: 8:00 - 18:00</p>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center">
                  <MapPin className="h-6 w-6 text-accent" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg">Адрес</h3>
                  <p className="text-muted-foreground">Россия, ст. Каневская, ул. Широкая, д. 247</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-primary text-primary-foreground py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <p>&copy; 2024 Лидер Бетон. Все права защищены.</p>
            </div>
            <div className="flex items-center space-x-4">
              <Phone className="h-5 w-5" />
              <a href="tel:89183601010" className="hover:text-accent transition-colors">
                8 (918) 360-10-10
              </a>
            </div>
          </div>
        </div>
      </footer>

      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 w-12 h-12 bg-accent text-accent-foreground rounded-full shadow-lg hover:bg-accent/90 transition-all duration-300 flex items-center justify-center z-50"
          aria-label="Прокрутить наверх"
        >
          <ArrowUp className="h-5 w-5" />
        </button>
      )}
    </div>
  )
}
