import { Search } from "@material-ui/icons";
import React from "react";
import { Link } from "react-router-dom";
import "./header.css";
function Header () {
    return (
        <div className="header">
            <div className="header-left">
       <Link to="/"><img className="header-logo" src="https://media.istockphoto.com/id/1150645589/vector/color-logo-of-the-school.jpg?s=612x612&w=0&k=20&c=ZkTcftJRC6On3qENe6NLgMvWRsWirSIb9c3dCcNQdcw=" /> </Link>
            <Link to="/faculties">Faculties</Link>
            <Link to="/apply">Apply Now!</Link>
            </div>
            <div className="header-middle">
            <input type="text" placeholder="search..."  className="header-input"/>
          <Link to="/search"> <Search /></Link> 
            </div>
            <div className="header-right">
            <Link to="/login">Log in</Link>
            <Link to="/about">About</Link>
            </div>
        </div>
    )
}
export default Header;