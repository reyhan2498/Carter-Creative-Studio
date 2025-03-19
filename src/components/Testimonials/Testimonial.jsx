import React from "react";
import "./Testimonial.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import { Pagination } from "swiper";
import "swiper/css/pagination";
import profilePic1 from "../../img/profile1.jpg";
import profilePic2 from "../../img/profile2.jpg";
import profilePic3 from "../../img/profile3.jpg";
import profilePic4 from "../../img/profile4.jpg";

const Testimonial = () => {
  const clients = [
    {
      img: profilePic1,
      review:
        "Christopher completely transformed my brand identity! The logo and branding elements he designed captured the essence of my business perfectly. Highly recommended for anyone looking for top-notch design work!",
    },
    {
      img: profilePic2,
      review:
        "I needed custom illustrations for my social media campaign, and Christopher delivered beyond expectations. His attention to detail and creativity made my brand stand out like never before!",
    },
    {
      img: profilePic3,
      review:
        "Working with Christopher was an absolute pleasure. He designed an intuitive and visually stunning UI/UX for my website, and my clients love it. His ability to blend aesthetics with functionality is unmatched!",
    },
    {
      img: profilePic4,
      review:
        "Christopher's work on our advertising materials was fantastic. He created engaging and professional designs that helped us attract more customers. I’ll definitely be working with him again in the future!",
    },
  ];

  return (
    <div className="t-wrapper" id="testimonial">
      <div className="t-heading">
        <span>Clients always receive </span>
        <span>Exceptional Designs </span>
        <span>from me...</span>
      <div className="blur t-blur1" style={{ background: "var(--purple)" }}></div>
      <div className="blur t-blur2" style={{ background: "skyblue" }}></div>

      </div>
      <Swiper
        // install Swiper modules
        modules={[Pagination]}
        slidesPerView={1}
        pagination={{ clickable: true }}
      >
        {clients.map((client, index) => {
          return (
            <SwiperSlide key={index}>
              <div className="testimonial">
                <img src={client.img} alt="" />
                <span>{client.review}</span>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default Testimonial;
