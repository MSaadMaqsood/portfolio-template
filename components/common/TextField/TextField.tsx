import React from "react";
import style from "./style.module.css";

const TextField = ({
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

      <textarea
        value={value}
        onChange={(e) => onChange(e.target.value)}
        rows={8}
      />
    </div>
  );
};

export default TextField;
