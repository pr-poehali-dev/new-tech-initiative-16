import { Link } from "react-router-dom"
import Icon from "@/components/ui/icon"

const HERO_BG = "https://cdn.poehali.dev/projects/3a01b69a-2aa8-48e1-b9d9-094b47c89d39/files/0a1d5ae0-b495-4a7d-9b40-a1463c5720ca.jpg"

const catalog = [
  {
    to: "/kitchens",
    label: "Кухни на заказ",
    desc: "Угловые, прямые, островные — любая планировка под ваш интерьер",
    img: "https://cdn.poehali.dev/projects/3a01b69a-2aa8-48e1-b9d9-094b47c89d39/files/40aace72-a947-4201-866a-4fbd3b8a527d.jpg",
  },
  {
    to: "/office",
    label: "Офисная мебель",
    desc: "Кабинеты, переговорные, open space — от замера до монтажа",
    img: "https://cdn.poehali.dev/projects/3a01b69a-2aa8-48e1-b9d9-094b47c89d39/files/6416f0e0-3116-4757-a69c-3a228230d9c9.jpg",
  },
  {
    to: "/decor",
    label: "Предметы интерьера",
    desc: "Авторские светильники, полки, декор ручной работы",
    img: "https://cdn.poehali.dev/projects/3a01b69a-2aa8-48e1-b9d9-094b47c89d39/files/19bd842c-8cc9-4af9-91fe-315af52e8af0.jpg",
  },
  {
    to: "/hotels",
    label: "Гостиницы и санатории",
    desc: "Мебель для номеров, лобби, ресторанов и SPA-зон",
    img: "https://cdn.poehali.dev/projects/3a01b69a-2aa8-48e1-b9d9-094b47c89d39/files/582a06cd-8d5d-45dc-8862-ebcd956cbbba.jpg",
  },
]

