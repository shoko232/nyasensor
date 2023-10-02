import React from "react";
import { Routes, Route } from "react-router-dom";
import { Main } from "./pages/Main/Main";
import { List } from "./pages/List/List";
import "./assets/css/reset.css";
import "./App.css";

function App() {
  return (
    <>
    <Routes>
      <Route path="https://shoko232.github.io/nyasensor/" element={<Main />} />
      <Route path= "https://shoko232.github.io/nyasensor/list" element={<List />} />
    </Routes>
    </>
  );
}

export default App;
