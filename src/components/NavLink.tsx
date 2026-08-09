"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

/**
 * A header link that knows when it is the page you are on, including the pages
 * under it: a post counts as Posts. Home only matches itself.
 */
export const NavLink: React.FC<{
  href: string;
  children: React.ReactNode;
  label?: string;
}> = ({ href, children, label }) => {
  const pathname = usePathname().replace(/\/$/, "") || "/";
  const active =
    href === "/"
      ? pathname === "/"
      : pathname === href || pathname.startsWith(`${href}/`);

  return (
    <Link
      href={href}
      aria-label={label}
      aria-current={active ? "page" : undefined}
      className={
        active
          ? "font-semibold text-accent underline decoration-2 underline-offset-4"
          : "hover:text-accent"
      }
    >
      {children}
    </Link>
  );
};
