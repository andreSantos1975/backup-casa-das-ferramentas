'use client'

import { Menu, Search, ShoppingCart, User } from "lucide-react";
import { useState } from "react";
import styles from "./Header.module.css";
import Link from "next/link";
import { useSession, signOut } from 'next-auth/react';

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { data: session } = useSession();

  const categories = [
    "Ferramentas",
    "Materiais de Construção", 
    "Suprimentos Agrícolas",
    "Casa e Jardim",
    "Ofertas"
  ];

  return (
    <header className={styles.header}>
      {/* Top Bar */}
      <div className={styles.topBar}>
        <div className={styles.topBarContent}>
          <div> (38) 99999-3062 |  contato@casadasferramentas.com</div>
          <div>Frete grátis em pedidos acima de R$ 200</div>
        </div>
      </div>

      {/* Main Header */}
      <div className={styles.mainHeader}>
        <div className={styles.mainHeaderContent}>
          {/* Logo */}
          <div className={styles.logoContainer}>
            <Link href="/" className={styles.logo}>
              CASA DAS FERRAMENTAS
            </Link>
          </div>

          {/* Search Bar - Desktop */}
          <div className={styles.searchBarDesktop}>
            <div className={styles.searchInputContainer}>
              <input 
                type="search" 
                placeholder="Search for tools, materials..."
                className={styles.input}
              />
              <Search className={styles.searchIcon} />
            </div>
          </div>

          {/* Right Actions */}
          <div className={styles.rightActions}>
            {session ? (
              <>
                <span className={`${styles.welcome}`}>
                  <span className={styles.desktopButton}>Bem-vindo, {session.user?.name || 'Usuário'}!</span>
                </span>
                <button onClick={() => signOut()} className={`${styles.button} ${styles.ghost} ${styles.desktopButton}`}>
                  Sair
                </button>
              </>
            ) : (
              <>
                <Link href="/login" className={`${styles.button} ${styles.ghost} ${styles.desktopButton}`}>
                  <User className={styles.buttonIcon} />
                  Entrar
                </Link>
                <Link href="/cadastro" className={`${styles.button} ${styles.primary} ${styles.desktopButton}`}>
                  Cadastrar-se
                </Link>
              </>
            )}
            <button className={`${styles.button} ${styles.outline} ${styles.relative}`}>
              <ShoppingCart className={styles.buttonIcon} />
              <span className={styles.cartBadge}>
                0
              </span>
            </button>
            <button 
              className={`${styles.button} ${styles.ghost} ${styles.mobileMenuButton}`}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              <Menu className={styles.buttonIcon} />
            </button>
          </div>
        </div>

        {/* Mobile Search */}
        <div className={styles.mobileSearch}>
          <div className={styles.searchInputContainer}>
            <input 
              type="search" 
              placeholder="Search for tools, materials..."
              className={styles.input}
            />
            <Search className={styles.searchIcon} />
          </div>
        </div>
      </div>

      {/* Navigation */}
      <nav className={styles.navigation}>
        <div className={styles.navigationContent}>
          <div className={styles.desktopNavLinks}>
            {categories.map((category) => (
              <button key={category} className={`${styles.button} ${styles.ghost} ${styles.navButton}`}>
                {category}
              </button>
            ))}
          </div>

          {/* Mobile Menu */}
          {isMobileMenuOpen && (
            <div className={styles.mobileMenu}>
              {categories.map((category) => (
                <button key={category} className={`${styles.button} ${styles.ghost} ${styles.mobileMenuButtonFullWidth}`}>
                  {category}
                </button>
              ))}
            </div>
          )}
        </div>
      </nav>
    </header>
  );
};

export default Header;
