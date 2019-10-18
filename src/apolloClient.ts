import ApolloClient from 'apollo-boost';

const defaults = {
  isLoggedIn: Boolean(localStorage.getItem('token')) || false
};
const resolvers = {
  Mutation: {
    localLogin: (_: any, { token }: any, { chche }: any) => {
      console.log(token);
      localStorage.setItem('token', token);
      // update defaults vaule
      chche.writeData({
        isLoggedIn: true
      });
      return;
    }
  }
};

export default new ApolloClient({
  uri: 'http://localhost:4000',
  clientState: {
    defaults,
    resolvers
  }
});
