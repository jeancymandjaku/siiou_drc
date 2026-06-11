import { Clock, MapPin, MessageCircle } from "lucide-react"
import { HOURS, WHATSAPP_URL } from "../constants/contants.ts"
import { Link } from "react-router-dom"

const Footer = () => {
  return (
    <footer className="border-t border-[#e8e2d6] bg-[#f7f4ef] px-6 py-16 lg:px-10">
      <div className="mx-auto grid max-w-7xl gap-12 md:grid-cols-4">
        <div>
            <Link to="/" className="font-serif text-3xl tracking-wide text-gold lowercase">
          siiou
        </Link>
          <p className="mt-6 text-sm leading-relaxed text-[#5a4f47]">
            Institut de Beauté & Spa haut de gamme en RDC. Une parenthèse de sérénité dédiée à
            votre bien-être.
          </p>
        </div>
        <div>
          <h4 className="font-serif text-base text-[#2c2520]">Nos Adresses</h4>
          <ul className="mt-4 space-y-3 text-sm text-[#5a4f47]">
            <li className="flex gap-2">
              <MapPin size={16} className="mt-0.5 shrink-0 text-[#b08d5b]" />
              <span>Lubumbashi — 303 Avenue Mpala</span>
            </li>
          </ul>
        </div>
        <div>
          <h4 className="font-serif text-base text-[#2c2520]">Horaires</h4>
          <ul className="mt-4 space-y-3 text-sm text-[#5a4f47]">
            {HOURS.map((h) => (
              <li key={h} className="flex gap-2">
                <Clock size={16} className="mt-0.5 shrink-0 text-[#b08d5b]" />
                <span>{h}</span>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h4 className="font-serif text-base text-[#2c2520]">Suivez-nous</h4>
          <div className="mt-4 flex gap-3">
            <Link
              to="https://instagram.com/siiou_drc"
              target="_blank"
              rel="noreferrer"
              aria-label="Instagram"
              className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-[#c5a880] text-[#b08d5b] transition hover:bg-[#c5a880] hover:text-white"
            >
              Instagram
            </Link>
            <Link
              to="#"
              target="_blank"
              aria-label="Facebook"
              className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-[#c5a880] text-[#b08d5b] transition hover:bg-[#c5a880] hover:text-white"
            >
             Facebook
            </Link>
            <Link
              to={WHATSAPP_URL}
              target="_blank"
              rel="noreferrer"
              aria-label="WhatsApp"
              className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-[#c5a880] text-[#b08d5b] transition hover:bg-[#c5a880] hover:text-white"
            >
              <MessageCircle size={16} />
            </Link>
          </div>
        </div>
      </div>
      <div className="mx-auto mt-14 max-w-7xl border-t border-[#e8e2d6] pt-6 text-center text-xs tracking-wide text-[#5a4f47]">
        © 2026 SIIOU DRC. Tous droits réservés. Conçu avec excellence.
      </div>
    </footer>
  )
}

export default Footer