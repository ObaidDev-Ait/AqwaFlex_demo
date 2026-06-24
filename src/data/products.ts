export interface PriceDimension {
  dimension: string;
  price: number;
}

export interface Product {
  id: string;
  slug: string;
  name: string;
  categorySlug: string;
  shortDescription: string;
  fullDescription: string;
  features: string[];
  specifications: Record<string, string>;
  dimensions: string[];
  priceTable: PriceDimension[];
  images: string[];
  isFeatured: boolean;
  price?: string; // Starting price formatted
}

export const products: Product[] = [
  {
    id: "prod-relax",
    slug: "matelas-relax",
    name: "Relax",
    categorySlug: "matelas-confort",
    shortDescription: "Le matelas d'entrée de gamme idéal offrant un confort douillet à un prix accessible.",
    fullDescription: "Le matelas Relax est conçu pour ceux qui recherchent un confort quotidien sans compromis sur la qualité. Composé d'une mousse polyuréthane de haute qualité, il assure un accueil moelleux et un soutien adapté à votre corps. Son revêtement doux et respirant garantit des nuits fraîches et paisibles. Parfait pour les chambres d'amis ou comme premier investissement literie.",
    features: [
      "Mousse polyuréthane densité standard",
      "Accueil moelleux et enveloppant",
      "Tissu respirant hypoallergénique",
      "Traitement anti-acariens",
      "Garantie 5 ans"
    ],
    specifications: {
      "Fermeté": "Souple (4/10)",
      "Épaisseur": "20 cm",
      "Âme du matelas": "Mousse Polyuréthane 22kg/m³",
      "Coutil": "Tissu Jacquard 100% Polyester",
      "Garantie": "5 Ans"
    },
    dimensions: ["90x190", "140x190", "160x200", "180x200"],
    priceTable: [
      { dimension: "90x190 cm", price: 890 },
      { dimension: "140x190 cm", price: 1350 },
      { dimension: "160x200 cm", price: 1650 },
      { dimension: "180x200 cm", price: 1890 }
    ],
    images: ["/images/products/relax.jpg"],
    isFeatured: false,
    price: "890 MAD"
  },
  {
    id: "prod-prestige",
    slug: "matelas-prestige",
    name: "Prestige",
    categorySlug: "matelas-confort",
    shortDescription: "L'élégance et le luxe incarnés pour des nuits d'exception.",
    fullDescription: "Le matelas Prestige représente le summum du confort Aquaflex. Doté d'une couche supérieure en mousse à mémoire de forme ultra-premium, il épouse chaque courbe de votre corps pour une sensation d'apesanteur. Son noyau haute résilience offre un soutien profond, tandis que son coutil en fibres de bambou assure une thermorégulation parfaite.",
    features: [
      "Couche d'accueil en mousse à mémoire de forme (Viscoélastique)",
      "Noyau Haute Résilience (HR)",
      "Coutil en fibres de bambou naturelles",
      "Indépendance de couchage optimale",
      "Finition luxe avec galon surpiqué"
    ],
    specifications: {
      "Fermeté": "Mi-Ferme (6/10)",
      "Épaisseur": "28 cm",
      "Âme du matelas": "Mousse HR 35kg/m³ + Visco 50kg/m³",
      "Coutil": "Fibres de Bambou et Coton Biologique",
      "Garantie": "10 Ans"
    },
    dimensions: ["140x190", "160x200", "180x200", "200x200"],
    priceTable: [
      { dimension: "140x190 cm", price: 3400 },
      { dimension: "160x200 cm", price: 4100 },
      { dimension: "180x200 cm", price: 4600 },
      { dimension: "200x200 cm", price: 5200 }
    ],
    images: ["/images/products/prestige.jpg"],
    isFeatured: true,
    price: "3 400 MAD"
  },
  {
    id: "prod-orthopedique",
    slug: "matelas-orthopedique",
    name: "Orthopédique",
    categorySlug: "matelas-orthopediques",
    shortDescription: "Soutien médical extra-ferme pour le maintien parfait de la colonne vertébrale.",
    fullDescription: "Recommandé par les spécialistes du dos, le matelas Orthopédique est conçu autour d'un noyau en mousse agglomérée de très haute densité. Il empêche l'affaissement du corps pendant la nuit, maintenant la colonne vertébrale dans son alignement naturel. Idéal pour les personnes souffrant de maux de dos ou recherchant une surface de couchage très rigide.",
    features: [
      "Noyau extra-ferme en mousse agglomérée",
      "Soutien lombaire renforcé",
      "Tissu haute résistance aux frottements",
      "Double face été/hiver",
      "Recommandé pour les maux de dos"
    ],
    specifications: {
      "Fermeté": "Très Ferme (9/10)",
      "Épaisseur": "24 cm",
      "Âme du matelas": "Mousse Agglomérée Haute Densité",
      "Coutil": "Tissu Damassé Traité Anti-Bactérien",
      "Garantie": "10 Ans"
    },
    dimensions: ["90x190", "140x190", "160x200", "180x200"],
    priceTable: [
      { dimension: "90x190 cm", price: 1100 },
      { dimension: "140x190 cm", price: 1850 },
      { dimension: "160x200 cm", price: 2150 },
      { dimension: "180x200 cm", price: 2450 }
    ],
    images: ["/images/products/ortho.jpg"],
    isFeatured: true,
    price: "1 100 MAD"
  },
  {
    id: "prod-windorsal",
    slug: "matelas-windorsal",
    name: "Windorsal",
    categorySlug: "matelas-ressorts",
    shortDescription: "L'alliance parfaite entre les ressorts ensachés et la mousse de confort.",
    fullDescription: "Le Windorsal révolutionne votre sommeil avec sa technologie hybride. Les centaines de ressorts ensachés réagissent individuellement à la pression de votre corps, garantissant une indépendance de couchage absolue (vous ne sentirez pas votre partenaire bouger). La couche supérieure en mousse profilée offre une ventilation exceptionnelle.",
    features: [
      "Technologie de ressorts ensachés individuellement",
      "Aération maximale (système AirFlow)",
      "Indépendance de couchage totale",
      "Bandes latérales 3D respirantes",
      "Absorption des mouvements"
    ],
    specifications: {
      "Fermeté": "Équilibré (5/10)",
      "Épaisseur": "26 cm",
      "Âme du matelas": "Ressorts Ensachés + Mousse de Confort",
      "Coutil": "Stretch Extensible Doux",
      "Garantie": "7 Ans"
    },
    dimensions: ["140x190", "160x200", "180x200"],
    priceTable: [
      { dimension: "140x190 cm", price: 2800 },
      { dimension: "160x200 cm", price: 3200 },
      { dimension: "180x200 cm", price: 3700 }
    ],
    images: ["/images/products/windorsal.jpg"],
    isFeatured: true,
    price: "2 800 MAD"
  },
  {
    id: "prod-therapicodorsal",
    slug: "matelas-therapicodorsal",
    name: "Therapicodorsal",
    categorySlug: "matelas-orthopediques",
    shortDescription: "Le matelas thérapeutique ultime pour une régénération nocturne complète.",
    fullDescription: "Le Therapicodorsal est notre chef-d'œuvre orthopédique. Combinant plusieurs couches de mousses techniques de densités variables, il offre un accueil progressif : souple en surface pour soulager les points de pression, et ferme en profondeur pour soutenir le squelette. Il est certifié par des laboratoires indépendants pour son efficacité ergonomique.",
    features: [
      "Soutien multi-zones (7 zones de confort)",
      "Soulagement ciblé des points de pression",
      "Mousse technique à structure cellulaire ouverte",
      "Housse déhoussable et lavable à 40°C",
      "Approuvé ergonomiquement"
    ],
    specifications: {
      "Fermeté": "Ferme (7.5/10)",
      "Épaisseur": "27 cm",
      "Âme du matelas": "Multicouche HR et Mousse Profilée",
      "Coutil": "Tissu Tencel™ avec traitement Purotex",
      "Garantie": "10 Ans"
    },
    dimensions: ["90x190", "140x190", "160x200", "180x200"],
    priceTable: [
      { dimension: "90x190 cm", price: 1600 },
      { dimension: "140x190 cm", price: 2700 },
      { dimension: "160x200 cm", price: 3100 },
      { dimension: "180x200 cm", price: 3600 }
    ],
    images: ["/images/products/therapico.jpg"],
    isFeatured: false,
    price: "1 600 MAD"
  },
  {
    id: "prod-silver",
    slug: "matelas-silver",
    name: "Silver",
    categorySlug: "matelas-confort",
    shortDescription: "La pureté et l'hygiène absolues grâce à la technologie des ions d'argent.",
    fullDescription: "Le matelas Silver est pensé pour les personnes souffrant d'allergies ou soucieuses de l'hygiène de leur literie. Son coutil est tissé avec des fils contenant des ions d'argent (SilverTech), agissant comme un bouclier naturel contre les bactéries, les acariens et les mauvaises odeurs, tout en offrant un confort exceptionnel.",
    features: [
      "Tissu traité aux ions d'argent anti-bactériens",
      "Neutralisation des odeurs",
      "Mousse de confort alvéolée",
      "Propriétés antistatiques",
      "Environnement de sommeil ultra-sain"
    ],
    specifications: {
      "Fermeté": "Mi-Souple (5/10)",
      "Épaisseur": "22 cm",
      "Âme du matelas": "Mousse Haute Densité 28kg/m³",
      "Coutil": "Tissu Stretch SilverTech",
      "Garantie": "7 Ans"
    },
    dimensions: ["90x190", "140x190", "160x200", "180x200"],
    priceTable: [
      { dimension: "90x190 cm", price: 1250 },
      { dimension: "140x190 cm", price: 1950 },
      { dimension: "160x200 cm", price: 2350 },
      { dimension: "180x200 cm", price: 2650 }
    ],
    images: ["/images/products/silver.jpg"],
    isFeatured: false,
    price: "1 250 MAD"
  },
  {
    id: "prod-alpha",
    slug: "matelas-alpha",
    name: "Alpha",
    categorySlug: "matelas-orthopediques",
    shortDescription: "La robustesse et la longévité pour un usage intensif et professionnel.",
    fullDescription: "Conçu initialement pour l'hôtellerie, le matelas Alpha est un monobloc de mousse très haute densité offrant une résistance à toute épreuve. Il ne se déforme pas avec le temps et supporte des charges importantes tout en conservant ses propriétés de soutien. C'est l'investissement durable par excellence.",
    features: [
      "Monobloc de mousse très haute densité",
      "Durabilité extrême (Qualité Hôtellerie)",
      "Indéformable dans le temps",
      "Tissu ignifugé (anti-feu)",
      "Soutien ferme et régulier"
    ],
    specifications: {
      "Fermeté": "Ferme (8/10)",
      "Épaisseur": "20 cm",
      "Âme du matelas": "Mousse HD 33kg/m³",
      "Coutil": "Tissu Damassé Renforcé",
      "Garantie": "10 Ans"
    },
    dimensions: ["90x190", "140x190", "160x200"],
    priceTable: [
      { dimension: "90x190 cm", price: 1050 },
      { dimension: "140x190 cm", price: 1750 },
      { dimension: "160x200 cm", price: 2050 }
    ],
    images: ["/images/products/alpha.jpg"],
    isFeatured: false,
    price: "1 050 MAD"
  },
  {
    id: "prod-hr-35-45",
    slug: "bloc-hr-35-45",
    name: "HR 35/45",
    categorySlug: "mousses-hr",
    shortDescription: "Blocs de mousse Haute Résilience techniques pour l'ameublement de prestige.",
    fullDescription: "Nos blocs de mousse HR (Haute Résilience) de densités 35 et 45 kg/m³ sont la référence pour la confection de salons marocains haut de gamme et de canapés de luxe. Grâce à leur structure micro-cellulaire élastique, ces mousses reprennent instantanément leur forme initiale, garantissant une assise dynamique et une longévité inégalée.",
    features: [
      "Très haute élasticité et effet rebond",
      "Idéal pour l'assise de salons marocains (Sdader)",
      "Excellente aération interne",
      "Densité certifiée (35 ou 45 kg/m³)",
      "Découpe sur mesure disponible"
    ],
    specifications: {
      "Densité": "35 kg/m³ ou 45 kg/m³",
      "Type": "Mousse Polyuréthane HR",
      "Déformation rémanente": "< 3%",
      "Couleur": "Gris / Bleu"
    },
    dimensions: ["200x70x20 (Standard Salon)"],
    priceTable: [
      { dimension: "200x70x20 cm (HR 35)", price: 850 },
      { dimension: "200x70x20 cm (HR 45)", price: 1100 }
    ],
    images: ["/images/products/hr.jpg"],
    isFeatured: false,
    price: "Sur devis"
  },
  {
    id: "prod-souplesse",
    slug: "matelas-souplesse",
    name: "Souplesse",
    categorySlug: "matelas-confort",
    shortDescription: "Un cocon de douceur pour une relaxation musculaire immédiate.",
    fullDescription: "Le matelas Souplesse est une invitation à la détente. Avec son accueil ultra-moelleux et sa couche de confort en mousse hypersoft, il donne la sensation de dormir sur un nuage. Il réduit instantanément les tensions musculaires accumulées pendant la journée, favorisant un endormissement rapide et profond.",
    features: [
      "Couche d'accueil Hypersoft ultra-moelleuse",
      "Sensation de nid douillet",
      "Allègement de la pression sanguine",
      "Tissu velours soyeux",
      "Design capitonné"
    ],
    specifications: {
      "Fermeté": "Très Souple (3/10)",
      "Épaisseur": "25 cm",
      "Âme du matelas": "Mousse de Base + Couche Hypersoft",
      "Coutil": "Velours de Coton",
      "Garantie": "5 Ans"
    },
    dimensions: ["140x190", "160x200", "180x200"],
    priceTable: [
      { dimension: "140x190 cm", price: 2100 },
      { dimension: "160x200 cm", price: 2500 },
      { dimension: "180x200 cm", price: 2900 }
    ],
    images: ["/images/products/souplesse.jpg"],
    isFeatured: false,
    price: "2 100 MAD"
  },
  {
    id: "prod-master",
    slug: "matelas-master",
    name: "Master",
    categorySlug: "matelas-confort",
    shortDescription: "Le fleuron de la gamme Aquaflex : épaisseur majestueuse et finitions royales.",
    fullDescription: "Le matelas Master est notre modèle le plus prestigieux, conçu pour les suites parentales majestueuses. Avec son épaisseur imposante de 35 cm, il combine des micro-ressorts ensachés, du latex naturel et de la mousse à mémoire de forme. Le capitonnage fait main et les matières nobles utilisées en font une véritable œuvre d'art dédiée à votre repos.",
    features: [
      "Hybride ultime : Latex + Visco + Micro-ressorts",
      "Épaisseur royale de 35 cm",
      "Capitonnage intégral fait main à l'ancienne",
      "Coutil en soie et cachemire",
      "Système de ventilation Active Air"
    ],
    specifications: {
      "Fermeté": "Équilibré-Plush (5.5/10)",
      "Épaisseur": "35 cm",
      "Âme du matelas": "Micro-ressorts + Latex + Visco",
      "Coutil": "Soie et Cachemire",
      "Garantie": "15 Ans"
    },
    dimensions: ["160x200", "180x200", "200x200", "200x220"],
    priceTable: [
      { dimension: "160x200 cm", price: 6500 },
      { dimension: "180x200 cm", price: 7200 },
      { dimension: "200x200 cm", price: 8500 },
      { dimension: "200x220 cm", price: 9800 }
    ],
    images: ["/images/products/master.jpg"],
    isFeatured: true,
    price: "6 500 MAD"
  }
];
