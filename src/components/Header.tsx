import React from "react";
import Image from "next/image";
import Link from "next/link";

import portrait from "@/assets/portrait.jpg";

import HomeIcon from "@heroicons/react/24/outline/HomeIcon";
import { ToggleTheme } from "./ToggleTheme";

export const Header: React.FC<{ siteTitle?: string }> = ({ siteTitle }) => {
  const navigationBar: { title: string; path: string }[] = [
    // { title: "Awards", path: "/achievements" },
    // { title: "Projects", path: "/work" },
    // { title: "Posts", path: "/posts" },
  ];

  return (
    <>
      <div className="flex flex-row justify-between items-center">
        <Link href="/" className="flex flex-row items-center gap-4">
          <Image
            alt="Waqas Ali Portrait"
            src={portrait}
            className="inline-block h-16 w-16 rounded-full"
          />
          <h1 className="text-2xl font-bold leading-7 sm:truncate sm:text-3xl sm:tracking-tight">
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
        <Link href="/assets/docs/resume.pdf" target="_blank">Resume</Link>
        {navigationBar.map(({ title, path }) => (
          <Link key={path} href={path}>
            {title}
          </Link>
        ))}
      </div>
    </>
  );
};
