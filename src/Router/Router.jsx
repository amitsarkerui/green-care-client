import { createBrowserRouter } from "react-router-dom";
import Layout from "../Layout/Layout";
import Home from "../Pages/Home/Home";
import PickSlot from "../Pages/PickSlot/PickSlot";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout></Layout>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "pickSlot/:id",
        element: <PickSlot></PickSlot>,
        loader: ({ params }) =>
          fetch(`http://localhost:2020/doctors/${params.id}`),
      },
    ],
  },
]);
