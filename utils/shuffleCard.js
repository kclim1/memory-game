export const shuffleCard = (pokemonData)=>{
    return [...pokemonData].sort(()=> Math.random() - 0.5 )
}