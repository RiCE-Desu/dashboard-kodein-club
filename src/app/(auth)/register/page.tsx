"use client";

import { SetStateAction, useState } from 'react';
import Link from 'next/link';

export default function SignUpPage() {
  const [name, setName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [confirmPassword, setConfirmPassword] = useState<string>('');

  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <div 
        className="flex-1 bg-cover bg-center" 
        style={{ backgroundImage: "url('https://i.pinimg.com/736x/da/14/b0/da14b0a8018d5b6f171cdcd3321f109d.jpg')" }}
      ></div>

      {/* Sign Up Form */}
      <div className="w-[500px] flex items-center justify-center p-8">
        <div className="w-full max-w-md">
          {/* Logo & Title */}
          <div className="flex items-center mb-6">
            <div className="w-10 h-10 bg-blue-500 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-lg">I</span>
            </div>
            <h1 className="text-2xl font-bold ml-2">Inventory</h1>
          </div>
          
          <h2 className="text-3xl font-bold">Let's get started</h2>
          <p className="text-gray-500">Please sign up here</p>

          {/* Input Fields */}
          <div className="mt-6">
            <label className="block text-gray-700">Name</label>
            <input 
              type="text" 
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" 
              placeholder="Enter your name"
              value={name} 
              onChange={(e) => setName(e.target.value)} 
            />
          </div>

          <div className="mt-4">
            <label className="block text-gray-700">Email Address</label>
            <input 
              type="email" 
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your email"
              value={email} 
              onChange={(e) => setEmail(e.target.value)} 
            />
          </div>

          <div className="mt-4">
            <label className="block text-gray-700">Password</label>
            <input 
              placeholder="Enter your password"
              value={password} 
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              onChange={(e) => setPassword(e.target.value)} 
            />
          </div>

          <div className="mt-4">
            <label className="block text-gray-700">Confirm Password</label>
            <input 
              placeholder="Confirm your password"
              value={confirmPassword} 
              type="password" 
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" 
              onChange={(e) => setConfirmPassword(e.target.value)} 
            />
          </div>

          {/* Sign Up Button */}
          <button 
            className="w-full mt-6 bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition"
          >
            Sign Up
          </button>

          {/* Sign In Link */}
          <p className="mt-4 text-center text-gray-600">
            Already have an account? <Link href="/login" className="text-blue-500">Sign In</Link>
          </p>
        </div>
      </div>
    </div>
  );
}
