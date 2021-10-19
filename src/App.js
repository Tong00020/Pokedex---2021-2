import logo from './logo.svg';
import './App.css';

function App() {
  return (
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
        
        <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/26.png"/>
        <div className="pokemon-description">
          <a>Raichu</a>
          <img src="/images/pokemonTypes/Eletric.png" height="15"/> 
        </div>
       </div> 
       {/*Componente */}

             {/* Componente */}
      <div className ="pokemon-container">
       
        <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/26.png"/>
        <div className="pokemon-description">
          <a>Raichu</a>
          <img src="/images/pokemonTypes/Eletric.png" height="15"/> 
        </div>
       </div> 
       {/*Componente */}
             {/* Componente */}
      <div className ="pokemon-container">
        
        <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/26.png"/>
        <div className="pokemon-description">
          <a>Raichu</a>
          <img src="/images/pokemonTypes/Eletric.png" height="15"/> 
        </div>
       </div> 
       {/*Componente */}
             {/* Componente */}
      <div className ="pokemon-container">
        
        <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/26.png"/>
        <div className="pokemon-description">
          <a>Raichu</a>
          <img src="/images/pokemonTypes/Eletric.png" height="15"/> 
        </div>
       </div> 
       {/*Componente */}
             {/* Componente */}
      <div className ="pokemon-container">
        
        <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/26.png"/>
        <div className="pokemon-description">
          <a>Raichu</a>
          <img src="/images/pokemonTypes/Eletric.png" height="15"/> 
        </div>
       </div> 
       {/*Componente */}
             {/* Componente */}
      <div className ="pokemon-container">
        
        <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/26.png"/>
        <div className="pokemon-description">
          <a>Raichu</a>
          <img src="/images/pokemonTypes/Eletric.png" height="15"/> 
        </div>
       </div> 
       {/*Componente */}
             {/* Componente */}
      <div className ="pokemon-container">
        
        <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/26.png"/>
        <div className="pokemon-description">
          <a>Raichu</a>
          <img src="/images/pokemonTypes/Eletric.png" height="15"/> 
        </div>
       </div> 
       {/*Componente */}
             {/* Componente */}
      <div className ="pokemon-container">
        
        <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/26.png"/>
        <div className="pokemon-description">
          <a>Raichu</a>
          <img src="/images/pokemonTypes/Eletric.png" height="15"/> 
        </div>
       </div> 
       {/*Componente */}
             {/* Componente */}
      <div className ="pokemon-container">
        
        <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/26.png"/>
        <div className="pokemon-description">
          <a>Raichu</a>
          <img src="/images/pokemonTypes/Eletric.png" height="15"/> 
        </div>
       </div> 
       {/*Componente */}
             {/* Componente */}
      <div className ="pokemon-container">
        
        <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/26.png"/>
        <div className="pokemon-description">
          <a>Raichu</a>
          <img src="/images/pokemonTypes/Eletric.png" height="15"/> 
        </div>
       </div> 
       {/*Componente */}
             {/* Componente */}
      <div className ="pokemon-container">
        
        <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/26.png"/>
        <div className="pokemon-description">
          <a>Raichu</a>
          <img src="/images/pokemonTypes/Eletric.png" height="15"/> 
        </div>
       </div> 
       {/*Componente */}
             {/* Componente */}
      <div className ="pokemon-container">
        
        <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/26.png"/>
        <div className="pokemon-description">
          <a>Raichu</a>
          <img src="/images/pokemonTypes/Eletric.png" height="15"/> 
        </div>
       </div> 
       {/*Componente */}
    </div>
    <script>
      function getUsername(){
        prompt("Insira nome de usuário")
      }
      window.onload = getUsername
    </script>
  </div>
  );
}

export default App;
