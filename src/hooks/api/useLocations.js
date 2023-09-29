import urls from "../../api/urls";
import { useState } from "react";
import useAPI from "./useAPI";
import { excludeFromObject, objectToFormData } from "../../utils/func";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

function useLocations(props) {
  const [count, setCount] = useState(0);
  const [locations, setLocations] = useState([]);
  const { get, post, isLoading, patch } = useAPI();

  const navigate = useNavigate();

  const getCount = async (city = "", country = "") => {
    const { error, data } = await get(
      urls.admin.businesses.locations.count + `?city=${city}`
    );
    if (error) return;
    setCount(data.data.count);
  };

  const getLocation = async (city = "", limit = 20, pageNumber = 1, status) => {
    const { error, data } = await get(
      urls.admin.businesses.locations.baseUrl +
        `?city=${city}&limit=${limit}&pageNumber=${pageNumber}` +
        (status ? `&status=${status}` : "")
    );
    if (error) return;
    setLocations(data.data.locations);
  };

  const addLocations = async (fdata, image) => {
    const d = {
      ...excludeFromObject(["latitude", "longitude"], fdata),
      coords: { lat: fdata.latitude, lng: fdata.longitude },
    };
    const formData = objectToFormData(d);
    if (image) formData.append("image", image);
    const { data, error } = await post(
      urls.admin.businesses.locations.new,
      formData
    );
    if (error) return;
    toast.success(data.message);
    navigate(-1);
  };

  const enableLocation = async (id) => {
    const { data, error } = await patch(
      urls.admin.businesses.locations.enable.replace(":id", id)
    );
    if (error) return;
    toast.success(data.message);
    navigate(-1);
  };

  const disableLocation = async (id) => {
    const { data, error } = await patch(
      urls.admin.businesses.locations.disable.replace(":id", id)
    );
    if (error) return;
    toast.success(data.message);
    navigate(-1);
  };

  return {
    isLoading,
    count,
    addLocations,
    getCount,
    getLocation,
    locations,
    enableLocation,
    disableLocation,
  };
}

export default useLocations;
