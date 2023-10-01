import React from "react";
import { Link } from "react-router-dom";
import "./css/feature.css";

export const Feature = () => {

  return (
    <section>
      <h3 className="title3">特徴<span>で探す</span></h3>
      <div className="search__feature">
        <button type="button" className="search__button"><Link to={`/list`}>猫種</Link></button>
        <button type="button" className="search__button"><Link to={`/list`}>毛種</Link></button>
        <button type="button" className="search__button"><Link to={`/list`}>年齢</Link></button>
      </div>
      <div>
        <button type="button" className="search__multi"><Link to={`/list`}>複数条件で探す</Link></button>
      </div>
    </section>
  )
}