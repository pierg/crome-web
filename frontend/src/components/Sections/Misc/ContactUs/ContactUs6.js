import React from "react";
import PropTypes from "prop-types";

// components
import Heading2 from "../../../../components/Headings/Heading2.js";
import CardContactUsHorizontal from "../../../../components/Cards/Misc/CardContactUsHorizontal.js";

export default function ContactUs6({
  heading2,
  map,
  card,
  latitude,
  longitude,
}) {
  const mapRef = React.useRef(null);
  React.useEffect(() => {
    let google = window.google;
    let map = mapRef.current;
    let lat = map.getAttribute("data-lat");
    let lng = map.getAttribute("data-lng");
    const myLatlng = new google.maps.LatLng(lat, lng);
    const mapOptions = {
      ...map,
    };

    map = new google.maps.Map(map, mapOptions);

    const marker = new google.maps.Marker({
      position: myLatlng,
      map: map,
      animation: google.maps.Animation.DROP,
      title: "Notus PRO React!",
    });

    const contentString =
      '<div className="info-window-content"><h2>Notus PRO React</h2>' +
      "<p>A premium UI Kit and Admin for Tailwind CSS and React.</p></div>";

    const infowindow = new google.maps.InfoWindow({
      content: contentString,
    });

    google.maps.event.addListener(marker, "click", function () {
      infowindow.open(map, marker);
    });
  });
  return (
    <>
      <div className="py-20 relative bg-blueGray-900">
        <div
          ref={mapRef}
          data-lat={latitude}
          data-lng={longitude}
          className="w-full absolute max-h-700-px h-full"
        ></div>
        <div className="container mx-auto px-4 mt-64">
          {heading2 && <Heading2 {...heading2} />}
          <div className="flex flex-wrap -mx-4">
            <div className="m-auto px-4 relative w-full">
              <CardContactUsHorizontal {...card} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

ContactUs6.defaultProps = {
  card: {},
  map: {},
  heading2: null,
};
ContactUs6.propTypes = {
  // prop to pass to the Heading2 component
  heading2: PropTypes.object,
  // Object representing the options you can send to the googlemaps
  // Read more here: https://developers.google.com/maps/documentation/javascript/reference/map#MapOptions
  map: PropTypes.object,
  // array of props for the CardContactUsHorizontal component
  card: PropTypes.object,
  latitude: PropTypes.string,
  longitude: PropTypes.string,
};
