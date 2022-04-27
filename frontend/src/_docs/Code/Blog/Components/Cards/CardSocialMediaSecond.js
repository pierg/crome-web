import CardSocialMedia from "components/Cards/Blog/CardSocialMedia.js";
import passProps from "_texts/blog/cards/cardsocialmedia.js";
const props = `CardSocialMedia.defaultProps = {
  color: "blueGray",
  outline: false
};

CardSocialMedia.propTypes = {
  icon: PropTypes.string,
  title: PropTypes.string,
  subtitle: PropTypes.string,
  // properties to pass to the link object that wrapps the card
  // if you pass a prop named to, the link will be
  // generated using Link from react-router-dom
  // NOTE: the share icon is set by default,
  // // // you only need to set the number of comments
  link: PropTypes.object,
  outline: PropTypes.bool,
  color: PropTypes.oneOf([
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
    "light",
    "dark",
    "blueGray",
    "red",
    "orange",
    "amber",
    "emerald",
    "teal",
    "lightBlue",
    "indigo",
    "purple",
    "pink",
  ]),
};`;
const description = "";

const preview = `import React from "react";

// @notus-pro/react
import CardSocialMedia from "@notus-pro/react/CardSocialMedia";

const props = "<<props-here>>";

export default function Example() {
  return (
    <>
      <div className="w-full md:w-1/4">
        <CardSocialMedia {...props} />
      </div>
    </>
  );
}`;

const docsObjects = {
  component: CardSocialMedia,
  componentName: "CardSocialMedia",
  description,
  props,
  preview,
  passProps,
  codeSnippetProps: {
    wrapperClasses: "w-full md:w-1/4",
    colorSwitchePropToChange: "color",
    colorsSwitcher: [
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
    ],
    defaultColor: "linkedin",
    titleIsColor: true,
  },
};
export default docsObjects;
