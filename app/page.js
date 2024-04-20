"use client"

import Link from "next/link";
import Navbar from "./components/navbar";
import React from 'react';
import GameList from "./components/game-list";
import { useState } from 'react';


export default function Page() {
  const [displayGames, setDisplayGames] = useState('');
  const handleSearch = (search) => {
    setDisplayGames(search);
  };

  return (
    <main className="">
      <Navbar onSearch={handleSearch} />
      <div className="flex-grow bg-pp-main">
        <GameList displayGames={displayGames}/>
      </div>
    </main>
  );
}