import { usePosts } from "../../hooks/usePosts";
import { PostCard } from "../../components/ui/PostCard/PostCard";
import styles from "./Home.module.scss";

export function Home() {
  const { data: posts, loading, error } = usePosts();

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <h1 className={styles.title}>Releases</h1>
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
      </div>
    </section>
  );
}
