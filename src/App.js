import React from 'react';
import { Route } from 'react-router-dom';

import Header from './components/Header/Header.js';
import Home from './components/Home/Home';
import DadJoke from './components/DadJoke/DadJoke.js';
import ChuckJoke from './components/ChuckJoke/ChuckJoke.js';
import GeekJoke from './components/GeekJoke/GeekJoke.js';
import {MainCont} from './appStyles';

function App() {
  return (
    <MainCont className="App">
      <Route path='/'>
        <Header />
      </Route>

      <Route exact path='/'>
        <Home />
      </Route>

      <Route exact path='/dadjokes/:id'>
        <DadJoke />
      </Route>

      <Route exact path='/chuckjokes/:id'>
        <ChuckJoke />
      </Route>

      <Route exact path='/geekjokes/:id'>
        <GeekJoke />
      </Route>
    </MainCont>
  );
}

export default App;
