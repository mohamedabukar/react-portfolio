import React from "react";
import "./style.css";
import ProfileImage from "../ProfileImage";


export default function BioPage() {
    return (
        <>
            <div className="bio-container row">
                <div className="bio-section col-4">
                    <h2>About Me</h2>
                    <p>My name is Mohamed Abukar and I am a 20 year old Full Stack Web Developer from Apple Valley, MN.</p>
                </div>
                <div className="bio-section col-4">
                    <ProfileImage />
                </div>
                <div className="bio-section col-4">
                    <h3>Education</h3>
                    <p>I enrolled in the Full Stack Web Developement bootcamp that the Unviversity of Minnesota was offering. In this bootcamp we learned important skills such as creating applications containing jquery, javascript, react, css and html. It was a 12 week intensive course which was 20 hours a week of class time.</p>
                </div>
            </div>
        </>
    )
}