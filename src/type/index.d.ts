
type NavItem = {
  label: string;
  to?: string;
  href?: string;
};


type RevealProps = {
  children: ReactNode;
  as?: ElementType;
  delay?: number;
  className?: string;
};

type Item = { name: string; price: string };
type Group = { title?: string; items: Item[] };
type SubSection = { label: string; groups: Group[] };
type Category = {
  id: string;
  title: string;
  icon: typeof Hand;
  image: string;
  seo: string;
  groups?: Group[];
  subSections?: SubSection[];
};

