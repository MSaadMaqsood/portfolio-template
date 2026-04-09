import React from "react";
import style from "./style.module.css";

const InputField = ({
  label,
  onChange,
  value,
  width = "100%",
}: {
  label: string;
  onChange: (t: string) => void;
  value: string;
  width?: string;
}) => {
  return (
    <div className={style.inputField} style={{ width: width }}>
      <label>{label}</label>
      <input value={value} onChange={(e) => onChange(e.target.value)}></input>
    </div>
  );
};

export default InputField;
