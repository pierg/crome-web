import CardDashboardProfile from "components/Cards/Admin/CardDashboardProfile.js";
import passProps from "_texts/admin/cards/carddashboardprofile.js";
const props = `CardDashboardProfile.defaultProps = {
  stats: [],
  achievements: [],
  showMore: {},
};

CardDashboardProfile.propTypes = {
  image: PropTypes.string,
  name: PropTypes.string,
  location: PropTypes.string,
  // You send a simple string for a one paragraph description
  // or you can send an array of strings, that will generate
  // each string into a new paragraph
  description: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.arrayOf(PropTypes.string),
  ]),
  // properties to pass to the link object
  // if you pass a prop named to, the link will be
  // generated using Link from react-router-dom
  showMore: PropTypes.object,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string,
      subtitle: PropTypes.string,
    })
  ),
  achievements: PropTypes.arrayOf(
    PropTypes.shape({
      icon: PropTypes.string,
      text: PropTypes.string,
    })
  ),
};`;
const description = "";

const preview = `import React from "react";

// @notus-pro/react
import CardDashboardProfile from "@notus-pro/react/CardDashboardProfile";

const props = ${JSON.stringify(passProps)}

export default function Example() {
  return (
    <>
      <div className="w-full md:w-3/4 lg:w-1/3">
        <CardDashboardProfile {...props} />
      </div>
    </>
  );
}`;

const docsObjects = {
  component: CardDashboardProfile,
  componentName: "CardDashboardProfile",
  description,
  props,
  preview,
  passProps,
  codeSnippetProps: {
    wrapperClasses: "w-full md:w-3/4 lg:w-1/3",
  },
};
export default docsObjects;
