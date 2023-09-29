import { Route, Routes } from "react-router-dom";
import { paths } from "../utils/routes";
import ConceptsAndMenus from "../pages/concepts-and-menus/ConceptsAndMenus";
import New from "../pages/concepts-and-menus/New";
import View from "../pages/concepts-and-menus/View";
import List from "../pages/concepts-and-menus/List";
import Append from "../pages/concepts-and-menus/Append";

function ConceptsAndMenusRouter(props) {
  return (
    <Routes>
      <Route path={paths.base} element={<ConceptsAndMenus />} />
      <Route path={paths.add} element={<New />} />
      <Route path={paths.view} element={<View />} />
      <Route path={paths.list} element={<List />} />
      <Route path={paths.append} element={<Append />} />
    </Routes>
  );
}

export default ConceptsAndMenusRouter;
