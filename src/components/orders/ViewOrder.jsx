import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

import useBusinesses from "../../hooks/api/useBusinesses";
import { currencyFormatter } from "../../utils/func";
import { orderStatus } from "../../utils/vars";
import { Form, FormInput, Submit } from "../form";
import FormSelect from "../form/FormSelect";
import Table from "../table/Table";

export default function ViewOrder() {
  const {
    state: { data },
  } = useLocation();
  const [selectedImage, setSelectedImage] = useState(null);
  const { isLoading, updateOrderStatus, orderItems, getOrderItems } =
    useBusinesses();
  const tableHead = [
    {
      title: "#",
      target: "#",
      className: "count",
    },
    {
      title: "item",
      target: "item.name",
      render: (value) => <span className="f700">{value}</span>,
    },
    {
      title: "Price Stamp",
      target: "priceStamp",
      render: (v) => currencyFormatter(v || 0),
    },
    {
      title: "Quantity",
      target: "quantity",
      render: (v) => <span className="f700">{v}</span>,
    },
    {
      title: "Total",
      target: ["priceStamp", "quantity"],
      render: (v) => currencyFormatter(v[0] * v[1] || 0),
    },
  ];

  useEffect(() => {
    getOrderItems(data._id);
  }, []);

  return (
    <div>
      <h2>View Concept</h2>
      <br />
      <Form
        onSubmit={(v) => {
          updateOrderStatus(data._id, v.status);
        }}
        initialValues={{
          status: data.status,
        }}
      >
        <FormInput
          name="name"
          readOnly
          placeholder="Name"
          value={`${data.user?.firstName} ${data.user?.lastName}`}
        />
        {/* <ImagePicker onSelect={setSelectedImage} placeholder="Upload Image" />
        <br /> */}
        <FormInput
          name="Amount"
          readOnly
          placeholder="Amount Paid"
          value={currencyFormatter(data.total)}
        />
        <div className="inputs">
          <FormSelect
            name={"status"}
            options={Object.values(orderStatus).map((c) => ({
              value: c,
              label: c,
            }))}
            initialValue={data.status}
          />
        </div>

        <Submit
          loading={isLoading}
          disabled={isLoading}
          className="btn-submit"
          title="Save and Update"
        />
      </Form>
      <br />
      <br />
      <Table head={tableHead} title={"Order Items"} data={orderItems} />
    </div>
  );
}
