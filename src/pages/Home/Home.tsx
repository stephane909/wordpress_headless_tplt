import { useState } from 'react'
import { usePosts } from '../../hooks/usePosts'
import { PostCard } from '../../components/ui/PostCard/PostCard'
import { Pagination } from '../../components/ui/Pagination/Pagination'
import styles from './Home.module.scss'

const PER_PAGE = 6

export function Home() {
  const [page, setPage] = useState(1)
  const { data: posts, total, totalPages, loading, error } = usePosts({ page, per_page: PER_PAGE })

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <header className={styles.header}>
          <h1 className={styles.title}>Broken District</h1>
          {!loading && <p className={styles.count}>{total} article{total > 1 ? 's' : ''}</p>}
        </header>

        {loading && <div className={styles.loading}>Chargement…</div>}

        {error && <p className={styles.error}>Erreur : {error}</p>}

        {!loading && !error && posts.length === 0 && (
          <p className={styles.empty}>Aucun article trouvé.</p>
        )}

        {!loading && posts.length > 0 && (
          <div className={styles.grid}>
            {posts.map((post) => (
              <PostCard key={post.id} post={post} />
            ))}
          </div>
        )}

        <Pagination currentPage={page} totalPages={totalPages} onPageChange={setPage} />
      </div>
    </section>
  )
}
