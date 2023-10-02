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
      <Route path={`${process.env.PUBLIC_URL}/`} element={<Main />} />
      <Route path={`${process.env.PUBLIC_URL}/list`} element={<List />} />
    </Routes>
    </>
  );
}

export default App;
