import Image from "next/image";
import styles from "./page.module.css";
import PassGen from "./PassGen";

export default function Home() { //parent function, you can't use state in the parent

  return (
    <PassGen /> // child function
  );
}