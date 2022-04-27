import "_texts/misc/cards/cardblogandauthor.js"
import "components/Cards/Misc/CardBlogandAuthor.js"
import CardBlogandAuthor
import passProps

const props = `CardBlogandAuthor.defaultProps = {
  user: {},
  link: {},
};

CardBlogandAuthor.propTypes = {
  image: PropTypes.string,
  title: PropTypes.string,
  description: PropTypes.string,
  user: PropTypes.shape({
    image: PropTypes.string,
    name: PropTypes.string,
  }),
  icon: PropTypes.string,
  text: PropTypes.string,
  // wrapper link for the image and title
  // if you send a prop named to the link
  // will be generated as a Link from react-router-dom
  // otherwise it will be generated as an <a> tag
  link: PropTypes.object,
};`;
const description = "";
const preview = `import React from "react";

// @notus-pro/react
import "@notus-pro/react/CardBlogandAuthor"
import CardBlogandAuthor

const props = ${JSON.stringify(passProps)};

export default function Example() {
  return (
    <>
      <div className="w-full md:w-1/2 lg:w-1/3">
        <CardBlogandAuthor
          {...props}
        />
      </div>
    </>
  );
}
`;

const docsObjects = {
  component: CardBlogandAuthor,
  componentName: "CardBlogandAuthor",
  passProps,
  description,
  props,
  preview,
  codeSnippetProps: {
    wrapperClasses: "w-full md:w-1/2 lg:w-1/3",
  },
};
export default docsObjects;
