import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import MainPage from './containers/MainPage/MainPage';
import CountryList from './containers/GetCountryInfo/CountryList';
import Chat from './containers/UseChat/Chat';
import FindRing from './containers/PlayGames/FindRing/FindRing';
import Poker from './containers/PlayGames/Poker/Poker'
import './bootstrap.min.css';

const App = () => (
  <BrowserRouter>
    <Switch>
      <Route path='/' exact component={MainPage}/>
      <Route path='/country-info'  component={CountryList}/>
      <Route path='/chat'  component={Chat}/>
      <Route path='/games/find-ring'  component={FindRing}/>
      <Route path='/games/poker'  component={Poker}/>
      <Route render={() => <h1>Not found</h1>}/>
      
    </Switch>
  </BrowserRouter>
);

export default App;
