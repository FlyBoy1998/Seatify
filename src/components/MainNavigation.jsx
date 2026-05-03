import { NavLink, Link } from "react-router";

import styles from "./MainNavigation.module.css";

export default function MainNavigation() {
  return (
    <header>
      <nav className={styles.navContainer}>
        <Link to="/" className={styles.logo}>
          <span>Seatify</span>
          <i className="fa-solid fa-circle"></i>
        </Link>
        <ul className={styles.mainNav}>
          <li>
            <NavLink>Playing now</NavLink>
          </li>
          <li>
            <NavLink>Coming soon!</NavLink>
          </li>
        </ul>
        <ul className={styles.signupNav}>
          <li>
            <NavLink>
              <i className="fa-solid fa-user"></i>
              <span>Log In/Sign Up</span>
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}
