import React from 'react';
import { ThemeProvider } from 'styled-components';
import VideoPlayer from './Components/VideoPlayer';
import Style from './Styles/Style';

const App = () => {
  return (
    <ThemeProvider theme={Style}>
      <VideoPlayer id={2} />
    </ThemeProvider>
  );
};

export default App;
