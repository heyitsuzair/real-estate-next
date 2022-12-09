import React from "react";
import { GoogleMap, useJsApiLoader, Marker } from "@react-google-maps/api";

const containerStyle = {
  width: "100%",
  height: "400px",
};

const Map = () => {
  // API KEY -------------------------->
  const API_KEY = process.env.NEXT_PUBLIC_GOOGLE_API;
  // API KEY -------------------------->

  // Props For Map ------------------->
  const center = {
    lat: 31.5204,
    lng: 74.3587,
  };
  // Props For Map ------------------->

  // ?Map Configuration -------------------------------->
  //eslint-disable-next-line
  const [map, setMap] = React.useState(null);

  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: API_KEY,
  });

  const onLoad = React.useCallback(
    function callback(map: any) {
      const bounds = new window.google.maps.LatLngBounds(center);
      map.fitBounds(bounds);
      setMap(map);
    },
    //eslint-disable-next-line
    []
  );

  const onUnmount = React.useCallback(function callback(map: any) {
    setMap(null);
  }, []);
  // !Map Configuration -------------------------------->

  return isLoaded ? (
    <GoogleMap
      mapContainerStyle={containerStyle}
      center={center}
      zoom={13}
      onLoad={onLoad}
      onUnmount={onUnmount}
    >
      {/* Child components, such as markers, info windows, etc. */}
      <>
        <Marker position={{ lat: center.lat, lng: center.lng }} />
      </>
    </GoogleMap>
  ) : (
    <></>
  );
};
export default Map;
