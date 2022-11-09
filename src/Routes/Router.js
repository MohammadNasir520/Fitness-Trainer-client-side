import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import AddServices from "../Pages/AddServices/AddServices";
import AllServices from "../Pages/AllServices/AllServices";
import EditReview from "../Pages/EditReview/EditReview";
import ErrorPage from "../Pages/Errorpage/ErrorPage";
import Faq from "../Pages/Faq/Faq";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import MyReviews from "../Pages/MyReviews/MyReviews";
import ServiceDetailsAndReviews from "../Pages/ServiceDetailsAndReviews/ServiceDetailsAndReviews";
import SignUp from "../Pages/SignUp/SignUp";
import PrivateRoute from "./PrivateRoute";

export const router= createBrowserRouter([
    {
        path:'/',
        element:<Main></Main>,
        errorElement:<ErrorPage></ErrorPage>,
        children:[

            {
                path:'/',
                element:<Home></Home>,
                loader:()=>fetch('http://localhost:5000/services')
            },
            {
                path:'/home',
                element:<Home></Home>,
                loader:()=>fetch('http://localhost:5000/services')
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
                element:<PrivateRoute><AddServices></AddServices></PrivateRoute>
            },
            {
                path:'/myReviews',
                element:<PrivateRoute><MyReviews></MyReviews></PrivateRoute>
            },
            {
                path:'/allServices',
                element:<AllServices></AllServices>,
                loader:()=>fetch('http://localhost:5000/allServices')
            },
            {
                path:'/service/:id',
                element:<ServiceDetailsAndReviews></ServiceDetailsAndReviews>,
                loader:({params})=>fetch(`http://localhost:5000/service/${params.id}`)
            },
            {

                path:'/editReview/:id',
                element:<EditReview></EditReview>,
                loader:({params})=>fetch(`http://localhost:5000/reviews/${params.id}`)
            },
            {
                path:'/faq',
                element:<Faq></Faq>
            },
        ]
    }
])
