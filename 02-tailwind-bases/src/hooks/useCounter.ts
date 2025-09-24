import { useState } from "react";

interface IuseCounter {
  initialState: number;
}

export function useCounter({ initialState }: IuseCounter) {
  const [count, setCount] = useState(initialState);

  function increaseBy(amount: number) {
    setCount((prev) => prev - amount);
  }

  function incrementBy(amount: number) {
    setCount((prev) => prev + amount);
  }

  return {
    count,
    increaseBy,
    incrementBy,
  };
}
