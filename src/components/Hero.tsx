import heroSpa from "../assets/hero-spa.jpg";
import heroFacial from "../assets/hero-facial.jpg";
import ig1 from "../assets/ig-1.jpg";
import ig2 from "../assets/ig-2.jpg";
import ig3 from "../assets/ig-3.jpg";
import ig4 from "../assets/ig-4.jpg";
import { WHATSAPP_URL } from "../constants/contants";
import { Star, Users } from "lucide-react";
import { Reveal } from "./Reveal";


const Hero = () => {
  return (
   <section id="accueil" className="relative overflow-hidden bg-[#fcfbf7]">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-6 py-16 lg:grid-cols-2 lg:gap-16 lg:px-10 lg:py-28">
        <Reveal>
          <p className="mb-6 text-xs font-medium uppercase tracking-[0.35em] text-[#b08d5b]">
            Institut de Beauté & Spa de Luxe
          </p>
          <h1 className="font-serif text-4xl leading-[1.05] text-[#2c2520] sm:text-5xl lg:text-6xl">
            L'art du <em className="text-[#b08d5b]">bien-être d'exception</em> en RDC
          </h1>
          <p className="mt-8 max-w-xl text-base leading-relaxed text-[#5a4f47] sm:text-lg">
            À Lubumbashi, SIIOU réinvente l'expérience du soin haut de gamme : protocoles signature,
            thérapeutes diplômées et cosmétiques de prestige Thalgo, au service d'une beauté
            authentique et d'une sérénité durable.
          </p>
          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noreferrer"
              className="rounded-full bg-[#c5a880] px-8 py-4 text-center text-sm font-medium text-[#fcfbf7] shadow-sm transition-all hover:scale-105 hover:bg-[#b08d5b]"
            >
              Réserver un soin
            </a>
          </div>

          <div className="mt-12 flex flex-wrap items-center gap-6 sm:gap-8">
            <div className="flex items-center gap-3">
              <div className="flex -space-x-2">
                {[ig1, ig2, ig3, ig4].map((src, i) => (
                  <img
                    key={i}
                    src={src}
                    alt=""
                    aria-hidden="true"
                    width={40}
                    height={40}
                    className="h-10 w-10 rounded-full border-2 border-[#fcfbf7] object-cover shadow-sm transition duration-500 cursor-pointer"
                  />
                ))}
              </div>
              <div>
                <p className="font-serif text-xl text-[#2c2520]">+1 200</p>
                <p className="text-xs uppercase tracking-[0.2em] text-[#5a4f47]">
                  Clientes satisfaites
                </p>
              </div>
            </div>

            <div className="h-10 w-px bg-[#e8e2d6]" aria-hidden="true" />

            <div>
              <div className="flex items-center gap-1 text-[#c5a880]">
                {[0, 1, 2, 3, 4].map((i) => (
                  <Star key={i} size={16} fill="currentColor" strokeWidth={0} />
                ))}
                <span className="ml-2 font-serif text-base text-[#2c2520]">4,9 / 5</span>
              </div>
              <p className="mt-1 text-xs uppercase tracking-[0.2em] text-[#5a4f47]">
                Avis Google · 280+ témoignages
              </p>
            </div>
          </div>
        </Reveal>
        <Reveal delay={2} className="relative h-[460px] sm:h-[560px]">
          <img
            src={heroSpa}
            alt="Cabine spa duo de l'institut SIIOU DRC à Lubumbashi — ambiance feutrée"
            width={896}
            height={1152}
            className="absolute right-0 top-0 h-[80%] w-[78%] rounded-3xl object-cover shadow-xl [filter:saturate(0.7)_hue-rotate(340deg)_brightness(1.02)_contrast(0.95)] transition duration-500 cursor-pointer"
          />
          <img
            src={heroFacial}
            alt="Soin sourcils et visage réalisé par une esthéticienne SIIOU DRC"
            loading="lazy"
            width={768}
            height={768}
            className="absolute bottom-0 left-0 h-[55%] w-[55%] rounded-3xl border-[6px] border-[#fcfbf7] object-cover shadow-2xl animate-float-soft [filter:saturate(0.7)_hue-rotate(340deg)_brightness(1.02)_contrast(0.95)] transition duration-500 cursor-pointer"
          />
          <div className="absolute -right-6 -top-6 -z-10 h-40 w-40 rounded-full bg-[#c5a880]/15 blur-2xl animate-shimmer-gold" />

          <div className="absolute -bottom-4 right-2 hidden items-center gap-3 rounded-2xl border border-[#e8e2d6] bg-white/95 px-4 py-3 shadow-xl backdrop-blur sm:flex">
            <div className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-[#c5a880]/15 text-[#b08d5b]">
              <Users size={18} strokeWidth={1.5} />
            </div>
            <div>
              <p className="font-serif text-sm text-[#2c2520]">8 ans d'expertise</p>
              <p className="text-[10px] uppercase tracking-[0.25em] text-[#5a4f47]">
                Thérapeutes certifiées
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}

export default Hero