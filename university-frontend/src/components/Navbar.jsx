import React from "react";

function Navbar() {
    return (
        <nav className="navbar">

            <div className="navbar-logo">
                <div className="logo-circle">
                    UC
                </div>

                <div>
                    <span>STATE</span>
                    <strong>COLLEGE</strong>
                </div>
            </div>

            <div className="navbar-links">

                <a href="#home">Home</a>

                <a href="#about">About Us</a>

                <a href="#scholarship">Scholarship</a>

                <a href="#events">Events</a>

                <a href="#news">News</a>

                <a href="#programs">New Semester</a>

            </div>

            <div className="social-icons">
                <span>f</span>
                <span>𝕏</span>
                <span>◎</span>
                <span>▶</span>
            </div>

        </nav>
    );
}

export default Navbar;