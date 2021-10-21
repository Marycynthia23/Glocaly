import React from "react";
import "./Form.css";
import Bike from "../images/Group.png";
import useForm from "./UseForm";
import validate from "./ValidateInfo";

const FormSignUp = (submitForm) => {
  const { handleChange, values, handleSubmit, errors } = useForm(
    submitForm,
    validate
  );

  return (
    <div>
      <div className="artists-container">
        <div className="Artist-form">
          <h3 className="title">Welcome to Glocally</h3>
          <p className="sub-title">
            Kindly fill the form below to create an account
          </p>
          <form className="form" onSubmit={handleSubmit}>
            <div className="colTwo">
              <input
                type="text"
                id="fname"
                name="firstname"
                placeholder="First name"
                value={values.firstname}
                onChange={handleChange}
              />
              {errors.firstname && <p>{errors.firstname}</p>}
              <input
                type="text"
                id="lname"
                name="lastname"
                placeholder="Last name"
                value={values.lastname}
                onChange={handleChange}
              />
              {errors.firstname && <p>{errors.firstname}</p>}
            </div>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Email"
              value={values.email}
              onChange={handleChange}
            />
            {errors.firstname && <p>{errors.firstname}</p>}
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Password"
              value={values.password}
              onChange={handleChange}
            />
            {errors.password && <p>{errors.password}</p>}
            <br />

            <input
              type="text"
              id="Store"
              name="storename"
              placeholder="Store name"
              value={values.storename}
              onChange={handleChange}
            />
            {errors.storename && <p>{errors.storename}</p>}
            <div className="colTwo">
              <input
                type="number"
                id="lname"
                name="phonenumber"
                placeholder="Phone number"
                value={values.phonenumber}
                onChange={handleChange}
              />
              {errors.phonenumber && <p>{errors.phonenumber}</p>}
              <input
                type="text"
                id="fname"
                name="city"
                placeholder="City"
                value={values.city}
                onChange={handleChange}
              />
              {errors.city && <p>{errors.city}</p>}
            </div>
            <p className="signIn"> Already have an account? Click here</p>
            <input type="submit" value="Submit" />
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
