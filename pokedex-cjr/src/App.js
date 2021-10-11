import logo from './logo.svg';
import './App.css';


function App() {
  return (
    <div className="navbar">
        <img src="https://fontmeme.com/permalink/211011/31d884e190b6170404eac32eeef5676b.png" alt="fonte-de-pokemon" border="0"/>
    
    <div className="navbar-navigators">
      <button className="navbar-button">
          <img vclassName="navbar-button-image" alt="Buscar pokémons" src="/images/search.svg"/>
      </button>
      <button className="navbar-button">
          <img vclassName="navbar-button-image" alt="Pokémons favoritados" src="/images/star.svg"/>
      </button>
      <button className="navbar-button">
          <img vclassName="navbar-button-image" alt="Usuário" src="/images/user.svg"/>
      </button>
    </div>
    </div>
  );
}

export default App;
