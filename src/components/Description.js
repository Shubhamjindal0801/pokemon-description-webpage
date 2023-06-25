import React from "react";

function Description({
    heightpok,
    weightpok,
    pokstat1,
    pokstat2,
    pokstat3,
    pokstat4,
    pokstat5,
    pokstat6,
    pokbs1,
    pokbs2,
    pokbs3,
    pokbs4,
    pokbs5,
    pokbs6,
}){
    return (
        <div className="desc">
            <p><b>Height</b> is <b>{heightpok*10} cm.</b></p>
            <p><b>Weight</b> is <b>{weightpok*0.1} kg.</b></p>
            <h3>Stat</h3>
            <p><b>{pokstat1} : {pokbs1}</b></p>
            <p><b>{pokstat2} : {pokbs2}</b></p>
            <p><b>{pokstat3} : {pokbs3}</b></p>
            <p><b>{pokstat4} : {pokbs4}</b></p>
            <p><b>{pokstat5} : {pokbs5}</b></p>
            <p><b>{pokstat6} : {pokbs6}</b></p>
        </div>
    )
}

export default Description;