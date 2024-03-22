import React from "react";
import "./footer.css";
import { Container, Row, Col, ListGroup, ListGroupItem } from "reactstrap";
import { Link } from "react-router-dom";
import logo from "../../assets/images/logo_black.png";

const quick__links1 = [
  {
    path: "/home",
    display: "Home",
  },
  {
    path: "/about",
    display: "About",
  },
  {
    path: "tours",
    display: "Tours",
  },
];

const quick__links2 = [
  {
    path: "gallery",
    display: "Gallery",
  },
  {
    path: "/login",
    display: "Login",
  },
  {
    path: "register",
    display: "Register",
  },
];

function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <Container>
        <Row>
          <Col lg="3">
            <div className="logo ">
              <img src={logo} alt="" />
              <p>Explore. Dream. Discover. Your Adventure Awaits! </p>
              <div className="social__links d-flex align-center  gap-4">
                <span>
                  <Link to="#">
                    <i className="ri-youtube-line"></i>
                  </Link>
                </span>
                <span>
                  <a
                    target="_blank"
                    href="https://github.com/ismnish"
                    rel="noreferrer"
                  >
                    <i className="ri-github-fill"></i>
                  </a>
                </span>

                <span>
                  <a
                    target="_blank"
                    href="https://www.facebook.com/profile.php?id=100011513537476"
                    rel="noreferrer"
                  >
                    <i className="ri-facebook-circle-line"></i>
                  </a>
                </span>

                <span>
                  <a
                    target="_blank"
                    href="https://www.instagram.com/i_m_manish._/"
                    rel="noreferrer"
                  >
                    <i className="ri-instagram-line"></i>
                  </a>
                </span>
              </div>
            </div>
          </Col>
          <Col lg="3">
            <h5 className="footer__link-title">Discover</h5>
            <ListGroup className="footer__quick-links">
              {quick__links1.map((item, index) => (
                <ListGroupItem key={index} className="ps-0 border-0">
                  <Link to={item.path}>{item.display}</Link>
                </ListGroupItem>
              ))}
            </ListGroup>
          </Col>

          <Col lg="3">
            <h5 className="footer__link-title">Quick Links</h5>
            <ListGroup className="footer__quick-links">
              {quick__links2.map((item, index) => (
                <ListGroupItem key={index} className="ps-0 border-0">
                  <Link to={item.path}>{item.display}</Link>
                </ListGroupItem>
              ))}
            </ListGroup>
          </Col>

          <Col lg="3">
            <h5 className="footer__link-title">Contact us</h5>
            <ListGroup className="footer__quick-links">
              <ListGroupItem className=" ps-0 border-0 d-flex align-items-center gap-3">
                <h6 className="mb-0 d-flex align-items-cennter gap2">
                  <span>
                    <i className="ri-map-pin-line"></i>
                  </span>
                  Address:
                </h6>
                <p className="mb-0">Gorakhpur, UP, India</p>
              </ListGroupItem>
            </ListGroup>

            <ListGroup className="footer__quick-links">
              <ListGroupItem className="ps-0 border-0 d-flex align-items-center gap-3">
                <h6 className="mb-0 d-flex align-items-cennter gap2">
                  <span>
                    <i className="ri-mail-line"></i>
                  </span>
                  Email:
                </h6>
                <p className="mb-0">
                  <a href="mailto: singhmanishkumar972@gmail.com">
                    Send Email.
                  </a>
                </p>
              </ListGroupItem>
            </ListGroup>

            <ListGroup className="footer__quick-links">
              <ListGroupItem className="ps-0 border-0 d-flex align-items-center gap-3">
                <h6 className="mb-0 d-flex align-items-cennter gap2">
                  <span>
                    <i className="ri-phone-fill"></i>
                  </span>
                  Phone:
                </h6>
                <p className="mb-0">+91 0123-(567)</p>
              </ListGroupItem>
            </ListGroup>
          </Col>
          <Col lg="12" className="text-center pt-5">
            <p className="copyright">Copyright {year}. All rights reserved</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;
