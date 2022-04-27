import "components/Cards/Card.js"
import "components/Cards/CardBody.js"
import "components/Cards/CardFooter.js"
import "components/Cards/CardHeader.js"
import "react"
import Card
import CardBody
import CardFooter
import CardHeader
import React

function CardExample() {
  return (
    <Card>
      <CardHeader>
        The CardHeader is great for a small description of the below details
      </CardHeader>
      <CardBody>And here you would add your main content</CardBody>
      <CardFooter>This is your card footer content</CardFooter>
    </Card>
  );
}

const props = `// no props for this, as this is an view component`;
const description =
  "And here is a full example with all of the above. As you can see, now it makes more sense.";

const preview = `import React from "react";

// @notus-pro/react
import "@notus-pro/react/Card"
import "@notus-pro/react/CardBody"
import "@notus-pro/react/CardFooter"
import "@notus-pro/react/CardHeader"
import Card
import CardBody
import CardFooter
import CardHeader

export default function Example() {
  return (
    <>
      <Card>
        <CardHeader>
          The CardHeader is great for a small description of the below details
        </CardHeader>
        <CardBody>
          And here you would add your main content
        </CardBody>
        <CardFooter>
          This is your card footer content
        </CardFooter>
      </Card>
    </>
  );
}`;

const docsObjects = {
  component: CardExample,
  componentName: "CardExample",
  description,
  props,
  preview,
};
export default docsObjects;
