import { Route, Routes } from "react-router-dom";
import Configs from "../pages/configs/Configs";
import { paths } from "../utils/routes";
import New from "../pages/configs/New";
import ViewConfigs from "../pages/configs/ViewConfigs";

function ConfigsRouter(props) {
  return (
    <Routes>
      <Route path={paths.base} element={<Configs />} />
      <Route path={paths.add} element={<New />} />
      <Route path={paths.view} element={<ViewConfigs />} />
    </Routes>
  );
}

export default ConfigsRouter;
