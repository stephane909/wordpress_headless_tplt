import { useParams, Link } from 'react-router-dom'
import { usePage } from '../../hooks/usePage'
import styles from './PageDetail.module.scss'

export function PageDetail() {
  const { slug } = useParams<{ slug: string }>()
  const { page, loading, error } = usePage(slug ?? '')

  if (loading) return <div className={styles.loading}>Chargement…</div>
  if (error) return <p className={styles.error}>Erreur : {error}</p>
  if (!page) return <p className={styles.notFound}>Page introuvable.</p>

  return (
    <article className={styles.page}>
      <div className={styles.container}>
        <Link to="/" className={styles.back}>← Retour</Link>
        <h1
          className={styles.title}
          dangerouslySetInnerHTML={{ __html: page.title.rendered }}
        />
        <div
          className={`wp-content ${styles.content}`}
          dangerouslySetInnerHTML={{ __html: page.content.rendered }}
        />
      </div>
    </article>
  )
}
