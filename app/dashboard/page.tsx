"use client";

import Button from "@/components/common/Button/Button";
import InputField from "@/components/common/InputField/InputField";
import ProfileUpload from "@/components/common/ProfileUpload/ProfileUpload";
import ResumeUpload from "@/components/common/ResumeUpload/ResumeUpload";
import TextField from "@/components/common/TextField/TextField";
import React, { useEffect, useState } from "react";

type Item = {
  id?: number;
  name: string;
  percentage: string;
};

const API = "https://cyber.radudenie.me/portfolio-php";

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

  return (
    <div
      style={{
        width: "100dvw",
        margin: "auto",
        display: "flex",
        justifyContent: "space-evenly",
      }}
    >
      <div style={{ width: "45dvw" }}>
        {/* BIO */}
        <h2>Bio</h2>
        <div style={{ display: "flex", flexDirection: "row", gap: 8 }}>
          <ProfileUpload
            defaultImg={
              form.profile_image ? API + "/uploads/" + form.profile_image : null
            }
          />
          <div style={{ width: "100%" }}>
            <div style={{ display: "flex", flexDirection: "row", gap: 8 }}>
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
            </div>
            <InputField
              label="Age"
              value={form.age || ""}
              onChange={(v) => handleChange("age", v)}
            />
            <TextField
              label="Bio"
              value={form.bio || ""}
              onChange={(v) => handleChange("bio", v)}
              rows={4}
            />
          </div>
        </div>
        <div style={{ display: "flex", flexDirection: "row", gap: 8 }}>
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
        </div>
        <div style={{ display: "flex", flexDirection: "row", gap: 8 }}>
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
        </div>
        <div style={{ display: "flex", flexDirection: "row", gap: 8 }}>
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
        </div>
        <TextField
          label="Address"
          value={form.address || ""}
          onChange={(v) => handleChange("address", v)}
          rows={4}
        />
        <br />
        <div onClick={updateBio}>
          <Button label="Update Bio" width="100%" />
        </div>

        <ResumeUpload />
      </div>
      <div style={{ width: "45dvw" }}>
        {/* LANGUAGES */}
        <h3>Languages</h3>
        {languages.map((lang, index) => (
          <div key={lang.id} style={{ display: "flex", gap: 10 }}>
            <InputField
              label="Language"
              value={lang.name}
              onChange={(v) => {}}
            />
            <InputField
              label="%"
              value={lang.percentage}
              onChange={(v) => {}}
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
            <InputField label="Skill" value={skill.name} onChange={(v) => {}} />
            <InputField
              label="%"
              value={skill.percentage}
              onChange={(v) => {}}
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
      </div>
    </div>
  );
};

export default Dashboard;
