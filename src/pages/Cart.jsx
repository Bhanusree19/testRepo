import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ChevronLeft, Trash2 } from 'lucide-react';

export default function Cart() {
  const navigate = useNavigate();
  return (
    <div className="flex flex-col h-screen p-8">
      <div className="flex items-center gap-4 mb-10">
        <button onClick={() => navigate(-1)}><ChevronLeft size={24} /></button>
        <h1 className="text-2xl font-bold">My Cart</h1>
      </div>

      <div className="space-y-6 flex-1 overflow-y-auto">
        <div className="flex gap-4 items-center">
          <div className="w-24 h-24 bg-gray-100 rounded-xl overflow-hidden">
            <img src="https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=200&q=80" className="w-full h-full object-cover" alt="item" />
          </div>
          <div className="flex-1">
            <h3 className="font-bold">Minimalist Watch</h3>
            <p className="text-gray-500">$120</p>
          </div>
          <button className="text-red-400"><Trash2 size={20} /></button>
        </div>
      </div>

      <div className="border-t border-gray-100 pt-6">
        <div className="flex justify-between mb-4 font-bold">
          <span>Total</span>
          <span>$120</span>
        </div>
        <button className="w-full py-4 bg-black text-white rounded-xl font-bold">
          Checkout
        </button>
      </div>
    </div>
  );
}