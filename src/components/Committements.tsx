import { commitments } from "../constants/constants"
import { Reveal } from "./Reveal"

const Committements = () => {
  return (
    <section id="apropos" className="bg-[#f7f4ef] py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-medium uppercase tracking-[0.35em] text-[#b08d5b]">
            Nos Engagements
          </p>
          <h2 className="mt-4 font-serif text-3xl text-[#2c2520] sm:text-4xl lg:text-5xl">
            L'art du détail,{" "}
            <em className="italic text-[#b08d5b]">la passion de l'excellence</em>
          </h2>
        </div>
        <div className="mt-16 grid gap-12 md:grid-cols-3 cursor-pointer">
          {commitments.map((c, i) => (
            <Reveal
              key={c.title}
              delay={(Math.min(i + 1, 4)) as 1 | 2 | 3 | 4}
              className="text-center"
            >
              <div className="mx-auto mb-6 inline-flex h-16 w-16 items-center justify-center rounded-full border border-[#c5a880] text-[#b08d5b]">
                <c.icon size={26} strokeWidth={1.5} />
              </div>
              <h3 className="font-serif text-xl text-[#2c2520]">{c.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-[#5a4f47]">{c.text}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Committements