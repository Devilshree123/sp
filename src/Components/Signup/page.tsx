"use client";
import React, { useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import axios from "axios";

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
            console.log("Signup success", response.data);
            router.push("/login");
        } catch (error: any) {
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

    return (
        <div className="flex flex-col space-y-4 items-center justify-center min-h-screen py-2">
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

            <label htmlFor="email">email</label>
            <input
                className="p-2 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600 text-black"
                id="email"
                type="text"
                value={user.email}
                onChange={(e) => setUser({ ...user, email: e.target.value })}
                placeholder="email"
            />

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
