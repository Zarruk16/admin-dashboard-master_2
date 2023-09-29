import { useLocation, useNavigate } from "react-router-dom";
import Table from "../../table/Table";
import { links } from "../../../utils/routes";
import svg from "../../../utils/svg";
import { conceptsAndMenus } from "../../../utils/vars";
import { currencyFormatter } from "../../../utils/func";

function MachineList({ initialLimit }) {
  const {
    state: { data },
  } = useLocation();
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
      title: "Price",
      target: "price",
      render: (v) => currencyFormatter(v),
    },
    {
      title: "Date Created",
      target: "createdAt",
      render: (value) => <span>{value.split("T")[0]}</span>,
    },
    // {
    //   title: "Status",
    //   target: "active",
    //   render: (value) => (
    //     <span className={`status ${value}`}>
    //       {value ? "ACTIVE" : "NOT ACTIVE"}
    //     </span>
    //   ),
    // },
    {
      title: "Actions",
      target: "_id",
      render: (id) => (
        <button
          className="action flex align-center"
          onClick={() =>
            navigate(
              links.conceptsAndMenus.view(conceptsAndMenus.machine, id),
              {
                state: { data: data.filter((a) => a._id == id)[0] },
              }
            )
          }
        >
          {svg.eye()} <span className="f700">VIEW</span>
        </button>
      ),
    },
  ];

  return (
    <div>
      <Table
        head={head}
        title="Machines"
        // btn={{ title: "View all", className: "btn-view" }}
        data={data}
      />
    </div>
  );
}

export default MachineList;
