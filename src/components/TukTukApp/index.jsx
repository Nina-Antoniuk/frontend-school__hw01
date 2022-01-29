import React from 'react';
import Nav from '../Nav';
import Routes from '../Routes';

const TukTukApp = function TukTukApp() {
  return (
    <>
      <header>
        <Nav />
      </header>
      <main>
        <Routes />
      </main>
    </>
  );
};

export default TukTukApp;
