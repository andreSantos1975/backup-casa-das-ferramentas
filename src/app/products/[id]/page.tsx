// src/app/products/[id]/page.tsx
import { getProductById } from "@/data/products";
import Image from "next/image";

import { notFound } from "next/navigation";
import { Star, ShoppingCart } from "lucide-react";
import styles from "./product.module.css";

// --- Componentes de UI Reutilizáveis (semelhantes ao ProductGrid) ---
interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}
const Button: React.FC<ButtonProps> = ({ children, ...props }) => (
  <button {...props}>{children}</button>
);

interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  children: React.ReactNode;
}
const Badge: React.FC<BadgeProps> = ({ children, ...props }) => (
  <span {...props}>{children}</span>
);
// --- Fim dos Componentes de UI ---

const formatPrice = (price: number) => {
  return new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  }).format(price);
};

interface ProductPageProps {
  params: Promise<{
    id: string;
  }>;
}

export default async function ProductPage({ params }: ProductPageProps) {
  const { id } = await params; 

  const product = await getProductById(id);

  if (!product) {
    notFound();
  }

  return (
    <main className={styles.productSection}>
      <div className={styles.container}>
        <div className={styles.gridContainer}>
          {/* Coluna da Imagem */}
          <div className={styles.imageWrapper}>
            <Image
              src={product.image}
              alt={product.name}
              fill
              className={styles.productImage}
            />
          </div>

          {/* Coluna de Informações do Produto */}
          <div className={styles.productInfo}>
            <Badge
              className={`${styles.categoryBadge} ${styles.buttonOutline}`}
            >
              {product.category}
            </Badge>

            <h1 className={styles.productName}>{product.name}</h1>

            <div className={styles.ratingContainer}>
              <div className="flex items-center">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={
                      i < Math.floor(product.rating)
                        ? styles.starFilled
                        : styles.starEmpty
                    }
                  />
                ))}
              </div>
              <span className={styles.reviewText}>
                {product.rating} ({product.reviews} avaliações)
              </span>
            </div>

            <p className={styles.description}>
              {product.description ||
                "Descrição do produto não disponível."}
            </p>

            <div className={styles.priceContainer}>
              <span className={styles.currentPrice}>
                {formatPrice(product.price)}
              </span>
              {product.originalPrice && (
                <span className={styles.originalPrice}>
                  {formatPrice(product.originalPrice)}
                </span>
              )}
            </div>

            <Button
              className={`${styles.button} ${styles.buttonDefault} ${styles.buttonLg} ${styles.buttonFullWidth}`}
              disabled={!product.inStock}
            >
              <ShoppingCart className="mr-2 h-5 w-5" />
              {product.inStock
                ? "Adicionar ao Carrinho"
                : "Fora de Estoque"}
            </Button>
          </div>
        </div>
      </div>
    </main>
  );
}


