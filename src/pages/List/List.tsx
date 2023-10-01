import React from "react";
import { useState, useEffect, ChangeEvent } from "react";
import { useLocation } from "react-router-dom";
import { db } from "../../firebase";
import { DocumentData, collection, getDocs } from "firebase/firestore";
import { Header } from "../../components/Header/Header";
import { Footer } from "../../components/Footer/Footer";
import "./css/list.css";

interface State {
  state: string;
}

export const List = () => {

  // カテゴリー一覧
  const genderCategory = [
    {category: "男の子", id: "man"},
    {category: "女の子", id: "woman"}
  ];
  const ageCategory = [
    {category: "1才未満", id: "under1"},
    {category: "1-3才", id: "around1-3"},
    {category: "4-6才", id: "around4-6"},
    {category: "7-10才", id: "around7-10"},
    {category: "11-15才", id: "around11-15"},
    {category: "15才以上", id: "over15"},
    {category: "不明", id: "unknown"}
  ];
  const coatColorCategory =[
    {category: "キジトラ", id: "kijitora"},
    {category: "サバトラ", id: "sabatora"},
    {category: "茶トラ", id: "chatora"},
    {category: "アグーティタビー", id: "agoutiTabby"},
    {category: "クラシックタビー", id: "classicTabby"},
    {category: "スポッテッドタビー", id: "spottedTabby"},
    {category: "白", id: "white"},
    {category: "黒", id: "black"},
    {category: "グレー", id: "gray"},
    {category: "黒白", id: "blackWhite"},
    {category: "三毛", id: "mike"},
    {category: "ポイント", id: "point"},
    {category: "サビ", id: "sabi"}
  ];
  const hairLongCategory =[
    {category: "短毛", id: "short"},
    {category: "中長毛", id: "middleShort"},
    {category: "長毛", id: "long"}
  ];
  const friendlyCategory =[
    {category: "マイペース", id: "myPace"},
    {category: "ヤンチャ", id: "naughty"},
    {category: "のんびり", id: "leisurely"},
    {category: "びびり", id: "coward"},
    {category: "デレデレ", id: "spoony"},
    {category: "ツンデレ", id: "tsundere"},
    {category: "シャイ", id: "shy"},
    {category: "シャー！シャー！", id: "sha-sha-"}
  ];

  const [catData, setCatData] = useState<DocumentData[]>([]);
  const [inputValue, setInputValue] = useState("");

  // TOPの毛色と模様で探すからデータを受け取る
  const location  = useLocation();
  const { state } = location.state as State;
  const conditionState = (state === "all") ? "" : "checked";

  // データを取得
  useEffect(() => {
    const catDataRef = collection(db, "catData")
    getDocs(catDataRef).then((querySnapshot) => {
      setCatData(
        querySnapshot.docs.map((doc) => ({...doc.data(), id: doc.id }))
      );
    });
  }, []);

  // カテゴリー絞り込み（性別）
  const selectGender = (gender: string) => {
    if (gender === "all") {
      setCatData(catData);
      return;
    }

    const selectedData = catData.filter((cat) => cat.gender === gender);
    setCatData(selectedData);
  }

  // カテゴリー絞り込み（年齢）
  const selectAge = (age: string) => {
    if (age === "all") {
      setCatData(catData);
      return;
    }

    const selectedData = catData.filter((cat) => cat.age === age);
    setCatData(selectedData);
  }

  // カテゴリー絞り込み（毛色）
  const selectCoatColor = (coatColor: string) => {
    if (coatColor === "all") {
      setCatData(catData);
      return;
    }

    const selectedData = catData.filter((cat) => cat.coatColor === coatColor);
    setCatData(selectedData);
  }

  // カテゴリー絞り込み（毛の長さ）
  const selectHairLong = (hairLong: string) => {
    if (hairLong === "all") {
      setCatData(catData);
      return;
    }

    const selectedData = catData.filter((cat) => cat.hairLong === hairLong);
    setCatData(selectedData);
  }

  // カテゴリー絞り込み（人馴れ度）
  const selectFriendly = (friendly: string) => {
    if (friendly === "all") {
      setCatData(catData);
      return;
    }

    const selectedData = catData.filter((cat) => cat.friendly === friendly);
    setCatData(selectedData);
  }

  // フリーワード検索の入力値をハンドリング
  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value)
    search(e.target.value)
  }

  // フリーワード検索への入力値での絞り込み
  const search = (value: string) => {
    // フリーワード検索への入力が空の場合は早期return
    if (value === "") {
      setCatData(catData);
      return;
    }

    const searchedData = catData.filter(
      (cat) =>
      Object.values(cat).filter(
        (item) =>
          item !== undefined &&
          item !== null &&
          item.toUpperCase().indexOf(value.toUpperCase()) !== -1
      ).length > 0
    );

    setCatData(searchedData);
  }

  return (
    <>
      <Header />
      <main>
        <section>
          <h2>にゃんこ一覧</h2>
          <div className="searchPanel">
            <div className="searchPanel__handleSearch"><input type="text" value={inputValue} onChange={handleInputChange} className="searchPanel__inputText" placeholder="すべてのにゃんこから探す" /></div>
            <div className="searchPanel__group">
              <div className="searchPanel__category">
                <p className="searchPanel__categoryTitle">性別</p>
                <ul className="searchPanel__categoryList">
                  <li onClick={() => selectGender("all")} className="searchPanel__categoryItem">
                    <input type="radio" className="searchPanel__input" id="genderAll" name="gender" />
                    <label htmlFor="genderAll">すべて</label>
                  </li>
                  {genderCategory.map((gender) => (
                    <li onClick={() => selectGender(gender.category)} className="searchPanel__categoryItem">
                      <input type="radio" className="searchPanel__input" id={gender.id} name="gender" />
                      <label htmlFor={gender.id}>{gender.category}</label>
                    </li>
                    ))}
                </ul>
              </div>

              <div className="searchPanel__category">
                <p className="searchPanel__categoryTitle">年齢</p>
                <ul className="searchPanel__categoryList">
                  <li onClick={() => selectAge("all")} className="searchPanel__categoryItem">
                    <input type="radio" className="searchPanel__input" id="ageAll" name="age" />
                    <label htmlFor="ageAll">すべて</label>
                  </li>
                  {ageCategory.map((age) => (
                    <li onClick={() => selectAge(age.category)} className="searchPanel__categoryItem">
                      <input type="radio" className="searchPanel__input" id={age.id} name="age" />
                      <label htmlFor={age.id}>{age.category}</label>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="searchPanel__category">
                <p className="searchPanel__categoryTitle">毛色</p>
                <ul className="searchPanel__categoryList">
                  <li onClick={() => selectCoatColor("all")} className="searchPanel__categoryItem">
                    <input type="radio" className="searchPanel__input" id="coatColorAll" name="coatColor" />
                    <label htmlFor="coatColorAll">すべて</label>
                  </li>
                  {coatColorCategory.map((coatColor) => (
                    <li onClick={() => selectCoatColor(coatColor.category)} className="searchPanel__categoryItem">
                      <input type="radio" className="searchPanel__input" id={coatColor.id} name="coatColor" />
                      <label htmlFor={coatColor.id}>{coatColor.category}</label>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="searchPanel__category">
                <p className="searchPanel__categoryTitle">毛の長さ</p>
                <ul className="searchPanel__categoryList">
                  <li onClick={() => selectHairLong("all")} className="searchPanel__categoryItem">
                    <input type="radio" className="searchPanel__input" id="hairLongAll" name="hairLong" />
                    <label htmlFor="hairLongAll">すべて</label>
                  </li>
                  {hairLongCategory.map((hairLong) => (
                    <li onClick={() => selectHairLong(hairLong.category)} className="searchPanel__categoryItem">
                      <input type="radio" className="searchPanel__input" id={hairLong.id} name="hairLong" />
                      <label htmlFor={hairLong.id}>{hairLong.category}</label>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="searchPanel__category">
                <p className="searchPanel__categoryTitle">人馴れ度</p>
                <ul className="searchPanel__categoryList">
                  <li onClick={() => selectFriendly("all")} className="searchPanel__categoryItem">
                    <input type="radio" className="searchPanel__input" id="friendlyAll" name="friendly" />
                    <label htmlFor="friendlyAll">すべて</label>
                  </li>
                  {friendlyCategory.map((friendly) => (
                    <li onClick={() => selectFriendly(friendly.category)} className="searchPanel__categoryItem">
                      <input type="radio" className="searchPanel__input" id={friendly.id} name="friendly" />
                      <label htmlFor={friendly.id}>{friendly.category}</label>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
          <p className="searchTest">TOPで指定した毛色：{state}</p>
          <div className="searchList">
            {catData.map((cat) => (
              <div className="searchList__item" key={cat.id}>
                <div className="searchList__name">{cat.name}</div>
                <div className="searchList__catInfo">
                  <div className="searchList__catPhoto">
                    <img className="searchList__image" src={cat.image} alt={cat.name} />
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
                      <dd>{cat.coatColor}</dd>
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
        </section>
      </main>
      <Footer />
    </>
  );
}
