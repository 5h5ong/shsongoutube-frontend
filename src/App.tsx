import React from 'react';
import styled, { ThemeProvider } from 'styled-components';
import VideoPlayer from './Components/VideoPlayer';
import Style from './Styles/Style';

const Container = styled.div`
  display: flex;
  justify-content: center;
`;
const App = () => {
  return (
    <ThemeProvider theme={Style}>
      <Container>
        <VideoPlayer id={2} />
      </Container>
    </ThemeProvider>
  );
};

export default App;
