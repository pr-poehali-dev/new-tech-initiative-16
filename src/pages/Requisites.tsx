import { useState } from "react"
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
  const [copied, setCopied] = useState<string | null>(null)

  function copy(value: string) {
    navigator.clipboard.writeText(value)
    setCopied(value)
    setTimeout(() => setCopied(null), 2000)
  }

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
              className={`flex items-center gap-4 px-6 py-4 ${i !== rows.length - 1 ? "border-b border-white/[0.08]" : ""}`}
            >
              <div className="flex-1 min-w-0">
                <p className="text-white/40 text-xs tracking-widest uppercase mb-1">{row.label}</p>
                <p className="text-white text-sm sm:text-base font-medium break-all">{row.value}</p>
              </div>
              <button
                onClick={() => copy(row.value)}
                className="flex-shrink-0 w-9 h-9 rounded-xl flex items-center justify-center transition-all duration-200 bg-white/5 hover:bg-orange-500/20 border border-white/10 hover:border-orange-500/40"
                title="Скопировать"
              >
                <Icon
                  name={copied === row.value ? "Check" : "Copy"}
                  size={15}
                  className={copied === row.value ? "text-orange-400" : "text-white/40"}
                />
              </button>
            </div>
          ))}
        </div>
      </main>
    </div>
  )
}
