import { Route, Routes } from "react-router-dom";
import { paths } from "../utils/routes";
import Analytics from "../pages/analytics/Analytics";

function AnalyticsRouter(props) {
  return (
    <Routes>
      <Route path={paths.base} element={<Analytics />} />
    </Routes>
  );
}

export default AnalyticsRouter;
