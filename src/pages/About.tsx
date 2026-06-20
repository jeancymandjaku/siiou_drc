import { Flower2, MessageCircle } from "lucide-react";
import spa from "../assets/spa.webp";
import psy from "../assets/psy.webp";
import { Reveal } from "../components/Reveal";
import { values, WHATSAPP_URL } from "../constants/constants"; // Correction de l'orthographe du fichier

const About = () => {
  return (
    <div className="min-h-screen bg-[#fcfbf7] text-[#2c2520]">

      {/* Hero */}
      <section className="bg-[#fcfbf7] px-6 py-20 lg:px-15 lg:py-15">
        <Reveal className="mx-auto max-w-4xl text-center">
          <p className="text-xs font-medium uppercase tracking-[0.35em] text-[#b08d5b]">
            Notre Maison
          </p>
          <h1 className="mt-5 font-serif text-4xl leading-tight text-[#2c2520] sm:text-5xl lg:text-6xl">
            L'histoire d'une <em className="italic text-[#b08d5b]">parenthèse</em> de bien-être
          </h1>
          <div className="mx-auto mt-8 h-px w-24 bg-[#c5a880]" />
          <p className="mx-auto mt-8 max-w-2xl text-base leading-relaxed text-[#5a4f47] sm:text-lg">
            SIIOU est né d'une conviction simple : la beauté véritable s'épanouit lorsque le corps
            est apaisé et l'esprit en paix. Au cœur de Lubumbashi, nous avons créé un
            refuge dédié à l'art du soin.
          </p>
        </Reveal>
      </section>

      {/* Story with images */}
      <section className="bg-[#f7f4ef] px-6 py-24 lg:px-10">
        <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-2 lg:gap-20">
          <Reveal className="relative h-[460px] sm:h-[560px]">
            <img
              src={psy}
              alt="Présentoir de produits Thalgo à l'institut SIIOU DRC à Lubumbashi"
              width={896}
              height={1152}
              sizes="(max-width: 1024px) 80vw, 40vw"
              className="pointer-events-none absolute left-0 top-0 h-[80%] w-[78%] rounded-3xl object-cover shadow-xl"
            />
            <img
              src={spa}
              alt="Soin du visage haut de gamme dans une cabine SIIOU DRC"
              loading="lazy"
              width={896}
              height={850}
              sizes="(max-width: 1024px) 55vw, 25vw"
              className="pointer-events-none absolute bottom-0 right-0 h-[55%] w-[55%] rounded-3xl border-[6px] border-[#f7f4ef] object-cover shadow-2xl"
            />
          </Reveal>
          <Reveal delay={2}>
            <p className="text-xs font-medium uppercase tracking-[0.35em] text-[#b08d5b]">
              Notre Philosophie
            </p>
            <h2 className="mt-4 font-serif text-3xl text-[#2c2520] sm:text-4xl">
              Un art de vivre, un art du soin
            </h2>
            <p className="mt-6 text-base leading-relaxed text-[#5a4f47]">
              Inspirés par les rituels traditionnels d'Asie et les avancées modernes de la cosmétique,
              nos protocoles allient tradition et innovation. Chaque soin est une cérémonie : la
              lumière tamisée, les arômes choisis, les gestes précis de nos thérapeutes vous
              invitent à un voyage sensoriel hors du temps.
            </p>
            <p className="mt-4 text-base leading-relaxed text-[#5a4f47]">
              Nous croyons que prendre soin de soi n'est pas un luxe, c'est une nécessité. Notre
              mission est de faire de chaque visite un moment de reconnexion profonde avec
              vous-même.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-[#c5a880] px-8 py-4 text-sm font-medium text-[#fcfbf7] shadow-sm transition hover:scale-105 hover:bg-[#b08d5b]"
              >
                <MessageCircle size={16} /> Réserver sur WhatsApp
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Values */}
      <section className="bg-[#fcfbf7] px-6 py-24 lg:px-10">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-xs font-medium uppercase tracking-[0.35em] text-[#b08d5b]">
              Nos Valeurs
            </p>
            <h2 className="mt-4 font-serif text-3xl text-[#2c2520] sm:text-4xl lg:text-5xl">
              Quatre piliers, <em className="italic text-[#b08d5b]">une promesse</em>
            </h2>
          </div>
          <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((v) => (
              <Reveal
                key={v.title}
                className="rounded-3xl border border-[#e8e2d6] bg-white/60 p-8 text-center transition hover:-translate-y-1 hover:shadow-xl"
              >
                <div className="mx-auto mb-6 inline-flex h-14 w-14 items-center justify-center rounded-full bg-[#c5a880]/15 text-[#b08d5b]">
                  <v.icon size={24} strokeWidth={1.5} />
                </div>
                <h3 className="font-serif text-xl text-[#2c2520]">{v.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-[#5a4f47]">{v.text}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Team / signature */}
      <section className="bg-[#f7f4ef] px-6 py-24 lg:px-10">
        <Reveal className="mx-auto max-w-4xl text-center">
          <Flower2 className="mx-auto text-[#c5a880]" size={36} strokeWidth={1.2} />
          <h2 className="mt-6 font-serif text-3xl text-[#2c2520] sm:text-4xl">
            Une équipe passionnée à votre service
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-[#5a4f47]">
            Nos thérapeutes, esthéticiennes et prothésistes ongulaires sont formées aux meilleures
            techniques internationales. Elles partagent toutes la même exigence : faire de votre
            passage chez SIIOU un souvenir mémorable.
          </p>
        </Reveal>
      </section>

      {/* CTA */}
      <section className="bg-[#fcfbf7] px-6 py-20 lg:px-10">
        <div className="relative mx-auto max-w-6xl overflow-hidden rounded-3xl bg-[#2c2520] px-8 py-20 text-center sm:px-16">
          <div className="absolute -left-20 -top-20 h-72 w-72 rounded-full bg-[#c5a880]/20 blur-3xl" />
          <div className="absolute -bottom-24 -right-16 h-80 w-80 rounded-full bg-[#c5a880]/10 blur-3xl" />
          <h2 className="relative mx-auto max-w-3xl font-serif text-3xl text-[#fcfbf7] sm:text-4xl">
            Venez vivre <em className="italic text-[#c5a880]">l'expérience</em>
          </h2>
          <div className="relative mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-[#c5a880] px-8 py-4 text-sm font-medium text-[#2c2520] transition hover:scale-105 hover:bg-[#d4bb96]"
            >
              <MessageCircle size={18} /> Réserver un soin
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}

export default About;