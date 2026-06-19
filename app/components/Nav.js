import Link from "next/link";
import styles from "./Nav.module.css";
import { headers } from "next/headers";

export default function Nav() {
  return (
    <nav style={{ display: "flex", gap: "16px", marginBottom: "1rem", textDecoration: "none", color: "darkorange" }} className={styles.nav}>
      <Link className={styles.hello} href="/">Home</Link>
      <Link className={styles.hello} href="/about">About</Link>
    </nav>
  );
}