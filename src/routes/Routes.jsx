import { createBrowserRouter } from "react-router";
import MainLayout from "../layouts/MainLayout";
import Home from "../components/Home";
import AddCoffee from "../components/AddCoffee";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout></MainLayout>,
        children: [
            {
                index: true,
                loader: () => fetch('http://localhost:3000/coffees'),
                element: <Home></Home>
            },
            {
                path: 'addCoffee',
                element: <AddCoffee></AddCoffee>
            }
        ]

    }

])