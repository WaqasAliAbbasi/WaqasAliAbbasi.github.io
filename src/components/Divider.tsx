import React from "react";

export const Divider: React.FC<
  React.DetailedHTMLProps<React.HTMLAttributes<HTMLHRElement>, HTMLHRElement>
> = ({ className = "", ...props }) => (
  <hr
    className={`border-gray-300 dark:border-gray-700 ${className}`}
    {...props}
  />
);
