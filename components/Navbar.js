"use client"
import React from 'react'
import { useSession, signIn, signOut } from "next-auth/react"

 import Link from 'next/link'
 
const Navbar = () => {
   const { data: session } = useSession()
  if(session) {
    return <>
      Signed in as {session.user.email} <br/>
      <button onClick={() => signOut()}>Sign out</button>
    </>
  }
   

  return (
      <nav className='bg-blue-900 text-white
       flex justify-between items-center px-4 h-16'>
        <div className='logo font-bold text-lg  flex   gap-2 justify-center items-center  '>
         <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRr5l0yo86ZS5bt1XyKnykPX47oe5Z2RVKzPFanZuDFIg&s"  width={44}alt=""/>
         <span> GetmeChai</span>
        

        </div>
         {/* <ul className='flex justify-between gap-4'>
            <li>Home</li>
            <li>About</li>
            <li>Projects</li>
            <li>Sig Up</li>
            <li>Login</li>
         </ul> */}

<div>
   <Link href={"/login"}>
<button type="button" class="text-white bg-red-700 hover:bg-red-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800">Login</button></Link>
</div>
      </nav>
  )
}

export default Navbar
