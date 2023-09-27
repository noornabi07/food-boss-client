import { createBrowserRouter } from "react-router-dom";
import Main from "../Components/MainLayout/Main";
import Home from "../Components/Home/Home";
import Menu from "../Components/Menu/Menu/Menu";
import Order from "../Components/Order/Order/Order";
import Login from "../Components/Login/Login";
import Register from "../Components/Register/Register";
import Secret from "../Components/Shared/Secret/Secret";
import PrivetRoutes from "./PrivetRoutes";
import Dashboard from "../Components/MainLayout/Dashboard";
import MyCart from "../Components/Dashboard/MyCart/MyCart";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/menu',
                element: <Menu></Menu>
            },
            {
                path: 'order/:category',
                element: <Order></Order>
            },
            {
                path: 'login',
                element: <Login></Login>
            },
            {
                path: 'register',
                element: <Register></Register>
            },
            {
                path: 'secret',
                element: <PrivetRoutes><Secret></Secret></PrivetRoutes>
            }
        ]
    },
    {
        path: 'dashboard',
        element: <Dashboard></Dashboard>,
        children: [
            {
                path: 'mycart',
                element: <MyCart></MyCart>
            }
        ]
    }
])

export default router;