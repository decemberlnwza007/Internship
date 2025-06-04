"use client";
import Sidebar from "@/components/Sidebar";

import HomePage from "./้home/home";

import Data from "./data/data";

export default function Home() {
  return (
    <div className="flex min-h-screen bg-gradient-to-br from-blue-50 via-blue-100 to-blue-200">
      <Sidebar />
      
      {/* <HomePage /> */}

      <Data />
    </div>
  );
}