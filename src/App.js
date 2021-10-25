import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import Main from './pages/main';
import Unique from './pages/unique';
import React, {useEffect,useState} from 'react';
import axios from 'axios';
import DisplayPokemon from './pages/DisplayPokemon';

function App() {


  const [pokemon,setPokemon] = useState({
    name:"bulbasaur", url :"http://pokeapi.co/api/v2/pokemon/1/"
  })

  //pega 20 pokemons
  const get20Pokemon =()=>{
    axios.get('http://pokeapi.co/api/v2/pokemon')
    .then ((Response)=>{
      console.log(Response);
      setPokemon(Response.data.results);
    })
    .catch((err)=>{
      console.log(err)
    })
  }

  
  useEffect(()=>{
    get20Pokemon();
  })

  return(
  /*<Router>
    <Switch>
    <Route path="/unique">
    <DisplayPokemon pokemon={pokemon}/>
        <Unique/>
      </Route>
      <Route path="/">
        <Main/>
      </Route>
    </Switch>
  </Router> */

  <div>
            <div className="navbar">
                <img src="https://fontmeme.com/permalink/211011/31d884e190b6170404eac32eeef5676b.png" alt="fonte-de-pokemon" border="0" height='60'/>
              <div className="navbar-navigators">
                <button className="navbar-button">
                  <img vclassName="navbar-button-image" alt="Buscar pokémons" src="/images/search.svg" height='30'/>
                </button>
        
                <button className="navbar-button">
                  <img vclassName="navbar-button-image" alt="Pokémons favoritados" src="/images/star.svg" height='30'/>
                </button>
        
                <button className="navbar-button">
                  <img vclassName="navbar-button-image" alt="Usuário" src="/images/user.svg" height='30'/>
                </button>
              </div>
            </div>
            

            <h1>Gyarados</h1>
            <div className= "pokemon-unique-container">
                <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/130.png"/>
                <a className="topic">Tipo(s): <a className="atributo">water.flying</a></a>
                <a className="topic">Número de identificação: <a className="atributo">130</a></a>
                <a className="topic">Altura: <a className="atributo">65m</a></a>
                <a className="topic">Peso: <a className="atributo">2350Kg</a></a>
            </div>
        </div>
  
  ); 
}

export default App;
