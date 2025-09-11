"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Phone, Mail, MapPin, Clock, Truck, Factory, Shield, DollarSign, Wrench, X } from "lucide-react"
import Head from "next/head"

export default function LiderBetonPage() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    message: "",
  })

  const [selectedAdvantage, setSelectedAdvantage] = useState<string | null>(null)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const subject = encodeURIComponent("Заявка с сайта Лидер Бетон")
    const body = encodeURIComponent(`
Имя: ${formData.name}
Телефон: ${formData.phone}
Комментарий: ${formData.message}
    `)
    window.location.href = `mailto:lider360@bk.ru?subject=${subject}&body=${body}`

    alert("Спасибо за ваше сообщение! Мы свяжемся с вами в ближайшее время.")
    setFormData({ name: "", phone: "", message: "" })
  }

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      const navHeight = 80 // высота навигационной панели
      const elementRect = element.getBoundingClientRect()
      const absoluteElementTop = elementRect.top + window.pageYOffset
      const targetPosition = Math.max(0, absoluteElementTop - navHeight) // Убедимся что позиция не отрицательная

      window.scrollTo({
        top: targetPosition,
        behavior: "smooth",
      })
    }
  }

  const advantages = [
    {
      id: "production",
      title: "Собственное производство",
      icon: Factory,
      description:
        "Весь бетон производится на современном, технологичном оборудовании в соответствии с положениями ГОСТа. Производственные мощности выпускают до 60 м3 продукции в час. Все компоненты отличаются достойным качеством и экологичностью. Наша компания производит бетон с широким диапазоном эксплуатационных характеристик.",
    },
    {
      id: "gost",
      title: "Соблюдение требований и норм ГОСТа",
      icon: Shield,
      description:
        "Все смеси сертифицированы. Аттестованная лаборатория осуществляет контроль качества продукции. Благодаря профессионализму специалистов достигается высочайший уровень технологий, позволяющий получать композиционный материал с заранее заданными уникальными свойствами. Экспертная группа завода тщательно подходят к выбору сырья и химических добавок, предоставляющих возможность производить бетон самого высокого качества.",
    },
    {
      id: "prices",
      title: "Приемлемые цены",
      icon: DollarSign,
      description:
        "Благодаря закупке сырья напрямую с заводов изготовителей, а также наличию собственного автопарка, своим клиентам мы предлагаем продукцию самого высокого качества по доступной цене.",
    },
    {
      id: "delivery",
      title: "Доставка бетона собственным транспортом",
      icon: Truck,
      description:
        "Собственный автопарк новых импортных АБС (автобетоносмесителей) позволяет нам доставлять бетон заказчику (до 90 км.) с сохранением его качественных характеристик.",
    },
    {
      id: "pumps",
      title: "Бетононасосы",
      icon: Wrench,
      description:
        "Собственные бетононасосы (26-52м.) позволяют перекачать большой объём бетона за короткий срок в стесненных условиях. Благодаря этому наши клиенты экономят время и деньги на укладке бетона.",
    },
  ]

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
              <button
                type="button"
                onClick={() => scrollToSection("map")}
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                Карта
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
          <p className="text-xl md:text-2xl mb-2 max-w-4xl mx-auto text-pretty leading-relaxed drop-shadow-md">
            Ведущий производитель бетона для тех, кто ценит качество
          </p>

          <h3 className="text-2xl md:text-3xl font-bold mb-4 text-white bg-black/50 backdrop-blur-sm rounded-lg px-6 py-3 inline-block shadow-lg">
            Информация о нас
          </h3>

          <p className="text-base md:text-lg mb-8 max-w-4xl mx-auto text-pretty leading-relaxed drop-shadow-md">
            Производственная компания «ЛИДЕР» является производителем бетонных смесей, ориентированным на строительный
            рынок Каневского района + 90 км. Мы предлагаем качественный бетон на выгодных условиях, долгосрочное
            сотрудничество и гарантию качества всей поставляемой продукции.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              variant="outline"
              className="border-2 border-white text-white hover:bg-white hover:text-primary text-lg px-8 py-6 bg-black/20 backdrop-blur-sm shadow-lg"
              onClick={() => scrollToSection("contact")}
            >
              <Phone className="mr-2 h-5 w-5" />
              Позвонить нам
            </Button>
          </div>
        </div>
      </section>

      {/* Advantages Section */}
      <section id="advantages" className="py-16 bg-muted">
        <div className="container mx-auto px-4">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-center mb-12 text-primary">
            Наши преимущества
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto justify-items-center">
            {advantages.slice(0, 3).map((advantage) => {
              const IconComponent = advantage.icon
              return (
                <Card
                  key={advantage.id}
                  className="text-center hover:shadow-lg transition-shadow cursor-pointer flex flex-col h-full w-full max-w-sm"
                >
                  <CardHeader>
                    <div className="mx-auto w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mb-4">
                      <IconComponent className="h-8 w-8 text-accent" />
                    </div>
                    <CardTitle className="text-xl">{advantage.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="flex-1 flex flex-col justify-end p-6">
                    <Button
                      variant="outline"
                      className="w-full bg-transparent mt-auto"
                      onClick={() => setSelectedAdvantage(advantage.id)}
                    >
                      Подробнее
                    </Button>
                  </CardContent>
                </Card>
              )
            })}
          </div>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto justify-items-center mt-8">
            {advantages.slice(3).map((advantage) => {
              const IconComponent = advantage.icon
              return (
                <Card
                  key={advantage.id}
                  className="text-center hover:shadow-lg transition-shadow cursor-pointer flex flex-col h-full w-full max-w-sm"
                >
                  <CardHeader>
                    <div className="mx-auto w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mb-4">
                      <IconComponent className="h-8 w-8 text-accent" />
                    </div>
                    <CardTitle className="text-xl">{advantage.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="flex-1 flex flex-col justify-end p-6">
                    <Button
                      variant="outline"
                      className="w-full bg-transparent mt-auto"
                      onClick={() => setSelectedAdvantage(advantage.id)}
                    >
                      Подробнее
                    </Button>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {selectedAdvantage && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-background rounded-lg max-w-2xl w-full max-h-[80vh] overflow-y-auto">
            <div className="p-6">
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-2xl font-bold text-primary">
                  {advantages.find((a) => a.id === selectedAdvantage)?.title}
                </h3>
                <button
                  onClick={() => setSelectedAdvantage(null)}
                  className="text-muted-foreground hover:text-foreground"
                >
                  <X className="h-6 w-6" />
                </button>
              </div>
              <p className="text-muted-foreground leading-relaxed">
                {advantages.find((a) => a.id === selectedAdvantage)?.description}
              </p>
              <div className="mt-6 flex justify-end">
                <Button onClick={() => setSelectedAdvantage(null)}>Закрыть</Button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Contact Section */}
      <section id="contact" className="py-16 bg-muted">
        <div className="container mx-auto px-4">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-center mb-12 text-primary">Контакты</h2>
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold mb-6">Свяжитесь с нами</h3>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <Label htmlFor="name">Имя</Label>
                    <Input
                      id="name"
                      type="text"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      required
                      placeholder="Ваше имя"
                    />
                  </div>
                  <div>
                    <Label htmlFor="phone">Телефон</Label>
                    <Input
                      id="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      required
                      placeholder="+7 (___) ___-__-__"
                    />
                  </div>
                  <div>
                    <Label htmlFor="message">Комментарий</Label>
                    <Textarea
                      id="message"
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Ваш комментарий или вопрос"
                      rows={4}
                    />
                  </div>
                  <Button type="submit" className="w-full">
                    Отправить сообщение
                  </Button>
                </form>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-6">Контактная информация</h3>
                <div className="space-y-6">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center">
                      <Phone className="h-6 w-6 text-accent" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-lg">Телефон</h4>
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
                      <h4 className="font-semibold text-lg">Email</h4>
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
                      <h4 className="font-semibold text-lg">Режим работы</h4>
                      <p className="text-muted-foreground">Пн-Пт: 8:00 - 18:00</p>
                    </div>
                  </div>

                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center">
                      <MapPin className="h-6 w-6 text-accent" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-lg">Адрес</h4>
                      <p className="text-muted-foreground">Россия, ст. Каневская, ул. Широкая, д. 247</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section - Перенес карту в самый низ */}
      <section id="map" className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-center mb-12 text-primary">Мы на карте</h2>
          <div className="max-w-4xl mx-auto">
            <div className="bg-card rounded-lg overflow-hidden shadow-lg">
              <iframe
                src="https://yandex.ru/map-widget/v1/?um=constructor%3A72227188635&amp;source=constructor&ll=39.017399%2C46.078879&z=16&pt=39.017399,46.078879,pm2rdm"
                width="100%"
                height="400"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
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
    </div>
  )
}
