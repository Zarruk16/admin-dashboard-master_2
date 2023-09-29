import { Link } from "react-router-dom";
import CreateLinks from "../../components/CreateLinks";
import { links } from "../../utils/routes";
import { acctTypes } from "../../utils/vars";
import Dispatchers from "../../components/accounts/list/Dispatchers";
import Staffs from "../../components/accounts/list/Staffs";
import Admins from "../../components/accounts/list/Admins";
import useAccounts from "../../hooks/api/useAccounts";
import urls from "../../api/urls";
import { useEffect } from "react";
import Users from "../../components/accounts/list/Users";
import Departments from "../../components/accounts/list/Departments";
import useDepartments from "../../hooks/api/useDepartments";

const Card = ({ title, value, to }) => (
  <Link
    to={to}
    className="card acct-info flex justify-center align-center flex-column"
  >
    <span className="q f400 t-default">{title}</span>
    <br />
    <h2 className="ttitle montserrat t-blue f600">{value}</h2>
    <span className="f400 t-blue tsmall">Registered</span>
  </Link>
);

function Accounts(props) {
  const {
    getAccounts: getUserAccount,
    getCount: getUserCount,
    count: userCount,
    accounts: userAccounts,
  } = useAccounts({ url: urls.admin.accounts });
  const { getAccounts: getAdminAccount, accounts: adminAccounts } = useAccounts(
    { url: urls.admin.profile }
  );

  const { getDepartments, departments } = useDepartments();

  useEffect(() => {
    getUserCount();
    getUserAccount();
    getAdminAccount();
    getDepartments();
    // eslint-disable-next-line
  }, []);

  return (
    <div>
      <div className="flex justify-between align-center">
        <Card
          to={links.accounts.list(acctTypes.user)}
          title="Users"
          value={userCount}
        />
        <Card
          to={links.accounts.list(acctTypes.operator)}
          title="Dispatchers"
          value="0"
        />
        <Card
          to={links.accounts.list(acctTypes.admin)}
          title="Admin"
          value={adminAccounts.length}
        />
        <Card
          to={links.accounts.list(acctTypes.department)}
          title="Departments"
          value={departments.length}
        />
        <Card
          to={links.accounts.list(acctTypes.staff)}
          title="Staff"
          value="0"
        />
      </div>
      <br />
      <br />
      <CreateLinks
        title="Create Account"
        options={[
          {
            title: "User",
            to: links.accounts.add(acctTypes.user),
          },
          {
            title: "Dispatcher",
            to: links.accounts.add(acctTypes.operator),
          },
          {
            title: "Admin",
            to: links.accounts.add(acctTypes.admin),
          },
          {
            title: "Staff",
            to: links.accounts.add(acctTypes.staff),
          },
          {
            title: "Department",
            to: links.accounts.add(acctTypes.department),
          },
        ]}
      />
      <br />
      <br />
      <Users data={userAccounts} initialLimit={10} />
      <br />
      <br />
      <Departments data={departments} initialLimit={10} />
      <br />
      <br />
      <Dispatchers initialLimit={10} />
      <br />
      <br />
      <Admins data={adminAccounts} initialLimit={10} />
      <br />
      <br />
      <Staffs initialLimit={10} />
    </div>
  );
}

export default Accounts;
