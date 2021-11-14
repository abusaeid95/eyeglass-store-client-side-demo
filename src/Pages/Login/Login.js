import React, { useState } from "react";
import { Spinner } from "react-bootstrap";
import { Link, useLocation, useHistory } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";
import "./Login.css";

const Login = () => {
  const [loginData, setLoginData] = useState({});
  const { loginUser, signInWithGoogle, isLoading } = useAuth();
  const location = useLocation();
  const history = useHistory();

  const handleOnChange = (e) => {
    const field = e.target.name;
    const value = e.target.value;
    const newLoginValue = { ...loginData };
    newLoginValue[field] = value;
    setLoginData(newLoginValue);
  };

  const handleLoginSubmit = (e) => {
    console.log(location,history);
    loginUser(loginData.email, loginData.password, location, history);
    e.preventDefault();
    console.log("cl",history);
  };

  const handleGoogleSignIn = () => {
    signInWithGoogle(location, history)
}
  return (
    <div>
      <div className="login-main">
        <h1>Login</h1>
        {isLoading && <Spinner animation="border" variant="info" />}
        <form onSubmit={handleLoginSubmit}>
          <div className="login-row">
            <label for="email">Email</label>
            <input
              type="email"
              name="email"
              onChange={handleOnChange}
              autocomplete="off"
              placeholder="email@example.com"
            />
          </div>
          <div className="login-row">
            <label for="password">Password</label>
            <input type="password" name="password" onChange={handleOnChange} />
          </div>
          <button className="loginpbtn" type="submit">
            Login
          </button>
          <div>
            <h4>Or Signin with social platforms</h4>
            <div className="footer-social-icon">
              <button onClick={handleGoogleSignIn} className="border-0 bg-transparent">
                <i className="fab fa-google-plus-g google-bg"></i>
              </button>
              <Link to="">
                <i className="fab fa-facebook-f facebook-bg"></i>
              </Link>
              <Link to="">
                <i className="fab fa-twitter twitter-bg"></i>
              </Link>
            </div>
            <Link to="/register">New User? Please Register!</Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
