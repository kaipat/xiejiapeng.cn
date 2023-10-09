// https://iconbuddy.app/arcticons

import { ComponentProps } from "react";
import clsx from "clsx";

export default function DiscordIcon(props: ComponentProps<"svg">) {
  return (
    <svg
      aria-label="discord logo"
      viewBox="0 0 48 48"
      xmlns="http://www.w3.org/2000/svg"
      className={clsx("text-black dark:text-white", props.className)}>
      <path strokeWidth="3" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M17.59 34.173A48.874 48.874 0 0 1 14.68 38C7.3 37.79 4.5 33 4.5 33a44.83 44.83 0 0 1 4.81-19.52A16.47 16.47 0 0 1 18.69 10l1 2.31A32.688 32.688 0 0 1 24 12a32.964 32.964 0 0 1 4.33.3l1-2.31a16.47 16.47 0 0 1 9.38 3.51A44.83 44.83 0 0 1 43.5 33s-2.8 4.79-10.18 5a47.42 47.42 0 0 1-2.86-3.81m6.46-2.9c-3.84 1.945-7.556 3.89-12.92 3.89s-9.08-1.945-12.92-3.89"/>
      <circle strokeWidth="3" cx="17.847" cy="26.23" r="3.35" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
      <circle strokeWidth="3" cx="30.153" cy="26.23" r="3.35" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}
