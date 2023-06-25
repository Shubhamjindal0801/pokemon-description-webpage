import React, { useState } from "react";
import Description from "./Description";

function PoekmonThumbnail({
    id,
    name,
    image,
    type,
    height,
    weight,
    stat1,
    stat2,
    stat3,
    stat4,
    stat5,
    stat6,
    bs1,
    bs2,
    bs3,
    bs4,
    bs5,
    bs6,
}) {
    const style = `thumb-container ${type}`
    const [show, setShow] = useState(false)
    return (
        <div className={style}>
            <div className="number">
                <small>#0{id}</small>
            </div>
            <img src={image} alt={name} />
            <div className="detail-wrapper">
                <h3>{name.toUpperCase()}</h3>
                <small>Type: {type}</small>
                <button
                    className="pokeinfo"
                    onClick={() => setShow(!show)}
                >
                    {show === true ? "Know Less..." : "Know More..."}
                </button>
                {show === true && <Description
                    weightpok={weight}
                    heightpok={height}
                    pokestat1={stat1}
                    pokestat2={stat2}
                    pokestat3={stat3}
                    pokestat4={stat4}
                    pokestat5={stat5}
                    pokestat6={stat6}

                    pokbs1={bs1}
                    pokbs2={bs2}
                    pokbs3={bs3}
                    pokbs4={bs4}
                    pokbs5={bs5}
                    pokbs6={bs6}
                />}
            </div>
        </div>
    )
}

export default PoekmonThumbnail;