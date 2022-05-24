import React from "react";
import { Link } from "react-router-dom";
import "./Auth.css";
import Logo from "../../img/logo.png";

const Auth = () => {
  return (
    <div className="auth">
      <div className="auth__left">
        <img src={Logo} alt="" />
        <div className="web__name">
          <h1>Social Box</h1>
          <h6>Explore the ideas throughout the world.</h6>
        </div>
      </div>

      {/* <Login /> */}
      <Signup />
    </div>
  );
};

function Login() {
  return (
    <div className="auth__right">
      <form className="info__form auth__form">
        <h3>Login</h3>
        <div>
          <input
            type="text"
            placeholder="User Name"
            className="info__input"
            name="username"
          />
        </div>
        <div>
          <input
            type="password"
            placeholder="Password"
            className="info__input"
            name="pass"
          />
        </div>
        <div>
          <span>Don't have an account. Signup!</span>
        </div>
        <button className="button info__button">Login</button>
      </form>
    </div>
  );
}
function Signup() {
  return (
    <div className="auth__right">
      <form className="info__form auth__form">
        <h3>Sign up</h3>
        <div>
          <input
            type="text"
            placeholder="First Name"
            className="info__input"
            name="fname"
          />
          <input
            type="text"
            placeholder="Last Name"
            className="info__input"
            name="lname"
          />
        </div>
        <div>
          <input
            type="text"
            placeholder="User Name"
            className="info__input"
            name="username"
          />
        </div>
        <div>
          <input
            type="password"
            placeholder="Password"
            className="info__input"
            name="pass"
          />
          <input
            type="password"
            placeholder="Confirm Password"
            className="info__input"
            name="cpass"
          />
        </div>
        <div>
          <span>Already have an account. Login!</span>
        </div>
        <Link to="/home" className="button info__button">
          Signup
        </Link>
      </form>
    </div>
  );
}
export default Auth;
