import {
    createBrowserRouter,
  } from "react-router-dom";

import Home from "../pages/Home/Home";

import Main from "../layout/Main"
import Menu from "../pages/Menu/Menu/Menu";
import OurShop from "../pages/OurShop/OurShop/OurShop";
import Login from "../pages/Login/Login";
import RegisterForm from "../pages/RegisterForm/RegisterForm";
import PrivateRoutes from "./PrivateRoutes";


 export const router = createBrowserRouter([
    {
        path: "/",
        element: <Main/>,
        children : [
          {
            path: '/',
            element: <Home/>
          },
          {
            path: '/menu',
            element: <Menu/>
          },
          {
            path: 'ourShop/:category',
            element: <PrivateRoutes><OurShop/></PrivateRoutes>
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
    }
  ]) 