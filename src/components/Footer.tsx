import { Clock, MapPin, MessageCircle } from "lucide-react"
import { HOURS, LINKS, WHATSAPP_URL } from "../constants/constants"
import { Link } from "react-router-dom"
import { FacebookIcon, InstagramIcon } from "./SocialIcons"
import logo from "../assets/logo.svg"

const Footer = () => {
  return (
    <footer className="border-t border-[#e8e2d6] bg-[#f7f4ef] px-6 py-16 lg:px-10">
      <div className="mx-auto grid max-w-7xl gap-12 md:grid-cols-4">
        <div>
          <Link to="/" aria-label="SIIOU — Accueil" className="inline-flex items-center">
            <img
              src={logo}
              alt="SIIOU"
              className="h-16 w-16 object-contain"
              width={64}
              height={64}
            />
          </Link>
          <p className="mt-6 text-sm leading-relaxed text-[#5a4f47]">
            Institut de Beauté & Spa haut de gamme en RDC. Une parenthèse de sérénité dédiée à
            votre bien-être.
          </p>
        </div>
        
        <div>
          <h4 className="font-serif text-base text-[#2c2520]">Notre Adresse</h4>
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
            <a
              href={LINKS.INSTAGRAM}
              target="_blank"
              rel="noreferrer"
              aria-label="Instagram"
              className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-[#c5a880] text-[#b08d5b] transition hover:bg-[#c5a880] hover:text-white"
            >
              <InstagramIcon className="h-4 w-4" />
            </a>
            <a
              href={LINKS.FACEBOOK}
              target="_blank"
              rel="noreferrer"
              aria-label="Facebook"
              className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-[#c5a880] text-[#b08d5b] transition hover:bg-[#c5a880] hover:text-white"
            >
              <FacebookIcon className="h-4 w-4" />
            </a>
            {/* Remplacement de <Link to=...> par <a href=...> pour WhatsApp */}
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noreferrer"
              aria-label="WhatsApp"
              className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-[#c5a880] text-[#b08d5b] transition hover:bg-[#c5a880] hover:text-white"
            >
              <MessageCircle size={16} />
            </a>
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