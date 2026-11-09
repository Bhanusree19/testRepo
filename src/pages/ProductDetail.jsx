import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { ChevronLeft, ShoppingBag } from 'lucide-react';

export default function ProductDetail() {
  const navigate = useNavigate();
  const { id } = useParams();

  return (
    <div className="flex flex-col h-screen">
      <div className="relative h-1/2">
        <button 
          onClick={() => navigate(-1)} 
          className="absolute top-8 left-8 p-3 bg-white rounded-full shadow-lg z-10"
        >
          <ChevronLeft size={24} />
        </button>
        <img 
          src="https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=800&q=80" 
          className="w-full h-full object-cover"
          alt="product"
        />
      </div>
      <div className="flex-1 bg-white p-8 rounded-t-[40px] -mt-10">
        <div className="flex justify-between items-start mb-6">
          <div>
            <h1 className="text-2xl font-bold mb-1">Minimalist Watch</h1>
            <p className="text-gray-400">Premium Accessories</p>
          </div>
          <span className="text-2xl font-bold">$120</span>
        </div>
        <p className="text-gray-500 leading-relaxed mb-8">
          Crafted with precision and style in mind, this watch is the perfect companion for any occasion.
        </p>
        <button 
          onClick={() => navigate('/cart')} 
          className="w-full py-4 bg-black text-white rounded-xl font-bold flex items-center justify-center gap-2"
        >
          <ShoppingBag size={20} />
          Add to Cart
        </button>
      </div>
    </div>
  );
}