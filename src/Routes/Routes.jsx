import {
    createBrowserRouter,
  } from "react-router-dom";

import Home from "../pages/Home/Home";

import Main from "../layout/Main"
import Menu from "../pages/Menu/Menu/Menu";
import OurShop from "../pages/OurShop/OurShop/OurShop";
import Login from "../pages/Login/Login";
import RegisterForm from "../pages/RegisterForm/RegisterForm";
// import PrivateRoutes from "./PrivateRoutes";
import ContactUsPage from "../pages/contactUs/ContactUs";
import MyCart from "../pages/DashBoard/MyCart";
import DashBoard from "../layout/DashBoard";
import AllUsers from "../pages/DashBoard/AllUsers/AllUsers";
import AddItem from "../pages/DashBoard/AddItem/AddItem";
import AdminRoutes from "./AdminRoutes";
import AllItems from "../pages/DashBoard/AllItems/AllItems";
import ErrorPage from "../components/ErrorPage";


 export const router = createBrowserRouter([
    {
        path: "/",
        element: <Main/>,
        errorElement: <ErrorPage></ErrorPage>,
        children : [
          {
            path: '/',
            element: <Home/>
          },
          {
            path: '/contact',
            element: <ContactUsPage/>
          },
          {
            path: '/menu',
            element: <Menu/>
          },
          {
            path: '/ourShop/:category',
            element: <OurShop/>
          }, 
          {
            path: '/login',
            element: <Login/>
          },
          {
            path: '/register',
            element: <RegisterForm/>
          }
        ]
    },
    {
      path: "deshboard",
      element: <DashBoard></DashBoard>,
      errorElement: <ErrorPage></ErrorPage>,
      children: [
        {
          path: "mycart",
          element: <MyCart></MyCart>
        },
        {
          path: 'allUsers',
          element: <AllUsers></AllUsers>
        },
        {
          path: 'addItem',
          element: <AdminRoutes><AddItem></AddItem></AdminRoutes>
        },
        {
          path: 'allItems',
          element: <AdminRoutes><AllItems></AllItems></AdminRoutes>
        }
      ]
    }
  ]) 