import React, { useContext } from 'react';
import { AuthContext } from '../context/AuthContext';
import Swal from 'sweetalert2';

const SignIn = () => {

    const { singInUser } = useContext(AuthContext);

    const handleSignIn = (e) => {
        e.preventDefault();
        const form = e.target;
        const formData = new FormData(form);
        const email = formData.get('email');
        const password = formData.get('password');
        console.log(password, email);
        singInUser(email, password)
            .then(userCredential => {
                Swal.fire({
                    position: "center",
                    icon: "success",
                    title: "Sing in successful",
                    showConfirmButton: false,
                    timer: 1500
                });
                console.log(userCredential.user)

                // update last signin in db
                const signInInfo = {
                    email,
                    lastSignInTime: userCredential.user?.metadata?.lastSignInTime
                }
                fetch('http://localhost:3000/users', {
                    method: "PATCH",
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify(signInInfo)
                })
                .then(res=>res.json())
                .then(data=>{
                    console.log(data)
                })

            })
            .catch(error => {
                console.log(error.message);
            })
    }

    return (
        <div className="card bg-base-100 max-w-lg mx-auto shrink-0 shadow-2xl my-4">
            <div className="card-body">
                <h1 className="text-5xl font-bold text-center">Sign in now!</h1>
                <form onSubmit={handleSignIn} className="fieldset">

                    <label className="label">Email</label>
                    <input type="email" name='email' className="input w-full" placeholder="Email" />

                    <label className="label">Password</label>
                    <input type="password" name='password' className="input w-full" placeholder="Password" />

                    <div><a className="link link-hover">Forgot password?</a></div>
                    <button type='submit' className="btn btn-neutral mt-4">Sing in</button>
                </form>
            </div>
        </div>
    );
};

export default SignIn;