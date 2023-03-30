import React from "react";
import { Link } from "react-router-dom";
import "./Landing.css"

const Landing = () => {

    return (
        // <div style={{backgroundColor: "green", width: "100%" , height: "100%", position: "absolute" }}>

        <div className="Landing">
            <Link to="/home"> <button className="Start">START</button> </Link>
            <div className="parrafo"><a className="texto">"Solos somos una gota, juntos somos un océano"</a></div>
            
        </div>

        
    )
}

export default Landing;