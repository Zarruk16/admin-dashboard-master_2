import { useLocation } from "react-router-dom";
import Table from "../../table/Table";
import useBusinesses from "../../../hooks/api/useBusinesses";
import { useEffect, useState } from "react";
import { currencyFormatter } from "../../../utils/func";

function AppendMachine() {
  const {
    state: { id: conceptId, data },
  } = useLocation();
  const { getMachines, machines, addMachineToConcept } = useBusinesses();

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
      title: "Actions",
      target: "_id",
      render: (id) => (
        <button
          className="action flex align-center"
          onClick={() =>
            addMachineToConcept({
              machine: id,
              concept: conceptId,
            })
          }
        >
          <span className="f700">ADD</span>
        </button>
      ),
    },
  ];

  const [input, setInput] = useState("");

  useEffect(() => {
    getMachines();
  }, []);

  return (
    <div>
      <Table
        head={head}
        title="Machines"
        onSearch={setInput}
        data={machines
          .filter((obj1) => !data.some((obj2) => obj2._id === obj1._id))
          .filter((a) => a.name.toLowerCase().includes(input.toLowerCase()))}
      />
    </div>
  );
}

export default AppendMachine;
