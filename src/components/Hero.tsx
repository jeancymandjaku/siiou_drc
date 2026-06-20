import heroSpa from "../assets/hero-spa.webp";
import heroFacial from "../assets/hero-facial.webp";
import ig1 from "../assets/ig-1.webp";
import ig2 from "../assets/ig-2.webp";
import ig3 from "../assets/ig-3.webp";
import ig4 from "../assets/ig-4.webp";
import { WHATSAPP_URL } from "../constants/contants";
import { Star, Users, Gift } from "lucide-react";
import { Reveal } from "./Reveal";

const Hero = () => {
  return (
    <section id="accueil" className="relative overflow-hidden bg-[#fcfbf7] py-12 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-8 items-center">
          
          {/* --- BLOC CONTENU (GAUCHE - 7 Colonnes) --- */}
          <div className="lg:col-span-7 space-y-8 max-w-2xl lg:max-w-none">
            <Reveal>
              <p className="text-xs font-medium uppercase tracking-[0.35em] text-[#b08d5b]">
                Institut de Beauté & Spa de Luxe
              </p>
              
              <h1 className="mt-4 font-serif text-4xl leading-[1.1] text-[#2c2520] sm:text-5xl lg:text-6xl tracking-tight">
                L'art du <em className="text-[#b08d5b] not-italic">bien-être d'exception</em> en RDC
              </h1>
              
              <p className="mt-6 text-base leading-relaxed text-[#5a4f47] sm:text-lg">
                À Lubumbashi, SIIOU réinvente l'expérience du soin haut de gamme : protocoles signature,
                thérapeutes diplômées et cosmétiques de prestige Thalgo, au service d'une beauté
                authentique et d'une sérénité durable.
              </p>
              
              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-full bg-[#c5a880] px-8 py-4 text-center text-sm font-medium text-[#fcfbf7] shadow-sm transition-all duration-300 hover:scale-105 hover:bg-[#b08d5b]"
                >
                  Réserver un soin
                </a>
              </div>
            </Reveal>

            {/* --- BANDEAU FIDÉLITÉ (Intégré fluidement) --- */}
            <Reveal delay={0.2}>
              <div className="max-w-xl rounded-2xl border border-[#e8e2d6] bg-[#b08d5b]/5 py-4 px-5 transition-all duration-300 hover:bg-[#b08d5b]/10">
                <div className="flex items-start gap-3.5">
                  <div className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#b08d5b]/10 text-[#b08d5b]">
                    <Gift size={16} strokeWidth={1.5} />
                  </div>
                  <p className="text-sm text-[#2c2520] leading-snug">
                    <span className="font-serif font-semibold block sm:inline">Votre Fidélité Récompensée :</span>{" "}
                    <span className="text-[#5a4f47]">10% sur le montant total cumulé après 10 séances</span>
                  </p>
                </div>
              </div>
            </Reveal>

            {/* --- BLOC STATISTIQUES ET AVIS --- */}
            <Reveal delay={0.4}>
              <div className="pt-4 flex flex-wrap items-center gap-6 sm:gap-8 border-t border-[#e8e2d6]/60">
                {/* Clientes */}
                <div className="flex shrink-0 items-center gap-3">
                  <div className="flex -space-x-2">
                    {[ig1, ig2, ig3, ig4].map((src, i) => (
                      <img
                        key={i}
                        src={src}
                        alt=""
                        aria-hidden="true"
                        width={40}
                        height={40}
                        className="h-10 w-10 rounded-full border-2 border-[#fcfbf7] object-cover shadow-sm transition-transform duration-300 hover:scale-110 hover:z-10"
                      />
                    ))}
                  </div>
                  <div>
                    <p className="font-serif text-xl font-semibold text-[#2c2520]">+1 200</p>
                    <p className="text-[10px] uppercase tracking-[0.15em] text-[#5a4f47]">
                      Clientes satisfaites
                    </p>
                  </div>
                </div>

                {/* Séparateur */}
                <div className="hidden h-8 w-px bg-[#e8e2d6] sm:block" aria-hidden="true" />

                {/* Avis Google */}
                <div className="shrink-0">
                  <div className="flex items-center gap-1 text-[#c5a880]">
                    {[0, 1, 2, 3, 4].map((i) => (
                      <Star key={i} size={12} fill="currentColor" strokeWidth={0} />
                    ))}
                    <span className="ml-2 font-serif text-base font-medium text-[#2c2520]">4,9 / 5</span>
                  </div>
                  <p className="mt-1 text-[10px] uppercase tracking-[0.15em] text-[#5a4f47]">
                    Avis Google · 280+ témoignages
                  </p>
                </div>
              </div>
            </Reveal>
          </div>

          {/* --- BLOC VISUEL ASYMÉTRIQUE (DROITE - 5 Colonnes) --- */}
          <div className="lg:col-span-5 relative mt-8 lg:mt-0">
            <Reveal delay={0.3} className="relative mx-auto max-w-md lg:max-w-none aspect-[4/5] sm:aspect-[3/4] lg:aspect-square">
              
              {/* Image Principale (Arrière-plan, décalée vers le haut/droite) */}
              <div className="absolute right-0 top-0 w-[82%] aspect-[3/4] overflow-hidden rounded-3xl shadow-xl transition-all duration-500 hover:shadow-2xl">
                <img
                  src={heroSpa}
                  alt="Cabine spa duo de l'institut SIIOU DRC à Lubumbashi"
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-700 hover:scale-105"
                />
              </div>
              
              {/* Image Secondaire (Premier plan, imbriquée en bas/gauche avec bordure blanche) */}
              <div className="absolute left-0 bottom-4 w-[58%] aspect-square overflow-hidden rounded-3xl border-[6px] border-[#fcfbf7] shadow-2xl transition-all duration-500 hover:shadow-3xl hover:scale-[1.02]">
                <img
                  src={heroFacial}
                  alt="Soin sourcils et visage réalisé chez SIIOU"
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-700 hover:scale-105"
                />
              </div>

              {/* Badge d'Expertise Flottant */}
              <div className="absolute -bottom-2 right-4 hidden items-center gap-3 rounded-2xl border border-[#e8e2d6] bg-white/95 px-4 py-3 shadow-xl backdrop-blur-md sm:flex transition-transform duration-300 hover:-translate-y-1">
                <div className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-[#c5a880]/15 text-[#b08d5b]">
                  <Users size={16} strokeWidth={1.5} />
                </div>
                <div>
                  <p className="font-serif text-sm font-semibold text-[#2c2520]">8 ans d'expertise</p>
                  <p className="text-[9px] uppercase tracking-[0.2em] text-[#5a4f47]">
                    Thérapeutes certifiées
                  </p>
                </div>
              </div>

              {/* Halo lumineux décoratif en arrière-plan */}
              <div className="absolute -right-4 -top-4 -z-10 h-48 w-48 rounded-full bg-[#c5a880]/10 blur-3xl pointer-events-none" />
            </Reveal>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;