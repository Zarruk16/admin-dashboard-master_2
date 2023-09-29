import React, { useState } from "react";
import { Form, FormInput, Submit } from "../../form";
import useOperations from "../../../hooks/api/useOperations";
import { useLocation } from "react-router-dom";
import CheckBox from "../../CheckBox";
import FormSelect from "../../form/FormSelect";
import { timing } from "../../../utils/vars";
import useBusinesses from "../../../hooks/api/useBusinesses";

export default function ViewPlans() {
  const {
    state: { data },
  } = useLocation();
  const [checked, setChecked] = useState(data.active);
  const [refundable, setRefundable] = useState(data.refundable);
  const { updatePlan, isLoading } = useBusinesses();

  return (
    <div>
      <h2>View Plan</h2>
      <br />
      <h3 className="t-blue capitalize">{data.name}</h3>
      <br />
      <div>
        <Form
          initialValues={{
            value: data.fee.value,
            duration: data.fee.duration,
            amount: data.amount,
            durationInDays: data.durationInDays,
          }}
          onSubmit={(v) =>
            updatePlan(
              {
                amount: v.amount,
                durationInDays: v.durationInDays,
                active: checked,
                refundable,
                fee: {
                  value: v.value,
                  duration: v.duration,
                },
              },
              data._id
            )
          }
        >
          <div className="inputs">
            <FormInput placeholder={"Subscription Fee"} name="value" />
            <FormInput placeholder={"Security Deposite"} name="amount" />
          </div>
          <div className="inputs">
            <FormSelect
              placeholder="Subscrition Timing"
              options={Object.values(timing).map((c) => ({
                value: c,
                label: c,
              }))}
              name="duration"
              initialValue={data.fee.duration}
            />
            <FormInput
              placeholder={"Duration in Days"}
              name="durationInDays"
              textClassName="capitalize"
            />
          </div>
          <div className="flex">
            <span>Active</span>
            <CheckBox onChange={setChecked} value={checked} />
            <br />
            <br />
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
