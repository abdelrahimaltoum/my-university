import { Button, Checkbox } from "@material-ui/core";
import React from "react";
import { Link } from "react-router-dom";
import "./apply.css";

function Apply () {
    return (
        <div className="apply">
            <img src="https://media.istockphoto.com/id/1150645589/vector/color-logo-of-the-school.jpg?s=612x612&w=0&k=20&c=ZkTcftJRC6On3qENe6NLgMvWRsWirSIb9c3dCcNQdcw=" />
                <h2>Become A Member Of Our Family!</h2>
            <form className="apply-form">
                <div className="form-row">
                <h3>First Name</h3>
                <input type="text"required  className="text"/>  
                <h3>Last Name</h3>
                <input type="Text"required className="text"/>

                </div>
                <div className="form-row">
                <h3>Email</h3>
                <input type="email"required className="first text"/>  
                <h3>Gender:</h3>
             <span id="male"> <input type="radio" name="gender" /><label className="gender-label">Male</label> </span> 
           <span id="female"><input type="radio" name="gender" /><label className="gender-label">Female</label> </span>

                </div>
                <div className="form-row">
                    <h3>Password</h3>
                    <input type="password"  required  className="text"/>
                    <h3> Confirm Password</h3>
                    <input type="password"  required className="text" />
                    </div>
                    <div className="form-row">
        <label>  Choose what faculty you want to apply to </label><select>
          <option>select a faculty</option>
          <option>College of Business and Economics (CBE)</option>
          <option>Faculty of Art, Design And Architecture</option>
          <option>Faculty of Education</option>
          <option>Faculty of Engineering & the Built Environment</option>
          <option>Faculty of Health Sciences</option>
          <option>Faculty of Humanities</option>
          <option>Faculty of Law</option>
          <option>Faculty of Science</option>
          <option>Business School</option>
          </select>
          </div>
                    <div className="form-row">
                <Checkbox/><p>By Applying , you agree to our privacy policies
                    and our terms of conditions 
                </p></div>    
  <Link to="/message" ><Button >Apply Now</Button></Link> 
                <h4>Already A Student ?</h4>
          <Link to="/login"><Button className="login-button">Log In</Button></Link>
          
                </form>
        </div>
    )
}
export default Apply;