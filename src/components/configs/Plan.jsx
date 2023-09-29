import { useState } from "react";
import useBusinesses from "../../hooks/api/useBusinesses";
import { timing } from "../../utils/vars";
import { Form, FormInput, Submit } from "../form";
import FormSelect from "../form/FormSelect";
import CheckBox from "../CheckBox";

function Plan(props) {
  const [refundable, setRefundable] = useState(false);
  const { addPlan, isLoading } = useBusinesses();
  return (
    <div>
      <h2>Add Plan</h2>
      <br />
      <div>
        <Form
          initialValues={{
            value: "",
            duration: "",
            amount: "",
            durationInDays: "",
          }}
          onSubmit={(v) =>
            addPlan({
              amount: v.amount,
              durationInDays: v.durationInDays,
              refundable,
              fee: {
                value: v.value,
                duration: v.duration,
              },
            })
          }
        >
          <div className="inputs">
            <FormInput placeholder={"Subscription Fee"} name="value" />
            <FormInput placeholder={"Security Deposite"} name="amount" />
          </div>
          <div className="inputs">
            <FormSelect
              placeholder="Subscription Timing"
              options={Object.values(timing).map((c) => ({
                value: c,
                label: c,
              }))}
              name="duration"
            />
            <FormInput
              placeholder={"Duration in Days"}
              name="durationInDays"
              textClassName="capitalize"
            />
          </div>

          <div className="flex">
            <span>Refundable</span>
            <CheckBox onChange={setRefundable} value={refundable} />
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
    </div>
  );
}

export default Plan;
