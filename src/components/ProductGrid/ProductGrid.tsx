// src/components/ProductGrid/ProductGrid.tsx
"use client";

import Image from "next/image"; // Importar Image
import { ShoppingCart, Heart, Star } from "lucide-react";
import styles from "./ProductGrid.module.css";

// --- Componentes Básicos de UI ---

// Button Component
interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
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


interface Product {
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
}

const ProductGrid = () => {
  const featuredProducts: Product[] = [
    {
      id: 1,
      name: "Professional Drill Kit",
      price: 299.99,
      originalPrice: 399.99,
      image: "https://res.cloudinary.com/dcgv5p6xe/image/upload/v1757434610/furadeira3_d6uthj.png",
      rating: 4.8,
      reviews: 124,
      category: "Tools",
      inStock: true,
      isOnSale: true,
    },
    {
      id: 2,
      name: "Heavy Duty Hammer",
      price: 45.99,
      image: "https://res.cloudinary.com/dcgv5p6xe/image/upload/v1757434610/furadeira2_rmuysz.png",
      rating: 4.9,
      reviews: 89,
      category: "Tools",
      inStock: true,
      isNew: true,
    },
    {
      id: 3,
      name: "Complete Tool Set",
      price: 199.99,
      originalPrice: 249.99,
      image: "https://res.cloudinary.com/dcgv5p6xe/image/upload/v1757434261/furadeira_fxdknh.png",
      rating: 4.7,
      reviews: 156,
      category: "Tools",
      inStock: true,
      isOnSale: true,
    },
    {
      id: 4,
      name: "Professional Drill Kit",
      price: 299.99,
      image: "https://res.cloudinary.com/dcgv5p6xe/image/upload/v1757434610/furadeira3_d6uthj.png", // Repetir
      rating: 4.8,
      reviews: 124,
      category: "Tools",
      inStock: true,
    },
    {
      id: 5,
      name: "Heavy Duty Hammer",
      price: 45.99,
      image: "https://res.cloudinary.com/dcgv5p6xe/image/upload/v1757434610/furadeira2_rmuysz.png", // Repetir
      rating: 4.9,
      reviews: 89,
      category: "Tools",
      inStock: false,
    },
    {
      id: 6,
      name: "Complete Tool Set",
      price: 199.99,
      image: "https://res.cloudinary.com/dcgv5p6xe/image/upload/v1757434261/furadeira_fxdknh.png", // Repetir
      rating: 4.7,
      reviews: 156,
      category: "Tools",
      inStock: true,
      isNew: true,
    },
  ];

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL'
    }).format(price);
  };

  return (
    <section className={styles.productGridSection}>
      <div className={styles.container}>
        <div className={styles.headerSection}>
          <h2 className={styles.title}>
            Featured Products
          </h2>
          <p className={styles.description}>
            Discover our most popular tools and equipment, carefully selected for quality and value.
          </p>
        </div>

        <div className={styles.gridContainer}>
          {featuredProducts.map((product) => (
            <Card key={product.id} className={styles.productCard}>
              <CardContent>
                <div className={styles.imageWrapper}>
                  <Image // Usar Image aqui
                    src={product.image}
                    alt={product.name}
                    width={300} // Adicionar width
                    height={192} // Adicionar height (h-48 = 192px)
                    className={styles.productImage}
                  />
                  
                  {/* Badges */}
                  <div className={styles.badgeContainer}>
                    {product.isNew && (
                      <Badge variant="success">New</Badge>
                    )}
                    {product.isOnSale && (
                      <Badge variant="sale">Sale</Badge>
                    )}
                  </div>

                  {/* Wishlist Button */}
                  <Button
                    size="sm"
                    variant="outline"
                    className={styles.wishlistButton}
                  >
                    <Heart className="h-4 w-4" />
                  </Button>

                  {/* Stock Status */}
                  {!product.inStock && (
                    <div className={styles.outOfStockOverlay}>
                      <Badge variant="destructive">
                        Out of Stock
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
                >
                  <ShoppingCart className="mr-2 h-4 w-4" />
                  {product.inStock ? "Add to Cart" : "Notify When Available"}
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>

        <div className={styles.viewAllContainer}>
          <Button variant="outline" size="lg" className={styles.buttonLargePadding}>
            View All Products
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ProductGrid;
