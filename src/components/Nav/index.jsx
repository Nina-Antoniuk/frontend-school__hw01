import React from 'react';
import { NavLink } from 'react-router-dom';
import { ROUTES } from '../../shared/js/consts';
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
            data-testid="newsPage"
          >
            News
          </NavLink>
        </li>
        <li>
          <NavLink
            to={`${ROUTES.USER_PROFILE}/${'dave.xp'}`}
            className={styles.NavLink}
            activeClassName={styles.activeLink}
            data-testid="profile"
          >
            Profile
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};
export default Nav;
