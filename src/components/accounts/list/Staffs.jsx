import React from "react";
import Table from "../../table/Table";
import { useNavigate } from "react-router-dom";
import { links } from "../../../utils/routes";
import { acctTypes } from "../../../utils/vars";
import svg from "../../../utils/svg";
import AccountPreview from "../../AccountPreview";

function Staffs({ initialLimit }) {
  const data = [
    // {
    //   firstName: "Ismail",
    //   lastName: "Dalhatu",
    //   id: "STF001",
    //   status: "active",
    //   imageUrl: "http://algorizmih.com/img/Ismail.png",
    //   phoneNumber: "+234 90 223 149 73",
    //   gender: "Male",
    //   department: "IT",
    //   email: "test@gmail.com",
    //   gender: "male",
    //   dateOfAppointment: new Date().toISOString(),
    // },
  ];
  const navigate = useNavigate();
  const head = [
    {
      title: "#",
      target: "#",
      className: "count",
    },
    {
      title: "Staff Name",
      target: ["imageUrl", "firstName", "lastName"],
      render: (value) => (
        <AccountPreview
          user={{
            imageUrl: value[0],
            firstName: value[1],
            lastName: value[2],
          }}
        />
      ),
    },

    {
      title: "Staff ID",
      target: "id",
    },
    {
      title: "Gender",
      target: "gender",
    },
    {
      title: "Phone Number",
      target: "phoneNumber",
    },
    {
      title: "Department",
      target: "department",
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
      target: "id",
      render: (id) => (
        <button
          onClick={() =>
            navigate(links.accounts.view(acctTypes.staff, id), {
              state: { data: data.filter((a) => a.id == id)[0] },
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
            onClick: () => navigate(links.accounts.list(acctTypes.staff)),
          }
        }
        data={data}
        head={head}
        title="Staffs"
      />
    </div>
  );
}

export default Staffs;
