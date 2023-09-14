import React from "react";
// import styles from "./css/styles.modules.scss";
import logoImgPink from '../../assets/img/NYASENSOR_pink.png';

export const Header = () => {
  return (
    <header>
      <h1 className='logo'><img className='logoImg' src={logoImgPink} alt='ニャーセンサー' /></h1>
      <nav className='navigation'>
        <ul>
        <li><a className='menu'></a></li>
        </ul>
      </nav>
    </header>
  );
}

