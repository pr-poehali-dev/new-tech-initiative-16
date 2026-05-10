import { useState } from "react"
import { Link } from "react-router-dom"
import Icon from "@/components/ui/icon"

const DECOR_BG = "https://cdn.poehali.dev/projects/3a01b69a-2aa8-48e1-b9d9-094b47c89d39/files/19bd842c-8cc9-4af9-91fe-315af52e8af0.jpg"

const items = [
  "Дизайнерские светильники",
  "Декоративные панели",
  "Полки и консоли",
  "Зеркала и рамы",
  "Вазы и скульптуры",
  "Предметы для хранения",
]

export default function Decor() {
  const [form, setForm] = useState({ name: "", phone: "", comment: "" })
  const [sent, setSent] = useState(false)

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setSent(true)
  }

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero с фоном */}
      <div className="relative h-screen flex flex-col">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${DECOR_BG})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/80" />

        {/* Навигация */}
        <header className="relative z-10 flex items-center justify-between px-6 lg:px-16 py-6">
          <Link to="/" className="flex items-center gap-2 text-white/80 hover:text-white transition-colors">
            <Icon name="ArrowLeft" size={18} />
            <span className="text-sm">Назад</span>
          </Link>
          <span className="text-white font-bold text-xl tracking-wider">NEBEL</span>
          <div />
        </header>

        {/* Заголовок поверх фото */}
        <div className="relative z-10 flex-1 flex flex-col justify-end px-6 lg:px-16 pb-16">
          <p className="text-orange-400 text-sm font-medium tracking-widest uppercase mb-3">Предметный дизайн</p>
          <h1 className="text-5xl lg:text-7xl font-bold leading-tight mb-4">
            Детали, которые<br />создают атмосферу
          </h1>
          <p className="text-white/70 text-lg max-w-xl">
            Авторские предметы интерьера ручной работы — каждый экземпляр уникален.
          </p>
        </div>
      </div>

      {/* Описание */}
      <div className="px-6 lg:px-16 py-20 max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16 items-start">
          <div>
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">
              Предметы, которые<br />невозможно найти в магазине
            </h2>
            <p className="text-white/60 text-lg leading-relaxed mb-6">
              Мы создаём авторские предметы интерьера на заказ — светильники, полки, декоративные элементы. Каждое изделие разрабатывается индивидуально под ваш интерьер и вкус.
            </p>
            <p className="text-white/60 text-lg leading-relaxed">
              Работаем с металлом, деревом, камнем, стеклом и смешанными материалами. Возможно изготовление по вашим эскизам или разработка дизайна с нуля нашими художниками.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-5 text-white/90">Что мы создаём</h3>
            <div className="grid grid-cols-2 gap-3">
              {items.map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-3 bg-white/5 border border-white/10 rounded-xl px-4 py-3"
                >
                  <div className="w-1.5 h-1.5 rounded-full bg-orange-500 flex-shrink-0" />
                  <span className="text-white/80 text-sm">{item}</span>
                </div>
              ))}
            </div>
            <p className="text-white/40 text-sm mt-4">
              Также принимаем заказы на коллекционные серии и корпоративные подарки.
            </p>
          </div>
        </div>
      </div>

      {/* Форма обратной связи */}
      <div className="px-6 lg:px-16 pb-24 max-w-6xl mx-auto">
        <div className="bg-white/5 border border-white/10 rounded-3xl p-8 lg:p-12">
          <div className="max-w-xl">
            <h2 className="text-3xl font-bold mb-2">Оставьте заявку</h2>
            <p className="text-white/50 mb-8">Обсудим вашу идею и предложим решение бесплатно.</p>

            {sent ? (
              <div className="flex flex-col items-start gap-3 py-8">
                <div className="w-12 h-12 rounded-full bg-orange-500/20 flex items-center justify-center">
                  <Icon name="Check" size={24} className="text-orange-400" />
                </div>
                <p className="text-xl font-semibold">Заявка отправлена!</p>
                <p className="text-white/50">Мы свяжемся с вами в ближайшее время.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                <input
                  type="text"
                  placeholder="Ваше имя"
                  required
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  className="bg-white/5 border border-white/15 rounded-xl px-4 py-3 text-white placeholder:text-white/30 focus:outline-none focus:border-orange-500 transition-colors"
                />
                <input
                  type="tel"
                  placeholder="Номер телефона"
                  required
                  value={form.phone}
                  onChange={(e) => setForm({ ...form, phone: e.target.value })}
                  className="bg-white/5 border border-white/15 rounded-xl px-4 py-3 text-white placeholder:text-white/30 focus:outline-none focus:border-orange-500 transition-colors"
                />
                <textarea
                  placeholder="Опишите вашу идею (необязательно)"
                  rows={3}
                  value={form.comment}
                  onChange={(e) => setForm({ ...form, comment: e.target.value })}
                  className="bg-white/5 border border-white/15 rounded-xl px-4 py-3 text-white placeholder:text-white/30 focus:outline-none focus:border-orange-500 transition-colors resize-none"
                />
                <button
                  type="submit"
                  className="group relative bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white px-8 py-3.5 rounded-xl text-base font-semibold flex items-center gap-2 w-fit transition-all duration-300 hover:scale-105 shadow-lg shadow-orange-500/25"
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
