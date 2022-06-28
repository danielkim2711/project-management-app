import Header from './components/Header';
import Clients from './components/Clients';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';

const client = new ApolloClient({
  uri: 'http://127.0.0.1:8000/graphql',
  cache: new InMemoryCache(),
});

function App() {
  return (
    <>
      <ApolloProvider client={client}>
        <Header />
        <div className='container'>
          <Clients />
        </div>
      </ApolloProvider>
    </>
  );
}

export default App;
