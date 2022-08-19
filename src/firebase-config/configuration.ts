// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "@firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyA8sZMuffZ-Ng0ewdkXUpe6YwWZK1gBoIo",
    authDomain: "auth-el1.firebaseapp.com",
    projectId: "auth-el1",
    storageBucket: "auth-el1.appspot.com",
    messagingSenderId: "359756553690",
    appId: "1:359756553690:web:c6008364e79a2e579174e3",
    measurementId: "G-HEG04TJCQP"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
export default auth;