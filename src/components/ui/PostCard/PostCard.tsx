import { Link } from 'react-router-dom'
import type { WPPost } from '../../../types/wordpress'
import styles from './PostCard.module.scss'

interface PostCardProps {
  post: WPPost
}

export function PostCard({ post }: PostCardProps) {
  const image = post._embedded?.['wp:featuredmedia']?.[0]
  const author = post._embedded?.author?.[0]
  const categories = post._embedded?.['wp:term']?.[0] ?? []

  const formattedDate = new Intl.DateTimeFormat('fr-FR', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  }).format(new Date(post.date))

  return (
    <article className={styles.card}>
      {image && (
        <Link to={`/post/${post.slug}`} className={styles.imageLink}>
          <img
            src={image.source_url}
            alt={image.alt_text || post.title.rendered}
            className={styles.image}
            loading="lazy"
          />
        </Link>
      )}
      <div className={styles.body}>
        {categories.length > 0 && (
          <div className={styles.categories}>
            {categories.map((cat) => (
              <span key={cat.id} className={styles.category}>
                {cat.name}
              </span>
            ))}
          </div>
        )}
        <h2 className={styles.title}>
          <Link to={`/post/${post.slug}`} dangerouslySetInnerHTML={{ __html: post.title.rendered }} />
        </h2>
        <div
          className={styles.excerpt}
          dangerouslySetInnerHTML={{ __html: post.excerpt.rendered }}
        />
        <footer className={styles.footer}>
          {author && <span className={styles.author}>{author.name}</span>}
          <time dateTime={post.date} className={styles.date}>
            {formattedDate}
          </time>
        </footer>
      </div>
    </article>
  )
}
