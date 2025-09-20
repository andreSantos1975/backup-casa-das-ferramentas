// src/components/ProductGrid/ProductGrid.tsx
"use client";

import Image from "next/image";
import Link from "next/link"; // Importar Link
import { ShoppingCart, Heart, Star } from "lucide-react";
import styles from "./ProductGrid.module.css";
import { featuredProducts } from "@/data/products"; // Importar dados

// --- Componentes Básicos de UI ---

// Button Component
interface ButtonProps {
  children: React.ReactNode;
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void; // Permitir evento
  variant?: "default" | "outline" | "ghost";
  size?: "sm" | "default" | "lg";
  className?: string;
  disabled?: boolean;
}

const Button: React.FC<ButtonProps> = ({ children, onClick, variant = "default", size = "default", className, disabled }) => {
  let buttonClass = styles.button;
  if (variant === "default") buttonClass += ` ${styles.buttonDefault}`;
  else if (variant === "outline") buttonClass += ` ${styles.buttonOutline}`;
  else if (variant === "ghost") buttonClass += ` ${styles.buttonGhost}`;

  if (size === "sm") buttonClass += ` ${styles.buttonSm}`;
  else if (size === "lg") buttonClass += ` ${styles.buttonLg}`;

  return (
    <button onClick={onClick} className={`${buttonClass} ${className || ''}`} disabled={disabled}>
      {children}
    </button>
  );
};

// Card Component
interface CardProps {
  children: React.ReactNode;
  className?: string;
}

const Card: React.FC<CardProps> = ({ children, className }) => {
  return <div className={`${styles.card} ${className || ''}`}>{children}</div>;
};

const CardContent: React.FC<CardProps> = ({ children, className }) => {
  return <div className={`${styles.cardContent} ${className || ''}`}>{children}</div>;
};

const CardFooter: React.FC<CardProps> = ({ children, className }) => {
  return <div className={`${styles.cardFooter} ${className || ''}`}>{children}</div>;
};

// Badge Component
interface BadgeProps {
  children: React.ReactNode;
  variant?: "default" | "outline" | "success" | "sale" | "destructive";
  className?: string;
}

const Badge: React.FC<BadgeProps> = ({ children, variant = "default", className }) => {
  let badgeClass = styles.badge;
  if (variant === "outline") badgeClass += ` ${styles.badgeOutline}`;
  else if (variant === "success") badgeClass += ` ${styles.badgeSuccess}`;
  else if (variant === "sale") badgeClass += ` ${styles.badgeSale}`;
  else if (variant === "destructive") badgeClass += ` ${styles.badgeDestructive}`;
  // default badge is handled by the base .badge style

  return <span className={`${badgeClass} ${className || ''}`}>{children}</span>;
};

// --- Fim dos Componentes Básicos de UI ---

const ProductGrid = () => {
  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL'
    }).format(price);
  };

  const handleCartClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault(); // Previne a navegação ao clicar no botão do carrinho
    console.log("Adicionar ao carrinho clicado!");
    // Aqui você pode adicionar a lógica para adicionar ao carrinho
  };

  return (
    <section className={styles.productGridSection}>
      <div className={styles.container}>
        <div className={styles.headerSection}>
          <h2 className={styles.title}>
            Produtos em Destaque
          </h2>
          <p className={styles.description}>
            Descubra nossas ferramentas e equipamentos mais populares, cuidadosamente selecionados por qualidade e valor.
          </p>
        </div>

        <div className={styles.gridContainer}>
          {featuredProducts.map((product) => (
            <Link key={product.id} href={`/products/${product.id}`} className={styles.productLink}>
              <Card className={styles.productCard}>
                <CardContent>
                  <div className={styles.imageWrapper}>
                    <Image
                      src={product.image}
                      alt={product.name}
                      width={300}
                      height={192}
                      className={styles.productImage}
                    />
                    
                    {/* Badges */}
                    <div className={styles.badgeContainer}>
                      {product.isNew && (
                        <Badge variant="success">Novo</Badge>
                      )}
                      {product.isOnSale && (
                        <Badge variant="sale">Promoção</Badge>
                      )}
                    </div>

                    {/* Wishlist Button */}
                    <Button
                      size="sm"
                      variant="outline"
                      className={styles.wishlistButton}
                      onClick={(e) => e.preventDefault()} // Previne navegação
                    >
                      <Heart className="h-4 w-4" />
                    </Button>

                    {/* Stock Status */}
                    {!product.inStock && (
                      <div className={styles.outOfStockOverlay}>
                        <Badge variant="destructive">
                          Fora de Estoque
                        </Badge>
                      </div>
                    )}
                  </div>

                  <div className={styles.productInfo}>
                    <Badge variant="outline" className={styles.categoryBadge}>
                      {product.category}
                    </Badge>
                    
                    <h3 className={styles.productName}>
                      {product.name}
                    </h3>

                    {/* Rating */}
                    <div className={styles.ratingContainer}>
                      <div className={styles.ratingContainer}>
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className={`${styles.starEmpty} ${
                              i < Math.floor(product.rating)
                                ? styles.starFilled
                                : ""
                            }`}
                          />
                        ))}
                      </div>
                      <span className={styles.reviewText}>
                        {product.rating} ({product.reviews})
                      </span>
                    </div>

                    {/* Price */}
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
                  </div>
                </CardContent>

                <CardFooter>
                  <Button
                    className={styles.buttonFullWidth}
                    disabled={!product.inStock}
                    variant={product.inStock ? "default" : "outline"}
                    onClick={handleCartClick} // Adicionado manipulador de clique
                  >
                    <ShoppingCart className="mr-2 h-4 w-4" />
                    {product.inStock ? "Adicionar ao Carrinho" : "Notificar Quando Disponível"}
                  </Button>
                </CardFooter>
              </Card>
            </Link>
          ))}
        </div>

        <div className={styles.viewAllContainer}>
          <Button variant="outline" size="lg" className={styles.buttonLargePadding}>
            Ver Todos os Produtos
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ProductGrid;
