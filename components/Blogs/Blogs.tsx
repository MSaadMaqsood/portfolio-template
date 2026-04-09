import React, { useEffect, useState } from "react";
import style from "./style.module.css";
import Image from "next/image";
import Button from "../common/Button/Button";
import Link from "next/link";
import SendIcon from "@/icons/SendIcon";

type BlogType = {
  id: number;
  summary: string;
  image: string;
  title: string;
  description: string;
  created_at: string;
};

const API = "http://46.101.217.170/portfolio-php";

const Blogs = () => {
  const [blogs, setBlogs] = useState<BlogType[]>([]);

  useEffect(() => {
    fetch(`${API}/get-blogs-top.php`)
      .then((res) => res.json())
      .then((data) => {
        setBlogs(data);
      });
  }, []);
  return (
    <div className={style.container}>
      <div className={style.titlecon}>
        <h2>Blogs</h2>
        {/* <label>
          Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
          sint. Velit officia consequat duis enim velit mollit. lorem ipsum
        </label> */}
      </div>

      <div className={style.content}>
        {blogs.map((edu, index) => (
          <div key={index} className={style.row}>
            <div className={style.title}>
              <img
                src={`${API}/uploads/${edu.image}`}
                style={{
                  width: "300px",
                  height: "150px",
                  margin: "0 auto",
                }}
                width={300}
                height={150}
                alt=""
              />
            </div>
            <div className={style.right}>
              <h4>{edu.title}</h4>
              <label>{edu.summary}</label>
            </div>
          </div>
        ))}
      </div>
      <Link href={`/blogs`}>
        <Button label="All blogs" endIcon={<SendIcon />} width="154px" />
      </Link>
    </div>
  );
};

export default Blogs;
