import { Button, TextField } from "@mui/material";
import { useState } from "react";

export default function BasicInput() {
  const [inputValue, setInputValue] = useState("init value");

  return (
    <div className="container mt-5">
      <h1>User input: {inputValue}</h1>
      <TextField
        label={inputValue}
        className="mt-3"
        variant="outlined"
        value={inputValue}
        onChange={(val) => setInputValue(val.target.value)}
      />
      <div className="mt-2">
        <Button variant="outlined" onClick={() => setInputValue("")}>
          Delete Content
        </Button>
      </div>
    </div>
  );
}
