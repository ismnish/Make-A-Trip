import React, { useRef } from "react";
import "./search-bar.css";
import { Col, Form, FormGroup } from "reactstrap";
import {toast} from 'react-hot-toast'

import { BASE_URL } from "../utils/config";
import { useNavigate } from "react-router-dom";

const SearchBar = () => {
  const locationRef = useRef("");
  const distanceRef = useRef(0);
  const maxGroupsSizeRef = useRef(0);
  const navigate = useNavigate();
  const searchHandler = async() => {
    const location = locationRef.current.value;
    const distance = distanceRef.current.value;
    const maxGroupSize = maxGroupsSizeRef.current.value;
    if (!location  || !distance|| !maxGroupSize) {
    
      return toast.error("Please fill all the details. ")
    }
    if(maxGroupSize >20){
      return toast.error("Sorry, we cannot serve more than 20 people.")
    }

    const res = await fetch(`${BASE_URL}/tours/search/getTourBySearch?city=${location}&distance=${distance}&maxGroupSize=${maxGroupSize}`);
    
    if(!res.ok){
      return toast.error("Something went wrong")
    } 

    const result = await res.json();

    navigate(`/tours/search?city=${location}&distance=${distance}&maxGroupSize=${maxGroupSize}`, {state:result.data})

  };

  return (
    <Col lg="12">
      <div className="search__bar ">
        <Form className=" align-items-center gap-4">
          <div className="search__container ">
            <div className=" mx-2 ">
              <FormGroup className="form__group">
                <div className="d-flex f-col mx-2 ">
                  <i className="ri-map-pin-line"></i>
                  <h6 className="mx-2">Location</h6>
                </div>
                <div>
                  <input
                    type="text"

                    placeholder="Where are you going?"
                    ref={locationRef}
                  />
                </div>
              </FormGroup>
            </div>
            <div className="">
              <FormGroup className="form__group mx-2">
                <div className="d-flex f-col mx-2">
                  <i className="ri-map-pin-time-line"></i>
                  <h6>Distance</h6>
                </div>

                <div>
                  <input
                    type="number"
                    min={0}
                    placeholder="Distance k/m"
                    ref={distanceRef}
                  />
                </div>
              </FormGroup>
            </div>

            <div className="mx-2 ">
              <FormGroup className="form__group form__group-last">
                <div className="d-flex f-col mx-2">
                  <i className="ri-group-line"></i>
                  <h6 className="mx-2 ">Max_People</h6>
                </div>
                <div className="align-items-center d-flex">
                  <div>
                    <input
                      type="number"
                      min={0}
                      placeholder="0"
                      ref={maxGroupsSizeRef}
                    />
                  </div>
                  <div
                    type="submit"
                    className="search__icon "
                    onClick={searchHandler}
                  >
                    <i className="ri-search-line"></i>
                  </div>
                </div>
              </FormGroup>
            </div>
          </div>
        </Form>
      </div>
    </Col>
  );
};

export default SearchBar;
