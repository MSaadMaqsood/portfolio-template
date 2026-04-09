"use client";

import { useState, ChangeEvent, useEffect } from "react";
import styles from "./ProfileUpload.module.css";
const API = "http://46.101.217.170/portfolio-php";

export default function ProfileUpload({
  defaultImg,
}: {
  defaultImg: string | null;
}) {
  const [image, setImage] = useState<string | null>(null);
  useEffect(() => {
    if (defaultImg) setImage(defaultImg);
  }, [defaultImg]);
  const handleImageChange = async (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setImage(imageUrl);
      const formData = new FormData();
      formData.append("file", file);
      formData.append("user_id", "1");
      await fetch(`${API}/upload-profile.php`, {
        method: "POST",
        body: formData,
      });
    }
  };

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Profile Preview</h2>

      <div className={styles.previewBox}>
        {image ? (
          <img src={image} alt="Profile Preview" className={styles.image} />
        ) : (
          <div className={styles.placeholder}>No Image</div>
        )}
      </div>

      <label className={styles.uploadBtn}>
        Upload Image
        <input type="file" onChange={handleImageChange} hidden />
      </label>
    </div>
  );
}
