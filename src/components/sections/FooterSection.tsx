import { Github, Twitter, Linkedin } from "lucide-react"

const footerLinks = {
  product: [
    { label: "Функции", href: "#features" },
    { label: "Тарифы", href: "#pricing" },
    { label: "Обновления", href: "#" },
    { label: "Документация", href: "#" },
  ],
  company: [
    { label: "О нас", href: "#" },
    { label: "Блог", href: "#" },
    { label: "Вакансии", href: "#" },
    { label: "Контакты", href: "#" },
  ],
  legal: [
    { label: "Приватность", href: "#" },
    { label: "Условия", href: "#" },
    { label: "Безопасность", href: "#" },
  ],
}

export function FooterSection() {
  return (
    <footer className="px-6 py-16 border-t border-zinc-900">
      <div className="max-w-5xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <a href="/" className="font-display text-xl font-semibold text-zinc-100">
              Velocite
            </a>
            <p className="mt-4 text-sm text-zinc-500 max-w-xs">
              Создавай быстрее, запускай умнее. Платформа для современных команд.
            </p>
          </div>

          {/* Product Links */}
          <div>
            <h4 className="font-heading text-sm font-semibold text-zinc-100 mb-4">Продукт</h4>
            <ul className="space-y-3">
              {footerLinks.product.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="text-sm text-zinc-500 hover:text-zinc-300 transition-colors">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h4 className="font-heading text-sm font-semibold text-zinc-100 mb-4">Компания</h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="text-sm text-zinc-500 hover:text-zinc-300 transition-colors">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal Links */}
          <div>
            <h4 className="font-heading text-sm font-semibold text-zinc-100 mb-4">Правовая информация</h4>
            <ul className="space-y-3">
              {footerLinks.legal.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="text-sm text-zinc-500 hover:text-zinc-300 transition-colors">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-zinc-900 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-zinc-600">© {new Date().getFullYear()} Velocite. Все права защищены.</p>
          <div className="flex items-center gap-4">
            <a href="#" className="text-zinc-500 hover:text-zinc-300 transition-colors" aria-label="GitHub">
              <Github className="w-5 h-5" />
            </a>
            <a href="#" className="text-zinc-500 hover:text-zinc-300 transition-colors" aria-label="Twitter">
              <Twitter className="w-5 h-5" />
            </a>
            <a href="#" className="text-zinc-500 hover:text-zinc-300 transition-colors" aria-label="LinkedIn">
              <Linkedin className="w-5 h-5" />
            </a>
          </div>
        </div>

        {/* Service Description */}
        <div className="pt-6 mt-6 border-t border-zinc-800 space-y-4">
          <p className="text-xs text-zinc-500 leading-relaxed">
            Это бесплатный информационный сервис, предоставляющий контент и справочную информацию о кредитных картах, кредитах, автокредитах, ипотечных и прочих займах и кредитах. Используя его вы сможете быстро решить свои финансовые вопросы, затратив минимум своего личного времени.
          </p>
          <p className="text-xs text-zinc-500 leading-relaxed">
            Все товарные знаки и логотипы, представленные на этом сайте, являются собственностью соответствующих владельцев и взяты из публичных источников.
          </p>
          <p className="text-xs text-zinc-500 leading-relaxed">
            <span className="font-semibold text-zinc-400">Отказ от ответственности:</span> Сервис не является кредитором или ипотечным/кредитным брокером и не предоставляет финансовые услуги прямо или косвенно через представителей или агентов. Не осуществляет выдачу каких-либо видов кредита. Не несет ответственности за точность информации, предоставленной банками по тарифам, кредитным ставкам, переплатам, а также за любую другую информацию.
          </p>
        </div>

        {/* Bank Legal Info */}
        <div className="pt-6 mt-6 border-t border-zinc-800 space-y-3">
          <p className="text-xs text-zinc-500 leading-relaxed">
            ПАО Банк ВТБ. ОГРН 1027739609391. Лицензия № 1000. Адрес: 191144, г. Санкт-Петербург, Дегтярный переулок, д.11, лит. А
          </p>
          <p className="text-xs text-zinc-500 leading-relaxed">
            АО «ТБанк». Лицензия № 2673. Адрес: 123060, г. Москва, 1-й Волоколамский проезд, дом 10, стр.1
          </p>
          <p className="text-xs text-zinc-500 leading-relaxed">
            «Газпромбанк» (Акционерное общество). ОГРН 1027700167110. Лицензия № 354. Адрес: 117420, г. Москва, ул. Намёткина, д.16, к.1
          </p>
        </div>
      </div>
    </footer>
  )
}