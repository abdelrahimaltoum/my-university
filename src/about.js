import { Button } from "@material-ui/core";
import React from "react";
import "./about.css";


function About () {
    return(
        <div className="about">
            <div className="about-text">
                <p>
                Vibrant, multicultural and dynamic, the University of Johannesburg (UJ) shares the pace and energy of cosmopolitan Johannesburg, the city whose name it carries. Proudly South African, the university is alive down to its African roots, and well-prepared for its role in actualising the potential that higher education holds for the continent’s development. UJ has transformed into a diverse, inclusive, transformational and collegial institution, with a student population of over 50 000, of which more than 3000 are international students from 80 countries. This makes UJ one of the largest contact universities in South Africa (SA) from the 26 public universities that make up the higher education system.

The vision of the UJ is to be “an international University of choice, anchored in Africa, dynamically shaping the future”. The mission can be described as follows: “inspiring its community to transform and serve humanity through innovation and the collaborative pursuit of knowledge”. These are underpinned by four values, namely: imagination, conversation, regeneration and ethical foundation. The six strategic objectives provide a focused means for realising the Vision, Mission and Values of the University as set out above. They further represent a re-working of the original UJ Strategic Thrusts 2020 in the context of a wider positioning of the University as “The Pan-African” Centre for Critical Intellectual Inquiry, with the primary goal of achieving global excellence and stature.

The six strategic objectives are:
Excellence in Research and Innovation
Excellence in Teaching and Learning
An International Profile for Global Excellence and Stature (GES)
An Enriching Student-Friendly Learning and Living Experience
National and Global Reputation Management
Fitness for Global Excellence and Stature (GES)
Recognised as the country’s second strongest brand, UJ offers world-class, internationally recognised academic programmes based on curricula informed by cutting-edge developments in both undergraduate and postgraduate education, and that are designed to prepare students for the world of work and for global citizenship. Our curriculum is increasingly reflective of previously marginalised scholarship that talks to a transformation and decolonisation agenda, with Africa at its core.
                </p>
                <img src="https://www.uj.ac.za/wp-content/uploads/2021/09/about-uj-1536x1081.png"/>
            <p>
            The University has 7 faculties and a college viz., Education, Law, Humanities, Art, Design and Architecture, Health Sciences, Science, Engineering and the Built Environment as well as the College of Business and Economics, housing the newly established Johannesburg Business School. The University has four campuses, namely the Auckland Park Bunting Road Campus; the Auckland Park Kingsway Campus; the Doornfontein Campus; and the Soweto Campus.
            </p>
            </div>
            <div className="about-items">
                <Button variant="outlined"> Campuses</Button>
                <Button variant="outlined">Executive Leadership Group & Invitees</Button>
                <Button variant="outlined">Internationalisation</Button>
                <Button variant="outlined">Transformation Unit</Button>
                <Button variant="outlined">Governance</Button>
                <Button variant="outlined">Vision, Mission and Values</Button>
                <Button variant="outlined">Ethics</Button>
                <Button variant="outlined">Registrar’s Portfolio</Button>
                <Button variant="outlined">Publications</Button>
                <Button variant="outlined">Strategic Plan</Button>
                <Button variant="outlined">Student Regulations</Button>
                <Button variant="outlined">​​​UJ Career S​ervices​</Button>
                <Button variant="outlined">UJ Key Statistics</Button>
                <Button variant="outlined">UJ Graphics Studio</Button>
                <Button variant="outlined">Executive Events Management</Button>
                <Button variant="outlined">Office of the General Counsel (OGC)</Button>
            </div>
        </div>
    )
}
export default About;