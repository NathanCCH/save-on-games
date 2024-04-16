import Link from "next/link";
import Navbar from "./components/navbar";
import React from 'react';
import GameList from "./components/game-list";



export default function Page() {
  return (
    <main className="">
      <Navbar />
      <div className="flex-grow bg-pp-main">
        <GameList />
      </div>
    </main>
  );
}