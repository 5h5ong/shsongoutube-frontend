import React from 'react';
import styled, { ThemeProvider } from './typed-components';
import { HashRouter as Router } from 'react-router-dom';
import { useQuery } from 'react-apollo-hooks';
import { theme } from './Styles/Style';
import GlobalStyle from './Styles/GlobalStyle';
import Routes from './Components/Routes';
import { IS_LOGGED_IN } from './globalQueries';

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const App = () => {
  const {
    data: { isLoggedIn }
  }: any = useQuery(IS_LOGGED_IN);
  return (
    <ThemeProvider theme={theme}>
      <>
        <GlobalStyle />
        <Container>
          <Router>
            <Routes isLoggedIn={isLoggedIn} />
          </Router>
        </Container>
      </>
    </ThemeProvider>
  );
};

export default App;
