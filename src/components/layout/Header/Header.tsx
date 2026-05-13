import { NavLink } from 'react-router-dom'
import styles from './Header.module.scss'

export function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.inner}>
        <NavLink to="/" className={styles.logo}>
          WP Headless
        </NavLink>
        <nav className={styles.nav}>
          <NavLink to="/" className={({ isActive }) => (isActive ? styles.active : '')}>
            Blog
          </NavLink>
          <NavLink to="/page/a-propos" className={({ isActive }) => (isActive ? styles.active : '')}>
            À propos
          </NavLink>
          <NavLink to="/page/contact" className={({ isActive }) => (isActive ? styles.active : '')}>
            Contact
          </NavLink>
        </nav>
      </div>
    </header>
  )
}
