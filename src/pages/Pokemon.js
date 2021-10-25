import { useEffect, useState } from 'react';

import axios from 'axios';

const Pokemon = ({thisPokemon}) =>{

    const [onePokemon,setOnePokemon] = useState({
        name: "",
        sprites:{
            front_default:""
        }
    });

      const getPokemon = (url)=>{
        axios.get(url)
        .then ((Response)=>{
          console.log(Response);
          setOnePokemon(Response.data);
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
            <p>{onePokemon.name}</p>
            <img url = {onePokemon.sprites.front_default}></img>
        </div>
    )

}

export default Pokemon;