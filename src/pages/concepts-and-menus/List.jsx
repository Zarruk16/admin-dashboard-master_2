import React from "react";
import C404 from "../../components/404";
import useQuery from "../../hooks/useQuery";
import { conceptsAndMenus } from "../../utils/vars";
import ConceptList from "../../components/concept-menus/list/ConceptList";
import MenuList from "../../components/concept-menus/list/MenuList";
import IngredientList from "../../components/concept-menus/list/IngredientsList";
import MachineList from "../../components/concept-menus/list/MachineList";

export default function List() {
  const query = useQuery();
  const type = query.get("type");
  if (!type || !conceptsAndMenus[type]) return <C404 />;

  return type === conceptsAndMenus.concept ? (
    <ConceptList />
  ) : type === conceptsAndMenus.menu ? (
    <MenuList />
  ) : type === conceptsAndMenus.machine ? (
    <MachineList />
  ) : (
    <IngredientList />
  );
}
