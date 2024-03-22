import React, { useEffect, useState } from "react";
import CommonSection from "../shared/CommonSection";
import "../styles/tour.css";
import TourCard from "../shared/TourCard";
import SearchBar from "../shared/SearchBar";
import NewsLetter from "../shared/NewsLetter";
// import tourData from "../assets/data/tours";
import { Container, Row, Col } from "reactstrap";
import Offer from "../shared/Offer";

import useFetch from "../hooks/useFetch";
import { BASE_URL } from "../utils/config";

function Tours() {
  const [pageCount, setPageCount] = useState(0);
  const [page, setPage] = useState(0);

  const {
    data: tours,
    loading,
    error,
  } = useFetch(`${BASE_URL}/tours?page=${page}`);
  const { data: tourCount } = useFetch(`${BASE_URL}/tours/search/getTourCount`);

  useEffect(
    () => {
      const pages = Math.ceil(tourCount / 6); // later we will be use it as backend data
      setPageCount(pages);
      window.scrollTo(0,0)
    },
    [page, tourCount, tours]
  );
  return (
    <>
      <CommonSection title={"All Tours"} />

      <section>
        <Container>
          <Row>
            <Col lg="6" className="">
              <SearchBar />
            </Col>
            <Col lg="" className="">
              <Offer />
            </Col>
          </Row>
        </Container>
      </section>

      <section className="pt-0">
        <Container>
          {loading && <h4 className="text-center pt-5">Loading........</h4>}
          {loading && <h4 className="text-center pt-5">{error}</h4>}
          {!loading && !error && (
            <Row>
              {tours?.map((tour) => (
                <Col className="mb-4" lg="4" key={tour._id}>
                  <TourCard tour={tour} />
                </Col>
              ))}

              <Col lg="12">
                <div className="pagination d-flex align-items-center justify-content-center mt-4 gap-3">
                  {[...Array(pageCount).keys()].map((number) => (
                    <span
                      className={page === number ? "active__page" : ""}
                      key={number}
                      onClick={() => setPage(number)}
                    >
                      {number + 1}
                    </span>
                  ))}
                </div>
              </Col>
            </Row>
          )}
        </Container>
      </section>
      <NewsLetter />
    </>
  );
}

export default Tours;
