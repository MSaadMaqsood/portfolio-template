import React from "react";
import style from "./style.module.css";
const Button = ({
  label = "Button",
  width = "220px",
  height = "40px",
  endIcon,
  onClick,
}: {
  label?: string;
  width?: string;
  height?: string;
  endIcon?: React.ReactNode;
  onClick?: () => void;
}) => {
  return (
    <div onClick={onClick} className={style.btnCon} style={{ width: width, minHeight: height }}>
      <label>{label}</label>
      {endIcon}
    </div>
  );
};

export default Button;
