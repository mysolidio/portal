import { SVGProps } from "react";

export default function DataLock({
  className,
  ...props
}: SVGProps<SVGSVGElement>) {
  return (
    <svg
      width="1em"
      height="1em"
      viewBox="0 0 54 54"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      {...props}
    >
      <g
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="3"
      >
        <path d="m37 4.5h7.5c1.3261 0 2.5979.52678 3.5355 1.46447.9377.93768 1.4645 2.20945 1.4645 3.53553v7.5m-32.5 32.5h-7.5c-1.32608 0-2.59785-.5268-3.53553-1.4645-.93769-.9376-1.46447-2.2094-1.46447-3.5355v-7.5m20-30v15c0 2.7625-5.0375 5-11.25 5s-11.25-2.2375-11.25-5v-15m43.75 25v5h-10v-5c0-1.3261.5268-2.5979 1.4645-3.5355.9376-.9377 2.2094-1.4645 3.5355-1.4645s2.5979.5268 3.5355 1.4645c.9377.9376 1.4645 2.2094 1.4645 3.5355zm-16.25 5h22.5v15h-22.5z" />
        <path d="m24.5 14.5c0 2.7625-5.0375 5-11.25 5s-11.25-2.2375-11.25-5m22.5-7.5c0 2.7625-5.0375 5-11.25 5s-11.25-2.2375-11.25-5 5.0375-5 11.25-5 11.25 2.2375 11.25 5z" />
      </g>
    </svg>
  );
}
