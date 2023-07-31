"use client"
import Link from 'next/link'
import React, {useEffect} from 'react'
import {useRouter} from "next/navigation";
import axios from "axios";

function LoginPage() {
    const router = useRouter();
    const [user, setUser] = React.useState({
        email: "",
        password: "",
       
    })
    const [buttonDisabled, setButtonDisabled] = React.useState(false);
    const [loading, setLoading] = React.useState(false);


    const onLogin = async () => {
        try {
            setLoading(true);
            const response = await axios.post("/api/users/login", user);
            console.log("Login success", response.data);
           
            router.push("/profile");
        } catch (error:any) {
            console.log("Login failed", error);
          
        } finally{
        setLoading(false);
        }
    }

    useEffect(() => {
        if(user.email.length > 0 && user.password.length > 0) {
            setButtonDisabled(false);
        } else{
            setButtonDisabled(true);
        }
    }, [user]);


  return (
    <div className="flex flex-col space-y-4 items-center justify-center min-h-screen py-2">
        <h1  className=" mb-4 text-4xl font-extrabold leading-none tracking-tight text-red-600 md:text-5xl lg:text-4xl">Login</h1>
        <hr />
        
        <label htmlFor="email">email</label>
        <input 
        className="p-2 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600 text-black"
            id="email"
            type="text"
            value={user.email}
            onChange={(e) => setUser({...user, email: e.target.value})}
            placeholder="email"
            />
        <label htmlFor="password">password</label>
        <input 
        className="p-2 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600 text-black"
            id="password"
            type="password"
            value={user.password}
            onChange={(e) => setUser({...user, password: e.target.value})}
           
            placeholder="password"
            />
            <button
           onClick={onLogin}
         className=" bg-transparent hover:bg-red-600 text-red-600 font-semibold hover:text-white py-2 px-4 border border-red-500 hover:border-transparent rounded">{buttonDisabled ? "No login" : "login"}</button>
         <Link href='/signup' className="font-medium text-blue-600 dark:text-red-500 hover:underline">Go to Signup</Link>
            
        </div>
  )
}

export default LoginPage
