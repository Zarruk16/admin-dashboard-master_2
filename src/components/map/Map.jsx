import * as React from "react";
import { GoogleApiWrapper, Map, Marker } from "google-maps-react";
import { defaultMapStyles } from "../../utils/map-styles";
import pin from "../../assets/pin.svg";

function AppMap({
  google,
  zoom = 14,
  dark = false,
  locations = [],
  mapWidth,
  mapHeight,
  styles = defaultMapStyles,
  containerStyle,
  ...props
}) {
  return (
    <Map
      styles={styles}
      containerStyle={containerStyle}
      disableDefaultUI
      style={{
        zIndex: 1,
        borderRadius: 8,
        width: mapWidth,
        height: mapHeight,
      }}
      initialCenter={{ lat: 9.060352, lng: 7.4678272 }}
      google={google}
      zoom={zoom}
      {...props}
    >
      {locations.map((l, idx) => (
        <Marker
          key={idx}
          icon={{
            url: pin,
          }}
          position={l}
        />
      ))}
    </Map>
  );
}

export default GoogleApiWrapper({
  apiKey: "AIzaSyBKHZ5C24eYH-MccKBSniBl3mT5MjBhJYY",
})(AppMap);
