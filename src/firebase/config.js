import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
    apiKey: "AIzaSyBFZ7VIkAqbYZDiSr2I5Wp3j7oM1j3WZ2k",
    authDomain: "don-jose-f608b.firebaseapp.com",
    projectId: "don-jose-f608b",
    storageBucket: "don-jose-f608b.appspot.com",
    messagingSenderId: "500347813331",
    appId: "1:500347813331:web:0d825634a821078bbf0326",
    measurementId: "G-91T5PZZ363",
};


    const app =  initializeApp(firebaseConfig);
    export const db = getFirestore(app); 

