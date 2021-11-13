import React, { useState } from "react";
import "./Register.css";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";
import { Spinner } from "react-bootstrap";


// Registration Ation
const Register = () => {
  const [registerData, setRegisterData] = useState({});
  const {  user, registerUser, isLoading, authError } = useAuth();
  const history = useHistory();
  const handleOnBlur = (e) => {
    const field = e.target.name;
    const value = e.target.value;
    const newRegisterValue = { ...registerData };
    newRegisterValue[field] = value
    setRegisterData(newRegisterValue);
    console.log(newRegisterValue);
  };

  const handleRegisterSubmit = (e) => {
    if (registerData.password !== registerData.password2) {
        alert("Password Does Not Match");
      }
      registerUser(registerData?.email, registerData?.password,registerData?.name, history);
    e.preventDefault();
  };
  return (
    <div>
      <div className="register-main">
        <h1>Register</h1>
       <form onSubmit={handleRegisterSubmit}>
          <div className="register-row">
            <label for="name">Name</label>
            <input
              type="text"
              name="name"
              onBlur={handleOnBlur}
              autocomplete="off"
            />
          </div>
          <div className="register-row">
            <label for="email">Email</label>
            <input
              type="email"
              name="email"
              onBlur={handleOnBlur}
              autocomplete="off"
              placeholder="email@example.com"
            />
          </div>
          <div className="register-row">
            <label for="password">Password</label>
            <input type="password" name="password" onBlur={handleOnBlur} />
          </div>
          <div className="register-row">
            <label for="password2">Password</label>
            <input type="password" name="password2" onBlur={handleOnBlur} />
          </div>
          <div className="register-row">
            <label for="phone">PhoneNumber</label>
            <input type="number" name="phoneNumber" onBlur={handleOnBlur} />
          </div>
          <div className="register-row">
            <label for="address">Address</label>
            <input type="text" name="address" onBlur={handleOnBlur} />
          </div>
          <button className="registerbtn" type="submit">
            Register
          </button>
          <div>
            <h4>Or Register with social platforms</h4>
            <div className="footer-social-icon">
              <Link to="">
                <i className="fab fa-google-plus-g google-bg"></i>
              </Link>
              <Link to="">
                <i className="fab fa-facebook-f facebook-bg"></i>
              </Link>
              <Link to="">
                <i className="fab fa-twitter twitter-bg"></i>
              </Link>
            </div>
            <Link to="/login">Already Register? Please Login!</Link>
          </div>
        </form>
        {/* {isLoading && <Spinner animation="border" variant="info" />} */}
       
        {/* {authError && alert(`${authError}`)} */}
      </div>
    </div>
  );
};

export default Register;
