import React from "react";

import "./facluty.css";

function Facluty({image , title , text}){
    return (
        <div className="facluty">
            <img src={image} />
            <h3>{title}</h3>
            <p>{text}</p>
        </div>
    )
}
export default Facluty;