import React from "react";

function QuickLinks() {

    const cards = [
        {
            icon: "🎓",
            title: "SCHOLARSHIP",
            text: "Discover scholarship opportunities available for our students."
        },
        {
            icon: "🏛",
            title: "OUR CAMPUS",
            text: "Explore our campus, facilities and student environment."
        },
        {
            icon: "⚑",
            title: "PROGRAMS",
            text: "Discover our academic programs and areas of study."
        }
    ];

    return (
        <section className="quick-links">

            {cards.map((card, index) => (

                <div className="quick-card" key={index}>

                    <div className="quick-icon">
                        {card.icon}
                    </div>

                    <div>
                        <h3>{card.title}</h3>

                        <p>
                            {card.text}
                        </p>
                    </div>

                </div>

            ))}

        </section>
    );
}

export default QuickLinks;