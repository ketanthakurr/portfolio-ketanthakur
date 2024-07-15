import React from "react";

const scrolldown = () => {
    return(
            <a href="#about" className="mouse_wrap">
        <div className="scroll_down">
            <span className="home_scroll-name">Scroll Down</span>
            <span className="mouse">
                <span className="wheel"></span>
            </span>
        </div>
            </a>
    )
}

export default scrolldown