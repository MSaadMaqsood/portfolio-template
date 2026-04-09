import React from "react";
import style from "./style.module.css";

const TextField = ({
  label,
  onChange,
  value,
  rows = 8,
}: {
  label: string;
  onChange: (t: string) => void;
  value: string;

  rows?: number;
}) => {
  return (
    <div className={style.inputField}>
      <label>{label}</label>

      <textarea
        value={value}
        onChange={(e) => onChange(e.target.value)}
        rows={rows}
      />
    </div>
  );
};

export default TextField;
