import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function Onboarding1() {
  const navigate = useNavigate();
  return (
    <div className="flex flex-col h-screen p-8 justify-between">
      <div className="mt-20">
        <div className="w-full h-80 bg-gray-100 rounded-20 mb-8 border-7 border-black overflow-hidden">
          <img src="https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=800&q=80" alt="onboarding" className="w-full h-full object-cover" />
        </div>
        <h1 className="text-3xl font-bold mb-4">Discover Products</h1>
        <p className="text-gray-500">Explore thousands of products at your fingertips.</p>
      </div>
      <div className="flex flex-col gap-4 mb-8">
        <button 
          onClick={() => navigate('/onboarding-2')} 
          className="w-full py-4 bg-black text-white rounded-xl font-bold"
        >
          Next
        </button>
        <button 
          onClick={() => navigate('/login')} 
          className="text-gray-400 font-medium"
        >
          Skip
        </button>
      </div>
    </div>
  );
}