import { useLocation } from "react-router-dom";
import Table from "../../table/Table";
import useBusinesses from "../../../hooks/api/useBusinesses";
import { useEffect, useState } from "react";

function AppendIngredient() {
  const {
    state: { id: menuId, data },
  } = useLocation();
  const { getIngredients, ingredients, addIngredientToMenu } = useBusinesses();

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
      title: "Unit",
      target: "unit",
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
            addIngredientToMenu({
              menu: menuId,
              ingredient: id,
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
    getIngredients();
  }, []);

  return (
    <div>
      <Table
        head={head}
        title="Ingredients"
        onSearch={setInput}
        data={ingredients
          .filter((obj1) => !data.some((obj2) => obj2._id === obj1._id))
          .filter((a) => a.name.toLowerCase().includes(input.toLowerCase()))}
      />
    </div>
  );
}

export default AppendIngredient;
