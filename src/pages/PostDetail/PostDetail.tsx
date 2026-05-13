import { useParams, Link } from 'react-router-dom'
import { usePost } from '../../hooks/usePost'
import styles from './PostDetail.module.scss'

export function PostDetail() {
  const { slug } = useParams<{ slug: string }>()
  const { post, loading, error } = usePost(slug ?? '')

  if (loading) return <div className={styles.loading}>Chargement…</div>
  if (error) return <p className={styles.error}>Erreur : {error}</p>
  if (!post) return <p className={styles.notFound}>Article introuvable.</p>

  const image = post._embedded?.['wp:featuredmedia']?.[0]
  const author = post._embedded?.author?.[0]
  const categories = post._embedded?.['wp:term']?.[0] ?? []
  const tags = post._embedded?.['wp:term']?.[1] ?? []

  const formattedDate = new Intl.DateTimeFormat('fr-FR', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  }).format(new Date(post.date))

  return (
    <article className={styles.article}>
      <div className={styles.container}>
        <Link to="/" className={styles.back}>← Retour au blog</Link>

        {categories.length > 0 && (
          <div className={styles.categories}>
            {categories.map((cat) => (
              <span key={cat.id} className={styles.category}>{cat.name}</span>
            ))}
          </div>
        )}

        <h1
          className={styles.title}
          dangerouslySetInnerHTML={{ __html: post.title.rendered }}
        />

        <div className={styles.meta}>
          {author && <span>{author.name}</span>}
          <time dateTime={post.date}>{formattedDate}</time>
        </div>

        {image && (
          <img
            src={image.source_url}
            alt={image.alt_text || post.title.rendered}
            className={styles.image}
          />
        )}

        <div
          className={`wp-content ${styles.content}`}
          dangerouslySetInnerHTML={{ __html: post.content.rendered }}
        />

        {tags.length > 0 && (
          <footer className={styles.tags}>
            {tags.map((tag) => (
              <span key={tag.id} className={styles.tag}>#{tag.name}</span>
            ))}
          </footer>
        )}
      </div>
    </article>
  )
}
