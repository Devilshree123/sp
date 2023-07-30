import React from "react";


export default function SignupPage() {
    return(
        <div className="flex flex-col items-center justify-center min-h-screen py-2" >
             <h1>Signup</h1>
             <hr />
             <label htmlFor="username">username</label>
             <input 
             className="p-2 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600 text-black"
             id="username"
             type="text"
             placeholder="username"
             />

           <label htmlFor="email">email</label>
            <input 
             className="p-2 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600 text-black"
             id="email"
             type="text"
             placeholder="email"
             />

             <label htmlFor="password">password</label>
             <input 
             className="p-2 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600 text-black"
             id="password"
             type="password"
             placeholder="password"
             />
             <button
            
             className="p-2 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600">Signup</button>


        </div>
        
    )

}