
import useDepartments from "../../hooks/api/useDepartments";
import { departmentSchema } from "../../validators/departments";
import { Form, FormInput, Submit } from "../form";

function CreateDepartment(props) {
  const { addDepartment, isLoading } = useDepartments();
  return (
    <div>
      <h2>Create Department</h2>
      <br />
      <br />
      <Form
        validationSchema={departmentSchema}
        initialValues={{ name: "" }}
        onSubmit={addDepartment}
      >
        <FormInput name="name" placeholder="Name" />
        <Submit
          loading={isLoading}
          disabled={isLoading}
          className="btn-submit"
          title="Save"
        />
      </Form>
    </div>
  );
}

export default CreateDepartment;
