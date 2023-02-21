import React from "react";
import { Link } from "react-router-dom";
import "./articals.css";

function Articals ({articalName, articalText , articalImage , articalLink}) {
    return(
        <div className="articals">
           
            <img src={articalImage} className="artical-image" />
            <h2>{articalName}</h2>
            <p>{articalText}</p>
            <Link to="/">{articalLink}</Link>
           
        </div>
    )
}
export default Articals;