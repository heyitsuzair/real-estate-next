import React from "react";
import { GoogleMap, useJsApiLoader, Marker } from "@react-google-maps/api";

interface PropTypes {
  height: string;
  center: {
    lat: number;
    lng: number;
  };
  zoom: number;
}

const Map = ({ height, center, zoom }: PropTypes) => {
  // API KEY -------------------------->
  const API_KEY = process.env.NEXT_PUBLIC_GOOGLE_API;
  // API KEY -------------------------->

  // ?Map Configuration -------------------------------->

  const containerStyle = {
    width: "100%",
    height: height,
  };

  //eslint-disable-next-line
  const [map, setMap] = React.useState(null);

  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: API_KEY,
  });

  const onLoad = React.useCallback(
    function callback(map: any) {
      // const bounds = new window.google.maps.LatLngBounds(center);
      // map.fitBounds(bounds);

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
      zoom={zoom}
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
