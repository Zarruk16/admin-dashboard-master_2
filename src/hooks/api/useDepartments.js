import { useState } from "react";
import useAPI from "./useAPI";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import urls from "../../api/urls";

function useDepartments() {
  const [departments, setDepartments] = useState([]);
  const { get, isLoading, post, patch } = useAPI();

  const navigate = useNavigate();

  const getDepartments = async (pageNumber = 1, limit = 20) => {
    const { error, data } = await get(
      urls.admin.departments.baseUrl
        .replace("{{pageNumber}}", pageNumber)
        .replace("{{limit}}", limit)
    );
    if (error) return;
    setDepartments(data.data.departments);
  };

  const addDepartment = async (fdata) => {
    const { error, data } = await post(urls.admin.departments.new, fdata);
    if (error) return;
    toast.success(data.message);
    navigate(-1);
  };
  const updateDepartment = async (fdata, id) => {
    const { error, data } = await patch(
      urls.admin.departments.base + id,
      fdata
    );
    if (error) return;
    toast.success(data.message);
    navigate(-1);
  };

  return {
    isLoading,
    getDepartments,
    departments,
    addDepartment,
    updateDepartment,
  };
}

export default useDepartments;
