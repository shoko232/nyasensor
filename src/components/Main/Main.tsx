import React from "react";
import { Footer } from "../Footer/Footer";
import { Link } from "react-router-dom";
import logoImg from '../../assets/img/NYASENSOR.png';
import mvImg from '../../assets/img/MV.jpg';
import kijitora from "../../assets/img/kijitora.jpg";
import sabatora from "../../assets/img/sabatora.jpg";
import chatora from "../../assets/img/chatora.jpg";
import agoutitabby from "../../assets/img/agoutitabby.jpg";

export const CoatColor = () => {
  const patterns = [
    {id: 1, name: "キジトラ", image: "../../assets/img/kijitora.jpg"},
    {id: 2, name: "サバトラ", image: "../../assets/img/sabatora.jpg"},
    {id: 3, name: "茶トラ", image: "../../assets/img/chatora.jpg"},
    {id: 4, name: "アグーティタビー", image: "../../assets/img/agoutitabby.jpg"},
    {id: 5, name: "クラシックタビー", image: "../../assets/img/classictabby.jpg"},
    {id: 6, name: "スポッテッドタビー", image: "../../assets/img/spotedtabby.jpg"},
    {id: 7, name: "白", image: "../../assets/img/white.jpg"},
    {id: 8, name: "黒", image: "../../assets/img/black.jpg"},
    {id: 9, name: "グレー", image: "../../assets/img/gray.jpg"},
    {id: 10, name: "白黒", image: "../../assets/img/whiteblack.jpg"},
    {id: 11, name: "三毛", image: "../../assets/img/mike.jpg"},
    {id: 12, name: "ポイント", image: "../../assets/img/point.jpg"},
    {id: 13, name: "サビ", image: "../../assets/img/sabi.jpg"},
  ];
  return (
    <ul className="coatColor">
      {patterns.map((patternItem) => {
        return (
          <li className='coatColor__item' key={patternItem.id}>
            <a href='#' className='coatColor__link'>
              <img src={patternItem.image} alt='' />
              <span className='coatColor__name'>{patternItem.name}</span>
            </a>
          </li>
        );
      })}
    </ul>
  );
};


export const Main = () => {
  return (
    <div className="App">
      <header className="header--top">
        <h1 className='logo'><img className='logoImg' src={logoImg} alt='ニャーセンサー' /></h1>
        <nav className='navigation'>
          <ul>
          <li><a className='menu'></a></li>
          </ul>
        </nav>
      </header>
      <main>
        <div className='mv'>
          <img className='mvImg' src={mvImg} alt='' />
          <div className='gradation'></div>
        </div>
        <div className='info'><a href='#' className='arrowRight'>お知らせ</a></div>
        <div className='container'>
          <div className='boxWrap'>
            <div className='boxWrap__contents'>
              <h2 className='title2'>にゃんこを探す</h2>
              <div className='searchArea'>
                <p className='searchWrapper'>
                  <input className='search' type='text' placeholder='猫種、毛色などで探す'></input>
                </p>
              </div>
              <section>
                <h3 className='title3'>毛色<span>と</span>模様<span>で探す</span></h3>
                <CoatColor />
              </section>
              <section>
                <h3 className='title3'>特徴<span>で探す</span></h3>
                <div className='search__feature'>
                  <button type='button' className='search__button'>猫種</button>
                  <button type='button' className='search__button'>毛種</button>
                  <button type='button' className='search__button'>年齢</button>
                </div>
                <div>
                  <button type='button' className='search__multi'><Link to={`/list`}>複数条件で探す</Link></button>
                </div>
              </section>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}