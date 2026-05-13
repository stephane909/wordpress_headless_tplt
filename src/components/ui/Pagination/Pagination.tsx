import styles from './Pagination.module.scss'

interface PaginationProps {
  currentPage: number
  totalPages: number
  onPageChange: (page: number) => void
}

export function Pagination({ currentPage, totalPages, onPageChange }: PaginationProps) {
  if (totalPages <= 1) return null

  return (
    <nav className={styles.pagination} aria-label="Pagination">
      <button
        className={styles.btn}
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage <= 1}
        aria-label="Page précédente"
      >
        ← Précédent
      </button>

      <span className={styles.info}>
        Page {currentPage} / {totalPages}
      </span>

      <button
        className={styles.btn}
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage >= totalPages}
        aria-label="Page suivante"
      >
        Suivant →
      </button>
    </nav>
  )
}
