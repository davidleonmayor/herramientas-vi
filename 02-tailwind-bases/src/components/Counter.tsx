import { useCounter } from "@/hooks/useCounter";
import { Button } from "./ui/button";

const INITIAL_STATE = 0,
  INCREMENT = 1,
  DECREMENT = 1;

export function Counter() {
  const { count, increaseBy, incrementBy, reset } = useCounter({
    initialState: INITIAL_STATE,
  });

  return (
    <div>
      <h3 className="text-5xl">
        Counter: <small>{count}</small>
      </h3>

      <div className="display flex justify-around gap-2 mt-2">
        <Button
          className="p-5 rounded-xs w-10 text-white"
          onClick={() => incrementBy(INCREMENT)}
        >
          +{INCREMENT}
        </Button>
        <Button
          className="p-5 rounded-xs w-10 text-white"
          onClick={() => increaseBy(DECREMENT)}
        >
          -{DECREMENT}
        </Button>
        <Button className="p-5 rounded-xs w-10 text-white" onClick={reset}>
          Reset
        </Button>
      </div>
    </div>
  );
}
