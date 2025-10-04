import { Card } from "@/components/ui/card"
import { Truck, Clock, Shield, Headphones } from "lucide-react"

const services = [
  {
    icon: Truck,
    title: "Доставка 24/7",
    description: "Собственный автопарк из 20+ миксеров. Доставим бетон в любое время суток.",
  },
  {
    icon: Clock,
    title: "Быстрое производство",
    description: "Современное оборудование позволяет производить до 500 м³ бетона в сутки.",
  },
  {
    icon: Shield,
    title: "Гарантия качества",
    description: "Все партии проходят лабораторный контроль. Предоставляем сертификаты.",
  },
  {
    icon: Headphones,
    title: "Поддержка 24/7",
    description: "Наши специалисты помогут подобрать марку бетона и рассчитать объем.",
  },
]

export function ServicesSection() {
  return (
    <section id="services" className="py-20 px-4 bg-muted/30">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-balance">Почему выбирают нас</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            Мы предлагаем полный цикл услуг от производства до доставки бетона на объект
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <Card key={index} className="p-6 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mb-4">
                <service.icon className="w-6 h-6 text-accent" />
              </div>
              <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{service.description}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
