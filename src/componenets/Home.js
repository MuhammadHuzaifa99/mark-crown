import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logoMark.png';
import backgroundImage from '../assets/bg.jpg';

const Home = () => {
  const [showNameInput, setShowNameInput] = useState(true);
  const [action, setAction] = useState("Register");
  const [buttonText, setButtonText] = useState("Sign up");

  const toggleAction = () => {
    setShowNameInput(!showNameInput);
    if (action === "Register") {
      setAction("Login");
      setButtonText("Sign in");
    } else {
      setAction("Register");
      setButtonText("Sign up");
    }
  };

  return (
    <div className="h-screen w-screen flex justify-center items-center">
      <div className="flex flex-col sm:flex-row h-screen w-screen">
        <div className="w-full sm:w-1/2 relative flex items-center justify-center bg-cover bg-center" style={{ backgroundImage: `url(${backgroundImage})` }}>
          <div className="absolute top-1/2 transform -translate-y-1/2 bg-white p-10 rounded-2xl shadow-md bg-gradient-to-b from-white to-pink-300">
            <img src={logo} alt="Logo" className="w-40 h-40 mx-auto" />
          </div>
        </div>

        <div className="w-full sm:w-1/2 bg-white py-20 px-12">
          <h2 className="text-6xl text-center sm: text-3xl text-center">READY TO CROWN YOUR MARKETING?</h2>
          <div>
            <h2 className="text-center font-Baloo text-blue-600 text-3xl mt-10">{action}</h2>
          </div>


          <form>
            {showNameInput && (
              <div className="mt-5 flex justify-center">
                <input type="text" placeholder="Firstname" className="border border-blue-300 py-1 px-2 w-96 rounded-full" />
              </div>
            )}
            <div className="mt-5 flex justify-center">
              <input type="email" placeholder="Email" className="border border-blue-300 py-1 px-2 w-96 rounded-full"/>
            </div>
            <div className="mt-5 flex justify-center relative">
              <input type="password" placeholder="Password" className="border border-blue-300 py-1 px-2 w-96 rounded-full"/>
            </div>
            <div className="flex justify-end relative">
              <Link to="/"><p className="text-red-500 mr-36">Need Help?</p></Link>
            </div>
          </form>
          <div className="mt-3 flex justify-center drop-shadow-lg">
            <button className="w-40 py-3 text-center text-white rounded-full bg-gradient-to-b from-blue-400 to-blue-800" onClick={toggleAction}>{buttonText}</button>
          </div>
          <div className="mt-8 flex justify-center drop-shadow-lg">
            <p>{action === "Login" ? "Already Registered?" : "Not Registered Yet?"}</p>
          </div>
          <div className="mt-1 flex justify-center drop-shadow-lg">
            <button className="w-60 py-3 text-center text-white rounded-full bg-gradient-to-r from-yellow-400 to-pink-400" onClick={toggleAction}>{action === "Login" ? "Sign up" : "Sign in"}</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
