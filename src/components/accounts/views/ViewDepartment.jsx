
import { useLocation } from "react-router-dom";
import { departmentSchema } from "../../../validators/departments";
import { Form, FormInput, Submit } from "../../form";
import { useState } from "react";
import CheckBox from "../../CheckBox";
import useDepartments from "../../../hooks/api/useDepartments";

function ViewDepartment(props) {
  const {
    state: { data },
  } = useLocation();
  const [active, setActive] = useState(data.active);
  const { isLoading, updateDepartment } = useDepartments();
  const handleSubmit = (d) => updateDepartment({ ...d, active }, data._id);
  return (
    <div>
      <h2>View Department</h2>
      <br />
      <br />
      <Form
        validationSchema={departmentSchema}
        initialValues={{ name: data.name }}
        onSubmit={handleSubmit}
      >
        <FormInput name="name" placeholder="Name" />
        <div className="flex">
          <span>Active</span>
          <CheckBox onChange={setActive} value={active} />
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
    </div>
  );
}

export default ViewDepartment;
