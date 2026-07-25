import { Metadata } from "next";
import Image from "next/image";
import dayjs from "dayjs";
import React from "react";
import { ToggleFilteredProjects } from "./ToggleFilteredProjects";
import Link from "next/link";
import { projects } from "@/content/projects";

export const metadata: Metadata = {
  title: "Projects",
};

const Projects: React.FC<{ showAll: boolean }> = ({ showAll }) => (
  <div className="grid grid-cols-[repeat(auto-fit,minmax(150px,1fr))] gap-6">
    {projects
      .filter(({ metadata: { highlight } }) => showAll || !!highlight)
      .map(({ slug, metadata: { title, image, date, description } }) => (
        <Link key={slug} href={`/work/${slug}`}>
          <div>
            <Image src={image} alt={title} className="h-24 object-cover	" />
            <h3 className="font-bold mt-2">{title}</h3>
            <p className="text-xs">{dayjs(date).format("MMMM D, YYYY")}</p>
            <p className="text-xs mt-1 line-clamp-4">{description}</p>
          </div>
        </Link>
      ))}
  </div>
);

export default function Page() {
  return (
    <div className="flex flex-col gap-4">
      <ToggleFilteredProjects
        HighlightProjects={<Projects showAll={false} />}
        AllProjects={<Projects showAll />}
      />
    </div>
  );
}
