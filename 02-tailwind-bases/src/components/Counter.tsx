import React, { useState } from "react";

export default function Counter() {
  const [count, setCount] = useState(10);

  const increaseBy = (value: number) => setCount(count + value);

  return (
    <div>
      <h3 className="">
        Counter: <small>{count}</small>
      </h3>

      <div className="display flex gap-2 mt-2">
        <button
          className="p-5 bg-blur-500 rounded-xs w-10 text-white"
          onClick={() => increaseBy(+1)}
        >
          +1
        </button>

        <button
          className="p-5 bg-blur-500 rounded-xs w-10 text-white"
          onClick={() => increaseBy(-1)}
        >
          -1
        </button>
      </div>
    </div>
  );
}
