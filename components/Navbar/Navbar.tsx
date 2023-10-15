import styles from "./Navbar.module.scss";
import { navLinks } from "./constants";

const Navbar = () => {
  return (
    <nav className={styles.nav}>
      <h1>
        R <span>.</span> B <span>.</span>
        <span>Isiaq</span>
      </h1>
      <ul>
        {navLinks.map((link) => (
          <li key={link.id}>
            <a href={link.href}>{link.label}</a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
