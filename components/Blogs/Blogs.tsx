import React from "react";
import style from "./style.module.css";
import Image from "next/image";
const Blogs = () => {
  return (
    <div className={style.container}>
      <div className={style.titlecon}>
        <h2>Blogs</h2>
        <label>
          Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
          sint. Velit officia consequat duis enim velit mollit. lorem ipsum
        </label>
      </div>

      <div className={style.content}>
        <div className={style.row}>
          <div className={style.title}>
            <Image src={"/Iamge.png"} width={310} height={300} alt="" />
          </div>
          <div className={style.right}>
            <h4>How to Secure Business</h4>
            <label>
             Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae nulla diam in ac dictum a urna 
            </label>
          </div>
        </div>
        <div className={style.row}>
          <div className={style.title}>
            <Image src={"/Iamge.png"} width={310} height={300} alt="" />
          </div>
          <div className={style.right}>
            <h4>How to Secure Business</h4>
            <label>
             Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae nulla diam in ac dictum a urna 
            </label>
          </div>
        </div>
        <div className={style.row}>
          <div className={style.title}>
            <Image src={"/Iamge.png"} width={310} height={300} alt="" />
          </div>
          <div className={style.right}>
            <h4>How to Secure Business</h4>
            <label>
             Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae nulla diam in ac dictum a urna 
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blogs;
