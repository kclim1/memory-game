/* eslint-disable react/prop-types */

export const Counter =({count,streak})=>{
    return(
        <div className="container counter-container">
            <h4>Current Streak: {count} </h4>
            <h4>Longest Streak: {streak} </h4>
        </div>
    )
}