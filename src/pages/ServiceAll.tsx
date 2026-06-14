import { useMemo, useState } from "react";
import PriceRow from "@/components/priceRow";
import { categories } from "@/constants/contants";
import { bookingHref } from "@/lib/utils";
import { Reveal } from "@/components/Reveal";

const Services = () => {
  const [selectedItems, setSelectedItems] = useState<string[]>([]);
  const [selectedCategory, setSelectedCategory] = useState("all");

  const selectedMessage = useMemo(() => {
    return selectedItems.map((label, index) => `${index + 1}. ${label}`).join("\n");
  }, [selectedItems]);

  const filteredCategories = useMemo(
    () =>
      selectedCategory === "all"
        ? categories
        : categories.filter((category) => category.id === selectedCategory),
    [selectedCategory],
  );

  const handleToggleItem = (label: string) => {
    setSelectedItems((current) =>
      current.includes(label)
        ? current.filter((item) => item !== label)
        : [...current, label],
    );
  };

  const clearSelection = () => setSelectedItems([]);

  const openWhatsApp = () => {
    if (!selectedItems.length) return;
    window.open(bookingHref(selectedMessage), "_blank");
  };

  return (
    <main className="bg-[#fcfbf7] py-24 scroll-smooth">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <Reveal>
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-xs font-medium uppercase tracking-[0.35em] text-[#b08d5b]">
              Carte des soins
            </p>
            <h1 className="mt-4 font-serif text-3xl text-[#2c2520] sm:text-4xl lg:text-5xl">
              Nos Services et Tarifs
            </h1>
            <p className="mt-5 text-base text-[#5a4f47]">
              Les places dans nos cabines privées sont limitées, surtout en fin de semaine.
              Anticipez votre moment de bonheur en nous contactant directement par WhatsApp.
            </p>

            {/* --- BLOC CARTE DE FIDÉLITÉ --- */}
            <div className="mt-8 rounded-2xl border border-[#e8e2d6] bg-[#b08d5b]/5 p-5 text-left sm:p-6">
              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#b08d5b] text-white font-serif text-lg">
                  ★
                </div>
                <div>
                  <h3 className="font-serif text-lg font-semibold text-[#2c2520]">
                    Votre Fidélité Récompensée : Avantage Privilège
                  </h3>
                  <p className="mt-2 text-sm text-[#5a4f47] leading-relaxed">
                    Profitez de notre <strong>carte de fidélité automatique</strong>. Après chaque cycle de{" "}
                    <strong>10 séances</strong>, vous bénéficiez d'une réduction de <strong>10% sur le montant total cumulé</strong>{" "}
                    lors de vos commandes de services à la 11ème séance.
                  </p>
                  <div className="mt-3 inline-block rounded bg-white px-3 py-1.5 text-xs text-[#8f7c68] border border-[#e8e2d6]">
                    <span className="font-semibold text-[#b08d5b]">Exemple concret :</span> Si vous dépensez un total de 1 000 $ sur vos 10 premières séances, un crédit de <strong>100 $ (10%)</strong> sera inscrit sur votre carte et déduit de votre 11ème séance.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Reveal>

        <div className="mt-12 flex flex-col gap-8 lg:grid lg:grid-cols-[1.35fr_0.65fr] lg:items-start lg:gap-10">
          <div>
            <div className="mb-8 flex flex-wrap items-center gap-2">
              <button
                type="button"
                onClick={() => setSelectedCategory("all")}
                className={`rounded-full border px-4 py-2 text-sm font-semibold transition ${
                  selectedCategory === "all"
                    ? "border-[#b08d5b] bg-[#b08d5b] text-white"
                    : "border-[#e8e2d6] bg-white text-[#2c2520] hover:border-[#b08d5b]"
                }`}
              >
                Tous
              </button>
              {categories.map((category) => (
                <button
                  key={category.id}
                  type="button"
                  onClick={() => setSelectedCategory(category.id)}
                  className={`rounded-full border px-4 py-2 text-sm font-semibold transition ${
                    selectedCategory === category.id
                      ? "border-[#b08d5b] bg-[#b08d5b] text-white"
                      : "border-[#e8e2d6] bg-white text-[#2c2520] hover:border-[#b08d5b]"
                  }`}
                >
                  {category.title}
                </button>
              ))}
            </div>

            <div className="space-y-16">
              {filteredCategories.map((category) => (
                <section
                  key={category.id}
                  className="rounded-[2rem] border border-[#e8e2d6] bg-white/80 p-8 shadow-sm"
                >
                  <div className="mb-8">
                    <h2 className="font-serif text-2xl text-[#2c2520]">{category.title}</h2>
                    <p className="mt-3 text-sm leading-relaxed text-[#5a4f47]">{category.seo}</p>
                  </div>

                  {/* 1. RENDU DES GROUPES CLASSIQUES */}
                  {category.groups?.map((group, groupIdx) => {
                    return (
                      <div key={`g-${groupIdx}`} className="mb-10 last:mb-0">
                        {group.title ? (
                          <h3 className="mb-4 text-lg font-semibold text-[#2c2520]">{group.title}</h3>
                        ) : null}
                        <ul className="space-y-2">
                          {group.items.map((item, itemIdx) => {
                            // On crée un identifiant textuel simple et unique pour le panier WhatsApp
                            const label = group.title 
                              ? `${category.title} (${group.title}) — ${item.name}`
                              : `${category.title} — ${item.name}`;
                            return (
                              <PriceRow
                                key={`item-${itemIdx}-${item.price}`}
                                item={item}
                                checked={selectedItems.includes(label)}
                                onToggle={() => handleToggleItem(label)}
                              />
                            );
                          })}
                        </ul>
                      </div>
                    );
                  })}

                  {/* 2. RENDU DES SOUS-SECTIONS (LASERS) */}
                  {category.subSections?.map((subSection, subSecIdx) => (
                    <div 
                      key={`ss-${subSecIdx}`} 
                      className="mt-10 pt-6 first:mt-0 first:pt-0 border-t border-[#e8e2d6]/60 first:border-0"
                    >
                      <h3 className="mb-6 font-serif text-xl font-semibold text-[#b08d5b] tracking-wide">
                        {subSection.label}
                      </h3>
                      <div className="space-y-8">
                        {subSection.groups.map((group, groupIdx) => {
                          const currentGroupTitle = group.title ?? subSection.label;
                          return (
                            <div key={`ss-g-${groupIdx}`} className="mb-6 last:mb-0">
                              {group.title ? (
                                <h4 className="mb-4 text-base font-semibold text-[#2c2520] border-l-2 border-[#c5a880] pl-3">
                                  {group.title}
                                </h4>
                              ) : null}
                              <ul className="space-y-2">
                                {group.items.map((item, itemIdx) => {
                                  const label = `${category.title} (${subSection.label} - ${currentGroupTitle}) — ${item.name}`;
                                  return (
                                    <PriceRow
                                      key={`ss-i-${itemIdx}-${item.price}`}
                                      item={item}
                                      checked={selectedItems.includes(label)}
                                      onToggle={() => handleToggleItem(label)}
                                    />
                                  );
                                })}
                              </ul>
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  ))}
                </section>
              ))}
            </div>
          </div>

          {/* Sidebar de réservation */}
          <aside className="lg:sticky lg:top-6">
            <div className="rounded-[2rem] border border-[#e8e2d6] bg-white/90 p-8 shadow-sm shadow-slate-200/40">
              <div className="mb-6">
                <p className="text-xs font-medium uppercase tracking-[0.35em] text-[#b08d5b]">
                  Réservation
                </p>
                <h2 className="mt-3 text-2xl font-semibold text-[#2c2520]">Réserver vos soins</h2>
              </div>

              <div className="space-y-4 border-b border-[#e8e2d6] pb-6">
                <div>
                  <p className="text-sm text-[#5a4f47]">Sélections</p>
                  <p className="mt-1 text-lg font-semibold text-[#2c2520]">{selectedItems.length}</p>
                </div>
                {selectedItems.length ? (
                  <button
                    type="button"
                    onClick={clearSelection}
                    className="rounded-full border border-[#e8e2d6] px-4 py-2 text-sm font-semibold text-[#2c2520] transition hover:border-[#b08d5b] hover:text-[#b08d5b]"
                  >
                    Tout désélectionner
                  </button>
                ) : null}
              </div>

              <div className="mt-6 space-y-4">
                <button
                  type="button"
                  disabled={selectedItems.length === 0}
                  onClick={openWhatsApp}
                  className="w-full rounded-full bg-[#b08d5b] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#a67646] disabled:cursor-not-allowed disabled:opacity-50"
                >
                  Réserver sur WhatsApp
                </button>
                <p className="text-xs leading-relaxed text-[#8f7c68]">
                  Votre sélection reste visible en permanence pendant le défilement.
                </p>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </main>
  );
};

export default Services;
