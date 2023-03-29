import logo from './logo.svg';
import './App.css';
import { ApolloClient, InMemoryCache, ApolloProvider, HttpLink, from} from '@apollo/client';
import { onError} from '@apollo/client/link/error';

const errorLink =  onError(({ graphQLErrors, newtorkErrors})=>{
  if(graphQLErrors){
      graphQLErrors.map(({message, location, path}) => {
        alert(' graphQL error ${message}');
    }) ;
  }

});

const link = from([
  errorLink, 
  new HttpLink({ uri: "http://localhost:3000/graphql" })
]);

const client = new ApolloClient({
  cache : new InMemoryCache(),
  link: link,
});


function App() {
  return <ApolloProvider client={client}>

  </ApolloProvider>
}

export default App;
