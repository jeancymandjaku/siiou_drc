import { useState } from "react";
import {
  MapPin,
  Phone,
  Mail,
  MessageCircle,
  Send,
  CheckCircle2,
} from "lucide-react";
import { Reveal } from "../components/Reveal";
import { WHATSAPP_URL } from "../constants/contants";

const Contact = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [sent, setSent] = useState(false);

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const text = encodeURIComponent(
      `Bonjour SIIOU,\n\nJe m'appelle ${form.name}.\nTéléphone : ${form.phone}\nEmail : ${form.email}\n\n${form.message}`,
    );

    setSent(true);
    // Utilisation de la constante globale WHATSAPP_URL pour construire le lien dynamique
    window.open(`${WHATSAPP_URL}&text=${text}`, "_blank", "noopener,noreferrer");
  };

  return (
    // Centralisation du background global ici pour éviter les répétitions sur chaque section
    <div className="min-h-screen bg-[#fcfbf7] text-[#2c2520]">

      {/* Hero */}
      <section className="px-6 py-20 lg:px-10 lg:py-24">
        <Reveal className="mx-auto max-w-4xl text-center">
          <p className="text-xs font-medium uppercase tracking-[0.35em] text-[#b08d5b]">
            Contact & Réservation
          </p>
          <h1 className="mt-5 font-serif text-4xl leading-tight text-[#2c2520] sm:text-5xl lg:text-6xl">
            Réservez votre <em className="italic text-[#b08d5b]">moment d'évasion</em>
          </h1>
          <div className="mx-auto mt-8 h-px w-24 bg-[#c5a880]" />
          <p className="mx-auto mt-8 max-w-2xl text-base leading-relaxed text-[#5a4f47] sm:text-lg">
            Notre équipe se tient à votre disposition pour répondre à vos questions et vous
            accompagner dans le choix de votre soin.
          </p>
        </Reveal>
      </section>

      {/* Form + Info */}
      <section className="px-6 pb-24 lg:px-10">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-5">
          {/* Formulaire */}
          <Reveal className="lg:col-span-3">
            <div className="rounded-3xl border border-[#e8e2d6] bg-white p-8 shadow-sm sm:p-10">
              <h2 className="font-serif text-2xl text-[#2c2520] sm:text-3xl">
                Demande de rendez-vous
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-[#5a4f47]">
                Confiez-nous votre demande en quelques instants : précisez le soin souhaité,
                votre disponibilité et vos préférences. Notre équipe vous répond personnellement
                via WhatsApp pour confirmer votre rendez-vous dans les meilleurs délais.
              </p>
              
              <form onSubmit={onSubmit} className="mt-8 grid gap-5 sm:grid-cols-2">
                <div className="sm:col-span-1">
                  <label className="text-xs uppercase tracking-wider text-[#5a4f47]">
                    Nom complet
                  </label>
                  <input
                    required
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    className="mt-2 w-full rounded-xl border border-[#e8e2d6] bg-[#fcfbf7] px-4 py-3 text-sm text-[#2c2520] outline-none transition focus:border-[#c5a880]"
                    placeholder="Votre nom"
                  />
                </div>
                <div className="sm:col-span-1">
                  <label className="text-xs uppercase tracking-wider text-[#5a4f47]">
                    Téléphone
                  </label>
                  <input
                    required
                    type="tel"
                    value={form.phone}
                    onChange={(e) => setForm({ ...form, phone: e.target.value })}
                    className="mt-2 w-full rounded-xl border border-[#e8e2d6] bg-[#fcfbf7] px-4 py-3 text-sm text-[#2c2520] outline-none transition focus:border-[#c5a880]"
                    placeholder="+243 ..."
                  />
                </div>
                <div className="sm:col-span-2">
                  <label className="text-xs uppercase tracking-wider text-[#5a4f47]">
                    Email
                  </label>
                  <input
                    type="email"
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    className="mt-2 w-full rounded-xl border border-[#e8e2d6] bg-[#fcfbf7] px-4 py-3 text-sm text-[#2c2520] outline-none transition focus:border-[#c5a880]"
                    placeholder="vous@exemple.com"
                  />
                </div>
                <div className="sm:col-span-2">
                  <label className="text-xs uppercase tracking-wider text-[#5a4f47]">
                    Votre message
                  </label>
                  <textarea
                    required
                    rows={5}
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    className="mt-2 w-full resize-none rounded-xl border border-[#e8e2d6] bg-[#fcfbf7] px-4 py-3 text-sm text-[#2c2520] outline-none transition focus:border-[#c5a880]"
                    placeholder="Soin souhaité, date et plage horaire idéales..."
                  />
                </div>
                <div className="sm:col-span-2 flex flex-col items-start gap-4 sm:flex-row sm:items-center sm:justify-between">
                  <button
                    type="submit"
                    className="inline-flex items-center gap-2 rounded-full bg-[#c5a880] px-8 py-4 text-sm font-medium text-[#fcfbf7] shadow-sm transition hover:scale-105 hover:bg-[#b08d5b]"
                  >
                    <Send size={16} /> Envoyer ma demande
                  </button>
                  {sent && (
                    <span className="inline-flex items-center gap-2 text-sm text-[#b08d5b]">
                      <CheckCircle2 size={16} /> Message ouvert dans WhatsApp
                    </span>
                  )}
                </div>
              </form>
            </div>
          </Reveal>

          {/* Colonne d'informations */}
          <Reveal as="aside" delay={2} className="lg:col-span-2">
            <div className="rounded-3xl bg-[#2c2520] p-8 text-[#fcfbf7] sm:p-10">
              <h3 className="font-serif text-xl text-[#c5a880]">Notre institut</h3>
              <ul className="mt-6 space-y-3 text-sm text-[#fcfbf7]/85">
                <li className="flex items-start gap-3">
                  <MapPin size={18} className="mt-0.5 shrink-0 text-[#c5a880]" />
                  <span>303 Avenue Mpala, Lubumbashi</span>
                </li>
                <li className="flex items-start gap-3">
                  <Phone size={18} className="mt-0.5 shrink-0 text-[#c5a880]" />
                  <a href="tel:+243815252514" className="hover:underline">+243 815 252 514</a>
                </li>
                <li className="flex items-start gap-3">
                  <Mail size={18} className="mt-0.5 shrink-0 text-[#c5a880]" />
                  <a href="mailto:contact@siiou.cd" className="hover:underline">contact@siiou.cd</a>
                </li>
              </ul>

              <div className="my-8 h-px w-full bg-[#fcfbf7]/15" aria-hidden="true" />

              <h3 className="font-serif text-xl text-[#c5a880]">Suivez-nous</h3>
              <div className="mt-5 flex flex-wrap gap-3">
                <a
                  href="https://instagram.com/siiou_drc"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Instagram"
                  className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-[#c5a880]/40 text-[#c5a880] transition hover:bg-[#c5a880] hover:text-[#2c2520]"
                >
                  IG
                </a>
                <a
                  href="#"
                  aria-label="Facebook"
                  className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-[#c5a880]/40 text-[#c5a880] transition hover:bg-[#c5a880] hover:text-[#2c2520]"
                >
                  FB
                </a>
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noreferrer"
                  aria-label="WhatsApp"
                  className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-[#c5a880]/40 text-[#c5a880] transition hover:bg-[#c5a880] hover:text-[#2c2520]"
                >
                  <MessageCircle size={16} />
                </a>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
};

export default Contact;