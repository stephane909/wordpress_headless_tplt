import { NavLink } from "react-router-dom";
import { usePages } from "../../../hooks/usePages";
import bkdLogo from "../../../assets/brokenDistrict_logo.svg";
import styles from "./Header.module.scss";

export function Header() {
  const { pages } = usePages();

  return (
    <header className={styles.header}>
      <div className={styles.inner}>
        <NavLink to="/" className={styles.logo}>
          <img src={bkdLogo} alt="Broken District" />
        </NavLink>
        <nav className={styles.nav}>
          {pages.map((page) => (
            <NavLink
              key={page.id}
              to={`/page/${page.slug}`}
              className={({ isActive }) => (isActive ? styles.active : "")}
            >
              <span dangerouslySetInnerHTML={{ __html: page.title.rendered }} />
            </NavLink>
          ))}
        </nav>
      </div>
    </header>
  );
}
