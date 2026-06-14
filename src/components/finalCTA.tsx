import { WHATSAPP_URL } from "../constants/contants"
import { MessageCircle } from 'lucide-react'

const CTA = () => {
  return (
     <section id="contact" className="bg-[#fcfbf7] px-6 py-20 lg:px-10">
      <div className="relative mx-auto max-w-6xl overflow-hidden rounded-3xl bg-[#2c2520] px-8 py-20 text-center sm:px-16">
        {/* Cercles de fond floutés (Glow effects) */}
        <div className="absolute -left-20 -top-20 h-72 w-72 rounded-full bg-[#c5a880]/20 blur-3xl" />
        <div className="absolute -bottom-24 -right-16 h-80 w-80 rounded-full bg-[#c5a880]/10 blur-3xl" />
        
        <p className="relative text-xs font-medium uppercase tracking-[0.35em] text-[#c5a880]">
          Réservation
        </p>
        
        <h2 className="relative mx-auto mt-5 max-w-3xl font-serif text-3xl text-[#fcfbf7] sm:text-4xl">
          Prêt(e) pour votre <em className="italic text-[#c5a880] not-italic">moment d'évasion</em> ?
        </h2>
        
        <p className="relative mx-auto mt-6 max-w-2xl text-base text-[#fcfbf7]/75">
          Réservez votre séance dès aujourd'hui à notre institut de Lubumbashi (303 Avenue Mpala)
          et profitez d'une expérience inégalée.
        </p>
        
        <div className="relative mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-[#c5a880] px-8 py-4 text-xs font-semibold uppercase tracking-wider text-[#2c2520] transition-all duration-300 hover:scale-105 hover:bg-[#d4bb96]"
          >
            <MessageCircle size={16} /> Nous contacter par WhatsApp
          </a>
        </div>
      </div>
    </section>
  )
}

export default CTA;
