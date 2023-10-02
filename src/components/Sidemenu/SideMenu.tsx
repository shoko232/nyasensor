import React, { useState } from "react";
import { Link } from "react-router-dom";


export const SideMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  }

  return (
    <>
    <div>
      <button className="menu" onClick={toggleMenu}></button>
    </div>
    <nav className={isOpen ? "navigation--open" : "navigation--close"}>
      <button className="sideMenu__closeButton" onClick={toggleMenu}>閉じる</button>
      <ul className="sideMenu">
        <li className="sideMenu__item"><Link to={`/list`} state={{state: "all"}}>にゃんこ一覧</Link></li>
      </ul>
    </nav>
    </>
  );
}