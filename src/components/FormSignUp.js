import React from "react";
import "./Form.css";
import Bike from "../images/Group.png";
import validate from "./ValidateInfo";
// import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { useHistory } from "react-router";

const FormSignUp = (submitForm) => {
  const [values, setValues] = useState({
    firstname: "",
    lastname: "",
    email: "",
    password: "",
    storename: "",
    phonenumber: "",
    city: "",
  });

  const [errors, setErrors] = useState({});

  const history = useHistory();

  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    const formData = localStorage.getItem("form_data");
    console.log(formData);
    if (formData) {
      //todo: redirect to profile page
      history.push("/profile");
    }
  }, []);

  // update values whenever i change something
  const handleChange = (e) => {
    const { name, value } = e.target;
    console.log("checking form name", name);
    console.log("checking form values", values);
    setValues({
      ...values,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrors(validate(values));
    setIsSubmitting(true);
    persistData(values);
    console.log("uuuuiii");
  };

  const persistData = (data) => {
    if (typeof data === "object") {
      data = JSON.stringify(data); //serialize
    }
    localStorage.setItem("form_data", data);
    history.push("/profile");
  };

  return (
    <div>
      <div className="artists-container">
        <div className="Artist-form">
          <h3 className="title">Welcome to Glocally</h3>
          <p className="sub-title">
            Kindly fill the form below to create an account
          </p>
          <form
            className="form"
            onSubmit={(e) => {
              handleSubmit(e);
            }}
          >
            <div className="colTwo">
              <input
                type="text"
                id="fname"
                name="firstname"
                placeholder="First name"
                value={values.firstname}
                onChange={(e) => {
                  handleChange(e);
                }}
              />
              {/* {errors.firstname && <p>{errors.firstname}</p>} */}
              <input
                type="text"
                id="lname"
                name="lastname"
                placeholder="Last name"
                value={values.lastname}
                onChange={(e) => {
                  handleChange(e);
                }}
              />
              {/* {errors.firstname && <p>{errors.firstname}</p>} */}
            </div>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Email"
              value={values.email}
              onChange={(e) => {
                handleChange(e);
              }}
            />
            {/* {errors.firstname && <p>{errors.firstname}</p>} */}
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Password"
              value={values.password}
              onChange={(e) => {
                handleChange(e);
              }}
            />
            {/* {errors.password && <p>{errors.password}</p>} */}
            <br />

            <input
              type="text"
              id="Store"
              name="storename"
              placeholder="Store name"
              value={values.storename}
              onChange={(e) => {
                handleChange(e);
              }}
            />
            {/* {errors.storename && <p>{errors.storename}</p>} */}
            <div className="colTwo">
              <input
                type="number"
                id="lname"
                name="phonenumber"
                placeholder="Phone number"
                value={values.phonenumber}
                onChange={(e) => {
                  handleChange(e);
                }}
              />
              {/* {errors.phonenumber && <p>{errors.phonenumber}</p>} */}
              <input
                type="text"
                id="fname"
                name="city"
                placeholder="City"
                value={values.city}
                onChange={(e) => {
                  handleChange(e);
                }}
              />
              {/* {errors.city && <p>{errors.city}</p>} */}
            </div>
            <p className="signIn"> Already have an account? Click here</p>
            {/* <Link to="/profile"> */}
            <input type="submit" value="Submit" />
            {/* </Link> */}
          </form>
        </div>
        <div className="Artist-bg">
          <img src={Bike} alt="" />
          <p className="mockupText">
            Our mission is to enable the sustainable and convienient transport
            of goods in urban areas!
          </p>
        </div>
      </div>
    </div>
  );
};

export default FormSignUp;
