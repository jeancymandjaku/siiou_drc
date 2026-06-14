import {
  Flower2,
  Sparkles,
  Brush,
  Award,
  Leaf,
  Heart,
  ShieldCheck,
  Hand,
  Activity,
  Eye,
  Zap,
  
} from "lucide-react";
import onglet from "../assets/onglet.jpg"
import herofacial from '../assets/hero-facial.jpg'
import maquillage from '@/assets/maquuillage.jpg'
import ig2 from '@/assets/ig-2.jpg'
import ig1 from '@/assets/ig-1.jpg'
import epillation from '@/assets/epillation.jpg'

export const WHATSAPP_URL =
  "https://wa.me/243815252514?text=Bonjour%20SIIOU%2C%20je%20souhaite%20prendre%20rendez-vous.";

export const services = [
  {
    icon: Flower2,
    title: "Massages",
    text: "Massages relaxants, massages thaïlandais, aux pierres chaudes et massages thérapeutiques pour dénouer toutes vos tensions.",
  },
  {
    icon: Sparkles,
    title: "Soins et Visage",
    text: "Des protocoles de soins du visage sur-mesure pour redonner éclat, jeunesse et vitalité à votre peau grâce à des produits haut de gamme rigoureusement sélectionnés.",
  },
  {
    icon: Brush,
    title: "Beauty Bar — Onglerie",
    text: "Manucure et pédicure de prestige pour sublimer votre allure naturelle jusqu'au bout des doigts.",
  },
];

export const commitments = [
  {
    icon: Award,
    title: "Thérapeutes Expertes",
    text: "Nos praticiennes sont formées aux meilleures techniques internationales de relaxation et d'esthétique.",
  },
  {
    icon: Heart,
    title: "Cadre d'Exception",
    text: "Des cabines de soin privées, une musique douce, des arômes envoûtants : tout est pensé pour déconnecter vos sens.",
  },
  {
    icon: Leaf,
    title: "Produits Haut de Gamme — Thalgo",
    text: "Nous travaillons avec des cosmétiques marins d'exception et des huiles de qualité professionnelle, pour des résultats visibles dès la première séance.",
  },
  {
    icon: ShieldCheck,
    title: "Hygiène Irréprochable",
    text: "Stérilisation rigoureuse des instruments, serviettes à usage unique et protocoles sanitaires stricts pour votre sécurité.",
  },
];

export const testimonials = [
  {
    quote:
      "Un moment magique chez SIIOU. Le massage thaïlandais traditionnel m'a complètement libéré de mes tensions accumulées. Le personnel est d'une douceur incroyable.",
    author: "Sarah K.",
  },
  {
    quote:
      "La meilleure onglerie et le spa le plus propre de Lubumbashi. Le sens du détail et l'accueil sont tout simplement irréprochables.",
    author: "Marc L.",
  },
  {
    quote:
      "Une expérience sensorielle complète. Je ressors de chaque séance apaisée, rayonnante et reconnectée à moi-même.",
    author: "Aïcha M.",
  },
];


export const HOURS = [
  "Lundi : 13h00 – 18h00",
  "Mardi – Samedi : 9h00 – 18h00",
  "Dimanche : 10h00 – 17h00",
];

export const values = [
  {
    icon: Award,
    title: "Excellence",
    text: "Chaque geste, chaque produit, chaque détail est choisi avec exigence pour vous offrir le meilleur.",
  },
  {
    icon: Heart,
    title: "Bienveillance",
    text: "Nous accueillons chaque cliente comme une invitée d'honneur, dans un cocon d'attention sincère.",
  },
  {
    icon: Leaf,
    title: "Naturalité",
    text: "Nous privilégions des produits organiques et des protocoles respectueux de votre peau.",
  },
  {
    icon: Sparkles,
    title: "Raffinement",
    text: "Un cadre épuré, des matières nobles et une atmosphère pensée pour éveiller tous vos sens.",
  },
  {
    icon: ShieldCheck,
    title: "Hygiène",
    text: "Stérilisation rigoureuse des instruments, serviettes à usage unique et protocoles sanitaires irréprochables.",
  },
];

