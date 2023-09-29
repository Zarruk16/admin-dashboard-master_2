
import React from "react";
import Table from "../../table/Table";
import { useNavigate } from "react-router-dom";
import { links } from "../../../utils/routes";
import { acctTypes } from "../../../utils/vars";
import svg from "../../../utils/svg";

function Departments({ initialLimit, data }) {
  const navigate = useNavigate();
  const head = [
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
      title: "Active",
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
          onClick={() =>
            navigate(links.accounts.view(acctTypes.department, id), {
              state: { data: data.filter((a) => a._id == id)[0] },
            })
          }
          className="action flex align-center"
        >
          {svg.eye()} <span className="f700">VIEW</span>
        </button>
      ),
    },
  ];

  return (
    <div>
      <Table
        btn={
          initialLimit && {
            title: "View All",
            className: "btn-view",
            onClick: () => navigate(links.accounts.list(acctTypes.department)),
          }
        }
        data={data}
        head={head}
        title="Departments"
      />
    </div>
  );
}

export default Departments;
