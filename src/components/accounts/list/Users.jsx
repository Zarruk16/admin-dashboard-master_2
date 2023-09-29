import { acctTypes } from "../../../utils/vars";
import { useNavigate } from "react-router-dom";
import { links } from "../../../utils/routes";
import Table from "../../table/Table";
import svg from "../../../utils/svg";
import AccountPreview from "../../AccountPreview";

function Users({ initialLimit, data = [], tableHead, ...otherProps }) {
  const navigate = useNavigate();
  const head = tableHead ?? [
    {
      title: "#",
      target: "#",
      className: "count",
    },
    {
      title: "Name",
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
      title: "Email",
      target: "email",
    },
    {
      title: "Phone Number",
      target: "phoneNumber",
    },
    {
      title: "NIN",
      target: "nin.value",
    },
    // {
    //   title: "NIN Approve",
    //   target: "nin.approved",
    //   render: (value) => (
    //     <span className={`status ${value}`}>
    //       {value?.toString().toUpperCase()}
    //     </span>
    //   ),
    // },
    {
      title: "Active",
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
            navigate(links.accounts.view(acctTypes.user, id), {
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
            onClick: () => navigate(links.accounts.list(acctTypes.user)),
          }
        }
        data={data}
        head={head}
        title="Users"
        {...otherProps}
      />
    </div>
  );
}

export default Users;
