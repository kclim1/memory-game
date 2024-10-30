import { useState } from "react";

export const useClickHandler = (setPokemonData,shuffleCard)=>{
    const [count,setCount] = useState(0)
    const [streak,setStreak] = useState(0)
    const [clickedNames,setClickedNames] = useState([])
    const [allCounts,setAllCounts] = useState([])
    
    const handleClick = (pokemon)=>{
        if(clickedNames.includes(pokemon.name)){
            alert('you lost!')
            setCount(0)
            setClickedNames([])
            setAllCounts([...allCounts,count])

            const maxStreak = Math.max(...allCounts,count)
            setStreak(maxStreak)
        }else{
            setClickedNames([...clickedNames,pokemon.name])
            setCount((prevCount=>prevCount+1))
            console.log(`${pokemon.name} clicked`)
        }
        setPokemonData((prevData)=>shuffleCard(prevData))
    }
    return {streak,count,handleClick,clickedNames}
}