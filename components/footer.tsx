export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground py-12 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-accent rounded" />
              <span className="text-xl font-bold">БетонПро</span>
            </div>
            <p className="text-sm text-primary-foreground/80 leading-relaxed">
              Производство и поставка качественного бетона с 2010 года
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Продукция</h4>
            <ul className="space-y-2 text-sm text-primary-foreground/80">
              <li>
                <a href="#" className="hover:text-accent transition-colors">
                  Товарный бетон
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-accent transition-colors">
                  Раствор
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-accent transition-colors">
                  Пескобетон
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Компания</h4>
            <ul className="space-y-2 text-sm text-primary-foreground/80">
              <li>
                <a href="#" className="hover:text-accent transition-colors">
                  О нас
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-accent transition-colors">
                  Сертификаты
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-accent transition-colors">
                  Контакты
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Контакты</h4>
            <ul className="space-y-2 text-sm text-primary-foreground/80">
              <li>+7 (999) 123-45-67</li>
              <li>info@betonpro.ru</li>
              <li>г. Москва, ул. Промышленная, 15</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 pt-8 text-center text-sm text-primary-foreground/60">
          <p>© 2025 БетонПро. Все права защищены.</p>
        </div>
      </div>
    </footer>
  )
}
