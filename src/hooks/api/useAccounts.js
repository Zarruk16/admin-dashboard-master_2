import { useState } from "react";
import useAPI from "./useAPI";
import { toast } from "react-toastify";
import { objectToFormData } from "../../utils/func";
import { useNavigate } from "react-router-dom";

function useAccounts({ url }) {
  const [count, setCount] = useState(0);
  const [accounts, setAccounts] = useState([]);
  const { get, isLoading, post } = useAPI();

  const navigate = useNavigate();

  const getCount = async () => {
    const { error, data } = await get(url.count);
    if (error) return;
    setCount(data.data.count);
  };

  const getAccounts = async (pageNumber = 1, limit = 20) => {
    const { error, data } = await get(
      url.baseUrl
        .replace("{{pageNumber}}", pageNumber)
        .replace("{{limit}}", limit)
    );
    if (error) return;
    setAccounts(data.data.accounts);
  };

  const addAccount = async (fdata, img) => {
    const formData = objectToFormData(fdata);
    if (img) formData.append("profileImage", img);
    const { error, data } = await post(url.register, formData);
    if (error) return;
    toast.success(data.message);
    navigate(-1);
  };

  return { isLoading, count, getCount, getAccounts, accounts, addAccount };
}

export default useAccounts;
