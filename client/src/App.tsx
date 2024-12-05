import './App.css';
import { Outlet } from 'react-router-dom';
import { setContext } from '@apollo/client/link/context'
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink
} from '@apollo/client'

import Navbar from './components/Navbar';

const httpLink = createHttpLink({
  uri: '/graphql'
});

const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem('id_token');
  console.log('Current token: ', token);
  console.log('Current headers: ', headers);
  const newHeaders = {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  };

  console.log('Final headers: ', newHeaders);
  return newHeaders;
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
      <Navbar />
      <Outlet />
    </ApolloProvider>
  );
}

export default App;
