import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
import './App.css';
import ListPage from './pages/ListPage';
import DetailPage from './pages/DetailPage';
import FavoritePage from './pages/FavoritePage';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import { createContext, useState } from 'react';

export const DetailContext = createContext({});

  export default function App(){
    const client = new ApolloClient({
      uri: 'https://graphql.anilist.co/',
      cache: new InMemoryCache(),
  });
  

    const [showDetail, setShowDetail] = useState(false);
    const [data, setData] = useState([])
    return <Router>
    <ApolloProvider client={client}>
        
        <DetailContext.Provider value={{data, setData}}> 
          <Switch>
            <Route exact path='/favorite'>
              <FavoritePage/>
              </Route>  
                <Route exact path='/detail/:id'>
                  <DetailPage/>
                </Route>
                
                <Route exact path='/'>
                  <ListPage/>
                  </Route>

                              
          </Switch>
        </DetailContext.Provider>
      
    </ApolloProvider>
    </Router>
  }
 
