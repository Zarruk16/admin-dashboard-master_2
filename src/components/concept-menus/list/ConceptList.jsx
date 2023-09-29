import { useLocation, useNavigate } from "react-router-dom";
import Table from "../../table/Table";
import { links } from "../../../utils/routes";
import svg from "../../../utils/svg";
import { currencyFormatter } from "../../../utils/func";
import { conceptsAndMenus } from "../../../utils/vars";

function ConceptList({ initialLimit }) {
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
      title: "RIO",
      target: "rio.value",
      render: (v) => currencyFormatter(v),
    },
    {
      title: "RIO Duration",
      target: "rio.duration",
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
            navigate(
              links.conceptsAndMenus.view(conceptsAndMenus.concept, id),
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
      {/* <Table
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
      /> */}
      <Table
        head={head}
        title="Concepts"
        // btn={{ title: "View all", className: "btn-view" }}
        data={data}
      />
    </div>
  );
}

export default ConceptList;
