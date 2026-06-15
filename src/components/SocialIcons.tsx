import type { SVGProps } from "react";

export const InstagramIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.8"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
    {...props}
  >
    <rect x="3" y="3" width="18" height="18" rx="5" />
    <circle cx="12" cy="12" r="4" />
    <circle cx="17.5" cy="6.5" r="0.8" fill="currentColor" stroke="none" />
  </svg>
);

export const FacebookIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
    <path d="M14.4 8.6V6.8c0-.7.5-1.2 1.3-1.2h1.5V3.1c-.7-.1-1.6-.1-2.3-.1-2.4 0-4 1.5-4 4.1v1.5H8.2v2.9h2.7V21h3.2v-9.5h2.6l.4-2.9h-3.7Z" />
  </svg>
);
