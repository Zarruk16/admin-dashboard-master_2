import { useState } from "react";
import useBusinesses from "../../hooks/api/useBusinesses";
import { timing } from "../../utils/vars";
import { Form, FormInput, Submit } from "../form";
import FormSelect from "../form/FormSelect";
import ImagePicker from "../ImagePicker";
import { MenuSchema } from "../../validators/icart";

function Menu(props) {
  const [selectedImage, setSelectedImage] = useState(null);
  const { addMenu, isLoading } = useBusinesses();
  return (
    <div>
      <h2>New Menu</h2>
      <br />
      <Form
        validationSchema={MenuSchema}
        onSubmit={(v) =>
          addMenu(
            {
              name: v.name,
              price: v.price,
            },
            selectedImage
          )
        }
        initialValues={{ name: "", price: "" }}
      >
        <FormInput name="name" placeholder="Name" />
        <FormInput name="price" type="number" placeholder="Price" />

        <ImagePicker onSelect={setSelectedImage} placeholder="Upload Image" />
        <br />
        <Submit loading={isLoading} className="btn-submit" title="Save" />
      </Form>
    </div>
  );
}

export default Menu;
