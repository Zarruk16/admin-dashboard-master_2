import { BrowserRouter, Routes, Route } from "react-router-dom";
import SideBar from "../components/SideBar";
import "../css/pages.css";
import { paths } from "../utils/routes";
import Dashboard from "../pages/index/Dashboard";
import AccountsRouter from "./Accounts";
import IcartsAndLocationsRouter from "./ICartsAndLocations";
import DispatchersRouter from "./Dispatchers";
import InventoryRouter from "./Inventory";
import OrdersRouter from "./Orders";
import AnalyticsRouter from "./Analytics";
import SupportRouter from "./Support";
import Header from "../components/Header";
import BusinessesRouter from "./Businesess";
import ConfigsRouter from "./ConfigsRouter";
import ConceptsAndMenusRouter from "./ConceptsAndMenus";

function Base(props) {
  return (
    <BrowserRouter>
      <div className="base_container raleway">
        <SideBar />
        <div className="content flex flex-column">
          <Header />
          <div className="routes container">
            <Routes>
              <Route path={paths.base} element={<Dashboard />} />
              <Route path={paths.accounts} element={<AccountsRouter />} />
              <Route
                path={paths.icartsAndLocations}
                element={<IcartsAndLocationsRouter />}
              />
              <Route path={paths.operator} element={<DispatchersRouter />} />
              <Route path={paths.inventory} element={<InventoryRouter />} />
              <Route path={paths.orders} element={<OrdersRouter />} />
              <Route path={paths.analytics} element={<AnalyticsRouter />} />
              <Route path={paths.businesses} element={<BusinessesRouter />} />
              <Route path={paths.support} element={<SupportRouter />} />
              <Route path={paths.configs} element={<ConfigsRouter />} />
              <Route
                path={paths.conceptsAndMenus}
                element={<ConceptsAndMenusRouter />}
              />
            </Routes>
          </div>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default Base;
