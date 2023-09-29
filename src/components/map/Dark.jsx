import { darkStyles } from "../../utils/map-styles";
import Map from "./Map";

function Dark(props) {
  return <Map {...props} styles={darkStyles} />;
}

export default Dark;
