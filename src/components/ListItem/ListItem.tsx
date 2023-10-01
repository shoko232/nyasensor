// 物件カセット確認用

import React from "react";
import { useState, useEffect } from "react";
import { db } from "../../firebase";
import { DocumentData, collection, getDocs } from "firebase/firestore";

export const ListItem = () => {
  const [catData, setCatData] = useState<DocumentData[]>([]);

  useEffect(() => {
    const catDataRef = collection(db, 'catData')
    getDocs(catDataRef).then((querySnapshot) => {
      setCatData(
        querySnapshot.docs.map((doc) => ({...doc.data(), id: doc.id }))
      );
    });
  }, []);


  return (
    <div className="searchList">
      {catData.map((cat) => (
        <div className="searchList__item" key={cat.id}>
          <div className="searchList__name">{cat.name}</div>
          <div className="searchList__catInfo">
            <div className="searchList__catPhoto">
              <img className="searchList__image" src={cat.image} alt="" />
            </div>
            <div className="searchList__catDetail">
              <dl className="searchList__status">
                <dt>性別</dt>
                <dd>{cat.gender}</dd>
              </dl>
              <dl className="searchList__status">
                <dt>年齢</dt>
                <dd>{cat.age}</dd>
              </dl>
              <dl className="searchList__status">
                <dt>毛色</dt>
                <dd>{cat.hairColor}</dd>
              </dl>
              <dl className="searchList__status">
                <dt>毛の長さ</dt>
                <dd>{cat.hairLong}</dd>
              </dl>
              <dl className="searchList__status">
                <dt>人馴れ度</dt>
                <dd>{cat.friendly}</dd>
              </dl>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}
