import React, { useState, useEffect } from "react";
import "./Form.css";
import logo from "../images/logo.jpg";
import { useHistory } from "react-router";

const FormSuccess = () => {
  const [values, setValues] = useState({
    firstname: "",
    lastname: "",
    email: "",
    password: "",
    storename: "",
    phonenumber: "",
    city: "",
  });
  useEffect(() => {
    const formData = localStorage.getItem("form_data");
    console.log(formData);
    if (formData) {
      setValues(JSON.parse(formData));
    }
  }, []);

  const history = useHistory();

  const logOut = () => {
    localStorage.removeItem("form_data");
    history.push("/");
  };
  return (
    <div>
      <div className="navBar">
        <h3 className="profile-text">Profile</h3>
        <img src={logo} alt="" />
        <button className="btnLogOut" onClick={logOut}>
          Logout
        </button>
      </div>
      <div className="details-container">
        <div className="details-form">
          <h3 className="details-title">Profile Details</h3>
          <div className="colTwo">
            <div className="details" id="fname" name="firstname">
              {values.firstname}
            </div>
            <div className="details" id="lname" name="lastname">
              {values.lastname}
            </div>
          </div>
          <div className="details" id="password" name="password">
            {values.password}
          </div>
          <div className="details" id="Store" name="storename">
            {values.storename}
          </div>
          <div className="colTwo">
            <div className="details" id="lname" name="phonenumber">
              {values.phonenumber}
            </div>
            <div className="details" id="fname" name="city">
              {values.city}
            </div>
          </div>

          <p className="signIn"> SignOut? Click here</p>
          {/* <button className="btn">Cancel</button> */}
        </div>
      </div>{" "}
      .
    </div>
  );
};

export default FormSuccess;
