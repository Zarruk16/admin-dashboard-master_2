import { useState } from "react";

import useAPI from "./useAPI";
import urls from "../../api/urls";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { objectToFormData } from "../../utils/func";
import { actions } from "../../utils/vars";

function useBusinesses(props) {
  const [stat, setStat] = useState({
    expired: 0,
    active: 0,
    total: 0,
    inactive: 0,
  });
  const { get, post, isLoading, patch } = useAPI();
  const [menus, setMenus] = useState([]);
  const [orders, setOrders] = useState([]);
  const [plans, setPlans] = useState([]);
  const [kiosks, setKiosks] = useState([]);
  const [concepts, setConcepts] = useState([]);
  const [machines, setMachines] = useState([]);
  const [kioskCount, setKioskCount] = useState(0);
  const [orderItems, setOrderItems] = useState([]);
  const [conceptMenus, setConceptMenus] = useState([]);
  const [conceptMachines, setConceptMachines] = useState([]);
  const [menuIngredients, setMenuIngredients] = useState([]);
  const [ingredients, setIngredients] = useState([]);
  const [subscriptions, setSubscriptions] = useState([]);

  const navigate = useNavigate();

  const getStat = async (from, to = new Date().toString()) => {
    const { error, data } = await get(
      urls.admin.businesses.subscriptions.count + `?from=${from}&to=${to}`
    );
    if (error) return;
    setStat(data.data);
  };

  const getPlans = async () => {
    const { error, data } = await get(urls.admin.businesses.plans.base);
    if (error) return;
    setPlans(data.data.plans);
  };

  const getOrders = async (start, end, filter) => {
    const { error, data } = await get(
      urls.admin.businesses.orders.base +
        (start
          ? `${filter ? `status=${filter}&` : ""}from=${start}&to=${end}`
          : "")
    );
    if (error) return;
    setOrders(data.data.orders);
  };

  const getOrderItems = async (orderId) => {
    const { data, error } = await get(
      urls.admin.businesses.orders.orderItems.replace("{{orderId}}", orderId)
    );
    if (error) return;
    setOrderItems(data.data.items);
  };

  const updateOrderStatus = async (orderId, status) => {
    const { error, data } = await patch(
      urls.admin.businesses.orders.update
        .replace("{{orderId}}", orderId)
        .replace("{{status}}", status)
    );
    if (error) return;
    toast.success(data.message);
    navigate(-1);
  };

  const getSubscriptions = async (
    pageNumber = 1,
    limit = 20,
    from,
    to = new Date().toString(),
    active = true,
    expiring = false
  ) => {
    const { error, data } = await get(
      urls.admin.businesses.subscriptions.baseUrl +
        `?pageNumber=${pageNumber}&limit=${limit}` +
        (from ? `&from=${from}&to=${to}` : "") +
        `&active=${active}&expiring=${expiring}`
    );
    if (error) return;
    getStat(from, to);
    setSubscriptions(data.data.subs);
  };

  const updateSubscriptionStatus = async (fdata) => {
    const { error, data } = await patch(
      urls.admin.businesses.subscriptions.updateStatus,
      fdata
    );
    if (error) return;
    toast.success(data.message);
    navigate(-1);
  };

  const getKiosks = async (pageNumber = 1, limit = 20, active, attached) => {
    const { error, data } = await get(
      urls.admin.businesses.kiosks.baseUrl +
        `?pageNumber=${pageNumber}&limit=${limit}` +
        (typeof active === "boolean" ? `&active=${active}` : "") +
        (typeof attached === "boolean" ? `&attached=${attached}` : "")
    );
    if (error) return;
    setKioskCount(data.data.totalCount);
    setKiosks(data.data.kiosks);
  };

  const assignKiosk = async (fdata, subscriptionId, action) => {
    const { data, error } = await patch(
      urls.admin.businesses.kiosks.assign
        .replace("{{subscriptionId}}", subscriptionId)
        .replace("{{action}}", action),
      fdata
    );
    if (error) return;
    toast.success(data.message);
    getKiosks(1, 100, true, false);
  };

  const addKiosk = async (fdata, image) => {
    const formData = objectToFormData(fdata);
    if (image) formData.append("image", image);
    const { error, data } = await post(
      urls.admin.businesses.kiosks.new,
      formData
    );
    if (error) return;
    toast.success(data.message);
    navigate(-1);
  };

  const updateKiosk = async (fdata, id, image) => {
    if (image) {
      fdata = objectToFormData(fdata);
      fdata.append("image", image);
    }
    const { data, error } = await patch(
      urls.admin.businesses.kiosks.update.replace("{{kioskId}}", id),
      fdata
    );
    if (error) return;
    toast.success(data.message);
    navigate(-1);
  };

  const getConcepts = async (pageNumber = 1, limit = 20) => {
    const { error, data } = await get(
      urls.admin.businesses.concepts.baseUrl +
        `?pageNumber=${pageNumber}&limit=${limit}`
    );
    if (error) return;
    setConcepts(data.data.concepts);
  };

  const getConceptMenus = async (conceptId) => {
    const { data, error } = await get(
      urls.businesses.concepts.getConceptMenu.replace(
        "{{conceptId}}",
        conceptId
      )
    );
    if (error) return;
    setConceptMenus(data.data.menus);
  };

  const getConceptMachines = async (conceptId) => {
    const { data, error } = await get(
      urls.businesses.concepts.getConceptMachines.replace(
        "{{conceptId}}",
        conceptId
      )
    );
    if (error) return;
    setConceptMachines(data.data.machines);
  };

  const addConcept = async (fdata, image) => {
    const formData = objectToFormData(fdata);
    if (image) formData.append("image", image);
    const { error, data } = await post(
      urls.admin.businesses.concepts.new,
      formData
    );
    if (error) return;
    toast.success(data.message);
    navigate(-1);
  };

  const updateConcept = async (fdata, image, id) => {
    const formData = objectToFormData(fdata);
    if (image) formData.append("image", image);
    const { data, error } = await patch(
      urls.admin.businesses.concepts.update + `${id}`,
      formData
    );
    if (error) return;
    toast.success(data.message);
    navigate(-1);
  };

  const updateSubscriptionConcept = async (fdata, subscriptionId, action) => {
    console.log(
      urls.admin.businesses.subscriptions.modifyConcept
        .replace("{{subscriptionId}}", subscriptionId)
        .replace("{{action}}", action),
      fdata
    );
    const { error, data } = await patch(
      urls.admin.businesses.subscriptions.modifyConcept
        .replace("{{subscriptionId}}", subscriptionId)
        .replace("{{action}}", action),
      fdata
    );
    if (error) return;
    toast.success(data.message);
    getConcepts();
  };

  const addPlan = async (fdata) => {
    const { error, data } = await post(
      urls.admin.businesses.plans.base + "/new",
      fdata
    );
    if (error) return;
    toast.success(data.message);
    navigate(-1);
  };

  const updatePlan = async (fdata, id) => {
    const { error, data } = await patch(
      urls.admin.businesses.plans.base + `/${id}`,
      fdata
    );
    if (error) return;
    toast.success(data.message);
    navigate(-1);
  };

  const getMenus = async (pageNumber = 1, limit = 20) => {
    const { error, data } = await get(
      urls.admin.businesses.menu.baseUrl +
        `?pageNumber=${pageNumber}&limit=${limit}`
    );
    if (error) return;
    setMenus(data.data.menus);
  };

  const getMenuIngredients = async (menuId) => {
    const { data, error } = await get(
      urls.businesses.menus.getMenuIngredients.replace("{{menuId}}", menuId)
    );
    if (error) return;
    setMenuIngredients(data.data.ingredients);
  };

  const addMenu = async (fdata) => {
    const { error, data } = await post(urls.admin.businesses.menu.new, fdata);
    if (error) return;
    toast.success(data.message);
    navigate(-1);
  };

  const addMenuToConcept = async (fdata) => {
    const { data, error } = await post(
      urls.admin.businesses.menu.addToConcept,
      fdata
    );
    if (error) return;
    toast.success(data.message);
    navigate(-1);
  };

  const getIngredients = async (pageNumber = 1, limit = 20) => {
    const { error, data } = await get(
      urls.admin.businesses.ingredient.baseUrl +
        `?pageNumber=${pageNumber}&limit=${limit}`
    );
    if (error) return;
    setIngredients(data.data.ingredients);
  };

  const addIngredient = async (fdata) => {
    const { error, data } = await post(
      urls.admin.businesses.ingredient.new,
      fdata
    );
    if (error) return;
    toast.success(data.message);
    navigate(-1);
  };

  const addIngredientToMenu = async (fdata) => {
    const { data, error } = await post(
      urls.admin.businesses.ingredient.addToMenu,
      fdata
    );
    if (error) return;
    toast.success(data.message);
    navigate(-1);
  };

  const getMachines = async (pageNumber = 1, limit = 20) => {
    const { data, error } = await get(
      urls.admin.businesses.machine.baseUrl +
        `?pageNumber=${pageNumber}&limit=${limit}`
    );
    if (error) return;
    setMachines(data.data.machines);
  };

  const addMachine = async (fdata) => {
    const { error, data } = await post(
      urls.admin.businesses.machine.new,
      fdata
    );
    if (error) return;
    toast.success(data.message);
    navigate(-1);
  };

  const addMachineToConcept = async (fdata) => {
    const { data, error } = await post(
      urls.admin.businesses.machine.addToConcept,
      fdata
    );
    if (error) return;
    toast.success(data.message);
    navigate(-1);
  };

  return {
    stat,
    plans,
    orders,
    menus,
    kiosks,
    machines,
    concepts,
    isLoading,
    kioskCount,
    orderItems,
    ingredients,
    conceptMenus,
    subscriptions,
    menuIngredients,
    conceptMachines,
    addMenu,
    getStat,
    getOrders,
    addPlan,
    getPlans,
    addKiosk,
    getMenus,
    getKiosks,
    assignKiosk,
    addConcept,
    addMachine,
    updatePlan,
    updateKiosk,
    getConcepts,
    getMachines,
    addIngredient,
    getOrderItems,
    updateConcept,
    getIngredients,
    getConceptMenus,
    getSubscriptions,
    addMenuToConcept,
    getConceptMachines,
    updateOrderStatus,
    getMenuIngredients,
    addMachineToConcept,
    addIngredientToMenu,
    updateSubscriptionStatus,
    updateSubscriptionConcept,
  };
}

export default useBusinesses;
