"use client";

import Button from "@/components/common/Button/Button";
import InputField from "@/components/common/InputField/InputField";
import TextField from "@/components/common/TextField/TextField";
import { useEffect, useState } from "react";

type BlogType = {
  id: number;
  summary: string;
  image: string;
  title: string;
  description: string;
  created_at: string;
};

const API = "http://localhost/portfolio-php";

const WorkSection = () => {
  const userId = 1; // for now static (later from auth)

  const [blogs, setBlogs] = useState<BlogType[]>([]);

  useEffect(() => {
    fetch(`${API}/get-blogs.php`)
      .then((res) => res.json())
      .then((data) => {
        setBlogs(data);
      });
  }, []);

  const removeEducation = async (index: number) => {
    await fetch(`${API}/delete-blog.php`, {
      method: "POST",
      body: JSON.stringify({ id: index }),
    });

    setBlogs(blogs.filter((s) => s.id !== index));
  };

  return (
    <div style={{ marginTop: 30 }}>
      <h2>Blogs</h2>
      <div
        style={{
          width: "100%",
          display: "flex",
          flexDirection: "row",
          flexWrap: "wrap",
        }}
      >
        {blogs.map((edu, index) => (
          <div
            key={index}
            style={{
              border: "1px solid #ddd",
              padding: 10,
              borderRadius: 10,
              marginBottom: 10,
              width: "600px",
              position: "relative",
            }}
          >
            <img
              src={`${API}/uploads/${edu.image}`}
              style={{ width: "400px", height: "200px" }}
            />
            <InputField label="Title" value={edu.title} onChange={(v) => {}} />

            <TextField
              label="Summary"
              value={edu.summary}
              onChange={(v) => {}}
              rows={4}
            />
            <TextField
              label="Description"
              value={edu.description}
              onChange={(v) => {}}
              rows={4}
            />
            <label
              style={{
                backgroundColor: "#d3d3d3",
                padding: "2px 4px",
                borderRadius: "4px",
                marginBottom: "4px",
              }}
            >
              {edu.created_at}
            </label>
            <br />
            <div onClick={() => removeEducation(edu.id)}>
              <Button label="Delete" width="120px" />
            </div>
          </div>
        ))}
      </div>
      <br />
      <hr />
      <br />
    </div>
  );
};

export default WorkSection;
