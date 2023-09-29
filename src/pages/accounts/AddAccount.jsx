import C404 from "../../components/404";
import CreateAdminAccount from "../../components/accounts/CreateAdminAccount";
import CreateDepartment from "../../components/accounts/CreateDepartment";
import CreateDispatcherAccount from "../../components/accounts/CreateDispatcherAccount";
import CreateStaffAccount from "../../components/accounts/CreateStaffAccount";
import CreateUserAccount from "../../components/accounts/CreateUserAccount";
import useQuery from "../../hooks/useQuery";
import { acctTypes } from "../../utils/vars";

function AddAccount(props) {
  const query = useQuery();
  const type = query.get("type");
  if (!type || !acctTypes[type]) return <C404 />;

  return type === acctTypes.admin ? (
    <CreateAdminAccount />
  ) : type === acctTypes.department ? (
    <CreateDepartment />
  ) : type === acctTypes.operator ? (
    <CreateDispatcherAccount />
  ) : type === acctTypes.user ? (
    <CreateUserAccount />
  ) : (
    <CreateStaffAccount />
  );
}

export default AddAccount;
