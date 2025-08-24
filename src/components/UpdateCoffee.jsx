import React from 'react';
import { useLoaderData } from 'react-router';
import Swal from 'sweetalert2';


const UpdateCoffee = () => {
    const { _id, details, taste, supplier, quantity, price, photo, name } = useLoaderData();

    const handleUpdateCoffee = (e) => {
        e.preventDefault();
        const form = e.target;
        const formData = new FormData(form);
        const updatedData = Object.fromEntries(formData.entries());
        fetch(`http://localhost:3000/coffees/${_id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updatedData)
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount) {
                    Swal.fire({
                        position: "top-center",
                        icon: "success",
                        title: "Coffee updated successfully!",
                        showConfirmButton: false,
                        timer: 1500
                    });
                }
            })

    }
    return (
        <div className='px-24 py-17 bg-[#F4F3F0]'>
            <div className='max-w-4xl mx-auto space-y-4'>
                <h1 className='text-5xl text-center'>Update Coffee</h1>
            </div>
            <form onSubmit={handleUpdateCoffee}>
                <div className='grid grid-cols-1 md:grid-cols-2 gap-6 my-6'>

                    <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-full border p-4">
                        <label className="label text-xl font-semibold">Name</label>
                        <input defaultValue={name} type="text" name='name' className="input w-full" placeholder="Enter coffee name" />
                    </fieldset>

                    <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-full border p-4">
                        <label className="label text-xl font-semibold">Quantity</label>
                        <input defaultValue={quantity} type="text" name='quantity' className="input w-full" placeholder="Enter quantity" />
                    </fieldset>

                    <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-full border p-4">
                        <label className="label text-xl font-semibold">Supplier</label>
                        <input defaultValue={supplier} type="text" name='supplier' className="input w-full" placeholder="Enter coffee supplier" />
                    </fieldset>

                    <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-full border p-4">
                        <label className="label text-xl font-semibold">Taste</label>
                        <input defaultValue={taste} type="text" name='taste' className="input w-full" placeholder="Enter coffee taste" />
                    </fieldset>

                    <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-full border p-4">
                        <label className="label text-xl font-semibold">Price</label>
                        <input defaultValue={price} type="text" name='price' className="input w-full" placeholder="Price per cup" />
                    </fieldset>

                    <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-full border p-4">
                        <label className="label text-xl font-semibold">Details</label>
                        <input defaultValue={details} type="text" name='details' className="input w-full" placeholder="Enter coffee details" />
                    </fieldset>

                    <fieldset className="md:col-span-2 fieldset bg-base-200 border-base-300 rounded-box w-full border p-4">
                        <label className="label text-xl font-semibold">Photo</label>
                        <input defaultValue={photo} type="text" name='photo' className="input w-full" placeholder="Enter photo URL" />
                    </fieldset>
                </div>
                <button className='w-full py-3 outline rounded bg-[#D2B48C]' type="submit">Update Coffee</button>
            </form>
        </div>
    );
};

export default UpdateCoffee;