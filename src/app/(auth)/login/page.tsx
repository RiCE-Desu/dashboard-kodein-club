'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function SignInPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <div 
        className="flex-1 bg-cover bg-center" 
        style={{ backgroundImage: "url('https://i.pinimg.com/736x/da/14/b0/da14b0a8018d5b6f171cdcd3321f109d.jpg')" }}
      ></div>

      {/* Sign In Form */}
      <div className="w-[500px] flex items-center justify-center p-8">
        <div className="w-full max-w-md">
          {/* Logo & Title */}
          <div className="flex items-center mb-6">
            <div className="w-10 h-10 bg-blue-500 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-lg">7N</span>
            </div>
            <h1 className="text-2xl font-bold ml-2">Inventory</h1>
          </div>
          
          <h2 className="text-3xl font-bold">Welcome 👋</h2>
          <p className="text-gray-500">Please login here</p>

          {/* Input Fields */}
          <div className="mt-6">
            <label className="block text-gray-700">Email Address</label>
            <input 
              type="email" 
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-black" 
              placeholder="Enter your email"
              value={email} 
              onChange={(e) => setEmail(e.target.value)} 
            />
          </div>

          <div className="mt-4">
            <label className="block text-gray-700">Password</label>
            <input 
              type="password" 
              className='w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-black'
              placeholder="Enter your password"
              value={password} 
              onChange={(e) => setPassword(e.target.value)} 
            />
          </div>

          {/* Login Button */}
          <button 
            className="w-full mt-6 bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition"
          >
            Login
          </button>

          {/* Sign Up Link */}
          <p className="mt-4 text-center text-gray-600">
            Don't have an account? <Link href="/register" className="text-blue-500">Sign Up</Link>
          </p>
        </div>
      </div>
    </div>
  );
}