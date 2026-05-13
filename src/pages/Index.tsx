import { ArrowRight, Menu } from "lucide-react"
import { ShimmerButton } from "@/components/shimmer-button"
import { useState } from "react"
import { Link } from "react-router-dom"
import Logo from "@/components/Logo"
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
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

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
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-black/20" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/30" />
        </div>

        {/* Header Navigation */}
        <header className="relative z-50 flex items-center justify-between px-5 sm:px-10 lg:px-16 py-5">
          <div className="flex items-center pl-1">
            <Logo />
          </div>

          <nav className="hidden md:flex items-center space-x-7 lg:space-x-10">
            <Link to="/kitchens" className="text-white/75 hover:text-white transition-colors text-sm tracking-wide font-body">
              Кухни
            </Link>
            <Link to="/office" className="text-white/75 hover:text-white transition-colors text-sm tracking-wide font-body">
              Офисная мебель
            </Link>
            <Link to="/decor" className="text-white/75 hover:text-white transition-colors text-sm tracking-wide font-body">
              Предметы интерьера
            </Link>
            <Link to="/hotels" className="text-white/75 hover:text-white transition-colors text-sm tracking-wide font-body">
              Гостиницы и санатории
            </Link>
            <Link to="/contacts" className="text-white/75 hover:text-white transition-colors text-sm tracking-wide font-body">
              Контакты
            </Link>
          </nav>

          <button className="md:hidden text-white p-2" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            <Menu className="w-6 h-6" />
          </button>

          <ShimmerButton className="hidden md:flex text-white px-5 lg:px-7 py-2 rounded-xl text-sm font-body tracking-wide font-medium shadow-lg">
            Каталог
          </ShimmerButton>
        </header>

        {mobileMenuOpen && (
          <div className="md:hidden absolute top-16 left-0 right-0 bg-black/95 backdrop-blur-sm border-b border-white/10 z-50">
            <nav className="flex flex-col space-y-4 px-6 py-6 font-body">
              <Link to="/kitchens" className="text-white/80 hover:text-white transition-colors tracking-wide">Кухни</Link>
              <Link to="/office" className="text-white/80 hover:text-white transition-colors tracking-wide">Офисная мебель</Link>
              <Link to="/decor" className="text-white/80 hover:text-white transition-colors tracking-wide">Предметы интерьера</Link>
              <Link to="/hotels" className="text-white/80 hover:text-white transition-colors tracking-wide">Гостиницы и санатории</Link>
              <Link to="/contacts" className="text-white/80 hover:text-white transition-colors tracking-wide">Контакты</Link>
              <ShimmerButton className="text-white px-6 py-2.5 rounded-xl text-sm font-medium shadow-lg w-fit">
                Каталог
              </ShimmerButton>
            </nav>
          </div>
        )}

        {/* Main Content */}
        <main className="relative z-10 flex flex-col items-start justify-center flex-1 px-6 sm:px-12 lg:px-20">
          <div className="mb-6">
            <div className="inline-flex items-center bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2">
              <span className="text-white/90 text-xs tracking-widest uppercase font-body">Авторская дизайнерская мебель</span>
            </div>
          </div>

          <h1 className="text-white font-heading font-semibold text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl leading-[1.05] mb-6 sm:mb-7">
            Мебель,<br />которая говорит<br />о вашем вкусе
          </h1>

          <p className="text-white/65 text-base sm:text-lg font-body font-light mb-8 max-w-md leading-relaxed">
            Уникальные кухни, офисные пространства и предметы интерьера — каждый предмет создаётся индивидуально под вас.
          </p>

          <a
            href="#catalog"
            className="group relative bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white px-7 py-3 rounded-xl text-sm font-body font-medium tracking-wide flex items-center gap-2 border border-orange-400/30 shadow-lg shadow-orange-500/25 hover:shadow-xl hover:shadow-orange-500/40 transition-all duration-300 hover:scale-105 hover:-translate-y-0.5"
          >
            Смотреть каталог
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
          </a>
        </main>
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