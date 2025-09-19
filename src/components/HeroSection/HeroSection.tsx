"use client";
// src/components/HeroSection/HeroSection.tsx
import { MessageCircle } from "lucide-react";
import styles from "./HeroSection.module.css";

// Componente Button simples para este HeroSection
interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  variant?: "primary" | "outline";
  className?: string;
}

const Button: React.FC<ButtonProps> = ({ children, onClick, variant = "primary", className }) => {
  const buttonClass = variant === "primary" ? styles.buttonPrimary : styles.buttonOutline;
  return (
    <button onClick={onClick} className={`${buttonClass} ${className || ''}`}>
      {children}
    </button>
  );
};

const HeroSection = () => {
  const openWhatsApp = () => {
    const phoneNumber = "5538999993062";
    const message = "Olá! Gostaria de saber mais sobre os produtos da Casa das Ferramentas.";
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, "_blank");
  };

  const bannerImageUrl = "https://res.cloudinary.com/dcgv5p6xe/image/upload/v1757420178/banner-gimp1.1_z3mc4h.png";

  return (
    <section className={styles.heroSection}>
      {/* Background Image */}
      <div 
        className={styles.backgroundImage}
        style={{ backgroundImage: `url(${bannerImageUrl})` }}
      >
        <div className={styles.overlay}></div>
      </div>

      {/* Content */}
      <div className={styles.contentContainer}>
        <div className={styles.textContainer}>
          <h1 className={styles.title}>
            CASA DAS FERRAMENTAS
          </h1>
          <p className={styles.subtitle1}>
            Tudo para seu negócio, campo e casa
          </p>
          <p className={styles.subtitle2}>
            Ferramentas profissionais, materiais de construção e suprimentos agrícolas com os melhores preços e qualidade.
          </p>
          
          <div className={styles.buttonGroup}>
            <Button 
              variant="primary"
              onClick={openWhatsApp}
            >
              <MessageCircle className="mr-2 h-5 w-5" />
              Fale conosco pelo WhatsApp
            </Button>
            <Button 
              variant="outline" 
            >
              Ver Catálogo
            </Button>
          </div>

          {/* Special Offers Banner */}
          <div className={styles.offersBanner}>
            <div className={styles.offersContent}>
              <span className={styles.offerTextOrange}> Ofertas Especiais:</span>
              <span className={styles.offerTextWhite}>Até 30% OFF em ferramentas elétricas</span>
              <span className={styles.offerTextOrange2}>Frete grátis acima de R$ 200</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
