import Link from "next/link";
import Navbar from "./components/navbar";
import Sidebar from "./components/sidebar";
import React from 'react';

export default function Page() {
  return (
    <main>
      <div className="flex-grow">
          <Navbar />
          {/* Your main content goes here */}
      </div>
    </main>
  );
}