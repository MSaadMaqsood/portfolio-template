import Navbar from "@/components/Navbar/Navbar";
import React from "react";
import style from "../style.module.css";
import Sidebar from "@/components/Sidebar/Sidebar";

const layout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <div className={style.page}>
      <Sidebar />
      <div className={style.pageCon}>{children}</div>
    </div>
  );
};

export default layout;
