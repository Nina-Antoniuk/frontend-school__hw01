import React from 'react';
import { NavLink } from 'react-router-dom';
import { ROUTES } from 'consts';
import styles from './Nav.module.scss';

const Nav = function Nav() {
  return (
    <nav className={styles.Nav}>
      <ul className={styles.NavList}>
        <li>
          <NavLink
            exact
            to={ROUTES.HOME}
            className={styles.NavLink}
            activeClassName={styles.activeLink}
          >
            News
          </NavLink>
        </li>
        <li>
          <NavLink
            to={`${ROUTES.USER_PROFILE}/${'dave.xp'}`}
            className={styles.NavLink}
            activeClassName={styles.activeLink}
          >
            Profile
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};
export default Nav;
