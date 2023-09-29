import C404 from "../../components/404";
import Admins from "../../components/accounts/list/Admins";
import Departments from "../../components/accounts/list/Departments";
import Dispatchers from "../../components/accounts/list/Dispatchers";
// import Dispatchers from "../../components/accounts/list/Dispatchers";
import Staffs from "../../components/accounts/list/Staffs";
import Users from "../../components/accounts/list/Users";
import useQuery from "../../hooks/useQuery";
import { acctTypes } from "../../utils/vars";

function AccountsList(props) {
  const query = useQuery();
  const type = query.get("type");
  if (!type || !acctTypes[type]) return <C404 />;

  return type === acctTypes.admin ? (
    <Admins />
  ) : type === acctTypes.department ? (
    <Departments />
  ) : type === acctTypes.operator ? (
    <Dispatchers />
  ) : type === acctTypes.user ? (
    <Users />
  ) : (
    <Staffs />
  );
}

export default AccountsList;
