import { useState } from "react";
import useBusinesses from "../../hooks/api/useBusinesses";
import { Form, FormInput, Submit } from "../form";
import ImagePicker from "../ImagePicker";
import { ingredientsSchema } from "../../validators/icart";

function Concept(props) {
  const [selectedImage, setSelectedImage] = useState(null);
  const { addIngredient, isLoading } = useBusinesses();
  return (
    <div>
      <h2>New Ingredient</h2>
      <br />
      <Form
        validationSchema={ingredientsSchema}
        onSubmit={(v) =>
          addIngredient(
            {
              name: v.name,
              price: v.price,
              unit: v.unit,
            },
            selectedImage
          )
        }
        initialValues={{ name: "", price: "", unit: "" }}
      >
        <FormInput name="name" placeholder="Name" />
        <FormInput name="price" type="number" placeholder="Price" />
        <FormInput name="unit" placeholder="Unit" />

        <ImagePicker onSelect={setSelectedImage} placeholder="Upload Image" />
        <br />
        <Submit
          loading={isLoading}
          className="btn-submit"
          title="Save"
          disabled={isLoading}
        />
      </Form>
    </div>
  );
}

export default Concept;
