import React from "react";
import { SideMenu } from "../Sidemenu/SideMenu";
import "./css/header.css";
import logoImgPink from "../../assets/img/NYASENSOR_pink.png";

export const Header = () => {
  return (
    <header>
      <h1 className="logo"><img className="logoImg" src={logoImgPink} alt="ニャーセンサー" /></h1>
      <SideMenu />
    </header>
  );
}

