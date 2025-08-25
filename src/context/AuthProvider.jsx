import React from 'react';
import { AuthContext } from './AuthContext';
import { createUserWithEmailAndPassword, deleteUser, signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebase/firebase.init';

const AuthProvider = ({ children }) => {

    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password);
    }

    const singInUser = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password);
    }

    const deleteUserAccount = () => {
        return deleteUser(auth.currentUser);
    }

    const userInfo = {
        createUser,
        deleteUserAccount,
        singInUser
    };

    return (
        <AuthContext value={userInfo}>
            {children}
        </AuthContext>
    );
};

export default AuthProvider;