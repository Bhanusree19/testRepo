import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function Onboarding3() {
  const navigate = useNavigate();
  return (
    <div className="flex flex-col h-screen p-8 justify-between">
      <div className="mt-20">
        <div className="w-full h-80 bg-gray-100 rounded-20 mb-8 border-7 border-black overflow-hidden">
          <img src="https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=800&q=80" alt="onboarding" className="w-full h-full object-cover" />
        </div>
        <h1 className="text-3xl font-bold mb-4">Fast Delivery</h1>
        <p className="text-gray-500">Get your orders delivered to your doorstep in no time.</p>
      </div>
      <button 
        onClick={() => navigate('/login')} 
        className="w-full py-4 bg-black text-white rounded-xl font-bold mb-8"
      >
        Get Started
      </button>
    </div>
  );
}