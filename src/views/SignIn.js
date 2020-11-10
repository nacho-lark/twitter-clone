/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from "@emotion/core";
import React from "react";
import Logo from "../building_blocks/Logo";
import TextInput from "../building_blocks/TextInput";
import Button from "../building_blocks/Button";

const SignIn = () => {
  return (
    <div css={{ backgroundColor: "#13202c", minHeight: "100vh" }}>
      <main css={{ maxWidth: "600px", margin: "0 auto" }}>
        <Logo />
        <h1 css={{ color: "#fff", fontSize: "23px", textAlign: "center" }}>
          Iniciar sesión en Twitter
        </h1>
        <TextInput placeholder="Name" />
        <TextInput placeholder="Mail" />
        <Button>Iniciar sesión</Button>
      </main>
    </div>
  );
};

export default SignIn;
