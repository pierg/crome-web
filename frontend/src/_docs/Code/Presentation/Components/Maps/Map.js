import "_texts/presentation/maps/map.js"
import "components/Maps/Map.js"
import Map
import passProps

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
import "@notus-pro/react/Map"
import Map

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
