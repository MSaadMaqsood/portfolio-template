"use client";

import React, { useState, useRef } from "react";
import style from "./style.module.css";
import InputField from "../common/InputField/InputField";
import TextField from "../common/TextField/TextField";
import Button from "../common/Button/Button";
import ReCAPTCHA from "react-google-recaptcha";

const API = process.env.NEXT_PUBLIC_API_URL;


const ContactUs = () => {
  const [mode, setMode] = useState<"insecure" | "secure">("insecure");

  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const recaptchaRef = useRef<ReCAPTCHA>(null);

  const handleChange = (key: string, value: string) => {
    setForm((prev) => ({ ...prev, [key]: value }));
  };

  const handleSubmit = async () => {
    const token = recaptchaRef.current?.getValue();
    if (!token) return alert("Please verify you are human");

    const endpoint =
      mode === "insecure"
        ? `${API}/contact-insecure.php`
        : `${API}/contact-secure.php`;

    const res = await fetch(endpoint, {
      method: "POST",
      body: JSON.stringify({ ...form, recaptcha_token: token }),
    });

    const data = await res.json();
    alert(JSON.stringify(data));
    recaptchaRef.current?.reset();
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

        <ReCAPTCHA
          ref={recaptchaRef}
          sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY!}
        />
        <div >
          <Button label="Send Message" onClick={handleSubmit}/>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;