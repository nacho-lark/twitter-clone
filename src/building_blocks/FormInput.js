/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from "@emotion/core";
import styled from "@emotion/styled";
import React from "react";

const StyledInput = styled.input`
  width: 100%;
  background: transparent;
  border: none;
  color: #fff;
  outline: 0;
  font-size: 1.9rem;
`;

const FormInput = ({ label, id, type }) => {
  return (
    <div
      css={{
        width: "100%",
        background: "#162738",
        padding: "0.8rem 1rem 0.3rem",
        borderBottom: "2px solid #8599A6",
        marginBottom: "2rem",
      }}
    >
      <label htmlFor={id} css={{ color: "#8899a6", fontSize: "1.5rem" }}>
        {label}
      </label>
      <StyledInput type={type} id={id} />
    </div>
  );
};

export default FormInput;
