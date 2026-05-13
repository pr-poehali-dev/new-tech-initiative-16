import { Link } from "react-router-dom"
import Icon from "@/components/ui/icon"

export default function Contacts() {
  return (
    <div className="min-h-screen bg-black text-white font-body">
      {/* Навигация */}
      <header className="flex items-center justify-between px-5 sm:px-10 lg:px-16 py-5 border-b border-white/10">
        <Link to="/" className="flex items-center gap-2 text-white/80 hover:text-white transition-colors">
          <Icon name="ArrowLeft" size={18} />
          <span className="text-sm font-medium">Назад</span>
        </Link>
        <span className="text-white font-heading font-semibold text-xl tracking-[0.2em]">NEBEL</span>
        <div />
      </header>

      <main className="px-5 sm:px-10 lg:px-16 py-14 sm:py-20 max-w-4xl mx-auto">
        <p className="text-orange-400 text-xs font-medium tracking-widest uppercase mb-4">Контакты</p>
        <h1 className="font-heading font-semibold text-4xl sm:text-5xl lg:text-6xl leading-[1.05] mb-14">
          Свяжитесь с нами
        </h1>

        <div className="grid sm:grid-cols-2 gap-5">
          {/* Телефон */}
          <a
            href="tel:+79622009841"
            className="group flex items-start gap-4 bg-white/5 border border-white/10 hover:border-orange-500/40 rounded-2xl p-6 transition-colors duration-300"
          >
            <div className="w-11 h-11 rounded-xl bg-orange-500/15 flex items-center justify-center flex-shrink-0 group-hover:bg-orange-500/25 transition-colors">
              <Icon name="Phone" size={20} className="text-orange-400" />
            </div>
            <div>
              <p className="text-white/40 text-xs tracking-widest uppercase mb-1.5">Телефон</p>
              <p className="text-white text-lg font-medium">8-962-200-98-41</p>
              <p className="text-white/40 text-sm mt-1">Звонок бесплатный</p>
            </div>
          </a>

          {/* Адрес */}
          <a
            href="https://maps.yandex.ru/?text=Ярославль+проспект+Фрунзе+38"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-start gap-4 bg-white/5 border border-white/10 hover:border-orange-500/40 rounded-2xl p-6 transition-colors duration-300"
          >
            <div className="w-11 h-11 rounded-xl bg-orange-500/15 flex items-center justify-center flex-shrink-0 group-hover:bg-orange-500/25 transition-colors">
              <Icon name="MapPin" size={20} className="text-orange-400" />
            </div>
            <div>
              <p className="text-white/40 text-xs tracking-widest uppercase mb-1.5">Адрес</p>
              <p className="text-white text-lg font-medium leading-snug">
                Ярославль, пр. Фрунзе, 38
              </p>
              <p className="text-white/40 text-sm mt-1">ТЦ «Фрэш»</p>
            </div>
          </a>
        </div>

        {/* Часы работы */}
        <div className="mt-5 bg-white/5 border border-white/10 rounded-2xl p-6">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-11 h-11 rounded-xl bg-orange-500/15 flex items-center justify-center flex-shrink-0">
              <Icon name="Clock" size={20} className="text-orange-400" />
            </div>
            <p className="text-white/40 text-xs tracking-widest uppercase">Часы работы</p>
          </div>
          <div className="grid sm:grid-cols-2 gap-3 text-sm">
            <div className="flex justify-between gap-6">
              <span className="text-white/50">Пн — Пт</span>
              <span className="text-white font-medium">10:00 — 20:00</span>
            </div>
            <div className="flex justify-between gap-6">
              <span className="text-white/50">Сб — Вс</span>
              <span className="text-white font-medium">11:00 — 19:00</span>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
