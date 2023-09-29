import { useState } from "react";
import useBusinesses from "../../hooks/api/useBusinesses";
import { timing } from "../../utils/vars";
import { Form, FormInput, Submit } from "../form";
import FormSelect from "../form/FormSelect";
import ImagePicker from "../ImagePicker";
import { conceptSchema } from "../../validators/icart";

function Concept(props) {
  const [selectedImage, setSelectedImage] = useState(null);
  const { addConcept, isLoading } = useBusinesses();
  return (
    <div>
      <h2>New Concept</h2>
      <br />
      <Form
        validationSchema={conceptSchema}
        onSubmit={(v) =>
          addConcept(
            {
              name: v.name,
              rio: { value: v.rio, duration: v.rioDuration },
              description: v.description,
            },
            selectedImage
          )
        }
        initialValues={{ rio: "", name: "", rioDuration: "", description: "" }}
      >
        <FormInput name="name" placeholder="Name" />
        <ImagePicker onSelect={setSelectedImage} placeholder="Upload Image" />
        <br />
        <FormInput name="description" placeholder="Concept Description" />
        <div className="inputs">
          <FormInput name="rio" type="number" placeholder="RIO" />
          <FormSelect
            name="rioDuration"
            placeholder="RIO Duration"
            options={Object.values(timing).map((t) => ({ value: t, label: t }))}
          />
        </div>
        <Submit loading={isLoading} className="btn-submit" title="Save" />
      </Form>
    </div>
  );
}

export default Concept;
