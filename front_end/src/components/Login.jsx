import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaUser, FaLock } from "react-icons/fa";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMsg, setErrorMsg] = useState("");
  const navigate = useNavigate();

const handleForm = async (e) => {
  e.preventDefault();

  try {
    const response = await axios.post('http://localhost:7000/api/login', {
      email,
      password,
    });

    if (response.status === 200) {
     
      localStorage.setItem("token", response.data.token);

    
      setEmail('');
      setPassword('');

     
      navigate('/');

    }
  } catch (error) {
    setErrorMsg(error.response?.data?.error || 'Invalid credentials');
    setEmail('');
    setPassword('');
  }
};


  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-cyan-700 to-teal-700">
      <div className="bg-[#1c1f2b] w-full max-w-md p-8 rounded-lg shadow-2xl relative">
        <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 bg-cyan-400 px-6 py-2 rounded-md text-white font-semibold shadow-lg">
          SIGN IN
        </div>

        <div className="flex flex-col items-center mt-8">
          <div className="w-20 h-20 bg-gray-500 rounded-full flex items-center justify-center mb-6">
            <FaUser className="text-white text-3xl" />
          </div>

          {errorMsg && (
            <div className="text-red-500 text-sm mb-4">{errorMsg}</div>
          )}

          <div className="w-full mb-4">
            <div className="flex items-center bg-gray-700 text-white px-4 py-3 rounded-lg">
              <FaUser className="mr-2" />
              <input
                type="email"
                placeholder="email"
                className="bg-transparent outline-none w-full placeholder-gray-300"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
          </div>

          <div className="w-full mb-4">
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

          <div className="flex justify-between w-full text-sm text-gray-300 mb-6 px-1">
            <label className="flex items-center space-x-2">
              <input
                type="checkbox"
                className="form-checkbox accent-cyan-400"
              />
              <span>Remember me</span>
            </label>
            <a href="#" className="hover:underline">
              Forgot your password?
            </a>
          </div>

          <button
            onClick={handleForm}
            className="bg-cyan-400 w-full py-3 rounded-lg text-white font-semibold hover:bg-cyan-500 transition"
          >
            LOGIN
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
