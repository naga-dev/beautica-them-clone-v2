import React from "react";

const FormInput = ({ htmlForLabel, labelText, type, name, placeholder }) => {
  return (
    <div className="input-group">
      <label htmlFor={htmlForLabel}>{labelText}</label>
      <input type={type} name={name} id="email" placeholder={placeholder} required />
    </div>
  );
};

export default FormInput;
