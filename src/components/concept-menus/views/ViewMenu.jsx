import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Form, FormInput, Submit } from "../../../components/form";
import FormSelect from "../../../components/form/FormSelect";
import ImagePicker from "../../../components/ImagePicker";
import useBusinesses from "../../../hooks/api/useBusinesses";
import { currencyFormatter } from "../../../utils/func";
import { links } from "../../../utils/routes";
import svg from "../../../utils/svg";
import { conceptsAndMenus, timing } from "../../../utils/vars";
import { conceptSchema } from "../../../validators/icart";
import Table from "../../table/Table";

export default function ViewMenu() {
  const {
    state: { data },
  } = useLocation();
  const navigate = useNavigate();
  const [selectedImage, setSelectedImage] = useState(null);
  const { isLoading, getMenuIngredients, menuIngredients } = useBusinesses();
  const ingshead = [
    {
      title: "#",
      target: "#",
      className: "count",
    },
    {
      title: "Name",
      target: "name",
    },
    {
      title: "Price",
      target: "price",
      render: (v) => currencyFormatter(v),
    },
    {
      title: "Status",
      target: "active",
      render: (value) => (
        <span className={`status ${value}`}>
          {value ? "ACTIVE" : "NOT ACTIVE"}
        </span>
      ),
    },
    {
      title: "Actions",
      target: "_id",
      render: (id) => (
        <button
          className="action flex align-center"
          onClick={() =>
            navigate(
              links.conceptsAndMenus.view(conceptsAndMenus.ingredient, id),
              {
                state: { data: menuIngredients.filter((a) => a._id == id)[0] },
              }
            )
          }
        >
          {svg.eye()} <span className="f700">VIEW</span>
        </button>
      ),
    },
  ];
  useEffect(() => {
    getMenuIngredients(data._id);
  }, []);

  return (
    <div>
      <h2>View Menu</h2>
      <br />
      <Form
        validationSchema={conceptSchema}
        onSubmit={(v) => {}}
        initialValues={{
          name: data.name,
          price: data.price,
        }}
      >
        <FormInput name="name" placeholder="Name" />
        <FormInput name="price" type="number" placeholder="Price" />

        <ImagePicker onSelect={setSelectedImage} placeholder="Upload Image" />
        <br />
        <Submit
          loading={isLoading}
          disabled={isLoading}
          className="btn-submit"
          title="Save and Update"
        />
        <br />
        <br />
        <Table
          showSearch={false}
          head={ingshead}
          title="Menu Ingredents"
          btn={{
            title: "Add",
            className: "btn-view",
            onClick: () =>
              navigate(
                links.conceptsAndMenus.append(
                  conceptsAndMenus.ingredient,
                  data._id
                ),
                {
                  state: { id: data._id, data: menuIngredients },
                }
              ),
          }}
          data={menuIngredients}
        />
      </Form>
    </div>
  );
}
