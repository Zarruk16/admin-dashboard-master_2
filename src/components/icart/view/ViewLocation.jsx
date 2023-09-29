import React from "react";
import { useLocation } from "react-router-dom";
import LocationPicker from "../../../components/map/Picker";
import { useEffect, useRef, useState } from "react";
import useOperations from "../../../hooks/api/useOperations";
import { locationSchema } from "../../../validators/operations";
import useLocations from "../../../hooks/api/useLocations";
import { Form, FormInput, Submit } from "../../../components/form";
import ImagePicker from "../../../components/ImagePicker";
import FormSelect from "../../../components/form/FormSelect";
import CheckBox from "../../../components/CheckBox";

export default function ViewLocation() {
  const {
    state: { data },
  } = useLocation();

  const { enableLocation, disableLocation } = useLocations();
  const { cities, getCities } = useOperations();

  const [checked, setchecked] = useState(data.status === "active");
  const [location, setLocation] = useState(data.coords);
  const [selectedImage, setSelectedImage] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [width, setWidth] = useState(0);
  const containerRef = useRef(null);

  useEffect(() => {
    setLocation(data.coords);
    getCities();
    const handler = () => setWidth(containerRef.current.clientWidth);
    handler();
    window.addEventListener("resize", handler);
    return () => window.removeEventListener("resize", handler);
  }, []);

  const updateState = () => {
    setchecked(!checked);
  };

  const handleSubmit = (id) => {
    setIsLoading(true);
    if (checked) {
      return enableLocation(id);
    } else {
      return disableLocation(id);
    }
  };

  return (
    <div>
      <h2>View Location</h2>
      <br />
      <h3 className="t-blue">{data.label}</h3>

      <div>
        <br />
        <Form
          validationSchema={locationSchema}
          onSubmit={(v) => handleSubmit(v._id)}
          initialValues={{
            _id: data._id,
            label: data.label,
            city: data.city.name,
            latitude: location.lat,
            longitude: location.lng,
          }}
        >
          <div className="inputs">
            <FormInput name="label" placeholder="Label" />
            <FormSelect
              loading
              name="city"
              initialValue={data.city._id}
              options={cities.map((c) => ({ value: c._id, label: c.name }))}
              placeholder="City"
            />
          </div>
          <ImagePicker onSelect={setSelectedImage} placeholder="Upload Image" />
          <br />
          <div className="inputs">
            <FormInput
              name="latitude"
              type="number"
              placeholder="Latitude"
              value={location.lat}
            />
            <FormInput
              name="longitude"
              type="number"
              placeholder="Longitude"
              value={location.lng}
            />
          </div>
          <div ref={containerRef} className="picker-location">
            <LocationPicker
              initialLocation={data}
              containerStyle={{ width, height: 400 }}
              onChange={setLocation}
            />
          </div>
          <div className="flex">
            <label>Available</label>
            <CheckBox onChange={updateState} value={checked} />
            <br />
            <br />
          </div>
          <Submit
            loading={isLoading}
            disabled={isLoading}
            className="btn-submit"
            title="Save"
          />
        </Form>
      </div>
    </div>
  );
}
