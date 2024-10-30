import axios from "axios";

export const fetchPokemon = async ()=>{
    try{
        const pokemonArray = []
        for(let i=0;i<12;i++){
            const pokemonNumber = Math.ceil(Math.random() * 200 )
            const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemonNumber}`)
    
            const pokemonData = {
                name: response.data.species.name,
                image: response.data.sprites.front_default,
            }
        pokemonArray.push(pokemonData)
        }
        console.log(pokemonArray)
        return pokemonArray
    }catch(error){
        console.error(error)
        return []
    }

}

