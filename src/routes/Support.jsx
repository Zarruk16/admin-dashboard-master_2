import { Route, Routes } from "react-router-dom";
import { paths } from "../utils/routes";
import Support from "../pages/support/Support";

function SupportRouter(props) {
  return (
    <Routes>
      <Route path={paths.base} element={<Support />} />
    </Routes>
  );
}

export default SupportRouter;
