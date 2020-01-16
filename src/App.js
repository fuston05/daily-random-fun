import React from 'react';
import {Route} from 'react-router-dom';
import Header from './components/Header/Header.js';
import DadJoke from './components/DadJoke/DadJoke.js.js.js.js.js.js.js';
import ChuckJoke from './components/ChuckJoke/ChuckJoke.js.js.js';
import GeekJoke from './components/GeekJoke/GeekJoke.js';
import * as styles from './appStyles';

// chuck norris - http://www.icndb.com/api/
// http://api.icndb.com/jokes/random/
//multiple random: http://api.icndb.com/jokes/random/3
// insert other name: ?firstName= or ?lastName=

//categories
//http://api.icndb.com/jokes/random?limitTo=[nerdy]
//http://api.icndb.com/jokes/random?limitTo=[nerdy,explicit]

//exclude a category: http://api.icndb.com/jokes/random?exclude=[nerdy,explicit]
//get categories: http://api.icndb.com/categories

// ***************************************
//dad jokes: URL: https://icanhazdadjoke.com/api
//API: https://icanhazdadjoke.com/

// ***************************************
//geek jokes: url: https://www.programmableweb.com/api/geek-jokes
// API?? https://geek-jokes.sameerkumar.website/api



function App() {

  return (
    <div className="App">
    
    <Route path= '/' component= {Header} />
    <Route exact path= '/dadjokes' component= {DadJoke} />
    <Route exact path= '/chuckjokes' component= {ChuckJoke} />
    <Route exact path= '/geekjokes' component= {GeekJoke} />
    </div>
  );
}

export default App;
