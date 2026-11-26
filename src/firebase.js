
import { initializeApp } from "firebase/app";
import {createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword, signOut } from 'firebase/auth';
import { addDoc, collection, getFirestore } from "firebase/firestore";
import { toast } from "react-toastify";

const firebaseConfig = {
  apiKey: "AIzaSyCJkRklyGmASJZeZBjlNFM405vE0mHcrc0",
  authDomain: "netflix-clone-15f54.firebaseapp.com",
  projectId: "netflix-clone-15f54",
  storageBucket: "netflix-clone-15f54.firebasestorage.app",
  messagingSenderId: "631616615505",
  appId: "1:631616615505:web:c5875bdac01e43b40b3470"
};


const app = initializeApp(firebaseConfig);

const auth =getAuth(app);

const db=getFirestore(app);

const signup = async(name,email,password)=>{
    try {
        const response= await createUserWithEmailAndPassword(auth,email,password);
        const user=response.user;
        await addDoc(collection(db,'user'),{
            uid:user.uid,
            name,
            authProvider:"local",
            email,
        });
    } catch (error) {
        console.log(error);
        toast.error(error.code.split('/')[1].split('-').join(' '))
    }
}

const loginin = async(email,password)=>{
    try {
        await signInWithEmailAndPassword(auth,email,password)
    } catch (error) {
        console.log(error);
        toast.error(error.code.split('/')[1].split('-').join(' '))
    }
}

const logout = async()=>{
    signOut(auth);
}

export {auth,db,loginin,signup,logout};