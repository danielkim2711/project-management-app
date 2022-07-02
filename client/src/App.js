import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
import { BrowserRouter as Router } from 'react-router-dom';

import Header from './components/Header';
import Clients from './components/Clients';
import Projects from './components/Projects';
import AddClientModal from './components/AddClientModal';

const cache = new InMemoryCache({
  typePolicies: {
    Query: {
      fields: {
        clients: {
          merge(existing, incoming) {
            return incoming;
          },
        },
        projects: {
          merge(existing, incoming) {
            return incoming;
          },
        },
      },
    },
  },
});

const client = new ApolloClient({
  uri: 'http://127.0.0.1:8000/graphql',
  cache,
});

function App() {
  return (
    <Router>
      <ApolloProvider client={client}>
        <Header />
        <div className='container'>
          <AddClientModal />
          <Projects />
          <Clients />
        </div>
      </ApolloProvider>
    </Router>
  );
}

export default App;
