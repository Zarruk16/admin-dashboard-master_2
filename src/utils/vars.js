export const alert = {
  success: 1,
  wran: 2,
  info: 2,
};

export const chartTypes = {
  line: "line",
  bar: "bar",
};

export const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
];

export const acctTypes = {
  admin: "admin",
  staff: "staff",
  department: "department",
  operator: "operator",
  user: "user",
};

export const models = {
  kiosk: "kiosk",
  location: "location",
};

export const configs = { plan: "plan", city: "city" };
export const conceptsAndMenus = {
  concept: "concept",
  menu: "menu",
  ingredient: "ingredient",
  machine: "machine",
};

export const timing = {
  daily: "daily",
  weekly: "weekly",
  monthly: "monthly",
  annually: "annualy",
};

export const statuses = {
  active: "active",
  inactive: "inactive",
  expiring: "expiring",
};

export const subscriptionsFilter = [
  { label: "Active", value: statuses.active },
  { label: "Inactive", value: statuses.inactive },
  { label: "Expiring", value: statuses.expiring },
];

export const actions = {
  add: "add",
  remove: "remove",
};

export const orderStatus = {
  placed: "placed",
  transit: "transit",
  delivered: "delivered",
  proccesing: "processing",
  canceled: "canceled",
};
