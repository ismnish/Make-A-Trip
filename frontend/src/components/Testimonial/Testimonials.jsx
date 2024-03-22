import React from "react";
import Slider from "react-slick";
import ava01 from "../../assets/images/ava-1.jpg";
import ava02 from "../../assets/images/ava-2.jpg";
import ava03 from "../../assets/images/ava-3.jpg";
const Testimonials = () => {
  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    speed: 500,
    swipeToSlide: true,
    autoplaySpeed: 3000,
    slidesToShow: 3,
    slidesToScroll: 1,

    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToScroll: 1,
          slidesToShow: 1,
        },
      },
    ],
  };
  return (
    <Slider {...settings}>
      <div className="testimonial py-4 px-3">
        <p>
          A treasure trove of culture! 🕌 This app helped me discover the rich
          heritage of India. The historical sites and local experiences are a
          must-see.
        </p>
        <div className="d-flex align-items-center gap-4 mt-3">
          <img src={ava01} className="w-25 h-25 rounded-2 " alt="" />
          <div>
            <h5 className="mb-0 mt-3">Manish Singh</h5>
          </div>
        </div>
      </div>

      <div className="testimonial py-4 px-3">
        <p>
          Absolutely stunning! 🌟 This app guided me to the most picturesque
          spots in India, and I'm left in awe of its beauty. Can't wait to
          explore more!
        </p>
        <div className="d-flex align-items-center gap-4 mt-3">
          <img src={ava02} className="w-25 h-25 rounded-2 " alt="" />
          <div>
            <h5 className="mb-0 mt-3">Lia Franks</h5>
          </div>
        </div>
      </div>

      <div className="testimonial py-4 px-3">
        <p>
          Incredible India! 🇮🇳 This app made my trip planning a breeze. From the
          majestic Taj Mahal to serene beaches, it's got it all. Highly
          recommended!
        </p>
        <div className="d-flex align-items-center gap-4 mt-3">
          <img src={ava03} className="w-25 h-25 rounded-2 " alt="" />
          <div>
            <h5 className="mb-0 mt-3">Saurabh</h5>
          </div>
        </div>
      </div>

      <div className="testimonial py-4 px-3">
        <p>
          Foodie's paradise! 🍛 Found amazing street food gems through this app.
          Exploring the diverse culinary landscape of India has been a
          mouthwatering adventure.
        </p>
        <div className="d-flex align-items-center gap-4 mt-3">
          <img src={ava03} className="w-25 h-25 rounded-2 " alt="" />
          <div>
            <h5 className="mb-0 mt-3">Ganesh</h5>
          </div>
        </div>
      </div>

      <div className="testimonial py-4 px-3">
        <p>
          Seamless adventure planning! 🌄 Thanks to this app, I explored hidden
          gems in India, and the travel tips were a lifesaver. My best trip yet!
        </p>
        <div className="d-flex align-items-center gap-4 mt-3">
          <img src={ava03} className="w-25 h-25 rounded-2 " alt="" />
          <div>
            <h5 className="mb-0 mt-3">Strenger</h5>
          </div>
        </div>
      </div>
    </Slider>
  );
};

export default Testimonials;
