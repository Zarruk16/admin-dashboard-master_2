import { useEffect } from "react";
import useBusinesses from "../hooks/api/useBusinesses";
import svg from "../utils/svg";
import AccountPreview from "./AccountPreview";
import Table from "./table/Table";
import { currencyFormatter } from "../utils/func";
import { useNavigate } from "react-router-dom";
import { links } from "../utils/routes";

function DUserPreview(props) {
  const { subscriptions, getSubscriptions } = useBusinesses();
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
    const d = new Date();
    d.setMonth(0);
    getSubscriptions(1, 5, d.toString());
    // eslint-disable-next-line
  }, []);

  return (
    <div className="u-prevew flex">
      <div className="btns-nav">
        <div className="flex flex-column align-center justify-center">
          <svg
            width="40"
            height="40"
            viewBox="0 0 40 40"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clipPath="url(#clip0_2381_24525)">
              <path
                d="M31.6667 5H8.33333C6.5 5 5 6.5 5 8.33333V31.6667C5 33.5 6.5 35 8.33333 35H31.6667C33.5 35 35 33.5 35 31.6667V8.33333C35 6.5 33.5 5 31.6667 5ZM13.3333 28.3333C12.4167 28.3333 11.6667 27.5833 11.6667 26.6667V21.6667C11.6667 20.75 12.4167 20 13.3333 20C14.25 20 15 20.75 15 21.6667V26.6667C15 27.5833 14.25 28.3333 13.3333 28.3333ZM20 28.3333C19.0833 28.3333 18.3333 27.5833 18.3333 26.6667V25C18.3333 24.0833 19.0833 23.3333 20 23.3333C20.9167 23.3333 21.6667 24.0833 21.6667 25V26.6667C21.6667 27.5833 20.9167 28.3333 20 28.3333ZM20 20C19.0833 20 18.3333 19.25 18.3333 18.3333C18.3333 17.4167 19.0833 16.6667 20 16.6667C20.9167 16.6667 21.6667 17.4167 21.6667 18.3333C21.6667 19.25 20.9167 20 20 20ZM26.6667 28.3333C25.75 28.3333 25 27.5833 25 26.6667V13.3333C25 12.4167 25.75 11.6667 26.6667 11.6667C27.5833 11.6667 28.3333 12.4167 28.3333 13.3333V26.6667C28.3333 27.5833 27.5833 28.3333 26.6667 28.3333Z"
                fill="#EDEDED"
              />
            </g>
            <defs>
              <clipPath id="clip0_2381_24525">
                <rect width="40" height="40" fill="white" />
              </clipPath>
            </defs>
          </svg>
          <span className="f500 q">See Analytics</span>
        </div>
        <div className="flex flex-column align-center justify-center">
          <svg
            width="40"
            height="40"
            viewBox="0 0 40 40"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clipPath="url(#clip0_2381_24668)">
              <path
                d="M25 26.6667H30C30.9167 26.6667 31.6667 25.9167 31.6667 25V15C31.6667 14.0834 30.9167 13.3334 30 13.3334H25C24.0833 13.3334 23.3333 14.0834 23.3333 15V25C23.3333 25.9167 24.0833 26.6667 25 26.6667ZM26.6667 16.6667H28.3333V23.3334H26.6667V16.6667ZM15 26.6667H20C20.9167 26.6667 21.6667 25.9167 21.6667 25V15C21.6667 14.0834 20.9167 13.3334 20 13.3334H15C14.0833 13.3334 13.3333 14.0834 13.3333 15V25C13.3333 25.9167 14.0833 26.6667 15 26.6667ZM16.6667 16.6667H18.3333V23.3334H16.6667V16.6667ZM8.33334 13.3334H11.6667V26.6667H8.33334V13.3334ZM3.33334 6.66669V33.3334H36.6667V6.66669H3.33334ZM33.3333 30H6.66668V10H33.3333V30Z"
                fill="#f75050"
              />
            </g>
            <defs>
              <clipPath id="clip0_2381_24668">
                <rect width="40" height="40" fill="white" />
              </clipPath>
            </defs>
          </svg>
          <span className="f500 q">Resolve Withdrawal Request</span>
        </div>
      </div>
      <div className="p-table">
        <Table
          btn={{ title: "See all Kafas Xpress Subscribers", className: "btn-view" }}
          data={subscriptions}
          head={head}
          title="Subscribers"
        />
      </div>
    </div>
  );
}

export default DUserPreview;
