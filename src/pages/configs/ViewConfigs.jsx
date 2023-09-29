import { configs } from "../../utils/vars";
import useQuery from "../../hooks/useQuery";
import C404 from "../../components/404";
import ViewPlans from "../../components/configs/views/ViewPlans";
import ViewCities from "../../components/configs/views/ViewCities";

function ViewConfigs(props) {
  const query = useQuery();
  const type = query.get("type");
  const id = query.get("id");
  if (!type || !configs[type] || !id) return <C404 />;
  if (type === configs.city) return <ViewCities />;
  if (type === configs.plan) return <ViewPlans />;
}

export default ViewConfigs;
