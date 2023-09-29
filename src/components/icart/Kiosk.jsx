import { useState } from "react";
import useBusinesses from "../../hooks/api/useBusinesses";
import { kioskSchema } from "../../validators/icart";
import ImagePicker from "../ImagePicker";
import { Form, FormInput, Submit } from "../form";

function Kiosk(props) {
  const [selectedImage, setSelectedImage] = useState(null);
  const { isLoading, addKiosk } = useBusinesses();
  return (
    <div>
      <h2>New Kiosk</h2>
      <br />
      <Form
        validationSchema={kioskSchema}
        onSubmit={(d) => addKiosk(d, selectedImage)}
        initialValues={{ id: "" }}
      >
        <FormInput name="id" placeholder="Kiosk ID" />
        <ImagePicker onSelect={setSelectedImage} placeholder="Upload Image" />
        <br />
        <Submit loading={isLoading} className="btn-submit" title="Save" />
      </Form>
    </div>
  );
}

export default Kiosk;
