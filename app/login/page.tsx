"use client";

import React, { useState } from "react";

import styles from "./login.module.css";
import InputField from "@/components/common/InputField/InputField";
import Button from "@/components/common/Button/Button";
import { useRouter } from "next/navigation";

const LoginPage = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();
  const handleLogin = async () => {
    if (!username || !password) {
      alert("Please fill all fields");
      return;
    }

    console.log("Login Data:", { username, password });
    await fetch("http://46.101.217.170/portfolio-php/login.php", {
      method: "POST",
      body: JSON.stringify({
        username,
        password,
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

        <div>
          <Button label="Login" width="100%" onClick={handleLogin} />
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
