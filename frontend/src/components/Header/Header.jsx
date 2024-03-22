
import React, { useRef, useEffect, useState, useContext } from "react";
import "./header.css";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { AiOutlineMenu } from "react-icons/ai";
import logo from "../../assets/images/logo.png";
import { toast } from "react-hot-toast";

import { AuthContext } from "../../context/AuthContext";
const Header = () => {
  //  ======== Sticky header start =====
  const headerRef = useRef(null);
  // const menuRef = useRef(null)
  const navigate = useNavigate();
  
  const { user, dispatch } = useContext(AuthContext);
  
  const logout = () => {

    dispatch({ type: "LOGOUT" });
    toast.success("Logout");
    navigate("/");
  };
  const stickyHeaderFunction = () => {
    window.addEventListener("scroll", () => {
      if (
        document.body.scrollTop > 0 ||
        document.documentElement.scrollTop > 0
      ) {
        headerRef.current.classList.add("sticky__header");
      } else {
        headerRef.current.classList.remove("sticky__header");
      }
    });
  };

  useEffect(() => {
    stickyHeaderFunction();
    return window.removeEventListener("scroll", stickyHeaderFunction);
  });
  //  ======== Sticky header end =====

  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };
// const toggleMenu = () =>menuRef.current.classList.toggle('show__menu')
  return (
    <header className="header" ref={headerRef}>
      <div className="header__main ">
        <div className=" logo">
          <Link to="/home"><img src={logo} alt="" /></Link>
          
        </div>
        {windowWidth <= 768 ? ( // Adjust the breakpoint as needed
          <div className="mobile-menu-icon" onClick={toggleMobileMenu}>
            <AiOutlineMenu />
          </div>
        ) : (
          <div className="desktop__view">
            <div className="nav__links mx-0 ">
              <ul>
                <li>
                  <NavLink to="/home" activeclassname="active">
                    Home
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/about" activeclassname="active">
                    About
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/tours" activeclassname="active">
                    Tours
                  </NavLink>
                </li>
              </ul>
            </div>
            <div className="btn__container">
            {
            user ? (
              
              <>
               
                <h5 className="btn mt-2 secondary__btn">{user.username}</h5>
                <button className="btn  btn-dark my-2" onClick={logout}>
                  Logout
                </button>
              </>
            ) :  (
              <>
                <button className="btn secondary__btn">
                  <Link to="login">Login</Link>
                </button>
                <button className="btn primary__btn">
                  <Link to="register">Register</Link>
                </button>
              </>
            )}
            </div>
          </div>
        )}
      </div>

      {isMobileMenuOpen && windowWidth <= 768 && (
        <div className="mobile__menu">
          <div className="moblie__nav-links">
            <ul>
              <li>
                <NavLink to="/home" activeclassname="active">
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink to="/about" activeclassname="active">
                  About
                </NavLink>
              </li>
              <li>
                <NavLink to="/tours" activeclassname="active">
                  Tours
                </NavLink>
              </li>
            </ul>
          </div>
          <div className="moblie__menu-btn btn__container">
            {user ? (
              <>
                <h5 className="mx-2 mt-2">{user.username}</h5>
                <button className="btn btn-dark" onClick={logout}>
                  Logout
                </button>
              </>
            ) : (
              <>
                <button className="btn secondary__btn">
                  <Link to="login">Login</Link>
                </button>
                <button className="btn primary__btn">
                  <Link to="register">Register</Link>
                </button>
              </>
            )}
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
