import React from 'react';
import { NavLink } from 'react-router-dom';
import { ROUTES, THEME } from '../../shared/consts';
import styled from 'styled-components';
import { size } from '../../shared/css-consts';
import { ThemeContext } from '../TukTukApp';

const { LIGHT_COLOR: lightThemeColor, DARK_COLOR: darkThemeColor } = THEME;

const NavList = styled('ul')`
  padding: 0;
  list-style-type: none;

  @media screen and (max-width: ${size.mobileL}) {
    display: flex;
    justify-content: space-around;
  }
`;

const StyledLink = styled(NavLink)`
  display: block;
  padding: 10px 0;
  font-size: 20px;
  text-decoration: none;
  color: ${(props) =>
    props.theme === lightThemeColor.type
      ? lightThemeColor.textColor
      : darkThemeColor.textColor};
  -webkit-transition: color var(--delay) ease;
  transition: color var(--delay) ease;
  cursor: pointer;

  &:hover {
    color: var(--main-accent-color);
  }

  &.active {
    color: var(--main-accent-color);
  }
`;
console.log(lightThemeColor.textColor);
const Nav = function Nav() {
  return (
    <NavList className="NavList">
      <li>
        <ThemeContext.Consumer>
          {(theme) => (
            <StyledLink
              activeClassName="active"
              to={ROUTES.HOME}
              exact
              theme={theme}
              testid="newsPage"
            >
              News
            </StyledLink>
          )}
        </ThemeContext.Consumer>
      </li>
      <li>
        <ThemeContext.Consumer>
          {(theme) => (
            <StyledLink
              activeClassName="active"
              to={`${ROUTES.USER_PROFILE}/${'dave.xp'}`}
              theme={theme}
              testid="profile"
            >
              Profile
            </StyledLink>
          )}
        </ThemeContext.Consumer>
      </li>
    </NavList>
  );
};
export default Nav;
