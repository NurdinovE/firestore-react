import React from "react";
import { auth,googleProvider } from "../firebase-config/firebase"
import { createUserWithEmailAndPassword, signInWithPopup,signOut } from "firebase/auth";
import { useState } from "react";

const Auth = () => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    console.log(auth?.currentUser?.email);

    const signIn = async () => {
        try{
            await createUserWithEmailAndPassword(auth,email,password)
        } catch(err){
            console.log(err);
        }
    }
    const signInWithGoogle = async () => {
        try{
            await signInWithPopup(auth,googleProvider)
        } catch(err){
            console.log(err);
        }
    }
    

    const logout = async () => {
        try{
            await signOut(auth)
        } catch(err){
            console.log(err);
        }
    }
    return (
        <div>
            <input
             placeholder="Email"
             onChange={(e) => setEmail(e.target.value)}
             />
            <input
             placeholder="Password"
             onChange={(e) => setPassword(e.target.value)}
             />

            <button onClick={signIn}>Sign in</button>

            <button onClick={signInWithGoogle}>sign with google</button>
            <button onClick={logout}>sign out</button>
        </div>
    )
}

export default Auth 



