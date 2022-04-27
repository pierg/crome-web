import React from "react";

import Card from "components/Cards/Card.js";
import CardHeader from "components/Cards/CardHeader.js";
import CardBody from "components/Cards/CardBody.js";
import CardFooter from "components/Cards/CardFooter.js";

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
import Card from "@notus-pro/react/Card";
import CardHeader from "@notus-pro/react/CardHeader";
import CardBody from "@notus-pro/react/CardBody";
import CardFooter from "@notus-pro/react/CardFooter";

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
