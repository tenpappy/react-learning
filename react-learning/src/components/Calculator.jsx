import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";

//計算結果
const outputArea = {
  margin: "2px",
  paddingRight: "5px",
  width: "259px",
  height: "50px",
  borderStyle: "solid",
  borderWidth: "1px",
  borderColor: "#303f9f",
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
  //計算対象（演算における前の値）
  const [beforeNum, setBeforeNum] = useState("");
  //計算対象（演算における後の値）
  const [afterNum, setAfterNum] = useState();
  //演算子
  const [operator, setOperator] = useState("");
  //電卓表示
  const [outputMessage, setOutputMessage] = useState("");
  //演算子の活性非活性コントロール
  const [operatorDisabled, setOperatorDisabled] = useState(true);
  //小数点の活性非活性コントロール
  const [decimalPointDisabled, setDecimalPointDisabled] = useState(true);
  //演算子マスタ
  const operatorMaster = ["+", "-", "÷", "×"];

  //リセットボタン押下
  const onClickReset = () => {
    //全て初期化
    setAfterNum();
    setBeforeNum("");
    setOperator("");
    setOutputMessage("");
    setOperatorDisabled(true);
    setDecimalPointDisabled(true);
  };

  //数字ボタン押下
  const onClickNum = (e) => {
    //入力セット
    const input = e.target.textContent;
    //前回入力が演算子であれば
    if (operatorMaster.includes(outputMessage)) {
      //演算子活性
      setOperatorDisabled(false);
      //入力値を表示値にセット
      setOutputMessage(input);
      //計算対象となる値を前→後に変更
      setAfterNum(beforeNum);
      setBeforeNum(input);
    } else {
      //演算子活性
      setOperatorDisabled(false);
      //入力値を表示値にセット
      setOutputMessage(beforeNum + input);
      //2桁目以上を想定したセット
      setBeforeNum(beforeNum + input);
    }
  };

  //演算子（+-×÷）ボタン押下
  const onClickOperator = (e) => {
    //入力セット
    const input = e.target.textContent;
    //演算子非活性
    setOperatorDisabled(true);
    //演算子をセット
    setOperator(input);
    //入力値を表示値にセット
    setOutputMessage(input);
  };

  //イコールボタン押下
  const onClickEqual = (e) => {
    console.log("★イコールボタン★");
    setOperatorDisabled(false);
    setOperator("");
    switch (operator) {
      //足し算
      case "+":
        setOutputMessage(Number(afterNum) + Number(beforeNum));
        setBeforeNum(Number(afterNum) + Number(beforeNum));
        break;
      //引き算
      case "-":
        setOutputMessage(Number(afterNum) - Number(beforeNum));
        setBeforeNum(Number(afterNum) - Number(beforeNum));
        break;
      //掛け算
      case "×":
        setOutputMessage(Number(afterNum) * Number(beforeNum));
        setBeforeNum(Number(afterNum) * Number(beforeNum));
        break;
      //割り算
      case "÷":
        setOutputMessage(Number(afterNum) / Number(beforeNum));
        setBeforeNum(Number(afterNum) / Number(beforeNum));
        break;
      default:
        break;
    }
  };

  return (
    <>
      <h1>電卓アプリ</h1>
      <ul>
        <li>Reactで実装</li>
        <li>ボタンだけMaterial-UI使ってみた</li>
        <li>小数点は気が向いたら…やろう。。</li>
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
          onClick={onClickReset}
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
          onClick={onClickOperator}
          disabled={operatorDisabled}
        >
          ×
        </Button>
        <Button
          variant="outlined"
          color="primary"
          disableElevation
          className={classes.button}
          onClick={onClickOperator}
          disabled={operatorDisabled}
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
          onClick={onClickOperator}
          disabled={operatorDisabled}
        >
          +
        </Button>
        <Button
          variant="outlined"
          color="primary"
          disableElevation
          className={classes.button}
          onClick={onClickOperator}
          disabled={operatorDisabled}
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
          disabled={!beforeNum}
        >
          0
        </Button>
        <Button
          variant="contained"
          color="primary"
          disableElevation
          className={classes.button}
          onClick={onClickNum}
          disabled={!beforeNum}
        >
          00
        </Button>
        <Button
          variant="contained"
          color="primary"
          disableElevation
          className={classes.button}
          onClick={onClickNum}
          disabled={decimalPointDisabled}
        >
          .
        </Button>
        <Button
          variant="outlined"
          color="primary"
          disableElevation
          className={classes.button2}
          onClick={onClickEqual}
        >
          ＝
        </Button>
      </div>
    </>
  );
};
