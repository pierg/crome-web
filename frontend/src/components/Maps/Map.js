import React from "react";
import PropTypes from "prop-types";

export default function Map({ options, latitude, longitude }) {
  const mapRef = React.useRef(null);
  React.useEffect(() => {
    let google = window.google;
    let map = mapRef.current;
    let lat = map.getAttribute("data-lat");
    let lng = map.getAttribute("data-lng");
    const myLatlng = new google.maps.LatLng(lat, lng);
    const mapOptions = {
      ...options,
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
      <div
        ref={mapRef}
        className="relative w-full h-500-px rounded-inherit"
        data-lat={latitude}
        data-lng={longitude}
      />
    </>
  );
}

Map.defaultProps = {
  options: {},
  latitude: "40.748817",
  longitude: "-73.985428",
};

Map.propTypes = {
  // Object representing the options you can send to the googlemaps
  // Read more here: https://developers.google.com/maps/documentation/javascript/reference/map#MapOptions
  options: PropTypes.object,
  latitude: PropTypes.string,
  longitude: PropTypes.string,
};
