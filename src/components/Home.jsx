import React, { useState } from 'react';
import { Link, useLoaderData } from 'react-router';
import CoffeeCard from './CoffeeCard';

const Home = () => {
    const initialCoffees = useLoaderData();
    const [coffees, setCoffees]= useState(initialCoffees);

    return (
        <div className='py-6'>
            <div>
                <div className='flex flex-col items-center gap-4 justify-center py-12'>
                    <p className='text-[#1B1A1A] text-xl'>---Sip & Savour---</p>
                    <h1 className='font-medium text-5xl text-[#331A15]'>Our popular products</h1>
                    <p><button className='btn btn-outline bg-[#E3B577] px-5 py-2 text-white'><Link to={'/addCoffee'}>Add Coffee</Link></button></p>
                </div>
                <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                    {
                        coffees.map((coffee) => <CoffeeCard key={coffee._id} coffee={coffee} coffees={coffees} setCoffees={setCoffees}></CoffeeCard>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Home;