import React from "react";
import Timeline from "../components./timeline";
import Education from "../components./education";



export default function App(){
    return (
        <div>
            <div className="education_container">
            <Education/>
            </div>
            
            <Timeline/>
        </div>
    )
}