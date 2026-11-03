import React from "react";
import campus from "../assets/campus.jpg";

function Hero() {

    return (
        <section
            id="home"
            className="hero"
            style={{
                backgroundImage: `url(${campus})`
            }}
        >

            <div className="hero-overlay"></div>

            <div className="hero-content">

                <div className="university-logo">
                    <div className="logo-laurel">
                        ✦
                    </div>

                    <span>STATE COLLEGE</span>
                </div>

                <h1>Duke University</h1>

                <p>THE CHARACTER OF SUCCESS</p>

            </div>

        </section>
    );
}

export default Hero;