import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Splash() {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => navigate('/onboarding-1'), 2000);
    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-white">
      <div className="w-32 h-32 bg-black rounded-20 flex items-center justify-center">
        <span className="text-white text-4xl font-bold">Logo</span>
      </div>
    </div>
  );
}