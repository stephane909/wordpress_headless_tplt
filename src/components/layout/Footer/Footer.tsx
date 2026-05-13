import styles from './Footer.module.scss'

export function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <p>&copy; {new Date().getFullYear()} WP Headless Template — React + TypeScript + WordPress API</p>
      </div>
    </footer>
  )
}
