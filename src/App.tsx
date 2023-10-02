import React from "react";
import { Routes, Route } from "react-router-dom";
import { Main } from "./pages/Main/Main";
import { List } from "./pages/List/List";
import "./assets/css/reset.css";
import "./App.css";

const homeUrl = process.env.PUBLIC_URL;

function App() {
  return (
    <>
    <Routes>
      {/* デプロイ用 */}
      {/* <Route path={homeUrl} element={<Main />} />
      <Route path={homeUrl + "/list"} element={<List />} /> */}
      <Route path="/" element={<Main />} />
      <Route path="/list" element={<List />} />
    </Routes>
    </>
  );
}

export default App;
