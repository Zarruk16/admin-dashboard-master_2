import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import AccountPreview from "../../components/AccountPreview";
import RangePicker from "../../components/RangePicker";
import Table from "../../components/table/Table";
import useBusinesses from "../../hooks/api/useBusinesses";
import { currencyFormatter } from "../../utils/func";
import { links } from "../../utils/routes";
import svg from "../../utils/svg";
import { orderStatus } from "../../utils/vars";

export default function Orders() {
  const { orders, getOrders, isLoading } = useBusinesses();

  const refresh = (startDate, endDate, filter) => {
    getOrders(startDate, endDate, filter);
  };

  useEffect(() => {
    getOrders();
  }, []);
  const navigate = useNavigate();
  const tableHead = [
    {
      title: "#",
      target: "#",
      className: "count",
    },
    {
      title: "User",
      target: ["user.firstName", "user.lastName"],
      render: (value) => (
        <AccountPreview
          user={{
            firstName: value[0],
            lastName: value[1],
          }}
        />
      ),
    },
    {
      title: "Order Status",
      target: "status",
      render: (value) => <span className={`status ${value}`}>{value}</span>,
    },
    {
      title: "Amount",
      target: "total",
      render: (v) => currencyFormatter(v || 0),
    },
    {
      title: "Actions",
      target: "_id",
      render: (id) => (
        <button
          className="action flex align-center"
          onClick={() => {
            navigate(links.orders.view(id), {
              state: {
                data: orders.filter((a) => a._id == id)[0],
              },
            });
          }}
        >
          {svg.eye()} <span className="f700">VIEW</span>
        </button>
      ),
    },
  ];

  return (
    <div>
      <br />
      <br />
      <RangePicker
        loading={isLoading}
        filterOptions={Object.values(orderStatus).map((s) => ({
          label: s,
          value: s,
        }))}
        onClick={refresh}
      />
      <Table data={orders} title="Orders" head={tableHead} />
    </div>
  );
}
