import { useState } from "react"
import { Link } from "react-router-dom"
import Icon from "@/components/ui/icon"
import Logo from "@/components/Logo"

const OFFICE_BG = "https://cdn.poehali.dev/projects/3a01b69a-2aa8-48e1-b9d9-094b47c89d39/files/6416f0e0-3116-4757-a69c-3a228230d9c9.jpg"

const features = [
  "Руководящие кабинеты",
  "Переговорные комнаты",
  "Open space зоны",
  "Ресепшн и лобби",
  "Шкафы и стеллажи",
  "Мебель для персонала",
]

export default function Office() {
  const [form, setForm] = useState({ name: "", phone: "", comment: "" })
  const [sent, setSent] = useState(false)

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setSent(true)
  }

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero с фоном */}
      <div className="relative h-[100svh] flex flex-col">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${OFFICE_BG})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/20 to-black/85" />

        {/* Навигация */}
        <header className="relative z-10 flex items-center justify-between px-5 sm:px-10 lg:px-16 py-5">
          <Link to="/" className="flex items-center gap-2 text-white/80 hover:text-white transition-colors">
            <Icon name="ArrowLeft" size={18} />
            <span className="text-sm font-medium">Назад</span>
          </Link>
          <Logo />
          <div />
        </header>

        {/* Заголовок поверх фото */}
        <div className="relative z-10 flex-1 flex flex-col justify-end px-5 sm:px-10 lg:px-16 pb-10 sm:pb-16">
          <p className="text-orange-400 text-xs sm:text-sm font-medium tracking-widest uppercase mb-3">Офисная мебель</p>
          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold leading-[1.1] mb-4">
            Офис, который<br />вдохновляет
          </h1>
          <p className="text-white/70 text-base sm:text-lg max-w-md">
            Проектируем рабочие пространства, где хочется работать — эффективно и красиво.
          </p>
        </div>
      </div>

      {/* Описание */}
      <div className="px-5 sm:px-10 lg:px-16 py-12 sm:py-20 max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-10 sm:gap-16 items-start">
          <div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-5">
              От кабинета директора<br />до open space
            </h2>
            <p className="text-white/60 text-base sm:text-lg leading-relaxed mb-4">
              Мы создаём мебель для любых офисных пространств: от небольших кабинетов до крупных корпоративных офисов. Учитываем фирменный стиль, эргономику и практичность.
            </p>
            <p className="text-white/60 text-base sm:text-lg leading-relaxed">
              Каждый проект проходит полный цикл — замер, дизайн-проект, производство и монтаж. Используем качественные материалы, которые выдерживают интенсивную эксплуатацию.
            </p>
          </div>

          <div>
            <h3 className="text-lg sm:text-xl font-semibold mb-4 text-white/90">Решения для любых зон</h3>
            <div className="grid grid-cols-2 gap-2 sm:gap-3">
              {features.map((f) => (
                <div
                  key={f}
                  className="flex items-center gap-3 bg-white/5 border border-white/10 rounded-xl px-3 sm:px-4 py-3"
                >
                  <div className="w-1.5 h-1.5 rounded-full bg-orange-500 flex-shrink-0" />
                  <span className="text-white/80 text-sm">{f}</span>
                </div>
              ))}
            </div>
            <p className="text-white/40 text-sm mt-3">
              Также выполняем проекты под ключ для коворкингов, банков, медицинских учреждений.
            </p>
          </div>
        </div>
      </div>

      {/* Форма обратной связи */}
      <div className="px-5 sm:px-10 lg:px-16 pb-16 sm:pb-24 max-w-6xl mx-auto">
        <div className="bg-white/5 border border-white/10 rounded-2xl sm:rounded-3xl p-6 sm:p-8 lg:p-12">
          <div className="max-w-xl">
            <h2 className="text-2xl sm:text-3xl font-bold mb-2">Оставьте заявку</h2>
            <p className="text-white/50 text-sm sm:text-base mb-6 sm:mb-8">Перезвоним в течение часа и обсудим ваш проект бесплатно.</p>

            {sent ? (
              <div className="flex flex-col items-start gap-3 py-6">
                <div className="w-12 h-12 rounded-full bg-orange-500/20 flex items-center justify-center">
                  <Icon name="Check" size={24} className="text-orange-400" />
                </div>
                <p className="text-xl font-semibold">Заявка отправлена!</p>
                <p className="text-white/50">Мы свяжемся с вами в ближайшее время.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-3 sm:gap-4">
                <input
                  type="text"
                  placeholder="Ваше имя"
                  required
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  className="bg-white/5 border border-white/15 rounded-xl px-4 py-3.5 text-white placeholder:text-white/30 focus:outline-none focus:border-orange-500 transition-colors text-base"
                />
                <input
                  type="tel"
                  placeholder="Номер телефона"
                  required
                  value={form.phone}
                  onChange={(e) => setForm({ ...form, phone: e.target.value })}
                  className="bg-white/5 border border-white/15 rounded-xl px-4 py-3.5 text-white placeholder:text-white/30 focus:outline-none focus:border-orange-500 transition-colors text-base"
                />
                <textarea
                  placeholder="Расскажите о вашем проекте (необязательно)"
                  rows={3}
                  value={form.comment}
                  onChange={(e) => setForm({ ...form, comment: e.target.value })}
                  className="bg-white/5 border border-white/15 rounded-xl px-4 py-3.5 text-white placeholder:text-white/30 focus:outline-none focus:border-orange-500 transition-colors resize-none text-base"
                />
                <button
                  type="submit"
                  className="group bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white px-7 py-3.5 rounded-xl text-base font-semibold flex items-center gap-2 w-full sm:w-fit justify-center sm:justify-start transition-all duration-300 shadow-lg shadow-orange-500/25"
                >
                  Отправить заявку
                  <Icon name="ArrowRight" size={18} className="group-hover:translate-x-1 transition-transform duration-300" />
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}