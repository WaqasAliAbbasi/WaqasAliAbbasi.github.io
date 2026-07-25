import { execSync } from "child_process";
import type { NextConfig } from "next";
import createMDX from "@next/mdx";

const GIT_COMMIT_SHA =
  process.env.NODE_ENV === "production"
    ? execSync("git rev-parse --short HEAD", {
        cwd: __dirname,
        encoding: "utf8",
      }).trim()
    : "ab1cde2";
const GIT_COMMIT_DATE =
  process.env.NODE_ENV === "production"
    ? execSync('git log -1 --date="format:%d %B %Y" --format=%cd', {
        cwd: __dirname,
        encoding: "utf8",
      }).trim()
    : "26 July 2026";

const nextConfig: NextConfig = {
  output: "export",
  images: {
    unoptimized: true,
  },
  experimental: {
    mdxRs: true,
  },
  env: {
    GIT_COMMIT_SHA,
    GIT_COMMIT_DATE,
  },
};

const withMDX = createMDX();
export default withMDX(nextConfig);
