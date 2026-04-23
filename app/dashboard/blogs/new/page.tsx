"use client";

import Button from "@/components/common/Button/Button";
import InputField from "@/components/common/InputField/InputField";
import TextField from "@/components/common/TextField/TextField";
import { useRef, useState } from "react";
import styles from "./ProfileUpload.module.css";
import ReCAPTCHA from "react-google-recaptcha";

const API = process.env.NEXT_PUBLIC_API_URL;


const BlogSection = () => {
  const recaptchaRef = useRef<ReCAPTCHA>(null);
  const [blogs, setBlogs] = useState({
    title: "",
    summary: "",
    description: "",
  });

  const [image, setImage] = useState<string | null>(null);
  const [file, setFile] = useState<File | null>(null);

  // 📸 Handle Image Upload Preview
  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selected = e.target.files?.[0];
    if (!selected) return;

    setFile(selected);
    setImage(URL.createObjectURL(selected)); // preview
  };

  // ➕ Add Blog
  const addBlog = async () => {
    const token = recaptchaRef.current?.getValue();
    if (!token) return alert("Please verify you are human");

    const formData = new FormData();
    formData.append("title", blogs.title);
    formData.append("summary", blogs.summary);
    formData.append("description", blogs.description);
    formData.append("recaptcha_token", token);

    if (file) {
      formData.append("image", file);
    }

    const res = await fetch(`${API}/add-blog.php`, {
      method: "POST",
      body: formData,
    });

    const data = await res.json();
    console.log(data);

    // reset
    setBlogs({
      title: "",
      summary: "",
      description: "",
    });
    setImage(null);
    setFile(null);
    recaptchaRef.current?.reset();
  };

  return (
    <div style={{ marginTop: 30 }}>
      <h2>New Blog</h2>

      <div
        style={{
          border: "1px solid #ddd",
          padding: 10,
          borderRadius: 10,
          margin: 10,
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          {/* 🔥 Image Preview */}
          <div className={styles.previewBox}>
            {image ? (
              <img src={image} alt="Preview" className={styles.image} />
            ) : (
              <div className={styles.placeholder}>No Image</div>
            )}
          </div>

          <label className={styles.uploadBtn}>
            Upload Image
            <input type="file" onChange={handleImageChange} hidden />
          </label>
        </div>
        {/* 📝 Fields */}
        <InputField
          label="Title"
          value={blogs.title}
          onChange={(v) => setBlogs((prev) => ({ ...prev, title: v }))}
        />

        <TextField
          label="Summary"
          value={blogs.summary}
          onChange={(v) => setBlogs((prev) => ({ ...prev, summary: v }))}
          rows={3}
        />

        <TextField
          label="Description"
          value={blogs.description}
          onChange={(v) => setBlogs((prev) => ({ ...prev, description: v }))}
          rows={6}
        />

        <br />

        <ReCAPTCHA
          ref={recaptchaRef}
          sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY!}
        />
        <div onClick={addBlog}>
          <Button label="Add Blog" width="200px" />
        </div>
      </div>
    </div>
  );
};

export default BlogSection;
