import Dashboard from "../pages/businesses/Dashboard";
import { Route, Routes } from "react-router-dom";
import { paths } from "../utils/routes";
import View from "../pages/businesses/View";

function BusinessesRouter(props) {
  return (
    <Routes>
      <Route path={paths.base} element={<Dashboard />} />
      <Route path={paths.view} element={<View />} />
    </Routes>
  );
}

export default BusinessesRouter;
