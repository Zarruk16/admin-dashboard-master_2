import useQuery from "../../hooks/useQuery";
import { conceptsAndMenus } from "../../utils/vars";
import C404 from "../../components/404";
import Concept from "../../components/concept-menus/Concept";
import Menu from "../../components/concept-menus/Menu";
import Ingredient from "../../components/concept-menus/Ingredient";
import Machine from "../../components/concept-menus/Machine";

function New(props) {
  const query = useQuery();
  const type = query.get("type");
  if (!type || !conceptsAndMenus[type]) return <C404 />;

  return type === conceptsAndMenus.concept ? (
    <Concept />
  ) : type === conceptsAndMenus.menu ? (
    <Menu />
  ) : type === conceptsAndMenus.machine ? (
    <Machine />
  ) : (
    <Ingredient />
  );
}

export default New;
