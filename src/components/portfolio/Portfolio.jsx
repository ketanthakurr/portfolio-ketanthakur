import React, { useState } from "react";
import "./portfolio.css";
import Menu from "./Menu";

const Portfolio = () => {
    const[ items, setItem] = useState(Menu);
    const filterItem = (categoryItem) => {
        const updatedItems = Menu.filter((curElem) => {
            return curElem.category === categoryItem;
        })

        setItem(updatedItems);
    }
    return(
        <div className="work container section" id="work">
            <h2 className="section_title">
                Projects
            </h2>
            <div className="work_filter">
                <span className="work_item" onClick={() => setItem(Menu) }>All</span>
                <span className="work_item" onClick={() => filterItem ("WebDev")}>Web Development</span>
                <span className="work_item" onClick={() => filterItem ("MobileDev")}>Mobile Development</span>
                <span className="work_item" onClick={() => filterItem ("Hardware")}>Hardware</span>
                {/* <span className="work_item">All</span> */}
            </div>
            <div className="work_container grid">
                {items.map((elem) => {
                    const{id, image, title, category} = elem;
                    return(
                        <div className="work_card" key={id}>
                            <div className="work_thumbnail">
                                <img src={image} alt="" className="work_img" />
                                <div className="work_mask"></div>
                            </div>
                            <span className="work_category">{category}</span>
                            <h3 className="work_title">{title}</h3>
                            <a href="" className="work_button">
                                <i className="icon-link work_button-icon"></i>
                            </a>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default Portfolio