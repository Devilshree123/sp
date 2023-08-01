'use client'
import React from 'react'
import axios from 'axios'
import { useRouter } from 'next/navigation'
import toast, {Toaster} from "react-hot-toast";

const ProfilePage = () => {

  const router = useRouter()

  const logout = async() => {
    try {
      await axios.get('/api/logout')
      toast.success('Logout successful')
      router.push('/login')
    } catch (error: any) {
      toast.error(error.message)
      console.log(error.message)
    }
  }

  return (
    <>
      <h1>Profile</h1>
      <div><Toaster/></div>
      <button onClick={logout}>Logout</button>
    </>
  )
}

export default ProfilePage