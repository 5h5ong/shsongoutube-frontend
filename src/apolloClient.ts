import ApolloClient from 'apollo-boost';

const defaults = {
  isLoggedIn: Boolean(localStorage.getItem('token')) || false
};
const resolvers = {
  Mutation: {
    localLogin: (_: any, { token }: any, { chche }: any) => {
      localStorage.setItem('token', token);
      // update defaults vaule
      chche.writeData({
        isLoggedIn: true
      });
      return;
    },
    localLogout: (_: any) => {
      // remove token inside localStorage
      localStorage.removeItem('token');
      // reload window
      window.location.reload();
      return;
    }
  }
};

export default new ApolloClient({
  uri: 'http://localhost:4000',
  clientState: {
    defaults,
    resolvers
  },
  headers: {
    Authorization: `Bearer ${localStorage.getItem('token')}`
  }
});
