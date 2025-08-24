import React from 'react';
import { NavLink } from 'react-router';

const Header = () => {
    return (
        <div className='bg-amber-400 p-2'>
            <h1 className='text-5xl text-center py-3'>Header</h1>
            <div className='flex justify-center space-x-1'>
                <NavLink className={'bg-gray-100 rounded p-1'} to={'/'}>Home</NavLink>
                <NavLink className={'bg-gray-100 rounded p-1'} to={'/signIn'}>Sign In</NavLink>
                <NavLink className={'bg-gray-100 rounded p-1'} to={'/signUp'}>Sign Up</NavLink>
            </div>
        </div>

    );
};

export default Header;