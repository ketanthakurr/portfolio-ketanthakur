// import React from "react";
// import "./about.css";
// import Image from "../../assets/avatar-2.svg";

// const About = () => {
//     return(
//         <section className="about container section" id="about">

//             <h2 className="section_title">About me</h2>

//             <div className="about_container grid">

//                 <img src={Image} alt="" className="about_img"/>

//                 <div className="about_data grid">
//                     <div className="about_info">
//                         <p className="about_description">
//                             Hi, my name is ketan thakur. I am pursuing my bachlors in Computer Science Engineering, i am very passionate about photography and enthusiastic to learn new things and undertake new challenges.
//                             <a href="" className="btn">Download CV</a>
//                         </p>
//                     </div>

//                     <div className="about_skills grid">
//                         <div className="skills_data">
//                             <div className="skills_titles">
//                                 <h3 className="skills_name">Web Development</h3>
//                                 <span className="skills_number">80%</span>
//                             </div>
//                             <div className="skills_bar">
//                                 <span className="skills_percentage">
                                    
//                                 </span>
//                             </div>
//                         </div>
//                     </div>
                    
//                     <div className="about_skills grid">
//                         <div className="skills_data">
//                             <div className="skills_titles">
//                                 <h3 className="skills_name">DSA</h3>
//                                 <span className="skills_number">40%</span>
//                             </div>
//                             <div className="skills_bar">
//                                 <span className="skills_percentage">
                                    
//                                 </span>
//                             </div>
//                         </div>
//                     </div>

//                     <div className="about_skills grid">
//                         <div className="skills_data">
//                             <div className="skills_titles">
//                                 <h3 className="skills_name">Photography</h3>
//                                 <span className="skills_number">90%</span>
//                             </div>
//                             <div className="skills_bar">
//                                 <span className="skills_percentage">
                                    
//                                 </span>
//                             </div>
//                         </div>
//                     </div>

//                 </div>
//             </div>
//         </section>
//     )
// }

// export default About

import React from "react";
import "./about.css";
import Image from "../../assets/avatar-2.svg";

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
                            <a href="" className="btn">Download CV</a>
                        </p>
                    </div>
                    <div className="about_skills grid">
                        <div className="skills_data">
                            <div className="skills_titles">
                                <h3 className="skills_name">Web Development</h3>
                                <span className="skills_number">80%</span>
                            </div>
                            <div className="skills_bar">
                                <span className="skills_percentage"></span>
                            </div>
                        </div>
                        <div className="skills_data">
                            <div className="skills_titles">
                                <h3 className="skills_name">DSA</h3>
                                <span className="skills_number">40%</span>
                            </div>
                            <div className="skills_bar">
                                <span className="skills_percentage"></span>
                            </div>
                        </div>
                        <div className="skills_data">
                            <div className="skills_titles">
                                <h3 className="skills_name">Photography</h3>
                                <span className="skills_number">90%</span>
                            </div>
                            <div className="skills_bar">
                                <span className="skills_percentage"></span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default About;
