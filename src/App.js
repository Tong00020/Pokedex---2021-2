import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import './pages/main.css';
import './pages/unique.css';
import Main from './pages/main';
import Unique from './pages/unique';
import React, {useEffect,useState} from 'react';
import axios from 'axios';
import DisplayPokemon from './pages/DisplayPokemon';

function App() {

{/*
  const [pokemon,setPokemon] = useState({
    name:"bulbasaur", url:"http://pokeapi.co/api/v2/pokemon/1/"
  })

  //pega 20 pokemons
  const get20Pokemon =()=>{
    axios.get('http://pokeapi.co/api/v2/pokemon')
    .then ((response)=>{
      console.log(response);
      setPokemon(response.data.results);
    })
    .catch((err)=>{
      console.log(err)
    })
  }

  
  useEffect(()=>{
    get20Pokemon();
  })*/}

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

  <h2>Buscador de pokémons</h2>

  <div id="divBusca">
    <input type="text" class="foo" placeholder="Insira nome do pokémon" class="form" />
    <div id ="divBusca-clickables">
      <button class="divBusca-button">
        <svg className = "divBusca-icon" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"  stroke="#000000" stroke-opacity="56%"  sstroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-filter"><polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3"></polygon></svg>
      </button>

      <button class="divBusca-button">
        <svg className = "divBusca-icon " xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#000000" stroke-opacity="56%" stroke-width="1" stroke-linecap="round" stroke-linejoin="round" class="feather feather-search"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
      </button>
    </div>
  </div>
  
  <div id="pokemon-grid">
    {/* Componente */}
    <div className ="pokemon-container">
    <button className="Favorite">
         <svg className="FavoriteIcon" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#F79A95" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-star"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
    </button>
      <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/26.png"/>
      <div className="pokemon-description">
        <a>Raichu</a>
        <img src="/images/pokemonTypes/Eletric.png" height="15"/> 
      </div>
     </div> 
     {/*Componente */}

     {/* Componente */}
     <div className ="pokemon-container">
    <button className="Favorite">
         <svg className="FavoriteIcon" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#F79A95" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-star"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
    </button>
      <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/26.png"/>
      <div className="pokemon-description">
        <a>Raichu</a>
        <img src="/images/pokemonTypes/Eletric.png" height="15"/> 
      </div>
     </div> 
     {/*Componente */}
           {/* Componente */}
    <div className ="pokemon-container">
    <button className="Favorite">
         <svg className="FavoriteIcon" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#F79A95" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-star"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
    </button>
      <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/26.png"/>
      <div className="pokemon-description">
        <a>Raichu</a>
        <img src="/images/pokemonTypes/Eletric.png" height="15"/> 
      </div>
     </div> 
     {/*Componente */}
           {/* Componente */}
    <div className ="pokemon-container">
    <button className="Favorite">
         <svg className="FavoriteIcon" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#F79A95" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-star"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
    </button>
      <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/26.png"/>
      <div className="pokemon-description">
        <a>Raichu</a>
        <img src="/images/pokemonTypes/Eletric.png" height="15"/> 
      </div>
     </div> 
     {/*Componente */}
           {/* Componente */}
    <div className ="pokemon-container">
    <button className="Favorite">
         <svg className="FavoriteIcon" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#F79A95" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-star"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
    </button>
      <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/26.png"/>
      <div className="pokemon-description">
        <a>Raichu</a>
        <img src="/images/pokemonTypes/Eletric.png" height="15"/> 
      </div>
     </div> 
     {/*Componente */}
           {/* Componente */}
    <div className ="pokemon-container">
    <button className="Favorite">
         <svg className="FavoriteIcon" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#F79A95" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-star"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
    </button>
      <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/26.png"/>
      <div className="pokemon-description">
        <a>Raichu</a>
        <img src="/images/pokemonTypes/Eletric.png" height="15"/> 
      </div>
     </div> 
     {/*Componente */}
           {/* Componente */}
    <div className ="pokemon-container">
    <button className="Favorite">
         <svg className="FavoriteIcon" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#F79A95" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-star"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
    </button>
      <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/26.png"/>
      <div className="pokemon-description">
        <a>Raichu</a>
        <img src="/images/pokemonTypes/Eletric.png" height="15"/> 
      </div>
     </div> 
     {/*Componente */}
           {/* Componente */}
    <div className ="pokemon-container">
    <button className="Favorite">
         <svg className="FavoriteIcon" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#F79A95" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-star"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
    </button>
      <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/26.png"/>
      <div className="pokemon-description">
        <a>Raichu</a>
        <img src="/images/pokemonTypes/Eletric.png" height="15"/> 
      </div>
     </div> 
     {/*Componente */}
           {/* Componente */}
    <div className ="pokemon-container">
    <button className="Favorite">
         <svg className="FavoriteIcon" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#F79A95" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-star"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
    </button>
      <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/26.png"/>
      <div className="pokemon-description">
        <a>Raichu</a>
        <img src="/images/pokemonTypes/Eletric.png" height="15"/> 
      </div>
     </div> 
     {/*Componente */}
           {/* Componente */}
    <div className ="pokemon-container">
    <button className="Favorite">
         <svg className="FavoriteIcon" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#F79A95" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-star"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
    </button>
      <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/26.png"/>
      <div className="pokemon-description">
        <a>Raichu</a>
        <img src="/images/pokemonTypes/Eletric.png" height="15"/> 
      </div>
     </div> 
     {/*Componente */}
           {/* Componente */}
    <div className ="pokemon-container">
    <button className="Favorite">
         <svg className="FavoriteIcon" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#F79A95" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-star"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
    </button>
      <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/26.png"/>
      <div className="pokemon-description">
        <a>Raichu</a>
        <img src="/images/pokemonTypes/Eletric.png" height="15"/> 
      </div>
     </div> 
     {/*Componente */}
           {/* Componente */}
    <div className ="pokemon-container">
    <button className="Favorite">
         <svg className="FavoriteIcon" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#F79A95" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-star"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
    </button>
      <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/26.png"/>
      <div className="pokemon-description">
        <a>Raichu</a>
        <img src="/images/pokemonTypes/Eletric.png" height="15"/> 
      </div>
     </div> 
     {/*Componente */}
           {/* Componente */}
    <div className ="pokemon-container">
    <button className="Favorite">
         <svg className="FavoriteIcon" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#F79A95" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-star"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
    </button>
      <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/26.png"/>
      <div className="pokemon-description">
        <a>Raichu</a>
        <img src="/images/pokemonTypes/Eletric.png" height="15"/> 
      </div>
     </div> 
     {/*Componente */}
           {/* Componente */}
    <div className ="pokemon-container">
    <button className="Favorite">
         <svg className="FavoriteIcon" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#F79A95" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-star"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
    </button>
      <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/26.png"/>
      <div className="pokemon-description">
        <a>Raichu</a>
        <img src="/images/pokemonTypes/Eletric.png" height="15"/> 
      </div>
     </div> 
     {/*Componente */}
           {/* Componente */}
    <div className ="pokemon-container">
    <button className="Favorite">
         <svg className="FavoriteIcon" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#F79A95" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-star"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
    </button>
      <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/26.png"/>
      <div className="pokemon-description">
        <a>Raichu</a>
        <img src="/images/pokemonTypes/Eletric.png" height="15"/> 
      </div>
     </div> 
     {/*Componente */}
  </div>

  {<script>
    function getUsername(){
       prompt("Insira nome de usuário")
    }
    window.onload = getUsername
  </script> }
  {/*<DisplayPokemon pokemon={pokemon}/>*/}
</div>


  ); 
}

export default App;
