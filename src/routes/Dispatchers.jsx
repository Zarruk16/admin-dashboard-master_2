import { Route, Routes } from "react-router-dom";
import { paths } from "../utils/routes";
import Dispatcher from "../pages/dispatchers/Dispatcher";

function DispatchersRouter(props) {
  return (
    <Routes>
      <Route path={paths.base} element={<Dispatcher />} />
    </Routes>
  );
}

export default DispatchersRouter;
