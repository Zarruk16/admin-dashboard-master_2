import { useLocation } from "react-router-dom";
import Table from "../../table/Table";
import useBusinesses from "../../../hooks/api/useBusinesses";
import { useEffect, useState } from "react";
import { currencyFormatter } from "../../../utils/func";

function AppendMenu() {
  const {
    state: { id: conceptId, data },
  } = useLocation();
  const { getMenus, menus, addMenuToConcept } = useBusinesses();

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
      title: "Date Created",
      target: "createdAt",
      render: (value) => <span>{value.split("T")[0]}</span>,
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
            addMenuToConcept({
              menu: id,
              concept: conceptId,
            })
          }
        >
          {" "}
          <span className="f700">ADD</span>
        </button>
      ),
    },
  ];
  const [input, setInput] = useState("");

  useEffect(() => {
    getMenus();
  }, []);

  return (
    <div>
      <Table
        head={head}
        title="Machines"
        onSearch={setInput}
        data={menus
          .filter((obj1) => !data.some((obj2) => obj2._id === obj1._id))
          .filter((a) => a.name.toLowerCase().includes(input.toLowerCase()))}
      />
    </div>
  );
}

export default AppendMenu;
