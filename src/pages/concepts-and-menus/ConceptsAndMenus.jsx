import { useEffect } from "react";
import Card2 from "../../components/Card2";
import Table from "../../components/table/Table";
import useBusinesses from "../../hooks/api/useBusinesses";
import svg from "../../utils/svg";
import { currencyFormatter } from "../../utils/func";
import CreateLinks from "../../components/CreateLinks";
import { links } from "../../utils/routes";
import { conceptsAndMenus } from "../../utils/vars";
import { useNavigate } from "react-router-dom";

const ingshead = [
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
    render: (v) => `₦${v}`,
  },
  {
    title: "Date Created",
    target: "date",
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
      <button className="action flex align-center">
        {svg.eye()} <span className="f700">VIEW</span>
      </button>
    ),
  },
];

function ConceptsAndMenus(props) {
  const {
    concepts,
    getConcepts,
    menus,
    getMenus,
    ingredients,
    getIngredients,
    machines,
    getMachines,
  } = useBusinesses();
  const navigate = useNavigate();
  const conceptshead = [
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
                state: { data: concepts.filter((a) => a._id == id)[0] },
              }
            )
          }
        >
          {svg.eye()} <span className="f700">VIEW</span>
        </button>
      ),
    },
  ];
  const menushead = [
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
            navigate(links.conceptsAndMenus.view(conceptsAndMenus.menu, id), {
              state: { data: menus.filter((a) => a._id == id)[0] },
            })
          }
        >
          {svg.eye()} <span className="f700">VIEW</span>
        </button>
      ),
    },
  ];
  const ingshead = [
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
            navigate(
              links.conceptsAndMenus.view(conceptsAndMenus.ingredient, id),
              {
                state: { data: ingredients.filter((a) => a._id == id)[0] },
              }
            )
          }
        >
          {svg.eye()} <span className="f700">VIEW</span>
        </button>
      ),
    },
  ];
  const machinesHead = [
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
                state: { data: machines.filter((a) => a._id == id)[0] },
              }
            )
          }
        >
          {svg.eye()} <span className="f700">VIEW</span>
        </button>
      ),
    },
  ];
  useEffect(() => {
    getConcepts();
    getMenus();
    getIngredients();
    getMachines();
    // eslint-disable-next-line
  }, []);

  return (
    <div>
      <div className="flex justify-between align-center gap-3">
        <Card2 title="Concepts" value={concepts.length} />
        <Card2 title="Menus" value={menus.length} />
        <Card2 title="Machines" value={machines.length} />
      </div>
      <br />
      <br />
      <CreateLinks
        title="Add Data"
        options={[
          {
            title: "Concept",
            to: links.conceptsAndMenus.add(conceptsAndMenus.concept),
          },
          {
            title: "Menu",
            to: links.conceptsAndMenus.add(conceptsAndMenus.menu),
          },
          {
            title: "Ingredient",
            to: links.conceptsAndMenus.add(conceptsAndMenus.ingredient),
          },
          {
            title: "Machine",
            to: links.conceptsAndMenus.add(conceptsAndMenus.machine),
          },
        ]}
      />
      <br />
      <br />
      <Table
        head={conceptshead}
        title="Concepts"
        btn={{
          title: "View all",
          className: "btn-view",
          onClick: () =>
            navigate(links.conceptsAndMenus.list(conceptsAndMenus.concept), {
              state: { data: concepts },
            }),
        }}
        data={concepts}
      />
      <br />
      <br />
      <Table
        head={machinesHead}
        title="Machines"
        btn={{
          title: "View all",
          className: "btn-view",
          onClick: () =>
            navigate(links.conceptsAndMenus.list(conceptsAndMenus.machine), {
              state: { data: machines },
            }),
        }}
        data={machines}
      />
      <br />
      <br />
      <div className="flex list-menu">
        <div>
          <Table
            showSearch={false}
            head={menushead}
            title="Menus"
            btn={{
              title: "View all",
              className: "btn-view",
              onClick: () =>
                navigate(links.conceptsAndMenus.list(conceptsAndMenus.menu), {
                  state: { data: menus },
                }),
            }}
            data={menus}
          />
        </div>
        <div>
          <Table
            showSearch={false}
            head={ingshead}
            title="Menu Ingredents"
            btn={{ title: "View all", className: "btn-view" }}
            data={ingredients}
          />
        </div>
      </div>
      <br />
      <br />
      <br />
    </div>
  );
}

export default ConceptsAndMenus;
