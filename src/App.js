import React, {useEffect, useState} from 'react';
import {Route} from 'react-router-dom';
import Header from './components/Header/Header.js';
import DadJoke from './components/DadJoke/DadJoke.js';
import ChuckJoke from './components/ChuckJoke/ChuckJoke.js';
import GeekJoke from './components/GeekJoke/GeekJoke.js';
import * as styles from './appStyles';
import Axios from 'axios';

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
function getChuckJoke(){
  // return(
  //   Axios
  //   .get('http://api.icndb.com/jokes/random/') //chuck norris api
  //   .then(res => {
  //     console.log(res.data.value.joke);
  //   })
  //   .catch(err => console.log('Error: ', err))
  // );
  return ('joke coming soon');
}


function App() {
  //states: 
  const [type, setType]= useState(null);

  useEffect( () => {
    getChuckJoke();  
  }, [] );
  return (
    <div className="App">
    <Route path= '/' component= {Header} />
    <Route exact path= '/dadjokes' component= {DadJoke} />
    <Route exact path= '/chuckjokes' render= { (props) => <ChuckJoke {...props} /> }/>
    <Route exact path= '/geekjokes' component= {GeekJoke} />
    </div>
  );
}

export default App;
