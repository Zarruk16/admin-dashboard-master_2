import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { links } from "../../../utils/routes";
import svg from "../../../utils/svg";
import { models } from "../../../utils/vars";
import Table from "../../table/Table";
import AccountPreview from "../../AccountPreview";

export default function KioskList() {
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
      title: "ID",
      target: "id",
    },
    {
      title: "Location",
      target: "location",
      render: (l) => (l ? `${l.label}` : ""),
    },
    {
      title: "Current Owner",
      target: [
        "currentOwner.profileImage",
        "currentOwner.firstName",
        "currentOwner.lastName",
      ],
      render: (value) => (
        <AccountPreview
          user={{
            profileImage: value[0],
            firstName: value[1],
            lastName: value[2],
          }}
        />
      ),
    },
    {
      title: "Is Active",
      target: "active",
      render: (value) => (
        <span className={`status ${value}`}>
          {value.toString().toUpperCase()}
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
            navigate(links.icartsAndLocations.view(models.kiosk, id), {
              state: { data: data.filter((k) => k._id == id)[0] },
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
      <Table title="Kiosks" data={data} head={head} />
    </div>
  );
}
