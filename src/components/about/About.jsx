import React from "react";
import "./about.css";
import Image from "../../assets/pfp2.jpg";
import Aboutbox from "./Aboutbox";
import Resume from "../../assets/KetanThakur_RESUME.pdf"

const About = () => {
    return (
        <section className="about container section" id="about">
            <h2 className="section_title">About me</h2>
            <div className="about_container grid">
                <img src={Image} alt="" className="about_img"/>
                <div className="about_data grid">
                    <div className="about_info">
                        <p className="about_description">
                            Hi, my name is ketan thakur. I am pursuing my bachelors in Computer Science Engineering. I am very passionate about photography and enthusiastic to learn new things and undertake new challenges.
                        </p>
                        <a href={Resume} className="btn">
                            Download CV
                        </a>
                    </div>
                    <div className="about_skills grid">
                        <div className="skills_data">   
                            <div className="skills_titles">
                                <h3 className="skills_name">Web Development</h3>
                                <span className="skills_number">85%</span>
                            </div>
                            <div className="skills_bar">
                                <span className="skills_percentage development"></span>
                            </div>
                        </div>
                        <div className="skills_data">
                            <div className="skills_titles">
                                <h3 className="skills_name">DSA</h3>
                                <span className="skills_number">70%</span>
                            </div>
                            <div className="skills_bar">
                                <span className="skills_percentage dsa"></span>
                            </div>
                        </div>
                        <div className="skills_data">
                            <div className="skills_titles">
                                <h3 className="skills_name">Problem solving</h3>
                                <span className="skills_number">80%</span>
                            </div>
                            <div className="skills_bar">
                                <span className="skills_percentage problem"></span>
                            </div>
                        </div>
                        <div className="skills_data">
                            <div className="skills_titles">
                                <h3 className="skills_name">Photography</h3>
                                <span className="skills_number">90%</span>
                            </div>
                            <div className="skills_bar">
                                <span className="skills_percentage photo"></span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Aboutbox />
        </section>
    );
}

export default About;
