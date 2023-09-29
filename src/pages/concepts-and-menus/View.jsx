import React, { useState } from "react";
import C404 from "../../components/404";
import useQuery from "../../hooks/useQuery";
import { conceptsAndMenus } from "../../utils/vars";
import ViewMenu from "../../components/concept-menus/views/ViewMenu";
import ViewConcept from "../../components/concept-menus/views/ViewConcept";
import ViewIngredient from "../../components/concept-menus/views/ViewIngredients";
import ViewMachine from "../../components/concept-menus/views/ViewMachine";

export default function View() {
  const query = useQuery();

  const type = query.get("type");
  if (!type || !conceptsAndMenus[type]) return <C404 />;
  return type === conceptsAndMenus.concept ? (
    <ViewConcept />
  ) : type === conceptsAndMenus.menu ? (
    <ViewMenu />
  ) : type === conceptsAndMenus.machine ? (
    <ViewMachine />
  ) : (
    <ViewIngredient />
  );
}
