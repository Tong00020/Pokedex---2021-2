import React from 'react';

export default function Pokemon({ pokemon }) {
    return (
      <div>
        <h1>
          {pokemon.name}
        </h1>
        <img src={pokemon.sprites.front_default} alt="Imagem pokémon" />
      </div>
    );
  }

  Pokemon.propTypes = {
    pokemon: PropTypes.shape({
      name: PropTypes.string,
      sprites: PropTypes.shape({
        front_default: PropTypes.string,
      }),
    }).isRequired,
  };

  export async function getStaticProps({ params }) {
    const pokemon = await fetch(`https://pokeapi.co/api/v2/pokemon/${params.id}`)
      .then((respostaDoServer) => {
        if (respostaDoServer.ok) {
          return respostaDoServer.json();
        }
  
        throw new Error('Deu problema');
      })
      .then((respostaEmObjeto) => respostaEmObjeto);
  
    return {
      props: {
        pokemon,
      },
    };
  }
  