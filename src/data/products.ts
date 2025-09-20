
export interface Product {
  id: number;
  name: string;
  price: number;
  originalPrice?: number;
  image: string;
  rating: number;
  reviews: number;
  category: string;
  inStock: boolean;
  isNew?: boolean;
  isOnSale?: boolean;
  description?: string; // Adicionando descrição
}

export const featuredProducts: Product[] = [
  {
    id: 1,
    name: "Kit de Furadeira Profissional",
    price: 299.99,
    originalPrice: 399.99,
    image: "https://res.cloudinary.com/dcgv5p6xe/image/upload/v1757434610/furadeira3_d6uthj.png",
    rating: 4.8,
    reviews: 124,
    category: "Ferramentas",
    inStock: true,
    isOnSale: true,
    description: "Um kit completo para profissionais exigentes, incluindo brocas de titânio e maleta de transporte resistente."
  },
  {
    id: 2,
    name: "Martelo de Alta Resistência",
    price: 45.99,
    image: "https://res.cloudinary.com/dcgv5p6xe/image/upload/v1757434610/furadeira2_rmuysz.png",
    rating: 4.9,
    reviews: 89,
    category: "Ferramentas",
    inStock: true,
    isNew: true,
    description: "Martelo com cabo de fibra de vidro para absorção de impacto e cabeça de aço forjado para máxima durabilidade."
  },
  {
    id: 3,
    name: "Conjunto Completo de Ferramentas",
    price: 199.99,
    originalPrice: 249.99,
    image: "https://res.cloudinary.com/dcgv5p6xe/image/upload/v1757434261/furadeira_fxdknh.png",
    rating: 4.7,
    reviews: 156,
    category: "Ferramentas",
    inStock: true,
    isOnSale: true,
    description: "O conjunto ideal para reparos domésticos e projetos de bricolagem, com 150 peças essenciais."
  },
  {
    id: 4,
    name: "Kit de Furadeira Profissional",
    price: 299.99,
    image: "https://res.cloudinary.com/dcgv5p6xe/image/upload/v1757434610/furadeira3_d6uthj.png", // Repetir
    rating: 4.8,
    reviews: 124,
    category: "Ferramentas",
    inStock: true,
    description: "Um kit completo para profissionais exigentes, incluindo brocas de titânio e maleta de transporte resistente."
  },
  {
    id: 5,
    name: "Martelo de Alta Resistência",
    price: 45.99,
    image: "https://res.cloudinary.com/dcgv5p6xe/image/upload/v1757434610/furadeira2_rmuysz.png", // Repetir
    rating: 4.9,
    reviews: 89,
    category: "Ferramentas",
    inStock: false,
    description: "Martelo com cabo de fibra de vidro para absorção de impacto e cabeça de aço forjado para máxima durabilidade."
  },
  {
    id: 6,
    name: "Conjunto Completo de Ferramentas",
    price: 199.99,
    image: "https://res.cloudinary.com/dcgv5p6xe/image/upload/v1757434261/furadeira_fxdknh.png", // Repetir
    rating: 4.7,
    reviews: 156,
    category: "Ferramentas",
    inStock: true,
    isNew: true,
    description: "O conjunto ideal para reparos domésticos e projetos de bricolagem, com 150 peças essenciais."
  },
];

export const getProductById = async (id: string) => {
  const productId = parseInt(id, 10);
  // Simula uma busca assíncrona
  return Promise.resolve(featuredProducts.find((product) => product.id === productId));
};
