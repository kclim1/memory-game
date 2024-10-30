import { useState,useEffect } from 'react'

import '../styles/card.css'
import '../styles/App.css'
import { Card } from '../components/Card'
import { fetchPokemon } from '../utils/fetch'
import { Counter } from '../components/Counter'
import {useClickHandler} from '../utils/useClickHandler'
import { shuffleCard } from '../utils/shuffleCard'

export function App() {
  const[error,setError] = useState(null)
  const[pokemonData,setPokemonData] = useState([])

  const {streak,count,handleClick} = useClickHandler (setPokemonData,shuffleCard)

  useEffect(() => {
    const getData = async () => {
        try {
            const data = await fetchPokemon();
            setPokemonData(data);
        } catch (error) {
            console.error(error); 
            setError(error); 
        }
    };
    
    getData();
}, []);

return (
  <div className="container-fluid pokemon-container mt-4">
    
    {error && (
      <div>
        {error}
      </div>
    )}


    <div className="row">
      {pokemonData.map((pokemon, index) => (
        <div className="col-md-3 " onClick={() => handleClick(pokemon)} key={index}>
          <Card pokemon={pokemon} />
        </div>
      ))}
    </div>
    <div className="counter-container">
      <Counter streak={streak} count={count} />
    </div>
  </div>
);
}


