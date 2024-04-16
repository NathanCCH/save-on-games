"use client";

import { useState, useEffect } from "react";
import Game from "./game";


export default function GameList() {
  const [games, setGames] = useState([]);

  async function fetchGames() {
    try {
      const response = await fetch("https://www.cheapshark.com/api/1.0/deals");
      const data = await response.json();
      // Create a map to store the game with the lowest salePrice for each title
      const gameMap = new Map();

      data.forEach(game => {
      // If the game title is not in the map or the current game has a lower salePrice, update the map
      if (!gameMap.has(game.title) || game.salePrice < gameMap.get(game.title).salePrice) {
        gameMap.set(game.title, game);
      }
    });

    // Convert the map values to an array and set it to games
    setGames(Array.from(gameMap.values()));
    } catch (error) {
      console.error("Could not fetch deals: ", error);
      return [];
    }
  }

  useEffect(() => {
    fetchGames(); // Fetch data when the component mounts
  }, []);
  
  return (
    <div>
      <h1 class="pt-5 mx-10 text-2xl text-gray-900 md:text-2xl lg:text-2xl dark:text-white"><mark class="px-2 text-white bg-blue-600 rounded dark:bg-blue-500">Today&apos;s</mark> deals</h1>
      <ul className="mx-10 pt-5 grid gap-5 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 max-w-full">
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
    </div>
  );
}