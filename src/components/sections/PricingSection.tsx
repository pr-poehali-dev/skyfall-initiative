import { Check } from "lucide-react"

const plans = [
  {
    name: "ВТБ Дебетовая карта",
    description: "Выгодный кэшбэк и процент на остаток",
    price: "0 ₽",
    period: "/год",
    features: ["Кэшбэк до 1.5%", "На остаток до 4.5% годовых", "Бесплатное обслуживание", "Возраст от 18 до 70 лет", "Моментальное оформление"],
    cta: "Оформить карту",
    url: "https://t.fincpanetwork.ru/click/77158/193/?erid=Kra23hiMc",
    image: "https://cdn.poehali.dev/projects/4cd701e3-2550-41ed-aa61-7d339d60a356/files/4b240bf4-5e76-424f-a5c3-7a6623e561fe.jpg",
    highlighted: false,
  },
  {
    name: "Тинькофф Black",
    description: "Премиальный кэшбэк и высокий процент",
    price: "0 ₽",
    period: "/год",
    features: ["Кэшбэк от 1% до 30%", "На остаток до 7% годовых", "Бесплатное обслуживание", "Возраст от 18 лет", "Доставка курьером"],
    cta: "Оформить карту",
    url: "https://trk.ppdu.ru/click/SPlurCmT?erid=Kra23xCCG",
    image: "https://cdn.poehali.dev/projects/4cd701e3-2550-41ed-aa61-7d339d60a356/files/b812c49d-700a-4d1b-acfb-35ce150df23b.jpg",
    highlighted: true,
  },
  {
    name: "Газпромбанк Умная карта",
    description: "Надёжность и выгодные условия",
    price: "0 ₽",
    period: "/год",
    features: ["Кэшбэк до 10%", "На остаток до 6% годовых", "Бесплатное обслуживание", "Возраст от 18 лет", "Снятие без комиссии"],
    cta: "Оформить карту",
    url: "",
    image: "https://cdn.poehali.dev/projects/4cd701e3-2550-41ed-aa61-7d339d60a356/files/e349af90-17d5-4317-a511-61ea95a5c1af.jpg",
    highlighted: false,
  },
]

export function PricingSection() {
  return (
    <section id="pricing" className="px-6 py-24">
      <div className="max-w-5xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-sm font-medium text-zinc-500 uppercase tracking-wider mb-4">Тарифы</p>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-zinc-100 mb-4">
            Простые и понятные цены
          </h2>
          <p className="text-zinc-500 max-w-xl mx-auto text-balance text-lg">
            Никаких скрытых платежей. Никаких сюрпризов. Выберите подходящий план.
          </p>
        </div>

        {/* Pricing Grid */}
        <div className="grid md:grid-cols-3 gap-6">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`p-8 rounded-2xl border flex flex-col h-full ${
                plan.highlighted ? "bg-zinc-100 border-zinc-100" : "bg-zinc-900/50 border-zinc-800/50"
              }`}
            >
              {/* Card Image */}
              <div className="mb-6 -mx-8 -mt-8">
                <img 
                  src={plan.image}
                  alt={plan.name}
                  className="w-full h-48 object-cover rounded-t-2xl"
                />
              </div>
              
              {/* Plan Header */}
              <div className="mb-6">
                <h3
                  className={`font-heading text-xl font-semibold mb-2 ${
                    plan.highlighted ? "text-zinc-900" : "text-zinc-100"
                  }`}
                >
                  {plan.name}
                </h3>
                <p className={`text-sm ${plan.highlighted ? "text-zinc-600" : "text-zinc-500"}`}>{plan.description}</p>
              </div>

              {/* Price */}
              <div className="mb-6">
                <span
                  className={`font-display text-4xl font-bold ${plan.highlighted ? "text-zinc-900" : "text-zinc-100"}`}
                >
                  {plan.price}
                </span>
                <span className={`text-sm ${plan.highlighted ? "text-zinc-600" : "text-zinc-500"}`}>{plan.period}</span>
              </div>

              {/* Features */}
              <ul className="space-y-3 mb-8 flex-1">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3">
                    <Check className={`w-5 h-5 shrink-0 ${plan.highlighted ? "text-zinc-900" : "text-zinc-400"}`} />
                    <span className={`text-sm ${plan.highlighted ? "text-zinc-700" : "text-zinc-400"}`}>{feature}</span>
                  </li>
                ))}
              </ul>

              {/* CTA */}
              {plan.url ? (
                <a
                  href={plan.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`block w-full py-3 px-6 text-center rounded-full font-medium text-sm transition-colors mt-auto ${
                    plan.highlighted
                      ? "bg-zinc-900 text-zinc-100 hover:bg-zinc-800"
                      : "bg-zinc-800 text-zinc-100 hover:bg-zinc-700"
                  }`}
                >
                  {plan.cta}
                </a>
              ) : (
                <button
                  disabled
                  className="block w-full py-3 px-6 text-center rounded-full font-medium text-sm transition-colors mt-auto bg-zinc-800 text-zinc-100 opacity-50 cursor-not-allowed"
                >
                  {plan.cta}
                </button>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}