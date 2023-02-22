import Layout from "../components/Layout";
import A from "../pages/A";
import B from "../pages/B";

const routes = [
  {
    path: "/",
    element: <Layout />,
    errorElement: "Not Found",
    children: [
      {
        path: "/A",
        element: <A />,
      },
      {
        path: "/B",
        element: <B />,
      },
    ],
  },
];

export { routes };
