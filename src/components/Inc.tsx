import { Button } from "@mui/material";
import { useContext } from "react";
import CounterContext from "../shared/counter-context";

export default function Inc() {
  const { counter, setCounter } = useContext(CounterContext);

  return (
    <div className="container mt-5">
      <h1 className="mt-5 mb-4">Counter Value: {counter}</h1>

      <Button onClick={() => setCounter(counter + 1)} variant="outlined">
        Increase
      </Button>
    </div>
  );
}
