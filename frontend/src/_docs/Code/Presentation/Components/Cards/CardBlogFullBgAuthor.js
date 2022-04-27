import "_texts/presentation/cards/cardblogfullbgauthor.js"
import "components/Cards/Presentation/CardBlogFullBgAuthor.js"
import CardBlogFullBgAuthor
import passProps

const props = `CardBlogFullBgAuthor.defaultProps = {
  button: {},
  user: {},
};

CardBlogFullBgAuthor.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  bgImage: PropTypes.string,
  userimage: PropTypes.string,
  username: PropTypes.string,
  // array of properties to pass to the link object
  // if you pass a prop named to, the link will be
  // generated using Link from react-router-dom
  // this will wrapp the username and userimage
  user: PropTypes.object,
  // it is represented by the props
  // that can be passed to the Button,
  // so please check that one out
  button: PropTypes.object,
};
`;
const description = "";
const preview = `import React from "react";

// @notus-pro/react
import "@notus-pro/react/CardBlogFullBgAuthor"
import CardBlogFullBgAuthor

const props = ${JSON.stringify(passProps)}

export default function Example() {
  return (
    <>
      <div className="w-full md:w-1/2">
        <CardBlogFullBgAuthor {...props} />
      </div>
    </>
  );
}`;

const docsObjects = {
  component: CardBlogFullBgAuthor,
  componentName: "CardBlogFullBgAuthor",
  description,
  props,
  preview,
  passProps,
  codeSnippetProps: {
    wrapperClasses: "w-full md:w-1/2",
  },
};
export default docsObjects;
