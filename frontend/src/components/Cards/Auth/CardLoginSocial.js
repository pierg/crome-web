import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
// components
import Button from "../../../components/Elements/Button.js";
import Input from "../../../components/Elements/Input.js";
import Checkbox from "../../../components/Elements/Checkbox.js";

export default function CardLoginSocial({
  title,
  subtitle,
  inputs,
  socials,
  button,
  checkbox,
  forgotPassword,
  createAccount,
}) {
  return (
    <>
      <div className="relative flex flex-col w-full mb-6 shadow-lg rounded-lg bg-white">
        <div className="mb-0 px-6 py-6">
          <div className="text-center mb-3">
            <h6 className="text-blueGray-500 text-sm font-bold">{title}</h6>
          </div>
          <div className="text-center">
            {socials.map((prop, key) => (
              <Button
                size="sm"
                {...prop.button}
                key={key}
                color={prop.icon}
                fullWidth={false}
              >
                <i className={"mr-1 fab fa-" + prop.icon}></i> {prop.icon}
              </Button>
            ))}
          </div>
          <hr className="mt-6 border-b-1 border-blueGray-200" />
        </div>
        <div className="flex-auto px-4 lg:px-10 py-10 pt-0">
          <div className="text-blueGray-500 text-center mb-3 font-bold">
            <small>{subtitle}</small>
          </div>
          <form>
            {inputs.map((prop, key) => {
              return (
                <div key={key} className="relative w-full">
                  <label className="block uppercase text-blueGray-500 text-xs font-bold mb-2 ml-1">
                    {prop.label}
                  </label>
                  <Input {...prop.input} />
                </div>
              );
            })}
            <div className="mt-2 inline-block">
              <Checkbox {...checkbox} />
            </div>

            <div className="text-center mt-5">
              <Button {...button} />
            </div>
          </form>
        </div>
      </div>
      {Object.keys(forgotPassword).length === 0 &&
      Object.keys(createAccount).length === 0 ? null : (
        <div className="flex flex-wrap mt-6 relative">
          <div className="w-1/2">
            {forgotPassword && forgotPassword.to ? (
              <Link {...forgotPassword} className="text-blueGray-500 ml-2">
                <small>Forgot password?</small>
              </Link>
            ) : forgotPassword && forgotPassword.href ? (
              <a {...forgotPassword} className="text-blueGray-500 ml-2">
                <small>Forgot password?</small>
              </a>
            ) : null}
          </div>
          <div className="w-1/2 text-right">
            {createAccount && createAccount.to ? (
              <Link {...createAccount} className="text-blueGray-500 mr-2">
                <small>Create new account</small>
              </Link>
            ) : createAccount && createAccount.href ? (
              <a {...createAccount} className="text-blueGray-500 mr-2">
                <small>Create new account</small>
              </a>
            ) : null}
          </div>
        </div>
      )}
    </>
  );
}

CardLoginSocial.defaultProps = {
  inputs: [],
  button: {},
  forgotPassword: {},
  createAccount: {},
};

CardLoginSocial.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string,
  // NOTE: the "Forgot password?" text is allready set
  forgotPassword: PropTypes.object,
  // NOTE: the "Create new account" text is allready set
  createAccount: PropTypes.object,
  // It is represetnted by the props you
  // can pass to our Button component element
  button: PropTypes.object,
  socials: PropTypes.arrayOf(
    PropTypes.shape({
      icon: PropTypes.oneOf([
        "facebook",
        "twitter",
        "instagram",
        "github",
        "pinterest",
        "youtube",
        "vimeo",
        "slack",
        "dribbble",
        "reddit",
        "tumblr",
        "linkedin",
      ]),
      // It is represetnted by the props you
      // can pass to our Button component element
      // for example you can add an onClick handler
      button: PropTypes.object,
    })
  ),
  // It is represetnted by the props you
  // can pass to our Checkbox component element
  checkbox: PropTypes.object,
  inputs: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string,
      // It is represetnted by the props you
      // can pass to our Input component element
      // NOTE: if you wish to generate a textarea, you will need to pass
      // // // inside this object >> type: "textarea"
      // // // full example >> input: { type: "textarea" }
      input: PropTypes.object,
    })
  ),
};
