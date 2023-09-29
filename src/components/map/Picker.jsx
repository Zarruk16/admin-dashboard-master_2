import { useEffect, useState } from "react";
import Map from "./Map";

function LocationPicker({ initialLocation, onChange, ...props }) {
  const [selectedLocation, setSelectedLocation] = useState(null);

  useEffect(() => {
    if (initialLocation) {
      setSelectedLocation(initialLocation.coords);
      return;
    }
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setSelectedLocation({
            lat: position.coords.latitude,
            lng: position.coords.longitude,
          });
        },
        (error) => {
          console.error(error.message);
        }
      );
    }
    // eslint-disable-next-line
  }, []);

  const handleMapClick = (_, __, clickEvent) => {
    setSelectedLocation({
      lat: clickEvent.latLng.lat(),
      lng: clickEvent.latLng.lng(),
    });
  };

  useEffect(() => {
    if (selectedLocation && typeof onChange === "function")
      onChange(selectedLocation);
    // eslint-disable-next-line
  }, [selectedLocation]);

  return (
    <Map
      zoom={14}
      initialCenter={
        initialLocation?.coords ?? { lat: 9.060352, lng: 7.4678272 }
      }
      onClick={handleMapClick}
      locations={selectedLocation ? [selectedLocation] : []}
      {...props}
    />
  );
}

export default LocationPicker;
