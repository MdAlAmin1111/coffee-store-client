import React, { useContext, useState } from 'react';
import { useLoaderData } from 'react-router';
import Swal from 'sweetalert2';
import { AuthContext } from '../context/AuthContext';

const Users = () => {
    const initialUser = useLoaderData();
    const [users, setUsers] = useState(initialUser);
    const { deleteUserAccount } = useContext(AuthContext);

    const handleDelete = (id) => {

        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                console.log(id);
                fetch(`http://localhost:3000/users/${id}`, {
                    method: "DELETE"
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.deletedCount) {

                            // here have some problem, i can delete last signup user from firebase.
                            // deleteUserAccount()
                            // .then(()=>{
                            //     alert('user deleted')
                            // })
                            // .catch((error)=>{
                            //     alert('something went wrong');
                            // })

                            const remainingUsers = users.filter((user) => user._id !== id);
                            setUsers(remainingUsers);
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your file has been deleted.",
                                icon: "success"
                            });
                        }

                    })



            }
        });

    }

    return (
        <div>
            <h1>All users</h1>

            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>
                                Serial
                            </th>
                            <th>Name</th>
                            <th>Phone Number</th>
                            <th>Email</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */}
                        {
                            users.map((user, index) =>
                                <tr key={user._id}>
                                    <th>
                                        No. {index + 1}
                                    </th>
                                    <td>
                                        <div className="flex items-center gap-3">
                                            <div className="avatar">
                                                <div className="mask mask-squircle h-12 w-12">
                                                    <img
                                                        src={user.photoUrl} />
                                                </div>
                                            </div>
                                            <div>
                                                <div className="font-bold">{user.name}</div>
                                                <div className="text-sm opacity-50">Bangladesh</div>
                                            </div>
                                        </div>
                                    </td>
                                    <td>
                                        {user.number}
                                    </td>
                                    <td>{user.email}</td>
                                    <th className='space-x-2 '>
                                        <button className="btn btn-xs bg-green-400 text-white font-bold">Details</button>
                                        <button className="btn btn-xs bg-blue-400 text-white font-bold">Edit</button>
                                        <button onClick={() => handleDelete(user._id)} className="btn btn-xs bg-red-400 text-white font-bold">Delete</button>
                                    </th>
                                </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Users;