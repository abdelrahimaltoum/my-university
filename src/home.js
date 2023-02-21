import React from "react";
import "./home.css";
import Articals from "./articals";
import Icons from "./icons";
import { Button } from "@material-ui/core";
import Announcment from "./announcment";

function Home () {
    return(
    <div className="home">
       <Announcment/>
        <div className="home-header">
            <h2>Campus Life</h2>
            <p>Building a vibrant community of creative and accomplished people
                 from around the world</p>
        </div>
        <div className="home-artical-row">
        <Articals 
   articalName = "Student Life" 
   articalText = "A residential campus with diverse housing, exceptional dining, and over 600 student organizations" 
   articalImage ="https://www.stanford.edu/wp-content/uploads/2022/04/Campus-life-1-1499x940.jpg"
   articalLink="Student Affairs >"
    />
    <Articals 
   articalName = "Arts & Culture" 
   articalText = "A rich tradition of fostering creativity and a vibrant arts district on campus" 
   articalImage ="https://www.stanford.edu/wp-content/uploads/2022/04/Campus-life-2-1499x940.jpg"
   articalLink="Stanford Arts >"
    />
    <Articals 
   articalName = "Recreation & Wellness" 
   articalText = "State-of-the-art facilities and fitness programs to encourage movement and play" 
   articalImage ="https://www.stanford.edu/wp-content/uploads/2022/04/Campus-life-3-1499x940.jpg"
   articalLink="Recreation & Wellness >"
    />
    </div>
    <div className="home-header">
            <h2>Athletics</h2>
            <p>Providing student-athletes the opportunity to achieve excellence both in competition and in the classroom</p>
        </div>
        <div className="home-artical-row">
        <Articals 
   articalName = "Home of Champions"
   articalText = "Stanford’s 131 NCAA championships are the most for any university, a product of an unrivaled culture of excellence and continued support from the campus community" 
   articalImage ="https://www.stanford.edu/wp-content/uploads/2022/04/Gym-champs-1499x937.jpg"
   articalLink="National Championships>"
    />
    <Articals 
   articalName = "Olympic Excellence" 
   articalText = "The Cardinal has produced at least one medalist in every Olympics in which the U.S. has competed since 1912, totaling 296 medals from 177 medalists" 
   articalImage ="https://www.stanford.edu/wp-content/uploads/2022/04/Ledecky-1499x937.jpg"
   articalLink="Medals >"
    />
    <Articals 
   articalName = "Multidimensional Impact" 
   articalText = "Stanford student-athletes have achieved local, national, and global impact through community involvement and advocacy" 
   articalImage ="https://www.stanford.edu/wp-content/uploads/2022/04/Impact-1499x937.jpg"
   articalLink="Athlete Stories >"
    />
    </div>
    <div className="icons-row">
        <Icons 
        iconImage ="https://info.nu.edu/wp-content/uploads/sites/2/2022/07/save_time.png?w=417" 
        iconHeader ="Save Time and Tuition"
        IconText = "Studying and completing just one course each month keeps you focused on your goals, balanced in your life, and on the fast track to graduation."/>
         <Icons 
        iconImage ="https://info.nu.edu/wp-content/uploads/sites/2/2022/07/education.png?w=520" 
        iconHeader ="Education Designed for Your Life"
        IconText = "We customize education plans that include adaptive instruction, holistic student support, and competency-based credentialing."/>
         <Icons 
        iconImage ="https://info.nu.edu/wp-content/uploads/sites/2/2022/07/career.png?w=455" 
        iconHeader ="75 Degree Programs"
        IconText = "Whether you’re starting fresh or seeking advancement, our career-focused programs are designed to help you make an impact in your chosen field."/>
       
    </div>
    <div className="icon-button-div">
    <Button variant="outlined" className="icons-button">Request Information</Button>
    </div>
    </div>
    )
}
export default Home;