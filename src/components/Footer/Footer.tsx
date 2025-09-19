// src/components/Footer/Footer.tsx
"use client";

import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  Facebook, 
  Instagram, 
  Youtube,
  Truck,
  Shield,
  CreditCard,
  Users
} from "lucide-react";
import styles from "./Footer.module.css";

// --- Componentes Básicos de UI ---

// Button Component (reutilizado e estendido do ProductGrid)
interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  variant?: "default" | "outline" | "ghost" | "link";
  size?: "sm" | "default" | "lg";
  className?: string;
  disabled?: boolean;
}

const Button: React.FC<ButtonProps> = ({ children, onClick, variant = "default", size = "default", className, disabled }) => {
  let buttonClass = styles.button;
  if (variant === "default") buttonClass += ` ${styles.buttonDefault}`;
  else if (variant === "outline") buttonClass += ` ${styles.buttonOutline}`;
  else if (variant === "ghost") buttonClass += ` ${styles.buttonGhost}`;
  else if (variant === "link") buttonClass += ` ${styles.buttonLink}`;

  if (size === "sm") buttonClass += ` ${styles.buttonSm}`;
  else if (size === "lg") buttonClass += ` ${styles.buttonLg}`;

  return (
    <button onClick={onClick} className={`${buttonClass} ${className || ''}`} disabled={disabled}>
      {children}
    </button>
  );
};

// Input Component
interface InputProps {
  type?: string;
  placeholder?: string;
  className?: string;
}

const Input: React.FC<InputProps> = ({ type = "text", placeholder, className }) => {
  return (
    <input 
      type={type} 
      placeholder={placeholder} 
      className={`${styles.input} ${className || ''}`} 
    />
  );
};

// Separator Component
const Separator: React.FC = () => {
  return <div className={styles.separator}></div>;
};

// --- Fim dos Componentes Básicos de UI ---


const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      {/* Newsletter Section */}
      <div className={styles.newsletterSection}>
        <div className={styles.newsletterContent}>
          <h3 className={styles.newsletterTitle}>Fique por Dentro das Nossas Melhores Ofertas</h3>
          <p className={styles.newsletterDescription}>
            Assine nossa newsletter e receba ofertas exclusivas em ferramentas e materiais.
          </p>
          <div className={styles.newsletterForm}>
            <Input 
              type="email" 
              placeholder="Digite seu e-mail"
              className={styles.input}
            />
            <Button variant="outline" className={styles.buttonSubscribe}>
              Assinar
            </Button>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className={styles.mainFooterContentWrapper}>
        <div className={styles.mainFooterContent}>
          <div className={styles.gridContainer}>
            
            {/* Company Info */}
            <div>
              <h3 className={styles.companyTitle}>
                CASA DAS FERRAMENTAS
              </h3>
              <p className="text-muted-foreground mb-4">
                Seu parceiro de confiança para ferramentas profissionais, materiais de construção e suprimentos agrícolas desde 2010.
              </p>
              
              {/* Contact Info */}
              <div className={styles.contactInfo}>
                <div className={styles.contactItem}>
                  <Phone className={styles.iconPrimary} />
                  <span>(38) 99999-3062</span>
                </div>
                <div className={styles.contactItem}>
                  <Mail className={styles.iconPrimary} />
                  <span>contato@casadasferramentas.com</span>
                </div>
                <div className={styles.contactItem}>
                  <MapPin className={styles.iconPrimary} />
                  <span>Rua das Ferramentas, 123<br />Centro, Montes Claros - MG<br />CEP: 39400-000</span>
                </div>
                <div className={styles.contactItem}>
                  <Clock className={styles.iconPrimary} />
                  <div>
                    <div>Seg-Sex: 7:00 - 18:00</div>
                    <div>Sáb: 7:00 - 13:00</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="font-semibold mb-4">Links Rápidos</h4>
              <ul className={styles.linkList}>
                {[ 
                  "Sobre Nós",
                  "Nossos Produtos", 
                  "Ofertas Especiais",
                  "Serviços Profissionais",
                  "Pedidos em Atacado",
                  "Suporte Técnico",
                  "Garantia",
                  "Fale Conosco"
                ].map((link) => (
                  <li key={link}>
                    <Button variant="link" className={styles.buttonLink}>
                      {link}
                    </Button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Product Categories */}
            <div>
              <h4 className={styles.linkTitle}>Categorias de Produtos</h4>
              <ul className={styles.linkList}>
                {[ 
                  "Ferramentas Manuais",
                  "Ferramentas Elétricas",
                  "Materiais de Construção",
                  "Equipamentos Agrícolas",
                  "Equipamentos de Segurança",
                  "Ferragens e Fixadores",
                  "Jardim e Paisagismo",
                  "Ferramentas Automotivas"
                ].map((category) => (
                  <li key={category}>
                    <Button variant="link" className={styles.buttonLink}>
                      {category}
                    </Button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Customer Service */}
            <div>
              <h4 className={styles.linkTitle}>Atendimento ao Cliente</h4>
              
              {/* Service Features */}
              <div className={styles.serviceFeatures}>
                <div className={styles.contactItem}>
                  <Truck className={styles.iconPrimary} />
                  <span className={styles.serviceText}>Frete grátis acima de R$ 200</span>
                </div>
                <div className={styles.contactItem}>
                  <Shield className={styles.iconPrimary} />
                  <span className={styles.serviceText}>1 ano de garantia</span>
                </div>
                <div className={styles.contactItem}>
                  <CreditCard className={styles.iconPrimary} />
                  <span className={styles.serviceText}>Pagamento seguro</span>
                </div>
                <div className={styles.contactItem}>
                  <Users className={styles.iconPrimary} />
                  <span className={styles.serviceText}>Suporte especializado</span>
                </div>
              </div>

              {/* Social Media */}
              <div>
                <h5 className={styles.socialTitle}>Siga-nos</h5>
                <div className={styles.socialLinks}>
                  <Button size="sm" variant="outline" className={styles.socialButton}>
                    <Facebook className="h-4 w-4" />
                  </Button>
                  <Button size="sm" variant="outline" className={styles.socialButton}>
                    <Instagram className="h-4 w-4" />
                  </Button>
                  <Button size="sm" variant="outline" className={styles.socialButton}>
                    <Youtube className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Separator />

      {/* Bottom Footer */}
      <div className={styles.bottomFooter}>
        <div className={styles.bottomFooterContent}>
          <div className={styles.copyright}>
              © {currentYear} Casa das Ferramentas. Todos os direitos reservados.
            </div>
          <div className={styles.policyLinks}>
            <Button variant="link" className={styles.buttonLink}>
              Política de Privacidade
            </Button>
            <Button variant="link" className={styles.buttonLink}>
              Termos de Serviço
            </Button>
            <Button variant="link" className={styles.buttonLink}>
              Política de Troca
            </Button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
