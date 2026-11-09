import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function Register() {
  const navigate = useNavigate();
  return (
    <div className="flex flex-col h-screen p-8">
      <div className="mt-20">
        <h1 className="text-3xl font-bold mb-2">Create Account</h1>
        <p className="text-gray-500 mb-10">Join us to start shopping</p>
        <div className="space-y-4">
          <input 
            className="w-full p-4 border border-gray-200 rounded-xl outline-none focus:border-black" 
            placeholder="Full Name"
          />
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
        <button 
          onClick={() => navigate('/home')} 
          className="w-full py-4 bg-black text-white rounded-xl font-bold mt-10"
        >
          Register
        </button>
      </div>
      <div className="mt-auto mb-8 text-center">
        <p className="text-gray-500">
          Already have an account? 
          <span onClick={() => navigate('/login')} className="text-black font-bold ml-1 cursor-pointer">Login</span>
        </p>
      </div>
    </div>
  );
}