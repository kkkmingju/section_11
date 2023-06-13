import React from "react";
import classes from "./Input.module.css";

const Input = (props) => {
  return (
    <div className={classes.input}>
      <label htmlFor={props.input.id}>{props.label}</label>
      {/* for는 예약어이기 때문에 htmlFor를 사용. htmlFor에 input의 아이디나 네임을 적어 인풋과 연결 */}
      <input id={props.input.id} {...props.input} />
      {/* {...props.input}을 사용하면 가져온 키:"값"이 키="값"으로 작동함 */}
    </div>
  );
};

export default Input;
