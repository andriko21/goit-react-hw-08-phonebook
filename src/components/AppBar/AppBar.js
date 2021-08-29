import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./AppBar.module.css";
import UserMenu from "../UserMenu/UserMenu";
import AuthNav from "../AuthNav/AuthNav";
import { useSelector } from "react-redux";

const AppBar = () => {
  const isLogged = useSelector(state => state.auth.isLoaggedIn)
  // const userName = useSelector(state => state.auth.user.name)

  // console.log(userName)
  return (
    <nav className={styles.nav}>
      <div className={styles.main_links}>
      <NavLink
        to="/"
        exact
        className={styles.nav__link}
        activeClassName={styles.nav__activeLink}
      >
        Головна
      </NavLink>

      <NavLink
        to="/contacts"
        exact
        className={styles.nav__link}
        activeClassName={styles.nav__activeLink}
      >
        Контакти
        </NavLink>
      </div>

      {isLogged ? <UserMenu/> : <AuthNav/>}    
    </nav>
  );
};

export default AppBar;
