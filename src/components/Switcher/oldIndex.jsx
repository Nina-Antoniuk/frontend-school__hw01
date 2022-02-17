import React from 'react';
import { ReactComponent as SunIcon } from '../../assets/icons/icon-sun.svg';
import { ReactComponent as MoonIcon } from '../../assets/icons/icon-moon.svg';
import styled from 'styled-components';
import { ThemeContext } from '../TukTukApp';
import { THEME } from '../../shared/consts';

const { LIGHT_COLOR: lightThemeColor, DARK_COLOR: darkThemeColor } = THEME;

const StyledSunIcon = styled(SunIcon)`
  height: 28px;
  width: 28px;
  margin-right: 8px;
  fill: ${(props) =>
    props.theme === lightThemeColor.type
      ? lightThemeColor.iconColor
      : darkThemeColor.iconColor};
`;

const StyledMoonIcon = styled(MoonIcon)`
  height: 26px;
  width: 26px;
  margin-left: 8px;
  fill: ${(props) =>
    props.theme === lightThemeColor.type
      ? lightThemeColor.iconColor
      : darkThemeColor.iconColor};
`;

const ThemeSwitch = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  @media screen and (min-width: 768px) {
    justify-content: start;
    position: fixed;
  }
`;
const Control = styled.div`
  display: flex;
  align-items: center;
  flex-shrink: 0;
  position: relative;
  width: 60px;
  height: 25px;
  border-radius: 50em;
  padding: 3px 0;
`;

const Toggle = styled.input`
  position: absolute;
  left: 0;
  top: 0;
  margin: 0;
  padding: 0;
  opacity: 0;
  height: 0;
  width: 0;
  pointer-events: none;
`;

const SwitchTrack = styled.label`
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  color: transparent;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  border-radius: inherit;
  z-index: 1;
  cursor: pointer;
  background-color: ${(props) => (props.color === 1 ? '#333' : '#d3d3d4')};
`;

const Marker = styled.div`
  position: relative;
  background-color: #fff;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  z-index: 2;
  pointer-events: none;
  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.25);
  transition: transform 250ms var(--timing-function);
  transform: ${(props) =>
    props.color === 1 ? 'translateX(3px)' : 'translateX(35px)'};
`;

const Switcher = function ThemeSwitcher(props) {
  const [state, setState] = React.useState(true);

  const toggleTheme = () => {
    setState(!state);
    props.getThemeState(!state);
  };

  return (
    <ThemeSwitch>
      <ThemeContext.Consumer>
        {(theme) => (
          <>
            <StyledSunIcon theme={theme} />
            <Control>
              <Toggle
                type="checkbox"
                name="theme"
                id="theme-switch-toggle"
                aria-label="Переключить между тёмной и светлой темой"
                onClick={toggleTheme}
              />
              <SwitchTrack
                aria-hidden="true"
                htmlFor="theme-switch-toggle"
                color={state ? 1 : 0}
              ></SwitchTrack>
              <Marker color={state ? 1 : 0} aria-hidden="true" />
            </Control>

            <StyledMoonIcon theme={theme} />
          </>
        )}
      </ThemeContext.Consumer>
    </ThemeSwitch>
  );
};
export default Switcher;
