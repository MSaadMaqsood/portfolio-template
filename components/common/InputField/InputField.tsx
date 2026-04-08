import React from "react";
import style from "./style.module.css";

const InputField = ({
  label,
  onChange,
  value,
}: {
  label: string;
  onChange: (t: string) => void;
  value: string;
}) => {
  return (
    <div className={style.inputField}>
      <label>{label}</label>
      <input value={value} onChange={(e)=>onChange(e.target.value)}></input>
    </div>
  );
};

export default InputField;
