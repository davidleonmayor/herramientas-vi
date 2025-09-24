import { useState } from "react";

interface IUseRandomNumber {
  min: number;
  max: number;
}

const INITIAL_VALUE = 0;

export function useRandomNumber({ min = 0, max = Infinity }: IUseRandomNumber) {
  const [num, setNum] = useState<number>(INITIAL_VALUE);

  function genNum() {
    min = Math.ceil(min);
    max = Math.floor(max);
    setNum(Math.floor(Math.random() * (max - min + 1)) + min);
  }

  return {
    num,
    genNum,
  };
}
