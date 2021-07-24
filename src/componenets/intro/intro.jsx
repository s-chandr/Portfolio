
import "./intro.scss";
import { init } from "ityped";
import { useEffect, useRef } from "react";

export default function Intro() {
  const textRef = useRef();

  useEffect(() => {
    init(textRef.current, {
      showCursor: true,
      backDelay: 1500,
      backSpeed:60,
      strings: ["Website", "Portfolio Website"],
    });
  }, []);

    
    return (
        <div className="introduction" id="intro">
            
                <div className="left">      
                    <div className="imgContainer">
                    <img src="assests/Sayan1.png" alt="no image"/>
                    </div>
                </div>
                <dic className="right">
                    < div className="wrapper">
                        <h2>Hi there, I'm</h2>
                        <h1>Sayan Chandra</h1>    
                        <h3>Welcome to my <span ref={textRef}></span></h3>
                        <a href="#projects">
                            <img src="assests/down.png" alt="Click to go down"/>
                        </a>
                    </div>
                    
                </dic>
            
        </div>
    )
}
