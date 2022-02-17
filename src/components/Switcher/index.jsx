import React from 'react';
import customSwitcher from 'theme-switcher-module';
import { ThemeContext } from '../TukTukApp';

const Switcher = ({ template, getThemeState }) => {
  const theme = React.useContext(ThemeContext);

  const clickHandler = () => {
    console.log(theme);
    getThemeState(theme);
    customSwitcher.getElements();
  };
  return (
    <div
      dangerouslySetInnerHTML={{ __html: template }}
      onClick={clickHandler}
    ></div>
  );
};

export default Switcher;
