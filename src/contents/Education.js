import React,{Component} from "react";
import Widecard from "../components/Widecard";

class Education extends Component {
    render() {
        return(
            <div className="condiv">  
                <h1 className="subtopic">My Education</h1>
                <Widecard title="-- High school" Where = "Malasawan pittaya school" form="2014" to="2017" GPAX="2.10"/>
                <Widecard title="-- Vocational certificate" Where = "Saraburi Technical College" form="2018" to="2021" GPAX="3.18"/>
                <Widecard title="-- Advanced Vocational Certificate" Where = "Saraburi Technical College" form="2021" to="2023" GPAX="3.39"/>
            </div>
        )
    }
}

export default Education;