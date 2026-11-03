import React from "react";

function Footer() {
    return (
        <footer className="footer">
            
            <div className="footer-logo">
                <div className="logo-circle">UC</div>
                <h3>Duke University</h3>
                <p>The character of success.</p>
            </div>

            <div className="footer-column">
                <h4>CONTACT</h4>
                <p>University Avenue</p>
                <p>Rabat, Morocco</p>
                <p>+212 500 000 000</p>
                <p>contact@university.com</p>
            </div>

            <div className="footer-column">
                <h4>ABOUT US</h4>
                <a href="#about">Our Story</a>
                <a href="#about">Campus Life</a>
                <a href="#scholarship">Scholarships</a>
            </div>

            <div className="footer-column">
                <h4>JOIN US</h4>
                <a href="#home">Admissions</a>
                <a href="#programs">New Semester</a>
            </div>

            {/* Ruban décoratif bleu en bas à droite */}
            <div className="blue-ribbon bottom-ribbon"></div>

        </footer>
    );
}

export default Footer;
