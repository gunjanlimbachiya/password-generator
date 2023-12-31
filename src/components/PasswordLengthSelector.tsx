import React from "react";

const PasswordLengthSelector = () => {
  return (
    <>
      <div className="box">
        <span>4</span>{" "}
        <input
          type="range"
          min="4"
          max="30"
          name="length"
          style={{ flexGrow: "1", margin: "0px .5rem " }}
          id="password-length"
          onChange={() => {}}
        />
        <span>20</span>
      </div>
    </>
  );
};

export default PasswordLengthSelector;
