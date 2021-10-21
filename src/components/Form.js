import React, { useState } from "react";
import FormSignUp from "./FormSignUp";
// import FormSuccess from "./FormSuccess";

const Form = () => {
  return (
    <div>
      <FormSignUp />
      {/* {!isSubmitted ? <FormSignUp submitForm={submitForm} /> : <FormSuccess />} */}
      {/* <FormSuccess /> */}
    </div>
  );
};

export default Form;
