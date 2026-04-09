"use client";
import React, { useEffect, useState } from "react";
import style from "./style.module.css";
import FacebookIcon from "@/icons/facebookIcon";
import InstaIcon from "@/icons/InstaIcon";
import LinkedInIcon from "@/icons/LinkedInIcon";
import XIcon from "@/icons/XIcon";
import Button from "../common/Button/Button";
import DownloadIcon from "@/icons/DownloadIcon";
import Link from "next/link";
type Item = {
  id?: number;
  name: string;
  percentage: string;
};

const API = "http://localhost/portfolio-php";
const Sidebar = () => {
  const userId = 1; // for now static (later from auth)

  const [form, setForm] = useState<any>({});
  const [languages, setLanguages] = useState<Item[]>([]);
  const [skills, setSkills] = useState<Item[]>([]);
  const url =
    "https://taso.work/wp-json/contact-form-7/v1/contact-forms/563/feedback";

  // async function spamForm() {
  //   for (let i = 0; i < 20; i++) {
  //     const formData = new FormData();

  //     formData.append("your-name", "bot" + i);
  //     formData.append("your-email", "bot@test.com");
  //     formData.append("your-phone", "0656516216");
  //     formData.append("your-subject", "spam");
  //     formData.append("your-message", "spam");

  //     formData.append("message", "spam message " + i);

  //     await fetch(url, {
  //       method: "POST",
  //       body: formData,
  //     });

  //     console.log("Sent request:", i);
  //   }
  // }

  // spamForm();
  useEffect(() => {
    fetch(`${API}/read.php?id=${userId}`)
      .then((res) => res.json())
      .then((data) => {
        setForm(data.user || {});
        setLanguages(data.languages || []);
        setSkills(data.skills || []);
      });
  }, []);
  return (
    <div className={style.container}>
      <div className={style.profileCon}>
        <div className={style.profileImg}>
          <img
            src={API + "/uploads/" + form.profile_image}
            alt="Profile Preview"
            className={style.image}
          />
        </div>
        <h4 className={style.fullname}>{form.fullname}</h4>
        <p className={style.title}>{form.position}</p>
        <div className={style.socialIconsLst}>
          <Link href={form.facebook || ""} target="_blank">
            {" "}
            <FacebookIcon />
          </Link>
          <Link href={form.instagram || ""} target="_blank">
            <InstaIcon />
          </Link>
          <Link href={form.linkedin || ""} target="_blank">
            <LinkedInIcon />
          </Link>
          <Link href={form.x || ""} target="_blank">
            <XIcon />
          </Link>
        </div>
      </div>
      <div className={style.divider} />

      <div className={style.info}>
        <div className={style.rowinfo}>
          <label className={style.keyInfo}>Age:</label>
          <label className={style.valueInfo}>{form.age}</label>
        </div>
        <div className={style.rowinfo}>
          <label className={style.keyInfo}>Cell No:</label>
          <label className={style.valueInfo}>{form.cell}</label>
        </div>
        <div className={style.rowinfo}>
          <label className={style.keyInfo}>Email:</label>
          <label className={style.valueInfo}>{form.email}</label>
        </div>
        <div className={style.rowinfo}>
          <label className={style.keyInfo}>Address:</label>
          <label className={style.valueInfo}>{form.address}</label>
        </div>
      </div>
      <div className={style.divider} />
      <div className={style.skillsCon}>
        <label className={style.titleCon}>Languages</label>
        <div className={style.skillGroup}>
          {languages.map((lang, index) => (
            <div className={style.skillRow}>
              <div className={style.skillLbl}>
                <label>{lang.name}</label>
                <label>{lang.percentage}%</label>
              </div>
              <div className={`${style.perctBar} `}>
                <div
                  className={` ${style.perctBarInside}`}
                  style={{ width: lang.percentage + "%" }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className={style.divider} />
      <div className={style.skillsCon}>
        <label className={style.titleCon}>Skills</label>
        <div className={style.skillGroup}>
          <div className={style.skillRow}>
            <div className={style.skillLbl}>
              <label>Html</label>
              <label>90%</label>
            </div>
            <div className={`${style.perctBar} `}>
              <div
                className={` ${style.perctBarInside}`}
                style={{ width: "90%" }}
              />
            </div>
          </div>
        </div>
      </div>
      <div className={style.divider} />
      <Link href={"/login"}>
        {" "}
        <Button label="Login" endIcon={<DownloadIcon />} />{" "}
      </Link>
    </div>
  );
};

export default Sidebar;
