import React from 'react';
import { FaEye } from 'react-icons/fa';
import { MdDelete, MdModeEdit } from 'react-icons/md';
import { Link } from 'react-router';
import Swal from 'sweetalert2';

const CoffeeCard = ({ coffee, coffees, setCoffees }) => {
    const { _id, name, supplier, photo, price } = coffee;

    const handleDelete = (_id) => {

        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        })
            .then((result) => {
                if (result.isConfirmed) {
                    // delete data from database
                    fetch(`http://localhost:3000/coffees/${_id}`, {
                        method: 'DELETE',
                    })
                        .then(res => res.json())
                        .then(data => {
                            if (data.deletedCount) {
                                Swal.fire({
                                    title: "Deleted!",
                                    text: "Your file has been deleted.",
                                    icon: "success"
                                });
                                const remainCoffee = coffees.filter((singleCoffee) => singleCoffee._id != _id);
                                setCoffees(remainCoffee);
                            }
                        });


                }
            });
    }

    return (
        <div className="card card-side shadow-sm p-7 bg-[#F5F4F1]">
            <figure>
                <img
                    src={photo}
                    alt="Coffee" />
            </figure>
            <div className="flex w-full items-center justify-between px-6">
                <div className='space-y-3'>
                    <h1><span className='font-semibold text-xl'>Name: {name}</span></h1>
                    <p><span className='font-semibold text-xl'>Chef: {supplier}</span></p>
                    <p><span className='font-semibold text-xl'>Price: {price}tk</span></p>
                </div>
                <div className='*:rounded *:p-2 space-y-3'>
                    <Link to={`/coffee/${_id}`}><FaEye className='bg-[#D2B48C] cursor-pointer' color='white' size={35} /></Link>
                    <Link to={`/updateCoffee/${_id}`}><MdModeEdit className='bg-[#3C393B] cursor-pointer' color='white' size={35} /></Link>
                    <MdDelete onClick={() => handleDelete(_id)} className='bg-[#EA4744] cursor-pointer' color='white' size={35} />
                </div>
            </div>
        </div>
    );
};

export default CoffeeCard;