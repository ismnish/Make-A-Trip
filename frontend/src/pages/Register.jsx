

import React, { useState, useContext } from "react";
import { Form, FormGroup } from "reactstrap";
import { Link, useNavigate } from "react-router-dom";
import "../styles/login.css";
import registerImg from "../assets/images/register.png";
import userIcon from "../assets/images/user.png";
import { toast } from "react-hot-toast";

import { AuthContext } from "../context/AuthContext";
import { BASE_URL } from "../utils/config";

function Register() {
  const navigate = useNavigate();
  const [credentials, setCredentials] = useState({
    username: undefined,
    email: undefined,
    password: undefined,
    confirmpassword:undefined,
  });

  const { dispatch } = useContext(AuthContext);

  const handleChange = (e) => {
    const { id, value } = e.target;
    // const usernameRegex = /^(?=\D*\d)(?=.*[a-zA-Z])\d*[a-zA-Z][a-zA-Z0-9]*$/;// Validate username
    // const continuousRegex = /^[a-zA-Z0-9]+$/;// Ensure continuous characters (no spaces or special characters)
      setCredentials((prev) => ({ ...prev, [id]: value }));
  };

  const handleClick = async (e) => {
    e.preventDefault();

    if (credentials.password !== credentials.confirmpassword) {
      return toast.error("Password doesn't match");
    }

    try {
      const res = await fetch(`${BASE_URL}/auth/register`, {
        method: "post",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(credentials),
      });
      const result = await res.json();

      if (!res.ok){
        return toast.error("something went wrong!");
      }
      dispatch({ type: "REGISTER_SUCCESS" });
      toast.success("Account Created!");
      navigate("/login");
    } catch (err) {
      alert(err.message);
    }

  };
  return (
    <section>
      <div className="login__page ">
        <div className="login__img ">
          <img src={registerImg} alt="" />
        </div>
        <div className="login__form-container">
          <div className="user">
            <img src={userIcon} alt="userIcon" />
          </div>
          <h2>Register</h2>
          <Form className="login__form" onSubmit={handleClick}>
            <FormGroup>
              <input
                type="text"
                placeholder="Name"
                required
                id="username"
                onChange={handleChange}
              />
            </FormGroup>
            <FormGroup>
              <input
                type="email"
                placeholder="Email"
                required
                id="email"
                onChange={handleChange}
              />
            </FormGroup>
            <FormGroup>
              <input
                type="password"
                placeholder="Password"
                required
                id="password"
                onChange={handleChange}
              />
            </FormGroup>
            <FormGroup>
              <input
                type="password"
                placeholder="Confirm Password"
                required
                id="confirmpassword"
                onChange={handleChange}
              />
            </FormGroup>
            <button className="btn secondary__brn auth__btn" type="submit">
              Sign In
            </button>
          </Form>
          <p>
            Already have an account? <Link to="/login">login</Link>
          </p>
        </div>
      </div>
    </section>
  );
}

export default Register;
