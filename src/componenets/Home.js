import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logoMark.png";
import backgroundImage from "../assets/bg.jpg";
import axios from "axios";

const Home = () => {
  const [showNameInput, setShowNameInput] = useState(true);
  const [action, setAction] = useState("Register");
  const [buttonText, setButtonText] = useState("Sign up");

  const nameRef = useRef(null);
  const emailRef = useRef(null);
  const phoneNumberRef = useRef(null);
  const passwordRef = useRef(null);

  useEffect(() => {
    nameRef.current.focus();
  }, []);

  const signup = async () => {
    if (
      !nameRef.current ||
      !emailRef.current ||
      !phoneNumberRef.current ||
      !passwordRef.current
    ) {
      console.error("signupValues is null");
      return;
    }

    await axios("http://localhost:8000/api/v1/auth/signup", {
      method: "POST",
      data: {
        name: nameRef.current,
        email: emailRef.current,
        phoneNumber: phoneNumberRef.current,
        password: passwordRef.current,
      },
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json;charset=UTF-8",
      },
    })
      .then((res) => res.json())
      .then((res) => {
        if (!res) {
          console.error("response is null");
          return;
        }
        console.log(res);
      })
      .catch((err) => {
        if (!err) {
          console.error("error is null");
          return;
        }
        console.error(err);
      });
  };

  const signin = async () => {
    if (!emailRef.current || !passwordRef.current) {
      console.error("signinValues is null");
      return;
    }

    await axios("http://localhost:8000/api/v1/auth/signin", {
      method: "POST",
      data: {
        email: emailRef.current,
        password: passwordRef.current,
      },
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json;charset=UTF-8",
      },
    }).then((res) => {
      if (!res) {
        console.error("response is null");
        return;
      }
      console.log(res.data);
      localStorage.setItem("token", res.data.data.token);
    })
  };

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
        <div
          className="w-full sm:w-1/2 relative flex items-center justify-center bg-cover bg-center"
          style={{ backgroundImage: `url(${backgroundImage})` }}
        >
          <div className="absolute top-1/2 transform -translate-y-1/2 bg-white p-10 rounded-2xl shadow-md bg-gradient-to-b from-white to-pink-300">
            <img src={logo} alt="Logo" className="w-40 h-40 mx-auto" />
          </div>
        </div>

        <div className="w-full sm:w-1/2 bg-white py-20 px-12">
          <h2 className="text-6xl text-center sm: text-3xl text-center">
            READY TO CROWN YOUR MARKETING?
          </h2>
          <div>
            <h2 className="text-center font-Baloo text-blue-600 text-3xl mt-10">
              {action}
            </h2>
          </div>

          <form>
            {showNameInput && (
              <div className="mt-5 flex justify-center">
                <input
                  type="text"
                  placeholder="Full Name"
                  className="border border-blue-300 py-1 px-2 w-96 rounded-full"
                  ref={nameRef}
                  onChange={(e) => {
                    nameRef.current = e.target.value;
                  }}
                />
              </div>
            )}
            <div className="mt-5 flex justify-center">
              <input
                type="email"
                placeholder="Email"
                className="border border-blue-300 py-1 px-2 w-96 rounded-full"
                onChange={(e) => {
                  emailRef.current = e.target.value;
                }}
              />
            </div>
            {showNameInput && <div className="mt-5 flex justify-center relative">
              <input
                type="text"
                placeholder="Phone Number"
                className="border border-blue-300 py-1 px-2 w-96 rounded-full"
                onChange={(e) => phoneNumberRef.current = e.target.value}
              />
            </div>}
            <div className="mt-5 flex justify-center relative">
              <input
                type="password"
                placeholder="Password"
                className="border border-blue-300 py-1 px-2 w-96 rounded-full"
                onChange={(e) => passwordRef.current = e.target.value}
              />
            </div>
            <div className="flex justify-end relative">
              <Link to="/">
                <p className="text-red-500 mr-36">Need Help?</p>
              </Link>
            </div>
          </form>
          <div className="mt-3 flex justify-center drop-shadow-lg">
            <button
              className="w-40 py-3 text-center text-white rounded-full bg-gradient-to-b from-blue-400 to-blue-800"
              onClick={() => buttonText === "Sign up" ? signup() : signin()}
            >
              {buttonText}
            </button>
          </div>
          <div className="mt-8 flex justify-center drop-shadow-lg">
            <p>
              {action === "Login"
                ? "Already Registered?"
                : "Not Registered Yet?"}
            </p>
          </div>
          <div className="mt-1 flex justify-center drop-shadow-lg">
            <button
              className="w-60 py-3 text-center text-white rounded-full bg-gradient-to-r from-yellow-400 to-pink-400"
              onClick={toggleAction}
            >
              {action === "Login" ? "Sign up" : "Sign in"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
