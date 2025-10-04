import { Button } from "@/components/ui/button"
import { ArrowRight, CheckCircle } from "lucide-react"

export function HeroSection() {
  return (
    <section className="pt-32 pb-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-block mb-4 px-4 py-1.5 bg-accent/10 text-accent rounded-full text-sm font-medium">
              Работаем с 2010 года
            </div>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 text-balance leading-tight">
              Качественный бетон с доставкой
            </h1>

            <p className="text-lg text-muted-foreground mb-8 text-pretty leading-relaxed">
              Производство и поставка бетона всех марок. Собственный автопарк, гарантия качества, доставка 24/7 по
              городу и области.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground">
                Рассчитать стоимость
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
              <Button size="lg" variant="outline">
                Наши проекты
              </Button>
            </div>

            <div className="flex flex-col gap-3">
              <div className="flex items-center gap-2 text-sm">
                <CheckCircle className="w-5 h-5 text-accent" />
                <span>Сертифицированная продукция</span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <CheckCircle className="w-5 h-5 text-accent" />
                <span>Доставка в день заказа</span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <CheckCircle className="w-5 h-5 text-accent" />
                <span>Гибкая система скидок</span>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="aspect-square rounded-2xl bg-gradient-to-br from-muted to-muted/50 overflow-hidden">
              <img src="/concrete-mixer-truck.png" alt="Бетономешалка" className="w-full h-full object-cover" />
            </div>
            <div className="absolute -bottom-6 -left-6 bg-card p-6 rounded-xl shadow-lg border border-border">
              <div className="text-4xl font-bold text-accent mb-1">500+</div>
              <div className="text-sm text-muted-foreground">Довольных клиентов</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
