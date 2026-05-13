import { Link } from "react-router-dom"

interface LogoProps {
  className?: string
}

export default function Logo({ className = "" }: LogoProps) {
  return (
    <Link to="/" className={`inline-block ${className}`}>
      <span
        className="font-heading font-semibold text-2xl sm:text-3xl tracking-[0.2em] select-none"
        style={{
          background: "linear-gradient(135deg, #c9a84c 0%, #f0d060 35%, #e8c050 55%, #a87830 80%, #d4a840 100%)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          backgroundClip: "text",
          filter: "drop-shadow(0 1px 2px rgba(180,130,40,0.3))",
        }}
      >
        НЕБЕЛЬ
      </span>
    </Link>
  )
}
