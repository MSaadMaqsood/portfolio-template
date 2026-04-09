"use client";

import { useEffect, useState } from "react";
import InputField from "@/components/common/InputField/InputField";

const API = "http://46.101.217.170/portfolio-php";

type Blog = {
  id: number;
  title: string;
  summary: string;
  description: string;
  image: string;
};

const BlogPage = () => {
  const [blogs, setBlogs] = useState<any[]>([]);
  const [search, setSearch] = useState("");
  const [debouncedSearch, setDebouncedSearch] = useState("");

  // 🔹 Debounce logic
  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedSearch(search);
    }, 500); // 500ms delay

    return () => clearTimeout(timer);
  }, [search]);

  // 🔹 Fetch based on debounced value
  useEffect(() => {
    const fetchData = async () => {
      if (debouncedSearch.trim() === "") {
        const res = await fetch(`${API}/get-blogs.php`);
        const data = await res.json();
        setBlogs(data);
      } else {
        const res = await fetch(`${API}/search-blog.php?q=${debouncedSearch}`);
        const data = await res.json();
        setBlogs(data);
      }
    };

    fetchData();
  }, [debouncedSearch]);

  // 🔹 Fetch all blogs
  const fetchBlogs = async () => {
    const res = await fetch(`${API}/get-blogs.php`);
    const data = await res.json();
    setBlogs(data);
  };

  // 🔹 Search blogs (insecure API)
  const searchBlogs = async (q: string) => {
    const res = await fetch(`${API}/search-blog.php?q=${q}`);
    const data = await res.json();
    setBlogs(data);
  };

  useEffect(() => {
    fetchBlogs();
  }, []);

  return (
    <div style={{ width: "100%", padding: 20 }}>
      <h2>Blogs</h2>

      {/* 🔍 Search */}
      <InputField
        label="Search Blogs"
        value={search}
        onChange={(v) => {
          setSearch(v);
        }}
      />

      <br />

      {/* 📚 Blog List */}
      <div style={{ display: "flex", flexDirection: "row", gap: 20, flexWrap:"wrap" }}>
        {blogs.map((blog) => (
          <div
            key={blog.id}
            style={{
              border: "1px solid #ddd",
              borderRadius: 10,
              padding: 10,
              backgroundColor: "#fff",
              width: "320px",
            }}
          >
            {/* 🖼️ Image */}
            {blog.image && (
              <img
                src={`${API}/uploads/${blog.image}`}
                alt={blog.title}
                style={{
                  width: "300px",
                  height: "150px",
                  objectFit: "cover",
                  marginBottom: "10px",
                }}
              />
            )}

            <h3
              style={{
                fontSize: 22,
                fontWeight: 600,
                marginBottom: 10,
                color: "#111827",
              }}
            >
              {blog.title}
            </h3>
            <p
              style={{
                color: "#4b5563",
                fontSize: 14,
                lineHeight: 1.6,
                marginBottom: 10,
              }}
            >
              {blog.summary}
            </p>

            <details
              style={{
                marginTop: 10,
                cursor: "pointer",
              }}
            >
              <summary
                style={{
                  fontWeight: 500,
                  color: "#2563eb",
                  marginBottom: 8,
                }}
              >
                Read more
              </summary>
              <p
                style={{
                  marginTop: 10,
                  fontSize: 14,
                  color: "#374151",
                  lineHeight: 1.7,
                }}
              >
                {blog.description}
              </p>
            </details>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BlogPage;
