import { Reveal } from "./Reveal";
import { services } from "../constants/contants";
import { Link } from "react-router-dom";

const ServicesCom = () => {
  return (
    <section id="services" className="bg-[#fcfbf7] pt-12 pb-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-medium uppercase tracking-[0.35em] text-[#b08d5b]">
            L'Expérience Signature
          </p>
          <h2 className="mt-4 font-serif text-3xl text-[#2c2520] sm:text-4xl lg:text-5xl">
            Nos Rituels Signatures
          </h2>
          <p className="mt-5 text-base text-[#5a4f47]">
            Découvrez nos trois pôles d'excellence dédiés à votre beauté et à votre relaxation.
          </p>
        </div>
        
        <div className="mt-16 grid gap-8 md:grid-cols-3">
          {services.map((s, i) => (
            <Reveal
              as="article"
              key={s.title}
              delay={(Math.min(i + 1, 4)) as 1 | 2 | 3 | 4}
              className="group rounded-3xl border border-[#e8e2d6] bg-white/60 p-8 transition-all duration-500 cursor-pointer hover:-translate-y-1 hover:shadow-xl"
            >
              <div className="mb-6 inline-flex h-14 w-14 items-center justify-center rounded-full bg-[#c5a880]/15 text-[#b08d5b] transition group-hover:bg-[#c5a880] group-hover:text-white">
                <s.icon size={24} strokeWidth={1.5} />
              </div>
              <h3 className="font-serif text-2xl text-[#2c2520]">{s.title}</h3>
              <p className="mt-4 text-sm leading-relaxed text-[#5a4f47]">{s.text}</p>
            </Reveal>
          ))}
        </div>
        
        <div className="mt-14 text-center">
          {/* 
            2. Remplacement de <a> par <Link> 
            et de href="services" par to="/services"
          */}
          <Link
            to="/services"
            className="inline-block rounded-full border border-[#2c2520] px-8 py-4 text-sm font-medium text-[#2c2520] transition hover:bg-[#2c2520] hover:text-[#fcfbf7]"
          >
            Voir la carte complète des soins
          </Link>
        </div>
      </div>
    </section>
  )
}

export default ServicesCom;