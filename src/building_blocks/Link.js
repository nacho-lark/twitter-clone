/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from "@emotion/core";
import React from "react";

const Link = ({ children, to }) => {
  return (
    <a
      href={to}
      css={{ color: "#0091e7", fontSize: "1.5rem", textDecoration: "none" }}
    >
      {children}
    </a>
  );
};

export default Link;
