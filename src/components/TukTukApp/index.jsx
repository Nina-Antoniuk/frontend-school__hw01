import React from 'react';
import Nav from '../Nav';
import Routs from '../Routes';

const TukTukApp = function TukTukApp() {
  return (
    <>
      <header>
        <Nav />
      </header>
      <main>
        <Routs />
      </main>
    </>
  );
};

export default TukTukApp;
