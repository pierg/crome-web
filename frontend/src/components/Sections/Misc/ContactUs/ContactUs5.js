import React from "react";
import PropTypes from "prop-types";

// components
import Heading3 from "../../../../components/Headings/Heading3.js";
import CardContactUsAddress from "../../../../components/Cards/Misc/CardContactUsAddress.js";

export default function ContactUs5({
  heading3,
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
      '<div class="info-window-content"><h2>Notus PRO React</h2>' +
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
      <div className="relative py-20 overflow-hidden bg-blueGray-900">
        <div
          ref={mapRef}
          data-lat={latitude}
          data-lng={longitude}
          className="w-full block overflow-hidden absolute top-0 left-0 min-h-700-px h-full"
        ></div>
        {heading3 && <Heading3 {...heading3} />}
        <div className="px-4 relative w-full lg:w-6/12 md:w-10/12">
          <div className="py-12">
            <CardContactUsAddress {...card} />
          </div>
        </div>
      </div>
    </>
  );
}

ContactUs5.defaultProps = {
  card: {},
  map: {},
  heading3: null,
};
ContactUs5.propTypes = {
  // prop to pass to the Heading3 component
  heading3: PropTypes.object,
  // Object representing the options you can send to the googlemaps
  // Read more here: https://developers.google.com/maps/documentation/javascript/reference/map#MapOptions
  map: PropTypes.object,
  // array of props for the CardContactUsAddress component
  card: PropTypes.object,
  latitude: PropTypes.string,
  longitude: PropTypes.string,
};
