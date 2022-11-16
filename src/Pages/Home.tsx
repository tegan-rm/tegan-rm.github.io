import React from "react";
import "./CSSFiles/HomeCSS.css";
import sunflower from '../Pictures/Sunflower.png';
import lavender from '../Pictures/Lavender.png';

function Home() {
    return (
        <div>
            <head>
                <script src="HomeJS.js"></script>
            </head>
            <div>
                <div  className="text">
                    <h1 className="header" >Hello, I'm Tegan</h1>
                    <h3 className="introduction" >I am currently a 3rd Year Computer Science Student studying at the University of Bristol </h3>
                </div>

                <div className ="flower">
                        <img src={sunflower} className="sunflowerImage" />
                </div>

            </div>
        </div>
    )
}

export default Home;