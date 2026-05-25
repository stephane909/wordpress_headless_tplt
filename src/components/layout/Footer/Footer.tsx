import styles from './Footer.module.scss'

export function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <p>&copy; 2026 Broken District</p>
      </div>
    </footer>
  )
}
