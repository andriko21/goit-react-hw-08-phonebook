import { NavLink } from "react-router-dom";
import styles from './AuthNav.module.css'

const AuthNav = () => {
    return (
         <div className={styles.register}>
        <NavLink
          to="/login"
          exact
          className={styles.authNav__link}
          activeClassName={styles.authNav__activeLink}
        >
          Увійти
        </NavLink>

        <NavLink
          to="/register"
          exact
          className={styles.authNav__link}
          activeClassName={styles.authNav__activeLink}
        >
          Реєстрація
        </NavLink>
      </div>
        )
}
export default AuthNav;