import React from "react";
import student from "../assets/student.jpg"; // Photo de la diplômée

function About() {
    return (
        <section id="about" className="custom-about-section">
            {/* Overlay de fond pour créer l'effet de texture sombre continue */}
            <div className="about-bg-overlay"></div>
            
            <div className="about-container">
                
                {/* Bloc de texte gauche */}
                <div className="about-text-block">
                    <p className="about-mini-sub">BIENVENUE DANS NOTRE COMMUNAUTÉ</p>
                    <h2 className="about-main-title">Université Duke</h2>
                    
                    <div className="about-divider-line"></div>
                    
                    <p className="about-description">
                        Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.
                    </p>
                </div>

                {/* Bloc Image asymétrique bridé en hauteur */}
                <div className="about-image-block">
                    <div className="image-crop-container">
                        <img 
                            src={student} 
                            alt="Diplômée Duke University" 
                            className="about-student-img"
                        />
                    </div>
                </div>

            </div>
        </section>
    );
}

export default About;
