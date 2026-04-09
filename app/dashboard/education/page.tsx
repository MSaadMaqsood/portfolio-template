"use client";

import Button from "@/components/common/Button/Button";
import InputField from "@/components/common/InputField/InputField";
import TextField from "@/components/common/TextField/TextField";
import { useEffect, useState } from "react";

type Education = {
  id: number;
  institute: string;
  start_date: string;
  end_date: string;
  grade: string;
  degree: string;
  description: string;
};
const API = "http://46.101.217.170//portfolio-php";

const EducationSection = () => {
  const userId = 1; // for now static (later from auth)

  const [education, setEducation] = useState<Education[]>([]);
  const [newEducation, setNewEducation] = useState<Education>({
    id: 0,
    institute: "",
    start_date: "",
    end_date: "",
    grade: "",
    degree: "",
    description: "",
  });
  useEffect(() => {
    fetch(`${API}/get-education.php?user_id=${userId}`)
      .then((res) => res.json())
      .then((data) => {
        setEducation(data);
      });
  }, []);

  const addEducation = async () => {
    const res = await fetch(`${API}/add-education.php`, {
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
      institute: "",
      start_date: "",
      end_date: "",
      grade: "",
      degree: "",
      description: "",
    });
  };

  const removeEducation = async (index: number) => {
    await fetch(`${API}/delete-education.php`, {
      method: "POST",
      body: JSON.stringify({ id: index }),
    });

    setEducation(education.filter((s) => s.id !== index));
  };

  return (
    <div style={{ marginTop: 30 }}>
      <h2>Education</h2>
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
                label="Institute Name"
                value={edu.institute}
                onChange={(v) => {}}
                width="49%"
              />

              <InputField
                label="Degree Title"
                value={edu.degree}
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
              <InputField
                label="Grade"
                value={edu.grade}
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
            label="Institute Name"
            value={newEducation.institute}
            onChange={(v) =>
              setNewEducation((prev) => ({ ...prev, institute: v }))
            }
            width="49%"
          />

          <InputField
            label="Degree Title"
            value={newEducation.degree}
            onChange={(v) =>
              setNewEducation((prev) => ({ ...prev, degree: v }))
            }
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
          <InputField
            label="Grade"
            value={newEducation.grade}
            onChange={(v) => setNewEducation((prev) => ({ ...prev, grade: v }))}
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
          <Button label="Add Education" width="200px" />
        </div>
      </div>
    </div>
  );
};

export default EducationSection;
