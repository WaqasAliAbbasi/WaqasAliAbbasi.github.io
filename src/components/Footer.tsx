import React from "react";

export const Footer: React.FC<
  React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLHRElement>
> = ({ className = "", ...props }) => (
  <footer
    className={`flex mt-1 justify-center items-center text-xs gap-x-1 ${className}`}
    {...props}
  >
    <span>{process.env.GIT_COMMIT_SHA}</span>
    <span className="text-gray-300 dark:text-gray-700">|</span>
    <span>Last Updated: 15 July 2021</span>
    <span className="text-gray-300  dark:text-gray-700">|</span>
    <span>© {new Date().getFullYear()}</span>
  </footer>
);
