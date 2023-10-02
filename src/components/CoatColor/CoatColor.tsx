import React from "react";
import "./css/coatColor.css";
import { Link } from "react-router-dom";

export const CoatColor = () => {

  const RADIO_VALUE = ["キジトラ", "サバトラ", "茶トラ", "アグーティタビー", "クラシックタビー", "スポッテッドタビー", "白", "黒", "グレー", "黒白", "三毛", "ポイント", "サビ"];

  return (
    <section>
      <h3 className="title3">毛色<span>と</span>模様<span>で探す</span></h3>
      <div className="">
        <div className="coatColor">
          {RADIO_VALUE.map((radioValue) => (
            <Link to={"/list"} className="coatColor__item" state={{state: radioValue}}>
              <p className="coatColor__link">{radioValue}</p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};