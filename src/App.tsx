import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { RecoilRoot } from "recoil";
import { routes } from "./routes";
import "./styles/index.scss";

function App() {
  return (
    <RecoilRoot>
      <RouterProvider router={createBrowserRouter(routes)} />
    </RecoilRoot>
  );
}

export default App;
