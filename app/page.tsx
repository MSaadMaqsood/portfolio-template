"use client";
import Image from "next/image";
import style from "./style.module.css";
import Sidebar from "@/components/Sidebar/Sidebar";
import Intro from "@/components/Intro/Intro";
import Education from "@/components/Education/Education";
import WorkHistory from "@/components/WorkHistory/WorkHistory";
import ContactUs from "@/components/ContactUs/ContactUs";
import ContactInfo from "@/components/ContactInfo/ContactInfo";
import Copyright from "@/components/Copyright/Copyright";
import Blogs from "@/components/Blogs/Blogs";
import MyServices from "@/components/MyServices/MyServices";

export default function Home() {
  return (
    <div className={style.page}>
      <Sidebar />
      <div className={style.pageCon}>
        <Intro />
        <Education />
        <MyServices />
        <WorkHistory />
        <Blogs />
        <div className={style.contactRow}>
          <ContactUs />
          <ContactInfo />
        </div>
        <Copyright />
      </div>
    </div>
  );
}
