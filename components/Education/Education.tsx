import React, { useEffect, useState } from "react";
import style from "./style.module.css";
type Education = {
  id: number;
  institute: string;
  start_date: string;
  end_date: string;
  grade: string;
  degree: string;
  description: string;
};
const API = "http://localhost/portfolio-php";

const Education = () => {
  const userId = 1; // for now static (later from auth)
  const [education, setEducation] = useState<Education[]>([]);
  useEffect(() => {
    fetch(`${API}/get-education.php?user_id=${userId}`)
      .then((res) => res.json())
      .then((data) => {
        setEducation(data);
      });
  }, []);
  return (
    <div className={style.container}>
      <div className={style.titlecon}>
        <h2>Education</h2>
        {/* <label>
          Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
          sint. Velit officia consequat duis enim velit mollit. lorem ipsum
        </label> */}
      </div>
      <div className={style.content}>
        {education.map((edu, index) => (
          <>
            <div key={index} className={style.row}>
              <div className={style.left}>
                <h4>{edu.institute}</h4>
                <div className={style.detailsRow}>
                  <label>Student</label>
                  <p>
                    {edu.start_date} - {edu.end_date}
                  </p>
                </div>
                <div className={style.detailsRow}>
                  <label>Grade</label>
                  <p>{edu.grade}</p>
                </div>
              </div>
              <div className={style.right}>
                <h4>{edu.degree}</h4>
                <label>{edu.description}</label>
              </div>
            </div>
            <div className={style.divider} />
          </>
        ))}
      </div>
    </div>
  );
};

export default Education;
