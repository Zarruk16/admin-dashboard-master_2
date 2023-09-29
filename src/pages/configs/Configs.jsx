import React, { useEffect } from "react";
import Card2 from "../../components/Card2";
import useOperations from "../../hooks/api/useOperations";
import CreateLinks from "../../components/CreateLinks";
import svg from "../../utils/svg";
import Table from "../../components/table/Table";
import useBusinesses from "../../hooks/api/useBusinesses";
import { links } from "../../utils/routes";
import { configs } from "../../utils/vars";
import { currencyFormatter } from "../../utils/func";
import { useNavigate } from "react-router-dom";

function Configs(props) {
  const { cities, getCities } = useOperations();
  const { plans, getPlans } = useBusinesses();
  const navigate = useNavigate();

  const citieshead = [
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
      title: "Country",
      target: "country",
    },

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
          className="action flex align-center"
          onClick={() => {
            navigate(links.configs.view(configs.city, id), {
              state: { data: cities.filter((a) => a._id === id)[0] },
            });
          }}
        >
          {svg.eye()} <span className="f700">VIEW</span>
        </button>
      ),
    },
  ];

  const planshead = [
    {
      title: "#",
      target: "#",
      className: "count",
    },
    {
      title: "Security Deposite",
      target: "amount",
      render: (v) => currencyFormatter(v),
    },
    {
      title: "Subscription Fee",
      target: "fee.value",
      render: (v) => currencyFormatter(v),
    },
    {
      title: "Timing",
      target: "fee.duration",
    },
    {
      title: "Duration",
      target: "durationInDays",
      render: (v) => `${v} days`,
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
      title: "Refundable",
      target: "refundable",
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
          onClick={() => {
            navigate(links.configs.view(configs.plan, id), {
              state: { data: plans.filter((a) => a._id === id)[0] },
            });
          }}
        >
          {svg.eye()} <span className="f700">VIEW</span>
        </button>
      ),
    },
  ];

  useEffect(() => {
    getCities();
    getPlans();
    // eslint-disable-next-line
  }, []);

  return (
    <div>
      <div className="flex justify-between align-center gap-3">
        <Card2 title="Subscription Plans" value={plans.length} />
        <Card2 title="Available Cities" value={cities.length} />
      </div>
      <br />
      <br />
      <CreateLinks
        title="Add Data"
        options={[
          {
            title: "Subscription Plan",
            to: links.configs.add(configs.plan),
          },
          {
            title: "City",
            to: links.configs.add(configs.city),
          },
        ]}
      />
      <br />
      <br />
      <Table title="Cities" head={citieshead} data={cities} />
      <br />
      <Table title="Plans" head={planshead} data={plans} />
    </div>
  );
}

export default Configs;
