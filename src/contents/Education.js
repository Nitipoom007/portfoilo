import React, { Component } from "react";
import Widecard from "../components/Widecard";

class Education extends Component {
    render() {
        return (
            <div className="condiv">
                <h1 className="subtopic">My Education</h1>
                <Widecard 
                    title="-- High school" 
                    where="Malasawan pittaya school" 
                    form="2014" 
                    to="2017" 
                    GPAX="2.10" 
                    logo="imgs/mala.jpg" 
                />
                <Widecard 
                    title="-- Vocational certificate" 
                    where="Saraburi Technical College" 
                    form="2018" 
                    to="2021" 
                    GPAX="3.18" 
                    logo="imgs/sbt.png" 
                />
                <Widecard 
                    title="-- Advanced Vocational Certificate" 
                    where="Saraburi Technical College" 
                    form="2021" 
                    to="2023" 
                    GPAX="3.39" 
                    logo="imgs/sbt.png" 
                />
                <Widecard 
                    title="-- Bachelor's degree" 
                    where="King Mongkut's University of Technology North Bangkok" 
                    form="2023" 
                    to="Present" 
                    GPAX="3.12" 
                    logo="imgs\KMUTNB.png" 
                />
            </div>
        )
    }
}

export default Education;