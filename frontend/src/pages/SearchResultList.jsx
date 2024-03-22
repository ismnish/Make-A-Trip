import React, { useState } from "react";
import { Container, Row, Col } from "reactstrap";
import CommonSection from "./../shared/CommonSection.jsx";

import { useLocation } from "react-router-dom";
import TourCard from "../shared/TourCard.jsx";
import NewsLetter from "../shared/NewsLetter.jsx";
function SearchResultList() {
  const location = useLocation();
  const [data] = useState(location.state);

  return (
    <>
      <CommonSection title={"Tour Search Result"} />
      <section>
        <Container>
          <Row>
            {data.length === 0 ? (
              <h4 className="d-flex align-items-center justify-content-center">No tour found</h4>
            ) : (
              data?.map((tour) => (
                <Col lg="4" className="mb-4" key={tour._id}>
                  <TourCard tour={tour} />
                </Col>
              ))
            )}
          </Row>
        </Container>
        <NewsLetter />
      </section>
    </>
  );
}

export default SearchResultList;
