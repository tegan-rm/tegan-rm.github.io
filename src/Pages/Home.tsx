import React from "react";
import "./CSSFiles/HomeCSS.css";
import sunflower from '../Pictures/Sunflower1.png';
import lavender from '../Pictures/Lavender.png';

function Home() {
    return (
        <div>
            <head>
                <script src="HomeJS.js"></script>
            </head>
            <div>
                <div  className="text">
                    <h1>Hi, I'm Tegan</h1>
                    <h3>I am currently a 3rd Year Computer Science Student studying at the University of Bristol </h3>
                </div>

                <div className ="flower">
                    <div id="sliderSunflower1" className="slide-in">
                        <img src={sunflower} alt="logo" width="100" height="100" />
                    </div>
                    <div id="sliderLavender1" className="slide-in">
                        <img src={lavender} alt="logo" width="100" height="100" />
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Home;