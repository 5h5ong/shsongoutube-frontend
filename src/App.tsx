import React from 'react';
import styled, { ThemeProvider } from './typed-components';
import { HashRouter as Router, Route } from 'react-router-dom';
import Home from './Routes/Home';
import { theme } from './Styles/Style';
import GlobalStyle from './Styles/GlobalStyle';
import Routes from './Components/Routes';

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
          <Router>
            <Routes />
          </Router>
        </Container>
      </>
    </ThemeProvider>
  );
};

export default App;
