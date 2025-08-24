import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyCm6FGPEGXo3hgS0kPmwCyXZwwvUpEeY7g",
    authDomain: "coffee-store-app-90a98.firebaseapp.com",
    projectId: "coffee-store-app-90a98",
    storageBucket: "coffee-store-app-90a98.firebasestorage.app",
    messagingSenderId: "266360974031",
    appId: "1:266360974031:web:ce79d07c4f956b12b025ba"
};


const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);