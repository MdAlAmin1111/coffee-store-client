import React from 'react';
import { useLoaderData } from 'react-router';

const CoffeeDetails = () => {
    const { photo, price, quantity, name, supplier, details } = useLoaderData();
    return (
        <div >
            <img src={photo} alt="" />
            <h1>Name: {name}</h1>
            <p>Price: {price}tk</p>
            <p>Quantity: {quantity}</p>
            <p>Supplier Name: {supplier}</p>
            <p>Details: {details}</p>

        </div>
    );
};

export default CoffeeDetails;