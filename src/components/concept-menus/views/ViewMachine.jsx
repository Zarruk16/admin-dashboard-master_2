import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import { Form, FormInput, Submit } from "../../../components/form";
import ImagePicker from "../../../components/ImagePicker";
import useBusinesses from "../../../hooks/api/useBusinesses";
import { conceptSchema } from "../../../validators/icart";

export default function ViewMachine() {
  const {
    state: { data },
  } = useLocation();
  const [selectedImage, setSelectedImage] = useState(null);
  const { updateConcept, isLoading } = useBusinesses();

  return (
    <div>
      <h2>View Machine</h2>
      <br />
      <Form
        validationSchema={conceptSchema}
        onSubmit={(v) => {}}
        initialValues={{
          name: data.name,
          price: data.price,
          description: data.description,
        }}
      >
        <FormInput name="name" placeholder="Name" />
        <FormInput name="price" type="number" placeholder="Price" />
        <FormInput name="description" placeholder="Description" />

        <ImagePicker onSelect={setSelectedImage} placeholder="Upload Image" />
        <br />
        <Submit
          loading={isLoading}
          disabled={isLoading}
          className="btn-submit"
          title="Save and Update"
        />
      </Form>
    </div>
  );
}
