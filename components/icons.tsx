import type { SVGProps } from "react";

export type IconName = "people" | "person" | "chart" | "book" | "target" | "leaf" | "instagram" | "linkedin" | "youtube" | "arrow";

export function Icon({ name, ...props }: SVGProps<SVGSVGElement> & { name: IconName }) {
  return (
    <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}>
      {name === "arrow" && <><path d="M7 24h33M31 15l9 9-9 9" /></>}
      {name === "person" && <><circle cx="24" cy="14" r="8" /><path d="M9 41v-7c0-13 30-13 30 0v7H9Z" /></>}
      {name === "people" && <><circle cx="24" cy="13" r="6" /><circle cx="10" cy="19" r="4" /><circle cx="38" cy="19" r="4" /><path d="M15 36v-7c0-10 18-10 18 0v7H15Zm-2-12c-7-4-12 1-12 7v6h11m23-13c7-4 12 1 12 7v6H36" /></>}
      {name === "chart" && <><path d="M7 26h8v16H7zM20 15h8v27h-8zM33 4h8v38h-8z" /></>}
      {name === "book" && <><path d="M24 10c-7-6-13-6-21-3v29c8-3 14-3 21 3 7-6 13-6 21-3V7c-8-3-14-3-21 3Zm0 0v29" /></>}
      {name === "target" && <><circle cx="23" cy="25" r="18" /><circle cx="23" cy="25" r="12" /><circle cx="23" cy="25" r="5" /><path d="m23 25 22-22m-8 0h8v8" /></>}
      {name === "leaf" && <><path d="M13 35C-2 12 21 6 43 3c0 25-13 40-30 32ZM5 45 33 15" /></>}
      {name === "instagram" && <><rect x="7" y="7" width="34" height="34" rx="9" /><circle cx="24" cy="24" r="8" /><circle cx="34" cy="14" r="1" fill="currentColor" /></>}
      {name === "linkedin" && <><path d="M8 19h7v23H8zM23 19h7v3c3-6 13-5 13 4v16h-7V28c0-5-6-5-6 0v14h-7z" fill="currentColor" stroke="none" /><circle cx="11.5" cy="10" r="4" fill="currentColor" stroke="none" /></>}
      {name === "youtube" && <><rect x="3" y="11" width="42" height="28" rx="7" fill="currentColor" stroke="none" /><path d="m20 18 11 7-11 7V18Z" fill="var(--color-paper)" stroke="none" /></>}
    </svg>
  );
}
