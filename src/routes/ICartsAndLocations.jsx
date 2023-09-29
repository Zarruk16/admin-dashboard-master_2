import { Route, Routes } from "react-router-dom";
import { paths } from "../utils/routes";
import IcartsAndLocations from "../pages/icarts-and-locations/ICartsAndLocations";
import New from "../pages/icarts-and-locations/New";
import View from "../pages/icarts-and-locations/View";
import List from "../pages/icarts-and-locations/List";

function IcartsAndLocationsRouter(props) {
  return (
    <Routes>
      <Route path={paths.base} element={<IcartsAndLocations />} />
      <Route path={paths.add} element={<New />} />
      <Route path={paths.view} element={<View />} />
      <Route path={paths.list} element={<List />} />
    </Routes>
  );
}

export default IcartsAndLocationsRouter;
