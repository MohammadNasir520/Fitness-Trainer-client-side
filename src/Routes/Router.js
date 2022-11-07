import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import AddServices from "../Pages/AddServices/AddServices";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import MyReviews from "../Pages/MyReviews/MyReviews";
import SignUp from "../Pages/SignUp/SignUp";
import PrivateRoute from "./PrivateRoute";

export const router= createBrowserRouter([
    {
        path:'/',
        element:<Main></Main>,
        children:[

            {
                path:'/',
                element:<Home></Home>
            },
            {
                path:'/home',
                element:<Home></Home>
            },
            {
                path:'/signUp',
                element:<SignUp></SignUp>
            },
            {
                path:'/login',
                element:<Login></Login>
            },
            {
                path:'/addServices',
                element:<AddServices></AddServices>
            },
            {
                path:'/myReviews',
                element:<MyReviews></MyReviews>
            },
        ]
    }
])