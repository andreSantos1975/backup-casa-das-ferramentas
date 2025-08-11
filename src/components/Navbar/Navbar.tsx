
'use client'

import Link from 'next/link'
import { useSession, signOut } from 'next-auth/react'
import styles from './Navbar.module.css'

export default function Navbar() {
  const { data: session } = useSession()

  return (
    <nav className={styles.navbar}>
      <Link href="/" className={styles.logo}>
        MeuSite
      </Link>
      <div className={styles.navLinks}>
        {session ? (
          <>
            <span className={styles.welcome}>Bem-vindo, {session.user?.name || 'Usuário'}!</span>
            <button onClick={() => signOut()} className={styles.button}>
              Sair
            </button>
          </>
        ) : (
          <>
            <Link href="/login" className={styles.button}>
              Entrar
            </Link>
            <Link href="/cadastro" className={styles.buttonPrimary}>
              Cadastrar-se
            </Link>
          </>
        )}
      </div>
    </nav>
  )
}
