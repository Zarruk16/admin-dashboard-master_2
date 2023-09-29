import { Route, Routes } from "react-router-dom";
import { paths } from "../utils/routes";
import Accounts from "../pages/accounts/Accounts";
import AddAccount from "../pages/accounts/AddAccount";
import AccountsList from "../pages/accounts/AccountsList";
import ViewAccount from "../pages/accounts/ViewAccount";
import CreateSuccess from "../components/accounts/CreateSuccess";

function AccountsRouter(props) {
  return (
    <Routes>
      <Route path={paths.base} element={<Accounts />} />
      <Route path={paths.add} element={<AddAccount />} />
      <Route path={paths.view} element={<ViewAccount />} />
      <Route path={paths.list} element={<AccountsList />} />
      <Route path={paths.success} element={<CreateSuccess />} />
    </Routes>
  );
}

export default AccountsRouter;
