const getUrlFromBase = (url) => url.replace("/*", "");

export const paths = Object.freeze({
  base: "/",
  login: "/login",
  app: "/app",
  add: "/add",
  append: "/append",
  accounts: "/accounts/*",
  
  dispatchers: "/dispatchers/*",
  inventory: "/inventory/*",
  orders: "/orders/*",

  analytics: "/analytics/*",
  support: "/support/*",
  configs: "/configs/*",
  list: "/list",
  view: "/view",
  success: "/success",

  departments: "/departments/*",
});

export const links = Object.freeze({
  accounts: {
    to: getUrlFromBase(paths.accounts),
    list: (t) => getUrlFromBase(paths.accounts) + "/list?type=" + t,
    view: (t, id) =>
      getUrlFromBase(paths.accounts) + "/view?type=" + t + "&id=" + id,
    add: (t) => getUrlFromBase(paths.accounts) + "/add?type=" + t,
    success: (t) => getUrlFromBase(paths.accounts) + "/success?type=" + t,
  },



  configs: {
    to: getUrlFromBase(paths.configs),
    list: (t) => getUrlFromBase(paths.configs) + "/list?type=" + t,
    view: (t, id) =>
      getUrlFromBase(paths.configs) + "/view?type=" + t + "&id=" + id,
    add: (t) => getUrlFromBase(paths.configs) + "/add?type=" + t,
    success: (t) => getUrlFromBase(paths.configs) + "/success?type=" + t,
  },


  orders: {
    to: getUrlFromBase(paths.orders),
    list: (id) => getUrlFromBase(paths.orders) + "/list",
    view: (id) => getUrlFromBase(paths.orders) + "/view?id=" + id,
    add: () => getUrlFromBase(paths.orders) + "/add",
    success: () => getUrlFromBase(paths.orders) + "/success",
  },
});
