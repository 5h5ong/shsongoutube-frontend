import React from 'react';
import styled, { ThemeProvider } from './typed-components';
import { HashRouter as Router } from 'react-router-dom';
import { theme } from './Styles/Style';
import GlobalStyle from './Styles/GlobalStyle';
import Routes from './Components/Routes';
import Header from './Components/Header';

const Container = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
`;

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <>
        <GlobalStyle />
        <Container>
          <Header />
          <Router>
            <Routes isLoggedIn={true} />
          </Router>
        </Container>
      </>
    </ThemeProvider>
  );
};

export default App;
