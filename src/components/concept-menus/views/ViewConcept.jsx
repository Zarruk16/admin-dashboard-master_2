import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

import svg from "../../../utils/svg";
import Table from "../../table/Table";
import useBusinesses from "../../../hooks/api/useBusinesses";
import ImagePicker from "../../../components/ImagePicker";
import FormSelect from "../../../components/form/FormSelect";

import { conceptsAndMenus, timing } from "../../../utils/vars";
import { currencyFormatter } from "../../../utils/func";
import { conceptSchema } from "../../../validators/icart";
import { Form, FormInput, Submit } from "../../../components/form";
import { links } from "../../../utils/routes";
import CheckBox from "../../CheckBox";

export default function ViewConcept() {
  const {
    state: { data },
  } = useLocation();
  const [isActive, setIsActive] = useState(data.active);
  const [selectedImage, setSelectedImage] = useState(null);
  const navigate = useNavigate();
  const {
    updateConcept,
    isLoading,
    getConceptMenus,
    conceptMenus,
    getConceptMachines,
    conceptMachines,
  } = useBusinesses();

  const machinesHead = [
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
      title: "Actions",
      target: "_id",
      render: (id) => (
        <button
          className="action flex align-center"
          onClick={() => {
            navigate(
              links.conceptsAndMenus.view(conceptsAndMenus.machine, id),
              {
                state: { data: conceptMachines.filter((a) => a._id == id)[0] },
              }
            );
          }}
        >
          {svg.eye()} <span className="f700">VIEW</span>
        </button>
      ),
    },
  ];

  const menushead = [
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
            navigate(links.conceptsAndMenus.view(conceptsAndMenus.menu, id), {
              state: { data: conceptMenus.filter((a) => a._id == id)[0] },
            })
          }
        >
          {svg.eye()} <span className="f700">VIEW</span>
        </button>
      ),
    },
  ];

  useEffect(() => {
    getConceptMenus(data._id);
    getConceptMachines(data._id);
  }, []);

  return (
    <div>
      <h2>View Concept</h2>
      <br />
      <Form
        validationSchema={conceptSchema}
        onSubmit={(v) => {
          updateConcept(
            {
              name: v.name,
              rio: { value: v.rio, duration: v.rioDuration },
              description: v.description,
              active: isActive,
            },
            selectedImage,
            data._id
          );
        }}
        initialValues={{
          rio: data.rio.value,
          name: data.name,
          rioDuration: data.description,
          description: data.description,
        }}
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
            initialValue={data.rio.duration}
          />
        </div>
        <div className="flex">
          <label>Active</label>
          <CheckBox onChange={setIsActive} value={isActive} />
          <br />
          <br />
        </div>
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
          head={machinesHead}
          title="Concept Machines"
          btn={{
            title: "Add",
            className: "btn-view",
            disabled: isLoading,
            onClick: () =>
              navigate(
                links.conceptsAndMenus.append(
                  conceptsAndMenus.machine,
                  data._id
                ),
                {
                  state: { id: data._id, data: conceptMachines },
                }
              ),
          }}
          data={conceptMachines}
        />
        <br />
        <br />

        <Table
          showSearch={false}
          head={menushead}
          title="Concept Menus"
          btn={{
            title: "Add",
            className: "btn-view",
            disabled: isLoading,
            onClick: () =>
              navigate(
                links.conceptsAndMenus.append(conceptsAndMenus.menu, data._id),
                {
                  state: { id: data._id, data: conceptMenus },
                }
              ),
          }}
          data={conceptMenus}
        />
      </Form>
    </div>
  );
}
