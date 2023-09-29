import { useEffect, useState } from "react";
import useAccounts from "../../hooks/api/useAccounts";
import urls from "../../api/urls";
import Users from "./list/Users";
import AccountPreview from "../AccountPreview";
// import svg from "../../utils/svg";
import { toast } from "react-toastify";

function CreateDispatcherAccount(props) {
  const {
    getAccounts: getUserAccount,
    // getCount: getUserCount,
    // count: userCount,
    accounts: userAccounts,
  } = useAccounts({ url: urls.admin.accounts });

  const [searchValue, setSearchValue] = useState("");

  useEffect(() => {
    getUserAccount();
  }, []);

  const head = [
    {
      title: "#",
      target: "#",
      className: "count",
    },
    {
      title: "Name",
      target: ["profileImage", "firstName", "lastName"],
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
      title: "Email",
      target: "email",
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
          onClick={() => toast.success("Account is now a Dispatcher")}
          className="action">
          <span className="f700">Make Dispatcher</span>
        </button>
      ),
    },
  ];

  return (
    <div>
      <h2>Create Dispatcher</h2>
      <br />
      <br />
      <div>
        <Users
          data={userAccounts.filter((a) => a.email.includes(searchValue))}
          initialLimit={10}
          tableHead={head}
          onSearch={setSearchValue}
        />
      </div>
    </div>
  );
}

export default CreateDispatcherAccount;
