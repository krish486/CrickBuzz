import { createBrowserRouter, RouterProvider, } from "react-router";
import AppLayout from "./Layout/AppLayout";
import AdminLayout from "./Layout/AdminLayout";


let router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />
  },
  {
    path: "/admin",
    element: <AdminLayout />
  }
]);


export default router