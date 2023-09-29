import { Route, Routes } from "react-router-dom";
import { paths } from "../utils/routes";
import Inventory from "../pages/inventory/Inventor";

function InventoryRouter(props) {
  return (
    <Routes>
      <Route path={paths.base} element={<Inventory />} />
    </Routes>
  );
}

export default InventoryRouter;
