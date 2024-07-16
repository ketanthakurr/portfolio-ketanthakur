import React from "react";
import "./testimonials.css";
import Image1 from "../../assets/avatar-1.svg";
import Image2 from "../../assets/avatar-2.svg";
import Image3 from "../../assets/avatar-3.svg";
// swiper core module
import { Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

// swiper css
import 'swiper/css';
import 'swiper/css/pagination';


const data = [
    {
      id: 1,
      image: Image1,
      title: "Parth Sharma",
      subtitle: "Founder/CEO, Technodune",
      comment:
        "I enjoyed working with ketan, he did amazing work",
    },
    {
      id: 2,
      image: Image2,
      title: "Vardaan",
      subtitle: "Operation Head, Robotics Club",
      comment:
        "Ketan is a grate president, he managed the whole team and the events as a president 👍",
    },
    {
      id: 3,
      image: Image3,
      title: "Diya Rawal",
      subtitle: "Vice president, Robotics Club",
      comment:
        "Ketan bhaiya is the best president, performed really well as a president, under his mentorship i developed a lot.",
    },
  ];

const Testimonials = () => {
    return(
        <section className="testimonials container section">
          <h2 className="section_title">Testimonials</h2>

          <Swiper className="testimonials_container grid" 
            modules={[Pagination]} 
            spaceBetween={30} 
            slidesPerView={1} 
            loop={true}
            grabCursor={true}
            pagination={{clickable: true}}
          >
            {data.map(({id,image,title,subtitle, comment}) => {
              return (
                <SwiperSlide className="testimonial_item" key={id}>
                  <div className="thumb">
                    <img src={image} alt="" />
                  </div>
                  <h3 className="testimonial_title">{title}</h3>
                  <span className="subtitle">{subtitle}</span>
                  <div className="comment">{comment}</div>
                </SwiperSlide>
              )
            })}
          </Swiper >
        </section>
    )
}

export default Testimonials;