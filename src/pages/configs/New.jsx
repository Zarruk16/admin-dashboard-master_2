import useQuery from "../../hooks/useQuery";
import { configs } from "../../utils/vars";
import C404 from "../../components/404";
import Plan from "../../components/configs/Plan";
import City from "../../components/configs/City";

function New(props) {
  const query = useQuery();
  const type = query.get("type");
  if (!type || !configs[type]) return <C404 />;

  return type === configs.plan ? <Plan /> : <City />;
}

export default New;
