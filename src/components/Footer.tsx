import React from "react";
import Link from "next/link";
import RssIcon from "@heroicons/react/24/outline/RssIcon";
import { GITHUB_REPO_URL } from "@/lib/site";

export const Footer: React.FC<
  React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLHRElement>
> = ({ className = "", ...props }) => (
  <footer
    className={`flex flex-wrap mt-1 justify-center items-center text-center text-xs gap-x-1 ${className}`}
    {...props}
  >
    <Link href="/rss.xml" title="RSS Feed" className="flex">
      <RssIcon className="w-3" />
    </Link>
    <span className="text-gray-300 dark:text-gray-700">|</span>
    <span>Last Updated: {process.env.GIT_COMMIT_DATE}</span>
    <span className="text-gray-300 dark:text-gray-700">|</span>
    <Link
      href={`${GITHUB_REPO_URL}/commit/${process.env.GIT_COMMIT_SHA}`}
      target="_blank"
    >
      #{process.env.GIT_COMMIT_SHA}
    </Link>
  </footer>
);
