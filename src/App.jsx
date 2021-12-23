import React from 'react';
import './App.scss';
import Nav from './components/Nav/Nav';
import Routs from './components/Routs/Routs';

const App = function App() {
  const [firstVideo, setFirstVideo] = React.useState({});

  const getFirstVideo = React.useCallback((value) => {
    if (!value) {
      return setFirstVideo({ videoUrl: '' });
    }
    return setFirstVideo(value);
  }, []);

  return (
    <div className="backGround">
      <div className="App">
        <header>
          <Nav />
        </header>
        <main>
          <Routs getFirstVideo={getFirstVideo} firstVideo={firstVideo} />
        </main>
      </div>
    </div>
  );
};

export default App;
