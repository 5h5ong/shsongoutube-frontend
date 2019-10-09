import React from 'react';
import styled, { ThemeProvider } from './typed-components';
import {} from 'react-router-dom';
import { theme } from './Styles/Style';
import VideoPlayer from './Components/VideoPlayer';
import GlobalStyle from './Styles/GlobalStyle';

const Container = styled.div`
  display: flex;
  justify-content: center;
`;

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <>
        <GlobalStyle />
        <Container>
          <VideoPlayer id={2} />
        </Container>
      </>
    </ThemeProvider>
  );
};

export default App;
