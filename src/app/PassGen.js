"use client"
import { useState } from "react";
import axios from "axios"
import Image from "next/image";
import styles from "./page.module.css";

// Function to generate a random password
const generatePassword = () => {
  // Logic for generating password (for demonstration, a simple password)
  const password = Math.random().toString(36).slice(2);
  return password;
};

export default function PassGen() { // child function
  const [password, setPassword] = useState("");
  const [strengthLevel, setStrengthLevel] = useState("Unset yet");

  // Function to handle password generation
  const handleGeneratePassword = () => {
    const newPassword = generatePassword();
    setPassword(newPassword);
  };

  // Function to handle form submission
  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log("grabbed event ", password) // pass password to parent function

    try {
        const response = await axios.get("/api", {
            params: {
              password: password
            }
          })
        setStrengthLevel(response.data)
      } catch (error) {
        console.error("Error sending password:", error);
      }
  };

  return (
    <main className={styles.main}>
      <div className={styles.description}>
        <p>Password Generator</p>
        <p>By George Issa</p>
      </div>

      <div className={styles.center}>
        <div>
          <button className={styles.button} onClick={handleGeneratePassword}>Generate Password</button>
          <br />
          <h3>{password}</h3>
        </div>

        <br />

        <form onSubmit={handleSubmit}>
          <input className={styles.inputField} type="text" name="password" value={password} onChange={(e) => setPassword(e.target.value)} />
          <br />
          <br />
          <br />
          <button className={styles.button} type="submit">Submit for strength result</button>
        </form>
        <br />
        <br />
        <h4>Strength scale: {strengthLevel}</h4>
      </div>
    </main>
  );
}