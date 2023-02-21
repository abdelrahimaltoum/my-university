import React from "react";
import "./icons.css";


function Icons ({iconImage , iconHeader ,IconText}){
    return(
        <div className="icons">
            <img className="icons-image" src={iconImage} />
            <h2 className="icons-header">{iconHeader}</h2>
            <p className="icons-text">{IconText}</p>
        </div>
    )
}
export default Icons;