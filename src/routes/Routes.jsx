import { createBrowserRouter } from "react-router";
import MainLayout from "../layouts/MainLayout";
import Home from "../components/Home";
import AddCoffee from "../components/AddCoffee";
import UpdateCoffee from "../components/UpdateCoffee";
import CoffeeDetails from "../components/CoffeeDetails";
import Loader from "../components/Loader";
import SignIn from "../components/SignIn";
import SingUp from "../components/SingUp";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout></MainLayout>,
        children: [
            {
                index: true,
                loader: () => fetch('http://localhost:3000/coffees'),
                element: <Home></Home>,
                hydrateFallbackElement: <Loader></Loader>
            },
            {
                path: '/addCoffee',
                element: <AddCoffee></AddCoffee>
            },
            {
                path: '/updateCoffee/:id',
                loader: ({ params }) => fetch(`http://localhost:3000/coffees/${params.id}`),
                element: <UpdateCoffee></UpdateCoffee>,
                hydrateFallbackElement: <Loader></Loader>
            },
            {
                path: '/coffee/:id',
                loader: ({ params }) => fetch(`http://localhost:3000/coffees/${params.id}`),
                element: <CoffeeDetails></CoffeeDetails>,
                hydrateFallbackElement: <Loader></Loader>
            },
            {
                path: '/signIn',
                element: <SignIn></SignIn>

            },
            {
                path: '/signUp',
                element: <SingUp></SingUp>
            }
        ]

    }

])