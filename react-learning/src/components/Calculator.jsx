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
  const [afterNum, setAfterNum] = useState();
  //演算子
  const [operator, setOperator] = useState("");
  //電卓表示
  const [outputMessage, setOutputMessage] = useState("");
  //演算子の活性非活性コントロール
  const [operatorDisabled, setOperatorDisabled] = useState(true);
  //小数点の活性非活性コントロール
  const [decimalPointDisabled, setDecimalPointDisabled] = useState(true);

  const operatorMaster = ["+", "-", "÷", "×"];

  //リセットボタン押下
  const onClickReset = () => {
    console.log("★リセットボタン★");
    setAfterNum();
    setBeforeNum("");
    setOperator("");
    setOutputMessage("");
    setOperatorDisabled(true);
    setDecimalPointDisabled(true);
  };

  //数字ボタン押下
  const onClickNum = (e) => {
    console.log("★数字ボタン★");
    //入力セット
    const input = e.target.textContent;
    console.log(outputMessage);
    //前回入力が演算子であれば
    if (operatorMaster.includes(outputMessage)) {
      console.log("true");
      //演算子活性
      setOperatorDisabled(false);
      //入力値を表示値にセット
      setOutputMessage(input);
      //元の表示値を計算対象としてセット
      setAfterNum(beforeNum);
      setBeforeNum(input);
    } else {
      console.log("else");
      //演算子活性
      setOperatorDisabled(false);
      //入力値を表示値にセット
      setOutputMessage(beforeNum + input);
      //元の表示値を計算対象としてセット
      setBeforeNum(beforeNum + input);
    }
  };

  //演算子（+-×÷）ボタン押下
  const onClickOperator = (e) => {
    console.log("★演算子ボタン★");

    //入力セット
    const input = e.target.textContent;
    console.log("textContent：" + input);

    //演算子非活性
    setOperatorDisabled(true);
    setOperator(input);
    setOutputMessage(input);
    console.log("outputMessage：" + outputMessage);
  };

  //イコールボタン押下
  const onClickEqual = (e) => {
    console.log("★イコールボタン★");
    setOperatorDisabled(false);
    setOperator("");
    //TODO:なぜこれでうまくいく？setOutputMessageが後に計算される…？
    // setAfterNum(0);
    // setBeforeNum(0);
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
