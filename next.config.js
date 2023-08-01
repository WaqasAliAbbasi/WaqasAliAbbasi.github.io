const cp = require("child_process");
const GIT_COMMIT_SHA =
  process.env.NODE_ENV === "production"
    ? cp.execSync("git rev-parse --short HEAD", {
        cwd: __dirname,
        encoding: "utf8",
      })
    : "#ab1cde2";

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  images: {
    unoptimized: true,
  },
  experimental: {
    mdxRs: true,
  },
  env: {
    GIT_COMMIT_SHA: GIT_COMMIT_SHA,
  },
};

const withMDX = require("@next/mdx")();
module.exports = withMDX(nextConfig);
