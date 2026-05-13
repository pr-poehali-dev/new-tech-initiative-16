import { Button } from "@/components/ui/button"
import { ArrowRight, Menu } from "lucide-react"
import { ShimmerButton } from "@/components/shimmer-button"
import { useState } from "react"
import { Link } from "react-router-dom"
import Logo from "@/components/Logo"

const HERO_BG = "https://cdn.poehali.dev/projects/3a01b69a-2aa8-48e1-b9d9-094b47c89d39/files/0a1d5ae0-b495-4a7d-9b40-a1463c5720ca.jpg"

export default function Index() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <div className="min-h-screen relative overflow-hidden font-body">
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

        {/* Mobile menu button */}
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
            <Link to="/kitchens" className="text-white/80 hover:text-white transition-colors tracking-wide">
              Кухни
            </Link>
            <Link to="/office" className="text-white/80 hover:text-white transition-colors tracking-wide">
              Офисная мебель
            </Link>
            <Link to="/decor" className="text-white/80 hover:text-white transition-colors tracking-wide">
              Предметы интерьера
            </Link>
            <Link to="/hotels" className="text-white/80 hover:text-white transition-colors tracking-wide">
              Гостиницы и санатории
            </Link>
            <Link to="/contacts" className="text-white/80 hover:text-white transition-colors tracking-wide">
              Контакты
            </Link>
            <ShimmerButton className="text-white px-6 py-2.5 rounded-xl text-sm font-medium shadow-lg w-fit">
              Каталог
            </ShimmerButton>
          </nav>
        </div>
      )}

      {/* Main Content */}
      <main className="relative z-10 flex flex-col items-start justify-center min-h-[calc(100svh-80px)] px-6 sm:px-12 lg:px-20">
        {/* Badge */}
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

        <Button className="group relative bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white px-7 py-3 rounded-xl text-sm font-body font-medium tracking-wide flex items-center gap-2 border border-orange-400/30 shadow-lg shadow-orange-500/25 hover:shadow-xl hover:shadow-orange-500/40 transition-all duration-300 hover:scale-105 hover:-translate-y-0.5">
          Смотреть каталог
          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
          <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-white/0 via-white/10 to-white/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </Button>
      </main>
    </div>
  )
}