import React from "react";

const Aboutbox = () => {
    return(
        <div className="about_boxes grid">
            <div className="about_box">
                <i class=" about_icon fa-solid fa-code"></i>
                <div>
                    <h3 className="about_title">21</h3>
                    <spam className="about_subtitle">Projects done</spam>
                </div>
            </div>
            <div className="about_box">
                <i class="about_icon fa-solid fa-laptop"></i>
                <div>
                    <h3 className="about_title">1</h3>
                    <spam className="about_subtitle">Internship</spam>
                </div>
            </div>
        </div>
    )
}

export default Aboutbox