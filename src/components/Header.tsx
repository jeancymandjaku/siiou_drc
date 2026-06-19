import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { WHATSAPP_URL } from "../constants/contants";
import logo from "../assets/logo.svg";

// Interface supposée pour NavItem
interface NavItem {
  label: string;
  to?: string;
  href?: string;
}

const navItems: NavItem[] = [
  { label: "Accueil", to: "/" },
  { label: "Services", to: "/services" },
  { label: "À Propos", to: "/about" },
  { label: "Contact", to: "/contact" },
];

const Header = () => {
  const [open, setOpen] = useState(false);
  const currentPath = useLocation().pathname;

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("keydown", onKey);
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = prev;
    };
  }, [open]);

  const isActive = (item: NavItem) => item.to !== undefined && item.to === currentPath;

  const renderLink = (item: NavItem, onClick?: () => void, mobile = false) => {
    const active = isActive(item);

    // En mobile, on utilise flex au lieu de block pour que le survol 
    // et le clic s'adaptent uniquement à la taille du texte.
    const base = mobile
      ? "flex items-center py-3 text-base tracking-wide text-[#2c2520] transition-colors"
      : "flex items-center h-full text-sm tracking-wide text-[#2c2520] transition hover:text-[#b08d5b]";

    // CORRECTION ICI : Gestion propre du hover mobile et desktop sur l'élément enfant <span>
    const activeCls = active
      ? "text-[#b08d5b] [&>span]:after:scale-x-100"
      : "text-[#2c2520] hover:text-[#b08d5b] [&>span]:after:scale-x-0 hover:[&>span]:after:scale-x-100";

    const className = `${base} ${activeCls}`.trim();

    const linkContent = (
      <span className="relative py-2 after:absolute after:bottom-1 after:left-0 after:h-px after:w-full after:bg-[#c5a880] after:origin-left after:transition-transform after:duration-200 ease-out">
        {item.label}
      </span>
    );

    if (item.to) {
      return (
        <Link key={item.label} to={item.to} onClick={onClick} className={className}>
          {linkContent}
        </Link>
      );
    }
    return (
      <a key={item.label} href={item.href} onClick={onClick} className={className}>
        {linkContent}
      </a>
    );
  };

  return (
    <header className="sticky top-0 z-50 border-b border-[#e8e2d6]/60 bg-[#fcfbf7]/85 backdrop-blur-md">
      <div className="mx-auto flex h-20 items-center justify-between px-6 lg:px-10 max-w-7xl">

        {/* Logo */}
        {/* Logo agrandi */}
        <Link
          to="/"
          className="flex h-full items-center justify-center"
          aria-label="SIIOU — Accueil"
        >
          <img
            src={logo}
            alt="SIIOU"

            className="h-16 w-16 object-contain"
            width={84}
            height={84}
          />
        </Link>

        {/* Liens de navigation Desktop */}
        <nav aria-label="Navigation principale" className="hidden items-center gap-10 md:flex h-full">
          {navItems.map((item) => renderLink(item))}
        </nav>

        {/* Bouton d'action Desktop */}
        <div className="hidden items-center md:flex h-full">
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noreferrer"
            className="rounded-full bg-[#c5a880] px-6 py-3 text-sm font-medium text-[#fcfbf7] shadow-sm transition-all hover:scale-105 hover:bg-[#b08d5b] hover:shadow-md"
          >
            Prendre Rendez-vous
          </a>
        </div>

        {/* Menu Mobile Trigger */}
        <div className="flex items-center md:hidden h-full">
          <button
            type="button"
            onClick={() => setOpen((o) => !o)}
            className="inline-flex h-10 w-10 items-center justify-center rounded-full text-[#2c2520] transition hover:bg-[#c5a880]/10"
            aria-label={open ? "Fermer le menu" : "Ouvrir le menu"}
            aria-expanded={open}
            aria-controls="mobile-nav"
          >
            <span className="relative block h-6 w-6">
              <Menu
                size={24}
                className={`absolute inset-0 transition-all duration-300 ${open ? "rotate-90 opacity-0" : "rotate-0 opacity-100"
                  }`}
              />
              <X
                size={24}
                className={`absolute inset-0 transition-all duration-300 ${open ? "rotate-0 opacity-100" : "-rotate-90 opacity-0"
                  }`}
              />
            </span>
          </button>
        </div>
      </div>

      {/* Menu Déroulant Mobile */}
      <div
        id="mobile-nav"
        className={`md:hidden overflow-hidden border-t border-[#e8e2d6] bg-[#fcfbf7] transition-[max-height,opacity] duration-300 ease-out ${open ? "max-h-[420px] opacity-100" : "max-h-0 opacity-0"
          }`}
        aria-hidden={!open}
      >
        {/* Changement ici : items-start pour que les liens ne s'étirent pas à 100% de la largeur */}
        <nav aria-label="Navigation mobile" className="flex flex-col items-start gap-1 px-6 py-4">
          {navItems.map((item) => renderLink(item, () => setOpen(false), true))}
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noreferrer"
            onClick={() => setOpen(false)}
            className="mt-3 w-full rounded-full bg-[#c5a880] px-6 py-3 text-center text-sm font-medium text-[#fcfbf7] transition hover:bg-[#b08d5b]"
          >
            Prendre Rendez-vous
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Header;