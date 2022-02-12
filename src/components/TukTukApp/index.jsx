import React from 'react';
import Nav from '../Nav';
import Routes from '../Routes';
import styled from 'styled-components';
import { size } from '../../shared/css-consts';
import { THEME } from '../../shared/consts';
import Switcher from '../Switcher';
import customSwitcher from 'theme-switcher-module';

const switcherElementTemplate = customSwitcher.renderOnPage();

const { LIGHT_COLOR: lightTheme, DARK_COLOR: darkTheme } = THEME;

const Background = styled.div`
  min-height: 100vh;
  background-color: ${(props) =>
    props.themeColor === true ? lightTheme.color : darkTheme.color};

  @media screen and(min-width: ${size.tabletS}) {
    max-width: 1300px;
  }
`;
const Wrapper = styled.div`
  @media screen and (min-width: ${size.tabletS}) {
    width: 80%;
    margin-left: auto;
    margin-right: auto;
  }
`;

const Header = styled.header`
  flex-basis: 100%;
  padding: 0.3vh 2vw;

  @media screen and (min-width: ${size.tabletS}) {
    position: fixed;
    min-width: 20%;
    height: 100vh;
    padding: 1vh;
  }
`;
export const ThemeContext = React.createContext();

const TukTukApp = function TukTukApp() {
  const [theme, setTheme] = React.useState(lightTheme.type);

  const getThemeState = (value) => {
    setTheme(!value ? darkTheme.type : lightTheme.type);
  };

  return (
    <ThemeContext.Provider value={theme}>
      <Background themeColor={theme === lightTheme.type ? true : false}>
        <Wrapper>
          <Header>
            <Nav />
            <Switcher />
            <Switcher
              template={switcherElementTemplate}
              getThemeState={getThemeState}
            />
          </Header>
          <main>
            <Routes />
          </main>
        </Wrapper>
      </Background>
    </ThemeContext.Provider>
  );
};

export default TukTukApp;