export default function Index() {
  return (
    <div className="bg-black font-body">
      {/* Hero */}
      <div className="min-h-[100svh] relative overflow-hidden flex flex-col">
        {/* Фоновое фото */}
        <div className="absolute inset-0">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${HERO_BG})` }}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70" />
        </div>

        {/* Main Content — сверху */}
        <main className="relative z-10 flex flex-col items-center text-center px-6 pt-12 sm:pt-16">
          {/* Логотип с переливающимся золотым */}
          <style>{`
            @keyframes gold-shimmer {
              0% { background-position: -200% center; }
              100% { background-position: 200% center; }
            }
            .logo-shimmer {
              background: linear-gradient(90deg, #a07830 0%, #c9a84c 20%, #f5e070 40%, #ffe090 50%, #f0d060 60%, #c9a84c 80%, #a07830 100%);
              background-size: 200% auto;
              -webkit-background-clip: text;
              -webkit-text-fill-color: transparent;
              background-clip: text;
              animation: gold-shimmer 4s linear infinite;
            }
          `}</style>

          <span className="logo-shimmer font-heading font-semibold text-6xl sm:text-7xl md:text-8xl lg:text-9xl tracking-[0.15em] select-none mb-4">
            NEBEL'
          </span>

          <p className="text-white/50 text-sm sm:text-base tracking-[0.3em] uppercase font-body font-light mb-10">
            Всё кроме обычного
          </p>


        </main>

        {/* Ссылка на контакты внизу */}
        <div className="relative z-10 flex justify-end px-6 sm:px-10 lg:px-16 pb-10 mt-auto">
          <Link to="/contacts" className="text-white/70 hover:text-white text-base sm:text-lg tracking-widest uppercase font-body font-medium transition-colors">
            Контакты
          </Link>
        </div>
      </div>

      {/* Каталог */}
      <section id="catalog" className="bg-black px-5 sm:px-10 lg:px-16 py-16 sm:py-24">
        <div className="max-w-6xl mx-auto">
          <p className="text-orange-400 text-xs font-medium tracking-widest uppercase mb-4">Каталог</p>
          <h2 className="font-heading font-semibold text-3xl sm:text-4xl lg:text-5xl text-white leading-tight mb-12">
            Направления работ
          </h2>

          <div className="grid sm:grid-cols-2 gap-4 sm:gap-5">
            {catalog.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                className="group relative overflow-hidden rounded-2xl aspect-[4/3] flex flex-col justify-end"
              >
                {/* Фото */}
                <div
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                  style={{ backgroundImage: `url(${item.img})` }}
                />
                {/* Оверлей */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-black/10" />
                {/* Текст */}
                <div className="relative z-10 p-6 sm:p-8">
                  <p className="text-white font-heading font-semibold text-xl sm:text-2xl mb-1.5 leading-tight">
                    {item.label}
                  </p>
                  <p className="text-white/60 text-sm leading-relaxed mb-4">{item.desc}</p>
                  <span className="inline-flex items-center gap-1.5 text-orange-400 text-sm font-medium group-hover:gap-3 transition-all duration-300">
                    Подробнее
                    <Icon name="ArrowRight" size={15} />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Преимущества */}
      <section className="bg-black px-5 sm:px-10 lg:px-16 pb-16 sm:pb-24">
        <div className="max-w-6xl mx-auto">
          <div className="border-t border-white/10 pt-16 sm:pt-24">
            <p className="text-orange-400 text-xs font-medium tracking-widest uppercase mb-4">Почему мы</p>
            <h2 className="font-heading font-semibold text-3xl sm:text-4xl lg:text-5xl text-white leading-tight mb-12">
              Выбирают NEBEL'
            </h2>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
              {[
                { icon: "Ruler", title: "Точность до миллиметра", desc: "Производим мебель строго по замерам. Никаких зазоров и подгонок на месте." },
                { icon: "Award", title: "8 лет на рынке", desc: "Сотни реализованных проектов в Ярославле и области. Работаем с частными клиентами и бизнесом." },
                { icon: "Layers", title: "Любые материалы", desc: "Кварц, натуральный камень, HPL, дерево, металл — воплощаем любые решения." },
                { icon: "Clock", title: "Соблюдаем сроки", desc: "Фиксируем дату сдачи в договоре и строго её придерживаемся." },
                { icon: "Wrench", title: "Под ключ", desc: "Замер, проект, производство, доставка и монтаж — всё включено в стоимость." },
                { icon: "HeartHandshake", title: "Гарантия 2 года", desc: "На всю мебель собственного производства. Бесплатный выезд мастера при гарантийном случае." },
              ].map((item) => (
                <div key={item.title} className="bg-white/5 border border-white/10 rounded-2xl p-6 flex flex-col gap-4">
                  <div className="w-11 h-11 rounded-xl bg-orange-500/15 flex items-center justify-center flex-shrink-0">
                    <Icon name={item.icon} size={20} className="text-orange-400" />
                  </div>
                  <div>
                    <p className="text-white font-semibold mb-2">{item.title}</p>
                    <p className="text-white/50 text-sm leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Этапы работы */}
      <section className="bg-black px-5 sm:px-10 lg:px-16 pb-20 sm:pb-32">
        <div className="max-w-6xl mx-auto">
          <div className="border-t border-white/10 pt-16 sm:pt-24">
            <p className="text-orange-400 text-xs font-medium tracking-widest uppercase mb-4">Процесс</p>
            <h2 className="font-heading font-semibold text-3xl sm:text-4xl lg:text-5xl text-white leading-tight mb-12">
              Как мы работаем
            </h2>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
              {[
                { num: "01", icon: "MapPin", title: "Замер", desc: "Приезжаем к вам, снимаем точные размеры и обсуждаем пожелания." },
                { num: "02", icon: "PenLine", title: "Проект", desc: "Разрабатываем 3D-визуализацию и согласовываем с вами каждую деталь." },
                { num: "03", icon: "Factory", title: "Производство", desc: "Изготавливаем на собственном производстве из выбранных материалов." },
                { num: "04", icon: "CheckCheck", title: "Монтаж", desc: "Доставляем и устанавливаем. Убираем за собой. Сдаём под ключ." },
              ].map((step) => (
                <div key={step.num} className="relative flex flex-col gap-5 bg-white/5 border border-white/10 rounded-2xl p-6">
                  <span className="font-heading text-5xl font-semibold text-white/8 leading-none select-none absolute top-4 right-5">
                    {step.num}
                  </span>
                  <div className="w-11 h-11 rounded-xl bg-orange-500/15 flex items-center justify-center flex-shrink-0">
                    <Icon name={step.icon} size={20} className="text-orange-400" />
                  </div>
                  <div>
                    <p className="text-white font-semibold mb-2">{step.title}</p>
                    <p className="text-white/50 text-sm leading-relaxed">{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* CTA */}
            <div className="mt-10 sm:mt-12 flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-8 bg-gradient-to-r from-orange-500/10 to-orange-600/5 border border-orange-500/20 rounded-2xl p-6 sm:p-8">
              <div className="flex-1">
                <p className="text-white font-heading font-semibold text-xl sm:text-2xl mb-1">Готовы начать?</p>
                <p className="text-white/50 text-sm">Оставьте заявку — перезвоним в течение часа и обсудим ваш проект.</p>
              </div>
              <Link
                to="/contacts"
                className="group flex-shrink-0 bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white px-7 py-3.5 rounded-xl text-sm font-medium tracking-wide flex items-center gap-2 transition-all duration-300 shadow-lg shadow-orange-500/25 hover:scale-105"
              >
                Связаться с нами
                <Icon name="ArrowRight" size={16} className="group-hover:translate-x-1 transition-transform duration-300" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}