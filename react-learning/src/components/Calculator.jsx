import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";

//計算結果
const outputArea = {
  margin: "2px",
  paddingRight: "5px",
  width: "261px",
  height: "50px",
  backgroundColor: "rgba(0, 0, 0, 0.12)",
  borderRadius: "4px",
  textAlign: "right",
  lineHeight: "50px",
};

//作品リンク横並べ
const flex = {
  display: "flex",
};

//ボタンレイアウト上書き
const useStyles = makeStyles({
  button: {
    padding: "5px",
    fontSize: "15px",
    margin: "2px",
    minWidth: "50px",
    minHeight: "50px",
  },
  button2: {
    padding: "5px",
    fontSize: "15px",
    margin: "2px",
    minWidth: "104px",
    minHeight: "50px",
  },
});

export const Calculator = () => {
  const classes = useStyles();
  const [outputMessage, setOutputMessage] = useState("");

  const onClickNum = (e) => {
    console.log(e.target.textContent);
    setOutputMessage(e.target.textContent);
    //入力された文字
    // const input = e.target.textContent;

    // const disabled=

    // //保持している数字
    // const inputNumList = [];
    // //保持している演算子
    // const inputCulcList = [];
    // //保持している最後の文字
    // const lastStr = outputMessage.slice(-1);
    // //数字
    // const numList = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
    // //演算子
    // const culcList = ["+", "-", "×", "÷"];

    // if (input === "RESET") {
    //   //RESETが押されたら全て初期化
    //   inputNumList = [];
    //   inputCulcList = [];
    //   setOutputMessage("");
    // } else if (input === "=") {
    //   //「=」が押されたら計算結果を表示
    //   setOutputMessage();

    //   //計算して結果を表示する
    // } else if (input.includes(numList) && lastStr.includes(culcList)) {
    //   //入力が数字で且つ最後の文字列が演算子であれば配列に追加
    // }
  };
  return (
    <>
      <h1>電卓アプリ（作成中）</h1>
      <ul>
        <li>Reactで実装</li>
        <li>ボタンだけMaterial-UI使ってみた</li>
        <li>ボタンクリック後に値を渡すところまで完了</li>
        <li>
          全てを一旦文字列で受け取ってあとで計算するのが不可（eval使用不可）だったため、別の方法検討中
        </li>
      </ul>
      <div style={outputArea}>{outputMessage}</div>
      <div style={flex}>
        <Button
          variant="contained"
          color="primary"
          disableElevation
          className={classes.button}
          onClick={onClickNum}
        >
          7
        </Button>
        <Button
          variant="contained"
          color="primary"
          disableElevation
          className={classes.button}
          onClick={onClickNum}
        >
          8
        </Button>
        <Button
          variant="contained"
          color="primary"
          disableElevation
          className={classes.button}
          onClick={onClickNum}
        >
          9
        </Button>
        <Button
          variant="outlined"
          color="primary"
          disableElevation
          className={classes.button2}
          onClick={onClickNum}
        >
          RESET
        </Button>
      </div>
      <div style={flex}>
        <Button
          variant="contained"
          color="primary"
          disableElevation
          className={classes.button}
          onClick={onClickNum}
        >
          4
        </Button>
        <Button
          variant="contained"
          color="primary"
          disableElevation
          className={classes.button}
          onClick={onClickNum}
        >
          5
        </Button>
        <Button
          variant="contained"
          color="primary"
          disableElevation
          className={classes.button}
          onClick={onClickNum}
        >
          6
        </Button>
        <Button
          variant="outlined"
          color="primary"
          disableElevation
          className={classes.button}
          onClick={onClickNum}
        >
          ×
        </Button>
        <Button
          variant="outlined"
          color="primary"
          disableElevation
          className={classes.button}
          onClick={onClickNum}
        >
          ÷
        </Button>
      </div>
      <div style={flex}>
        <Button
          variant="contained"
          color="primary"
          disableElevation
          className={classes.button}
          onClick={onClickNum}
        >
          1
        </Button>
        <Button
          variant="contained"
          color="primary"
          disableElevation
          className={classes.button}
          onClick={onClickNum}
        >
          2
        </Button>
        <Button
          variant="contained"
          color="primary"
          disableElevation
          className={classes.button}
          onClick={onClickNum}
        >
          3
        </Button>
        <Button
          variant="outlined"
          color="primary"
          disableElevation
          className={classes.button}
          onClick={onClickNum}
        >
          +
        </Button>
        <Button
          variant="outlined"
          color="primary"
          disableElevation
          className={classes.button}
          onClick={onClickNum}
        >
          -
        </Button>
      </div>
      <div style={flex}>
        <Button
          variant="contained"
          color="primary"
          disableElevation
          className={classes.button}
          onClick={onClickNum}
        >
          0
        </Button>
        <Button
          variant="contained"
          color="primary"
          disableElevation
          className={classes.button}
          onClick={onClickNum}
        >
          00
        </Button>
        <Button
          variant="contained"
          color="primary"
          disableElevation
          className={classes.button}
          onClick={onClickNum}
        >
          .
        </Button>
        <Button
          variant="outlined"
          color="primary"
          disableElevation
          className={classes.button2}
          onClick={onClickNum}
        >
          ＝
        </Button>
      </div>
    </>
  );
};
