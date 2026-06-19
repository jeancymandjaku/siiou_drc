import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useState } from 'react';
import ig1 from '../assets/ig-1.webp';
import ig2 from '../assets/ig-2.webp';
import ig3 from '../assets/ig-3.webp';
import ig4 from '../assets/ig-4.webp';
import ig5 from '../assets/ig-5.webp';
import ig6 from '../assets/ig-6.webp';
import { testimonials } from '../constants/contants';

const TestimonialsAndGallery = () => {
  const [idx, setIdx] = useState(0);
  const gallery: { src: string; alt: string }[] = [
    { src: ig1, alt: "Massage duo aux pierres chaudes à l'institut SIIOU DRC Lubumbashi" },
    { src: ig2, alt: "Massage thérapeutique du dos par une esthéticienne SIIOU DRC" },
    { src: ig3, alt: "Bain de pieds aux pétales de rose — spa pédicure SIIOU DRC" },
    { src: ig4, alt: "Soin du visage hydratant Thalgo en cabine SIIOU DRC" },
    { src: ig5, alt: "Soin sourcils professionnel à l'institut de beauté SIIOU DRC" },
    { src: ig6, alt: "Pose de vernis semi-permanent bordeaux — beauty bar SIIOU DRC" },
  ];
  return (
    <section className="bg-[#fcfbf7] py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="grid gap-16 lg:grid-cols-2">
          <div>
            <p className="text-xs font-medium uppercase tracking-[0.35em] text-[#b08d5b]">
              Témoignages
            </p>
            <h2 className="mt-4 font-serif text-3xl text-[#2c2520] sm:text-4xl">
              Elles ont vécu l'expérience SIIOU
            </h2>
            <div className="mt-10 rounded-3xl border border-[#e8e2d6] bg-white/60 p-8 sm:p-10">
              <span className="font-serif text-6xl leading-none text-[#c5a880]">"</span>
              <p className="-mt-4 font-serif text-xl italic leading-relaxed text-[#2c2520] sm:text-2xl">
                {testimonials[idx].quote}
              </p>
              <p className="mt-6 text-sm tracking-wide text-[#b08d5b]">
                — {testimonials[idx].author}
              </p>
              <div className="mt-8 flex items-center justify-between">
                <div className="flex gap-2">
                  {testimonials.map((_, i) => (
                    <button
                      key={i}
                      onClick={() => setIdx(i)}
                      aria-label={`Témoignage ${i + 1}`}
                      className={`h-1.5 rounded-full transition-all ${
                        i === idx ? "w-8 bg-[#c5a880]" : "w-4 bg-[#e8e2d6]"
                      }`}
                    />
                  ))}
                </div>
                <div className="flex gap-2">
                  <button
                    onClick={() =>
                      setIdx((idx - 1 + testimonials.length) % testimonials.length)
                    }
                    className="rounded-full border border-[#e8e2d6] p-2 text-[#2c2520] hover:bg-[#f7f4ef]"
                    aria-label="Précédent"
                  >
                    <ChevronLeft size={18} />
                  </button>
                  <button
                    onClick={() => setIdx((idx + 1) % testimonials.length)}
                    className="rounded-full border border-[#e8e2d6] p-2 text-[#2c2520] hover:bg-[#f7f4ef]"
                    aria-label="Suivant"
                  >
                    <ChevronRight size={18} />
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="flex items-center justify-between">
              <div>
                <p className="text-xs font-medium uppercase tracking-[0.35em] text-[#b08d5b]">
                  Galerie
                </p>
                <h2 className="mt-4 font-serif text-3xl text-[#2c2520] sm:text-4xl">
                  L'institut en images
                </h2>
              </div>
              <a
                href="https://instagram.com/siiou_drc"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-[#c5a880] px-4 py-2 text-xs tracking-wide text-[#b08d5b]"
              >
                 @siiou_drc
              </a>
            </div>
            <div className="mt-10 grid grid-cols-3 gap-3">
              {gallery.map((g, i) => (
                <img
                  key={i}
                  src={g.src}
                  alt={g.alt}
                  loading="lazy"
                  width={512}
                  height={512}
                  className="aspect-square w-full rounded-2xl object-cover transition hover:opacity-90 hover:scale-105 transition duration-500 cursor-pointer "
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default TestimonialsAndGallery