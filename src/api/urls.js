const urls = {
  admin: {
    auth: {
      login: "/v1/admin/auth/login",
      access: "/v1/admin/auth/restore-access",
    },
    profile: {
      baseUrl: "/v1/admin/profile",
      register: "/v1/admin/profile/new",
      me: "/v1/admin/profile/me",
    },
    accounts: {
      baseUrl: "/v1/admin/accounts?pageNumber={{pageNumber}}&limit={{limit}}",
      count: "/v1/admin/accounts/count",
      register: "/v1/auth/signup",
    },
    departments: {
      baseUrl:
        "/v1/admin/departments?pageNumber={{pageNumber}}&limit={{limit}}",
      new: "/v1/admin/departments/new",
      base: "/v1/admin/departments/",
    },
    businesses: {
      baseUrl: "/v1/admin/business",
      plans: {
        baseUrl: "/v1/business/plans",
        base: "/v1/admin/business/plans",
      },
      orders: {
        base: "/v1/admin/business/orders?",
        update: "v1/admin/business/orders/{{orderId}}?status={{status}}",
        orderItems: "/v1/admin/business/orders/{{orderId}}/items",
      },
      kiosks: {
        baseUrl: "/v1/admin/business/kiosks",
        new: "/v1/admin/business/kiosks/new",
        update: "/v1/admin/business/kiosks/{{kioskId}}",
        assign:
          "/v1/admin/business/subscriptions/kiosk?subscription={{subscriptionId}}&action={{action}}",
      },
      concepts: {
        baseUrl: "/v1/business/concepts",
        new: "/v1/admin/business/concepts/new",
        update: "/v1/admin/business/concepts/",
      },
      subscriptions: {
        baseUrl: "/v1/admin/business/subscriptions",
        count: "/v1/admin/business/subscriptions/count",
        expiryCount: "/v1/admin/business/subscriptions/count",
        updateStatus: "/v1/admin/business/subscriptions/status",
        modifyConcept:
          "/v1/admin/business/subscriptions/concept?subscription={{subscriptionId}}&action={{action}}",
      },
      locations: {
        disable: "/v1/admin/business/locations/:id/disable",
        enable: "/v1/admin/business/locations/:id/enable",
        new: "/v1/admin/business/locations/new",
        baseUrl: "/v1/admin/business/locations",
        count: "/v1/admin/business/locations/count",
      },
      menu: {
        baseUrl: "/v1/admin/business/menus",
        new: "v1/admin/business/menus/new",
        addToConcept: "/v1/admin/business/menus/add-to-concept",
      },
      ingredient: {
        baseUrl: "v1/admin/business/menus/ingredients",
        new: "v1/admin/business/menus/ingredients/new",
        addToMenu: "/v1/admin/business/menus/ingredients/add-to-menu",
      },
      machine: {
        baseUrl: "/v1/admin/business/machines",
        new: "/v1/admin/business/machines/new",
        addToConcept: "/v1/admin/business/machines/add-to-concept",
      },
    },
  },
  files: {
    baseUrl: "/v1/files/",
  },
  operations: {
    baseUrl: "/v1/operations",
    cities: {
      baseUrl: "/v1/operations/cities",
      new: "/v1/operations/cities/new",
      update: "/v1/operations/cities/",
    },
  },
  businesses: {
    menus: {
      baseUrl: "/v1/business/menus/",
      getMenuIngredients: "/v1/business/menus/ingredients?id={{menuId}}",
    },
    concepts: {
      baseUrl: "/v1/business/concepts",
      getConceptMenu: "/v1/business/menus/concepts?id={{conceptId}}",
      getConceptMachines: "v1/business/machines?concept={{conceptId}}",
    },
  },
};

export default urls;
