import React from "react";
import { Link } from "react-router-dom";
import "./Components.css";

/**
 * スタイル
 */

//作品リンク
const box = {
  backgroundColor: "#CBFFD3",
  width: "100px",
  height: "100px",
  margin: "8px",
  borderRadius: "8px",
  textAlign: "center",
  verticalAlign: "middle",
  display: "table",
};

//作品リンク横並べ
const flex = {
  display: "flex",
};

//aタグ
const lync = {
  display: "table-cell",
  verticalAlign: "middle",
  textDecoration: "none",
};

/**
 *メイン
 */
export const Top = () => {
  //作品リスト
  const worksList = {
    work1: {
      path: "/Practice",
      name: "練習アプリ",
      description: ["練習用の画面です"],
    },
    work2: {
      path: "/Calculator",
      name: "電卓アプリ",
      description: ["シンプルな電卓アプリです。四則演算ができます。"],
    },
  };

  return (
    <>
      <h1>作品リスト</h1>
      {/* リファクタリングによって不要 */}
      {/* <div style={flex}>
        <div style={box} className="boxSelector">
          <Link to="/Practice" style={lync}>
            練習アプリ
          </Link>
        </div>
        <p>練習用の画面です</p>
      </div>
      <div style={flex}>
        <div style={box} className="boxSelector">
          <Link to="/Calculator" style={lync}>
            電卓アプリ
          </Link>
        </div>
        <p>シンプルな電卓アプリです。四則演算ができます。</p>
      </div> */}

      {/* 作品リストオブジェクトをmapで取り出す。 */}
      {Object.keys(worksList).map((key) => (
        <div key={key} style={flex}>
          <div style={box} className="boxSelector">
            <Link to={worksList[key].path} style={lync}>
              {worksList[key].name}
            </Link>
          </div>
          <p>{worksList[key].description}</p>
        </div>
      ))}
    </>
  );
};
