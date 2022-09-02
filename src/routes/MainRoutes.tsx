import { useRoutes } from "react-router-dom";
import { Home } from '../pages/Home/'
import { Users } from "../pages/Users";


export const MainRoutes = () => {
    return useRoutes([
        { path: '/', element: <Home /> },
        { path: '/users', element: <Users /> }
    ])
}