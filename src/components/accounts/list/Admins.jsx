import { useNavigate } from "react-router-dom";
import Table from "../../table/Table";
import { links } from "../../../utils/routes";
import { acctTypes } from "../../../utils/vars";
import svg from "../../../utils/svg";
import AccountPreview from "../../AccountPreview";

function Admins({ initialLimit, data }) {
  const navigate = useNavigate();
  const head = [
    {
      title: "#",
      target: "#",
      className: "count",
    },
    {
      title: "Account Name",
      target: ["profileImage", "firstName", "lastName"],
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
      title: "Phone Number",
      target: "phoneNumber",
    },
    {
      title: "Is Active",
      target: "isActive",
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
            navigate(links.accounts.view(acctTypes.admin, id), {
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
            onClick: () => navigate(links.accounts.list(acctTypes.admin)),
          }
        }
        data={data}
        head={head}
        title="Admin"
      />
    </div>
  );
}

export default Admins;
