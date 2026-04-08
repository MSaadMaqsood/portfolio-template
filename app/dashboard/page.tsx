"use client";

import Button from "@/components/common/Button/Button";
import InputField from "@/components/common/InputField/InputField";
import TextField from "@/components/common/TextField/TextField";
import React, { useEffect, useState } from "react";

type Item = {
  id?: number;
  name: string;
  percentage: string;
};

const API = "http://localhost/portfolio-php";

const Dashboard = () => {
  const userId = 1; // for now static (later from auth)

  const [form, setForm] = useState<any>({});
  const [languages, setLanguages] = useState<Item[]>([]);
  const [skills, setSkills] = useState<Item[]>([]);
  const [newLanguage, setNewLanguage] = useState({ name: "", percentage: "" });
  const [newSkill, setNewSkill] = useState({ name: "", percentage: "" });

  // =========================
  // 🔹 FETCH DATA ON LOAD
  // =========================
  useEffect(() => {
    fetch(`${API}/read.php?id=${userId}`)
      .then((res) => res.json())
      .then((data) => {
        setForm(data.user || {});
        setLanguages(data.languages || []);
        setSkills(data.skills || []);
      });
  }, []);

  // =========================
  // 🔹 HANDLE FORM CHANGE
  // =========================
  const handleChange = (key: string, value: string) => {
    setForm((prev: any) => ({ ...prev, [key]: value }));
  };

  // =========================
  // 🔹 UPDATE BIO
  // =========================
  const updateBio = async () => {
    await fetch(`${API}/update-bio.php`, {
      method: "POST",
      body: JSON.stringify({ ...form, id: userId }),
    });

    alert("Bio Updated");
  };

  // =========================
  // 🔹 ADD LANGUAGE
  // =========================
  const addLanguage = async () => {
    const newLang = { name: "", percentage: "" };

    const res = await fetch(`${API}/add-language.php`, {
      method: "POST",
      body: JSON.stringify({ user_id: userId, ...newLang }),
    });

    const data = await res.json();

    setLanguages([...languages, { ...newLang, id: data.id }]);
  };

  // =========================
  // 🔹 DELETE LANGUAGE
  // =========================
  const deleteLanguage = async (id?: number) => {
    await fetch(`${API}/delete-language.php`, {
      method: "POST",
      body: JSON.stringify({ id }),
    });

    setLanguages(languages.filter((l) => l.id !== id));
  };

  // =========================
  // 🔹 UPDATE LANGUAGE (LOCAL)
  // =========================
  const updateLanguage = (index: number, key: keyof Item, value: string) => {
    const updated = [...languages];
    updated[index][key] = value;
    setLanguages(updated);
  };

  // =========================
  // 🔹 ADD SKILL
  // =========================
  const addSkill = async () => {
    const newSkill = { name: "", percentage: "" };

    const res = await fetch(`${API}/add-skill.php`, {
      method: "POST",
      body: JSON.stringify({ user_id: userId, ...newSkill }),
    });

    const data = await res.json();

    setSkills([...skills, { ...newSkill, id: data.id }]);
  };

  // =========================
  // 🔹 DELETE SKILL
  // =========================
  const deleteSkill = async (id?: number) => {
    await fetch(`${API}/delete-skill.php`, {
      method: "POST",
      body: JSON.stringify({ id }),
    });

    setSkills(skills.filter((s) => s.id !== id));
  };

  const updateSkill = (index: number, key: keyof Item, value: string) => {
    const updated = [...skills];
    updated[index][key] = value;
    setSkills(updated);
  };

  return (
    <div style={{ maxWidth: 800, margin: "auto" }}>
      <h2>Dashboard</h2>

      {/* BIO */}
      <InputField
        label="Full Name"
        value={form.fullname || ""}
        onChange={(v) => handleChange("fullname", v)}
      />
      <InputField
        label="Position"
        value={form.position || ""}
        onChange={(v) => handleChange("position", v)}
      />

      <InputField
        label="Facebook"
        value={form.facebook || ""}
        onChange={(v) => handleChange("facebook", v)}
      />
      <InputField
        label="Instagram"
        value={form.instagram || ""}
        onChange={(v) => handleChange("instagram", v)}
      />
      <InputField
        label="LinkedIn"
        value={form.linkedin || ""}
        onChange={(v) => handleChange("linkedin", v)}
      />
      <InputField
        label="X"
        value={form.x || ""}
        onChange={(v) => handleChange("x", v)}
      />

      <InputField
        label="Age"
        value={form.age || ""}
        onChange={(v) => handleChange("age", v)}
      />
      <InputField
        label="Cell"
        value={form.cell || ""}
        onChange={(v) => handleChange("cell", v)}
      />
      <InputField
        label="Email"
        value={form.email || ""}
        onChange={(v) => handleChange("email", v)}
      />

      <TextField
        label="Address"
        value={form.address || ""}
        onChange={(v) => handleChange("address", v)}
      />

      <div onClick={updateBio}>
        <Button label="Update Bio" width="100%" />
      </div>
      <br />
      <hr />
      <br />
      {/* LANGUAGES */}
      <h3>Languages</h3>
      {languages.map((lang, index) => (
        <div key={lang.id} style={{ display: "flex", gap: 10 }}>
          <InputField
            label="Language"
            value={lang.name}
            onChange={(v) => updateLanguage(index, "name", v)}
          />
          <InputField
            label="%"
            value={lang.percentage}
            onChange={(v) => updateLanguage(index, "percentage", v)}
          />

          <div onClick={() => deleteLanguage(lang.id)}>
            <Button label="Delete" width="100px" />
          </div>
        </div>
      ))}
      <br />
      <hr />
      <br />
      {/* ➕ ADD NEW LANGUAGE ROW */}
      <div style={{ display: "flex", gap: 10, marginTop: 10 }}>
        <InputField
          label="New Language"
          value={newLanguage.name}
          onChange={(v) => setNewLanguage({ ...newLanguage, name: v })}
        />
        <InputField
          label="%"
          value={newLanguage.percentage}
          onChange={(v) => setNewLanguage({ ...newLanguage, percentage: v })}
        />

        <div
          onClick={async () => {
            if (!newLanguage.name) return;

            const res = await fetch(`${API}/add-language.php`, {
              method: "POST",
              body: JSON.stringify({
                user_id: userId,
                ...newLanguage,
              }),
            });

            const data = await res.json();

            setLanguages([...languages, { ...newLanguage, id: data.id }]);
            setNewLanguage({ name: "", percentage: "" });
          }}
        >
          <Button label="Add" width="100px" />
        </div>
      </div>
      <br />
      <hr />
      <br />

      {/* SKILLS */}
      <h3>Skills</h3>
      {skills.map((skill, index) => (
        <div key={skill.id} style={{ display: "flex", gap: 10 }}>
          <InputField
            label="Skill"
            value={skill.name}
            onChange={(v) => updateSkill(index, "name", v)}
          />
          <InputField
            label="%"
            value={skill.percentage}
            onChange={(v) => updateSkill(index, "percentage", v)}
          />

          <div onClick={() => deleteSkill(skill.id)}>
            <Button label="Delete" width="100px" />
          </div>
        </div>
      ))}
      <br />
      <hr />
      <br />
      <div style={{ display: "flex", gap: 10, marginTop: 10 }}>
        <InputField
          label="New Skill"
          value={newSkill.name}
          onChange={(v) => setNewSkill({ ...newSkill, name: v })}
        />
        <InputField
          label="%"
          value={newSkill.percentage}
          onChange={(v) => setNewSkill({ ...newSkill, percentage: v })}
        />

        <div
          onClick={async () => {
            if (!newSkill.name) return;

            const res = await fetch(`${API}/add-skill.php`, {
              method: "POST",
              body: JSON.stringify({
                user_id: userId,
                ...newSkill,
              }),
            });

            const data = await res.json();

            setSkills([...skills, { ...newSkill, id: data.id }]);
            setNewSkill({ name: "", percentage: "" });
          }}
        >
          <Button label="Add" width="100px" />
        </div>
      </div>

      <br />
      <hr />
      <br />
    </div>
  );
};

export default Dashboard;
