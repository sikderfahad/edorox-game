import { createBrowserRouter } from "react-router-dom";
import Root from "../layout/Root";
import NotFound from "../pages/error/NotFound";
import PrivateRoute from "../utils/PrivateRoute";
import GameInfo from "../pages/gameInfo/GameInfo";

import Home from "../pages/home/Home";
import Login from "../pages/login/Login";
import Signup from "../pages/signup/Signup";
import About from "../pages/about/About";
import Blog from "../pages/blog/Blog";
import Dashboard from "../layout/Dashboard";
import DashboardHome from "../pages/dashboard/DashboardHome";
import AllProducts from "../pages/dashboard/AllProducts";
import AddProduct from "../pages/dashboard/AddProduct";
import EditProduct from "../pages/dashboard/EditProduct";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <NotFound />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "signup",
        element: <Signup />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "blog",
        element: <Blog />,
      },
      {
        path: "/game-info/:id",
        element: <GameInfo />,
        loader: ({ params }) =>
          fetch(`http://localhost:3000/games/${params.id}`),
      },
    ],
  },
  {
    path: "dashboard",
    element: (
      <PrivateRoute>
        <Dashboard />
      </PrivateRoute>
    ),
    errorElement: <NotFound />,
    children: [
      {
        index: true,
        element: <DashboardHome />,
      },
      {
        path: "/dashboard/all-products",
        element: <AllProducts />,
      },
      {
        path: "/dashboard/add-product",
        element: <AddProduct />,
      },
      {
        path: "/dashboard/edit-product/:id",
        element: <EditProduct />,
        loader: ({ params }) =>
          fetch(`http://localhost:3000/games/${params.id}`),
      },
    ],
  },
]);
