"use client";

import { useState } from "react";
import styles from "./CopyButton.module.css";

type CopyState = "idle" | "copied" | "error";

export function CopyButton({ value, label }: { value: string; label: string }) {
  const [state, setState] = useState<CopyState>("idle");

  async function handleCopy() {
    try {
      if (!navigator.clipboard) throw new Error("Clipboard API unavailable");
      await navigator.clipboard.writeText(value);
      setState("copied");
      window.setTimeout(() => setState("idle"), 1800);
    } catch {
      // Never claim success on failure (CS §14). Signal that copy did not complete;
      // the value itself stays visible and selectable next to this button.
      setState("error");
      window.setTimeout(() => setState("idle"), 2600);
    }
  }

  const text = state === "copied" ? "Copied" : state === "error" ? "Copy failed — select manually" : "Copy";

  return (
    <button
      type="button"
      className={styles.button}
      onClick={handleCopy}
      aria-label={"Copy " + label}
    >
      <span aria-hidden="true">{text}</span>
      <span className={styles.sr} role="status" aria-live="polite">
        {state === "copied" ? label + " copied" : state === "error" ? "Copy failed, please select manually" : ""}
      </span>
    </button>
  );
}