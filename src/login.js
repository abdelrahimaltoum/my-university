import { Button } from "@material-ui/core";
import React from "react";
import { Link } from "react-router-dom";
import "./login.css";

function Login () {
    return (
        <div className="login">
            <img src="https://media.istockphoto.com/id/1150645589/vector/color-logo-of-the-school.jpg?s=612x612&w=0&k=20&c=ZkTcftJRC6On3qENe6NLgMvWRsWirSIb9c3dCcNQdcw=" />
                <h2>Log In To Your University Account</h2>
            <form className="login-form">
                <h3>Email</h3>
                <input type="email" required />  
                <h3>Password</h3>
                <input type="password" required />
            <Link to="/profile"><Button >Log In</Button> </Link> 
                <h4>New to University ?</h4>
          <Link to="/apply"><Button className="apply-button">Apply Now</Button></Link>
                </form>
        </div>
    )
}
export default Login;