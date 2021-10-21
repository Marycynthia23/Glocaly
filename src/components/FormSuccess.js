import React from "react";
import "./Form.css";
import logo from "../images/logo.jpg";

const FormSuccess = () => {
  return (
    <div>
      <div className="navBar">
        <h3 className="title">Profile</h3>
        <img src={logo} alt="" />
        <button>Back</button>
      </div>
      <div className="artists-container">
        <div className="Artist-form">
          <p className="sub-title">
            Kindly fill the form below to create an account
          </p>
          <form className="form">
            <div className="colTwo">
              <input
                type="text"
                id="fname"
                name="firstname"
                placeholder="First name"
              />
              <input
                type="text"
                id="lname"
                name="lastname"
                placeholder="Last name"
              />
            </div>
            <input type="email" id="email" name="email" placeholder="Email" />
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Password"
            />
            <br />

            <input
              type="text"
              id="Store"
              name="storename"
              placeholder="Store name"
            />
            <div className="colTwo">
              <input
                type="number"
                id="lname"
                name="phonenumber"
                placeholder="Phone number"
              />
              <input type="text" id="fname" name="city" placeholder="City" />
            </div>
            <p className="signIn"> Already have an account? Click here</p>
            <input type="submit" value="Submit" />
          </form>
        </div>
      </div>{" "}
      .
    </div>
  );
};

export default FormSuccess;
