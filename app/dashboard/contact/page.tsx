"use client";

import Button from "@/components/common/Button/Button";
import InputField from "@/components/common/InputField/InputField";
import TextField from "@/components/common/TextField/TextField";
import { useEffect, useState } from "react";

type ContactType = {
  id: number;
  name: string;
  email: string;
  subject: string;
  message: string;
  created_at: string;
};
const API = "https://cyber.radudenie.me/portfolio-php";

const WorkSection = () => {
  const userId = 1; // for now static (later from auth)

  const [education, setEducation] = useState<ContactType[]>([]);

  useEffect(() => {
    fetch(`${API}/get-contactus.php`)
      .then((res) => res.json())
      .then((data) => {
        setEducation(data);
      });
  }, []);

  return (
    <div style={{ marginTop: 30 }}>
      <h2>Contact List</h2>
      <div
        style={{
          width: "100%",
          display: "flex",
          flexDirection: "row",
          flexWrap: "wrap",
        }}
      >
        {education.map((edu, index) => (
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
            <label
              style={{
                backgroundColor: "#d3d3d3",
                padding: "2px 4px",
                borderRadius: "4px",
                marginBottom:"4px"
              }}
            >
              {edu.created_at}
            </label>
            <div style={{ display: "flex", gap: 10 }}>
              <InputField
                label="Name"
                value={edu.name}
                onChange={(v) => {}}
                width="49%"
              />

              <InputField
                label="Email"
                value={edu.email}
                onChange={(v) => {}}
                width="49%"
              />
            </div>
            <InputField
              label="Subject"
              value={edu.subject}
              onChange={(v) => {}}
              width="32%"
            />

            <TextField
              label="Messgae"
              value={edu.message}
              onChange={(v) => {}}
              rows={4}
            />
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
