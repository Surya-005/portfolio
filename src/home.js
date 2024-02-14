import React from "react";
import "./home.css"
import Map from "./IMAGES/MAP.png"
import Treasure from "./IMAGES/TREASURE.png"
export default function Home() {
    return (
        <div>
            <div className='landing'>
                <div className="greetings">
                    <h1>hi buddy</h1>
                    <h1>welcome</h1>
                    <div>
                        <button>Explore</button>
                    </div>
                    <img src={Treasure}/>
                </div>
                <div className="intro_photo">
                    <img src={Map}/>
                </div>
            </div>
        </div>
    )

}