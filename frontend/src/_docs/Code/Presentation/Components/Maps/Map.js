import Map from "components/Maps/Map.js";
import passProps from "_texts/presentation/maps/map.js";
const props = `Map.defaultProps = {
  options: {},
  latitude: "40.748817",
  longitude: "-73.985428"
};

Map.propTypes = {
  // Object representing the options you can send to the googlemaps
  // Read more here: https://developers.google.com/maps/documentation/javascript/reference/map#MapOptions
  options: PropTypes.object,
  latitude: PropTypes.string,
  longitude: PropTypes.string,
};`;
const description = "";

const preview = `import React from "react";

// @notus-pro/react
import Map from "@notus-pro/react/Map";

const props = ${JSON.stringify(passProps)}

export default function Example() {
  return (
    <>
      <Map {...props} />
    </>
  );
}`;

const docsObjects = {
  component: Map,
  componentName: "Map",
  description,
  props,
  preview,
  passProps,
};
export default docsObjects;
