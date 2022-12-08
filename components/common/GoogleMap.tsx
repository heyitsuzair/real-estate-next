import React from "react";
import GoogleMapReact from "google-map-react";

const GoogleMap = () => {
  // API KEY -------------------------->
  const API_KEY = process.env.NEXT_PUBLIC_GOOGLE_API;
  // API KEY -------------------------->

  // Props For Map ------------------->
  const defaultProps = {
    center: {
      lat: 10.99835602,
      lng: 77.01502627,
    },
    zoom: 11,
  };
  // Props For Map ------------------->

  // ?Function To Render Marker ------------------>
  const renderMarkers = (map: any, maps: any) => {
    let marker = new maps.Marker({
      position: defaultProps.center,
      map,
      title: "Hello World!",
    });
  };
  // !Function To Render Marker ------------------>

  return (
    // Important! Always set the container height explicitly
    <div style={{ height: "40vh", width: "100%" }}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: API_KEY }}
        defaultCenter={defaultProps.center}
        defaultZoom={defaultProps.zoom}
        onGoogleApiLoaded={({ map, maps }) => renderMarkers(map, maps)}
      ></GoogleMapReact>
    </div>
  );
};
export default GoogleMap;
