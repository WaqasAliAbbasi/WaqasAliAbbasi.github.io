import { execSync } from "child_process";
import type { NextConfig } from "next";
import createMDX from "@next/mdx";

const git = (args: string) =>
  execSync(`git ${args}`, { cwd: __dirname, encoding: "utf8" }).trim();

const production = process.env.NODE_ENV === "production";

const GIT_COMMIT_SHA = production ? git("rev-parse --short HEAD") : "ab1cde2";
const GIT_COMMIT_DATE = production
  ? git('log -1 --date="format:%d %B %Y" --format=%cd')
  : "26 July 2026";
/**
 * When the career entries last changed, for the sitemap. Empty while the file
 * has no commit yet, in which case the build itself is the best answer.
 */
const CAREER_UPDATED =
  (production && git("log -1 --format=%cI -- src/content/career.ts")) ||
  new Date().toISOString();

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
    CAREER_UPDATED,
  },
};

const withMDX = createMDX();
export default withMDX(nextConfig);
