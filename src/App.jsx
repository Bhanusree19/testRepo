import React from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import Splash from './pages/Splash';
import Onboarding1 from './pages/Onboarding1';
import Onboarding2 from './pages/Onboarding2';
import Onboarding3 from './pages/Onboarding3';
import Login from './pages/Login';
import Register from './pages/Register';
import Home from './pages/Home';
import ProductDetail from './pages/ProductDetail';
import Cart from './pages/Cart';
import MyAccount from './pages/MyAccount';

function App() {
  return (
    <div className="min-h-screen bg-white relative overflow-hidden">
      {/* Background Decorative Element from Design */}
      <div 
        className="fixed pointer-events-none opacity-20 blur-[300px] bg-[#d9d9d9] rounded-full"
        style={{ width: '2122px', height: '2122px', top: '-1088px', left: '623px' }}
      />
      
      <div className="relative z-10 max-w-md mx-auto min-h-screen border-x border-gray-100 bg-white">
        <Routes>
          <Route path="/" element={<Splash />} />
          <Route path="/onboarding-1" element={<Onboarding1 />} />
          <Route path="/onboarding-2" element={<Onboarding2 />} />
          <Route path="/onboarding-3" element={<Onboarding3 />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/home" element={<Home />} />
          <Route path="/product/:id" element={<ProductDetail />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/account" element={<MyAccount />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;