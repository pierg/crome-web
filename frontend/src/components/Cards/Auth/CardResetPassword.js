import React from "react";
import PropTypes from "prop-types";
// components
import Input from "../../../components/Elements/Input.js";
import Button from "../../../components/Elements/Button.js";

export default function CardResetPassword({
  image,
  title,
  subtitle,
  input,
  button,
}) {
  return (
    <>
      <div className="bg-white relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg">
        <div className="pb-6 rounded-t-lg overflow-hidden">
          <img
            src={image}
            alt="..."
            className="w-full rounded-t-lg"
            style={{ marginTop: "-46%" }}
          />
        </div>

        <div className="lg:p-10 px-4 py-4 flex-auto rounded-b-lg">
          <h4 className="text-2xl font-bold text-center">{title}</h4>
          <div className="text-center text-blueGray-500 mb-5 mt-1">
            <p>{subtitle}</p>
          </div>
          <Input {...input} />

          <div className="text-center mt-6">
            <Button {...button} />
          </div>
        </div>
      </div>
    </>
  );
}

CardResetPassword.defaultProps = {
  input: {},
  button: {},
};

CardResetPassword.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string,
  image: PropTypes.string,
  // It is represetnted by the props you
  // can pass to our Input component element
  input: PropTypes.object,
  // It is represetnted by the props you
  // can pass to our Button component element
  button: PropTypes.object,
};