export const categories: Category[] = [
  {
    id: "mains-pieds",
    title: "Soins des Mains & des Pieds",
    icon: Hand,
    image: onglet,
    seo: "Découvrez l'excellence de la manucure et de la pédicure médicale à Lubumbashi et Kinshasa. Notre institut propose des rituels de beauté des mains et des pieds haut de gamme, combinant soins cutanés profonds, pose de vernis semi-permanent longue tenue et extensions en gel ou acrylique. Offrez à vos ongles une finition parfaite et un éclat durable dans un cadre exclusif.",
    groups: [
      {
        title: "Ongles",
        items: [
          { name: "Limage + ponçage", price: "15 $" },
          { name: "Pose vernis", price: "15 $" },
          { name: "Pose french", price: "20 $" },
          { name: "Pose semi-permanent", price: "30 $" },
          { name: "Pose semi-p. french", price: "35 $" },
          { name: "Dépose semi-permanent", price: "15 $" },
          { name: "Dépose semi-p. + pose vernis", price: "25 $" },
          { name: "Pose + dépose semi-permanent", price: "35$" },
          { name: "Pose + dépose semi-p. avec french", price: "40 $" },
          { name: "Pose tips + semi-p. (sans gel/acrylique)", price: "50 $" },
          { name: "Pose gel/acrylique + semi-p. sans tips", price: "50 $" },
          { name: "Pose gel/acrylique + semi-p. avec tips", price: "65 $" },
          { name: "Dépose acrylique + pose builder", price: "50 $" },
          { name: "Dépose acrylique + pose semi-p.", price: "45 $" },
          { name: "Remplissage", price: "50 $" },
          { name: "Pose gel/acrylique + semi-p. chablon", price: "70 $" },
          { name: "Dépose gel/acrylique", price: "25 $" },
          { name: "Pose chablon 1 doigt", price: "5 $" },
          { name: "Retouche par ongle / déco", price: "1-2 $" },
        ],
      },
      {
        title: "Mains",
        items: [
          { name: "Manucure", price: "25 $" },
          { name: "Manucure + pose vernis", price: "35 $" },
          { name: "Manucure + pose french", price: "40 $" },
          { name: "Manucure + pose semi-p.", price: "45 $" },
          { name: "Manucure + pose semi-p. french", price: "50 $" },
        ],
      },
      {
        title: "Pieds",
        items: [
          { name: "Pédicure Simple", price: "35 $" },
          { name: "Pédicure Spécialisée", price: "45 $" },
          { name: "Pédicure + pose vernis", price: "45 $" },
          { name: "Pédicure + pose french", price: "50 $" },
          { name: "Pédicure + pose semi-permanent", price: "55 $" },
          { name: "Pédicure + pose semi-p. french", price: "60 $" },
          { name: "Supplément Spa (Gommage & Massage)", price: "25 $" },
          { name: "Soins Parafinés", price: "20 $" },
          { name: "Jelly Spa", price: "20 $" },
        ],
      },
    ],
  },
  {
    id: "maquillage",
    title: "Maquillage Semi-Permanent",
    icon: Eye,
    image: herofacial,
    seo: "Sublimez les traits de votre visage grâce à l'art du maquillage semi-permanent et du microblading en RDC. Nos expertes en dermo-pigmentation restructurent vos sourcils poil par poil, soulignent votre regard d'un trait d'eye-liner graphique précis et redéfinissent le contour de vos lèvres pour un effet volumateur naturel. Des résultats impeccables, durables et sur-mesure.",
    groups: [
      {
        title: "Dermopigmentation",
        items: [
          { name: "Eye-liner supérieur ou inférieur", price: "200 $" },
          { name: "Eye-liner supérieur & inférieur", price: "300 $" },
          { name: "Sourcils", price: "250 $" },
          { name: "Contours des lèvres", price: "350 $" },
          { name: "Remplissage des lèvres", price: "450 $" },
          { name: "Retouche après 1 mois", price: "100 $" },
          { name: "Retouche annuelle", price: "1/2 prix de la zone" },
        ],
      },
      {
        title: "Microblading",
        items: [
          { name: "Sourcils", price: "300 $" },
          { name: "Retouche annuelle", price: "200 $" },
          { name: "Première retouche avant 3 mois", price: "150 $" },
        ],
      },
      {
        title: "Sourcils & Cils",
        items: [
          { name: "Teinture cils ou sourcils", price: "20 $" },
          { name: "Dépose cils", price: "30 $" },
          { name: "Extension des cils pose complète", price: "110 $" },
          { name: "Retouche extension cils avant 2 semaines", price: "60 $" },
          { name: "Retouche extension cils avant 3 semaines", price: "70 $" },
          { name: "Rehaussement Misencil cils", price: "85 $" },
          { name: "Lamination des sourcils", price: "60 $" },
        ],
      },
    ],
  },
  {
    id: "visage",
    title: "Soins Visage",
    icon: Sparkles,
    image: maquillage,
    seo: "Vivez l'expérience ultime du soin du visage haut de gamme à la Maison de Beauté SIIOU. En partenariat avec les rituels marins Thalgo et la technologie avancée Hydra Facial, nous traitons chaque type de peau de manière ciblée : hydratation intense, éclat immédiat, peeling rénovateur et soins anti-âge pro-collagène ou liftant au silicium marin pour corriger les signes du temps.",
    groups: [
      {
        title: "Soins Fondamentaux Thalgo",
        items: [
          { name: "Soin coup d'éclat", price: "100 $" },
          { name: "Soin fondamental de la mer hydratant", price: "120 $" },
          { name: "Hydra Facial", price: "180 $" },
          { name: "Hydra Facial anti-âge", price: "220 $" },
        ],
      },
      {
        title: "Soins Anti-Âge Thalgo",
        items: [
          { name: "Soin lissant détoxifiant spiruline boost", price: "135 $" },
          { name: "Soin lumière — Solution anti-tâches", price: "160 $" },
          { name: "Soin hyaluronique pro-collagène", price: "145 $" },
          { name: "Soin liftant silicium marin", price: "160 $" },
          { name: "Soin d'exception 1er soin lifting marin", price: "180 $" },
          { name: "Peeling", price: "100 $" },
          { name: "Microneedling", price: "200 $" },
        ],
      },
    ],
  },
  {
    id: "dermologie",
    title: "Dermologie — Cellu M6",
    icon: Activity,
    image: ig2,
    seo: "Révolutionnez votre silhouette avec la dermologie et le protocole Cellu M6 LPG. Cette technologie d'endermologie mondialement reconnue stimule délicatement la peau pour destocker les graisses résistantes, lisser la cellulite, raffermir les contours du corps et relancer la production naturelle de collagène et d'élastine. Des soins minceur personnalisés pour des résultats visibles et scientifiquement prouvés.",
    groups: [
      {
        items: [
          { name: "Soins personnalisés", price: "60 $" },
          { name: "Soin visage lift", price: "70 $" },
          { name: "Soin full minceur", price: "80 $" },
          { name: "Tenue endermowear", price: "20 $" },
        ],
      },
    ],
  },
  {
    id: "massages",
    title: "Nos Massages",
    icon: Flower2,
    image: ig1,
    seo: "Évadez-vous le temps d'un massage relaxant et thérapeutique d'exception. Des sessions courtes pour libérer instantanément les tensions du dos, du visage ou de la nuque, aux grands rituels holistiques : massages aux pierres chaudes, thérapies drainantes aux ventouses et modelages traditionnels thaïlandais aux huiles essentielles. Une véritable parenthèse de sérénité et de rééquilibrage énergétique.",
    groups: [
      {
        title: "Short Session",
        items: [
          { name: "Massage délassant visage & nuque ou visage & cuir chevelu", price: "45 $" },
          { name: "Massage du dos thérapeutique", price: "45 $" },
          { name: "Massage relaxant des jambes & pieds", price: "45 $" },
          { name: "Réflexologie", price: "50 $" },
        ],
      },
      {
        title: "Long Session",
        items: [
          { name: "Massage minceur et tonifiant", price: "80 $" },
          { name: "Massage relaxant aux huiles", price: "90 $" },
          { name: "Massage aux pierres chaudes", price: "100 $" },
          { name: "Massage Thai aroma", price: "100 $" },
          { name: "Massages aux ventouses", price: "100 $" },
          { name: "Massage femme enceinte", price: "90 $" },
          { name: "Soin du dos", price: "90 $" },
          { name: "Enveloppement", price: "60 $" },
          { name: "Gommage", price: "60 $" },
        ],
      },
    ],
  },
  {
    id: "lasers",
    title: "Nos Épilations Lasers",
    icon: Zap,
    image: epillation,
    seo: "Dites adieu aux poils grâce à notre technologie d'épilation laser définitive de dernière génération. Adaptée à tous les phototypes de peaux (peaux mates à foncées) à Kinshasa et Lubumbashi, notre expertise garantit une élimination progressive, sécurisée et indolore des poils. Découvrez nos fiches tarifs et forfaits sur-mesure pour hommes et femmes pour le visage, le maillot et le corps.",
    subSections: [
      {
        label: "Lifecycle Femmes",
        groups: [
          {
            title: "Visage",
            items: [
              { name: "Inter sourcils", price: "35 $" },
              { name: "Lèvre supérieure", price: "45 $" },
              { name: "Menton", price: "45 $" },
              { name: "Menton large", price: "70 $" },
              { name: "Favoris", price: "45 $" },
              { name: "Visage entier", price: "100 $" },
            ],
          },
          {
            title: "Maillot",
            items: [
              { name: "Maillot classique", price: "65 $" },
              { name: "Maillot échancré", price: "100 $" },
              { name: "Maillot intégral (S.I.F offert)", price: "140 $" },
              { name: "Sillon interfessier S.I.F", price: "45 $" },
            ],
          },
          {
            title: "Corps",
            items: [
              { name: "Aisselles", price: "65 $" },
              { name: "Auréoles mammaires", price: "45 $" },
              { name: "Mains", price: "45 $" },
              { name: "Avant-bras", price: "100 $" },
              { name: "Bras", price: "145 $" },
              { name: "Ligne abdominale", price: "45 $" },
              { name: "Pieds", price: "45 $" },
              { name: "Cuisses", price: "220 $" },
              { name: "Avant/Arrière cuisses", price: "130 $" },
              { name: "Jambes entières + pieds inclus", price: "345 $" },
            ],
          },
          {
            title: "Forfaits Femmes",
            items: [
              { name: "Demi-jambes + genoux + pieds nus", price: "175 $" },
              { name: "Maillot classique + aisselles", price: "100 $" },
              { name: "Maillot classique + aisselles + S.I.F.", price: "120 $" },
              { name: "Maillot échancré + aisselles", price: "130 $" },
              { name: "Maillot échancré + aisselles + S.I.F.", price: "140 $" },
              { name: "Maillot intégral + aisselles + S.I.F.", price: "175 $" },
              { name: "Demi-jambes + maillot classique + aisselles", price: "250 $" },
              { name: "Demi-jambes + maillot échancré + aisselles", price: "285 $" },
              { name: "Demi-jambes + maillot intégral + aisselles + S.I.F.", price: "350 $" },
              { name: "Jambes + maillot classique + aisselles", price: "410 $" },
              { name: "Jambes + maillot échancré + aisselles", price: "430 $" },
              { name: "Jambes + maillot intégral + aisselles", price: "470 $" },
              { name: "Jambes + maillot classique + aisselles + avant-bras", price: "510 $" },
              { name: "Jambes + maillot échancré + aisselles + avant-bras", price: "530 $" },
              { name: "Jambes + maillot intégral + aisselles + avant-bras + S.I.F. offert", price: "570 $" },
            ],
          },
        ],
      },
      {
        label: "Lifecycle Hommes",
        groups: [
          {
            title: "Visage",
            items: [
              { name: "Inter sourcils", price: "45 $" },
              { name: "Oreilles ou nez", price: "45 $" },
              { name: "Moustache", price: "55 $" },
              { name: "Barbe", price: "110 $" },
            ],
          },
          {
            title: "Corps",
            items: [
              { name: "Aisselles", price: "75 $" },
              { name: "Cou ou col de chemise", price: "90 $" },
              { name: "Épaules", price: "110 $" },
              { name: "Nuque", price: "90 $" },
              { name: "Bas du dos", price: "110 $" },
              { name: "Bas du dos + flancs", price: "220 $" },
              { name: "Torse", price: "110 $" },
              { name: "Abdomen", price: "110 $" },
              { name: "Tétons", price: "45 $" },
              { name: "Avant-bras + mains", price: "135 $" },
              { name: "Bras + mains", price: "200 $" },
              { name: "Mains", price: "55 $" },
              { name: "Dos complet", price: "200 $" },
              { name: "Jambes entières + pieds inclus", price: "400 $" },
              { name: "Demi-jambes + genoux + pieds inclus", price: "250 $" },
              { name: "Fesses", price: "200 $" },
            ],
          },
          {
            title: "Forfaits Hommes",
            items: [
              { name: "Oreilles + inter sourcils + nez", price: "100 $" },
              { name: "Torse + ventre + cou", price: "250 $" },
              { name: "Dos + épaules + nuque", price: "350 $" },
              { name: "Fesses + jambes + pieds", price: "500 $" },
            ],
          },
        ],
      },
    ],
  },
  {
    id: "epilations",
    title: "Nos Épilations Simples",
    icon: Leaf,
    image: epillation,
    seo: "Pour une peau nette et douce instantanément, optez pour nos épilations classiques à la cire tiède haute tolérance. Idéale pour les zones sensibles du visage, du bikini ou pour une épilation complète du corps, notre technique limite les rougeurs et assure une repousse ralentie. Une solution douce, hygiénique et rapide pour elle et pour lui.",
    groups: [
      {
        items: [
          { name: "Menton / Moustache", price: "10 $" },
          { name: "Oreilles / Narines", price: "10 $" },
          { name: "Sourcils", price: "15 $" },
          { name: "Visage complet", price: "35 $" },
          { name: "Menton large", price: "20 $" },
          { name: "Bras", price: "30 $" },
          { name: "Demi-bras", price: "20 $" },
          { name: "Doigts", price: "10 $" },
          { name: "Dos & épaules", price: "45 $" },
          { name: "Torse & épaules", price: "45 $" },
          { name: "Demi-jambes", price: "25 $" },
          { name: "Jambes complètes", price: "40 $" },
          { name: "Aisselles", price: "15 $" },
          { name: "Corps complet", price: "100 $" },
        ],
      },
      {
        title: "Bikini",
        items: [
          { name: "Simple", price: "25 $" },
          { name: "Échancré", price: "30 $" },
          { name: "Brésilien", price: "35 $" },
          { name: "Intégral", price: "40 $" },
        ],
      },
    ],
  },
];