import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ShoppingBag, User, Search, Heart } from 'lucide-react';

export default function Home() {
  const navigate = useNavigate();
  const products = [
    { id: 1, name: 'Minimalist Watch', price: '$120', img: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=400&q=80' },
    { id: 2, name: 'Leather Bag', price: '$180', img: 'https://images.unsplash.com/photo-1548036328-c9fa89d128fa?auto=format&fit=crop&w=400&q=80' },
  ];

  return (
    <div className="flex flex-col h-screen">
      <div className="p-8">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-2xl font-bold">Exclusive</h1>
          <div className="flex gap-4">
            <Search size={24} />
            <Heart size={24} />
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4">
          {products.map(p => (
            <div 
              key={p.id} 
              onClick={() => navigate(`/product/${p.id}`)}
              className="cursor-pointer"
            >
              <div className="aspect-square bg-gray-100 rounded-xl overflow-hidden mb-2">
                <img src={p.img} alt={p.name} className="w-full h-full object-cover" />
              </div>
              <h3 className="font-medium">{p.name}</h3>
              <p className="text-gray-500 text-sm">{p.price}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-auto border-t border-gray-100 p-6 flex justify-around bg-white">
        <button onClick={() => navigate('/home')} className="text-black"><Search size={24} /></button>
        <button onClick={() => navigate('/cart')} className="text-gray-400"><ShoppingBag size={24} /></button>
        <button onClick={() => navigate('/account')} className="text-gray-400"><User size={24} /></button>
      </div>
    </div>
  );
}