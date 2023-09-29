import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { Form, FormInput, Submit } from "../../../components/form";
import ImagePicker from "../../../components/ImagePicker";
import useBusinesses from "../../../hooks/api/useBusinesses";
import useLocations from "../../../hooks/api/useLocations";
import useOperations from "../../../hooks/api/useOperations";
import { kioskSchema } from "../../../validators/icart";
import Checkbox from "../../CheckBox";
import FormSelect from "../../form/FormSelect";
import Image from "../../Image";
import Select from "../../Select";
import { statuses } from "../../../utils/vars";

export default function ViewKiosk() {
  const {
    state: { data },
  } = useLocation();
  const [selectedCity, setSelectedCity] = useState(null);
  const [selectedImage, setSelectedImage] = useState(null);
  const { getLocation, locations } = useLocations();
  const [isActive, setIsActive] = useState(data.active);
  const { isLoading: citiesLoading, getCities, cities } = useOperations();
  const { isLoading, updateKiosk } = useBusinesses();

  useEffect(() => {
    getCities();
  }, []);

  useEffect(() => {
    if (selectedCity) getLocation(selectedCity, 100, 1, statuses.active);
  }, [selectedCity]);

  return (
    <div>
      <h2>View Kiosk</h2>
      <br />
      <Form
        validationSchema={kioskSchema}
        onSubmit={(d) => {
          updateKiosk(
            {
              active: isActive,
              id: d.id,
              location: d.location._id,
            },
            data._id,
            selectedImage
          );
        }}
        initialValues={{
          id: data.id,
          location: data.location,
        }}
      >
        <FormInput name="id" placeholder="Kiosk ID" />
        <div className="inputs">
          <Select
            onSelect={setSelectedCity}
            loading={citiesLoading}
            options={cities.map((c) => ({
              value: c._id,
              label: `${c.name} - ${c.country}`,
            }))}
            placeholder="Select City"
          />
          <FormSelect
            name={"location"}
            options={locations.map((c) => ({
              value: c._id,
              label: c.label,
            }))}
            placeholder="Kiosk Location"
          />
        </div>
        <ImagePicker
          initial={data.imageUrl}
          onSelect={setSelectedImage}
          placeholder="Upload Image"
        />
        <br />
        <div className="flex">
          <label>Active</label>
          <Checkbox onChange={setIsActive} value={isActive} />
          <br />
          <br />
        </div>
        <Submit
          loading={isLoading}
          disabled={isLoading}
          className="btn-submit"
          title="Save and Update"
        />
      </Form>
      <div className="card img-card">
        <Image src={data.imageUrl} />
      </div>
    </div>
  );
}
