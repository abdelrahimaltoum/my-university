import React from "react";

import "./faculties.css";
import Facluty from "./faculty";

function Faculties({image , title , text}){
    return(
        <div className="faculties">
            <div className="row">
            <Facluty 
            image="https://www.uj.ac.za/wp-content/uploads/2021/08/college-of-business-and-economics-360x360.jpg"
            title="College of Business and Economics (CBE)"
            text="Created from the former Faculties of Management, and Economic and Financial Sciences" />
             <Facluty 
            image="https://www.uj.ac.za/wp-content/uploads/2021/08/faculty-of-art-design-and-architecture-360x360.jpg"
            title="Faculty of Art, Design And Architecture"
            text="Industry-relevant and competitive professional programmes" />
             <Facluty 
            image="https://www.uj.ac.za/wp-content/uploads/2021/08/faculty-of-education-1-360x360.jpg"
            title="Faculty of Education"
            text="Education has the power to transform human lives" />
             <Facluty 
            image="https://www.uj.ac.za/wp-content/uploads/2021/08/faculty-of-engineering-the-built-environment-360x360.jpg"
            title="Faculty of Engineering & the Built Environment"
            text="First in South Africa offering a full range of professional engineering qualifications" />
             </div>
             <div className="row"><Facluty 
            image="https://www.uj.ac.za/wp-content/uploads/2021/08/faculty-of-health-sciences-360x360.jpg"
            title="Faculty of Health Sciences"
            text="A preferred learner experience and innovative methods" />
             <Facluty 
            image="https://www.uj.ac.za/wp-content/uploads/2021/08/faculty-of-humanities-360x360.jpg"
            title="Faculty of Humanities"
            text="To the benefit of individuals, the University and the community we serve" />
             <Facluty 
            image="https://www.uj.ac.za/wp-content/uploads/2021/08/faculty-of-law-1-360x360.jpg"
            title="Faculty of Law"
            text="Traditional, specialised and short course Law programmes" />
             <Facluty 
            image="https://www.uj.ac.za/wp-content/uploads/2021/09/picture1-360x360.jpg"
            title="Faculty of Science"
            text="Innovatively creating new knowledge and leading scientists" />
           </div> 
           <div className="row"> <Facluty 
            image="https://www.uj.ac.za/wp-content/uploads/2021/10/johannesburg-business-school-1-360x360.jpg"
            title="Business School"
            text="The Business of Reimagining Your Future." /></div>
        </div>
    )
}
export default Faculties;