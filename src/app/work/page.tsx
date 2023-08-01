import { Metadata } from "next";
import Image from "next/image";
import { metadata as StudentBaseMetaData } from "./studentbase/page";
import { metadata as PipoMetaData } from "./pipo/page";
import { metadata as FutMetaData } from "./fut/page";
import { metadata as DragonSearchMetaData } from "./dragonsearch/page";
import { metadata as ConsiliaMetaData } from "./consilia/page";
import { metadata as ChiSunMobileAppMetaData } from "./chisunmobileapp/page";
import { metadata as BigTwoMetaData } from "./bigtwo/page";
import { ProjectMetaData } from "@/types/content";
import dayjs from "dayjs";
import React from "react";
import { ToggleFilteredProjects } from "./ToggleFilteredProjects";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Projects",
};

const projects: Array<{ slug: string; metadata: ProjectMetaData }> = [
  {
    slug: "studentbase",
    metadata: StudentBaseMetaData,
  },
  {
    slug: "pipo",
    metadata: PipoMetaData,
  },
  {
    slug: "fut",
    metadata: FutMetaData,
  },
  {
    slug: "dragonsearch",
    metadata: DragonSearchMetaData,
  },
  {
    slug: "consilia",
    metadata: ConsiliaMetaData,
  },
  {
    slug: "chisunmobileapp",
    metadata: ChiSunMobileAppMetaData,
  },
  {
    slug: "bigtwo",
    metadata: BigTwoMetaData,
  },
].sort((a, b) => b.metadata.date.getTime() - a.metadata.date.getTime());

const Projects: React.FC<{ showAll: boolean }> = ({ showAll }) => (
  <div className="grid grid-cols-[repeat(auto-fit,_minmax(150px,_1fr))] gap-6">
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
