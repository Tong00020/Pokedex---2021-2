import { useEffect, useState } from 'react';

import axios from 'axios';

const Pokemon = ({thisPokemon}) =>{

    const [pokemon, setPokemon] = useState({
        name: "",
        sprites:{
            front_default:""
        }
    });

      const getPokemon = (url)=>{
        axios.get(url)
        .then ((response)=>{
          console.log(response);
          setPokemon(response.data);
        })
        .catch((err)=>{
          console.log(err)
        })
      }

      useEffect(()=>{
          getPokemon(thisPokemon.url)
      })
      
    
    return(
        <div>
            <p>{pokemon.name}</p>
            <img url = {pokemon.sprites.front_default}></img>
        </div>
    )

}

export default Pokemon;