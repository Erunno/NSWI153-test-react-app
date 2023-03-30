import { createContext } from "react";

export interface CounterState {
  counter: number;
  setCounter: (val: number) => void;
}

const CounterContext = createContext<CounterState>({
  counter: 0,
  setCounter: (x) => {},
});

export default CounterContext;
