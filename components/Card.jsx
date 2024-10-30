/* eslint-disable react/prop-types */
export const Card = ({pokemon})=>{
    return(
        <div className="card pokemon-card">
            <img src={pokemon.image}/>
            <h4>{pokemon.name}</h4>
        </div>
    )
}