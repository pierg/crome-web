/* eslint-disable react/jsx-no-target-blank*/
import React from "react";

import Alert from "components/Elements/Alert.js";

export default function TypeScriptSupport() {
  return (
    <>
      <Alert color="red">
        At the moment Creative Tim <b className="underline">does not</b>{" "}
        commercialize React & TypeScript products.
        <br />
        So, Notus PRO React <b className="underline">does not</b> support
        TypeScript.
        <br />
        Notus PRO React only comes as Babel/JSX.
      </Alert>
      <Alert color="lightBlue">
        We will add TypeScript suport for Notus PRO React in our next updates.
        <br />
        At the moment we do not have an estimate for TypeScript support.
        <br />
        If you wish to learn more, please{" "}
        <a
          className="font-bold hover:text-blueGray-300"
          href="https://www.creative-tim.com/contact-us?ref=npr-ts-support"
          target="_blank"
        >
          contact us here
        </a>
        .
      </Alert>
    </>
  );
}
