import React, { useEffect, useRef, useState, useContext } from "react";
import "../styles/tour-details.css";
import { Container, Row, Col, Form, ListGroup } from "reactstrap";
import { useParams } from "react-router-dom";
// import tourData from "../assets/data/tours";
import calculateAvgRating from "../utils/avgRating";
import avatar from "../assets/images/avatar.jpg";
import Booking from "../components/Booking/Booking";
import NewsLetter from "../shared/NewsLetter";
import { TbCoinRupee } from "react-icons/tb";
import { FaRegStar } from "react-icons/fa";
import { AiTwotoneStar, AiOutlineUsergroupAdd } from "react-icons/ai";
import { GrLocation } from "react-icons/gr";
import { BASE_URL } from "../utils/config";
import useFetch from "../hooks/useFetch";

import { AuthContext } from "../context/AuthContext";
import toast from "react-hot-toast";
function TourDetails() {
  const { id } = useParams();
  const reviewMsgRef = useRef("");
  const [tourRating, setTourRating] = useState(null);

  const { user } = useContext(AuthContext);
  //fetch data from database
  const { data: tour, loading, error } = useFetch(`${BASE_URL}/tours/${id}`);

  // const tour = tourData.find((tour) => tour.id === id);
  const {
    photo,
    title,
    desc,
    price,
    reviews,
    city,
    address,
    maxGroupSize,
    distance,
  } = tour;
  const { totalRating, avgRating } = calculateAvgRating(reviews);

  //formate date
  const options = { day: "numeric", month: "long", year: "numeric" };

  //submit requrest to the server
  const submitHandler = async (e) => {
    e.preventDefault();
    const reviewText = reviewMsgRef.current.value;

    try {
      if (!user || user === undefined || user === null) {
        return toast.error("Please sign in");
      }
      if (!tourRating) {
        return toast.error("please rate the tour before submitting!");
      }
      const reviewObj = {
        username: user?.username,
        rating: tourRating,
        reviewText,
      };
      
      const res = await fetch(`${BASE_URL}/review/${id}`, {
        method: "post",
        headers: {
          "content-type": "application/json",
        },
        credentials: "include",
        body: JSON.stringify(reviewObj),
      });

      const result = await res.json();
      if (!res.ok) {
        return toast.error(result.message);
      }
      toast.success("Thanks for reviewing");
      window.location.reload();
      reviewMsgRef.current.value = "";
    } catch (err) {
      toast.error(err.message);
    }
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [tour]);
  return (
    <>
      <section>
        <Container>
          {loading && <h4 className="text-center pt-5">loading.......</h4>}
          {error && <h4 className="text-center pt-5">{error}</h4>}
          {!loading && !error && (
            <Row>
              <Col lg="8">
                <div className="tour__content">
                  <img  src={photo} alt="" />
                  <div className="tour__info">
                    <h2>{title}</h2>
                    <div className="d-flex align-items-center gap-5">
                      <span className="tour__rating d-flex align-items-center gap-1">
                        <i
                          className="ri-star-fill"
                          style={{ color: "var(--secondary-color" }}
                        ></i>
                        {avgRating === 0 ? null : avgRating}
                        {totalRating === 0 ? (
                          "Not rated"
                        ) : (
                          <span>({reviews?.length})</span>
                        )}
                      </span>

                      <span>
                        <i className="ri-map-pin-user-fill"></i> {address}
                      </span>
                    </div>

                    <div className="tour__extra-details">
                      <span>
                        <GrLocation />
                        {city}
                      </span>
                      <span>
                        <TbCoinRupee /> &#8377; {price} /per person
                      </span>
                      <span>
                        <i className="ri-map-pin-time-line"></i>
                        {distance} k/m
                      </span>
                      <span>
                        <AiOutlineUsergroupAdd />
                        {maxGroupSize} person
                      </span>
                    </div>
                    <h5>Description</h5>
                    <p>{desc}</p>
                  </div>

                  {/* =========== tour reviews section start ============ */}
                  <div className="tour__reviews mt-4">
                    <h4>Reviews ({reviews?.length} reviews)</h4>

                    <Form onSubmit={submitHandler}>
                      {/* <div className="d-flex align-items-center gap-3 mb-4 rating__group">
                        <span onClick={() => setTourRating(1)}>
                          1 <AiTwotoneStar />
                          <FaRegStar />
                        </span>
                        <span onClick={() => setTourRating(2)}>
                          2 <AiTwotoneStar />
                        </span>
                        <span onClick={() => setTourRating(3)}>
                          3 <AiTwotoneStar />
                        </span>
                        <span onClick={() => setTourRating(4)}>
                          4 <AiTwotoneStar />
                        </span>
                        <span onClick={() => setTourRating(5)}>
                          5 <AiTwotoneStar />
                        </span>
                      </div> */}
                      <div className="d-flex align-items-center gap-3 mb-4 rating__group">
                        {[1, 2, 3, 4, 5].map((star) => (
                          <span key={star} onClick={() => setTourRating(star)}>
                            {star <= tourRating ? (
                              
                              <AiTwotoneStar />
                            ) : (
                              <FaRegStar />
                            )}
                            {star}
                          </span>
                        ))}
                      </div>
                      <div className="review__input">
                        <input
                          type="text"
                          required
                          ref={reviewMsgRef}
                          placeholder="Share your thoughts!"
                        />
                        <button
                          className="brn primary__btn text-white"
                          type="submit"
                        >
                          Submit
                        </button>
                      </div>
                    </Form>

                    <ListGroup className="user__reviews">
                      {reviews &&
                        [...reviews].reverse().map((review, index) => (
                          <div key={index} className="review__item">
                            <img src={avatar} alt="" />

                            <div className="w-100">
                              <div className="d-flex align-items-center justify-content-between">
                                <div>
                                  <h5>{review.username}</h5>
                                  <p>
                                    {new Date(
                                      review.createdAt
                                    ).toLocaleDateString("en-US", options)}
                                  </p>
                                </div>
                                <span className="d-flex align-items-center">
                                  {review.rating}
                                  <i className="ri-star-s-fill"></i>
                                </span>
                              </div>
                              <h6>{review.reviewText}</h6>
                            </div>
                          </div>
                        ))}
                    </ListGroup>
                  </div>
                  {/* =========== tour reviews section end ============ */}
                </div>
              </Col>

              <Col lg="4">
                <Booking tour={tour} avgRating={avgRating} />
              </Col>
            </Row>
          )}
        </Container>
      </section>

      <NewsLetter />
    </>
  );
}

export default TourDetails;
