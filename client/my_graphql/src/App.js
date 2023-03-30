import './App.css';
import { ApolloClient, InMemoryCache, ApolloProvider, HttpLink, from} from '@apollo/client';
import { onError} from '@apollo/client/link/error';
import GetBooks from './components/GetBooks';

const errorLink =  onError(({ graphQLErrors, newtorkErrors})=>{
  if(graphQLErrors){
      graphQLErrors.map(({message, location, path}) => {
        alert(' graphQL error ${message}');
    }) ;
  }

});

const link = from([
  errorLink, 
  new HttpLink({ uri: "http://localhost:3001/graphql" }),
  
]);

const client = new ApolloClient({
  cache : new InMemoryCache(),
  link: link,
 
});


function App() {
  return <ApolloProvider client={client}>
    <GetBooks/>
  </ApolloProvider>
}

export default App;
