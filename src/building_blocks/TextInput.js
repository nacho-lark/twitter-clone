/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from "@emotion/core";
import React from "react";

const TextInput = ({ placeholder }) => {
  return (
    <input
      type="text"
      placeholder={placeholder}
      css={{ display: "block", width: "100%" }}
    />
  );
};

export default TextInput;
