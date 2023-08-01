
"use client"
// Initialization for ES Users

import React ,{useEffect} from "react";
import {useRouter} from "next/navigation";
import axios from "axios";
import toast, {Toaster} from "react-hot-toast";


export default function SignupPage() {
  const router = useRouter();
  const [user, setUser] = React.useState({
      email: "",
      password: "",
      name: "",
  });
  const [buttonDisabled, setButtonDisabled] = React.useState(false);
  const [loading, setLoading] = React.useState(false);

  const onSignup = async () => {
      try {
          setLoading(true);
          const response = await axios.post("/api/signup", user);

          console.log(response.data)
          
          if(response.data.success == true) {
              console.log("Signup success", response.data);
              const interval = setInterval(() => {
                  router.push("/login");
              }, 2000);
              toast.success("Signup successful")
              
          }else{
              toast.error(response.data.message)
              console.log("Please enter valid credentials")
          }
      } catch (error: any) {
          console.log("Signup Failed", error);
          console.log("Signup failed", error.message);
      } finally {
          setLoading(false);
      }
  };

  useEffect(() => {
      if (
          user.email.length > 0 &&
          user.password.length > 0 &&
          user.name.length > 0
      ) {
          setButtonDisabled(false);
      } else {
          setButtonDisabled(true);
      }
  }, [user]);
=======

    return (
        <div className="flex flex-col space-y-4 items-center justify-center min-h-screen py-2">
            <div><Toaster/></div>
            <h1 className=" mb-4 text-4xl font-extrabold leading-none tracking-tight text-red-600 md:text-5xl lg:text-4xl ">
                Signup
            </h1>
            <hr />
            <label htmlFor="name">name</label>
            <input
                className="p-2 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600 text-black"
                id="name"
                type="text"
                value={user.name}
                onChange={(e) => setUser({ ...user, name: e.target.value })}
                placeholder="name"
            />


    return(
    <section className="h-screen">
  <div className="container h-full px-6 py-24">
    <div
      className="g-6 flex h-full flex-wrap items-center justify-center lg:justify-between">
     
      <div className="mb-12 md:mb-0 md:w-8/12 lg:w-6/12">
        <img
          src="https://www.netsolutions.com/insights/wp-content/uploads/2021/10/top-10-dating-apps.jpg"
          className="w-full"
          alt="Phone image" />
      </div>

      
      <div className="flex flex-col space-y-4 md:w-8/12 lg:ml-6 lg:w-5/12">
        <form>
        <div className="relative mb-6" data-te-input-wrapper-init>
            <input
              type="text"
              className="peer block min-h-[auto] w-full rounded border-0 bg-transparent px-3 py-[0.32rem] leading-[2.15] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-black-200 dark:placeholder:text-black-200 [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
              id="exampleFormControlInput2"
              value={user.name}
              onChange={(e) => setUser({...user, name: e.target.value})}
              placeholder="Name" />
            <label
              htmlFor="exampleFormControlInput33"
              className="pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[2.15] text-black-500 transition-all duration-200 ease-out peer-focus:-translate-y-[1.15rem] peer-focus:scale-[0.8] peer-focus:text-black peer-data-[te-input-state-active]:-translate-y-[1.15rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-black-200 dark:peer-focus:text-primary"
              >Name
            </label>
          </div>
        
         
          <div className="relative mb-6" data-te-input-wrapper-init>
            <input
              type="text"
              className="peer block min-h-[auto] w-full rounded border-0 bg-transparent px-3 py-[0.32rem] leading-[2.15] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-black-200 dark:placeholder:text-neutral-200 [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
              id="exampleFormControlInput3"
              value={user.email}
              onChange={(e) => setUser({...user, email: e.target.value})}
              placeholder="Email address" />
            <label
              htmlFor="exampleFormControlInput3"
              className="pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[2.15] text-black-500 transition-all duration-200 ease-out peer-focus:-translate-y-[1.15rem] peer-focus:scale-[0.8] peer-focus:text-black peer-data-[te-input-state-active]:-translate-y-[1.15rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-black-200 dark:peer-focus:text-primary"
              >Email address
            </label>
          </div>

          
          <div className="relative mb-6" data-te-input-wrapper-init>
            <input
              type="password"
              className="peer block min-h-[auto] w-full rounded border-0 bg-transparent px-3 py-[0.32rem] leading-[2.15] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-black-200 dark:placeholder:text-neutral-200 [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
              id="exampleFormControlInput33"
              value={user.password}
              onChange={(e) => setUser({...user, password: e.target.value})}
              placeholder="Password" />
            <label
              htmlFor="exampleFormControlInput33"
              className="pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[2.15] text-black-500 transition-all duration-200 ease-out peer-focus:-translate-y-[1.15rem] peer-focus:scale-[0.8] peer-focus:text-black peer-data-[te-input-state-active]:-translate-y-[1.15rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-black-200 dark:peer-focus:text-primary"
              >Password
            </label>
          </div>

          <div className="flex flex-col space-y-4">
          <button
           onClick={onSignup}
            type="submit"
            className="inline-block w-full rounded bg-primary px-7 pb-2.5 pt-3 text-sm font-medium uppercase leading-normal bg-cyan-500 shadow-lg shadow-cyan-500/50]   "
            data-te-ripple-init
            data-te-ripple-color="light">
            {buttonDisabled ? "No Signup" : "Signup"}
          </button>

          <div className="flex flex-col space-y-6 mb-6 items-center justify-between">
            <div className="flex flex-col space-y-4 mb-[0.125rem] block min-h-[1.5rem] pl-[1.5rem]">
            <a href='/login' className="text-blue-600 visited:text-purple-600 ...">
               click here to login
               </a>
            </div>
          </div>
         </div> 

         
          <div
            className="my-4 flex items-center before:mt-0.5 before:flex-1 before:border-t before:border-black-300 after:mt-0.5 after:flex-1 after:border-t after:border-black-300">
            <p
              className="mx-4 mb-0 text-center font-semibold dark:text-black-200">
              OR
            </p>
          </div>

          
          <a
            className="mb-3 flex w-full items-center justify-center rounded bg-primary px-7 pb-2.5 pt-3 text-center text-sm font-medium uppercase leading-normal text-black bg-black-500 shadow-lg shadow-gray-500/50"
            
            href="#!"
            role="button"
            data-te-ripple-init
            data-te-ripple-color="light">
          
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="mr-2 h-3.5 w-3.5"
              fill="currentColor"
              viewBox="0 0 24 24">
              <path
                d="M3.064 7.51A9.996 9.996 0 0 1 12 2c2.695 0 4.959.99 6.69 2.605l-2.867 2.868C14.786 6.482 13.468 5.977 12 5.977c-2.605 0-4.81 1.76-5.595 4.123-.2.6-.314 1.24-.314 1.9 0 .66.114 1.3.314 1.9.786 2.364 2.99 4.123 5.595 4.123 1.345 0 2.49-.355 3.386-.955a4.6 4.6 0 0 0 1.996-3.018H12v-3.868h9.418c.118.654.182 1.336.182 2.045 0 3.046-1.09 5.61-2.982 7.35C16.964 21.105 14.7 22 12 22A9.996 9.996 0 0 1 2 12c0-1.614.386-3.14 1.064-4.49z" />
            </svg>
            Continue with Google
          </a>

          <a
            className="mb-3 flex w-full items-center justify-center rounded bg-info px-7 pb-2.5 pt-3 text-center text-sm font-medium uppercase leading-normal text-black bg-black-500 shadow-lg shadow-gray-500/50"
          
            href="#!"
            role="button"
            data-te-ripple-init
            data-te-ripple-color="light">
           
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="mr-2 h-3.5 w-3.5"
              fill="currentColor"
              viewBox="0 0 24 24">
              <path
                d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
            </svg>
            Continue with Twitter
          </a>
        </form>
      </div>
    </div>
  </div>
</section>
        
    )

      

            <label htmlFor="password">password</label>
            <input
                className="p-2 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600 text-black"
                id="password"
                type="password"
                value={user.password}
                onChange={(e) => setUser({ ...user, password: e.target.value })}
                placeholder="password"
            />
            <button
                onClick={onSignup}
                className=" bg-transparent hover:bg-red-600 text-red-600 font-semibold hover:text-white py-2 px-4 border border-red-500 hover:border-transparent rounded"
            >
                {buttonDisabled ? "No signup" : "Signup"}
            </button>
            <Link
                href="/login"
                className="font-medium text-blue-600 dark:text-red-500 hover:underline"
            >
                Go to login
            </Link>
        </div>
    );
}
