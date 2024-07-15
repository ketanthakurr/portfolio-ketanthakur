import React from "react";
import "./home.css";
import Me from "../../assets/pfp.jpg";
import HeaderSocials from "./HeaderSocials";
import Scrolldown from "./Scrolldown";
import Shapes from "./Shapes";

const Home = () => {
    return(
        <section className="home container" id="home">
            <div className="intro">
                <img src={Me} alt="" className="home_img" />
                <h1 className="home_name">Ketan Thakur</h1>
                <span className="home_education">I'm a software developer</span>

                <HeaderSocials />

                <a href="#contact" className="btn">Contact me</a>

                <Scrolldown />
                    
            </div>
            <Shapes />
        </section>
    )
}

export default Home