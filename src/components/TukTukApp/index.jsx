import React from 'react';
import Nav from '../Nav';
import Routs from '../Routes';

const TukTukApp = function TukTukApp() {
  const [firstVideo, setFirstVideo] = React.useState({});

  const getFirstVideo = React.useCallback((value) => {
    if (!value) {
      return setFirstVideo({ videoUrl: '' });
    }
    return setFirstVideo(value);
  }, []);
  return (
    <>
      <header>
        <Nav />
      </header>
      <main>
        <Routs getFirstVideo={getFirstVideo} firstVideo={firstVideo} />
      </main>
    </>
  );
};

export default TukTukApp;
