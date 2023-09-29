import React from "react";
import C404 from "../../components/404";
import useQuery from "../../hooks/useQuery";
import { conceptsAndMenus } from "../../utils/vars";
import AppendIngredient from "../../components/concept-menus/append/AppendIngredient";
import AppendMenu from "../../components/concept-menus/append/AppendMenu";
import AppendMachine from "../../components/concept-menus/append/AppendMachine";

export default function Append() {
  const query = useQuery();
  const type = query.get("type");
  if (!type || !conceptsAndMenus[type]) return <C404 />;

  return type === conceptsAndMenus.menu ? (
    <AppendMenu />
  ) : type === conceptsAndMenus.machine ? (
    <AppendMachine />
  ) : (
    <AppendIngredient />
  );
}
