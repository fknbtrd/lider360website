import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

const products = [
  {
    grade: "М100-М150",
    usage: "Подготовительные работы",
    price: "от 3 200 ₽/м³",
    features: ["Заливка полов", "Дорожки", "Стяжка"],
  },
  {
    grade: "М200-М250",
    usage: "Фундаменты и стены",
    price: "от 3 800 ₽/м³",
    features: ["Ленточный фундамент", "Стены", "Перекрытия"],
    popular: true,
  },
  {
    grade: "М300-М350",
    usage: "Монолитное строительство",
    price: "от 4 200 ₽/м³",
    features: ["Колонны", "Балки", "Плиты перекрытия"],
  },
  {
    grade: "М400-М450",
    usage: "Специальные конструкции",
    price: "от 4 800 ₽/м³",
    features: ["Мосты", "Гидротехника", "Высотные здания"],
  },
]

export function ProductsSection() {
  return (
    <section id="products" className="py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-balance">Марки бетона</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            Производим бетон всех марок по ГОСТ. Поможем подобрать оптимальный вариант для вашего проекта
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product, index) => (
            <Card key={index} className={`p-6 relative ${product.popular ? "border-accent border-2" : ""}`}>
              {product.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-accent text-accent-foreground px-3 py-1 rounded-full text-xs font-medium">
                  Популярный
                </div>
              )}

              <div className="mb-4">
                <h3 className="text-2xl font-bold mb-1">{product.grade}</h3>
                <p className="text-sm text-muted-foreground">{product.usage}</p>
              </div>

              <div className="text-3xl font-bold text-accent mb-6">{product.price}</div>

              <ul className="space-y-2 mb-6">
                {product.features.map((feature, i) => (
                  <li key={i} className="text-sm flex items-start gap-2">
                    <span className="text-accent mt-0.5">•</span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <Button
                variant={product.popular ? "default" : "outline"}
                className={`w-full ${product.popular ? "bg-accent hover:bg-accent/90 text-accent-foreground" : ""}`}
              >
                Заказать
              </Button>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
