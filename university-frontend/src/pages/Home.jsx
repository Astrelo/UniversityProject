import React from "react";

import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import QuickLinks from "../components/QuickLinks";
import About from "../components/About";
import News from "../components/News";
import Footer from "../components/Footer";

function Home() {

    return (
        <>
            <Navbar />

            <main>

                <Hero />

                <QuickLinks />

                <About />

                <News />

            </main>

            <Footer />
        </>
    );
}

export default Home;