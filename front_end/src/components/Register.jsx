import axios from "axios";
import React, { useState } from "react";
import { FaUser, FaLock, FaEnvelope, FaCalendarAlt } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [dob, setDoB] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate()

  const handleFormData = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:7000/api/register", {
        name,
        email,
        dob,
        password,
      });

      setName("");
      setEmail("");
      setDoB("");
      setPassword("");
      navigate('/login')

      console.log("User registered:", response.data); 
    } catch (error) {
      console.error(
        "Registration failed:",
        error.response?.data || error.message
      );
    }
  };
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-cyan-700 to-teal-700">
      <div className="bg-[#1c1f2b] w-full max-w-md p-8 rounded-lg shadow-2xl relative">
        <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 bg-cyan-400 px-6 py-2 rounded-md text-white font-semibold shadow-lg">
          REGISTER
        </div>

        <div className="flex flex-col items-center mt-8 space-y-4">
          <div className="w-full">
            <div className="flex items-center bg-gray-700 text-white px-4 py-3 rounded-lg">
              <FaUser className="mr-2" />
              <input
                type="text"
                placeholder="username"
                className="bg-transparent outline-none w-full placeholder-gray-300"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
          </div>

          <div className="w-full">
            <div className="flex items-center bg-gray-700 text-white px-4 py-3 rounded-lg">
              <FaEnvelope className="mr-2" />
              <input
                type="email"
                placeholder="email"
                className="bg-transparent outline-none w-full placeholder-gray-300"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
          </div>

          <div className="w-full">
            <div className="flex items-center bg-gray-700 text-white px-4 py-3 rounded-lg">
              <FaCalendarAlt className="mr-2" />
              <input
                type="date"
                placeholder="Date of Birth"
                className="bg-transparent outline-none w-full placeholder-gray-300 text-white"
                value={dob}
                onChange={(e) => setDoB(e.target.value)}
              />
            </div>
          </div>

          <div className="w-full">
            <div className="flex items-center bg-gray-700 text-white px-4 py-3 rounded-lg">
              <FaLock className="mr-2" />
              <input
                type="password"
                placeholder="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="bg-transparent outline-none w-full placeholder-gray-300"
              />
            </div>
          </div>

          <button
            onClick={handleFormData}
            className="bg-cyan-400 w-full py-3 rounded-lg text-white font-semibold hover:bg-cyan-500 transition"
          >
            REGISTER
          </button>
        </div>
      </div>
    </div>
  );
};

export default Register;
