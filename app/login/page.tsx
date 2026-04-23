"use client";

import React, { useState } from "react";

import styles from "./login.module.css";
import InputField from "@/components/common/InputField/InputField";
import Button from "@/components/common/Button/Button";
import { useRouter } from "next/navigation";
import ReCAPTCHA from "react-google-recaptcha";
import { useRef } from "react";
const LoginPage = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();
  const recaptchaRef = useRef<ReCAPTCHA>(null);

  const handleLogin = async () => {
    const token = recaptchaRef.current?.getValue();
    if (!token) return alert("Please verify you are human");

    if (!username || !password) {
      alert("Please fill all fields");
      return;
    }

    console.log("Login Data:", { username, password });
    await fetch(`${process.env.NEXT_PUBLIC_API_URL}/login.php`, {
      method: "POST",
      body: JSON.stringify({
        username,
        password,
        recaptcha_token: token,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.message) {
          router.push("/dashboard");
        } else {
          alert(data.error);
        }
      });

    // TODO: call API / auth logic
  };

  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <h2>Login</h2>

        <InputField label="Username" value={username} onChange={setUsername} />

        <InputField label="Password" value={password} onChange={setPassword} />
        <ReCAPTCHA
          ref={recaptchaRef}
          sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY!}
        />
        <div>
          <Button label="Login" width="100%" onClick={handleLogin} />
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
