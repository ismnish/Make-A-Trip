import React, { useState, useContext } from "react";
import { Form, FormGroup} from "reactstrap";
import { Link, useNavigate } from "react-router-dom";
import "../styles/login.css";
import loginImg from "../assets/images/login.png";
import userIcon from "../assets/images/user.png";
import { toast } from "react-hot-toast";

import {AuthContext} from './../context/AuthContext';
import {BASE_URL} from './../utils/config'
const Login = () =>{
  const navigate = useNavigate();
  const [credentials, setCredentials] = useState({
    email: undefined,
    password: undefined,
  });
const {dispatch} = useContext(AuthContext);

  const handleChange = (e) => {
    setCredentials((prev) => ({ ...prev, [e.target.id]: e.target.value }));
  };

  const handleClick =async (e) => {
    e.preventDefault();
    dispatch({type:"LOGIN_START"})
    try{
      const res = await fetch(`${BASE_URL}/auth/login`,{
        method:'post',
        headers:{
          'content-type': "application/json"
        },
        credentials:'include',
        body: JSON.stringify(credentials),
      })

      const result = await res.json();
      if(!res.ok) {
        return toast.error("Invalid Email or Password!");
      }

      dispatch({type:'LOGIN_SUCCESS', payload:result.data})
      toast.success("Logged In");
      navigate('/')
    } catch(err){
      dispatch({type:'LOGIN_FAILURE', payload: err.message})
    }
  };
  return (
    <section>
      <div className="login__page">
        <div className="login__img ">
          <img src={loginImg} alt="" />
        </div>
        <div className="login__form-container">
          <div className="user">
            <img src={userIcon} alt="userIcon" />
            
          </div>
          <h2>Login</h2>
          <Form className="login__form" onSubmit={handleClick}>
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
                placeholder="password"
                required
                id="password"
                onChange={handleChange}
              />
            </FormGroup>
            <button className="btn secondary__brn auth__btn" type="submit">
              Login
            </button>
          </Form>
          <p>
            Don't have an account? <Link to="/register">create account</Link>
          </p>
          <p>
            Forgot password? <Link to="/register">reset</Link>
          </p>
        </div>
      </div>
    </section>
  );
}

export default Login;
