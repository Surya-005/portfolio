import React from "react";
import "./home.css"

export default function Home() {
    return (
        <div>
            <div className='landing'>
                <div className="greetings">
                    <h1>hi buddy</h1>
                    <h1>welcome</h1>
                    <div>
                        <button>explore</button>
                    </div>
                </div>
                <div className="intro_photo">
                    <div>photo</div>
                    <h1>surya</h1>
                    <h1>front end developer</h1>
                </div>
            </div>
            <div>
                <div>about</div>
                <div>contact</div>
                <div>projects</div>

            </div>
        </div>
    )

}