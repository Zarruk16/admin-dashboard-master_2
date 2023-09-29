import React from "react";
import C404 from "../../components/404";
import ViewKiosk from "../../components/icart/view/ViewKiosk";
import ViewLocation from "../../components/icart/view/ViewLocation";
import useQuery from "../../hooks/useQuery";
import { models } from "../../utils/vars";

export default function View() {
  const query = useQuery();
  const type = query.get("type");
  if (!type || !models[type]) return <C404 />;
  return type === models.kiosk ? (
    <ViewKiosk />
  ) : (
    type === models.location && <ViewLocation />
  );
}
