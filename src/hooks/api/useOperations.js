import urls from "../../api/urls";
import { useState } from "react";
import useAPI from "./useAPI";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

function useOperations(props) {
  const { get, post, patch, isLoading } = useAPI();
  const [cities, setCities] = useState([]);
  const navigate = useNavigate();

  const getCities = async () => {
    const { error, data } = await get(urls.operations.cities.baseUrl);
    if (error) return;
    setCities(data.data.cities);
  };

  const addCity = async (fdata) => {
    const { error, data } = await post(urls.operations.cities.new, fdata);
    if (error) return;
    toast.success(data.message);
    navigate(-1);
  };

  const updateCity = async (fdata, id) => {
    const { error, data } = await patch(
      `${urls.operations.cities.update}${id}`,
      fdata
    );
    if (error) return;
    toast.success(data.message);
    navigate(-1);
  };

  return { isLoading, getCities, cities, addCity, updateCity };
}

export default useOperations;
