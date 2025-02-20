'use client'
import { useState } from 'react';

export default function Home() {
  const [count, setCount] = useState(0);

  const handleIncrement = () => {
    setCount(count + 1);
  }

  const handleDecrement = () => {
    setCount(count - 1);
  }

  return (
    <div className="min-h-screen flex flex-col">
      <div className="min-h-screen flex flex-col items-center justify-center bg-white text-black gap-4">
        <h1 className="text-4xl">{count}</h1>
        <button
          onClick={handleIncrement}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Incrementar numero
        </button>
      </div>
    </div>
  );
}
