import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ChevronLeft, User, Settings, ShoppingBag, LogOut } from 'lucide-react';

export default function MyAccount() {
  const navigate = useNavigate();
  return (
    <div className="flex flex-col h-screen p-8">
      <div className="flex items-center gap-4 mb-10">
        <button onClick={() => navigate('/home')}><ChevronLeft size={24} /></button>
        <h1 className="text-2xl font-bold">My Account</h1>
      </div>

      <div className="flex flex-col items-center mb-10">
        <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mb-4">
          <User size={40} className="text-gray-400" />
        </div>
        <h2 className="text-xl font-bold">John Doe</h2>
        <p className="text-gray-500">john.doe@example.com</p>
      </div>

      <div className="space-y-4">
        <div className="flex items-center gap-4 p-4 border border-gray-100 rounded-xl">
          <Settings size={20} />
          <span className="flex-1 font-medium">Settings</span>
        </div>
        <div className="flex items-center gap-4 p-4 border border-gray-100 rounded-xl">
          <ShoppingBag size={20} />
          <span className="flex-1 font-medium">My Orders</span>
        </div>
        <div 
          onClick={() => navigate('/login')} 
          className="flex items-center gap-4 p-4 border border-gray-100 rounded-xl text-red-500 cursor-pointer"
        >
          <LogOut size={20} />
          <span className="flex-1 font-medium">Logout</span>
        </div>
      </div>
    </div>
  );
}