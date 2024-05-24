import React from "react";
import logo  from "../assets/register.png";
const Register = () => {
  return (
    <div className="flex items-center justify-center h-screen ">
      <div className="relative w-96 px-8 py-6 mt-4 text-left bg-gray-100 shadow-lg">
        <h3 className="text-2xl font-bold text-center">Register</h3>
        <form action="">
          <div className="mt-4">
            <div>
              <label className="block" htmlFor="username">
                Username
              </label>
              <input
                type="text"
                placeholder="Username"
                className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600"
                id="username"
              />
            </div>
            <div className="mt-4">
              <label className="block" htmlFor="email">
                Email
              </label>
              <input
                type="email"
                placeholder="Email"
                className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600"
                id="email"
              />
            </div>
            <div className="mt-4">
              <label className="block" htmlFor="password">
                Password
              </label>
              <input
                type="password"
                placeholder="Password"
                className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600"
                id="password"
              />
            </div>
            <div className="flex items-baseline justify-between">
              <button className="px-6 py-2 mt-4 text-white bg-blue-600 rounded-lg hover:bg-blue-900">
                Register
              </button>
            </div>
          </div>
        </form>
        <img
          src={logo}
          className="absolute top-0 right-20 w-[15rem] mr-30"
          alt="Decorative"
        />
      </div>
    </div>
  );
};

export default Register;
