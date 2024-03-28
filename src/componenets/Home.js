import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../assets/logoMark.png'

function Home() {
  return (
    <div className="min-h-screen py-40 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 ...">
    <div className="container mx-auto">
      <div className="flex w-8/12 rounded-xl mx-auto shadow-lg overflow-hidden">
        <div className="w-1/2  bg-local flex flex-col items-center justify-center" style={{backgroundImage: `url(${logo})`}} alt={'logo'}> 
          <h1 className="text-black text-center text-3xl mb-3">Welcome</h1>
          <div>
            <p className="text-black text-center">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
          </div>
        </div>
        <div className="w-1/2 bg-white py-16 px-12">
          <h2 className="text-3xl text-center">Register</h2>
          <p className="mb-4 mt-4">
            Create your account. It's free and only take a minute
          </p>
          <form action="#">
          <div className="grid grid-cols-2 gap-5">
            <input type="text" placeholder="Firstname" className="border border-gray-100 py-1 px-2"></input>
            <input type="text" placeholder="Lastname" className="border border-gray-100 py-1 px-2"></input>
          </div>
          <div className="mt-5">
          <input type="email" placeholder="Email" className="border border-gray-100 py-1 px-2 w-full"></input>
          </div>
          <div className="mt-5">
          <input type="password" placeholder="Password" className="border border-gray-100 py-1 px-2 w-full"></input>
          </div>
          <div className="mt-5">
          <input type="password" placeholder="Confirm Password" className="border border-gray-100 py-1 px-2 w-full"></input>
          </div>
          <div className="mt-5">
            <input type="checkbox" className="border border-gray-400 "/>
              <span className="pl-2">I accept the<Link to="/" className="text-purple-500"> Terms of Uses </Link> & <Link to="/" className="text-purple-500">Privacy Plicy</Link></span>
          </div>
          </form>
          <div className="mt-5">
            <button className="w-full bg-purple-500 py-3 text-center text-white rounded-xl">Register Now</button>
          </div>
        </div>
      </div>
    </div>
  </div>
  );
}

export default Home