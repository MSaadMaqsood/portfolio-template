"use client";

import React, { useState } from "react";
import style from "./style.module.css";
import InputField from "../common/InputField/InputField";
import TextField from "../common/TextField/TextField";
import Button from "../common/Button/Button";

const API = "http://46.101.217.170/portfolio-php";

const ContactUs = () => {
  const [mode, setMode] = useState<"insecure" | "secure">("insecure");

  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (key: string, value: string) => {
    setForm((prev) => ({ ...prev, [key]: value }));
  };

  const handleSubmit = async () => {
    const endpoint =
      mode === "insecure"
        ? `${API}/contact-insecure.php`
        : `${API}/contact-secure.php`;

    const res = await fetch(endpoint, {
      method: "POST",
      body: JSON.stringify(form),
    });

    const data = await res.json();
    alert(JSON.stringify(data));
  };

  return (
    <div className={style.container}>
      <h2>Leave us your info</h2>

      {/* 🔥 MODE TOGGLE */}
      

      <div className={style.formContainer}>
        <InputField
          label="Full Name"
          value={form.name}
          onChange={(v) => handleChange("name", v)}
        />

        <InputField
          label="Email"
          value={form.email}
          onChange={(v) => handleChange("email", v)}
        />

        <InputField
          label="Subject"
          value={form.subject}
          onChange={(v) => handleChange("subject", v)}
        />

        <TextField
          label="Message"
          value={form.message}
          onChange={(v) => handleChange("message", v)}
        />

        <div >
          <Button label="Send Message" onClick={handleSubmit}/>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;