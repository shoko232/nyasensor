import React from "react";
import { SideMenu } from "../../components/Sidemenu/SideMenu";
import { CoatColor } from "../../components/CoatColor/CoatColor";
import { Feature } from "../../components/Feature/Feature";
import { Footer } from "../../components/Footer/Footer";
import logoImg from '../../assets/img/NYASENSOR.png';
import mvImg from '../../assets/img/MV.jpg';

export const Main = () => {
  return (
    <div className="App">
      <header className="header--top">
        <h1 className='logo'><img className='logoImg' src={logoImg} alt='ニャーセンサー' /></h1>
        <SideMenu />
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
              <CoatColor />
              <Feature />
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}