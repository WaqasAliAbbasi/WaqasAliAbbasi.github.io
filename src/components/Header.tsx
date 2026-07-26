import React from "react";
import Image from "next/image";
import Link from "next/link";

import portrait from "@/assets/portrait.jpg";

import HomeIcon from "@heroicons/react/24/outline/HomeIcon";
import { ToggleTheme } from "./ToggleTheme";

export const Header: React.FC<{ siteTitle?: string }> = ({ siteTitle }) => {
  const navigationBar: { title: string; path: string }[] = [
    { title: "Projects", path: "/work" },
    { title: "Posts", path: "/posts" },
  ];

  return (
    <>
      <div className="flex flex-row justify-between items-center gap-3">
        <Link
          href="/"
          className="flex flex-row items-center gap-3 sm:gap-4 min-w-0"
        >
          <Image
            alt="Waqas Ali Portrait"
            src={portrait}
            className="inline-block h-12 w-12 sm:h-16 sm:w-16 shrink-0 rounded-full"
          />
          <h1 className="text-2xl font-bold leading-7 truncate sm:text-3xl sm:tracking-tight">
            Waqas Ali
          </h1>
        </Link>
        <ToggleTheme />
      </div>
      <div className="flex flex-row flex-wrap gap-x-2 items-center">
        <Link href="/">
          <HomeIcon className="w-4" />
        </Link>
        <span>|</span>
        <Link href="/assets/docs/resume.pdf" target="_blank">
          Resume
        </Link>
        {navigationBar.map(({ title, path }) => (
          <Link key={path} href={path}>
            {title}
          </Link>
        ))}
      </div>
    </>
  );
};
