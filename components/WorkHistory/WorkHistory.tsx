import React, { useEffect, useState } from "react";
import style from "./style.module.css";
type WorkType = {
  id: number;
  company: string;
  start_date: string;
  end_date: string;
  title: string;
  description: string;
};
const API = "http://46.101.217.170//portfolio-php";
const WorkHistory = () => {
  const userId = 1; // for now static (later from auth)

  const [education, setEducation] = useState<WorkType[]>([]);
  useEffect(() => {
    fetch(`${API}/get-work.php?user_id=${userId}`)
      .then((res) => res.json())
      .then((data) => {
        setEducation(data);
      });
  }, []);
  return (
    <div className={style.container}>
      <div className={style.titlecon}>
        <h2>Work History</h2>
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
                <h4>{edu.company}</h4>
                <div className={style.detailsRow}>
                  <label>Period</label>
                  <p>
                    {edu.start_date} - {edu.end_date}
                  </p>
                </div>
              </div>
              <div className={style.right}>
                <h4>{edu.title}</h4>
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

export default WorkHistory;
