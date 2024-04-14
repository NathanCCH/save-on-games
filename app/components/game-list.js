"use client";

import { useState, useEffect } from "react";
import Game from "./game";


export default function GameList() {
  const [games, setGames] = useState([]);

  async function fetchGames() {
    try {
      const response = await fetch("https://www.cheapshark.com/api/1.0/deals");
      const data = await response.json();
      setGames(data);
    } catch (error) {
      console.error("Could not fetch deals: ", error);
      return [];
    }
  }

  useEffect(() => {
    fetchGames(); // Fetch data when the component mounts
  }, []);

  return (
    <ul className="pt-5 grid grid-cols-1 gap-6 sm:grid-cols-4 lg:grid-cols-10">
      {games.map((game) => (
        <Game
          key={game.steamAppID}
          thumb={game.thumb}
          title={game.title}
          salePrice={game.salePrice}
          normalPrice={game.normalPrice}
          steamRatingPercent={game.steamRatingPercent}
        />
      ))}
    </ul>
  );
}