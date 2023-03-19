/* eslint-disable @next/next/no-img-element */
/* eslint-disable jsx-a11y/alt-text */
import Head from "next/head";
import styles from "@/styles/Main.module.css";
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    const handleContextMenu = (e: MouseEvent) => e.preventDefault();
    document.addEventListener("contextmenu", handleContextMenu);
    return () => {
      document.removeEventListener("contextmenu", handleContextMenu);
    };
  }, []);

  return (
    <>
      <Head>
        <title>Software Engineer & Web Developer | Iván Jaén</title>
        <meta
          name="description"
          content="Experienced full-stack developer skilled in React, Node.js, and Java. Passionate about using technology to build and scale innovative projects and tools that have a real-world impact."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <div className={styles.header}>
          <p className={styles.description}>Coming soon...</p>
        </div>

        <div className={styles.section}>
          <img
            className={styles.logo}
            src="/main.jpg"
            onContextMenu={() => {
              return false;
            }}
          />
        </div>

        <div className={styles.footer}>
          <a
            href="https://www.linkedin.com/in/ivan-jaen-trujillo/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img className={styles.icon} src="/linkedin.png" />
          </a>
          <a
            href="https://github.com/kholostyak17"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img className={styles.icon} src="/github.png" />
          </a>
        </div>
      </main>
    </>
  );
}
