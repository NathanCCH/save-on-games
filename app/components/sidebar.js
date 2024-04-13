import React from 'react';

export default function Sidebar() {
  return (
    <aside className="bg-gray-200 p-4 rounded-md ml-4">
      <ul className="space-y-2">
        <li>
          <a href="/games" className="text-blue-500 hover:underline">
            All Games
          </a>
        </li>
        <li>
          <a href="/popular" className="text-blue-500 hover:underline">
            Popular Games
          </a>
        </li>
        {/* Add more links here */}
      </ul>
    </aside>
  );
}
