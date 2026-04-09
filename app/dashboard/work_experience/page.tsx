"use client";

import Button from "@/components/common/Button/Button";
import InputField from "@/components/common/InputField/InputField";
import TextField from "@/components/common/TextField/TextField";
import { useEffect, useState } from "react";

type WorkType = {
  id: number;
  company: string;
  start_date: string;
  end_date: string;
  title: string;
  description: string;
};
const API = "http://46.101.217.170/portfolio-php";

const WorkSection = () => {
  const userId = 1; // for now static (later from auth)

  const [education, setEducation] = useState<WorkType[]>([]);
  const [newEducation, setNewEducation] = useState<WorkType>({
    id: 0,
    company: "",
    start_date: "",
    end_date: "",
    title: "",
    description: "",
  });
  useEffect(() => {
    fetch(`${API}/get-work.php?user_id=${userId}`)
      .then((res) => res.json())
      .then((data) => {
        setEducation(data);
      });
  }, []);

  const addEducation = async () => {
    const res = await fetch(`${API}/add-work.php`, {
      method: "POST",
      body: JSON.stringify({
        user_id: userId,
        ...newEducation,
      }),
    });

    const data = await res.json();

    setEducation([...education, { ...newEducation, id: data.id }]);

    setNewEducation({
      id: 0,
      company: "",
      start_date: "",
      end_date: "",
      title: "",
      description: "",
    });
  };

  const removeEducation = async (index: number) => {
    await fetch(`${API}/delete-work.php`, {
      method: "POST",
      body: JSON.stringify({ id: index }),
    });

    setEducation(education.filter((s) => s.id !== index));
  };

  return (
    <div style={{ marginTop: 30 }}>
      <h2>Work Experience</h2>
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
            <div style={{ display: "flex", gap: 10 }}>
              <InputField
                label="Company Name"
                value={edu.company}
                onChange={(v) => {}}
                width="49%"
              />

              <InputField
                label="Position Title"
                value={edu.title}
                onChange={(v) => {}}
                width="49%"
              />
            </div>
            <div style={{ display: "flex", gap: 10 }}>
              <InputField
                label="From"
                value={edu.start_date}
                onChange={(v) => {}}
                width="32%"
              />
              <InputField
                label="To"
                value={edu.end_date}
                onChange={(v) => {}}
                width="32%"
              />
            </div>

            <TextField
              label="Description"
              value={edu.description}
              onChange={(v) => {}}
              rows={4}
            />
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
      <div
        style={{
          border: "1px solid #ddd",
          padding: 10,
          borderRadius: 10,
          marginBottom: 10,
          width: "100%",
          position: "relative",
        }}
      >
        <div style={{ display: "flex", gap: 10 }}>
          <InputField
            label="Company Name"
            value={newEducation.company}
            onChange={(v) => setNewEducation((prev) => ({ ...prev, company: v }))}
            width="49%"
          />

          <InputField
            label=" Title"
            value={newEducation.title}
            onChange={(v) => setNewEducation((prev) => ({ ...prev, title: v }))}
            width="49%"
          />
        </div>
        <div style={{ display: "flex", gap: 10 }}>
          <InputField
            label="From"
            value={newEducation.start_date}
            onChange={(v) =>
              setNewEducation((prev) => ({ ...prev, start_date: v }))
            }
            width="32%"
          />
          <InputField
            label="To"
            value={newEducation.end_date}
            onChange={(v) =>
              setNewEducation((prev) => ({ ...prev, end_date: v }))
            }
            width="32%"
          />
        </div>

        <TextField
          label="Description"
          value={newEducation.description}
          onChange={(v) =>
            setNewEducation((prev) => ({ ...prev, description: v }))
          }
          rows={3}
        />
        <br />
        <div onClick={addEducation}>
          <Button label="Add Work" width="200px" />
        </div>
      </div>
    </div>
  );
};

export default WorkSection;
