import { useState } from "react";
import useBusinesses from "../../hooks/api/useBusinesses";
import { Form, FormInput, Submit } from "../form";
import ImagePicker from "../ImagePicker";
import { machineSchema } from "../../validators/icart";

function Machine(props) {
  const [selectedImage, setSelectedImage] = useState(null);
  const { addMachine, isLoading } = useBusinesses();
  return (
    <div>
      <h2>New Machine</h2>
      <br />
      <Form
        validationSchema={machineSchema}
        onSubmit={(v) =>
          addMachine(
            {
              name: v.name,
              price: v.price,
              description: v.description,
            },
            selectedImage
          )
        }
        initialValues={{ name: "", price: "", description: "" }}
      >
        <FormInput name="name" placeholder="Name" />
        <FormInput name="price" type="number" placeholder="Price" />
        <FormInput name="description" placeholder="Description" />

        <ImagePicker onSelect={setSelectedImage} placeholder="Upload Image" />
        <br />
        <Submit loading={isLoading} className="btn-submit" title="Save" />
      </Form>
    </div>
  );
}

export default Machine;
