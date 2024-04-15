"use client";

import React from 'react';
import { useState } from 'react';
import logoImage from '../images/logo.jpg';
import menuIcon from '../images/icon-menu.png';
import Image from 'next/image'
import Sidebar from "./sidebar";

export default function Navbar() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const handleSidebarToggle = () => {
    setSidebarOpen(!sidebarOpen);
  };
  return (
    <nav className="bg-pp-logo p-1 flex justify-between items-center opacity-1">
      <div className="flex items-center pl-8">
        <Image
          src={logoImage}
          alt="Save-On-Games Logo"
          width={140}
          height={140}
          className='rounded-full'
        />
        <Image
          src={menuIcon}
          alt=""
          width={40}
          height={40}
          className='pl-4'
          onClick={handleSidebarToggle}
        />
        <div>
        {sidebarOpen && <Sidebar />}
        </div>
        <span className="text-emerald-100 font-semibold text-2xl pl-20 ">Save On Games</span>
      </div>
      <div className="flex items-center space-x-6 pr-5">
        <input
          type="text"
          placeholder="Search games..."
          className="px-2 py-1 rounded-md border border-gray-300 focus:outline-none"
        />
        <button className="bg-white text-blue-500 px-3 py-1 rounded-md">
          Log In
        </button>
      </div>
    </nav>
  );
};