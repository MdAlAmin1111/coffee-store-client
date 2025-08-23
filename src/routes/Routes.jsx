import { createBrowserRouter } from "react-router";
import MainLayout from "../layouts/MainLayout";
import Home from "../components/Home";
import AddCoffee from "../components/AddCoffee";
import UpdateCoffee from "../components/UpdateCoffee";
import CoffeeDetails from "../components/CoffeeDetails";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout></MainLayout>,
        children: [
            {
                index: true,
                loader: () => fetch('http://localhost:3000/coffees'),
                element: <Home></Home>,
                hydrateFallbackElement: <h1>Loading</h1>
            },
            {
                path: 'addCoffee',
                element: <AddCoffee></AddCoffee>
            },
            {
                path: 'updateCoffee',
                element: <UpdateCoffee></UpdateCoffee>
            },
            {
                path: 'coffee/:id',
                loader: ({params})=>fetch(`http://localhost:3000/coffees/${params.id}`),
                element: <CoffeeDetails></CoffeeDetails>
            }
        ]

    }

])