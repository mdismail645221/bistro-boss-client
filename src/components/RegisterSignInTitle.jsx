import React from "react";

const RegisterSignInTitle = ({ title }) => {
  const style = {
    color: "#151515",
    textAlign: "center",
    fontFamily: "Inter",
    fontSize: "40px",
    fontStyle: "normal",
    fontWeight: 700,
    lineHeight: "normal",
    paddingTop: "1.2rem"
  };

  return (
    <div>
      <h3 style={style}>{title}</h3>
    </div>
  );
};

export default RegisterSignInTitle;
