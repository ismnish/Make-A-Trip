import React, { useState } from "react";
import "./newslatter.css";

import { Container, Row, Col } from "reactstrap";
import maleTourist from "../assets/images/male-tourist.png";
import toast from "react-hot-toast";

import { BASE_URL } from "../utils/config";
const NewsLetter = () => {
  let verifyEmail =/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/; // for validation email address
  const [subscriber, setSubscriber] = useState({
    userEmail: undefined,
  });
  const changeHandler = (e) => {
    setSubscriber((prev) => ({ ...prev, [e.target.id]: e.target.value }));
  };
  const submitHandler = async (e) => {
    e.preventDefault();

    try {
      if (!subscriber?.userEmail || !verifyEmail.test(subscriber.userEmail) ) {
        return toast.error("Please enter a valid email!");
      } 
      const res = await fetch(`${BASE_URL}/subscriber`,{
        method:'post',
        headers:{
          'content-type':'application/json'
        },
        body:JSON.stringify(subscriber)
      });

      const result = await res.json();
      if(!res.ok){
        return toast.error(`${result.message}`)
      }
        toast.success("Thankyou for Subscribing!");
      
    } catch (err) {
      toast.error(err.message);
    }
  };
  return (
    <section className="newsletter">
      <Container>
        <Row>
          <Col lg="6">
            <div className="newsletter__content">
              <h2>Subscribe now to get useful travelling information.</h2>
              <div className="newsletter__input">
                <input
                  onChange={changeHandler}
                  id="userEmail"
                  type="email"
                  placeholder="Enter Your Email"
                />
                <button
                  type="submit"
                  className="btn newsletter__btn"
                  onClick={submitHandler}
                >
                  Subscribe
                </button>
              </div>

              <p>
                Embark on your dream journey with us, where adventure awaits at
                every turn. Let's make memories together.
              </p>
            </div>
          </Col>
          <Col lg="6">
            <div className="newsletter__img">
              <img src={maleTourist} alt="" />
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default NewsLetter;
