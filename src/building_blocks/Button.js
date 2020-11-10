/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from "@emotion/core";
import React from "react";

const Button = ({ children }) => {
  // button non active: #23608e active: #1da1f2
  return (
    <button
      css={{
        background: "#23608e ",
        color: "#fff",
        width: "100%",
        fontSize: "1.5rem",
        fontWeight: "700",
        border: "none",
        borderRadius: "50px",
        padding: "1.5rem 0",
      }}
    >
      {children}
    </button>
  );
};

export default Button;
