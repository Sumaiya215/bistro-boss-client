// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: import.meta.env.VITE_apiKey,
    authDomain: import.meta.env.VITE_authDomain,
    projectId: import.meta.env.VITE_projectId,
    storageBucket: import.meta.env.VITE_storageBucket,
    messagingSenderId: import.meta.env.VITE_messagingSenderId,
    appId: import.meta.env.VITE_appId,

    //   apiKey: "AIzaSyCc3_yNAasi2Fwx7ZzY7A76uK9Ce6QOxfY",
    //   authDomain: "bistro-boss-12919.firebaseapp.com",
    //   projectId: "bistro-boss-12919",
    //   storageBucket: "bistro-boss-12919.firebasestorage.app",
    //   messagingSenderId: "906788897116",
    //   appId: "1:906788897116:web:1c3d3ad349c87b15000199"
};

// Initialize Firebase
 const app = initializeApp(firebaseConfig);
 export const auth = getAuth(app);