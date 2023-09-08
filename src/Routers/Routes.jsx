import { createBrowserRouter } from "react-router-dom";
import Main from "../Components/MainLayout/Main";
import Home from "../Components/Home/Home";
import Menu from "../Components/Menu/Menu/Menu";
import Order from "../Components/Order/Order/Order";
import Login from "../Components/Login/Login";

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
            }
        ]
    }
])

export default router;