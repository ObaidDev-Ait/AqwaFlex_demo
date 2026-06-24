export interface Category {
  id: string;
  name: string;
  slug: string;
  description: string;
  image: string;
}

export const categories: Category[] = [
  {
    id: "cat-1",
    name: "Matelas Orthopédiques",
    slug: "matelas-orthopediques",
    description: "Un soutien ferme et médical pour un alignement parfait de la colonne vertébrale.",
    image: "/images/categories/matelas.jpg",
  },
  {
    id: "cat-2",
    name: "Matelas Ressorts",
    slug: "matelas-ressorts",
    description: "Indépendance de couchage et ventilation optimale grâce à notre technologie de ressorts ensachés.",
    image: "/images/categories/ressorts.jpg",
  },
  {
    id: "cat-3",
    name: "Mousses Haute Résilience",
    slug: "mousses-hr",
    description: "Des blocs de mousse techniques offrant une élasticité et une durabilité exceptionnelles.",
    image: "/images/categories/mousses.jpg",
  },
  {
    id: "cat-4",
    name: "Matelas Confort",
    slug: "matelas-confort",
    description: "La douceur et le moelleux pour des nuits paisibles et réparatrices.",
    image: "/images/categories/confort.jpg",
  },
];
