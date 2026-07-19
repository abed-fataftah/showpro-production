"use client";

import { useEffect, useId, useState } from "react";
import Link from "next/link";
import styles from "./MobileMenu.module.css";

const LINKS = [
  { href: "/portfolio", label: "Portfolio" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
  { href: "/privacy", label: "Privacy" },
] as const;

export function MobileMenu() {
  const [open, setOpen] = useState(false);
  const menuId = useId();

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <div className={styles.wrap}>
      <button
        type="button"
        className={styles.toggle}
        aria-expanded={open}
        aria-controls={menuId}
        aria-label={open ? "Close menu" : "Open menu"}
        onClick={() => setOpen((v) => !v)}
      >
        <span className={styles.bar} aria-hidden="true" />
        <span className={styles.bar} aria-hidden="true" />
        <span className={styles.bar} aria-hidden="true" />
      </button>

      <nav id={menuId} className={open ? styles.menuOpen : styles.menu} aria-label="Mobile" hidden={!open}>
        {LINKS.map((l) => (
          <Link key={l.href} href={l.href} className={styles.link} onClick={() => setOpen(false)}>
            {l.label}
          </Link>
        ))}
      </nav>
    </div>
  );
}