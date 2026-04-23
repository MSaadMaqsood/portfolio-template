import React, { useEffect, useState } from "react";
import style from "./style.module.css";
import Button from "../common/Button/Button";
import SendIcon from "@/icons/SendIcon";
import Image from "next/image";
import Link from "next/link";
const API = process.env.NEXT_PUBLIC_API_URL;


const Intro = () => {
  const userId = 1; // for now static (later from auth)

  const [form, setForm] = useState<any>({});

  useEffect(() => {
    fetch(`${API}/read.php?id=${userId}`)
      .then((res) => res.json())
      .then((data) => {
        setForm(data.user || {});
      });
  }, []);
  return (
    <div className={style.container}>
      {" "}
      <RandomIcon />
      <div className={style.InfoCon}>
        <label className={style.mainTitle}>
          I’m a {" "}
          <label style={{ color: "var(--colorYellow)" }}>
            Cybersecurity
          </label><br />
          Expert!
        </label>
        <h6 className={style.description}>{form.bio}</h6>
        <Link href={`${API}/uploads/${form.resume}`}>
          <Button label="Download CV" endIcon={<SendIcon />} width="154px" />
        </Link>
      </div>
      <div>
        <Image src={"/fullimg.png"} width={325} height={459} alt="" />
      </div>
    </div>
  );
};

export default Intro;

const RandomIcon = () => {
  return (
    <>
      <svg
        width="16"
        height="16"
        viewBox="0 0 16 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        style={{ position: "absolute", top: 30, left: 35 }}
      >
        <circle
          cx="8"
          cy="8"
          r="7"
          stroke="#FFB400"
          stroke-opacity="0.8"
          stroke-width="2"
        />
      </svg>

      <svg
        width="16"
        height="16"
        viewBox="0 0 16 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        style={{ position: "absolute", top: 52, left: 520 }}
      >
        <circle
          cx="8"
          cy="8"
          r="7"
          stroke="#05FF00"
          stroke-opacity="0.8"
          stroke-width="2"
        />
      </svg>
      <svg
        width="16"
        height="16"
        viewBox="0 0 16 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        style={{ position: "absolute", top: 422, left: 88 }}
      >
        <circle
          cx="8"
          cy="8"
          r="7"
          stroke="#05FF00"
          stroke-opacity="0.8"
          stroke-width="2"
        />
      </svg>

      <svg
        width="22"
        height="22"
        viewBox="0 0 22 22"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        style={{ position: "absolute", top: 383, left: 573 }}
      >
        <rect
          x="7.48607"
          y="1.33758"
          width="14"
          height="14"
          transform="rotate(26.0517 7.48607 1.33758)"
          stroke="#0047FF"
          stroke-opacity="0.8"
          stroke-width="2"
        />
      </svg>
      <svg
        width="16"
        height="16"
        viewBox="0 0 16 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        style={{ position: "absolute", top: 309, right: 550 }}
      >
        <circle
          cx="8"
          cy="8"
          r="7"
          stroke="#FFB400"
          stroke-opacity="0.8"
          stroke-width="2"
        />
      </svg>
      <svg
        width="14"
        height="12"
        viewBox="0 0 14 12"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        style={{ position: "absolute", top: 436, right: 82 }}
      >
        <path
          d="M12.1245 11H1.73193L6.92822 2L12.1245 11Z"
          stroke="#FF2E00"
          stroke-opacity="0.8"
          stroke-width="2"
        />
      </svg>
      <svg
        width="22"
        height="22"
        viewBox="0 0 22 22"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        style={{ position: "absolute", top: 69, right: 53 }}
      >
        <rect
          x="7.48607"
          y="1.33758"
          width="14"
          height="14"
          transform="rotate(26.0517 7.48607 1.33758)"
          stroke="#FFB400"
          stroke-opacity="0.8"
          stroke-width="2"
        />
      </svg>
    </>
  );
};
