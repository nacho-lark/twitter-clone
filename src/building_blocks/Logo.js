/** @jsxRuntime classic */
/** @jsx jsx */
import { css, jsx } from "@emotion/core";
import React from "react";
import LogoImg from "../images/twitter-logo.svg";

const Logo = () => {
  return (
    <div css={{ textAlign: "center" }}>
      <img src={LogoImg} css={{ width: "6rem" }} alt="twitter logo" />
    </div>
  );
};

export default Logo;
