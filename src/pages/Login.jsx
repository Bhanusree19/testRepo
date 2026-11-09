import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function Login() {
  const navigate = useNavigate();
  return (
    <div className="flex flex-col h-screen p-8">
      <div className="mt-20">
        <h1 className="text-3xl font-bold mb-2">Welcome Back</h1>
        <p className="text-gray-500 mb-10">Login to your existing account</p>
        <div className="space-y-4">
          <input 
            className="w-full p-4 border border-gray-200 rounded-xl outline-none focus:border-black" 
            placeholder="Email"
          />
          <input 
            type="password" 
            className="w-full p-4 border border-gray-200 rounded-xl outline-none focus:border-black" 
            placeholder="Password"
          />
        </div>
        <div className="text-right mt-2 mb-10">
          <span className="text-sm text-gray-500 cursor-pointer">Forgot Password?</span>
        </div>
        <button 
          onClick={() => navigate('/home')} 
          className="w-full py-4 bg-black text-white rounded-xl font-bold"
        >
          Login
        </button>
      </div>
      <div className="mt-auto mb-8 text-center">
        <p className="text-gray-500">
          Don't have an account? 
          <span onClick={() => navigate('/register')} className="text-black font-bold ml-1 cursor-pointer">Register</span>
        </p>
      </div>
    </div>
  );
}