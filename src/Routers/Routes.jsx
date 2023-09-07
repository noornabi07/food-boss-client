import { createBrowserRouter } from "react-router-dom";
import Main from "../Components/MainLayout/Main";
import Home from "../Components/Home/Home";
import Menu from "../Components/Menu/Menu/Menu";

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
            }
        ]
    }
])

export default router;