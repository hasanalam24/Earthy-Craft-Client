// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDD_JHN_xSawjTRwfopNzhdUzfdD67SC80",
    authDomain: "earthy-art-and-craft.firebaseapp.com",
    projectId: "earthy-art-and-craft",
    storageBucket: "earthy-art-and-craft.appspot.com",
    messagingSenderId: "249537423634",
    appId: "1:249537423634:web:2666b8800298c57f90abcb"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;