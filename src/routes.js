const routes = [
  {
    path: "/sandwiches",
    component: "./components/Sandwiches"
  },
  {
    path: "/tacos",
    component: "./components/Tacos",
    routes: [
      {
        path: "/tacos/bus",
        component: "./components/Bus"
      },
      {
        path: "/tacos/cart",
        component: "./components/Cart"
      }
    ]
  }
];

export default routes;