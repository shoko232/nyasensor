import React from "react";
import { useState } from "react";
import { db } from "../firebase";
import { collection, query, onSnapshot, orderBy } from "firebase/firestore";
import '../pages/list.css';
import { Header } from "../components/Header/Header";
import { Footer } from "../components/Footer/Footer";
import cat_fo from "../assets/img/IMG_0844-1-400x400.jpeg";
import cat_coco from "../assets/img/IMG_0495-400x400.jpeg";
import cat_myuge from "../assets/img/80A6EAFB-E9C4-439F-B172-2F455A980116-400x400.jpeg";

type CategoryType = {
  gender: string;
  age: string;
  hairColor: string;
  hairLong: string;
  friendly: string;
  shop: string;
};

export const List = () => {

  const catList = [
    {
      name: "ふぉー",
      gender: "男の子",
      age: "1-3才",
      hairColor: "黒白",
      hairLong: "短毛",
      friendly: "びびり",
      shop: "大阪熊取町店",
    },
    {
      name: "ここ",
      gender: "女の子",
      age: "1-3才",
      hairColor: "キジ白",
      hairLong: "短毛",
      friendly: "びびり",
      shop: "大阪熊取町店",
    },
    {
      name: "ミュゲ",
      gender: "男の子",
      age: "1才未満",
      hairColor: "茶トラ",
      hairLong: "短毛",
      friendly: "シャー！シャー！",
      shop: "飛騨",
    }
  ];

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
  const hairColorCategory =[
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
  const shopCategory =[
    {category:"大阪熊取店", id: "kumatori"},
    {category:"飛騨店", id: "hida"}
  ];

  const [showList, setShowList] = useState(catList);
  const [inputValue, setInputValue] = useState();

  // カテゴリー絞り込み（性別）
  const selectGender = (gender: string) => {
    if (gender === "all") {
      setShowList(catList);
      return;
    }

    const selectedList = catList.filter((cat) => cat.gender === gender);
    setShowList(selectedList);
  }

  // カテゴリー絞り込み（年齢）
  const selectAge = (age: string) => {
    if (age === "all") {
      setShowList(catList);
      return;
    }

    const selectedList = catList.filter((cat) => cat.age === age);
    setShowList(selectedList);
  }

  // カテゴリー絞り込み（毛色）
  const selectHairColor = (hairColor: string) => {
    if (hairColor === "all") {
      setShowList(catList);
      return;
    }

    const selectedList = catList.filter((cat) => cat.hairColor === hairColor);
    setShowList(selectedList);
  }

  // カテゴリー絞り込み（毛の長さ）
  const selectHairLong = (hairLong: string) => {
    if (hairLong === "all") {
      setShowList(catList);
      return;
    }

    const selectedList = catList.filter((cat) => cat.hairLong === hairLong);
    setShowList(selectedList);
  }

  // カテゴリー絞り込み（人馴れ度）
  const selectFriendly = (friendly: string) => {
    if (friendly === "all") {
      setShowList(catList);
      return;
    }

    const selectedList = catList.filter((cat) => cat.friendly === friendly);
    setShowList(selectedList);
  }

  // カテゴリー絞り込み（在籍店）
  const selectShop = (shop: string) => {
    if (shop === "all") {
      setShowList(catList);
      return;
    }

    const selectedList = catList.filter((cat) => cat.shop === shop);
    setShowList(selectedList);
  }

  // フリーワード検索の入力値をハンドリング
  // eを型定義しないとエラーになる
  const handleInputChange = (e: any) => {
    setInputValue(e.target.value)
    search(e.target.value)
  }

  // フリーワード検索への入力値での絞り込み
  // valueを型定義しないとエラーになる
  const search = (value: any) => {
    // フリーワード検索への入力がからの場合は早期return
    if (value === "") {
      setShowList(catList);
      return;
    }

    const searchedList = catList.filter(
      (cat) =>
      Object.values(cat).filter(
        (item) =>
          item !== undefined &&
          item !== null &&
          item.toUpperCase().indexOf(value.toUpperCase()) !== -1
      ).length > 0
    );

    setShowList(searchedList);
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
                  <li onClick={() => selectHairColor("all")} className="searchPanel__categoryItem">
                    <input type="radio" className="searchPanel__input" id="hairColorAll" name="hairColor" />
                    <label htmlFor="hairColorAll">すべて</label>
                  </li>
                  {hairColorCategory.map((hairColor) => (
                    <li onClick={() => selectHairColor(hairColor.category)} className="searchPanel__categoryItem">
                      <input type="radio" className="searchPanel__input" id={hairColor.id} name="hairColor" />
                      <label htmlFor={hairColor.id}>{hairColor.category}</label>
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

              <div className="searchPanel__category">
                <p className="searchPanel__categoryTitle">在籍店</p>
                <ul className="searchPanel__categoryList">
                  <li onClick={() => selectShop("all")} className="searchPanel__categoryItem">
                    <input type="radio" className="searchPanel__input" id="shopAll" name="shop" />
                    <label htmlFor="shopAll">すべて</label>
                  </li>
                  {shopCategory.map((shop) => (
                    <li onClick={() => selectShop(shop.category)} className="searchPanel__categoryItem">
                      <input type="radio" className="searchPanel__input" id={shop.id} name="shop" />
                      <label htmlFor={shop.id}>{shop.category}</label>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          <div className="searchList">
          {showList.map((cat, index) => {
            return (
              <div className="searchList__item" key={index}>
                <div className="searchList__label">{cat.shop}</div>
                <div className="searchList__name">{cat.name}</div>
                <div className="searchList__catInfo">
                  <div className="searchList__catPhoto">
                    <img className="searchList__image" src={cat_fo} alt="ふぉー" />
                  </div>
                  <div className="searchList__catDetail">
                    <div className="searchList__catStatus">
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
              </div>
            );
          })}
          </div>

          {/* <div className="searchList">
            <div className="searchList__item">
              <div className="searchList__label">大阪熊取町店</div>
              <div className="searchList__name">ふぉー</div>
              <div className="searchList__catInfo">
                <div className="searchList__catPhoto">
                  <img className="searchList__image" src={cat_fo} alt="ふぉー" />
                </div>
                <div className="searchList__catDetail">
                  <div className="searchList__catStatus">
                    <dl className="searchList__status">
                      <dt>性別</dt>
                      <dd>男の子</dd>
                    </dl>
                    <dl className="searchList__status">
                      <dt>年齢</dt>
                      <dd>1−3才</dd>
                    </dl>
                  </div>
                  <div className="searchList__catStatus">
                    <dl className="searchList__status">
                      <dt>毛色</dt>
                      <dd>黒白</dd>
                    </dl>
                    <dl className="searchList__status">
                      <dt>毛の長さ</dt>
                      <dd>短毛</dd>
                    </dl>
                  </div>
                  <div className="searchList__catStatus">
                    <dl className="searchList__status">
                      <dt>人馴れ度</dt>
                      <dd>びびり</dd>
                    </dl>
                  </div>
                </div>
              </div>
            </div>
            <div className="searchList__item">
              <div className="searchList__label">大阪熊取町店</div>
              <div className="searchList__name">ふぉー</div>
              <div className="searchList__catInfo">
                <div className="searchList__catPhoto">
                  <img className="searchList__image" src={cat_coco} alt="ここ" />
                </div>
                <div className="searchList__catDetail">
                  <div className="searchList__catStatus">
                    <dl className="searchList__status">
                      <dt>性別</dt>
                      <dd>女の子</dd>
                    </dl>
                    <dl className="searchList__status">
                      <dt>年齢</dt>
                      <dd>1−3才</dd>
                    </dl>
                  </div>
                  <div className="searchList__catStatus">
                    <dl className="searchList__status">
                      <dt>毛色</dt>
                      <dd>キジ白</dd>
                    </dl>
                    <dl className="searchList__status">
                      <dt>毛の長さ</dt>
                      <dd>短毛</dd>
                    </dl>
                  </div>
                  <div className="searchList__catStatus">
                    <dl className="searchList__status">
                      <dt>人馴れ度</dt>
                      <dd>びびり</dd>
                    </dl>
                  </div>
                </div>
              </div>
            </div>
            <div className="searchList__item">
              <div className="searchList__label">飛騨</div>
              <div className="searchList__name">ミュゲ</div>
              <div className="searchList__catInfo">
                <div className="searchList__catPhoto">
                  <img className="searchList__image" src={cat_myuge} alt="ミュゲ" />
                </div>
                <div className="searchList__catDetail">
                  <div className="searchList__catStatus">
                    <dl className="searchList__status">
                      <dt>性別</dt>
                      <dd>男の子</dd>
                    </dl>
                    <dl className="searchList__status">
                      <dt>年齢</dt>
                      <dd>1才未満</dd>
                    </dl>
                  </div>
                  <div className="searchList__catStatus">
                    <dl className="searchList__status">
                      <dt>毛色</dt>
                      <dd>茶トラ</dd>
                    </dl>
                    <dl className="searchList__status">
                      <dt>毛の長さ</dt>
                      <dd>短毛</dd>
                    </dl>
                  </div>
                  <div className="searchList__catStatus">
                    <dl className="searchList__status">
                      <dt>人馴れ度</dt>
                      <dd>シャー！シャー！</dd>
                    </dl>
                  </div>
                </div>
              </div>
            </div>
          </div> */}
        </section>
      </main>
      <Footer />
    </>
  );
}

// export default List;