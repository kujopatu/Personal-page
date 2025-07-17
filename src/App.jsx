import React from "react";
import './index.css';

export default function App() {
  return (
    <div className="bg-[url('/bg.jpg')] bg-cover bg-center min-h-screen">
      <div>
        <h1 className="text-4xl font-bold">Kujo Personal Website</h1>
        <p className="text-lg mt-2">Fully Vercel-ready Tailwind project</p>
      </div>
    </div>
  );
}
