import { useEffect, useRef, useState } from "react";
import useOperations from "../../hooks/api/useOperations";
import ImagePicker from "../ImagePicker";
import { Form, FormInput, Submit } from "../form";
import FormSelect from "../form/FormSelect";
import { locationSchema } from "../../validators/operations";
import useLocations from "../../hooks/api/useLocations";
import LocationPicker from "../map/Picker";

function Location(props) {
  const [location, setLocation] = useState(null);
  const [selectedImage, setSelectedImage] = useState(null);
  const { cities, getCities } = useOperations();
  const { isLoading, addLocations } = useLocations();
  const containerRef = useRef(null);
  const [width, setWidth] = useState(0);

  useEffect(() => {
    const handler = () => setWidth(containerRef.current.clientWidth);
    handler();
    window.addEventListener("resize", handler);
    return () => window.removeEventListener("resize", handler);
  }, []);

  useEffect(() => {
    getCities();
    // eslint-disable-next-line
  }, []);

  return (
    <div>
      <br />
      <Form
        validationSchema={locationSchema}
        onSubmit={(v) => addLocations(v, selectedImage)}
        initialValues={{ label: "", city: "", latitude: "", longitude: "" }}
      >
        <div className="inputs">
          <FormInput name="label" placeholder="Label" />
          <FormSelect
            loading
            name="city"
            options={cities.map((c) => ({ value: c._id, label: c.name }))}
            placeholder="City"
          />
        </div>
        <ImagePicker onSelect={setSelectedImage} placeholder="Upload Image" />
        <br />
        <div className="inputs">
          <FormInput
            value={location?.lat}
            name="latitude"
            type="number"
            placeholder="Latitude"
          />
          <FormInput
            value={location?.lng}
            name="longitude"
            type="number"
            placeholder="Longitude"
          />
        </div>
        <div ref={containerRef} className="picker-location">
          <LocationPicker
            containerStyle={{ width, height: 400 }}
            onChange={setLocation}
          />
        </div>
        <Submit loading={isLoading} className="btn-submit" title="Save" />
      </Form>
    </div>
  );
}

export default Location;
