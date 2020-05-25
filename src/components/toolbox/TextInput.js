import React from "react";

const TextInput = ({ name, label, onChange, placeHolder, value, error,type }) => {
  let wrapperClass = "form-group";
  if (error && error.length > 0) {
    wrapperClass += " has-error";
  }

  if(type === ""){
    type = "text"
  }

  return (
    <div>
      <label htmlFor={name}>{label}</label>
      <div className="field">
        <input
          type= {type}
          name={name}
          className="form-control"
          placeholder={placeHolder}
          value={value}
          onChange={onChange}
        ></input>
      </div>
     {error && <div className="alert alert-danger"> {error}</div>}
    </div>
  );
};

export default TextInput;
