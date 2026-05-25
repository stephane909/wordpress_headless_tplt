import { Link } from "react-router-dom";
import type { WPPost } from "../../../types/wordpress";
import { useIntersectionObserver } from "../../../hooks/useIntersectionObserver";
import styles from "./PostCard.module.scss";

interface PostCardProps {
  post: WPPost;
}

export function PostCard({ post }: PostCardProps) {
  const image = post._embedded?.["wp:featuredmedia"]?.[0];
  const author = post._embedded?.author?.[0];
  const { ref, isVisible } = useIntersectionObserver()

  const formattedDate = new Intl.DateTimeFormat("fr-FR", {
    day: "numeric",
    month: "long",
    year: "numeric",
  }).format(new Date(post.date));

  const handleMouseEnter = () => {
    if (!image) return
    document.body.style.setProperty('--hover-image', `url(${image.source_url})`)
    document.body.classList.add('show-hover-image')
  }

  const handleMouseLeave = () => {
    document.body.classList.remove('show-hover-image')
  }

  return (
    <article
      ref={ref as React.RefObject<HTMLElement>}
      className={`${styles.card} ${isVisible ? styles.visible : ''}`}
      data-image={image?.source_url}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className={styles.body}>
        <h2 className={styles.title}>
          <Link
            to={`/post/${post.slug}`}
            dangerouslySetInnerHTML={{ __html: post.title.rendered }}
          />
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
  );
}
