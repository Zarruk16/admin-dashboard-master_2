import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import { Form, FormInput, Submit } from "../../../components/form";
import ImagePicker from "../../../components/ImagePicker";
import useBusinesses from "../../../hooks/api/useBusinesses";
import { ingredientsSchema } from "../../../validators/icart";

export default function ViewIngredients() {
  const {
    state: { data },
  } = useLocation();
  const [selectedImage, setSelectedImage] = useState(null);
  const { isLoading } = useBusinesses();

  return (
    <div>
      <h2>View Ingredients</h2>
      <br />
      <Form
        validationSchema={ingredientsSchema}
        onSubmit={(v) => {
          // updateConcept(
          //   {
          //     name: v.name,
          //     price: v.price,
          //   },
          //   selectedImage,
          //   data._id
          // );
        }}
        initialValues={{
          name: data.name,
          price: data.price,
          unit: data.unit,
        }}
      >
        <FormInput name="name" placeholder="Name" />
        <FormInput name="unit" placeholder="Unit" />
        <FormInput name="price" type="number" placeholder="Price" />

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
