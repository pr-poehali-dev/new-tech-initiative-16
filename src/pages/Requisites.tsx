import { Link } from "react-router-dom"
import Icon from "@/components/ui/icon"
import Logo from "@/components/Logo"

const rows = [
  { label: "Полное наименование", value: "Индивидуальный предприниматель Скибин Игорь Сергеевич" },
  { label: "ИНН", value: "311102416597" },
  { label: "ОГРН", value: "318762700045878" },
  { label: "Банк", value: "Калужское отделение №8608 ПАО Сбербанк" },
  { label: "БИК", value: "042908612" },
  { label: "Номер счёта", value: "40802810777030012711" },
  { label: "Корр. счёт", value: "30101810100000000612" },
]

export default function Requisites() {
  return (
    <div className="min-h-screen bg-black text-white font-body">
      <header className="flex items-center justify-between px-5 sm:px-10 lg:px-16 py-5 border-b border-white/10">
        <Link to="/contacts" className="flex items-center gap-2 text-white/80 hover:text-white transition-colors">
          <Icon name="ArrowLeft" size={18} />
          <span className="text-sm font-medium">Контакты</span>
        </Link>
        <Logo />
        <div />
      </header>

      <main className="px-5 sm:px-10 lg:px-16 py-14 sm:py-20 max-w-3xl mx-auto">
        <p className="text-orange-400 text-xs font-medium tracking-widest uppercase mb-4">Документы</p>
        <h1 className="font-heading font-semibold text-4xl sm:text-5xl leading-[1.05] mb-10">
          Реквизиты
        </h1>

        <div className="bg-white/5 border border-white/10 rounded-2xl overflow-hidden">
          {rows.map((row, i) => (
            <div
              key={row.label}
              className={`flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-6 px-6 py-4 ${i !== rows.length - 1 ? "border-b border-white/8" : ""}`}
            >
              <span className="text-white/40 text-xs tracking-widest uppercase sm:w-44 flex-shrink-0">{row.label}</span>
              <span className="text-white text-sm sm:text-base font-medium select-all">{row.value}</span>
            </div>
          ))}
        </div>

        <p className="text-white/25 text-xs mt-6 leading-relaxed">
          Нажмите на значение, чтобы выделить и скопировать.
        </p>
      </main>
    </div>
  )
}
