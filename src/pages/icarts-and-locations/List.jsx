import React from "react";
import C404 from "../../components/404";
import useQuery from "../../hooks/useQuery";
import { models } from "../../utils/vars";
import KioskList from "../../components/icart/list/KioskList";
import LocationList from "../../components/icart/list/LocationList";

export default function List() {
  const query = useQuery();
  const type = query.get("type");
  if (!type || !models[type]) return <C404 />;

  return type === models.kiosk ? (
    <KioskList />
  ) : (
    models.location && <LocationList />
  );
}
