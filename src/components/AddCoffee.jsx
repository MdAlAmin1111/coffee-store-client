import React from 'react';

const AddCoffee = () => {

    const handleAddCoffee = (e) => {
        e.preventDefault();
        const form = e.target;
        const formData = new FormData(form);
        const newCoffee = Object.fromEntries(formData);

        // send data to database
        fetch('http://localhost:3000/coffees', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newCoffee)
        })
            .then(res => res.json())
            .then(data => console.log('after adding data in db: ', data));




        // const name = form.name.value;
        // const chef = form.chef.value;
        // const supplier = form.supplier.value;
        // const taste = form.taste.value;
        // const category = form.category.value;
        // const details = form.details.value;
        // const photo = form.photo.value;
        // console.log({name, chef, supplier, taste, category, details, photo});
    }

    return (
        <div className='px-24 py-17 bg-[#F4F3F0]'>
            <div className='max-w-4xl mx-auto space-y-4'>
                <h1 className='text-5xl text-center'>Add Coffee</h1>
                <p className='text-center text-lg'>It is a long established fact that a reader will be distraceted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here.</p>
            </div>
            <form onSubmit={handleAddCoffee}>
                <div className='grid grid-cols-1 md:grid-cols-2 gap-6 my-6'>

                    <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-full border p-4">
                        <label className="label text-xl font-semibold">Name</label>
                        <input type="text" name='name' className="input w-full" placeholder="Enter coffee name" />
                    </fieldset>

                    <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-full border p-4">
                        <label className="label text-xl font-semibold">Chef</label>
                        <input type="text" name='chef' className="input w-full" placeholder="Enter coffee chef" />
                    </fieldset>

                    <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-full border p-4">
                        <label className="label text-xl font-semibold">Supplier</label>
                        <input type="text" name='supplier' className="input w-full" placeholder="Enter coffee supplier" />
                    </fieldset>

                    <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-full border p-4">
                        <label className="label text-xl font-semibold">Taste</label>
                        <input type="text" name='taste' className="input w-full" placeholder="Enter coffee taste" />
                    </fieldset>

                    <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-full border p-4">
                        <label className="label text-xl font-semibold">Category</label>
                        <input type="text" name='category' className="input w-full" placeholder="Enter coffee category" />
                    </fieldset>

                    <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-full border p-4">
                        <label className="label text-xl font-semibold">Details</label>
                        <input type="text" name='details' className="input w-full" placeholder="Enter coffee details" />
                    </fieldset>

                    <fieldset className="md:col-span-2 fieldset bg-base-200 border-base-300 rounded-box w-full border p-4">
                        <label className="label text-xl font-semibold">Photo</label>
                        <input type="text" name='photo' className="input w-full" placeholder="Enter photo URL" />
                    </fieldset>
                </div>
                <button className='w-full py-3 outline rounded bg-[#D2B48C]' type="submit">Add Coffee</button>
            </form>
        </div>
    );
};

export default AddCoffee;