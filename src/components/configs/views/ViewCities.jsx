import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import useOperations from "../../../hooks/api/useOperations";
import CheckBox from "../../CheckBox";
import { Form, FormInput, Submit } from "../../form";

export default function ViewCities() {
  const {
    state: { data },
  } = useLocation();
  const [checked, setChecked] = useState(data.isActive);
  const { updateCity, isLoading } = useOperations();
  return (
    <div>
      <h2>View City</h2>
      <br />
      <h3 className="t-blue capitalize">{data.name}</h3>
      <br />
      <div>
        <Form
          initialValues={{ country: data.country, name: data.name }}
          onSubmit={(v) => updateCity({ ...v, isActive: checked }, data._id)}
        >
          <div className="inputs">
            <FormInput placeholder={"Country"} name="country" readOnly={true} />
          </div>
          <div className="inputs">
            <FormInput
              placeholder={"City"}
              name="name"
              readOnly={true}
              textClassName="capitalize"
            />
          </div>
          <div className="flex">
            <span>Active</span>
            <CheckBox onChange={setChecked} value={checked} />
            <br />
            <br />
          </div>
          <Submit
            loading={isLoading}
            disabled={isLoading}
            className="btn-submit"
            title="Submit"
          />
        </Form>
      </div>
    </div>
  );
}
