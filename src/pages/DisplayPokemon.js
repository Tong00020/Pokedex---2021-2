import React from "react";
import Pokemon from "./Pokemon";

const DisplayPokemon = ({thisPokemon}) => {
    return (
        <div>
            {
                thisPokemon.map((val,idx)=>{
                    //console.log('test');
                    <Pokemon key={val} thisPokemon={val}/>

                })
            }
        </div>
    )
}

export default DisplayPokemon;