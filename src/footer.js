import { Facebook, Instagram, LinkedIn, Twitter, WhatsApp, YouTube } from "@material-ui/icons";
import React from "react";
import "./footer.css";
import {Link} from "react-router-dom";
function Footer () {
    return (
        <div className="footer">
            <div className="footer-up">
               <h2>Follow Us</h2>
               <Link to="https://www.facebook.com"><Facebook className="footer-icon"/></Link>
               <Link to="https://www.instagram.com"><Instagram className="footer-icon"/></Link>
               <Link to="https://www.linkedIn.com"><LinkedIn className="footer-icon"/></Link>
               <Link to="https://www.twitter.com"><Twitter className="footer-icon"/></Link>
               <Link to="https://www.youtube.com"><YouTube className="footer-icon"/></Link>
               <Link to="https://www.whatsapp.com"><WhatsApp className="footer-icon"/></Link>
            </div>
            <div className="footer-down">
                <div className="footer-down-col">
            <img className="header-logo" src="https://media.istockphoto.com/id/1150645589/vector/color-logo-of-the-school.jpg?s=612x612&w=0&k=20&c=ZkTcftJRC6On3qENe6NLgMvWRsWirSIb9c3dCcNQdcw=" />
            
            <Link to="/study-at-passion">Contact The University</Link>
            <Link to="/study-at-passion">Accessibility statement</Link>
            <Link to="/study-at-passion">Freedom of information</Link>
            <Link to="/study-at-passion">Privacy policy and cookies</Link>
            <Link to="/study-at-passion">Statement on Modern Slavery</Link>
            <Link to="/study-at-passion">Terms and conditions</Link>
            </div>
            <div className="footer-down-col">
                <Link to="/study-at-passion">Study at Passion</Link>
                <Link to="/undergraduate">Undergraduate</Link>
                <Link to="/postgraduate">Postgraduate</Link>
                <Link to="/con">Continuing education</Link>
                <Link to="/search">Executive and professional education</Link>
                <Link to="/search">Courses in education</Link>
                </div>
                <div className="footer-down-col">
                <Link to="/search"> About the University</Link>
                <Link to="/search">How the University and Colleges work</Link>
                <Link to="/search">Give to Passion</Link>
                <Link to="/search">Jobs</Link>
                <Link to="/search">Maps</Link>
                <Link to="/search">Visiting the University</Link>
                </div>
                
                <div className="footer-down-col">
                <Link to="/search"> Research at Passion</Link>
                <Link to="/search">Research news</Link>
                <Link to="/search">About research at Passion</Link>
                <Link to="/search">Public engagement</Link>
                <Link to="/search">Spotlight on...</Link>
               
                </div>
               
            </div>
            
        </div>
    )
}
export default Footer;