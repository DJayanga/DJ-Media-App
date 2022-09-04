import React, { useState } from "react";
import "./Auth.css";
import Logo from "../../img/logo.png";
import { useDispatch, useSelector } from "react-redux";
import { logIn, signUp } from "../../actions/AuthAction";

const Auth = () => {
  const dispatch = useDispatch();
  // const loading = useSelector((state) => state.authReducer.loading);
  const loading = useSelector((state) => state.authReducer.loading);
  const [isSignUp, setIsSignUp] = useState(true);
  console.log(loading);
  const [data, setData] = useState({
    firstName: "",
    lastName: "",
    userName: "",
    password: "",
    confirmPassword: "",
  });

  const [confirmPass, setConfirmPass] = useState(true);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (isSignUp) {
      data.password === data.confirmPassword
        ? dispatch(signUp(data))
        : setConfirmPass(false);
    } else {
      dispatch(logIn(data));
    }
  };
  const resetForm = () => {
    setConfirmPass(true);
    setData({
      firstName: "",
      lastName: "",
      userName: "",
      password: "",
      confirmPassword: "",
    });
  };

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  return (
    <div className="Auth">
      {/*-----------Left Side{/*-----------*/}
      <div className="Auth-Left">
        <img src={Logo} alt="Logo" />
        <div className="WebName">
          <h1>DJ Media</h1>
          <h6>Bring the world in to your hand</h6>
        </div>
      </div>

      {/*{/*-----------Right Side{/*-----------*/}
      <div className="Auth-Right">
        <form className="InfoForm AuthForm" onSubmit={handleSubmit}>
          <h3>{isSignUp ? "Sign Up" : "Log  In"}</h3>

          {isSignUp && (
            <div>
              <input
                type="text"
                placeholder="First Name"
                className="InfoInput"
                name="firstName"
                onChange={handleChange}
                value={data.firstName}
              />
              <input
                type="text"
                placeholder="Last Name"
                className="InfoInput"
                name="lastName"
                onChange={handleChange}
                value={data.lastName}
              />
            </div>
          )}
          <div>
            <input
              type="text"
              placeholder="User Name"
              className="InfoInput"
              name="userName"
              onChange={handleChange}
              value={data.userName}
            />
          </div>
          <div>
            <input
              type="password"
              placeholder="Password"
              className="InfoInput"
              name="password"
              onChange={handleChange}
              value={data.password}
            />
            {isSignUp && (
              <input
                type="password"
                placeholder="Confirm Password"
                className="InfoInput"
                name="confirmPassword"
                onChange={handleChange}
                value={data.confirmPassword}
              />
            )}
          </div>
          <span
            style={{
              display: confirmPass ? "none" : "block",
              color: "red",
              fontSize: "12px",
              alignSelf: "flex-end",
              marginRight: "0.4rem",
            }}
          >
            *Please enter the same password
          </span>
          <div>
            <span
              style={{ fontSize: "12px", cursor: "pointer" }}
              onClick={() => {
                setIsSignUp((prev) => !prev);
                resetForm();
              }}
            >
              {isSignUp
                ? "Already have an account? LOGIN!"
                : "Don't have an account? SIGN UP!"}
            </span>
          </div>
          <button
            className="button infoButton"
            type="submit"
            disabled={loading}
          >
            {loading ? "Loading..." : isSignUp ? "Sign Up" : "Log In"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Auth;
