import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { links } from "../../../utils/routes";
import svg from "../../../utils/svg";
import { models } from "../../../utils/vars";
import Table from "../../table/Table";

export default function LocationList() {
  const navigate = useNavigate();
  const {
    state: { data },
  } = useLocation();
  const head = [
    {
      title: "#",
      target: "#",
      className: "count",
    },
    {
      title: "Label",
      target: "label",
    },
    {
      title: "City",
      target: "city.name",
    },
    {
      title: "Country",
      target: "city.country",
    },
    {
      title: "Latitude",
      target: "coords.lat",
    },
    {
      title: "Longitude",
      target: "coords.lng",
    },
    {
      title: "Status",
      target: "status",
      render: (value) => (
        <span className={`status ${value}`}>{value.toUpperCase()}</span>
      ),
    },
    {
      title: "Actions",
      target: "_id",
      render: (id) => (
        <button
          className="action flex align-center"
          onClick={() =>
            navigate(links.icartsAndLocations.view(models.location, id), {
              state: { data: data.filter((a) => a._id == id)[0] },
            })
          }
        >
          {svg.eye()} <span className="f700">VIEW</span>
        </button>
      ),
    },
  ];
  return (
    <div>
      <Table title="Locations" data={data} head={head} />
    </div>
  );
}
