import React from "react";
import PropTypes from "prop-types";

// components
import Input from "../../../components/Elements/Input.js";
import Button from "../../../components/Elements/Button.js";
import Message from "../../../components/Content/Message.js";

export default function CardChatDiscussion({
  image,
  name,
  lastOnline,
  input,
  buttons,
  messages,
}) {
  return (
    <>
      <div className="flex justify-center border-0 flex-col min-w-0 break-words bg-white w-full mb-6 shadow-xl rounded-lg">
        <div className="bg-blueGray-800 inline-block rounded-t-lg px-5 py-3">
          <div className="py-4 flex flex-row justify-between">
            <div className="flex items-center">
              <img
                src={image}
                className="rounded-full mr-4 max-w-64-px"
                alt="..."
              />
              <div className="text-left flex-1">
                <div className="justify-between items-center">
                  <h5 className="text-2xl text-white font-semibold leading-tight">
                    {name}
                  </h5>
                  <span className="text-blueGray-500">
                    <span className="mr-2">{lastOnline}</span>
                    {lastOnline === "Online" && (
                      <span className="p-1 text-xs font-semibold inline-block uppercase last:mr-0 mr-1 p-1 rounded-full bg-emerald-400"></span>
                    )}
                    {lastOnline === "Offline" && (
                      <span className="p-1 text-xs font-semibold inline-block uppercase last:mr-0 mr-1 p-1 rounded-full bg-red-400"></span>
                    )}
                  </span>
                </div>
              </div>
            </div>
            <div>
              {buttons.map((prop, key) => (
                <Button key={key} {...prop} />
              ))}
            </div>
          </div>
        </div>

        <div className="px-4 flex flex-col-reverse flex-auto max-h-screen-70 overflow-auto overflow-x-hidden bg-blueGray-200">
          {messages.map((prop, key) =>
            prop.divider !== undefined ? (
              <div key={key} className="mt-6 flex flex-wrap -mx-4">
                <div className="px-4 relative w-full lg:w-full">
                  <span className="text-blueGray-500 font-semibold flex justify-center mt-4">
                    {prop.divider}
                  </span>
                </div>
              </div>
            ) : (
              <Message key={key} {...prop} />
            )
          )}
        </div>

        <div className="bg-white rounded-b-lg px-4 py-3 border-t border-blueGray-300">
          <div className="my-4 mb-3 pt-0 relative">
            <Input {...input} />
          </div>
        </div>
      </div>
    </>
  );
}

CardChatDiscussion.defaultProps = {
  input: {},
  messages: [],
  buttons: [],
};

CardChatDiscussion.propTypes = {
  image: PropTypes.string,
  name: PropTypes.string,
  // if Online, then a emerald bullet will appear near it
  // if Offline, then a red bullet will appear near it
  lastOnline: PropTypes.string,
  // array of props to pass to the Button component
  buttons: PropTypes.arrayOf(PropTypes.object),
  // props to pass to the Input component
  input: PropTypes.object,
  messages: PropTypes.arrayOf(
    PropTypes.oneOfType([
      // array of props to pass to the Message component
      PropTypes.object,
      // this will be generated as a date divider
      PropTypes.shape({
        divider: PropTypes.string,
      }),
    ])
  ),
};
