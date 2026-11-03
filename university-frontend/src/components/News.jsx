import React from "react";
import news1 from "../assets/news1.jpg"; // Image avec le chat
import news2 from "../assets/news2.jpg"; // Image rassemblement / festival
import news3 from "../assets/news3.jpg"; // Image architecture / campus
import news4 from "../assets/news4.jpg"; // Image de la personne assise

function News() {
    return (
        <section id="news" className="news-section">
            {/* En-tête de section avec le point bleu */}
            <div className="news-heading">
                <div className="news-tag">
                    <span className="blue-dot">●</span> News.
                </div>
                <p className="news-sub">Communication Center | For You Page</p>
            </div>

            {/* Grille de style Bento */}
            <div className="bento-grid">
                
                {/* 1. Grande carte horizontale (Chat) */}
                <div className="bento-item item-large" style={{ backgroundImage: `url(${news1})` }}>
                    <div className="item-overlay">
                        <span className="item-tag">HOT | TODAY</span>
                        <h3>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod.</h3>
                        <button className="pill-button-blue">Read News <span className="arrow">➔</span></button>
                    </div>
                </div>

                {/* 2. Carte verticale (Festival/Rassemblement) */}
                <div className="bento-item item-vertical" style={{ backgroundImage: `url(${news2})` }}>
                    <div className="item-overlay">
                        <span className="item-tag">HOT | TODAY</span>
                        <h3>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed</h3>
                        <button className="pill-button-blue">Read News <span className="arrow">➔</span></button>
                    </div>
                </div>

                {/* 3. Petit widget Calendrier */}
                <div className="bento-item item-calendar">
                    <div className="calendar-header">
                        <h4>Plan's Streaming</h4>
                        <p>August 2026</p>
                    </div>
                    <div className="calendar-days-grid">
                        {/* Jours abrégés */}
                        <span className="day-name">S</span><span className="day-name">M</span><span className="day-name">T</span><span className="day-name">W</span><span className="day-name">T</span><span className="day-name">F</span><span className="day-name">S</span>
                        {/* Exemple de jours du mois */}
                        {Array.from({ length: 28 }, (_, i) => (
                            <span key={i} className="day-number">{i + 1}</span>
                        ))}
                    </div>
                </div>

                {/* 4. Carte carrée gauche (Campus) */}
                <div className="bento-item item-square" style={{ backgroundImage: `url(${news3})` }}>
                    <div className="item-overlay">
                        <span className="item-tag">HOT | TODAY</span>
                        <h3>Lorem ipsum dolor sit amet, consectetuer adipiscing elit.</h3>
                        <button className="pill-button-blue">Read News <span className="arrow">➔</span></button>
                    </div>
                </div>

                {/* 5. Carte carrée centrale (Personne assise) */}
                <div className="bento-item item-square" style={{ backgroundImage: `url(${news4})` }}>
                    <div className="item-overlay">
                        <span className="item-tag">HOT | TODAY</span>
                        <h3>Shownu's So Hot | What Do We Do For This?</h3>
                        <button className="pill-button-blue">Read News <span className="arrow">➔</span></button>
                    </div>
                </div>

                {/* 6. Carte pleine bleue (Join Now) */}
                <div className="bento-item item-blue-action">
                    <div className="blue-action-content">
                        <span className="action-tag">NEWS | AUGUST 2026</span>
                        <h2>JOIN NOW! | Welcoming new members</h2>
                    </div>
                    <button className="pill-button-white">Registration <span className="arrow">➔</span></button>
                </div>

            </div>
        </section>
    );
}

export default News;
