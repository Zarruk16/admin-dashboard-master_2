import React, { useEffect, useState } from "react";

import moment from "moment";
import useBusinesses from "../../hooks/api/useBusinesses";
import Card2 from "../../components/Card2";
import Table from "../../components/table/Table";
import AccountPreview from "../../components/AccountPreview";
import svg from "../../utils/svg";
import { currencyFormatter } from "../../utils/func";
import { links } from "../../utils/routes";
import { useNavigate } from "react-router-dom";
import Button from "../../components/Button";
import Select from "../../components/Select";
import { statuses, subscriptionsFilter } from "../../utils/vars";
import Input from "../../components/Input";

const formatDate = (date = new Date()) => {
  return moment(date).format("YYYY-MM-DD");
};

function Dashboard(props) {
  const start = new Date().setMonth(0, 1);
  const { stat, getSubscriptions, subscriptions, isLoading } = useBusinesses();
  const [endDate, setEndDate] = useState(formatDate());
  const [startDate, setStartDate] = useState(formatDate(start));
  const [filter, setFilter] = useState(statuses.active);
  const navigate = useNavigate();
  const head = [
    {
      title: "#",
      target: "#",
      className: "count",
    },
    {
      title: "User",
      target: ["user.profileImage", "user.firstName", "user.lastName"],
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
      title: "Transaction Status",
      target: "transaction",
      render: (value) => (
        <span className={`status ${!!value}`}>
          {!!value ? "Paid" : "Not Paid"}
        </span>
      ),
    },
    {
      title: "Amount to Pay",
      target: "transaction.amount",
      render: (v) => currencyFormatter(v || 0),
    },
    {
      title: "Amount Paid",
      target: "transaction.amountPaid",
      render: (v) => currencyFormatter(v || 0),
    },
    {
      title: "Active",
      target: "active",
      render: (value) => (
        <span className={`status ${value}`}>
          {value?.toString()?.toUpperCase()}
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
            navigate(links.businesses.view(id), {
              state: { data: subscriptions.filter((a) => a._id == id)[0] },
            });
          }}
        >
          {svg.eye()} <span className="f700">VIEW</span>
        </button>
      ),
    },
  ];
  useEffect(() => {
    getSubscriptions(1, 100, startDate, endDate);
    // eslint-disable-next-line
  }, []);

  const refreshSubscriptions = () => {
    switch (filter) {
      case statuses.active:
        getSubscriptions(1, 20, startDate, endDate, true, false);
        break;
      case statuses.inactive:
        getSubscriptions(1, 20, startDate, endDate, false, false);
        break;
      case statuses.expiring:
        getSubscriptions(1, 20, startDate, endDate, false, true);
        break;
    }
  };

  return (
    <div>
      <br />
      <br />
      <div className="flex range-picker justify-evenly">
        <Input
          placeholder="From"
          type={"date"}
          style={{ padding: 10, fontSize: 14 }}
          value={startDate}
          onChange={setStartDate}
        />
        <Input
          placeholder="To"
          type={"date"}
          style={{ padding: 10, fontSize: 14 }}
          value={endDate}
          onChange={setEndDate}
        />

        <Select
          placeholder="Filter By"
          initialValue={filter}
          options={subscriptionsFilter}
          onSelect={setFilter}
        />
        <Button
          loading={isLoading}
          disabled={isLoading}
          title={"Refresh Subscriptions"}
          onClick={refreshSubscriptions}
          className={"p-20"}
        />
      </div>
      <div className="flex justify-between align-center gap-3">
        <Card2 title="Active Subscriptions" value={stat.active} />
        <Card2 title="Inactive Subscriptions" value={stat.inactive} />
        <Card2 title="Expired Subscriptions" value={stat.expired} />
        <Card2 title="Total Subscriptions" value={stat.total} />
      </div>
      <br />
      <br />

      <Table data={subscriptions} head={head} title="Subscriptions" />
    </div>
  );
}

export default Dashboard;
