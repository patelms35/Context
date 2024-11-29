import React from 'react';
import { useAppContext } from '../AppContext';

const Counter = () => {
  const { count, increment, decrement } = useAppContext();

  return (
    <div className="counter-container">
      <h1 className="text-3xl font-bold">Counter: {count}</h1>
      <div className="buttons">
        <button
          onClick={decrement}
          className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-700"
        >
          Decrement
        </button>
        <button
          onClick={increment}
          className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-700"
        >
          Increment
        </button>
      </div>
    </div>
  );
};

export default Counter;
