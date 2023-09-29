import { Route, Routes } from "react-router-dom";
import { paths } from "../utils/routes";
import Orders from "../pages/orders/Orders";
import ViewOrder from "../components/orders/ViewOrder";

function OrdersRouter(props) {
  return (
    <Routes>
      <Route path={paths.base} element={<Orders />} />
      <Route path={paths.view} element={<ViewOrder />} />
    </Routes>
  );
}

export default OrdersRouter;
