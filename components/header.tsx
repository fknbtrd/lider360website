import { Button } from "@/components/ui/button"
import { Phone } from "lucide-react"

export function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-primary rounded" />
          <span className="text-xl font-bold">БетонПро</span>
        </div>

        <nav className="hidden md:flex items-center gap-8">
          <a href="#services" className="text-sm hover:text-accent transition-colors">
            Услуги
          </a>
          <a href="#products" className="text-sm hover:text-accent transition-colors">
            Продукция
          </a>
          <a href="#contact" className="text-sm hover:text-accent transition-colors">
            Контакты
          </a>
        </nav>

        <Button className="bg-accent hover:bg-accent/90 text-accent-foreground">
          <Phone className="w-4 h-4 mr-2" />
          +7 (999) 123-45-67
        </Button>
      </div>
    </header>
  )
}
