import customSwitcher from 'theme-switcher-module';

const Switcher = ({ template }) => {
  const clickHandler = () => {
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
