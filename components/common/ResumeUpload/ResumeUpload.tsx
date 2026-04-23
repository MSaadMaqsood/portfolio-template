"use client";

import { useState, ChangeEvent, useEffect } from "react";
import styles from "./ProfileUpload.module.css";
const API = process.env.NEXT_PUBLIC_API_URL;


export default function ResumeUpload() {
  const handleImageChange = async (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      const formData = new FormData();
      formData.append("file", file);
      formData.append("user_id", "1");
      await fetch(`${API}/upload-resume.php`, {
        method: "POST",
        body: formData,
      });
    }
  };

  return (
    <div className={styles.container}>
      <label className={styles.uploadBtn}>
        Upload Resume
        <input type="file" onChange={handleImageChange} hidden />
      </label>
    </div>
  );
}
