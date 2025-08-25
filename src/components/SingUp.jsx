import React, { useContext } from 'react';
import { AuthContext } from '../context/AuthContext';
import Swal from 'sweetalert2';

const SingUp = () => {

    const { createUser } = useContext(AuthContext);

    const handleSignUp = (e) => {
        e.preventDefault();
        const form = e.target;
        const formData = new FormData(form);
        // const email = formData.get('email');
        // const password = formData.get('password');

        const data = Object.fromEntries(formData.entries());
        const { email, password, ...restData } = data;

        // const userProfile = { email, ...restData }

        // create user in firebase

        createUser(email, password)
            .then((userCredential) => {
                const user = userCredential.user;
                // console.log(user);

                const userProfile = {
                    email,
                    ...restData,
                    creationTime: user?.metadata?.creationTime,
                    lastSignInTime: user?.metadata?.lastSignInTime
                }

                // save profile info in db
                fetch('http://localhost:3000/users', {
                    method: 'POST',
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify(userProfile)
                })
                    .then(res => res.json())
                    .then(data => {
                        // console.log(data)
                        if (data.insertedId) {
                            Swal.fire({
                                position: "center",
                                icon: "success",
                                title: "Account has been created",
                                showConfirmButton: false,
                                timer: 1500
                            });
                        }

                    })
            })
            .catch((error) => {
                const errorMessage = error.message;
                console.log(errorMessage);
            })


    }
    return (
        <div className="card bg-base-100 max-w-lg mx-auto shrink-0 shadow-2xl my-4">
            <div className="card-body">
                <h1 className="text-5xl font-bold text-center">Sign up now!</h1>
                <form onSubmit={handleSignUp} className="fieldset">

                    <label className="label">Name</label>
                    <input type="text" name='name' className="input w-full" placeholder="Name" />

                    <label className="label">Contact Number</label>
                    <input type="text" name='number' className="input w-full" placeholder="Contact Number" />

                    <label className="label">Email</label>
                    <input type="email" name='email' className="input w-full" placeholder="Email" />

                    <label className="label">Password</label>
                    <input type="password" name='password' className="input w-full" placeholder="Password" />

                    <label className="label">Photo Url</label>
                    <input type="text" name='photoUrl' className="input w-full" placeholder="Photo Url" />

                    <div><a className="link link-hover">Forgot password?</a></div>
                    <button type='submit' className="btn btn-neutral mt-4">Sing up</button>
                </form>
            </div>
        </div>
    );
};

export default SingUp;