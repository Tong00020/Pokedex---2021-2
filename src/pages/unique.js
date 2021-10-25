import './unique.css';

function Unique(){
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
    

export default Unique