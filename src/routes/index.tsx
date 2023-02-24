import Layout from "../components/Layout";
import { menuRoutes } from "../components/Menu/store";

const routes = [
  {
    path: "/",
    element: <Layout />,
    errorElement: "Not Found",
    children: menuRoutes,
  },
];

export { routes };
