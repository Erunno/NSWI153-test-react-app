import "./App.css";
import BasicInput from "./components/BasicInput";
import Inc from "./components/Inc";
import Decr from "./components/Decr";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<BasicInput />} />
            <Route path="increase" element={<Inc />} />
            <Route path="decrease" element={<Decr />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
