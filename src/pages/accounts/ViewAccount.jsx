import ViewDispatcherAccount from "../../components/accounts/views/ViewDispatcherAccount";
import ViewAdminAccount from "../../components/accounts/views/ViewAdminAccount";
import ViewStaffAccount from "../../components/accounts/views/ViewStaffAccount";
import ViewUserAccount from "../../components/accounts/views/ViewUserAccount";
import ViewDepartment from "../../components/accounts/views/ViewDepartment";
import { acctTypes } from "../../utils/vars";
import useQuery from "../../hooks/useQuery";
import C404 from "../../components/404";

function ViewAccount(props) {
  const query = useQuery();
  const type = query.get("type");
  const id = query.get("id");
  if (!type || !acctTypes[type] || !id) return <C404 />;

  return type === acctTypes.admin ? (
    <ViewAdminAccount />
  ) : type === acctTypes.department ? (
    <ViewDepartment />
  ) : type === acctTypes.operator ? (
    <ViewDispatcherAccount />
  ) : type === acctTypes.user ? (
    <ViewUserAccount />
  ) : (
    <ViewStaffAccount />
  );
}

export default ViewAccount;
