import React from "react";
import "../styles/home.css";

import { Container, Row, Col } from "reactstrap";
import Slider from "react-slick";
import heroImg1 from "../assets/images/hero-01.jpg";
import heroImg2 from "../assets/images/hero-02.jpg";
import heroVideo from "../assets/images/hero-video.mp4";
import Subtitle from "../shared/Subtitle";
import indiaImg from "../assets/images/india.png";
import experienceImg from "../assets/images/experience.png";

import SearchBar from "../shared/SearchBar";
import ServiceList from "../services/ServiceList";
import FeaturedTourList from "../components/Featured-tours/FeaturedTourList";
import MasonryImagesGallery from "../components/Image-gallery/MasonryImagesGallery";
import Testimonials from "../components/Testimonial/Testimonials";
import NewsLetter from "../shared/NewsLetter";

function Home() {
  // Configure settings for the slider
  const sliderSettings = {
    dots: true, // Display navigation dots
    infinite: true, // Infinite looping
    speed: 500, // Transition speed in milliseconds
    swipeToSlide: true,
    slidesToShow: 1, // Number of slides to show at once (initial setting)
    slidesToScroll: 1, // Number of slides to scroll at a time
  };


  return (
    <>
      <section>
        <Container>
          <Row className="justify-content-center align-items-center">
            <Col lg="12">
              <Slider {...sliderSettings}>
                <div className="hero__img-box">
                  <img src={heroImg1} alt="Hero Image 1" />
                </div>
                <div className="hero__img-box">
                  <video src={heroVideo} alt="Hero Video" controls />
                </div>
                <div className="hero__img-box">
                  <img src={heroImg2} alt="Hero Image 2" />
                </div>
              </Slider>
            </Col>
          </Row>
        </Container>
      </section>
      <section>
        <Container>
          <Row>
              <Col lg="6" className="">
                <div className="hero__content">
                  <div className="hero__subtitle d-flex align-items-center">
                    <Subtitle
                      subtitle={"Adventure Awaits, Embrace Every Moment."}
                    />
                    <img src={indiaImg} alt="India-Img" />
                  </div>
                  <h1>
                    Crafting life's unforgettable.
                    <span className="highlight">memories</span>, one adventure
                    at a time.
                  </h1>
                  <p>
                    Every journey in India is a chapter in the incredible story
                    of a land steeped in history and culture.
                  </p>
                </div>
              </Col>
              <Col lg="6" className="">
                <SearchBar />
              </Col>
          </Row>
        </Container>
      </section>
      {/* ============= Hero section start =========== */}
      <section>
        <Container>
          <Row>
            <Col lg="3">
              <h5 className="services__subtitle">What we serve</h5>
              <h2 className="services__title">We offers our best services</h2>
            </Col>
            <ServiceList />
          </Row>
        </Container>
      </section>
      {/* ============= Hero section end =========== */}

      {/* ============= Feature tour section start =========== */}

      <section>
        <Container>
          <Row>
            <Col lg="12" className="mb-5">
              <Subtitle subtitle={"Explore"} />
              <h2 className="featured__tour-title">Our featured trips</h2>
            </Col>
            <FeaturedTourList />
          </Row>
        </Container>
      </section>
      {/* ============= Feature tour section end =========== */}

      {/* ============= experience section start =========== */}
      <section>
        <Container>
          <Row>
            <Col lg="6">
              <div className="experience__content">
                <Subtitle subtitle={"Experience"} />
                <h2>
                  With our all experience <br /> we will serve you
                </h2>
                <p>
                  lorem our gah egigaelhghe ghefah lgeher unde
                  <br />
                  queisgj iegha giehg, hic tempra , inventore suscripitunde.
                </p>
              </div>
              <div className="counter__wrapper d-flex align-items-center gap-5">
                <div className="counter__box">
                  <span>12k+</span>
                  <h6>Successful Trip</h6>
                </div>
                <div className="counter__box">
                  <span>2k+</span>
                  <h6>Regular clients</h6>
                </div>
                <div className="counter__box">
                  <span>10</span>
                  <h6>Years experience</h6>
                </div>
              </div>
            </Col>
            <Col lg="6">
              <div className="experience__img">
                <img src={experienceImg} alt="" />
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      {/* ============= experience section end =========== */}

      {/* ============= gallery section start =========== */}
      <section>
        <Container>
          <Row>
            <Col lg="12">
              <Subtitle subtitle={"Gallery"} />
              <h2 className="gallery__title">
                Visit our customers trip gallery
              </h2>
            </Col>
            <Col lg="12">
              <MasonryImagesGallery />
            </Col>
          </Row>
        </Container>
      </section>
      {/* ============= gallery section end =========== */}

      {/* ============= testimonial section start =========== */}
      <section id="gallery">
        <Container>
          <Row>
            <Col lg="12">
              <Subtitle subtitle={"Fans Love"} />
              <h2 className="testimonial__title">What our fans say about us</h2>
            </Col>
            <Col lg="12">
              <Testimonials />
            </Col>
          </Row>
        </Container>
      </section>
      {/* ============= testimonial section end =========== */}

      <NewsLetter />
    </>
  );
}

export default Home;
