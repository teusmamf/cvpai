import React from "react";
import Timeline from "../components/timeline";
import Navbar from "../components/navbar";
import Education from "../components./education";





export default function History(){
    return (
        <div className="history_container">

           
            <Education/>
            <Timeline/>
        </div>
    )
}