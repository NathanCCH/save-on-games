"use client";

import React from 'react';
import { useState } from 'react';
import logoImage from '../images/logo.jpg';
import Image from 'next/image'

export default function Navbar({onSearch}) {
  const [search, setSearch] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(search);
    onSearch(search);

    setSearch('');
  };

  return (
    <nav className="bg-pp-logo p-1 flex justify-between items-center opacity-1">
      <div className="flex items-center px-8">
        <Image
          src={logoImage}
          alt="Save-On-Games Logo"
          width={140}
          height={140}
          className='rounded-full m-2'
        />
      </div>
      <h1 className="text-2xl font-extrabold text-gray-900 dark:text-white md:text-3xl lg:text-5xl"><span className="text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400">Save </span>On Games</h1>
      <div className="flex items-center space-x-6 pr-5">
      <div className="relative flex">
        <input
          type="search"
          className="relative m-0 block flex-auto rounded border border-solid border-neutral-200 bg-transparent bg-clip-padding px-3 py-[0.25rem] text-base font-normal leading-[1.6] text-surface outline-none transition duration-200 ease-in-out placeholder:text-neutral-500 focus:z-[3] focus:border-primary focus:shadow-inset focus:outline-none motion-reduce:transition-none dark:border-white/10 dark:text-white dark:placeholder:text-neutral-200 dark:autofill:shadow-autofill dark:focus:border-primary"
          placeholder="Search"
          aria-label="Search"
          id="exampleFormControlInput2"
          aria-describedby="button-addon2" 
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === 'Enter') {
              handleSubmit(e);
            }
          }}
          />
        <span
          className="flex items-center whitespace-nowrap px-3 py-[0.25rem] text-surface dark:border-neutral-400 dark:text-white [&>svg]:h-5 [&>svg]:w-5"
          id="button-addon2"
          onClick={handleSubmit}
          >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="2"
            stroke="currentColor">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
          </svg>
        </span>
      </div>
        <a href="#_" className="rounded-md px-3.5 py-2 m-1 overflow-hidden relative group cursor-pointer border-2 font-medium border-indigo-600 text-indigo-600 text-white">
        <span className="absolute w-64 h-0 transition-all duration-300 origin-center rotate-45 -translate-x-20 bg-indigo-600 top-1/2 group-hover:h-64 group-hover:-translate-y-32 ease"></span>
        <span className="relative text-indigo-600 transition duration-300 group-hover:text-white ease">Log In</span>
        </a>
      </div>
    </nav>
  );
};