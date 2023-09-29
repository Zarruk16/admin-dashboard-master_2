import React from "react";
import useQuery from "../../hooks/useQuery";
import { models } from "../../utils/vars";
import C404 from "../../components/404";
import Kiosk from "../../components/icart/Kiosk";
import Location from "../../components/icart/Location";

function New(props) {
  const query = useQuery();
  const type = query.get("type");
  if (!type || !models[type]) return <C404 />;

  return type === models.kiosk ? <Kiosk /> : <Location />;
}

export default New;
