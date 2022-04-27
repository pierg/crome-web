import "_texts/blog/cards/cardsocialmedia.js"
import "components/Cards/Blog/CardSocialMedia.js"
import CardSocialMedia
import passProps

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
import "@notus-pro/react/CardSocialMedia"
import CardSocialMedia

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
    ],
    defaultColor: "blueGray",
    titleIsColor: true,
  },
};
export default docsObjects;
